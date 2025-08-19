export default function reducer(state: any, action: any) {
    switch(action.type) {
        case 'SETUSERMESSAGE':
            return {
                ...state,
                userMessage: action.payload,
            };
        case 'SETLASTUSERMESSAGE':
            return {
                ...state,
                lastUserMessage: action.payload,
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

        case 'PREPOSTHANDLE':
            return {
                ...state,
                lastUserMessage: state.userMessage,
                userMessage: "",
            };
}

// const initialState = {
//         messages: [],
//         userMessage: "",
//         lastUserMessage: "",
//         isResponded: true,
//         currentChatId: "",
//         currentUserId: "",
//     }