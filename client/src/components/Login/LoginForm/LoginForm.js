import PropTypes from 'prop-types';

import LoginFormInput from "./LoginFormInput/LoginFormInput";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const LoginForm = ({ title, email, password, isLogged, changeInputValue, handleLogin }) => {
    const error = useSelector((state) => state.UserReducer.isErrored);
    let navigate = useNavigate();

    const emailTitle = 'Email';
    const passwordTitle = 'Mot de passe';

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleLogin();
        isLogged && navigate("../", { replace: true });
    }

    return (
        <form className="col s12 center login__form" onSubmit={handleSubmit} >
            <div className="row">
                <LoginFormInput
                    type='email'
                    name='email'
                    title={emailTitle}
                    value={email}
                    onChange={changeInputValue}
                />
                <LoginFormInput
                    type='password'
                    name='password'
                    title={passwordTitle}
                    value={password}
                    onChange={changeInputValue}
                />
                {error === true && <p style={{color: 'red'}}>Email ou Mot de Passe Incorrect </p> }
                <button
                    className="btn waves-effect waves-light grey darken-3 button"
                    type="submit"
                    name="action"
                >
                    {title}
                </button>
            </div>
        </form>
    )
}

LoginForm.propTypes = {
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, 
    password: PropTypes.string.isRequired, 
    isLogged: PropTypes.bool.isRequired,
    changeInputValue: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
     
}


export default LoginForm;