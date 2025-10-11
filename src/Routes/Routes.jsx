import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Errorpage from '../Errorpage/Errorpage';
import Home from '../Home/Home';
import Appdetail from '../Allapp/Appdetail';
import Allapps from '../Allapp/Allapps';
import Instaltionpage from '../Allapp/Instaltionpage';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('apps.json').then(res => res.json()),
        Component: Home,
      },
      {
        path: "/allapps",
        loader: () => fetch('allapps.json').then(res => res.json()),
        Component: Allapps,
      },
      {
        path: "/installation",
        
        Component: Instaltionpage,
      },
      {
        path: "/appdetail/:id",
        loader: () => fetch('allapps.json').then(res => res.json()),
        Component: Appdetail,
      },
      {
        path: "*",
        Component: Errorpage,
      },
    ],
  },
]);
