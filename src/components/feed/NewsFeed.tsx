import React, { useEffect, useState } from "react";
import {
  ExplorePublicationsQuery,
  usePublicationsQuery,
} from "../../query/graphql/generated";
import { useCreateComment } from "../../lib/hooks/feedHook/usePostComment";
import { useLike } from "../../lib/hooks/feedHook/useLike";
import { useNewMirror } from "../../lib/hooks/feedHook/useNewMirror";
import { useCollect } from "../../lib/hooks/feedHook/useCollect";
import useLensUser from "../../lib/auth/useLensUser";
import Comments from "./Comments";
import {
  Card,
  Icon,
  Label,
  Comment,
  Header,
  Form,
  TextArea,
  Divider,
  Table,
  Button,
  List,
  Image,
  Message,
} from "semantic-ui-react";
import { toast } from "react-toastify";
import { formatUrl, Network } from "../../utils/helper";
import zapIn_deposit_abi from "../apps/aave/aaveV2Matic/abis/zapIn_deposit.json";
import { ZapIn_AAVE_V2_Deposit_Matic } from "../apps/aave/aaveV2Matic/helpers/constants";
import { getProvider } from "../../utils/helper";
import { getEvent, getContractByTxHash } from "../../lib/events";
// import { getDsa } from "../../lib/dsa/dsa";
import { useAddress, useSDK, useSigner } from "@thirdweb-dev/react";
import { add } from "lodash";
import {
  getMethodDataFromTx,
  getMethodDataFromTx2,
  getNewEvent,
} from "../../lib/demo_events";
import web3 from "web3";
import { BigNumber, ethers } from "ethers";
import { useSocialTrade } from "../../lib/hooks/socialTrade/useSocialTrade";
import { parseEther } from "ethers/lib/utils";
// import { BigNumber } from "bignumber.js";
import amdai from "../../../assets/images/amdai.png";
import Link from "next/link";

type Props = {
  publication: ExplorePublicationsQuery["explorePublications"]["items"][0];
};

const aaveDepositAbi = [
  "function deposit(address asset, uint256 amount, address onBehalfOf, uint16 referralCode)",
];

const aaveWithdrawAbi = [
  "function withdraw(address asset, uint256 amount, address to)",
];

