/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGenre = /* GraphQL */ `
  query GetGenre($id: ID!) {
    getGenre(id: $id) {
      id
      name
      value
      Products {
        items {
          id
          name
          isSold
          price
          image
          platformID
          genreID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGenres = /* GraphQL */ `
  query ListGenres(
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGenres(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        value
        Products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
      id
      name
      value
      Products {
        items {
          id
          name
          isSold
          price
          image
          platformID
          genreID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlatforms = /* GraphQL */ `
  query ListPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        value
        Products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      isSold
      price
      image
      platformID
      Genre {
        id
        name
        value
        Products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      Platform {
        id
        name
        value
        Products {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      genreID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        isSold
        price
        image
        platformID
        Genre {
          id
          name
          value
          createdAt
          updatedAt
          __typename
        }
        Platform {
          id
          name
          value
          createdAt
          updatedAt
          __typename
        }
        genreID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productsByPlatformID = /* GraphQL */ `
  query ProductsByPlatformID(
    $platformID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByPlatformID(
      platformID: $platformID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        isSold
        price
        image
        platformID
        Genre {
          id
          name
          value
          createdAt
          updatedAt
          __typename
        }
        Platform {
          id
          name
          value
          createdAt
          updatedAt
          __typename
        }
        genreID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const productsByGenreID = /* GraphQL */ `
  query ProductsByGenreID(
    $genreID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByGenreID(
      genreID: $genreID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        isSold
        price
        image
        platformID
        Genre {
          id
          name
          value
          createdAt
          updatedAt
          __typename
        }
        Platform {
          id
          name
          value
          createdAt
          updatedAt
          __typename
        }
        genreID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
