var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// var baseURL = window.location.protocol + "//" + window.location.host + "/";
var baseURL = "http://localhost:4000/";

console.log("host", baseURL);

export async function addComment(requestObject) {
  try {
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(requestObject),
      redirect: "follow",
    };
    const response = await fetch(baseURL + "addComment", requestOptions);
    const json_response = await response.json();
    return json_response;
  } catch (err) {
    console.log("Error inside addComment service(Client)", err);
  }
}

export async function getAllComments() {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(baseURL + "getAllComments", requestOptions);
    const json_response = await response.json();
    return json_response;
  } catch (err) {
    console.log("Error inside addComment service(Client)", err);
  }
}
