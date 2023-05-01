import { DateTime } from '../node_modules/luxon/src/luxon.js';

const dateNow = document.getElementById('today-date');
let date = '';

const updateDate = () => {
  date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  dateNow.innerText = date;
};

export default updateDate;