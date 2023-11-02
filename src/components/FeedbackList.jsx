import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback, dispatch }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return(
    <div className='feedback-list'>
      {
        feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} dispatch = {dispatch}/>
        ))
      }
    </div>
  )
}

export default FeedbackList