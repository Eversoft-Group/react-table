export const data = Array(100)
  .fill()
  .map(() => {
    return {
      likes: Math.floor(Math.random() * 100),
      user: Math.random().toString(36).substring(7),
      active: Math.random() > 0.5 ? "true" : "false",
    };
  });
