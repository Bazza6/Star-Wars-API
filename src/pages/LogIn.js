import { useState } from "react";
import { Styled_Container } from "../styled-component/styled";
import { useNavigate } from "react-router-dom";



function Login(props) {

    const navigate = useNavigate();

    const [logUser, setLogUser] = useState({});

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

        console.log("logUser1", logUser);
        console.log("arrayUser", arrayUser);

        let indexName = arrayUser.findIndex(el => el.name == logUser.logName);
        console.log("indexName", indexName);

        if (indexName === -1) {
            console.log("indexName", indexName);
            alert("Usuario no encontrado");
        } else if (arrayUser[indexName].password === logUser.logPassword) {
            props.setisAutheticated(true);
            console.log("Login de " + logUser.logName + " efectuado");
            alert("Login de " + logUser.logName + " efectuado");
            navigate('/main') // así se agrega un nuevo objeto a un array


        }

    }

    console.log("logUser2", logUser);

    return (
        <Styled_Container>

            <h2>LOG IN</h2>

            <p><input type="text" name="logName" placeholder="Nombre..." onChange={handleChange} value={logUser.logName} /></p>

            <p><input type="password" name="logPassword" placeholder="password..." onChange={handleChange} value={logUser.logPassword} /></p>

            <button onClick={logIn}>Log In</button>

        </Styled_Container>
    )
}

export default Login;