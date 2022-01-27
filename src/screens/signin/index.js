import React, { useState } from "react";
import '../../styles/login.css'
/* import { login, sucessLogin } from "../../services/api"; */
//import { setLocalUser } from '../../services/auth'
import * as yup from 'yup'
import { setLocale } from 'yup';
import { ErrorMessage, Formik, Form, Field } from 'formik'
import { Link, useHref } from "react-router-dom";
import { toast } from 'react-toastify';
import PacmanLoader from "react-spinners/PacmanLoader";
import Header from "../../components/header";
import Image from '../../assets/ilustations/security.svg'

setLocale({
    mixed: {
        required: 'Campo obrigatório',
    },
    string: {
        min: 'Para sua segurança senha deve conter 8 ou mais caracteres',
        email: "Formato de e-mail enválido",
    },
});

export default function SignIn() {
    //const history = useHref();

    const [loading] = useState(false);

    const handleSubimit = data => {
        console.log(data)
        toast.error('test', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        /* login(data)
            .then((response) => {
                sucessLogin(response.headers.authorization);
                setLoading(false)
                history.push("/");
            }, 
                error => {
                    setLoading(false)
                    toast.error('E-mail ou senha incorretos!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }) */
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        senha: yup.string().required().min(8),
    })

    return (
        <>
            <div>
                {loading ? (
                    <div className="loader">
                        <PacmanLoader size={50} color={'#00C4C7'} loading={loading} />
                    </div>
                ) : (
                    <>
                        <Header />
                        <div className="login-content">
                            <div className="login-form-container">
                                <div className="login-form">
                                    <h2 className='section_title'>
                                        Login
                                    </h2>
                                    <Formik
                                        initialValues={{}}
                                        onSubmit={handleSubimit}
                                        validationSchema={validations}
                                        enableReinitialize
                                    >
                                        {({ isValid, dirty }) => (
                                            <Form>
                                                <div className="field-area">
                                                    <Field
                                                        name="email"
                                                        type="email"
                                                        id="email"
                                                        className="field-input"
                                                    />
                                                    <label className="text-field">Email</label>
                                                </div>
                                                <ErrorMessage
                                                    component="span"
                                                    name="email"
                                                    className="form-error"
                                                />

                                                <div className="field-area">
                                                    <Field
                                                        type="password"
                                                        name="senha"
                                                        className="field-input"
                                                    />
                                                    <label className="text-field">Senha</label>
                                                </div>
                                                <ErrorMessage
                                                    component="span"
                                                    name="senha"
                                                    className="form-error"
                                                />

                                                <div className="field-button">
                                                    <button
                                                        variant="info"
                                                        fill
                                                        wd
                                                        type="submit"
                                                        className={`button login-btn-order ${isValid ? "" : ""}`}
                                                        disabled={!(dirty && isValid)}
                                                    >
                                                        Prosseguir
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>

                                </div>
                                <li className="login-itens">
                                    <ul>
                                        <Link to="/password"><p className="login-text">Esqueci minha senha</p></Link>
                                    </ul>
                                    <ul>
                                        <Link to="/signup"><p className="login-text">Criar conta</p></Link>
                                    </ul>
                                </li>
                            </div>
                            <div className="ilustration">
                                <img src={Image} alt="Ilustração" className="login-img" />
                                <span className='login_copy'>
                                    &#169; André Carvalho. All rigths reserved
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

