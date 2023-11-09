/* 
initialState = {
    feedback: [],
    feedbackEdit: {item: {}, edit: false}
  }

In app.js,  const [state, dispatch] = useReducer(feedbackReducer, initialState)
allows us to refer to state with state.feedback and state.feedbackEdit

when feedback is populated
feedback:
[
0 : {text: 'NEW Lorem ipsum dolor sit amet consectetur adipisi…ommodi alias voluptatem est voluptatum ipsa quae.', rating: 10, id: 4}
1 : {id: 3, rating: 6, text: 'Lorem ipsum dolor sit amet consectetur adipisicing…ommodi alias voluptatem est voluptatum ipsa quae.'}
2 : {id: 2, rating: 9, text: 'In nulla posuere sollicitudin aliquam ultrices sag…idunt ornare massa eget. Praesent semper feugiat.'}
]

when feedbackEdit is populated
feedbackEdit: { edit:true, item : {text: 'NEW Lorem ipsum dolor sit amet consectetur adipisi…ommodi alias voluptatem est voluptatum ipsa quae.', rating: 10, id: 4, edit: true}}
*/
const feedbackReducer = (state, action) => {
    const {type, payload} = action
    
    switch(action.type) {
        case 'GET-FEEDBACK':
         return {
            ...state,
            feedback: action.payload //replaces the state after an initial fetch to json server
         }
        case 'ADD-FEEDBACK':
        return {
            ...state, 
            feedback: [...state.feedback, payload] //returns a new array of feedback with the added feedback
        }         
        case 'DELETE-FEEDBACK':
            return {
            ...state,
            feedback: state.feedback.filter(item => item.id !== action.payload) //returns a new array of feedback without the deleted feedback   
            }
        case 'SET-EDIT-MODE':
            return {
            ...state, 
            feedbackEdit: payload
            //feedbackEdit: state.feedbackEdit = payload
            }
        case 'UPDATE-FEEDBACK':            
            return {
            ...state,
            feedback: state.feedback.map((item)=> item.id === payload.id ? {...item, ...payload} : item)
            }
        case 'RESET-FEEDBACK-EDIT':
            console.log(payload)
            return {
                ...state,
                feedbackEdit: payload
            }
         default:
            throw new Error(`No such type of ${type} in feedbackReducer.`)
    }
}

export default feedbackReducer