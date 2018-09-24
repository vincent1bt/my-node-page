function authenticated({ user }) {
  if (user) {
    return true;
  }
  return false;
}

module.exports = authenticated;
