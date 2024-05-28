const convertTimeString = (dateString: string) => {
  const [date, timeString] = dateString.split("T");
  const time = timeString.split(".")[0];

  let [hour, minute, seconds] = time.split(":").map(Number);

  let suffix = hour < 12 ? "AM" : "PM";

  if (hour === 0) {
    hour = 12;
  } else if (hour === 12) {
    suffix = "PM";
  } else {
    hour %= 12;
  }

  
  const newTime = `${hour}:${minute} ${suffix}`;
  // console.log(newTime)
  return {newTime, date}
};

export { convertTimeString };


