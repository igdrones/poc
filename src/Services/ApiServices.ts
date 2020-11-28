import { GET_USERS, POC_USERS } from "../Constants/Apiurls";
import { HttpRestService } from "./RestServices";

export const doGetUsers = () => {
  return new Promise((resolve: any, reject: any) => {
    return HttpRestService("GET", GET_USERS).then(
      (res: any) => {
        if(typeof res==='object'){
          try {
            if (res.ok) {
              resolve(res.json());
            } else {
              reject(res.json());
            }
          } catch (err) {
            reject({error:true,errorMessage:"Exception Cases"});
          }
        }else{
          reject({error:true,errorMessage:"Oops service went wrong"});
        }
        
      },
      (err: any) => {
        reject(err);
      }
    );
  });
};


export const doGetPocUsers = () => {
  return new Promise((resolve: any, reject: any) => {
    return HttpRestService("GET", POC_USERS).then(
      (res: any) => {
        if(typeof res==='object'){
          try {
            if (res.ok) {
              resolve(res.json());
            } else {
              reject(res.json());
            }
          } catch (err) {
            reject({error:true,errorMessage:"Exception Cases"});
          }
        }else{
          reject({error:true,errorMessage:"Oops service went wrong"});
        }
        
      },
      (err: any) => {
        reject(err);
      }
    );
  });
};

export const doPostPocUser = (body:any={}) => {
  return new Promise((resolve: any, reject: any) => {
    const headers= {
      'Content-Type': 'application/json'
    };
    return HttpRestService("POST", POC_USERS,JSON.stringify(body),headers).then(
      (res: any) => {
        if(typeof res==='object'){
          try {
            if (res.ok) {
              resolve(res.json());
            } else {
              reject(res.json());
            }
          } catch (err) {
            reject({error:true,errorMessage:"Exception Cases"});
          }
        }else{
          reject({error:true,errorMessage:"Oops service went wrong"});
        }
        
      },
      (err: any) => {
        reject(err);
      }
    );
  });
};

