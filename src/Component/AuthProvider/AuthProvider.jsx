import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import auth from "../../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)
    
      //User Create
      const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
      }

      //Sign in
      const signInUser = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }

      //Sign OUt
      const logOut = () => {
            setLoading(true);
           return signOut(auth);
      }

      //Sign with Google
      const signWithGoogle = () => {
             setLoading(true);
            return signInWithPopup(auth,googleProvider)
      }


      //User observation
      useEffect(() => {
           
            const unSubscribe =onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);
                  console.log('Observing', currentUser);
                  setLoading(false);
            })
            return () => {
                  unSubscribe();
            }
      },[])


      const userInformation = {
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        signWithGoogle,
      };

      return (
            <AuthContext.Provider value={userInformation}>
                  {children}
            </AuthContext.Provider>
      );
};


export default AuthProvider;

AuthProvider.propTypes = {
      children:PropTypes.node
}