import apisauce from 'apisauce';


const create = (baseURL = 'http://localhost:8088/') => {
  /*** Create Api */

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    }
  });


  /*** Create endpoints */

  // alerts
  const getAlerts = (data) => api.get('/alerts', data);


  /*** Return endpoint methods */
  return {
    getAlerts,
  };

};


export default {
  create,
};
