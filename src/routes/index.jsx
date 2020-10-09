import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeContent from "../components/homeContent/HomeContent";
import About from "../components/about/About";
import AboutUs from "../components/aboutUs/aboutUs";
import ErrorPage from "../components/errorPage/ErrorPage";
import Login from "../components/login/Login";
import Cadastro from "../components/cadastro/Cadastro";
import Modal from "../components/modal/Modal";
import CadastroPaciente from "../components/CadastroPaciente/CadastroPaciente";
import FaleConosco from "../components/FaleConosco/FaleConosco";
import List from "../components/list/list";

const mapRoutes = [
  {
    path: "/",
    exact: true,
    component: HomeContent,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "/aboutUs",
    exact: true,
    component: AboutUs,
  },
  {
    path: "/cadastro",
    exact: true,
    component: Cadastro,
  },
  {
    path: "/modal",
    exact: true,
    component: Modal,
  },
  {
    path: "/cadastroPaciente",
    exact: true,
    component: CadastroPaciente,
  },
  {
    path: "/faleConosco",
    exact: true,
    component: FaleConosco,
  },
  {
    path: "/list",
    exact: true,
    component: List,
  },
  {
    path: "/entrar",
    exact: true,
    component: Login,
  },
];

const Routes = () => (
  <Switch>
    {mapRoutes.map(({ exact, path, component: Component }) => (
      <Route exact={exact} path={path} render={() => <Component />} />
    ))}
    <Route>
      <ErrorPage />
    </Route>
  </Switch>
);

export default Routes;
