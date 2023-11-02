import PropTypes from 'prop-types'

//used in FeedbackItem
function Card({children, reverse}) { //reverse: interchange the background color with text color
  return (
    <div className= {`card ${reverse && 'reverse'}`}>{children}</div> 
    // conditional class: we always want card but reverse is conditionally 
    // added based on value of the reverse prop
    // if reverse then add the class 'reverse' to the div's class attribute
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card

/* Conditional Style version.  Note the double brackets.
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
*/