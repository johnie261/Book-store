import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const BookNav = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

export default BookNav;
