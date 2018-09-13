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
    if (dateObj.getDate() > 10 && dateObj.getDate() < 20) {
      return `${dateObj.getDate()}th`;
    }
    switch(dateObj.getDate() % 10) {
      case 1: return `${dateObj.getDate()}st`;
      case 2: return `${dateObj.getDate()}nd`;
      case 3: return `${dateObj.getDate()}rd`;
      default: return `${dateObj.getDate()}th`;
    }
  }

  return `${MONTHS[dateObj.getMonth()]} ${day()}, ${dateObj.getFullYear()}`;
};
