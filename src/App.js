/* 
Author: Matthew Kearney
Date: June 21, 2024
*/

import './App.css';
import { useRoutes, BrowserRouter as Router } from "react-router-dom";


//Imports of pages
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Ideas from './pages/Ideas.js';
import Work from "./pages/Work.js";


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/ideas", element: <Ideas /> },
    { path: "/work", element: <Work />}
  ]);
  return routes;
};

/* 
structure recommended by Hari Reddy on StackOverflow
https://stackoverflow.com/questions/65425884/react-router-v6-error-useroutes-may-be-used-only-in-the-context-of-a-route
*/

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

/*
Note that issues may arise from application of Box.js (for Ideas and Projects) if we do not properly supply its 
properties in application, "props". This error may result in the entire page (ie- ideas or projects) not loading at all 

In other words, must supply all props that are used in Box.js 
*/ 