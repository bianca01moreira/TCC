import MenuSuperior from "./MenuSuperior"
import MenuLateral from "./MenuLateral"
import TituloPagina from "./Componentes/TituloPagina";

function VisaoGeral(){
    
    const tela = {
        // backgroundColor: "#FFFFF", 
        // minHeight: "50vh", 
    }
    return(
        <div style={tela}>
            <TituloPagina titulo="Visão geral" descricao="Acompanhe seu tratamento de forma fácil e segura.">
                Novo Medicamento
            </TituloPagina>
        </div>
    )
}
export default VisaoGeral