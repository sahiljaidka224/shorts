/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  handle: string,
  email: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  handle?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  handle: string,
  email: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  videoUri: string,
  description: string,
  userId: string,
  user?: User | null,
  songID: string,
  song?: Song | null,
  createdAt: string,
  updatedAt: string,
  userPostsId?: string | null,
  postSongId?: string | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  name: string,
  imageUri?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  handle?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  videoUri: string,
  description: string,
  userId: string,
  songID: string,
  userPostsId?: string | null,
  postSongId?: string | null,
};

export type ModelPostConditionInput = {
  videoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  songID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  userPostsId?: ModelIDInput | null,
  postSongId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  videoUri?: string | null,
  description?: string | null,
  userId?: string | null,
  songID?: string | null,
  userPostsId?: string | null,
  postSongId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
};

export type ModelSongConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  handle?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  videoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  songID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  userPostsId?: ModelIDInput | null,
  postSongId?: ModelIDInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items:  Array<Song | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  handle?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  videoUri?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  songID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionSongFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSongFilterInput | null > | null,
  or?: Array< ModelSubscriptionSongFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    handle: string,
    email: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userId: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        postSongId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    handle: string,
    email: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userId: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        postSongId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    handle: string,
    email: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userId: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        postSongId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      handle: string,
      email: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    postSongId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      handle: string,
      email: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    postSongId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      handle: string,
      email: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    postSongId?: string | null,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    handle: string,
    email: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userId: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        postSongId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      handle: string,
      email: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      handle: string,
      email: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    postSongId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      videoUri: string,
      description: string,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        handle: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      songID: string,
      song?:  {
        __typename: "Song",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPostsId?: string | null,
      postSongId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    handle: string,
    email: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userId: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        postSongId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    handle: string,
    email: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userId: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        postSongId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    handle: string,
    email: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        videoUri: string,
        description: string,
        userId: string,
        songID: string,
        createdAt: string,
        updatedAt: string,
        userPostsId?: string | null,
        postSongId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      handle: string,
      email: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    postSongId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      handle: string,
      email: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    postSongId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    videoUri: string,
    description: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      handle: string,
      email: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    songID: string,
    song?:  {
      __typename: "Song",
      id: string,
      name: string,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPostsId?: string | null,
    postSongId?: string | null,
  } | null,
};

export type OnCreateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    name: string,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
