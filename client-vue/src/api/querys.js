import gql from 'graphql-tag'

let imagesQuery = gql`
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

export default imagesQuery
