import React from 'react';

function Landing() {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Connecting Developers</h1>
          <p className='lead'>
            Create developer profiles/portfolios, share posts and get help from
            other developers
          </p>
          <div className='buttons'>
            <a href='register.html' className='btn btn-primary'>
              Sign Up
            </a>
            <a href='Login.html' className='btn'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
