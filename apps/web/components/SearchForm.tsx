"use client";
import { searchUserId } from "@/app/(main)/search/actions/searchUserId";
import { useState } from "react";
import { SearchSubmitButton } from "./SearchSubmitButton";

const SearchForm = () => {
    const action = searchUserId;
    const [userId, setUserId] = useState("");

    return (
        <form action={action}>
            <h2>Search a user id</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                    User Id
                </label>

                <input
                type="number"
                id="user_id"
                name="user_id"
                placeholder="eg. 1"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                />
            </div>
            <div>
                <SearchSubmitButton />
            </div>
        </form>
    );
};

export { SearchForm };