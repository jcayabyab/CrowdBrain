import _ from "lodash";

export default function(dateNum) {
  const timeElapsed = new Date().getTime() - dateNum;

  const intervals = {
    minute: 1000 * 60,
    hour: 1000 * 3600,
    day: 1000 * 86400,
    week: 1000 * 86400 * 7,
    month: 1000 * 86400 * 30
  };

  let output = null;

  _.forEach(intervals, (value, key) => {
    if (timeElapsed > value) {
      const count = Math.floor(timeElapsed / value);

      output = `${count} ${key}${count === 1 ? "" : "s"} ago`;
    }
  });

  return output || `Just now`;
}
