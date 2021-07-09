export const login = async (credentials) => {
  try {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',

      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.trace(error);
  }
};


export const signUp = async (credentials) => {
  try {
    const response = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',

      },
      body: JSON.stringify(credentials),
    });

    return await response.json();
  } catch {
    console.error('Register Error  ');
  }
};

export const logOut = async (credentials) => {
  try {
    localStorage.clear();
    return credentials;
  } catch {
    console.error('Logout Error');
  }
};