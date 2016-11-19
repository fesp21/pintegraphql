export const allImagesQuery = `
{
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
const allUsersQuery = `
query {
  allUsers {
    edges {
      node {
        username
        profilePicture
        uploadedImages {
          edges {
            node {
              id
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
