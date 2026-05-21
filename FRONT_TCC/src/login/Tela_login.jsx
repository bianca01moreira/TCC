import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/imagens/logo.png'
import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom'
function Tela_login() {
    const tela = { 
        backgroundColor: "#67a08f", 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        fontFamily: "Arial",
    }
    const card_login = { 
        backgroundColor: "#FFFFFF", 
        width: "380px", 
        minHeight: "420px", 
        borderRadius: "25px", 
        padding: "35px", 
        boxShadow: "0px 8px 25px rgba(0,0,0,0.12)", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center" 
    }
    const titulo = { 
        color: "#97BF8A", 
        textAlign: "center", 
        marginBottom: "30px", 
        fontSize: "32px" 
    }
    const fieldset = { 
        border: "none", 
        display: "flex", 
        flexDirection: "column", 
        gap: "18px" 
    }
    const label = { 
        display: "flex", 
        flexDirection: "column", 
        color: "#003E2B", 
        fontWeight: "bold", 
        gap: "8px" 
    }
    const input = { 
        width: "100%", 
        minWidth: "0", 
        padding: "14px 14px 14px 0px", 
        border: "none", 
        outline: "none", 
        fontSize: "15px", 
        backgroundColor: "transparent" 
    }
    const botao = { 
        marginTop: "10px", 
        padding: "14px", 
        borderRadius: "12px", 
        border: "none", 
        backgroundColor: "#003E2B", 
        color: "white", 
        fontSize: "16px", 
        fontWeight: "bold", 
        cursor: "pointer", 
        transition: "0.3s" 
    }
    const texto_inferior = { 
        marginTop: "20px", 
        textAlign: "center", 
        color: "#769283", 
        fontSize: "14px" 
    }
    const area_input = { 
        display: "flex", 
        alignItems: "center", 
        backgroundColor: "#E8EAE5", 
        border: "2px solid #E8EAE5", 
        borderRadius: "12px", 
        paddingLeft: "14px", 
        gap: "10px", 
        boxSizing: "border-box" 
    }
    const logo_estilo = { 
        width: "250px", 
        height: "250px", 
        objectFit: "contain", 
        alignSelf: "center", 
        marginBottom:"-100px",
        marginTop:"-50px" 
    }
    const navigate = useNavigate();

    const Entrar = () =>{
        navigate('/Principal');
    };
    return (
        <div style={tela}>
            <div style={card_login}>   
                <img
                    src={logo}
                    alt="Logo" 
                    style={logo_estilo}
                />  
                <h1 style={titulo}>Bem-vindo</h1>
                <form action={''} method="POST" encType="multipart/form-data">
                    <fieldset style={fieldset}>
                        <label style={label}>
                            Usuário:
                            <div style={area_input}>
                                <FontAwesomeIcon icon="fa-regular fa-envelope" style={{color: "#97bf8a",}} />                                <input type="text" name="usuario" style={input} placeholder='usuario@gmail.com'/>
                            </div>
                        </label>
                        <label style={label}>
                            Senha:
                            <div style={area_input}>
                                <FontAwesomeIcon icon="fa-solid fa-lock" style={{color: "#97bf8a",}} />
                                <input type="password" name="senha" style={input} placeholder='digite sua senha'/>
                            </div>
                        </label>
                        <button type="button" name='botaoEntrar' style={botao} onClick={Entrar}>Enviar</button>
                    </fieldset>
                </form>
                <Link style={texto_inferior} to='/Cadastrar'> Não possui conta? Cadastre-se </Link>
            </div>
        </div>
    )
}

export default Tela_login
