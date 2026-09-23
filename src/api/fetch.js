const myFetch = (route = '', methode = 'GET', body = '') => {
  return fetch(`http://localhost/${route}`,
    {
      method: methode,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    }
  );
};



const call = async () => {
  const res = await myFetch('POST', 'firstname=Nicolas&lastname=Texier');
  const json = await res.json();
  console.log(json);

  // document.getElementById('pres').textContent = json.error;
}

call();

// myFetch('login')
//   .then(res => res.json()
//     .then((json) => {
//       console.log(json);
//       console.log(res.status);

//       document.getElementById('pres').textContent = json.error;


//     }));