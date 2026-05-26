import { height } from "@fortawesome/free-brands-svg-icons/fa11ty";
import "./Botoes.css"
const botao = {
    display:"flex",
    justifyContent:"row",
    alignItems: "center",
    gap:"10px",
}


function Botoes({children, titulo, ativo}){
   
    return(
        <>
            <div>
                <button 
                    type='button' 
                    style={botao} 
                    className={ativo ? "botaoMenuLateral ativo" : "botaoMenuLateral"}
                > 
                        {children} 
                <p>{titulo}</p>
                </button>
                
            </div>
        </>
    )
}
export default Botoes;