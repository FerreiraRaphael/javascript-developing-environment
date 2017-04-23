/**
 * Created by raphael on 23/04/17.
 */

export default function getBaseUrl(){
  const inDevelopment = window.location.hostname === `localhost`
  return inDevelopment ? `http://localhost:3001` : `/`
}

//TODO: Make it work with a env var
