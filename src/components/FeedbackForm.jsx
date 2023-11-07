import {useState, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

//* feedback-app-reducer last updates are to updateFeedback 

function FeedbackForm({feedbackEdit, dispatch}) {
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
  
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
      })

      const data = await response.json()

      
      dispatch({
        type: 'ADD-FEEDBACK',
        payload: data
      })
}
//just to trigger an update
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
  
  
  const updateFeedback = async (id, updatedItem) => {
    
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(updatedItem)
    })
    //data has the updated item
    const data = await response.json()
    
      dispatch({
      type: 'UPDATE-FEEDBACK',
      payload: data
      })

      dispatch({
        type: 'RESET-FEEDBACK-EDIT',
        payload: { item: {}, edit: false }
      })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      }
      
    if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
          addFeedback(newFeedback)
       }
      
      setText('')
    }
  }

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
