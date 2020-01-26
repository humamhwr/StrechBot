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