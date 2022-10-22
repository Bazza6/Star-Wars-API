import { useState, useEffect } from "react";
import { Styled_ButtonLog, Styled_Container, Styled_Link } from "../styled-component/styled";

function SignUp() {

    const [isRegister, setIsRegister] = useState(false);
    const [user, setUser] = useState({
        name: "",
        password: ""
    });
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
            setUsers(prev => [...prev, user]) // agregamos un nuevo objeto a un array
            setIsRegister(true);
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

                <p><input type="checkbox" value="" /><span>Yes! I would like to receive by email special offers
                    and updates about bla bla bla</span></p>

                <Styled_ButtonLog onClick={addAccount}>create Account</Styled_ButtonLog>
            </Styled_Container> :
                <Styled_Container>
                    <h1>Usuario creado con exito!</h1>
                    por favor ir al <Styled_Link to="/log-in"><h2>LOG IN</h2></Styled_Link>
                </Styled_Container>}


        </>
    )
}

export default SignUp;