
const useCookie = () => {

 const getCookie = (name) => {

  let cname = `${name}=`;
  let cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
   let cookie = cookies[i];

   if (cookie.indexOf(cname) == 0) {
    return cookie.substring(cname.length, cookie.length);
   }
  }

  return "";
 }

 const checkCookie = (name) => {
  return getCookie(name).length > 0;
 }

 const deleteCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
 }

 const createCookie = (name, value) => {
  document.cookie = `${name}=${value};`;
 }

 return { getCookie, createCookie, checkCookie, deleteCookie };
}

export default useCookie