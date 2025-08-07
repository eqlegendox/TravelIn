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
        case 'SETISRESPONDED':
            return {
                ...state,
                isResponded: action.payload
            }
        case 'SETCURRENTUID':
            // console.log("!!!!!!!!!!!!!  ", action.payload)
            return {
                ...state,
                currentUserId: action.payload,
            }
        case 'SETCURRENTCID':
            console.log("CurrentCHATID:   ", action.payload)
            return {
                ...state,
                currentChatId: action.payload,
            }


        case 'POSTHANDLE':
            return {
                ...state,
                lastUserMessage: state.userMessage,
                userMessage: "",
                messages: action.payload
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
//         messages: [],
//         userMessage: "",
//         lastUserMessage: "",
//         isResponded: true,
//         currentChatId: "",
//         currentUserId: "",
//     }