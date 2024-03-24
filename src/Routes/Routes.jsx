import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Donation from '../pages/Donation';
import Statistics from '../pages/Statistics';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import DonationDetails from '../pages/DonationDetails';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/donation',
          element: <Donation></Donation>,
          loader: () => fetch('/data.json')
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/donation-details/:donateId',
          element: <DonationDetails></DonationDetails>,
          loader: () => fetch('/data.json')
        },
      ],
    },
  ]);

  export default router;