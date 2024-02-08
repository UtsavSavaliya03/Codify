import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesData } from './RoutesData/Routes.jsx';

export default function Main() {
  return (
    <div>
      <Routes>
        {
          RoutesData?.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))
        }
      </Routes>
    </div>
  )
}
