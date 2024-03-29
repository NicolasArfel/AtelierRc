import PropTypes from 'prop-types';
import React from 'react'
import { useSelector } from 'react-redux';

import FurnituresContactFormInput from './FurnituresContactFormInput/FurnituresContactFormInput'

const FurnituresContactForm = ({ firstname, lastname, email, subject, text, changeInputValue, handleContact }) => {

    const firstnameTitle = 'Prénom';
    const lastnameTitle = 'Nom';
    const emailTitle = 'Votre email';
    const subjectTitle = 'Objet du mail';
    const textTitle = 'Votre message';

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleContact();
    }

    const error = useSelector((state) => state.ContactReducer.error);
    const succeed = useSelector((state) => state.ContactReducer.succed);

    const statusSendingSucceed = 'Email Envoyé !';
    const statusSendingError = 'Merci de remplir les champs obligatoires !';

    return (
        <form className="col s6 right contact__form" onSubmit={handleSubmit}>
            <div className="row">
                {error === true && <p className='error__sending-email'>{statusSendingError}</p>}
                {succeed === true && <p className='succed__sending-email'>{statusSendingSucceed}</p>}
                <FurnituresContactFormInput
                    type='text'
                    name='firstname'
                    title={firstnameTitle}
                    value={firstname}
                    onChange={changeInputValue}
                />
                <FurnituresContactFormInput
                    type='text'
                    name='lastname'
                    title={lastnameTitle}
                    value={lastname}
                    onChange={changeInputValue}
                />
                <FurnituresContactFormInput
                    type='email'
                    name='from'
                    title={emailTitle}
                    value={email}
                    onChange={changeInputValue}
                />
                <FurnituresContactFormInput
                    type='text'
                    name='subject'
                    title={subjectTitle}
                    value={subject}
                    onChange={changeInputValue}
                    disabled="true"
                />
                <FurnituresContactFormInput
                    type='text'
                    name='text'
                    title={textTitle}
                    value={text}
                    onChange={changeInputValue}
                />
                <p>*Tous les champs sont obligatoires</p>
            </div>
            <button
                className="btn waves-effect waves-light grey darken-3 button"
                type="submit"
                name="action"
            >
                Envoyer
            </button>
        </form>
    )
}
FurnituresContactForm.propTypes = {
    changeInputValue: PropTypes.func.isRequired,
    handleContact: PropTypes.func.isRequired,
}

export default FurnituresContactForm;