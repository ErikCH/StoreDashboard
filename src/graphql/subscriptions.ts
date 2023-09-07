/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre($filter: ModelSubscriptionGenreFilterInput) {
    onCreateGenre(filter: $filter) {
      id
      name
      value
      Products {
        items {
          id
          name
          isSold
          price
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
export const onUpdateGenre = /* GraphQL */ `
  subscription OnUpdateGenre($filter: ModelSubscriptionGenreFilterInput) {
    onUpdateGenre(filter: $filter) {
      id
      name
      value
      Products {
        items {
          id
          name
          isSold
          price
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
export const onDeleteGenre = /* GraphQL */ `
  subscription OnDeleteGenre($filter: ModelSubscriptionGenreFilterInput) {
    onDeleteGenre(filter: $filter) {
      id
      name
      value
      Products {
        items {
          id
          name
          isSold
          price
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
export const onCreatePlatform = /* GraphQL */ `
  subscription OnCreatePlatform($filter: ModelSubscriptionPlatformFilterInput) {
    onCreatePlatform(filter: $filter) {
      id
      name
      value
      Products {
        items {
          id
          name
          isSold
          price
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
export const onUpdatePlatform = /* GraphQL */ `
  subscription OnUpdatePlatform($filter: ModelSubscriptionPlatformFilterInput) {
    onUpdatePlatform(filter: $filter) {
      id
      name
      value
      Products {
        items {
          id
          name
          isSold
          price
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
export const onDeletePlatform = /* GraphQL */ `
  subscription OnDeletePlatform($filter: ModelSubscriptionPlatformFilterInput) {
    onDeletePlatform(filter: $filter) {
      id
      name
      value
      Products {
        items {
          id
          name
          isSold
          price
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      name
      isSold
      price
      platformID
      genreID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      name
      isSold
      price
      platformID
      genreID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      name
      isSold
      price
      platformID
      genreID
      createdAt
      updatedAt
      __typename
    }
  }
`;
