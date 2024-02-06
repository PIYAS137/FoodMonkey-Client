import { createContext, useEffect, useState } from "react"
import {getAuth,signInWithEmailAndPassword,signInWithPopup,createUserWithEmailAndPassword,signOut,updateProfile,onAuthStateChanged, GoogleAuthProvider} from 'firebase/auth';
import app from "../Firebase/Firebase.config";




export const AuthContext = createContext(null);
const FirebaseAuth = getAuth(app); 
const GoogleAuth = new GoogleAuthProvider()

const FirebaseContext = ({children}) => {
    const [user,setUser] = useState({});
    const [loader,setLoader]=useState(true);

    const Firebase_Login_User = (email, pass) => {
        setLoader(true)
        return signInWithEmailAndPassword(FirebaseAuth, email, pass)
    }

    const Firebase_SignUp_User = (email, pass) => {
        setLoader(true)
        return createUserWithEmailAndPassword(FirebaseAuth, email, pass)
    }

    const Firebase_Google_Login = () => {
        setLoader(true)
        return signInWithPopup(FirebaseAuth, GoogleAuth);
    }

    const Firebase_Logout_User = () => {
        setLoader(true)
        return signOut(FirebaseAuth);
    }

    const Firebase_Update_User = (name, photo) => {
        setLoader(true)
        return updateProfile(FirebaseAuth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(()=>{
        setLoader(true);
        const unSubscribe = onAuthStateChanged(FirebaseAuth,currentUser=>{
            setUser(currentUser);
            setLoader(false)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])


    const AuthInfo={
        user,
        loader,
        Firebase_Login_User,
        Firebase_SignUp_User,
        Firebase_Google_Login,
        Firebase_Logout_User,
        Firebase_Update_User
    }

  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default FirebaseContext