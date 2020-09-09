export const encodeQuery = (str: string) => encodeURIComponent(str);

export const getUrlParams = (param: string) =>
  new URLSearchParams(window.location.search).get(param);
