import {useState, useEffect} from 'react'

function RatingSelect({select, feedbackEdited}) { //select passed in from FeedbackForm (select={(rating) => setRating(rating)})
const [selected, setSelected] = useState(10)

// solution says this is not needed.  
  // useEffect(() => {
  //   setSelected(feedbackEdited.rating)
  // }, [feedbackEdited])

const handleChange = (e) => {
  //console.log(+e.currentTarget.value);
  setSelected(+e.currentTarget.value)
  select(+e.currentTarget.value)
}

return (
  <ul className='rating'>
    {Array.from({ length: 10 }, (_, i) => (
      <li key={`rating-${i + 1}`}>
        <input
          type='radio'
          id={`num${i + 1}`}
          name='rating'
          value={i + 1}
          onChange={handleChange}
          checked={selected === i + 1} //selected === i+1 is boolean express and i+1 represents the current input. We are checking wether equals the current input.
        />
        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
      </li>
    ))}
  </ul>
)
}
export default RatingSelect