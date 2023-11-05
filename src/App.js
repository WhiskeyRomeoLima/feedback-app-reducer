import { useEffect, useReducer, useState } from 'react'
import feedbackReducer from './reducers/feedbackReducer'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'

//* feedback-app-reducer

function App() {

const initialState = {
  feedback: []
}

const [state, dispatch] = useReducer(feedbackReducer, initialState)

  useEffect(() => {
    fetchFeedback()
  }, [])

  const url = 'http://localhost:5000/feedback?_sort=id&_order=desc'
  //fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(url)
    const data = await response.json()
    dispatch({
      type: 'GET-FEEDBACK',
      payload: data
    })
    
  }

  return (
    <>
    <Header />

      <div className='container'>
        <FeedbackForm dispatch = {dispatch} />
        <FeedbackStats feedback = {state.feedback}  /> 
        <FeedbackList feedback = {state.feedback} dispatch = {dispatch} />
      </div>      
    </> 

  )
}
export default App
