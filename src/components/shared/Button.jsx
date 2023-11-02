import PropTypes from 'prop-types'

// version is either primary or secondary (see css)
function Button({children, version, type, isDisabled}) {
  return (
      <button 
        type={type} 
        disabled={isDisabled} 
        className={`btn btn-${version}` }>
        {children}
      </button>
  )
}

Button.defaultProps = { 
  version: 'primary',
  type: 'button',
  isDisable: false
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}


export default Button