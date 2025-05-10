import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";

// 1️⃣ Context create
export const AuthContext = createContext();

// 2️⃣ Firebase Auth init
const auth = getAuth(app);

// 3️⃣ AuthProvider function
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 4️⃣ Create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 5️⃣ Sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 6️⃣ Update user info
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData).then(() => {
      setUser({ ...auth.currentUser }); // update context value
    });
  };

  // 7️⃣ Logout user
  const logOut = () => {
    return signOut(auth);
  };

  // 8️⃣ Watch auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 9️⃣ Provide everything
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
  };

  //  🔟 Fix: use AuthContext.Provider
  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
