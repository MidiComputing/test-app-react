import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const Edit = () => {

    const {id} = useParams();
    const [isWaiting, setIsWaiting] = useState(true);
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [waitingServer, setWatingServer] = useState(false);
    const navigator = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw Error('Can not connect to the server!.');
                }
                return response.json();
            })
            .then(data => {
                setUserId(data.userId);
                setTitle(data.title);
                setBody(data.body);
                setIsWaiting(false);
            }).catch(e => {
                console.log(e.message);
            });
        }, 500);
    },[]);

    const submitButton = (e) => {
        e.preventDefault();
        const myPost = {
            id,
            userId,
            title,
            body,
        }
        console.log(myPost);

        setWatingServer(true);

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
                method: 'PUT',
                body: JSON.stringify(myPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => {
                console.log('Post is updated :)');
                setWatingServer(false);
                navigator('/posts');
            });
        }, 2000);

    }

    return (
        <div className="container">
            <form onSubmit={submitButton}>
            <h1>Update Post</h1>
            {isWaiting && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput0" className="form-label">
                        User ID
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput0"
                        required
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Body
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <div className="col-auto">
                    {!  waitingServer && <button type="submit" onClick={() => submitButton} className="btn btn-success mb-3">Update</button>}
                    {waitingServer && <button type="button" className="btn btn-outline-secondary" disabled>Please wait..</button>}
                </div>
            </form>
        </div>
    );
};

export default Edit;
