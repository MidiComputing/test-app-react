import { Link, useNavigate } from "react-router-dom";
//import PostInfo from "./PostInfo";

const PostsList = ({postsProps, titlePage}) => {

    const navigator = useNavigate();

    const deletAction = (idPost) => {

        fetch('https://jsonplaceholder.typicode.com/posts/'+idPost, {
            method: 'DELETE',
        }).then(()=>{
            navigator('/');
        });
        
        /* const updatePosts = posts.filter(post => post.id != idPost);
        setPost(updatePosts); */
    }

    return(
        <div>
            <h3>{titlePage}</h3>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {postsProps.map((post)=>(
                            <tr key={post.id}>
                                <th>{post.id}</th>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td><button type="button" onClick={() => deletAction(post.id)} className="btn btn-danger">Delete</button></td>
                                <td><Link to={"/posts/"+post.id} className="btn btn-info">More</Link></td>
                                <td><Link to={"/edit/"+post.id} className="btn btn-success">Edit</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PostsList;
