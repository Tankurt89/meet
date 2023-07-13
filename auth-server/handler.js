'use strict';

const { google } = require("googleapis");
const { oauth2 } = require("googleapis/build/src/apis/oauth2");
const calendar = google.calendar("v3")
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"]
const { client_secret, client_id, calendar_id } = process.env
const redirect_uris = ["https://tankurt89.github.io/meet"]
javascript_origins:["https://tankurt89.github.io/meet", "http://localhost:3000"]

const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
)

module.exports.getAuthURL = async () =>{
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  })
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({authUrl}),
  }
}

module.exports.getAccessToken = async (event) => {
  const code = decodeURIComponent(`${event.pathParameters.code}`)

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (error, response) => {
      if (error) {
        return reject(error)
      }
      return resolve(response)
    })
  })
  .then((results) => {
    return { 
      statusCode: 200,
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(results),
    }
  })
  .catch((error) => {
    return {
      statusCode: 500,
      boyd: JSON.stringify(error),
    }
  })
}

module.exports.getCalendarEvents = async (event) => {
  const access_token = decodeURIComponent(`${event.pathParameters.access_token}`);
  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      }
    )
    .then((results) => {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({ events: results.data.items }),
      };
    })
    .catch((err) => {
      console.error(err);
      return {
        statusCode: 500,
        body: JSON.stringify(err),
      };
    });
  });
};
