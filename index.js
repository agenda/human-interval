const units = {};
units.second = 1000;
units.minute = units.second * 60;
units.hour = units.minute * 60;
units.day = units.hour * 24;
units.week = units.day * 7;
units.month = units.day * 30;
units.year = units.day * 365;

const languageMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10
};

const swapLanguageToDecimals = time => {
  const language = languageMap;
  const languageMapRegex = new RegExp('(' + Object.keys(language).join('|') + ')', 'g');
  const matches = time.match(languageMapRegex);
  if (!matches) {
    return time;
  }

  matches.forEach(match => {
    const matchStr = language[match] > 1 ? language[match] : language[match].toString().slice(1);
    time = time.replace(match, matchStr);
  });
  return time;
};

const processUnits = time => {
  if (time.match(/(second|minute|hour|day|week|month|year)s?/) === null) {
    return undefined;
  }

  const num = parseFloat(time, 10) || 1;
  const unit = time.match(/(second|minute|hour|day|week|month|year)s?/)[1];

  return units[unit] * num;
};

const humanInterval = time => {
  if (!time) {
    return time;
  }

  if (typeof time === 'number') {
    return time;
  }

  time = swapLanguageToDecimals(time);
  time = time.replace(/(second|minute|hour|day|week|month|year)s?(?! ?(s )?and |s?$)/, '$1,');
  return time.split(/and|,/).reduce((sum, group) => {
    return sum + (group ? processUnits(group) : 0);
  }, 0);
};

humanInterval.languageMap = languageMap;

module.exports = humanInterval;
