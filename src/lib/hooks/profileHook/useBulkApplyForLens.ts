export const bulk = 1;
// import { useMutation } from "@tanstack/react-query";
// import { useSDK, useStorageUpload, useSigner } from "@thirdweb-dev/react";
// import {
//   PublicationMainFocus,
//   useCreatePostTypedDataMutation,
// } from "../../../query/graphql/generated";
// import useLensUser from "../../auth/useLensUser";
// import {
//   signTypedDataWithOmmittedTypename,
//   splitSignature,
// } from "../../helpers";
// import { v4 as uuidv4 } from "uuid";
// import {
//   LENS_CONTRACT_ABI,
//   LENS_CONTRACT_ADDRESS,
// } from "../../../utils/contracts";
// import useLogin from "../../auth/useLogin";
// import { ethers } from "ethers";
// import { pollUntilIndexed } from "../../indexing/tx_index";
// import { lensCommonSchema, lensCommonSchemaArray } from "../../../types";
// import {
//   Collect_Module,
//   ReferenceModuleInitData,
//   Reference_Module,
//   Smart_Contract_Wallet,
//   ZERO_BYTES,
// } from "../../../utils/constants";
// import ScwAbi from "../../../abis/scw.json";
// import { HasTxHashBeenIndexedDocument } from "@lens-protocol/api-bindings";

// import BigNumber from "bignumber.js";

// export function useBulkApplyForLens() {
//   const { mutateAsync: requestTypedData } = useCreatePostTypedDataMutation();
//   const { mutateAsync: uploadToIpfs } = useStorageUpload();
//   const { profileQuery } = useLensUser();
//   const { mutateAsync: loginUser } = useLogin();
//   const sdk = useSDK();
//   const signer = useSigner();

//   async function bulkApplyForLens(
//     commonData: lensCommonSchemaArray
//   ): Promise<void> {
//     // 0. Login
//     await loginUser();

//     console.log("lensCommonSchemaData-Bulk-commonData", commonData);
//     const contentURIs: any = [];
//     for (let i = 0; i < commonData.length; i++) {
//       let imageIpfsUrl = commonData[i].image;
//       // if (commonData.image) {
//       //   imageIpfsUrl = (await uploadToIpfs({ data: [commonData.image] }))[0];
//       // }
//       console.log("lensCommonSchemaData-commonData[i]", commonData[i]);
//       const postMetadata = {
//         version: "2.0.0",
//         mainContentFocus: PublicationMainFocus.TextOnly,
//         metadata_id: uuidv4(),
//         description: commonData[i].description,
//         locale: "en-US",
//         content: commonData[i].content,
//         external_url: null,
//         image: imageIpfsUrl,
//         imageMimeType: null,
//         name: commonData[i].name,
//         attributes: commonData[i].attributes,
//         tags: [],
//         appId: "defilens",
//         createdOn: new Date(),
//         media: [],
//       };
//       const postMetadataIpfsUrl = (
//         await uploadToIpfs({ data: [postMetadata] })
//       )[0];

//       const jsonData = {
//         profileId: BigNumber(profileQuery.data?.defaultProfile?.id).toNumber(),
//         contentURI: postMetadataIpfsUrl,
//         collectModule: Collect_Module,
//         collectModuleInitData: ZERO_BYTES,
//         referenceModule: Reference_Module,
//         referenceModuleInitData: ReferenceModuleInitData,
//       };
//       contentURIs.push(jsonData);
//     }

//     console.log("lensCommonSchemaData-contentURIs:", contentURIs);

//     // let imageIpfsUrl = commonData.image;
//     // // if (commonData.image) {
//     // //   imageIpfsUrl = (await uploadToIpfs({ data: [commonData.image] }))[0];
//     // // }

