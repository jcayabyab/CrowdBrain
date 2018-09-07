export default date => {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const dateObj = new Date(date);
  function day() {
    if (dateObj.getUTCDate() > 10 && dateObj.getUTCDate() < 20) {
      return `${dateObj.getUTCDate()}th`;
    }
    switch(dateObj.getUTCDate() % 10) {
      case 1: return `${dateObj.getUTCDate()}st`;
      case 2: return `${dateObj.getUTCDate()}nd`;
      case 3: return `${dateObj.getUTCDate()}rd`;
      default: return `${dateObj.getUTCDate()}th`;
    }
  }

  return `${MONTHS[dateObj.getUTCMonth()]} ${day()}, ${dateObj.getUTCFullYear()}`;
};
