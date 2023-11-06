
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
            feedback: [...state.feedback, payload]
        }         
        case 'DELETE-FEEDBACK':
            return {
            ...state,
            feedback: state.feedback.filter(item => item.id !== action.payload)    
            }
        case 'SET-EDIT-MODE':
            console.log(payload)
            return {
            ...state, 
            feebackEdit: [state.feebackEdit, payload]
            }
        case 'UPDATE-FEEDBACK':            
            return {
            feedback: state.feedback.map((item)=> item.id === payload.id ? {...item, ...payload} : item)
            } 
         default:
            throw new Error(`No such type of ${type} in feedbackReducer.`)
    }
}

export default feedbackReducer