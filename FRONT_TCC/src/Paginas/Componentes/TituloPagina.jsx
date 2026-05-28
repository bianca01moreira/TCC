import { height, width } from '@fortawesome/free-brands-svg-icons/fa11ty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const alinhamento = {
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
}

const botao = {
    width:"160px",
    height:"40px",
    backgroundColor:"#003E2B",
    color:"#fff",
    padding:"2px",
    border:"none",
    borderRadius:"8px",
    margin:"1%"
}

const p = {
    paddingTop:"-2px",
    color:"#4e4e4e",
    fontSize:"15x"
}

const h1 = {
    paddingBottom:"0px",
    color:"#003E2B",
    fontSize:"28px"
}
function TituloPagina({ titulo, descricao, children }){
    return(
        <div style={alinhamento}>
            <div>
                <h1 style={h1}>{titulo}</h1>
                <p style={p}>{descricao}</p>
            </div>
            <button style={botao}><FontAwesomeIcon icon="fa-solid fa-plus" style={{color:"#ffff",}} />{children}</button>
        </div>
    );
}

export default TituloPagina;