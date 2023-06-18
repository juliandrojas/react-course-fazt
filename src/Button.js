import PropTypes from 'prop-types';
export function Button({ text, name }) {
    console.log(text);
    if(!text) {
        console.error('El texto es requerido'); 
    }
    return <button>
        {text} - { name } 
    </button>
}
//Definimos los proptypes
Button.propTypes = {
    text: PropTypes.string
}
//Valores por defecto
Button.defaultProps = {
    name: 'Some User'
}