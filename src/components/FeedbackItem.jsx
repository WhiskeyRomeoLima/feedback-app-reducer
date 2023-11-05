import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'

function FeedbackItem({item, dispatch}) {
    
    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
          await fetch(`/feedback/${id}`, {method: 'DELETE'})
      
          dispatch({
            type: 'DELETE-FEEDBACK',
            payload: id
          })
        }
      }

      //set feedbackEdit.edit to true or false
      const editFeedback = (item) => {
        item.editMode = true
        dispatch({
          type: 'SET-EDIT-MODE',
          payload: item
        })
      }

    return(
       <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color='purple' />
            </button> 
            <div className="text-display">{item.text}</div>
       </Card>
    )
}

export default FeedbackItem