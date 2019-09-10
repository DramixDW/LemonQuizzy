import { helper } from '@ember/component/helper';

export function resultCount(params/*, hash*/) {
  let result = 0 
  for(let i=0; i<params[0].length; i++){
    let isCorrect = params[0].objectAt(i).isCorrect;
    if (isCorrect) result += params[0].objectAt(i).question.get('good_answer_value');
    else if(isCorrect === null) result += params[0].objectAt(i).question.get('no_answer_value');
    else  result += params[0].objectAt(i).question.get('bad_answer_value');
  }
  return result;
}

export default helper(resultCount);
