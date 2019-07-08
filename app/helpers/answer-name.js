import {helper} from '@ember/component/helper';

export function answerName(params) {
  return `${params[0]}-answer-${params[1]}`;
}

export default helper(answerName);
