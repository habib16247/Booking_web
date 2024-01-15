import React from "react";
import styles from "./Registration.module.css";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaBuilding } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Registration2 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", { ...data });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <h2>GoWilds Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label>
              <FaUser /> Username:
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                {...register("username", {
                  required: true,
                  maxLength: 12,
                  minLength: 3,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.username?.type === "required" && (
                <p className="signup__error">This field is required</p>
              )}

              {errors?.username?.type === "minLength" && (
                <p className="signup__error">
                  name cannot exceed less than 3 characters
                </p>
              )}

              {errors?.username?.type === "pattern" && (
                <p className="signup__error">Alphabetical characters only</p>
              )}

              {errors?.username?.type === "pattern" && (
                <p className="signup__error">Alphabetical characters only</p>
              )}
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              <FaPhone /> Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                {...register("phone")}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              <FaBuilding /> City Name:
              <input
                type="text"
                autoComplete="none"
                name="city"
                placeholder="Company name"
                {...register("city")}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              <FaBuilding /> country Name:
              <input
                type="text"
                autoComplete="none"
                name="country"
                placeholder="Company name"
                {...register("country")}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              <FaEnvelope /> Email:
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              {errors?.email?.type === "pattern" && (
                <p className="signup__error">Invalid email address!</p>
              )}

            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              <FaLock /> Password:
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                })}
              />

                {errors.password?.type === "minLength" && (
                  <p className="signup__error">
                    password cannot exceed less than 8 characters
                  </p>
                )}
                
                {errors.password?.type === "pattern" && (
                  <p className="signup__error">
                    least one numeric digit, one uppercase and one lowercase
                    letter
                  </p>
                )}
                
                {errors.password?.type === "maxLength" && (
                  <p className="signup__error">
                    password ame cannot exceed 15 characters
                  </p>
                )}


            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              <FaLock /> Confirm Password:
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm password"
                
                {...register("confirm_password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                })}
              />

                {errors.confirm_password?.type === "minLength" && (
                  <p className="signup__error">
                    confirm_password cannot exceed less than 8 characters
                  </p>
                )}
                
                {errors.confirm_password?.type === "pattern" && (
                  <p className="signup__error">
                    least one numeric digit, one uppercase and one lowercase
                    letter
                  </p>
                )}
                
                {errors.confirm_password?.type === "maxLength" && (
                  <p className="signup__error">
                    confirm_password ame cannot exceed 15 characters
                  </p>
                )}
            </label>
          </div>
          <div>
            <button className={styles.registerBtn} type="submit">
              Register
            </button>
          </div>
        </form>
        <p style={{ marginTop: "1rem" }}>
          already have an account?{" "}
          <NavLink style={{ color: "blue" }} to="/signin">
            SignIn Here
          </NavLink>
        </p>
        <div style={{ display: "flex" }} className={styles.navigateBtn}>
          <button onClick={() => navigate("/")} className={styles.backBtns}>
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className={styles.backBtns}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration2;
