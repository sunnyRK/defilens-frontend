import React from "react";
import { Grid, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import styles from "../../styles/Header.module.css";
import useLensUser from "../../lib/auth/useLensUser";
import SignInButton from "../../components/common/SignInButton";
import Link from "next/link";

type Props = {
  children: JSX.Element;
};

export default function NewSideBar({ children }: Props) {
  const [visible, setVisible] = React.useState(false);
  const { isSignedInQuery, profileQuery } = useLensUser();

  return (
    <>
      <div>
        <Grid columns={1}>
          <Grid.Column>
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation="slide along"
                icon="labeled"
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={true}
                width="thin"
              >
                <div style={{ margin: "20px", color: "white" }}>
                  <Icon name="home" />
                  <Link href="/">DefiLens</Link>
                </div>
                <div style={{ margin: "20px", color: "white" }}>
                  <Icon name="user" />
                  <a
                    href={`/myprofile/${profileQuery.data?.defaultProfile?.handle}`}
                    className={styles.feedPostProfileName}
                  >
                    My Profile
                  </a>
                </div>
                <div style={{ margin: "20px", color: "white" }}>
                  <Icon name="user" />
                  <a
                    href={`/createprofile/create`}
                    className={styles.feedPostProfileName}
                  >
                    Create Profile
                  </a>
                </div>
              </Sidebar>

              <Sidebar.Pusher>
                <Segment>
                  <div
                    className={styles.right}
                    style={{
                      backgroundColor: "lightgrey",
                      width: "89%",
                      marginBottom: "10px",
                    }}
                  >
                    <div className={styles.child}>
                      <SignInButton />
                    </div>
                    <div
                      className={styles.child}
                      style={{
                        color: "black",
                        fontSize: "40px",
                        marginBottom: "13px",
                      }}
                    >
                      {profileQuery.data?.defaultProfile?.handle}
                    </div>
                  </div>
                  <div style={{ backgroundColor: "lightgrey", width: "89%" }}>
                    {children}
                  </div>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}
