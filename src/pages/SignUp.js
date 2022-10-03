import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Styled_Container, Styled_Link } from "../styled-component/styled";

function SignUp() {

    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(false);
    const [user, setUser] = useState({});
    const [users, setUsers] = useState(() => {
        let def = [];
        let local = JSON.parse(localStorage.getItem("users"));
        return local ? local : def;
    });

    function handleChange(e) {
        let { name, value } = e.target;
        setUser(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    function addAccount() {
        console.log("user", user);
        if (user.name.length === 0 || user.password.length === 0) {
            alert("nombre y password son obligatorios")
        } else {
            setUsers(prev => [...prev, user]) // así se agrega un nuevo objeto a un array
            setIsRegister(true);
            // si pongo aqui el navigate to log-in no me guarda el user en localstorage, "no le da tiempo.."
        }
    }

    // LocalStorage SET
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users]);

    return (
        <>
            {isRegister === false ? <Styled_Container>
                <h2>CREATE YOUR ACCOUNT</h2>
                <p><input type="text" name="name" placeholder="Nombre..." onChange={handleChange} value={user.name} /></p>

                <p><input type="text" placeholder="Apellido..." /></p>

                <p><input type="text" placeholder="email..." /></p>

                <p><input type="password" name="password" placeholder="password..." onChange={handleChange} value={user.password} /></p>

                <p><input type="checkbox" value="asdfsadf" /><span>Yes! I would like to receive by email special offers
                    and updates about Lucasfilm Ltd. and other bla bla bla</span></p>

                <button onClick={addAccount}>create Account</button>
            </Styled_Container> :
                <Styled_Container>
                    <h1>Usuario creado con exito!</h1>
                    por favor ir al <Styled_Link to="/log-in"><h1>LOG IN</h1></Styled_Link>
                </Styled_Container>}


        </>
    )
}

export default SignUp;