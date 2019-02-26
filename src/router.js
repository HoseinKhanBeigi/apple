import { Home, AppThumbnailSlider, ClipPath } from "./components";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/product/:string",
    exact: true,
    component: AppThumbnailSlider
  },
  {
    path: "/clipPath",
    exact: true,
    component: ClipPath
  }
];

export default routes;
