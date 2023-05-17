import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register A user 
    const registerAUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update A user profile 
    const updateAUserProfile = (user, name, photoUrl) => {
        setLoading(true)
        return updateProfile(user, {
            displayName: name,
            photoURL: photoUrl,
        })
    }

    const authInfo = {
        user,
        loading,
        setLoading,
        registerAUser,
        updateAUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;