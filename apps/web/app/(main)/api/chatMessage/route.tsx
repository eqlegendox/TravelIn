// export async function GET() {
//     return Response.json(messages);
// }

// export async function POST(request: Request) {
//     let message;
//     try {
//         message = await request.json();
//     } catch {
//         console.log("messages is ", message)
//         return new Response("Invalid JSON", { status: 400 });
//     }
//     const newMessage = {
//         id: messages.length + 1,
//         user_message: message.user_message,
//     }
//     messages.push(newMessage);
//     return new Response(JSON.stringify(newMessage), {
//         headers: { "Content-Type": "application/json"},
//         status: 201,
//     })
// }