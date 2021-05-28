import { isProduction } from './isProduction';


export const getDomain = () => {
  const prodUrl = 'https://trailnerror-server.herokuapp.com/'
  const devUrl = 'https://trailnerror-server.herokuapp.com/';

  return isProduction() ? prodUrl : devUrl;
};
