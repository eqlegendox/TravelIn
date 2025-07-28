export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(res)
    const hotels = await res.json();

    return Response.json(hotels)
}