import { isProduction } from './isProduction';

export const getDomain = () => {
  const prodUrl = 'https://sopra-fs21-lukzeh-server.herokuapp.com/';
  const devUrl = 'http://localhost:3000/';

  return devUrl;
  //return isProduction() ? prodUrl : devUrl;
};
