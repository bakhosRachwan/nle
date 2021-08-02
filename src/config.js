const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
export const config = {
  apiBaseUrl: devMode
    ? "http://localhost:3002"
    : "https://nle-mock-server-2021.herokuapp.com",
};
