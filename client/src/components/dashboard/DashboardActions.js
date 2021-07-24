import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
  return (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome John Doe
      </p>
      <div className='dash-buttons'>
        <Link to='/edit-profile' className='btn'>
          <i className='fas fa-user-circle text-primary'></i> Edit Profile
        </Link>
        <Link to='/add-experience' className='btn'>
          <i className='fab fa-black-tie text-primary'></i> Add Experience
        </Link>
        <Link to='/add-education' className='btn'>
          <i className='fas fa-graduation-cap text-primary'></i> Add Education
        </Link>
      </div>
    </Fragment>
  );
};
