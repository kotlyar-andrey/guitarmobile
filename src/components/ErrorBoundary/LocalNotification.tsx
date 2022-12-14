import {getErrorMessage} from './utils';

export function showErrorMessage(error: unknown) {
  console.log(getErrorMessage(error));
}
