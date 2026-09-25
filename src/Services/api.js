export default async function api(param = "", methode = "GET", body = "") {
  try {
    const options = {
      method: methode,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    if (methode !== "GET" && methode !== "HEAD" && body) {
      options.body = body;
    }

    const res = await fetch(`http://localhost/${param}`, options);

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
