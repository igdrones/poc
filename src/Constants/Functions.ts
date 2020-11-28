
/*  To be against cache in the browser for api url*/
export const attachDynamicParam = (url: string = "") => {
  if (typeof url === "string" && url !== "" && url.indexOf("?") !== -1) {
    if (url.length - 1 - url.lastIndexOf("&") === 0) {
      return url + "cache=" + new Date().getTime();
    } else {
      return url + "&cache=" + new Date().getTime();
    }
  }
  return url + "?cache=" + new Date().getTime();
};
