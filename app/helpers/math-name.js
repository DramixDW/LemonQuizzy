import { helper } from '@ember/component/helper';

export function mathName(params) {
  let title= params[0];
  let options = params[1].variables;
  Object.keys(options).forEach( variable =>{
    title = title.replace(variable,options[variable]);
  })
  return title;
}

export default helper(mathName);
