async function fetchData(idChat: string) {
    try {
        const response = await fetch(`http://localhost:8000/chats/c/${idChat}`, {
            method:"GET",
        });

        if (!response.ok) {
            console.error("Failed to fetch:", response.statusText);
            return [];
        }
        return response.json();
    }
    catch (error) {
        console.error("Error Catch: ", error)
        return {error : 666}
    }
}

async function postData(idChat: string, newMessage: { "userMessage" : string }) {
    const response = await fetch(`http://localhost:8000/chats/c/${idChat}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage)
    });
    
    return response.json();
}

async function fetchLlmResponse(idChat: string, userMessage : { "userMessage" : string}) {
    const response = await fetch(`http://localhost:8000/chats/c/${idChat}/r`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userMessage)
    });
    
    return response.json();
}

async function createNewChat(idChat : string) {
    console.log(idChat, " aaa")
    const tempIdChat = {"uuid" : idChat}
    const response = await fetch('http://localhost:8000/chats/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tempIdChat)
    })

    return response.json()
}

export {fetchData, postData, fetchLlmResponse, createNewChat}