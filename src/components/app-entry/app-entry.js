import React, {Component, useState} from 'react';
import './app-entry.css';





const AppEntry = (props) => {



    return(

        <div class="form__body">
        <div className="form__container">
            <form action="#" method="POST">
                <h1 className="form__container-title">Авторизация</h1>
                <div className="form__container-wrap">
                    <div className="form__container-group">
                        <label className="form__container-group-label" htmlFor="email">* Email</label>
                        <input className="form__container-group-input" type="email" placeholder="Введите Email"/>
                            <div className="form__container-group-invalid">Поле обязательно для заполнения</div>
                            <div className="form__container-group-invalid2">Email не валидный</div>
                    </div>

                    <div className="form__container-group">
                        <label className="form__container-group-label" htmlFor="password">* Пароль</label>
                        <input className="form__container-group-input" type="password" placeholder="Введите пароль"/>
                            <div className="form__container-group-invalid">Поле обязательно для заполнения</div>
                            <div className="form__container-group-invalid-password">Пароль должен содержать как минимум
                                8 символов
                            </div>

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