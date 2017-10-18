const randomNumber = () => Math.floor(Math.random() * 50)

module.exports = function (bp) {
  bp.hear(/GET_STARTED|ola|oi|teste|hello|hi/i, (event, next) => {
    event.reply('#send-links')
  })

  bp.hear(/tchau|xau|exit|bye|goodbye|quit|done|leave|stop/i, (event, next) => {
    event.reply('#goodbye', { number: randomNumber() })
  })
}
