import { helper } from '@ember/component/helper';

export function tot(params/*, hash*/) {
  let result = 0 
  for(let i=0; i<params[0].length; i++){
    result += params[0].objectAt(i).question.get('good_answer_value');
  }
  return result;
}

export default helper(tot);
