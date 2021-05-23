import { isProduction } from './isProduction';


export const getDomain = () => {
  const prodUrl = 'https://trailnerror-server-dev.herokuapp.com/'
  const devUrl = 'https://trailnerror-server-dev.herokuapp.com/';

  return isProduction() ? prodUrl : devUrl;
};
