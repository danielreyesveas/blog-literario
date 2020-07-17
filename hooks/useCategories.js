import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';


const useCategories = orden =>{
    
    const [ categories, setCategories ] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    const query = (observer) => {
        return firebase.db.collection('categories')
            .onSnapshot(observer);
    };

    useEffect(() => {
        const unsubscribe = query({
            next: querySnapshot => {
                const categories = 
                    querySnapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    });
                    setCategories(categories);
            },
            error: () => console.log('error')
        });
        return unsubscribe;
    }, []);



    function manejarSnapshot(snapshot){
        const categories = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
        });
        
        setCategories(categories);
    }

    return {
        categories
    }
}

export default useCategories;