export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export enum IAccess_Enum {
  Allowed = 'ALLOWED',
  Pendding = 'PENDDING'
}

export type ICreatePetInput = {
  age?: InputMaybe<Scalars['Int']>;
  breed?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  petImgUrl?: InputMaybe<Scalars['String']>;
};

export type ICreateStoreInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  bigDog?: InputMaybe<Scalars['Int']>;
  close?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  entranceFee?: InputMaybe<Scalars['Int']>;
  locationTag?: InputMaybe<Scalars['String']>;
  menuImg?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  open?: InputMaybe<Scalars['String']>;
  pet?: InputMaybe<Array<ICreatePetInput>>;
  phone?: InputMaybe<Scalars['String']>;
  smallDog?: InputMaybe<Scalars['Int']>;
  storeImage?: InputMaybe<Array<Scalars['String']>>;
  storeTag?: InputMaybe<Array<Scalars['String']>>;
};

export type ICreateUserInput = {
  businessLicenseImg?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  storeName?: InputMaybe<Scalars['String']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  checkValidToken: Scalars['String'];
  createAdim: IUser;
  createLocationTag: IStrLocationTag;
  createOwner: IUser;
  createResponse: IReviewResponse;
  createReview: IReview;
  createStore: IStore;
  createTag: IStoreTag;
  createUser: IUser;
  deleteLocationTag: Scalars['Boolean'];
  deleteProfile: Scalars['String'];
  deleteResponse: Scalars['Boolean'];
  deleteReview: Scalars['Boolean'];
  deleteStore: Scalars['Boolean'];
  deleteTag: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  getToken: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  togglepick: Scalars['Boolean'];
  updateLocationTag: IStrLocationTag;
  updateResponse: IReviewResponse;
  updateReview: IReview;
  updateStore: IStore;
  updateTag: IStoreTag;
  updateUser: IUser;
  updateUserPwd: Scalars['String'];
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCheckValidTokenArgs = {
  phone: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCreateAdimArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationCreateLocationTagArgs = {
  name: Scalars['String'];
};


export type IMutationCreateOwnerArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationCreateResponseArgs = {
  contents: Scalars['String'];
  reviewID: Scalars['String'];
};


export type IMutationCreateReviewArgs = {
  createReviewInput: ICreateReviewInput;
  storeID: Scalars['String'];
};


export type IMutationCreateStoreArgs = {
  createStoreInput: ICreateStoreInput;
};


export type IMutationCreateTagArgs = {
  name: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteLocationTagArgs = {
  name: Scalars['String'];
};


export type IMutationDeleteTagArgs = {
  name: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
};


export type IMutationGetTokenArgs = {
  phone: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationTogglepickArgs = {
  storeID: Scalars['String'];
};


export type IMutationUpdateLocationTagArgs = {
  after: Scalars['String'];
  before: Scalars['String'];
};


export type IMutationUpdateResponseArgs = {
  contents: Scalars['String'];
};


export type IMutationUpdateReviewArgs = {
  storeID: Scalars['String'];
  updateReviewInput: IUpdateReviewInput;
};


export type IMutationUpdateStoreArgs = {
  updateStoreInput: IUpdateStoreInput;
};


export type IMutationUpdateTagArgs = {
  after: Scalars['String'];
  before: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  email: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserPwdArgs = {
  email: Scalars['String'];
  updateUserPwdInput: Scalars['String'];
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};

export enum IPayment_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  impUid: Scalars['String'];
  paymentID: Scalars['String'];
  status: IPayment_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchLocationTags: Array<IStrLocationTag>;
  fetchReview: Array<IReviewResponse>;
  fetchStore: IStore;
  fetchStores: Array<IStore>;
  fetchStoresLocation: Array<IStore>;
  fetchStoresTag: Array<IStore>;
  fetchTags: Array<IStoreTag>;
  fetchUser: IUser;
  fetchUsers: Array<IUser>;
};


export type IQueryFetchStoreArgs = {
  storeID: Scalars['String'];
};


export type IQueryFetchStoresArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchStoresLocationArgs = {
  name: Scalars['String'];
};


export type IQueryFetchStoresTagArgs = {
  name: Scalars['String'];
};

export type IReview = {
  __typename?: 'Review';
  contents: Scalars['String'];
  rating: Scalars['Float'];
  reviewID: Scalars['String'];
  reviewRes: IReviewResponse;
  store: Array<IStore>;
  user: Array<IUser>;
};

export type IReviewResponse = {
  __typename?: 'ReviewResponse';
  contents: Scalars['String'];
  review: IReview;
  reviewResID: Scalars['String'];
  user: Array<IUser>;
};

export type IStore = {
  __typename?: 'Store';
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  avgRating: Scalars['Float'];
  bigDog: Scalars['Int'];
  close: Scalars['String'];
  description: Scalars['String'];
  entranceFee: Scalars['Int'];
  locationTag: IStrLocationTag;
  menuImg: Scalars['String'];
  name: Scalars['String'];
  open: Scalars['String'];
  phone: Scalars['String'];
  smallDog: Scalars['Int'];
  storeID: Scalars['String'];
  storeTag: Array<IStoreTag>;
  user: IUser;
};

export type IStoreTag = {
  __typename?: 'StoreTag';
  name: Scalars['String'];
  store: Array<IStore>;
  tagID: Scalars['String'];
};

export type IStrLocationTag = {
  __typename?: 'StrLocationTag';
  locationTagID: Scalars['String'];
  name: Scalars['String'];
};

export enum IUser_Role_Enum {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  Owner = 'OWNER'
}

export type IUpdateStoreInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  bigDog?: InputMaybe<Scalars['Int']>;
  close?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  entranceFee?: InputMaybe<Scalars['Int']>;
  locationTag?: InputMaybe<Scalars['String']>;
  menuImg?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  open?: InputMaybe<Scalars['String']>;
  petInput?: InputMaybe<Array<IUpdatePetInput>>;
  phone?: InputMaybe<Scalars['String']>;
  smallDog?: InputMaybe<Scalars['Int']>;
  storeImage?: InputMaybe<Array<Scalars['String']>>;
  storeTag?: InputMaybe<Array<Scalars['String']>>;
};

export type IUpdateUserInput = {
  businessLicenseImg?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  point?: InputMaybe<Scalars['Int']>;
  profileImgUrl?: InputMaybe<Scalars['String']>;
  storeName?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  access: IAccess_Enum;
  businessLicenseImg: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  point: Scalars['Int'];
  profileImgUrl: Scalars['String'];
  role: IUser_Role_Enum;
  storeName: Scalars['String'];
  userID: Scalars['String'];
};

export type ICreateReviewInput = {
  contents: Scalars['String'];
  rating: Scalars['Float'];
};

export type IUpdatePetInput = {
  age?: InputMaybe<Scalars['Int']>;
  breed?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  petImgUrl?: InputMaybe<Scalars['String']>;
};

export type IUpdateReviewInput = {
  contents?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
};
