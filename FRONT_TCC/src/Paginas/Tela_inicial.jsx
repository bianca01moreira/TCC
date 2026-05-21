import MenuSuperior from "./MenuSuperior"
import MenuLateral from "./MenuLateral"

function Tela_inicial(){
    
    const tela = {
        backgroundColor: "#FFFFF", 
        minHeight: "100vh", 
    }
    return(
        <div style={tela}>
            <div>
                <MenuSuperior></MenuSuperior>
                <MenuLateral></MenuLateral>
            </div>
        </div>
    )
}
export default Tela_inicial