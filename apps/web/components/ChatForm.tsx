"use client";
import { searchUserId } from "@/app/(main)/search/actions/searchUserId";
import { useState } from "react";
import { ChatSubmitButton } from "./ChatSubmitButton";
import { useActionState } from "react";
import { SendUserMessage } from "@/app/(main)/(chatComponent)/actions/SendUserMessage";

const ChatForm = () => {
    const [formState, action] = useActionState(SendUserMessage, { errors: {} });
    const [userId, setUserId] = useState("");

    return (
        <form action={action}>
            {/* <h2>Search a user id</h2> */}
            <div className="flex items-center gap-1 w-full">
                    <input
                        type="text"
                        id="user_message"
                        name="user_message"
                        placeholder="Type a message.."
                        className="flex-grow w-full text-sm p-2 border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                        />
                    <ChatSubmitButton />
            </div>
        </form>
    );
};

export { ChatForm };