import React, {Component, useState} from 'react';
import './app-entry.css';
import {useFormik} from 'formik';


const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Поле обязательно для заполнения';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email не валидный';
    }

    if (!values.password) {
        errors.password = 'Поле обязательно для заполнения';
    } else if (values.password.length < 8) {
        errors.password = 'Пароль должен содержать как минимум 8 символов';
    }

    return errors;
}


const AppEntry = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })





    return(

        <div class="form__body">
        <div className="form__container">
            <form action="#" method="POST" onSubmit={formik.handleSubmit}>
                <h1 className="form__container-title">Авторизация</h1>
                <div className="form__container-wrap">
                    <div className="form__container-group">
                        <label className="form__container-group-label" htmlFor="email">* Email</label>
                        <input className="form__container-group-input"
                               placeholder="Введите Email"
                               type="email"
                               name="email"
                               value={formik.values.email}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email ? <div class={'form__container-group-invalid'}>{formik.errors.email}</div> : null}
                            {/*<div className="form__container-group-invalid">Поле обязательно для заполнения</div>*/}
                            {/*<div className="form__container-group-invalid2">Email не валидный</div>*/}
                    </div>

                    <div className="form__container-group">
                        <label className="form__container-group-label" htmlFor="password">* Пароль</label>
                        <input className="form__container-group-input"
                               placeholder="Введите пароль"
                               type="password"
                               name="password"
                               value={formik.values.password}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               />
                        {formik.errors.password && formik.touched.password ? <div class={'form__container-group-invalid'}>{formik.errors.password}</div> : null}
                            {/*<div className="form__container-group-invalid">Поле обязательно для заполнения</div>*/}
                            {/*<div className="form__container-group-invalid-password">Пароль должен содержать как минимум*/}
                            {/*    8 символов*/}
                            {/*</div>*/}

                    </div>
                    <div className="form__container-checkbox">
                        <div className="form__container-checkbox-wrap">
                            <input className="form__container-checkbox-input" type="checkbox" id="checkbox"/>
                                <div className="form__container-checkbox-mark"></div>
                                <label className="form__container-checkbox-label" htmlFor="checkbox">* Я согласен с <u>Правилами
                                    пользования приложением</u></label>
                        </div>

                        <div className="form__container-checkbox-invalid">Поле обязательно для заполнения</div>
                    </div>
                    <div className="form__container-button">
                        <button className="form__container-button-press">Войти</button>
                    </div>

                </div>

            </form>
        </div>

        </div>


    )


}

export default AppEntry;