export default function reducer(state, action) {
    switch(action.type) {
        case 'SETUSERMESSAGE':
            return {
                ...state,
                userMessage: action.payload,
            };
        case 'SETMESSAGE':
            return {
                ...state,
                messages: action.payload
            }
        case 'TOGGLEISRESPONDED':
            return {
                ...state,
                isResponded: !state.isResponded
            }


        case 'POSTHANDLE':
            return {
                ...state,
                lastUserMessage: state.userMessage,
                userMessage: "",
            };

        case 'RESPONDHANDLE':
            return {
                ...state,
                isResponded: true,
                lastUserMessage: "",
            }
        
    }
}

// const initialState = {
//     messages: [],
//     userMessage: "",
//     lastUserMessage: "",
//     isResponded: true,
// }
