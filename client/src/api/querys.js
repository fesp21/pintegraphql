import gql from 'graphql-tag'

export const allImagesQuery = gql`
query {
  allImages {
    edges {
      node {
        url
        user {
          username
          profilePicture
        }
        description
        likedBy {
          edges {
            node {
              username
            }
          }
        }
      }
    }
  }
}
`
const allUsersQuery = gql`
query {
  allUsers {
    edges {
      node {
        username
        profilePicture
        uploadedImages {
          edges {
            node {
              url
              description
              likedBy {
                edges {
                  node {
                    username
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`
export default allUsersQuery
