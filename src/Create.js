import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const Create = () => {

    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [waitingServer, setWatingServer] = useState(false);
    const navigator = useNavigate();

    const submitButton = (e) => {
        e.preventDefault();
        const myPost = {
            userId,
            title,
            body,
        }
        console.log(myPost);

        setWatingServer(true);

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(myPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => json)
            .then(() => {
                console.log('New Post added :)');
                setWatingServer(false);
                navigator('/posts');
            });
        }, 2000);
    }

    return (
        <div className="container">
            <form onSubmit={submitButton}>
                <h1>Create Post</h1>
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
                    {!  waitingServer && <button type="submit" onClick={() => submitButton} className="btn btn-success mb-3">Create</button>}
                    {waitingServer && <button type="button" className="btn btn-outline-secondary"  disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Loading...
                    </button>}
                </div>
            </form>
        </div>
    );
};

export default Create;
