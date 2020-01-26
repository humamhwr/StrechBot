const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: 'xxoxb-923960191479-922141947408-3E4KJuZi80asayLqgDbHmBtV',
  name: 'StrechBot'
});

// Start Handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':man-cartwheeling:'
  };

  bot.postMessageToChannel(
    'general',
    'These Muscles boutta be Strechin with the help of @strechbot!',
    params);
});

// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', (data) => {
  if (data.type !== 'message') {
    return;
  }
  
  const { App } = require("@slack/bolt");
const payloads = require("./payloads");

const app = new App({
  token: process.env.xoxb-923960191479-922141947408-sgyzvOsfijs2p0UWvQeSkhKD,
  signingSecret: process.env.1399c7090510256be47e95d8b1b16acd,
  logLevel: "DEBUG"
});


app.event("app_home_opened", async ({ context, event }) => {
  if (event.tab === "home") {
    await app.client.views.publish({
      token: context.botToken,
      user_id: event.user,
      view: payloads.home({ user: event.user })
    });
  }
});


app.action("open_modal", async ({ ack, context, action, body }) => {
  ack();

  await app.client.views.open({
    token: context.botToken,
    trigger_id: body.trigger_id,
    view: payloads.modal({ user: body.user.id })
  });
});


app.action("url", async ({ ack }) => {
  ack();
});


app.view(/w*/, async ({ ack }) => {
  ack();
});

app.error(error => {
  console.error(error);
});

// Start the app
(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
  console.log(
    "Your URL: https://" + process.env.strechbot + ".glitch.me/slack/events"
  );
})();
