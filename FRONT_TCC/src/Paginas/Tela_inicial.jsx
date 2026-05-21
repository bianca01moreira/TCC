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
                {/* <Icone 
                    icon = {<FontAwesomeIcon icon="fa-solid fa-pills" style={{color: "#9ca3af",}}/>}
                    href =""
                 >
                    Medicamentos
                </Icone> */}
            </div>
        </div>
    )
}
export default Tela_inicial