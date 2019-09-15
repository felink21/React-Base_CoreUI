import React from 'react';
const Tables = React.lazy(() => import('./views/Base/Tables'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/base/tables', name: 'Tables', component: Tables }

];

export default routes;
