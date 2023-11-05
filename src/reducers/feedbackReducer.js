
const feedbackReducer = (state, action) => {
    const {type, payload} = action
    console.log(action.payload);
    
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
            return {
            ...state, 
            feedback: state.feedback.map((fb) => fb.id === payload.id ? {...fb, ...payload} : fb)
            }
        case 'UPDATE-FEEDBACK':
            const {id, data} = action.payload
            console.log(id, data);
            
            return {
            feedback: state.feedback.map((item)=> item.id === id ? {...item, ...data} : item)
            } 
         default:
            throw new Error(`No such type of ${type} in feedbackReducer.`)
    }
}

export default feedbackReducer