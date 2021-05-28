import { isProduction } from './isProduction';


export const getDomain = () => {
  const prodUrl = 'https://trailnerror-server.herokuapp.com/'
  const devUrl = 'http://localhost:3000'; // 'http://localhost:3000'

  return isProduction() ? prodUrl : devUrl;
};
