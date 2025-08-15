import { tool } from "@langchain/core/dist/tools";
import { z } from "zod";

// const placeholderTool = new DynamicStructuredTool({
//     name: "placeholder",
//     description: "this tool currently exist only to act as a placeholder",
//     schema: z.object({
//         a: z.string().describe("just a variable to store string")
//     }),
//     func: async ({ a } : {a: string}) => {
//         return (a + " hahay");
//     },
// });

const phSchema = z.object({
    str: z.string(),
})

// // const placeholderTool = tool(
// //     async (input): Promise<string> => {
// //         const result = input.str + " Wayaw";
// //         return `Your input is ${result}`;
// //     },
// //     {
// //         name: "placeHolder",
// //         description: "only call this when the user precisely say 'racoon', other than that this is only for placeholder",
// //         schema: phSchema,
// //     }
// // );

const placeHolderTool = tool(
    async (input) => {
        const result = input.str + "wayaw"

        return `your input is ${result}`
    },
    {
        name: "placeHolder",
        description: "Only call this tool when the user precisely says 'racoon'. Do not call it for any other reason.",
        schema: phSchema,
    }
)

var TOOLS = [placeHolderTool]

// module.exports = T