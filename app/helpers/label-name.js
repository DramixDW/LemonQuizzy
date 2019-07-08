import {helper} from '@ember/component/helper';

export function labelName(params) {
  return `${params[0]}-label-${params[1]}`;
}

export default helper(labelName);
