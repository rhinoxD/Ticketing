import React from 'react';

const signup = () => {
  return (
    <form>
      <h1>Sign Up</h1>
      <div className='form-group mt-3'>
        <label>Email Address</label>
        <input type='text' className='form-control' />
      </div>
      <div className='form-group mt-3'>
        <label>Password</label>
        <input type='password' className='form-control' />
      </div>
      <button className='btn btn-primary mt-3'>Sign Up</button>
    </form>
  );
};

export default signup;
