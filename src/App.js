
import './App.css';
import { useEffect, useState } from 'react';
import { deleteUser, fetchRequest, userList, loginUser } from './utils';


const App = () => {
    const [user, setUser] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();
    useEffect( ()=> userList(setUser),[])

    const submitHandler = (e) =>{
      e.preventDefault();
      fetchRequest(setUser, username, email, password)
    }
    const UserHandler = (e) =>{
      // e.preventDefault();
      // userList(setUser);
      console.log(user);
      // return(
      //   <div>
      //     {user.map( (user)=> <p id={user.id}>{user.username}</p>)}
      //   </div>
      // )
    }
    const deleteHandler = () =>{
      deleteUser(setUser, username)
    }
    const loginHandler = () =>{
      loginUser(setUser, username, email, password)
    }
  return (
    <div>
      {/* <h1>{user? `Welcome ${user.username}` : "Please singup"}</h1> */}
      <h1>Please singup</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
        <input type='email' placeholder='email' onChange= {(e)=> setEmail(e.target.value)} />
        <input type='password' placeholder='password' onChange={(e)=> setPasword(e.target.value)} />
        <button type='submit'> Sign UP </button>
      </form>
        <button onClick={UserHandler}>userList</button>
        <button onClick={deleteHandler}>deleteUser</button>
        <button onClick={loginHandler}>Login</button>
        <div>
        </div>
        
    </div>
  );
}

export default App;
