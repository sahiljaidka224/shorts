/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videoUri
        description
        user {
          id
          name
          handle
          email
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
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
