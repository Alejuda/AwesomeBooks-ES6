import { DateTime } from '../node_modules/luxon/src/luxon.js';
const dateNow = document.getElementById("today-date");

const updateDate = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  dateNow.innerText = date;
};

export default updateDate;