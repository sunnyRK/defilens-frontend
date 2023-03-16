import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { useProfileQuery } from "../../query/graphql/generated";
import { useCreateProfile } from "../../lib/hooks/profile/useCreateProfile";
// import { useSetProfile } from "../../lib/hooks/profile/useSetProfile";
import useLensUser from "../../lib/auth/useLensUser";
import { BigNumber } from "ethers";

type Props = {};

export default function CreateProfile() {
  const [handle, setHandle] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const { mutateAsync: createProfile } = useCreateProfile();
  //   const { mutateAsync: setProfile } = useSetProfile();
  const { profileQuery } = useLensUser();
  // console.log('profileQuery+++++', profileQuery);

  const handleInput = (e: any, value: any) => {
    setHandle(value);
  };

  return (
    <>
      <div style={{ margin: "20px", backgroundColor: "white" }}>
        <Form style={{ padding: "20px" }}>
          <Form.Field style={{ margin: "20px" }}>
            <label>Choose your handle</label>
            <Input
              type="text"
              label="Write Here"
              onChange={(e) => {
                handleInput(e, e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field style={{ margin: "20px" }}>
            <label>Choose your avatar</label>
            <Input
              type="file"
              label="Select your avatar here"
              onChange={(e) => {
                if (e.target.files) {
                  setProfilePic(e.target.files[0]);
                }
              }}
            />
          </Form.Field>
          <Button
            type="submit"
            style={{ margin: "20px" }}
            onClick={async (e) => {
              if (profileQuery.data?.defaultProfile?.id) {
                const profileId: any = profileQuery.data?.defaultProfile?.id;
                const handle: any = profileQuery.data?.defaultProfile?.handle;
                return alert(
                  "Already your profile exist as a " +
                    handle +
                    ". And id is " +
                    BigNumber.from(profileId).toString()
                );
              }
              if (!handle) {
                return alert("please choose your handle.");
              }
              if (!profilePic) {
                return alert("please choose your avatar.");
              }
              return await createProfile({
                handleName: handle,
                profilePictureUri: profilePic,
              });
              // return await setProfile();
            }}
          >
            Create Profile
          </Button>
        </Form>
      </div>
    </>
  );
}
