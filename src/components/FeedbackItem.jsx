import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item, dispatch}) {
console.log(dispatch);

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
          await fetch(`/feedback/${id}`, {method: 'DELETE'})
      
          dispatch({
            type: 'DELETE-FEEDBACK',
            payload: item.id
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