
export const allImages = state => [].concat(
  state.users.map(user =>
    user.uploadedImages.map(image => ({
      ...image,
      user: {
        username: user.username,
        profilePicture: user.profilePicture
      }
    }))))

