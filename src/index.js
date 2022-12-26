import { spinnerPlay, spinnerStop } from './js/spinner';
import { renderTrendingMovies } from './js/API/get-trending';

import { renderModalMovie } from './js/API/get-movie-info';

import { onFormSubmit } from './js/gallery';
import { openModalTeam } from './js/open-modal-team';

import './js/switch-bg-theme';

import { scrollFunction } from './js/button-up';
import { refs } from './js/refs';

import Cookies from 'js-cookie';

import {
  createMarkupCookies,
  COOKIE_NAME,
  expires,
  cookies,
} from './js/cookies';

import { onCliсkBtnWatchGallery } from './js/API/get-movie-trailer';

///Запуск спінера при завантаженні
spinnerPlay();
window.addEventListener('load', function (e) {
  spinnerStop();
});
///Закінчення спінера при завантаженні

///Запуск кнопки вверх при скролі
window.addEventListener('scroll', scrollFunction);

refs.galleryMovies.addEventListener('click', onCliсkBtnWatchGallery);
