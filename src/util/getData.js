const proxyServer = 'https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';

// endpoint should be something like 'about/' or 'people/faculty'
async function getData(endpoint) {
    return fetch(`${proxyServer}${endpoint}`)
    .then((res) => res.json());
  }

  export default getData;