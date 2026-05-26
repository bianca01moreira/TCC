import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const alinhamento = {
    display:"flex",
    justifyContent:"space-between",

}
function TituloPagina({ titulo, descricao, children }){
    return(
        <div style={alinhamento}>
            <div>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </div>

            <button><FontAwesomeIcon icon="fa-solid fa-plus" style={{color: "#9ca3af",}} />{children}</button>
        </div>
    );
}

export default TituloPagina;