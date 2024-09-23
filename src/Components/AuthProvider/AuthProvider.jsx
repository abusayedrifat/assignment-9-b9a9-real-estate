import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import PropTypes from "prop-types";

 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider
    const gitHubProvider = new GithubAuthProvider
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogIn = () =>{
        return signInWithPopup(auth, gitHubProvider)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(unSubscribe);
            
        })
    },[])
    const authInfo = { googleLogIn, gitHubLogIn, createUser, logIn, user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

 AuthProvider.propTypes ={
    children: PropTypes.node
}