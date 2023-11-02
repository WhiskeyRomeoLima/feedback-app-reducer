import {useReducer} from 'react'
import feedbackReducer from '../reducers/feedbackReducer'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'
function FeedbackItem({feedback, item}) {

    const [state, dispatch] = useReducer(feedbackReducer, feedback)

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
          await fetch(`/feedback/${id}`, {method: 'DELETE'})
      
          dispatch({
            type: 'DELETE-FEEDBACK'
          })
        }
      }

    return(
       <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className='close'>
                <FaTimes color='purple' />
            </button> 
            <div className="text-display">{item.text}</div>
       </Card>
    )
}

export default FeedbackItem