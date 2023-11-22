import {Children, Suspense} from 'react'

import { BrowserRouter } from "react-router-dom";
import {Routes, Route, NavLink, Navigate} from 'react-router-dom';

import logo from '../assets/react.svg';
import { routes } from "./routes";

const Navigation = () => {
  return ( 
    <Suspense fallback={<span>Loading</span>}>

      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {Children.toArray(routes.map(({to, name}) => (
                <li>
                  <NavLink to={to} className={({isActive}) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                </li>
              )))}
              {/* <li>
                <NavLink to="/lazy1" className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
              </li>
              <li>
                <NavLink to="/lazy2" className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
              </li>
              <li>
                <NavLink to="/lazy3" className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
              </li> */}
            </ul>
          </nav>


          <Routes>
            {routes.map(route => (
              <Route 
                key={route.to}
                path={route.path} 
                element={<route.Component/>}/>

            ))}
            {/* <Route path="lazy2" element={<LazyPage2/>}/>
            <Route path="lazy3" element={<LazyPage3/>}/> */}

            <Route path="/*" element={<Navigate to="/lazy1"/>}/>
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  );
}
 
export default Navigation;