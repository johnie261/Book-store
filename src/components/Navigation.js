import { Link } from "react-router-dom"

const Navigation = () => {
    return <section className="header">
        <h1 className="header-title">BOOKSTORE CMS</h1>
        <nav>
            <Link className="link" to="/">BOOKS</Link>
            <Link className="link" to="category">CATEGORY</Link>
        </nav>
    </section>
}

export default Navigation;