// import { tool } from "@langchain/core/tools";
// import { z } from "zod";

// // const placeholderTool = new DynamicStructuredTool({
// //     name: "placeholder",
// //     description: "this tool currently exist only to act as a placeholder",
// //     schema: z.object({
// //         a: z.string().describe("just a variable to store string")
// //     }),
// //     func: async ({ a } : {a: string}) => {
// //         return (a + " hahay");
// //     },
// // });

// const phSchema = z.object({ str: z.string() });
// type PHInput = z.infer<typeof phSchema>;

// @ts-ignore
// const placeHolderTool = tool(
//   async (input: PHInput): Promise<string> => {
//     return `your input is ${input.str} wayaw`;
//   },
//   {
//     name: "placeHolder",
//     description: "Only call this tool on racoon.",
//     // Optionally assert schema type to avoid inference
//     schema: phSchema as typeof phSchema
//   }
// );

// const TOOLS = [placeHolderTool];

// export default TOOLS;