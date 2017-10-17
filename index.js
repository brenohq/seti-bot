const sendLink = (event, link) => {
  event.reply('#send-link', { link: `${link}` })
}

const LINKS = {
  presentation: 'asdasd',
  repo: 'repo',
  www: 'www.brenohq.com'
}

module.exports = function (bp) {
  bp.hear(/GET_STARTED|ola|oi|teste|hello|hi/i, (event, next) => {
    event.reply('#welcome')
  })

  bp.hear(/1|um/i, (event, next) => {
    sendLink(event, LINKS.presentation)
  })

  bp.hear(/2|dois/i, (event, next) => {
    sendLink(event, LINKS.repo)
  })

  bp.hear(/3|tres/i, (event, next) => {
    sendLink(event, LINKS.www)
  })

  bp.hear(/exit|bye|goodbye|quit|done|leave|stop/i, (event, next) => {
    event.reply('#goodbye', { reason: 'palestra chata' })
  })
}
