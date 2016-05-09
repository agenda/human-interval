var humanInterval = module.exports = function humanInterval (time) {
  if (!time) return time
  if (typeof time === 'number') return time
  time = swapLanguageToDecimals(time)
  time = time.replace(/(second|minute|hour|day|week|month|year)s?(?! ?(s )?and |s?$)/, '$1,')
  return time.split(/and|,/).reduce(function (sum, group) {
    return sum + (group !== '' ? processUnits(group) : 0)
  }, 0)
}

humanInterval.languageMap = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10
}

function swapLanguageToDecimals (time) {
  var language = humanInterval.languageMap
  var languageMapRegex = new RegExp('(' + Object.keys(language).join('|') + ')', 'g')
  var matches = time.match(languageMapRegex)
  if (!matches) return time

  matches.forEach(function (match) {
    var matchStr = language[match] > 1 ? language[match] : language[match].toString().slice(1)
    time = time.replace(match, matchStr)
  })
  return time
}

function processUnits (time) {
  var unit
  var num = parseFloat(time, 10)
  if (time.match(/(second|minute|hour|day|week|month|year)s?/) !== null) unit = time.match(/(second|minute|hour|day|week|month|year)s?/)[1]
  else unit = undefined
  if (!num) num = 1

  switch (unit) {
    case 'second': unit = 1000
      break
    case 'minute': unit = 1000 * 60
      break
    case 'hour': unit = 1000 * 60 * 60
      break
    case 'day': unit = 1000 * 60 * 60 * 24
      break
    case 'week': unit = 1000 * 60 * 60 * 24 * 7
      break
    case 'month': unit = 1000 * 60 * 60 * 24 * 30
      break
    case 'year': unit = 1000 * 60 * 60 * 24 * 365
      break
  }
  return unit * num
}
