import { height } from "@fortawesome/free-brands-svg-icons/fa11ty";
import "./Botoes.css"

const botao = {
    display:"flex",
    justifyContent:"row",
    alignItems: "center",
    gap:"10px"
}

function Botoes({children, titulo}){
    return(
        <>
            <div>
                <button type='button' style={botao} className="botaoMenuLateral"> 
                        {children} 
                <p>{titulo}</p>
                </button>
                
            </div>
        </>
    )
}
export default Botoes;