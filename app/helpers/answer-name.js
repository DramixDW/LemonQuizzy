import { helper } from '@ember/component/helper';

export function answerName(indexQ,index) {
  console.log(indexQ);
  console.log(index)
  return `${indexQ}-answer-${index[1]}`;
}

export default helper(answerName);
