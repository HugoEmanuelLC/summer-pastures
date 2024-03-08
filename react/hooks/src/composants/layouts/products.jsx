import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
    return (
        <div>
            <h1>Products</h1>
            <input type="search" placeholder="Search products..." />

            <nav>
                <NavLink to="list">list</NavLink>
                <NavLink to="new">new</NavLink>
            </nav>
            
            <Outlet />
            
            
        </div>
    )
}