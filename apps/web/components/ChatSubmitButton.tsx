"user client";
import { useFormStatus } from "react-dom";
import { Button } from "@workspace/ui/components/button";
import { MoveRight } from "lucide-react";

function ChatSubmitButton({
    pendingText = "Searching...",
    text = "Search",
    button = (<MoveRight className="w-2 h-2 font-bold"/>),
}) {
    const status = useFormStatus();
    // const button = (<Button><MoveRight className="w-2 h-2 font-bold"/></Button>);
    console.log("Button clicked")
    return (
        <button type="submit" disabled={status.pending}>
            {status.pending ? button : button}
        </button>
    );
}

export { ChatSubmitButton }