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
import {Link} from 'react-router-dom';
//import LoadingButton from '@mui/lab/LoadingButton';





const AppForgotPassword = (props) => {

    return (

        <div class="form__body_FP">
        <div className="form__container_FP">
            <div className="form__container_FP-container" >

                <h1 className="form__container-title_FP">Если забыли пароль от профиля напишите нам на почту или в телеграм:</h1>
                <div className="form__container-wrap_FP">
                         
                         <h2 className="form__container-wrap_FP-h2">Почта: edu@isaevrail.ru</h2>
                         <h2 className="form__container-wrap_FP-h2">Телеграм: sukre22</h2>            
                  

                        
                    </div>

                <div>
                <h1 className="form__container-title_FP">В ответном письме вышлем новый пароль. <p className="new"><Link to="/" >Перейти на страницу авторизации.</Link></p></h1>
                </div>

                </div>

            </div>
        </div>

        


    )


}

export default AppForgotPassword;