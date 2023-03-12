export type QueryProps = {
  queryKey: any;
  apiUrl: any;
  query: any;
  user: any;
};

export type CommonSchema = {
  queryKey: any;
  apiUrl: any;
  query: any;
  user: any;
};

export type CreateComment = {
  pubId: string;
  comment: string;
  image?: File | null;
  date: string;
};

export type lensCommonSchema = {
  image?: string;
  description: string;
  content: string;
  name: string;
  defiData: any;
  attributes?: any[];
};
