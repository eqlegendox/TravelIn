"use client";
import { useFormStatus } from "react-dom";

function SendButton({
    pendingText = "Sending...",
    text = "Send messages",
}) {
    const status = useFormStatus();
    console.log("Button clicked")
    return (
        <button type="button" disabled={status.pending}>
            {status.pending ? pendingText : text}
        </button>
    );
}

export { SendButton }