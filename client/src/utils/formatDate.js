export default function(dateNum) {
  const timeElapsed = new Date().getTime() - dateNum;
  const day = 1000 * 60 * 60 * 24;

  if (timeElapsed > day) {
    return Math.floor(timeElapsed / day)
  }
}