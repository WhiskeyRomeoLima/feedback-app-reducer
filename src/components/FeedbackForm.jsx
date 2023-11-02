import {useState, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
//import {v4 as uuidv4} from 'uuid'

function FeedbackForm({handleAdd,  handleUpdate, feedbackEdit}) {
  const [text, setText] = useState('') //tracks input as it is being entered
  const [rating, setRating] = useState(10) // 
  const [btnDisabled, setBtnDisabled] = useState(true) //allows the review to be submitted if > 10 characters
  const [message, setMessage] = useState('') //used to show warning while review is less than 10 characters and keeps button disabled

  useEffect(() => {
    if (feedbackEdit.edit === true) { 
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  

  /*
  set value = e.targetvalue
  check if value is
  empty
  else is less than 10 chars
  else we are in state where the button can be enabled and message set to null
  set text to the value
  */
  const handleTextChange = (e) => { // handles the inline event onChange from input element in form
    const value = e.target.value
    if (value === '') {
      setBtnDisabled(true)//if value is empty string,  message is null  and button is disabled
      setMessage(null) 
    } else if (value !== '' && value.trim().length < 10) { // if the review is less than 10 charcaters
      setMessage('Review must be at least 10 characters.') // display message and keep button disabled
      setBtnDisabled(true)
    } else { // enable button and disable message
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(value) // update text
  }

  /* 
  remember e.preventdefault
  check if text.trim is >= 10
  if so create new feedback object: 
    const newFeedback = {id: uuidV4},
    text,
    rating
  */
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length >= 10) {
      const newFeedback = {
        //id: uuidv4(),
        text,
        rating,
      }
      if (feedbackEdit.edit === true) {
        handleUpdate(feedbackEdit.item.id, newFeedback)
      } else {
          handleAdd(newFeedback)
      }
      
      setText('')
    }
  }

  /*
  place form inside Card
  create placed holder for onsubmit handler
  h2: prompt to write a reveiw
  Create RatingSelect placeholder
  div.input-group
    input type=text, name=review-input, 
    onChange ={handleTextChange}
    placeholder prompt
    value = {text}
  </div

  Button
    type submit isDisabled = {btnDisabled} />
    send
  Button
{message && <div className='message'>{message}</div> }

  */

  return (
    <Card>
      {/* Card is used by FeedbackItem, FeedbackCard to display the
       html content (children) of those components. */} 
      <form onSubmit={handleSubmit}> 
        <h2>How would you rate your service with us?</h2>
        <RatingSelect feedbackEdit = {feedbackEdit} select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input 
          type='text' 
          name='review-input'
          onChange= {handleTextChange} 
          placeholder='Write a review'
          value={text}/> {/*value from state */}
          <Button type='submit' isDisabled={btnDisabled} >Send</Button>
        </div>
        {/* if message then return <div className = ... */}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}
export default FeedbackForm