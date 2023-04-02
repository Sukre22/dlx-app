import React, {Component, useState} from 'react';
import './app-forgot-password.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {useAuth} from 'hooks/use-auth';
import {removeUser} from "store/slices/userSlice";
import {setUser} from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate, Navigate } from 'react-router-dom';
//import LoadingButton from '@mui/lab/LoadingButton';





const AppForgotPassword = (props) => {

    return (

        <div class="form__body_FP">
        <div className="form__container_FP">
            <div novalidate>

                <h1 className="form__container-title_FP">Введите email</h1>
                <div className="form__container-wrap_FP">


                    <div className="form__container-group_FP">

                        <input className="form__container-group-input_FP"
                               placeholder="Введите email"
                               type="password"
                               name="password" />



                    </div>
                    <div className="form__container-checkbox_FP">
                        {/*<div className="form__container-checkbox-wrap_FP">

                                <div className="form__container-checkbox-label_FP">Забыли пароль?</div>
                        </div>*/}


                    </div>
                    <div className="form__container-button_FP">

                        <Button type="submit" variant="outlined"
                        classes={{
                            color: '#787878',
                            width: '200px'
                        }}
                        >
                            Отправить</Button>

                        
                    </div>

                </div>

            </div>
        </div>

        </div>


    )


}

export default AppForgotPassword;