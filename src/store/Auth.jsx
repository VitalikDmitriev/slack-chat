import { makeAutoObservable } from "mobx";
import { useEffect, useState } from "react";
import { auth } from '../firebase'
import React from "react";
import { useContext } from "react";


class AuthStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
        makeAutoObservable(this, { rootStore: false })
    }

    signIn = async() => {
        // mock
        if (this.email === 'admin@gmail.com' &&
            this.password.length > 6
        ) {
            this.rootStore.appStore.setAccessToken('test_token_web');
            this.rootStore.appStore.updateIsLoggedIn(true);
        } else {
            throw new Error('wrong password');
        }
    }

    signUp = async() => {
        if (this.password && this.email && this.firstName && this.lastName) {
            this.rootStore.appStore.setAccessToken('access_token');
            this.rootStore.appStore.updateIsLoggedIn(true);
        } else {
            throw new Error('not valid params');
        }
    }
}
export default AuthStore;

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    
    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return ( 
    <AuthContext.Provider value = { value }> 
    {!loading && children } 
    </AuthContext.Provider>
    )
}