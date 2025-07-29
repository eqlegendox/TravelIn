async function fetchData() {
    const response = await fetch("http://localhost:8000/chats/1", {
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
    const response = await fetch("http://localhost:8000/chats/1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage)
    });
    
    return response.json();
}

export {fetchData, postData}