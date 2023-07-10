const url = `http://35.154.233.185:8000/user/deleteconference`;

function RemoveConference(token, conferenceID, subconferenceID) {
  return fetch(url, {
    method: "DELETE", // Adjust the HTTP method (GET, POST, PUT, etc.) as required by your API
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: `${token}`,
      conferenceID: `${conferenceID}`,
      subconferenceID: `${subconferenceID}`,
    }),
  })
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => console.log(data));
}

module.exports = RemoveConference;