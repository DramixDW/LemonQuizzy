import { helper } from '@ember/component/helper';

export function dashName(params/*, hash*/) {
  let name =""
  name = params[0] + "-"
  for(let i=1; i<params.length;i++){
    name += params[i] + "-"
  }
  name = name.substr(0,name.length-1)
  return name;
}

export default helper(dashName);
