import { helper } from '@ember/component/helper';

export function answerValue(params/*, hash*/) {
  let result = params[0];
  let question = params[1];
  if(result.isCorrect) return question.get('good_answer_value')
  else if(result.isCorrect === null) return question.get('bad_answer_value')
  else return question.get('bad_answer_value')
}

export default helper(answerValue);
