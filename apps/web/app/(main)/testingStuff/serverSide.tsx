async function fetchData() {
    const response = await fetch("http://localhost:3000/api/chatMessage", {
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
    const response = await fetch("http://localhost:3000/api/chatMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage)
    });
    
    return response.json();
}

export {fetchData, postData}