/*
  CONGRATULATIONS on creating your first Botpress bot!

  This is the programmatic entry point of your bot.
  Your bot's logic resides here.
  
  Here's the next steps for you:
  1. Read this file to understand how this simple bot works
  2. Read the `content.yml` file to understand how messages are sent
  3. Install a connector module (Facebook Messenger and/or Slack)
  4. Customize your bot!

  Happy bot building!

  The Botpress Team
  ----
  Getting Started (Youtube Video): https://www.youtube.com/watch?v=HTpUmDz9kRY
  Documentation: https://botpress.io/docs
  Our Slack Community: https://slack.botpress.io
*/

module.exports = function (bp) {
  bp.hear(/GET_STARTED|ola|oi|teste|hello|hi/i, (event, next) => {
    event.reply('#welcome')
      .then(() => {
        event.reply('#welcome')
      })
  })

  bp.hear(/exit|bye|goodbye|quit|done|leave|stop/i, (event, next) => {
    event.reply('#goodbye', { reason: 'asdasdasd' })
  })
}
