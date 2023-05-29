require("dotenv").config();
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

const activities = [
  {
    name: "Bar Hangout",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "Game night",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "Dancing",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "Fancy Dinner",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "Casual Dinner",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "Hiking",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "Walk to BK",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "Hang outside",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "Apartment hang",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "Themed Activity",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "Workout",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
  {
    name: "I'm bored",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
    ],
  },
];

app.get("/", (req, res) => {
  const activity = req.query.activity;
  let currentActivity;

  if (!activities.find((e) => e.name === activity)) {
    console.log("invalid activity");
  } else {
    currentActivity =
      activities[activities.findIndex((e) => e.name === activity)];

    currentActivity.subscribers.forEach((sub) => {
      twilioClient.messages.create({
        body: `Hello ${sub.name}, You have been invited to participate in ${activity} with Raha & Rachel.`,
        from: "+18339383052",
        to: `${sub.number}`,
      });
    });
  }

  res.send(currentActivity);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
