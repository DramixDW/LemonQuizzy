import { helper } from '@ember/component/helper';

export function lookArray(params/*, hash*/) {
  let arr = params[0];
  if(!Array.isArray(arr)){
    arr = arr.split(' ');
  } 
  return arr[params[1]]
}

export default helper(lookArray);
