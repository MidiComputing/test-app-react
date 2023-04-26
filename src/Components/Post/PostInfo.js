import { useParams } from "react-router-dom";
import PostsModel from "./PostsModel";
import Spinner from 'react-bootstrap/Spinner';

const PostInfo = () => {

    const {id} = useParams();
    let urlPosts = 'https://jsonplaceholder.typicode.com/posts/'+id;
    const {isWaiting, serverError, posts} = PostsModel(urlPosts);

    return(
        <div className="container">
            <h1>PostInfo - N°{id}</h1>
            {isWaiting && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            {serverError && <h2>Error on server!...</h2>}
            {posts && <div className="card">
                <div className="card-body">
                
                    <h5 className="card-title">{posts.id}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{posts.title}</h6>
                    <p className="card-text">{posts.body}</p>
                </div>
            </div>}
        </div>
    );
}

export default PostInfo;