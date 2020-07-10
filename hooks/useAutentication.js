import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

function useAutentication() {
    const [ authuser, setAuthUser ] = useState(null);

    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        });

        return () => unsuscribe();
    }, []);

    return authuser;
}

export default useAutentication;