import PropTypes from 'prop-types';

const BackAddFurnituresFormInput = ({ type, name, onChange, value, title }) => {

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
            />
            <label htmlFor={type}>
                {title}
            </label>

        </div>
    )
}

BackAddFurnituresFormInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default BackAddFurnituresFormInput;