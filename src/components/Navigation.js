import { Link } from 'react-router-dom';
import profile from './icons/profile.png';

const Navigation = () => (
  <section className="header">
    <div className="header-container">
      <div className="header-left">
        <h1 className="header-title">BOOKSTORE CMS</h1>
        <nav>
          <Link className="link" to="/">BOOKS</Link>
          <Link className="link" to="category">CATEGORY</Link>
        </nav>
      </div>
      <div className="profile">
        <img src={profile} alt="profile" />
      </div>
    </div>
  </section>
);

export default Navigation;
