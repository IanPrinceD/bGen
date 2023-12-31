import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Pricelist from './pages/Pricelist';
import Brand from './pages/Brand';
import BuyNow from './pages/BuyNow';

function Route() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/product',
      element: <Product />,
    },
    {
      path: '/pricelist',
      element: <Pricelist />,
    },
    {
      path: '/brand',
      element: <Brand />,
    },
    {
      path: '/buynow',
      element: <BuyNow />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default Route;
