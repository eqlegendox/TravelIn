"use server";

import { redirect } from "next/navigation";
import { userMessageSchema } from "@/validationSchema/UserMessageSchema";

async function testAction() {
    redirect('/search')
    // const messageData = {
    //     user_message : formData.get("user_message"),
    // }

    // const result = userMessageSchema.safeParse(messageData.user_message);
    // console.log("Message: " , messageData.user_message)
    // if (!result.success) {
    //     console.error("Validation failed", result.error);
    //     return
    // }


    // console.log("result: ", result.success)


    // // return { data: messageData.user_message }
    // redirect('/search/1')
}

export { testAction }