import { attachDynamicParam } from "../Constants/Functions";

export const HttpRestService = (
  method: string,
  url: string,
  body: any | string | undefined = undefined,
  headers: Object = {}
) => {

  let config: any = {
    headers: headers,
  };

  switch (method.toLowerCase()) {
    case "POST":
      config.method = "POST";
      if (typeof body !== "undefined") {
        config.body = body;
      }
      break;
    case "PUT":
      config.method = "PUT";
      if (typeof body !== "undefined") {
        config.body = body;
      }
      break;
    case "PATCH":
      config.method = "PATCH";
      if (typeof body !== "undefined") {
        config.body = body;
      }
      break;
    case "DELETE":
      config.method = "DELETE";
      if (typeof body !== "undefined") {
        config.body = body;
      }
      break;
    default:
      config.method = "GET";
      break;
  }

  return fetch(attachDynamicParam(url), config).then((res: any) => {
      return res;
    }).catch((e: any) => {
      return e;
    });

};
