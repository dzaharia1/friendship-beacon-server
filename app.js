require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// create the twilioClient
const twilioClient = require("twilio")(
  process.env.TWILIO_API_KEY_SID,
  process.env.TWILIO_API_KEY_SECRET,
  { accountSid: process.env.TWILIO_ACCOUNT_SID }
);

const activities = [
  {
    name: "Bar hangout",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "Game night",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "Dancing",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "Fancy dinner",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "Casual dinner",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "Hiking",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "Walk to BK",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "Hang outside",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "Apartment hang",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "Themed Activity",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "Workout",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
    ],
  },
  {
    name: "I'm bored",
    subscribers: [
      { name: "Zach", number: "+17189083928" },
      { name: "Dan", number: "+19144798900" },
      { name: "Raha", number: "+18452695933" },
      { name: "Rachel", number: "+19737133084" },
      { name: "Leo", number: "+‭17184401964‬" },
      { name: "Alicia", number: "+‭‭14342188912‬‬" },
      { name: "Anna", number: "+‭‭19496566290‬‬" },
      { name: "Isaiah", number: "+‭6465842703‬" }
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
  console.log(currentActivity);
  res.send(currentActivity);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
