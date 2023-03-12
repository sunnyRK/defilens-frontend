import React, { useState } from "react";
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
} from "semantic-ui-react";
import { toast } from "react-toastify";
import { formatUrl } from "../../utils/helper";
import zapIn_deposit_abi from "../apps/aave/aaveV2Matic/abis/zapIn_deposit.json";
import { ZapIn_AAVE_V2_Deposit_Matic } from "../apps/aave/aaveV2Matic/helpers/constants";
import { getProvider } from "../../utils/helper";

type Props = {
  publication: ExplorePublicationsQuery["explorePublications"]["items"][0];
};

export default function NewsFeed({ publication }: Props) {
  const { mutateAsync: createComment } = useCreateComment();
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
  console.log("publication==", publication);

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

  const handleCopyTrade = async (e: any, data: any) => {
    try {
      
    } catch (error) {
      console.log("handleCopyTrade-error", error);
    }
  }


  return (
    <>
      <div style={{ margin: "0px" }}>
        <Card style={{ width: "auto" }}>
          <Card.Content>
            {/* <Comment.Group>
              <Comment>
                <Comment.Avatar
                  src={
                    //  @ts-ignore
                    `https://ipfs.io/ipfs/${
                      formatUrl(publication?.profile?.picture?.original?.url)[1]
                    }` || ""
                  }
                />
                <Comment.Content>
                  <Comment.Author as="a">
                    {publication.profile.handle}
                  </Comment.Author>
                  <Comment.Metadata>
                    <div>{formatDate(publication.createdAt)}</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <a
                      href={`https://polygonscan.com/tx/${publication.metadata.attributes[publication.metadata.attributes.length - 1].value}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Tx
                    </a>
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            </Comment.Group> */}

            <Card.Description>
              {/* Message */}

              <Divider horizontal>
                <Header as="h4">
                  <Icon name="tag" />
                  Token Events
                </Header>
              </Divider>

              <Table definition>
                <Table.Body>
                  {publication.metadata.attributes &&
                    publication.metadata.attributes
                      .slice(5, publication.metadata.attributes.length - 1)
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
              </Table>
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
            <div className="ui two buttons">
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
            </div>
          </Card.Content>

          <Card.Content>
            <Button
              style={{ marginLeft: "2px" }}
              basic
              loading={mirrorLoading}
              color="grey"
              onClick={async (e) => {
                return await handleCopyTrade(e, publication.id);
              }}
            >
              <Icon name="copy" />
              Copy Trade
            </Button>
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
