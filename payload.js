module.exports = {
    home: context => {
      return {
        type: "{
            "type": "modal",
            "title": {
                "type": "plain_text",
                "text": "StrechBot",
                "emoji": true
            },
            "submit": {
                "type": "plain_text",
                "text": "Done!",
                "emoji": true
            },
            "close": {
                "type": "plain_text",
                "text": "I'm lazy",
                "emoji": true
            },
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "It's time to strech these muscles\n"
                    }
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "mrkdwn",
                            "text": "*Muscle Group:*\nShoulders and back\n*Duration:*\n30 seconds\n*Comments:* \"Make sure your hips are bent all the way!"
                        }
                    ]
                },
                {
                    "type": "image",
                    "title": {
                        "type": "plain_text",
                        "text": "HealthLine.com",
                        "emoji": true
                    },
                    "image_url": "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Overhead_Reach.gif?h=840",
                    "alt_text": "Example Image"
                }
            ]
        }      };
    },
    modal: context => {
      return {
        type: "modal",
        title: {
          type: "plain_text",
          text: "Modal",
          emoji: true
        },
        close: {
          type: "plain_text",
          text: "Close",
          emoji: true
        },
        submit: {
          type: "plain_text",
          text: "Ok",
          emoji: true
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Congrats <@${context.user}> :tada:*\nYou successfully opened a modal.`
            }
          },
          {
            type: "divider"
          },
          {
            type: "image",
            title: {
              type: "plain_text",
              text: "Block Kit modal",
              emoji: true
            },
            image_url:
              "https://a.slack-edge.com/240905/img/api/modals/modal-abstract.png",
            alt_text: "Block Kit modal"
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "Modals provide focused spaces ideal for requesting and collecting data from users, or temporarily displaying dynamic and interactive information. Each view in a modal can be composed using Block Kit layout blocks and elements.\n\nFor users, modals are prominent and pervasive — taking center stage in Slack ahead of any other interface element.\n\nModals are consequently short-lived and invoked only when a specific task is to be completed.\n\nModals contain one to three views that can be chained together to create complex, non-linear workflows.\n\nApps can only create modals in response to user invocation. A user can invoke your app through interactive features like app actions. Read our guide to <https://api.slack.com/surfaces/modals|using modals> to find out more."
            }
          }
        ]
      };
    }
  };
  