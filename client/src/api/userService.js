import axios from 'axios'
import allUsersQuery from './querys'

const url = 'http://localhost:8000/graphql?query'
export const getUsers = () => axios.get(url + allUsersQuery)
      .then((response) => response.data)
      .then(body => body.data.allUsers)
      .then(users => users.edges.map(edge => ({
        ...edge.node,
        uploadedImages: edge.node.uploadedImages.edges.map(edge => ({
          ...edge.node,
          likedBy: edge.node.likedBy.edges.map(edge => ({ ...edge.node }))
        }))
      })))
