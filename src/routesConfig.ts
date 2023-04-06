export interface Route {
  path: string;
  name: string;
}

const config = {
  home: {
    path: "/",
    name: "Home",
  },
};

type routesType = typeof config;

export const routes: routesType = config;
