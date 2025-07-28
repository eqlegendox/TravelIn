"user client";
import { useFormStatus } from "react-dom";

function SearchSubmitButton({
    pendingText = "Searching...",
    text = "Search",
}) {
    const status = useFormStatus();
    console.log("Button clicked")
    return (
        <button type="submit" disabled={status.pending}>
            {status.pending ? pendingText : text}
        </button>
    );
}

export { SearchSubmitButton }