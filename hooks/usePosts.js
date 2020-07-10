import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';


const usePosts = orden =>{
    
    const [ posts, guardarPosts ] = useState([]);

    const { firebase } = useContext(FirebaseContext);
    const productsQuery = (observer) => {
        return firebase.db.collection('posts')
            .onSnapshot(observer);
    };

    useEffect(() => {
        const unsubscribe = productsQuery({
            next: querySnapshot => {
                const posts = 
                    querySnapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    });
                    guardarPosts(posts);
                    console.log(posts)
            },
            error: () => console.log('error')
        });
        return unsubscribe;
    }, []);



    function manejarSnapshot(snapshot){
        const posts = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
        });
        
        guardarPosts(posts);
    }

    return {
        posts
    }
}

export default usePosts;