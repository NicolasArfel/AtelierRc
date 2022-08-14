import PropTypes from 'prop-types';

const BackUpdateFurnituresFormInput = ({ type, name, onChange, value, title }) => {

    const handleChange = (event) => {
        onChange(event.target.value, name)
    }

    return (
        <div className="input-field col s12">
            <input
                value={value == null ? '' : value}
                name={name}
                id={type}
                type={type}
                onChange={handleChange}
                placeholder={title}
            />
        </div>
    )
}

BackUpdateFurnituresFormInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    title: PropTypes.string,
}

export default BackUpdateFurnituresFormInput;