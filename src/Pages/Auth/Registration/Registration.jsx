// src/RegistrationForm.js

import React, { useState } from 'react';
import styles from "./registration.module.css";
import { FaUser, FaEnvelope, FaLock, FaBuilding, FaPhone } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios"

import { useFormik } from "formik"
import { signUpSchema } from '../../../Schemas';

const initialValues = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirm_password: ""
}

const Registration = () => {


  const formirk = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formirk

  console.log(errors)

  axios.post("http://localhost:8800/api/auth/register", values).then(res => console.log("object"))


  const navigate = useNavigate()
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   companyName: '',
  //   phoneNumber: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Add logic to send data to the backend or perform other actions
  // };

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
      <h2>GoWilds Registration</h2>
      <form onSubmit={handleSubmit}>
        
        <div className={styles.formGroup}>
          <label>
            <FaUser /> Username:
            <input
              type="text"
              autocomplete='off'
              name="username"
              placeholder='Enter name'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username ?
            <p className={styles.formError}>
              {errors.username}
            </p> : null}
          </label>
        </div>
        <div className={styles.formGroup}>
        <label>
          <FaPhone /> Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            placeholder='Phone number'
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <p className={styles.formError}>
              {errors.phoneNumber}
            </p>
          )}
        </label>
      </div>
        <div className={styles.formGroup}>
          <label>
            <FaBuilding /> City Name:
            <input
              type="text"
              autoComplete='none'
              name="country"
              placeholder='Company name'
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ?
            <p className={styles.formError}>
              {errors.name}
            </p> : null}
            
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            <FaEnvelope /> Email:
            <input
              type="email"
              name="email"
              placeholder='Enter email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ?
            <p className={styles.formError}>
              {errors.email}
            </p> : null}
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            <FaLock /> Password:
            <input
              type="password"
              name="password"
              placeholder='Enter password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ?
            <p className={styles.formError}>
              {errors.password}
            </p> : null}
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            <FaLock /> Confirm Password:
            <input
              type="password"
              name="confirm_password"
              placeholder='Confirm password'
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ?
            <p className={styles.formError}>
              {errors.confirm_password}
            </p> : null}
          </label>
        </div>
        <div>
          <button className={styles.registerBtn} type="submit">Register</button>
        </div>
      </form>
      <p style={{marginTop: "1rem"}}>already have an account? <NavLink style={{color: "blue"}} to="/signin">SignIn Here</NavLink></p>
      <div style={{display: "flex"}} className={styles.navigateBtn}>
        <button onClick={() => navigate("/")} className={styles.backBtns}>Go Home</button>
        <button onClick={() => navigate(-1)} className={styles.backBtns}>Go Back</button>
      </div>
    </div>
    </div>
  );
};

export default Registration;
