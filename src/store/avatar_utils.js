// utils.js
export const fileServer = `http://localhost:8080`;

export const getAvatarUrl = avatarUrl => {
  if (!avatarUrl) return '';

  if (avatarUrl.startsWith('http')) {
    return avatarUrl; // User keep its default generated avatar with DiceBear
  }

  return `${fileServer}/${avatarUrl}`; // avatart has already been personalized (internal file server)
};
