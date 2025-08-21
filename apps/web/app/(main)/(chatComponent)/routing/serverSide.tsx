async function fetchMessage(idChat: string, userId: string) {
    try {
        const response = await fetch(`http://localhost:8000/chats/c/${idChat}`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userId: userId})
        });

        if (!response.ok) {
            return false;
        }
        return response.json();
    }   catch (err) {
        console.error("Error Catch: ", err)
        return {error : 666}
    }
}

async function fetchChat(idUser: string) {
    try {
        const response = await fetch(`http://localhost:8000/chats/`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"where": {"userId": idUser}, "orderBy": {"createdAt": "desc"}})
        });

        return response.json();
    }   catch (err) {
        console.error("Error Catch: ", err)
        return {error : 666}
    }
}

async function postMessage(idChat: string, createMessageData: { "userMessage" : string, "userId": string }) {
    try {
        const response = await fetch(`http://localhost:8000/chats/c/${idChat}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createMessageData)
        });

        
    return response.json();
    }   catch (err) {
        return {error : 666}
    }
}

async function fetchLlmResponse(idChat: string, responseMessageData: { "userMessage" : string, "userId": string }) {
    try {
        const response = await fetch(`http://localhost:8000/chats/c/${idChat}/reply`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(responseMessageData)
        });
        
        return response.json();
    }   catch (err) {
        return {error : 666}
    }
}

async function createNewChat(userId : string) {
    try {
        const response = await fetch('http://localhost:8000/chats/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"uuid" : userId})
        })

        return response.json()
    }   catch (err) {
        return {error : 666}
    }
}

async function fetchUserId() {
    try {
        const response = await fetch('http://localhost:8000/user/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })

        return response.json()
    }   catch (err) {
        return {error : 666, response: err}
    }
}

export {fetchMessage, postMessage, fetchLlmResponse, createNewChat, fetchUserId, fetchChat}