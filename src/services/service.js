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



export const logOut = async (credentials) => {
  try {
    localStorage.clear();
    return credentials;
  } catch {
    console.error('Logout Error');
  }
};