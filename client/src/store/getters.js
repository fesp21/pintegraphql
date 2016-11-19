export function allImages (state) {
  return [].concat.apply([], state.users.map(user =>
    user.uploadedImages.map(image => ({
      ...image,
      user: {
        username: user.username,
        profilePicture: user.profilePicture
      }
    }))))
}
