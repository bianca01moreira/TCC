import { Outlet } from "react-router-dom"

import MenuSuperior from "../MenuSuperior"
import MenuLateral from "../MenuLateral"

function Layout(){

    const layout = {
        display:"flex"
    }

    const conteudo = {
        width:"100%",
        padding:"30px",
        backgroundColor:"#F9FAFB",
        minHeight:"40vh"
    }

    return(
        <div>

            <MenuSuperior />

            <div style={layout}>

                <MenuLateral />

                <div style={conteudo}>
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default Layout