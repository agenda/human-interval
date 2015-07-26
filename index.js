var humanInterval = module.exports = {
  human: function(time) {
    if(!time) return time;
    if(typeof time == 'number') return time;
    time = swapLanguageToDecimals(time);
    time = time.replace(/(second|minute|hour|day|week|month|year)s?(?! ?(s )?and |s?$)/, '$1,');
    return time.split(/and|,/).reduce(function(sum, group) {
      return sum + (group != "" ? processUnits(group) : 0);
    }, 0);
  },
  machine: function(time) {
    var temp, description = "";
    if (!time) return time;
    for (name in humanInterval.units) {
      temp = collectUnit(time, humanInterval.units[name], name);
      description += temp[0] + (temp[0] == "" ? "" : ", ");
      time = temp[1]; // New time
    }
    description = description.slice(0, -2); // Removes the spurious comma-space
    return description;
  },
  languageMap: {
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
  },
  reverseLanguageMap: {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten'
  },
  units: {
    "year":   365*24*60*60*1000,
    "month":  30*24*60*60*1000,
    "week":   7*24*60*60*1000,
    "day":    24*60*60*1000,
    "hour":   60*60*1000,
    "minute": 60*1000,
    "second": 1000
  }
}

function collectUnit(time, unit, name) {
  /* Returns an array, the first element of which is a sentence
   * representing the units collected and the second element of
   * which is the time after collecting the unit.
   */
  units = Math.floor(time / unit);
  if (units == 0) {
    description = "";
    newTime = time;
  } else {
    if (units > 10) {
      description = units;
    } else {
      description = humanInterval.reverseLanguageMap[units];
    }
    description += " " + name + (units > 1 ? "s" : "");
    newTime = time - units*unit;
  }
  return [description, newTime];
}

function swapLanguageToDecimals(time) {
  var language = humanInterval.languageMap;
  var languageMapRegex = new RegExp('(' + Object.keys(language).join('|') + ')', 'g');
  var matches = time.match(languageMapRegex);
  if(!matches) return time;

  matches.forEach(function(match) {
    var matchStr = language[match] > 1 ? language[match] : language[match].toString().slice(1);
    time = time.replace(match, matchStr);
  });

  return time;
}

function processUnits(time) {
  var num = parseFloat(time, 10),
      unit = time.match(/(second|minute|hour|day|week|month|year)s?/)[1];

  if(!num) num = 1;

  switch(unit) {
    case 'second': unit = 1000; break;
    case 'minute': unit = 1000 * 60; break;
    case 'hour':   unit = 1000 * 60 * 60; break;
    case 'day':    unit = 1000 * 60 * 60 * 24; break;
    case 'week':   unit = 1000 * 60 * 60 * 24 * 7; break;
    case 'month':  unit = 1000 * 60 * 60 * 24 * 30; break;
    case 'year':   unit = 1000 * 60 * 60 * 24 * 365; break;
  }

  return unit * num;
}
