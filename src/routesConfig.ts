export interface Route {
  path: string;
  name: string;
}

const config = {
  home: {
    path: "/",
    name: "Home",
  },
  createUser: {
    path: "/create-user",
    name: "Creat User",
  },
};

type routesType = typeof config;

export const routes: routesType = config;
