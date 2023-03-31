import App from '../App';
import { Home, Categories } from '../pages';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
    ],
  },
]);

export default router;
