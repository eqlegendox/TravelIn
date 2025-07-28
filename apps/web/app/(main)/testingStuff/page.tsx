"use client"
import { Button } from '@workspace/ui/components/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchData, postData } from './serverSide';


const Page = () => {
    const [data, setData] = useState(null)
    const [userMessage, setUserMessage] = useState("");

    useEffect(() => {
        const loadData = async () => {
            const result = await fetchData();
            setData(result);
        };
        loadData();
    }, []);

    const handleSend = async () => {
        if (!userMessage.trim()) return;

        const newMessage = { user_message: userMessage };
        const result = await postData(newMessage);
        if (result) {
            setData(prev => [...(prev || []), result]);
            setUserMessage("");
        }
    };

    return(
        <div>
            <Link href="/search">Search Page</Link>
            <h1>Messages: </h1>
            {Array.isArray(data) ? data.map(item => {
                if (item.user_message) {
                    return <div>Human: {item.user_message}</div>
                }   else {
                    return <div>Human: {item.ai_message}</div>
                }
            })
            : "Loading..."}
            <br></br><br></br>
            <input
                type="text"
                id="user_message"
                name="user_message"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type a message.."
                className="flex-grow w-full text-sm p-2 border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
            />
            <Button onClick={handleSend}>Send Message</Button>
        </div>
    )
}

export default Page