import TituloPagina from "./Componentes/TituloPagina";
import MenuSuperior from "./MenuSuperior"
import MenuLateral from "./MenuLateral"

function Medicamentos(){
    return(
        <div>
            <TituloPagina titulo="Medicamentos" descricao="Gerencie todos os medicamentos que você utiliza.">
                Novo Medicamento
            </TituloPagina>
            
        </div>
    );
}
export default Medicamentos;