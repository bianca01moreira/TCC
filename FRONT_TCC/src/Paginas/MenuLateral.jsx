import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const botao = {
    backgroundColor: "transparent",
    border:"none"
}
function MenuLateral() {
    return(
        <div>
            <button style={botao} type='button'>
                <FontAwesomeIcon icon="fa-solid fa-house" style={{color: "#9ca3af",}} />
            </button>
            <button style={botao} type='button'> 
                <FontAwesomeIcon icon="fa-solid fa-pills" style={{color: "#9ca3af",}} />
            </button>
            <button style={botao} type='button'>
                <FontAwesomeIcon icon="fa-regular fa-bell" style={{color: "#9ca3af",}} />
            </button>
            <button style={botao} type='button'>
                <FontAwesomeIcon icon="fa-solid fa-chart-column" style={{color: "#9ca3af",}} />
            </button>
            <button style={botao} type='button'>
                <FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" style={{color: "#9ca3af",}} />
            </button>
            <button style={botao} type='button'>
                <FontAwesomeIcon icon="fa-solid fa-file-medical" style={{color: "#9ca3af",}} />
            </button>
            <button style={botao} type='button'>
                <FontAwesomeIcon icon="fa-solid fa-user-nurse" style={{color: "#9ca3af",}} />
            </button>
            <button style={botao} type='button'>
                <FontAwesomeIcon icon="fa-solid fa-user-doctor" style={{color: "#9ca3af",}} />
            </button>
            <button style={botao} type='button'>
                <FontAwesomeIcon icon="fa-solid fa-users" style={{color: "#9ca3af",}} />
            </button>
            <button style={botao} type='button'>
                <FontAwesomeIcon icon="fa-solid fa-gear" style={{color: "#9ca3af",}} />
            </button>
        </div>
    )
    
}
export default MenuLateral