//     // const postMetadata = {
//     //   version: "2.0.0",
//     //   mainContentFocus: PublicationMainFocus.TextOnly,
//     //   metadata_id: uuidv4(),
//     //   description: commonData.description,
//     //   locale: "en-US",
//     //   content: commonData.content,
//     //   external_url: null,
//     //   image: imageIpfsUrl,
//     //   imageMimeType: null,
//     //   name: commonData.name,
//     //   attributes: commonData.attributes,
//     //   tags: [],
//     //   appId: "defilens",
//     //   createdOn: new Date(),
//     //   media: [],
//     // };

//     // const postMetadataIpfsUrl = (
//     //   await uploadToIpfs({ data: [postMetadata] })
//     // )[0];

//     // // 1. Ask Lens to give us the typed data
//     // const typedData = await requestTypedData({
//     //   request: {
//     //     collectModule: {
//     //       freeCollectModule: {
//     //         followerOnly: false,
//     //       },
//     //     },
//     //     referenceModule: {
//     //       followerOnlyReferenceModule: false,
//     //     },
//     //     contentURI: postMetadataIpfsUrl,
//     //     profileId: profileQuery.data?.defaultProfile?.id,
//     //   },
//     // });

//     // const { domain, types, value } = typedData.createPostTypedData.typedData;

//     // if (!sdk) return;

//     // // 2. Sign the typed data
//     // const signature = await signTypedDataWithOmmittedTypename(
//     //   sdk,
//     //   domain,
//     //   types,
//     //   value
//     // );
//     // const { v, r, s } = splitSignature(signature.signature);

//     // const lensHubContract = new ethers.Contract(
//     //   LENS_CONTRACT_ADDRESS,
//     //   LENS_CONTRACT_ABI,
//     //   signer
//     // );

//     const SmartContractWallet = new ethers.Contract(
//       Smart_Contract_Wallet,
//       ScwAbi,
//       signer
//     );

//     try {
//       let LensInterface = new ethers.utils.Interface(LENS_CONTRACT_ABI);
//       const tx = await SmartContractWallet.execBatch(
//         [LENS_CONTRACT_ADDRESS],
//         [
//           LensInterface.encodeFunctionData("post", [
//             {
//               profileId: BigNumber(
//                 profileQuery.data?.defaultProfile?.id
//               ).toNumber(),
//               contentURI: contentURIs[0].contentURI,
//               collectModule: Collect_Module,
//               collectModuleInitData: ZERO_BYTES,
//               referenceModule: Reference_Module,
//               referenceModuleInitData: ReferenceModuleInitData,
//             },
//           ]),
//         ]
//       );

//       await tx.wait();
//       console.log("tx.hash: ", tx.hash);

//       // const hasTxHashBeenIndexed = await client.query({
//       //   query: HasTxHashBeenIndexedDocument,
//       //   variables: {
//       //     request: {
//       //       txHash: tx.hash
//       //     }
//       //   },
//       //   fetchPolicy: 'network-only',
//       // });

//       // console.log('HasTxHashBeenIndexed: ', hasTxHashBeenIndexed);
//       // console.log(`successfully posted on lens`)
//     } catch (err) {
//       console.log("error: ", err);
//     }

//     // // Destructure the stuff we need out of the typedData.value field
//     // const {
//     //   collectModule,
//     //   collectModuleInitData,
//     //   contentURI,
//     //   deadline,
//     //   profileId,
//     //   referenceModule,
//     //   referenceModuleInitData,
//     // } = typedData.createPostTypedData.typedData.value;

//     // const tx = await lensHubContract.postWithSig({
//     //   profileId: profileId,
//     //   contentURI: contentURI,
//     //   collectModule,
//     //   collectModuleInitData,
//     //   referenceModule,
//     //   referenceModuleInitData,
//     //   sig: {
//     //     v,
//     //     r,
//     //     s,
//     //     deadline: deadline,
//     //   },
//     // });
//     // console.log("create post: tx hash", tx, tx.hash);
//     // await tx.wait();
//     // console.log("create post: poll until indexed");
//     // const indexedResult = await pollUntilIndexed({ txHash: tx.hash });

//     // console.log("create post: profile has been indexed", indexedResult);
//   }

//   return useMutation(bulkApplyForLens);
// }
