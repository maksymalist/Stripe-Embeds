const getApiUrl = (path: string) => {
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://t3-app.vercel.app";

  return `${apiUrl}${path}`;
};

export { getApiUrl };
