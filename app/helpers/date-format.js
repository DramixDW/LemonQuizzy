import {helper} from '@ember/component/helper';

export function dateFormat(date) {
  let d = date[0];
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getYear() + 1900}`;
}

export default helper(dateFormat);
