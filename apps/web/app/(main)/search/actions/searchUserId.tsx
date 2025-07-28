"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { userIdSchema } from "../SearchSchema";
import { error } from "console";

async function searchUserId(formData) {
    const searchData = {
        userId : formData.get("user_id"),
    }

    const result = userIdSchema.safeParse(searchData);

    // if (!result.success) {
    //     console.log("result", result.success)
    //     return
    // }


    console.log("result: ", result.success)


    const redirectUrl = `/search/${searchData.userId}`
    // redirect('/search/success')
    redirect(redirectUrl)
}

export { searchUserId }