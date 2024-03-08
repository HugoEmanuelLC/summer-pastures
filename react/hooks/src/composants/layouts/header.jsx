import { NavLink } from "react-router-dom";



export default function Header(props) {

    function buttons(onClick, text=["link", ""], show=true, url ="") {
        return (
            <NavLink to={url} onClick={onClick}>
                {show ? text[0] : text[1]}
            </NavLink>
        )
    }

    const handleClicked = () => {
        props.setShowTimer(false)
    }   

    return (
        <header>
            <nav>
                <ul>
                    <li>{buttons(props.onClick, ["HIDE TIMER", "SHOW TIMER"], props.showTimer, "/")}</li>
                    <li>{buttons(handleClicked, ["test route"], true, "test")}</li>
                    <li>{buttons(handleClicked, ["products"], true, "products")}</li>
                    <li>{buttons(()=>{}, ["not found"], true, "error")}</li>
                </ul>
            </nav>
            {/* <Outlet /> */}
        </header>
    )
}