export default function NewsFeed({ publication }: Props) {
  const address = useAddress(); // Detect the connected address
  const sdk = useSDK();
  const signer = useSigner();

  const { mutateAsync: createComment } = useCreateComment();
  const { mutateAsync: doSocialTrade } = useSocialTrade();

  const [comment, setComment] = useState("");
  const [collectLoading, setCollectLoading] = useState(false);
  const [mirrorLoading, setMiirrorLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);

  // const [erc20s, setErc20] = useState<Array<string[]>>();
  const [image, setImage] = useState<File | null>(null);
  const { isSignedInQuery, profileQuery } = useLensUser();
  const { mutateAsync: like } = useLike();
  const { mutateAsync: createMirror } = useNewMirror();
  const { mutateAsync: createCollect } = useCollect();
  // console.log("signer==", signer);

  // fetch comment for publication
  const {
    isLoading,
    error,
    data: comments,
  } = usePublicationsQuery({
    request: {
      commentsOf: publication.id,
      limit: 10,
    },
  });

  const handleChange = (e: any, value: any) => {
    setComment(value.value.toString());
  };
  const clearCommentText = () => {
    setComment("");
  };

  const handleCollect = async (e: any, pubId: any) => {
    try {
      console.log("handleCollect", pubId);
      setCollectLoading(true);
      await createCollect(pubId);
      setCollectLoading(false);
      toast.success(`Collected successfully.`);
    } catch (error) {
      console.log("handleCollect-error", error);
      setCollectLoading(false);
      toast.error("Something Went wrong for collect!!");
    }
  };

  const handleMirror = async (e: any, pubId: any) => {
    try {
      console.log("handleMirror", pubId);
      setMiirrorLoading(true);
      await createMirror(pubId);
      setMiirrorLoading(false);
      toast.success(`Mirrored successfully.`);
    } catch (error) {
      console.log("handleMirror-error", error);
      setMiirrorLoading(false);
      toast.error("Something Went wrong for mirror!!");
    }
  };

  const handleComment = async (e: any, data: any) => {
    try {
      console.log("handleComment", data);
      setCommentLoading(true);
      await createComment(data);
      setCommentLoading(false);
      clearCommentText();
      toast.success(`Commented successfully.`);
    } catch (error) {
      console.log("handleComment-error", error);
      setCommentLoading(false);
      toast.error("Something Went wrong for comment!!");
    }
  };

  const makeInput = async () => {
    try {
      const value = publication.metadata.attributes[6].value;
      const decimal = publication.metadata.attributes[9].value;
      const action = publication.metadata.attributes[4].value;

      if (!value) return;

      const resetData = parseEther(value);
      const amount = BigNumber.from(resetData)
        .mul(BigNumber.from(10).pow(BigNumber.from(decimal)))
        .div(parseEther("1"));
      console.log("amount", amount.toString());

      if (action == "Deposit") {
        const tokenAddress = publication.metadata.attributes[5].value;
        return [[tokenAddress, amount, address, 0], "deposit", aaveDepositAbi];
      } else if (action === "RedeemUnderlying") {
        const tokenAddress = publication.metadata.attributes[10].value;
        return [[tokenAddress, amount, address], "withdraw", aaveWithdrawAbi];
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleCopyTrade = async (
    e: any,
    network: any,
    txHash: any,
    methodName: any
  ) => {
    try {
      console.log("handleCopyTrade", txHash, methodName);
      // if (address) {
      //   await getDsa(address);
      // }
      // console.log('handleCopyTrade-address', address);

      // Network
      // Provider
      // Contract Address and Instance
      // ABI
      // Method Name
      // Params

      if (network == Network.POLYGON_MAINNET) {
        // console.log('event-network-1', network);
        const reciept: any = await getNewEvent("polygon", txHash);
        // await getMethodDataFromTx2(signer, txHash, reciept);
        console.log("reciept", reciept.to);

        const callDataInput = await makeInput();
        await doSocialTrade({ calldata: callDataInput, to: reciept.to });
      } else if (network == Network.ETHEREUM_MAINNET) {
        console.log("event-network-2", network);
        // await getNewEvent("mainnet", txHash);
      } else if (network == Network.OPTIMISM_MAINNET) {
        console.log("event-network-3", network);
        // await getNewEvent("optimism", txHash);
      }
    } catch (error) {
      console.log("handleCopyTrade-error", error);
    }
  };

  const handleImage = async (): Promise<string> => {
    // if (tokenName == "WMATIC") {
    //   return "https://polygonscan.com/token/images/wMatic_32.png";
    // } else {
      return "https://polygonscan.com/token/images/wMatic_32.png";
    // }
  }

  return (
    <>
      <div style={{ margin: "0px" }}>
        {/* e6ffe6 */}
        {/* fff2f2 */}
        <Card
          style={{
            width: "auto",
            backgroundColor: `${
              publication.metadata.attributes[4].value == "Deposit"
                ? "#e6ffe6"
                : "#fff2f2"
            }`,
          }}
        >
          <Card.Content>
            <Card.Description>
              <Message info>
                <Message.Header>
                  {/* AppName */}
                  {publication.metadata.attributes[2] &&
                    publication.metadata.attributes[2].value}
                  {"-"}
                  {/* Version   */}
                  {publication.metadata.attributes[3] &&
                    publication.metadata.attributes[3].value}{" "}
                  {/* Action Tx */}
                  {publication.metadata.attributes[4] &&
                    publication.metadata.attributes[4].value}{" "}
                  {" ("}
                  {/* ChainName */}
                  {publication.metadata.attributes[0] &&
                    publication.metadata.attributes[0].value}
                  {" Chain)"}
                </Message.Header>
                <p>{publication.metadata.content}</p>
                {/* <span>{publication.metadata.description}</span> */}
              </Message>

              <Divider horizontal>
                <Header as="h4">
                  <Icon name="tag" />
                  Token Events
                </Header>
              </Divider>

              <List>
                
                <List.Item>
                  <Image
                    avatar
                    // src={amdai}
                    src="https://polygonscan.com/token/images/centre-usdc_32.png"
                  />
                  {/* <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024" alt="coin" /> */}
                  <List.Content>
                    <List.Header as="a">
                      <a
                        target="_blank"
                        href={`https://polygonscan.com/address/${publication.metadata.attributes[5].value}`}
                      >
                        {publication.metadata.attributes[8].value}
                      </a> <span style={{color: "black"}}>{" You give"}</span>
                    </List.Header>

                    <List.Description>
                      <Icon name="arrow right"></Icon>{" "}
                      <a>
                        <b>
                          <a
                            target="_blank"
                            href={`https://polygonscan.com/address/${publication.metadata.attributes[5].value}`}
                          >
                            {publication.metadata.attributes[8].value}
                          </a>
                          {" ("}
                          {publication.metadata.attributes[6].value}
                          {") "}
                        </b>
                      </a>
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <Image
                    avatar
                    src="https://polygonscan.com/token/images/amusdc.png"
                  />
                  {/* <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024" alt="coin" /> */}
                  <List.Content>
                    <List.Header as="a">
                      <a
                        target="_blank"
                        href={`https://polygonscan.com/address/${publication.metadata.attributes[10].value}`}
                      >
                        {publication.metadata.attributes[13].value}
                      </a> <span style={{color: "black"}}>{" You get"}</span>
                    </List.Header>

                    <List.Description>
                      <Icon name="arrow left"></Icon>{" "}
                      <a>
                        {/* <b>{publication.metadata.attributes[8].value}</b> */}
                        <b>
                          <a
                            target="_blank"
                            href={`https://polygonscan.com/address/${publication.metadata.attributes[10].value}`}
                          >
                            {publication.metadata.attributes[13].value}
                          </a>
                          {" ("}
                          {publication.metadata.attributes[11].value}
                          {") "}
                        </b>
                      </a>
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
              {/* 
              <Table definition>
                <Table.Body>
                  {publication.metadata.attributes &&
                    publication.metadata.attributes
                      .slice(5, publication.metadata.attributes.length - 2)
                      .map((attributes, index) => (
                        <Table.Row key={index}>
                          {attributes.traitType &&
                          attributes.traitType.indexOf("Tokens") >= 0 ? (
                            <>
                              <Table.Cell width={2}>
                                {attributes.traitType}
                              </Table.Cell>
                              <Table.Cell>{attributes.value}</Table.Cell>
                            </>
                          ) : (
                            <>
                              <Table.Cell width={2}>
                                {attributes.traitType}
                              </Table.Cell>
                              <Table.Cell>{attributes.value}</Table.Cell>
                            </>
                          )}
                        </Table.Row>
                      ))}
                </Table.Body>
              </Table> */}
            </Card.Description>
          </Card.Content>

          {/* <Card.Content>
            <Card.Description>

              {(publication.metadata.image ||
                publication.metadata.media?.length > 0) && (
                <Image
                  size="tiny"
                  verticalAlign="top"
                  // @ts-ignore
                  src={`https://ipfs.io/ipfs/${
                    formatUrl(publication.metadata.image)[1]
                  }`}
                />
              )}
            
            </Card.Description>
          </Card.Content> */}

          <Card.Content>
            <Card.Description>
              <Label>
                <Icon name="comment" />{" "}
                {publication.stats.totalAmountOfComments} Comments
              </Label>

              <Label>
                <Icon name="copy" /> {publication.stats.totalAmountOfCollects}{" "}
                Collects
              </Label>

              <Label>
                <Icon name="share" /> {publication.stats.totalAmountOfMirrors}{" "}
                Mirrors
              </Label>
            </Card.Description>
          </Card.Content>

          <Card.Content extra>
            <div className="ui three buttons">
              <Button
                style={{ marginRight: "2px" }}
                basic
                loading={collectLoading}
                color="red"
                onClick={async (e) => {
                  // return await createCollect(publication.id);
                  return await handleCollect(e, publication.id);
                }}
              >
                <Icon name="save" />
                Collect
              </Button>
              <Button
                style={{ marginLeft: "2px" }}
                basic
                loading={mirrorLoading}
                color="green"
                onClick={async (e) => {
                  // return await createMirror(publication.id);
                  return await handleMirror(e, publication.id);
                }}
              >
                <Icon name="share" />
                Mirror
              </Button>
              <Button
                style={{ marginLeft: "2px" }}
                basic
                loading={mirrorLoading}
                color="grey"
                onClick={async (e) => {
                  return await handleCopyTrade(
                    e,
                    publication.metadata.attributes[0].value,
                    publication.metadata.attributes[
                      publication.metadata.attributes.length - 1
                    ].value,
                    publication.metadata.attributes[
                      publication.metadata.attributes.length - 2
                    ].value
                  );
                }}
              >
                <Icon name="copy" />
                Copy Trade
              </Button>
            </div>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <div>
                <Form>
                  <TextArea
                    placeholder="What's your suggestion for this Tx?"
                    onChange={handleChange}
                    style={{ marginBottom: "10px" }}
                  />
                  <div>
                    {/* <Input
                      type="file"
                      style={{ margin: "10px", width: "auto" }}
                      onChange={(e) => {
                        if (e.target.files) {
                          setImage(e.target.files[0]);
                        }
                      }}
                    /> */}
                    <Button
                      color="black"
                      loading={commentLoading}
                      onClick={async (e) => {
                        return await handleComment(e, {
                          pubId: publication.id,
                          comment: comment,
                          image: image,
                          date: Math.floor(Date.now() / 1000).toString(),
                        });
                      }}
                    >
                      <Icon name="comment" />
                      Comment
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Description>
          </Card.Content>

          <Card.Content>
            <Card.Description>
              <Comment.Group>
                <Header as="h3" dividing>
                  Comments
                </Header>
              </Comment.Group>

              <div>
                {isLoading ? (
                  <div>Loading Comments...</div>
                ) : (
                  // Iterate over the items in the publications array
                  comments &&
                  comments.publications.items.map(
                    (comment: any, index: any) => (
                      <Comments
                        comment={comment}
                        index={index}
                        key={comment.id}
                      />
                    )
                  )
                )}
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}
