import LoginFormInput from "./LoginFormInput/LoginFormInput";




const LoginForm = ({title, email, password, isLogged, changeInputValue, handleLogin}) => {    

    const emailTitle = 'Email';
    const passwordTitle = 'Mot de passe';

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin();
    }

    return (
        <form className="col s6 left login__form" onSubmit={handleSubmit}>
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
                <button
                    className="btn waves-effect waves-light grey darken-3 button"
                    type="submit"
                    name="action">
                    {title}
                </button>
            </div>
        </form>
    )
}

export default LoginForm;