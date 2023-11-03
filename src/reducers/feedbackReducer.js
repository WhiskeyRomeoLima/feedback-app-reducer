
const feedbackReducer = (state, action) => {
    const {type, payload} = action

    switch(action.type) {
        case 'GET-FEEDBACK':
         return {
            ...state,
            feedback: action.payload
         }
        case 'ADD-FEEDBACK':
        return {
            ...state,
            feedback: action.payload
        }         
        case 'DELETE-FEEDBACK':
            return {
            ...state,
            feedback: state.feedback.filter(item => item.id !== action.payload)    
            } 
         default:
            throw new Error(`No such type of ${type} in feedbackReducer.`)
    }
}

export default feedbackReducer