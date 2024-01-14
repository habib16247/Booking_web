import React, { useContext } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'; // Add this line
import styles from "../Registration/Registration.module.css"; // Ensure correct path
import { useAuth } from '../../../AuthProvider/AuthProvider';


const SignIn = () => {
  const {state, login, logout} = useAuth()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
  };

  const logoutBtn = () => {
    logout();
    navigate("/")
    console.log("success")
  };

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await login(email, password);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.bg2}>
      <div className={styles.container}>
        <h2>GoWilds Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className={styles.formGroup}>
            <label>
              <FaEnvelope /> Email:
              <input
                type="email"
                name="email"
                placeholder='Enter email'
                {...register('email', { required: true })}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              <FaLock /> Password:
              <input
                type="password"
                name="password"
                placeholder='Enter password'
                {...register('password', { required: true })}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          
          <div>
            <button className={styles.registerBtn} type="submit">Sign In</button>
          </div>
        </form>
        <button type='submit' onClick={logoutBtn}>Log Out</button>
        <p style={{ marginTop: "1rem" }}>Have any account? <NavLink style={{ color: "blue" }} to="/signup2">Register Here</NavLink></p>
        <div style={{ display: "flex" }} className={styles.navigateBtn}>
          <button onClick={() => navigate("/")} className={styles.backBtns}>Go Home</button>
          <button onClick={() => navigate(-1)} className={styles.backBtns}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
