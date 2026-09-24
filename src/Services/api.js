export default async function api(param = "", methode = "GET", body = "") {
  try {
    const res = await fetch(`http://localhost/${param}`, {
      method: methode,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    const data = await res.json();

    return {
      res: res,
      data: data,
    };
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Exemple d'utilisation

const call = async () => {
  const res = await api("User", "POST", "firstname=Nicolas&lastname=Texier");
  console.log(res.data);
  return res;
};

call();
