
import { Outlet } from 'react-router-dom';
import Heading from './Heading';


function Layout() {
  return (
    <div className="app">
      <Heading/>       {/* ab RouterProvider ke andar hai */}
      <Outlet/>        {/* pages yahan render honge */}
    </div>
  );
}

export default Layout;