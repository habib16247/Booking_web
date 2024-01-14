import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}



const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: ""
};

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const login = async (email, password) => {
    setState({...state, loading: true})
    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", { email, password });
      setState({ loading: false, user: response.data.details });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setState({...state, user: null});
  };

  const value = { state, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
