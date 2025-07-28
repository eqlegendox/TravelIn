"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { userIdSchema } from "../SearchSchema";
import { error } from "console";

async function searchUserId(formData) {
    const searchData = {
        userId : Number(formData.get("user_id")),
    }

    const result = userIdSchema.safeParse(searchData.userId);

    if (!result.success) {
        console.error("Validation failed", result.error);
        return
    }


    console.log("result: ", result.success)


    const redirectUrl = `/search/${searchData.userId}`
    // redirect('/search/success')
    redirect(redirectUrl)
}

export { searchUserId }