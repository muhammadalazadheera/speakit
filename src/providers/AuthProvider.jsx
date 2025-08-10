import React, { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  getAuth,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider()

  const signUpUser = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userInfo.user;

      await updateProfile(user, {
        displayName: name,
        photoURL,
      });

      return userInfo;
    } catch (error) {
      setLoading(false);
      toast.error(`${error.message}` || "An error occurred during sign-up");
    }
  };

  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setLoading(false);
      toast.error(`${error.message}` || "An error occurred during sign-up");
    }

  };

  const signInUserWithGoogle = async () => { //signInUserWithGoogle
    setLoading(true);
    try {
      return await signInWithPopup(auth, provider);
    } catch (error) {
      setLoading(false);
      toast.error(`${error.message}` || "An error occurred during sign-in");
    }
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = async (displayName, photoURL) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      await updateProfile(user, {
        displayName,
        photoURL,
      })
    }
  };

  const changePassword = async (password) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      await updatePassword(user, password)
        .then(() => alert("Password Updated"))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    setLoading,
    signUpUser,
    signInUser,
    signOutUser,
    updateUser,
    changePassword,
    signInUserWithGoogle  
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;