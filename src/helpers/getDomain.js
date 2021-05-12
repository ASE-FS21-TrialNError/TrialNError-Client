import { isProduction } from './isProduction';


export const getDomain = () => {
  const prodUrl = 'https://trailnerror-server-dev.herokuapp.com/'
  const devUrl = 'http://localhost:3000';

  return isProduction() ? prodUrl : devUrl;
};
