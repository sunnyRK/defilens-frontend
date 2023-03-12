import React, { useState } from "react";
import {
  Button,
  Comment,
  Form,
  Icon,
  Modal,
  TextArea,
} from "semantic-ui-react";
import { useCreateComment } from "../../lib/hooks/feedHook/usePostComment";
import { usePublicationsQuery } from "../../query/graphql/generated";
import { formatDate } from "../../utils/helper";
import { toast } from "react-toastify";

const exampleReducer = (state: any, action: any) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
};

export default function Comments(comment: any, index: any) {
  const { mutateAsync: createComment } = useCreateComment();
  const [commentLoading, setCommentLoading] = useState(false);
  const [reply, setReply] = useState("");
  console.log("root-comment: ", comment);

  const {
    isLoading,
    error,
    data: comments,
  } = usePublicationsQuery({
    request: {
      commentsOf: comment.comment.id,
      limit: 10,
    },
  });
  console.log("comments-replies", comments);

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  const handleChange = (e: any, value: any) => {
    setReply(value.value.toString());
  };

  const handleComment = async (e: any, data: any) => {
    try {
      console.log("handleComment", data);
      setCommentLoading(true);
      await createComment(data);
      setCommentLoading(false);
      toast.success(`Commented successfully.`);
    } catch (error) {
      console.log("handleComment-error", error);
      setCommentLoading(false);
      dispatch({ type: "CLOSE_MODAL" });
      toast.error("Something Went wrong for comment!!");
    }
  };

  return (
    <>
      {comment && (
        <div>
          <Comment.Group threaded>
            <Comment>
              <Comment.Avatar
                src={`https://ipfs.io/ipfs/${
                  comment.comment.profile.picture.original.url.split("//")[1]
                }`}
              />
              <Comment.Content>
                <Comment.Author as="a">
                  {comment.comment.metadata.name}
                </Comment.Author>
                <Comment.Metadata>
                  <div>{formatDate(comment.comment.createdAt)}</div>
                </Comment.Metadata>
                <Comment.Text>{comment.comment.metadata.content}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action
                    onClick={() =>
                      dispatch({
                        type: "OPEN_MODAL",
                        dimmer: "blurring",
                      })
                    }
                  >
                    {comment.comment.stats.totalAmountOfComments}{" "}
                    <Icon style={{ marginLeft: "5px" }} name="comment" />
                  </Comment.Action>
                </Comment.Actions>
              </Comment.Content>
              {comments && (
                <Comment.Group>
                  <Comment>
                    {isLoading ? (
                      <div>Loading Comments Reply...</div>
                    ) : (
                      // Iterate over the items in the publications array
                      comments &&
                      comments.publications.items.map((comment: any) => (
                        <>
                          {/* <CommentsThread comment={comment} key={comment.id} /> */}
                          <Comment.Avatar
                            src={`https://ipfs.io/ipfs/${
                              comment.profile.picture.original.url.split(
                                "//"
                              )[1]
                            }`}
                          />
                          <Comment.Content>
                            <Comment.Author as="a">
                              {comment.metadata.name}
                            </Comment.Author>
                            {/* <Comment.Metadata>
                                  <div>{comment.createdAt}</div>
                                </Comment.Metadata> */}
                            <Comment.Text>
                              {comment.metadata.content}
                            </Comment.Text>
                            <Comment.Actions>
                              <a>{formatDate(comment.createdAt)}</a>
                            </Comment.Actions>
                          </Comment.Content>
                        </>
                      ))
                    )}
                  </Comment>
                </Comment.Group>
              )}
            </Comment>
          </Comment.Group>

          <Modal
            dimmer={dimmer}
            open={open}
            onClose={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            <Modal.Header>Comment Reply...</Modal.Header>
            <Modal.Content>
              {/* <div>
                {isLoading ? (
                  <div>Loading Comments Reply...</div>
                ) : (
                  // Iterate over the items in the publications array
                  comments &&
                  comments.publications.items.map((comment: any) => (
                    <CommentsThread comment={comment} key={comment.id} />
                  ))
                )}
              </div> */}

              <Modal.Actions>
                <Form>
                  <TextArea
                    placeholder="What's your suggestions?"
                    onChange={handleChange}
                    style={{ marginBottom: "10px" }}
                  />
                  <div>
                    <Button
                      color="black"
                      loading={commentLoading}
                      onClick={async (e) => {
                        await handleComment(e, {
                          pubId: comment.comment.id,
                          comment: reply,
                          image: null,
                          date: Math.floor(Date.now() / 1000).toString(),
                        });
                        return dispatch({ type: "CLOSE_MODAL" });
                      }}
                    >
                      <Icon name="comment" />
                      Comment
                    </Button>

                    <Button
                      color="red"
                      onClick={async () => {
                        return dispatch({ type: "CLOSE_MODAL" });
                      }}
                    >
                      <Icon name="cancel" />
                      Cancel
                    </Button>
                  </div>
                </Form>
              </Modal.Actions>
            </Modal.Content>
          </Modal>
        </div>
      )}
    </>
  );
}
