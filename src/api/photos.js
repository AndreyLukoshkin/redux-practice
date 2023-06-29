import makeRequest from "./makeRequest";

const URL = "/post";

export const getPhotos = (config) =>
  makeRequest({
    method: "GET",
    url: URL,
    ...config,
  });
