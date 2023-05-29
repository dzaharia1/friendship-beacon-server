require("dotenv").config();
// const AccessToken = require("twilio").jwt.AccessToken;
// const BoxPermission = AccessToken.BoxPermission;
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// create the twilioClient
const twilioClient = require("twilio")(
  process.env.TWILIO_API_KEY_SID,
  process.env.TWILIO_API_KEY_SECRET,
  { accountSid: process.env.TWILIO_ACCOUNT_SID }
);

const subscribers = [
  { name: "Zach", number: "+17189083928" },
  { name: "Dan", number: "+19144798900" },
];

app.get("/", (req, res) => {
  const activity = req.query.activity;

  subscribers.forEach((sub) => {
    twilioClient.messages.create({
      body: `Hello ${sub.name}, You have been invited to participate in ${activity} with Raha & Rachel.`,
      from: "+18339383052",
      to: `${sub.number}`,
    });
  });

  res.send(activity);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
