export const timeAgo = dateString => {
  const now = new Date();
  const date = new Date(dateString);
  const diff = now - date;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  switch (true) {
    case seconds < 60:
      return `Edited ${seconds} seconds ago`;
    case minutes < 60:
      return `Edited ${minutes} minutes ago`;
    case hours < 24:
      return `Edited ${hours} hours ago`;
    case days < 7:
      return `Edited ${days} days ago`;
    case weeks < 5:
      return `Edited ${weeks} weeks ago`;
    case months < 12:
      return `Edited ${months} months ago`;
    default:
      return `Edited ${years} years ago`;
  }
};
