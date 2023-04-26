import PostsList from "./PostsList";
import PostsModel from "./PostsModel";
import Spinner from 'react-bootstrap/Spinner';

const Posts = () => {
    
    let urlPosts = 'https://jsonplaceholder.typicode.com/posts';
    const {isWaiting, serverError, posts} = PostsModel(urlPosts);
    // eslint-disable-next-line no-lone-blocks
    {/*const [checkAuth, setCheckAuth] = useState('false');
    const [posts1, setPost1] = useState([
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
            userId: 1,
            id: 5,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
    ]);

    */}

    return (
        <div>
            {/* <button type="button" onClick={() => setCheckAuth('true')} className="btn btn-info">Info</button>
            <h4>Status: {checkAuth} </h4> */}
            {serverError && <h1>{serverError}...</h1>}
            {isWaiting && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            {/*{isWaiting && <h1>Please wait to load Data...</h1>}*/}
            {posts && <PostsList postsProps={posts} titlePage="List of posts"/>}
            {/*{posts && <PostsList postsProps={posts} titlePage="List of posts" deletAction={deletAction} />}*/}
        </div>
    );
}

export default Posts;