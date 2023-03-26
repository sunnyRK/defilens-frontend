import { useEffect, useState } from "react";
import NewsFeed from "../components/feed/NewsFeed";
import {
  PublicationTypes,
  usePublicationsQuery,
  useExplorePublicationsQuery,
  PublicationSortCriteria,
  useExploreFeedQuery,
  CustomFiltersTypes,
  PublicationsQuery,
} from "../query/graphql/generated";
import styles from "../styles/Home.module.css";
import { formatDate, formatUrl, Network } from "../utils/helper";
import {
  Accordion,
  Icon,
  Message,
  Comment,
  Button,
  List,
  Image,
} from "semantic-ui-react";
import useLensUser from "../lib/auth/useLensUser";
import { url } from "inspector";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { isSignedInQuery, profileQuery } = useLensUser();

  const request = {
    sortCriteria: PublicationSortCriteria.Latest,
    publicationTypes: [PublicationTypes.Post],
    sources: ["defilens-demo-3"],
    limit: 50,
  };

  // const { isLoading, error, data, fetchStatus } =
  //   useExplorePublicationsQuery(
  //     {
  //       request,
  //     },
  //     {
  //       // Don't refetch the user comes back
  //       refetchOnWindowFocus: false,
  //       refetchOnReconnect: false,
  //     }
  //   );
  // console.log("data", data, fetchStatus);

  const {
    isLoading,
    error,
    data: data,
  } = usePublicationsQuery({
    request: {
      profileIds: profileQuery.data?.defaultProfile?.id,
      publicationTypes: [PublicationTypes.Post],
      limit: 10,
      sources: ["defilens-demo-3"],
      // metadata: {
      //   tags: {
      //     oneOf: ["check_deposit", "check_deposit2"],
      //   },
      // },
    },
  });
  console.log("data", data);

  if (error) {
    return <div className={styles.container}>Error...</div>;
  }

  if (isLoading) {
    return <div className={styles.container}>Loading...</div>;
  }

  const handleClick = (e: any, index: any) => {
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const handleTxLink = (tx: any, network: any) => {
    if (network == Network.POLYGON_MAINNET) {
      return `https://polygonscan.com/tx/${tx}`;
    } else if (network == Network.ETHEREUM_MAINNET) {
      return `https://etherscan.io/tx/${tx}`;
    }
    return "https://etherscan.io/tx/";
  };

  const makeURL = (url: any) => {
    console.log("formatUrl(url)[1]", formatUrl(url)[1]);
    // return `https://ipfs.io/ipfs/${formatUrl(url)[1]}` || "";
    return formatUrl(url)[1];
  };

  return (
    <div className={styles.container}>
      <div className={styles.postsContainer}>
        {data?.publications.items.map((publication, index) => (
          <Accordion styled key={index} style={{ margin: "20px" }}>
            <Accordion.Title
              active={activeIndex === index}
              index={index}
              onClick={(e: any) => handleClick(e, index)}
            >
              <Comment.Group>
                <Comment>
                  <Comment.Avatar
                    //  @ts-ignore
                    src={`https://${makeURL(publication?.profile?.picture?.original?.url)}`}
                  />
                  <Comment.Content>
                    <Comment.Author as="a">
                      {publication.profile.handle}
                    </Comment.Author>
                    <Comment.Metadata>
                      <div>{formatDate(publication.createdAt)}</div>
                      <div>
                        {" "}
                        <Icon name="dropdown" />
                      </div>
                    </Comment.Metadata>
                    <Comment.Text>
                      <a
                        href={handleTxLink(
                          publication.metadata.attributes[
                            publication.metadata.attributes.length - 1
                          ].value,
                          publication.metadata.attributes[0].value
                        )}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Tx
                      </a>
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Accordion.Title>
            <div style={{ padding: "0em 1em 0.5em" }}>
              <NewsFeed publication={publication} key={publication.id} />
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
