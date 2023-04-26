const Home = () => {

    const clickMe = (e) => {
        console.log(e.target);
    }

    const clickWithParameter = (firstname, e) => {
        console.log('first name is : ' + firstname + e);
    }

    const clickWithTwoParameters = (firstname, lastname) => {
        console.log('first name is : ' + firstname + ' and last name is : ' + lastname);
    }

    return (
        <div className="container">
            <h1>Home Page</h1>
            <button type='button' onClick={clickMe} className='btn btn-primary'>Fn</button>
            <button type='button' onClick={(e) => clickWithParameter('ahmed', e)} className='btn btn-danger'>FnWP</button>
            <button type='button' onClick={() => clickWithTwoParameters('ahmed', 'salhi' )} className='btn btn-warning'>FnW2P</button>
        </div>
    );
}

export default Home;