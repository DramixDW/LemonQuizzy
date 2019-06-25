import { helper } from '@ember/component/helper';

export function holeName(params/*, hash*/) {
  return `${params[0]}-answer-${params[1]}`;
}

export default helper(holeName);
