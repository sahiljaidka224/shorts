/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      handle
      email
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          postSongId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      handle
      email
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          postSongId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      handle
      email
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          postSongId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      videoUri
      description
      user {
        id
        name
        handle
        email
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
      postSongId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      videoUri
      description
      user {
        id
        name
        handle
        email
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
      postSongId
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      videoUri
      description
      user {
        id
        name
        handle
        email
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
      postSongId
    }
  }
`;
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
