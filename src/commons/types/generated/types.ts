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

export type ICreateReservationInput = {
  amount?: InputMaybe<Scalars['Int']>;
  members?: InputMaybe<Scalars['Int']>;
  pets?: InputMaybe<Scalars['Int']>;
};

export type ICreateReviewInput = {
  contents: Scalars['String'];
  rating: Scalars['Float'];
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
  storeImg?: InputMaybe<Array<Scalars['String']>>;
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

export type IIncome = {
  __typename?: 'Income';
  cancelNum: Scalars['Int'];
  date: Scalars['Int'];
  incomeID: Scalars['String'];
  paymentNum: Scalars['Int'];
  store: IStore;
  totalCash: Scalars['Int'];
};

export type IMutation = {
  __typename?: 'Mutation';
  cancelPayment: IPayment;
  cancelReservation: Scalars['Boolean'];
  checkNickname: Scalars['Boolean'];
  checkValidToken: Scalars['String'];
  createAdim: IUser;
  createLocationTag: IStrLocationTag;
  createOwner: IUser;
  createPayment: IPayment;
  createReservation: IReservation;
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
  getTokenEmail: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  togglePick: Scalars['Boolean'];
  updateLocationTag: IStrLocationTag;
  updateResponse: IReviewResponse;
  updateReview: IReview;
  updateStore: IStore;
  updateTag: IStoreTag;
  updateUser: IUser;
  updateUserPwd: Scalars['String'];
  uploadFile: Array<Scalars['String']>;
  usePoint: Scalars['Boolean'];
};


export type IMutationCancelPaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
  reason: Scalars['String'];
};


export type IMutationCancelReservationArgs = {
  date: Scalars['String'];
  storeID: Scalars['String'];
};


export type IMutationCheckNicknameArgs = {
  nickname: Scalars['String'];
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


export type IMutationCreatePaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateReservationArgs = {
  createReservationInput: ICreateReservationInput;
  storeID: Scalars['String'];
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


export type IMutationGetTokenEmailArgs = {
  email: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationTogglePickArgs = {
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
  phone: Scalars['String'];
  updateUserPwdInput: Scalars['String'];
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationUsePointArgs = {
  amount: Scalars['Int'];
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

export type IPet = {
  __typename?: 'Pet';
  age: Scalars['Int'];
  breed: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  petID: Scalars['String'];
  petImgUrl: Scalars['String'];
  store: IStore;
};

export type IQuery = {
  __typename?: 'Query';
  ReviewCount: Scalars['Int'];
  fetchLocationTags: Array<IStrLocationTag>;
  fetchPickRank: Array<IStore>;
  fetchPicks: Array<IStore>;
  fetchReservation: Array<IReservation>;
  fetchReview: Array<IReviewResponse>;
  fetchStore: IStore;
  fetchStores: Array<IStore>;
  fetchStoresLocation: Array<IStore>;
  fetchStoresTag: Array<IStore>;
  fetchTags: Array<IStoreTag>;
  fetchUser: IUser;
  fetchUsers: Array<IUser>;
  searchStores: Array<IStore>;
};


export type IQueryReviewCountArgs = {
  storeID: Scalars['String'];
};


export type IQueryFetchPickRankArgs = {
  order?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchStoreArgs = {
  storeID: Scalars['String'];
};


export type IQueryFetchStoresArgs = {
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchStoresLocationArgs = {
  name: Scalars['String'];
};


export type IQueryFetchStoresTagArgs = {
  name: Scalars['String'];
};


export type IQueryFetchUsersArgs = {
  name: Scalars['String'];
};


export type IQuerySearchStoresArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type IReservation = {
  __typename?: 'Reservation';
  amount: Scalars['Int'];
  date: Scalars['String'];
  income: IIncome;
  members: Scalars['Int'];
  pets: Scalars['Int'];
  resID: Scalars['String'];
  store: IStore;
  user: IUser;
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
  pet: Array<IPet>;
  phone: Scalars['String'];
  pickCount: Scalars['Int'];
  smallDog: Scalars['Int'];
  storeID: Scalars['String'];
  storeImg: Array<IStoreImg>;
  storeTag: Array<IStoreTag>;
  user: IUser;
};

export type IStoreImg = {
  __typename?: 'StoreImg';
  store: IStore;
  storeImgID: Scalars['String'];
  url: Scalars['String'];
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

export type IUpdateReviewInput = {
  contents?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
};

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
  storeImg?: InputMaybe<Array<Scalars['String']>>;
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

export type IUpdatePetInput = {
  age?: InputMaybe<Scalars['Int']>;
  breed?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  petImgUrl?: InputMaybe<Scalars['String']>;
};
