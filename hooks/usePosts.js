import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';


const usePosts = limit =>{
    
    const [ posts, setPosts ] = useState([]);
    const [ lastpost, setLastPost ] = useState();
    const [ firstpost, setFirstPost ] = useState();
    const [ olderposts, setOlderPosts ] = useState(false)
    const [ newerposts, setNewerPosts ] = useState(false)
    const [ islast, setIsLast ] = useState(false)
    const [ currentpage, setCurrentPage ] = useState(0)

    const isfirst = (currentpage === 0)

    const { firebase } = useContext(FirebaseContext);

    const query = (observer) => {
        let postsCollections = firebase.db.collection('posts').orderBy('created_at', 'desc')
        if(olderposts) {            
            setOlderPosts(false)
            postsCollections = postsCollections.startAfter(lastpost).limit(limit)
        } else if(newerposts) {
            setNewerPosts(false)
            postsCollections = postsCollections.endBefore(firstpost).limitToLast(limit)
        }else{
            postsCollections = postsCollections.limit(limit)
        }

        return postsCollections.onSnapshot(observer);
    };

    const prevPage = () => {
        const newCurrentPage = (currentpage - 1)
        setCurrentPage(newCurrentPage)
        setOlderPosts(true)
    }

    const nextPage = () => {
        const newCurrentPage = (currentpage + 1)
        setCurrentPage(newCurrentPage)
        setNewerPosts(true)
    }

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    function fetchPosts() {
        const unsubscribe = query({
            next: querySnapshot => {
                const last = querySnapshot.docs[querySnapshot.docs.length-1]
                const first = querySnapshot.docs[0]
                setLastPost(last)           
                setFirstPost(first) 

                const posts = 
                    querySnapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    });
                setPosts(posts);       
                scrollTop()                      
            },
            error: () => console.log('error')
        });
        return unsubscribe;
    }
    
    useEffect(() => {

        fetchPosts()
        
    }, [currentpage]);

    return {
        posts,
        isfirst,
        islast,
        prevPage,
        nextPage
    }
}

export default usePosts;