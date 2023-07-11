const url = `http://35.154.233.185:8000/user/createconference`;

function createconference(
  token,
  length,
  size,
  timeZone,
  language,
  subject,
  startTime,
  attendees
) {
  //attendee is a json file
  return fetch(url, {
    method: "POST", // Adjust the HTTP method (GET, POST, PUT, etc.) as required by your API
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: `${token}`,
      length: `${length}`,
      size: `${size}`,
      timeZone: `${timeZone}`,
      language: `${language}`,
      subject: `${subject}`,
      startTime: `${startTime}`,
      mediaTypes: `Voice`,
      attendees: attendees,
    }),
  })
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => data);
}

module.exports = createconference;

// createconference(
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySUQiOiJUZXN0X0JzbmwiLCJleHBpcnkiOjE2ODkyMTExNTEuMTM0MTA0fQ.4VTSrcXABG3v9a6wcb8wie4cG04hUm0mYNCaaCUDT98",
//   600000,
//   3,
//   48,
//   "en_US",
//   "testing attendees",
//   1689845800000,
//   [
//     {
//       attendeeName: "albert",
//       conferenceRole: "chair",
//       addressEntry: [
//         {
//           address: "919744139903",
//           type: "phone",
//         },
//       ],
//     },
//     {
//       attendeeName: "akshay",
//       conferenceRole: "general",
//       addressEntry: [
//         {
//           address: "919746455089",
//           type: "phone",
//         },
//       ],
//     },
//     {
//       attendeeName: "gk",
//       conferenceRole: "general",
//       addressEntry: [
//         {
//           address: "919020255100",
//           type: "phone",
//         },
//       ],
//     },
//   ]
// )
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
