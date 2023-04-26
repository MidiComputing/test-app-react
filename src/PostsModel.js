import { useEffect, useState } from "react";

const PostsModel = (url) => {

    const [isWaiting, setIsWaiting] = useState(true);
    const [serverError, setServerError] = useState(null);
    const [posts, setPost] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw Error('Can not connect to the server!.');
                }
                return response.json();
            })
            .then(data => {
                setPost(data);
                setIsWaiting(false);
            }).catch(e => {
                console.log(e.message);
                setServerError(e.message);
                setIsWaiting(false);
            });
        }, 1000);
      
    },[url]);

    return {isWaiting, serverError, posts};
}

export default PostsModel;