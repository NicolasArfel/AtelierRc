import React from 'react'
import ContactFormInput from './ContactFormInput/ContactFormInput'

const ContactForm = ({ firstname, lastname, email, subject, text, changeInputValue, handleContact }) => {

    const firstnameTitle = 'Prénom';
    const lastnameTitle = 'Nom';
    const emailTitle = 'Votre email';
    const subjectTitle = 'Objet du mail';
    const textTitle = 'Votre message';

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleContact();
    }

    return (
        <form className="col s6 right contact__form" onSubmit={handleSubmit}>
            <div className="row">
                <ContactFormInput
                    type='text'
                    name='firstname'
                    title={firstnameTitle}
                    value={firstname}
                    onChange={changeInputValue}
                />
                <ContactFormInput
                    type='text'
                    name='lastname'
                    title={lastnameTitle}
                    value={lastname}
                    onChange={changeInputValue}
                />
                <ContactFormInput
                    type='text'
                    name='from'
                    title={emailTitle}
                    value={email}
                    onChange={changeInputValue}
                />
                <ContactFormInput
                    type='text'
                    name='subject'
                    title={subjectTitle}
                    value={subject}
                    onChange={changeInputValue}
                />
                <ContactFormInput
                    type='text'
                    name='text'
                    title={textTitle}
                    value={text}
                    onChange={changeInputValue}
                />
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

export default ContactForm