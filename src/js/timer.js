function getTimeRemaining(endtime) {
  const t = endtime - new Date().getTime();
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    total: t,
    hours,
    minutes,
    seconds,
  };
}

function declensionNum(number, words) {
  if (number > 10 && number < 20) return words[2];
  const n = number % 10;
  if (n === 1) return words[0];
  if (n > 1 && n < 5) return words[1];
  return words[2];
}

function getEndOfDay() {
  const now = new Date();
  const endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  return endOfDay.getTime();
}

function initializeAllClocks() {
  const deadline = getEndOfDay();
  const countdowns = document.querySelectorAll('.countdown');

  countdowns.forEach(clock => {
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
    // const hoursLabel = clock.querySelector('.hours-label');
    // const minutesLabel = clock.querySelector('.minutes-label');
    // const secondsLabel = clock.querySelector('.seconds-label');

    function updateClock() {
      const t = getTimeRemaining(deadline);
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      // hoursLabel.innerHTML = declensionNum(t.hours, [
      //   'година',
      //   'години',
      //   'годин',
      // ]);
      // minutesLabel.innerHTML = declensionNum(t.minutes, [
      //   'хвилина',
      //   'хвилини',
      //   'хвилин',
      // ]);
      // secondsLabel.innerHTML = declensionNum(t.seconds, [
      //   'секунда',
      //   'секунди',
      //   'секунд',
      // ]);

      if (t.total <= 0) {
        clearInterval(interval);
        startNewDayForAll();
      }
    }

    updateClock();
    const interval = setInterval(updateClock, 1000);
  });
}

function startNewDayForAll() {
  initializeAllClocks();
}

initializeAllClocks();
