import {useState, useEffect} from 'react'
//feedbackEdit and select passed in from FeedbackForm (select={(rating) => setRating(rating)})
function RatingSelect({select, feedbackEdit}) { 
const [selected, setSelected] = useState(10) //this is the only place selected is needed, so no reducer action is needed

// solution says this is not needed but it is in this version of feedback app
// here we set the selected rating
  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

const handleChange = (e) => {
  //console.log(+e.currentTarget.value);
  setSelected(+e.currentTarget.value)
  //select(+e.currentTarget.value) //the above useEffect makes this uneeded
}

return (
  <ul className='rating'>
    {Array.from({ length: 10 }, (_, i) => (
      <li key={`rating-${i + 1}`}>
        <input
          type='radio'
          id={`num${i + 1}`} //arrays are zero based but ratings are not
          name='rating'
          value={i + 1}
          onChange={handleChange}
          checked={selected === i + 1} //selected === i+1 is boolean expression and i+1 represents the current input. We are checking whether it equals the current input.
        />
        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
      </li>
    ))}
  </ul>
)
}
export default RatingSelect