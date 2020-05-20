import React from 'react';

function signIn(){

    return (

        <div>
            <form>
  <div className="form-group">
    <label for="">Email address</label>
    <input type="" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Sign In</button>
</form>
        </div>
    )
}

export default signIn;