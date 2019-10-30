import del from 'del';

import configs from '../../configs';
import { isProduction } from '../utils/parseArguments';

const envPath = isProduction ? configs.paths.dist : configs.paths.dev;

export function cleanDist() {
  return del([`${envPath}/*`], { dot: true });
}

export function cleanIconsSprite() {
  return del(['.cache/sprite.svg'], { dot: true });
}

export default {
  dist: cleanDist,
  iconsSprite: cleanIconsSprite,
};
