

function FeedbackStats({feedback}) {
  //caculate average rating
  const average =
  feedback.length === 0
    ? 0
    : feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length

return (
  <div className='feedback-stats'>
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, '')}</h4>
  </div>
)
}
export default FeedbackStats
/*
  if (feedback.length > 0 && feedback !== null) {
    average = feedback.reduce((rating, item) => {
    return rating += item.rating}, 0) /feedback.length
    }
  console.log(average);
  
  average = average.toFixed(1).replace(/[.,]0$/, '') //enforce one decimal place
*/