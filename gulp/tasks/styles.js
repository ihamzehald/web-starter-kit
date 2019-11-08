import gulp from 'gulp';
import fs from 'fs';
import path from 'path';
import lazypipe from 'lazypipe';
import postcss from 'gulp-postcss';
import uncss from 'uncss';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import flexBugsFixes from 'postcss-flexbugs-fixes';
import cssnano from 'cssnano';

import configs, { uncssOptions } from '../../configs';
import { isProduction, envPath } from '../utils/env';
import noop from '../utils/noop';
import errorHandler from '../utils/errorHandler';

function inlineCssImporter(url, prev) {
  if (!url.endsWith('.css')) {
    return { file: url };
  }

  const resolvedPath = path.resolve(path.dirname(prev), url);

  if (!fs.existsSync(resolvedPath)) {
    return new Error(`Could not find url: ${url}`);
  }

  const contents = fs.readFileSync(resolvedPath, 'utf-8');

  return { contents };
}

export default function styles(cb) {
  const stylesMinChannel = lazypipe()
    .pipe(
      postcss,
      [
        configs.uncssActive ? uncss.postcssPlugin(uncssOptions) : () => {},
        cssnano({ discardComments: { removeAll: true } }),
      ],
    )
    .pipe(
      rename,
      { suffix: '.min' },
    )
    .pipe(
      gulp.dest,
      `${envPath}/${configs.paths.assets.css}`,
    );

  /**
   * Warning:
   *   1. Returning the gulp stream causes an uncompleted task, I suppose because of the lazypipe.
   *      So we used the cb function to finish the task.
   *   2. For best performance, don't add Sass partials to `gulp.src`
   */

  return gulp
    .src(configs.entry.styles, { sourcemaps: true })
    .pipe(sass({ precision: 10, importer: inlineCssImporter }).on('error', errorHandler))
    .pipe(
      postcss([
        autoprefixer({ cascade: false }),
        flexBugsFixes(),
        isProduction ? mqpacker() : () => {},
      ]),
    )

    .pipe(
      gulp.dest(`${envPath}/${configs.paths.assets.css}`, {
        sourcemaps: isProduction ? false : '.',
      }),
    )
    .pipe(isProduction ? stylesMinChannel() : noop())
    .on('error', errorHandler)
    .on('end', cb);
}
