import gulp from 'gulp';
import configs from '../../../configs';

export default function({ isProduction }) {
  const envPath = isProduction ? configs.paths.dist : configs.paths.dev;

  return function() {
    return gulp.src('.tmp/img/**/*').pipe(gulp.dest(`${envPath}/${configs.paths.assets.img}`));
  };
}