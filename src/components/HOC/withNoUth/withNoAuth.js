import { Redirect } from 'react-router-dom';

export const withNoAuth = (Component) => {
  const WithNoAuth = (props) => {
    const token = localStorage.getItem('token');
    if (token) {
      return <Redirect to="/course" />;
    }

    return <Component {...props} />;
  };

  return WithNoAuth;
};


export default withNoAuth