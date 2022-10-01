import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Styled_Container } from "../styled-component/styled";

function SignUp() {

    const navigate = useNavigate();


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
        setUsers(prev => [...prev, user]) // así se agrega un nuevo objeto a un array
        //navigate('/log-in') 
    }


    // LocalStorage SET
    useEffect(() => {
        console.log("FATTO!");
        localStorage.setItem("users", JSON.stringify(users))
    }, [users]);

    return (
        <Styled_Container>
            <h2>CREATE YOUR ACCOUNT</h2>
            <p><input type="text" name="name" placeholder="Nombre..." onChange={handleChange} value={user.name} /></p>

            <p><input type="text" placeholder="Apellido..." /></p>

            <p><input type="text" placeholder="email..." /></p>

            <p><input type="password" name="password" placeholder="password..." onChange={handleChange} value={user.password} /></p>

            <p><input type="checkbox" value="asdfsadf" /><span>Yes! I would like to receive by email special offers
                and updates about Lucasfilm Ltd. and other products and services from</span></p>

            <button onClick={addAccount}>create Account</button>
        </Styled_Container>
    )
}

export default SignUp;