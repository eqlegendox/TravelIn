import Link from 'next/link';

async function fetchHotels() {
    const response = await fetch("http://localhost:3000/api/hotelItem", {
        method:"GET",
    });
    return response.json();
}

const page = async({ params }) => {
    const dataa = await fetchHotels();
    console.log(dataa);
    return(
        <div>
            <Link href="/search">Search Page</Link>
            <h1>Hotels: </h1>
                {dataa.map(data => {
                    if (data.userId == params.dynaId){
                        return <div>{<div>{data.id}: {data.title}</div>}</div>
                    }
                })}
        </div>
    )
}

export default page