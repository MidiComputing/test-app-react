import { useState } from "react";

const About = () => {

    //let firstname = 'Mohamed';
    const [firstname, setFirstname] = useState('Mohamed'); 
    const [secondname, setSecondname] = useState('Ali'); 
    const [age, setAge] = useState(22); 
    const [myarray, setMyarray] = useState(["a", "b", "c"]); 

    const changeName = () => {
        setFirstname('Ahmed');
        setSecondname('Salhi');
        setAge(30);
        setMyarray([1, 2, 3]);
    }

    return (
        <div className="container">
            <h1>About Page</h1> 
            <h4>{ firstname }</h4> 
            <h4>{ secondname }</h4> 
            <h4>{ age }</h4> 
            <h4>{ myarray }</h4> 
            <button type='button' onClick={changeName} className='btn btn-primary'>Fn</button>   
        </div>
    );
}

export default About;