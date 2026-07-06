import { iconsArr } from '../consts/consts.js';

export function getIcon(name) {
  return iconsArr[name] ?? '📦';
}
