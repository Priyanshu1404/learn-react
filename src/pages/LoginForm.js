import { useEffect, useState } from "react";

export function LoginForm(props) {
    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const [loginstate,loginStateChanger]=useState(false);

    // useEffect(()=> {
    //     alert('hey we are mounted/rendered on screen');
    // });

    useEffect(() => {
        if(loginstate == true) {
            console.log("You are logged in");
        }
    }, [loginstate])

    const nameChanged = (e) => {
        const val=e.target.value
        setName(val)
    }
    const passwordChange = function passwordChange(event){
        const p=event.target.value
        setPassword(p)
    }

    const checkNamePassword = function checkNamePassword(){
        if(name==password){
           // const value='true'
            loginStateChanger(true)
            console.log("ur loged in")
        }
        else {
            console.log("Wrong user name or password");
        }
    }


    if(loginstate == true) {
        return(
            <div className="App">
                <p>Welcome, {name} !</p>
            </div>
        );
    }
    else {
        return(
            <div className="App">
                <h3>Login form</h3>
                <input type="text " placeholder="enter your name" onChange={nameChanged}></input><br/>
                <input type="password" placeholder='enter your password' onChange={passwordChange}></input><br/>
                <button type="button" onClick={checkNamePassword}>login</button>
            </div>
        );
    }
}