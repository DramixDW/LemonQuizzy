import { helper } from '@ember/component/helper';
import Parser from "expr-eval";

export function mathAnswer(params/*, hash*/) {
  let variables = params[0];
  let eq = params[1];
  const expr = Parser.Parser.parse(eq);
  const resultExpected = expr.evaluate(variables);
  return resultExpected;
}

export default helper(mathAnswer);
