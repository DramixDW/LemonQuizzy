import { helper } from '@ember/component/helper';

export function mathName(params) {
  console.log(params);
  let title= params[0];
  let options = params[1].variables;
  Object.keys(options).forEach( variable =>{
    let random =Math.floor(Math.random() * (+options[variable][1] - +options[variable][0])) + +options[variable][0]; 
    title = title.replace(variable,random.toString());
  })
  return title;
}

export default helper(mathName);
