async function fetchData() {
    const response = await fetch("http://localhost:8000/chats/2", {
        method:"GET",
    });
    console.log("Fetching data...")

    if (!response.ok) {
        console.error("Failed to fetch:", response.statusText);
        return [];
    }
    return response.json();
}

async function postData(newMessage) {
    const response = await fetch("http://localhost:8000/chats/2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage)
    });
    
    return response.json();
}

async function fetchLlmResponse(userMessage : { "userMessage" : string}) {
    const response = await fetch("http://localhost:8000/chats/2/r", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userMessage)
    });
    
    return response.json();
}

export {fetchData, postData, fetchLlmResponse}