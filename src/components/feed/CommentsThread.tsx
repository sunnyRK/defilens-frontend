import React from "react";
import { Comment } from "semantic-ui-react";

export default function CommentsThread(comment: any) {
  console.log("comments-reply-CommentsThread: ", comment);
  return (
    <>
      {comment && (
        <div style={{ marginTop: "10px" }}>
          <Comment.Group>
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
                  <div>{comment.comment.createdAt}</div>
                </Comment.Metadata>
                <Comment.Text>{comment.comment.metadata.content}</Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </div>
      )}
    </>
  );
}
