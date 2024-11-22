import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const googlelogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post(`http://localhost:5000/authentication`, {
            email: currentUser.email,
          })
          .then((data) => {
            if (data.data) {
              localStorage.setItem("access-token", data?.data?.token);
              setLoading(false);
            }
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
      
    });
    return () => {
      return unsubcribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    googlelogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;