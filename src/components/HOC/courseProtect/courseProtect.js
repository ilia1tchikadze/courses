import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export const courseProtect = (Component) => {
  const CourseProtect = (props) => {
  

    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to="/Login" />;
    }

    return <Component {...props} />;
  };

  return CourseProtect;
};

export default courseProtect