import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/FirebaseConfig";
import useAxiosToken from "../Hooks/useAxiosToken/useAxiosToken";
import useAxiosBase from "../Hooks/useAxiosBase/useAxiosBase";
export const UserAuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosBase = useAxiosBase();
  // Create Account
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update User name, photo
  const UpdateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // Sign In Account
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign In with Google
  const provider = new GoogleAuthProvider();
  const SignInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // Sign Out
  const SignOut = () => {
    return signOut(auth);
  };

  // Manage user state to check if a user logged in or not
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const email = { email: currentUser.email };
        console.log("Current user", currentUser);
        setUser(currentUser);
        
        //Request for token from server
        const { data } = await axiosBase.post("/jwt", email);
        // console.log(data);
        //Set token to local storage
        if (data) {
          localStorage.setItem("access-token", data);
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, [axiosBase]);
  const userAuthInfo = {
    CreateUser,
    SignIn,
    SignInWithGoogle,
    user,
    loading,
    SignOut,
    UpdateUserProfile,
  };
  return (
    <UserAuthContext.Provider value={userAuthInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

UserContext.propTypes = {
  children: PropTypes.node.isRequired, //This line is used to check if the children prop is a valid React node
};

export default UserContext;
