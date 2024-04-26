import { lazy } from 'react';

// внутри /**/ прописываем начало имени, которое будем видеть в Network
const MainPage = lazy(() => import(/* webpackChunkName: "page_Main" */ './MainPage/Main.page'));
const AboutPage = lazy(() => import(/* webpackChunkName: "page_About" */ './AboutPage/About.page'));

export {
  MainPage,
  AboutPage,
};