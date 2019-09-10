import { helper } from '@ember/component/helper';

export function success(params/*, hash*/) {
  let res = params[0];
  let tot = params[1];
  let perc = params[2];
  return (res/tot)*100 >= perc;
}

export default helper(success);
