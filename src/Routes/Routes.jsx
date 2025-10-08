import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Errorpage from '../Errorpage/Errorpage';
import Banner from '../components/Banner/Banner';
import Home from '../Home/Home';
import Appdetail from '../Allapps/Appdetail';
import Allapps from '../Allapps/Allapps';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
        {
            index: true,
            loader:()=> fetch('apps.json'),
            path: "/",
            Component: Home,
        },
        {
          path:'/allapps',
          Component: Allapps
        },
        {
          path:'/appdetail/:id',
          Component: Appdetail
        }
    ]
    
  },
]);