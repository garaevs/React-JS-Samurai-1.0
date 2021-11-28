import React from 'react';
import { Formik } from 'formik';
import loginFormSchema from './FormValidation/loginFormSchema';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const Login = props => {
    if (props.isAuth) {
        return <Redirect to={'/profile'} />;
    }
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: '', rememberMe: true }}
                validateOnBlur
                onSubmit={(formData, { setSubmitting, setFieldError, setStatus }) => {
                    props.login(formData.email, formData.password, formData.rememberMe, setSubmitting, setFieldError, setStatus);

                    setSubmitting(false);
                }}
                validationSchema={loginFormSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status }) => (
                    <div>
                        <p>
                            <label htmlFor={'email'}> Имя </label> <br />
                            <input type={'text'} name={'email'} onChange={handleChange} onBlur={handleBlur} value={values.email} />
                        </p>
                        {touched.email && errors.email && <p>{errors.email}</p>}

                        <p>
                            <label htmlFor={'password'}> Пароль </label> <br />
                            <input type={'password'} name={'password'} onChange={handleChange} onBlur={handleBlur} value={values.password} />
                        </p>
                        {touched.password && errors.password && <p>{errors.password}</p>}

                        <p>
                            <input type={'checkbox'} name={'rememberMe'} onChange={handleChange} onBlur={handleBlur} value={values.rememberMe} />
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </p>
                        <div>{status}</div>

                        <button disabled={!isValid && !dirty} onClick={handleSubmit} type={'submit'}>
                            Send
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
});

export default connect(
    mapStateToProps,
    { login }
)(Login);
