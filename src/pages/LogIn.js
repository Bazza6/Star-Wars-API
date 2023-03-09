import { useState } from "react";
import { Styled_ButtonLog, Styled_Container } from "../styled-component/styled";
import { useNavigate } from "react-router-dom";

function Login(props) {

    const navigate = useNavigate();

    const [logUser, setLogUser] = useState({
        logName: "",
        logPassword: ""
    });

    function handleChange(e) {
        let { name, value } = e.target;
        setLogUser(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    function logIn() {
        let arrayUser = JSON.parse(localStorage.getItem("users"));
        let indexName = arrayUser.findIndex(el => el.name == logUser.logName);
        if (indexName === -1) {
            alert("Usuario no encontrado");
            // hay un bug si hay más usuarios con el mismo nombre
        } else if (arrayUser[indexName].password === logUser.logPassword) {
            props.setisAutheticated(true);
            alert("Login de " + logUser.logName + " efectuado");
            navigate('/main')
        }
    }

    console.log("logUser2", logUser);

    return (
        <Styled_Container>

            <h2>LOG IN</h2>

            <p><input type="text" name="logName" placeholder="Nombre..." onChange={handleChange} value={logUser.logName} /></p>

            <p><input type="password" name="logPassword" placeholder="password..." onChange={handleChange} value={logUser.logPassword} /></p>

            <Styled_ButtonLog onClick={logIn}>entra</Styled_ButtonLog>

        </Styled_Container>
    )
}

export default Login;