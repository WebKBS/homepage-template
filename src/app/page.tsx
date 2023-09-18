import SwiperElement from "@/components/lib/swiper";

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

interface DataType {
    id: string;
    title: string
}

export default async function Home() {
    const data = await getData();

    return (
        <main>
            <SwiperElement/>
            <h1 className="">Hello</h1>
            {
                data.map((item: DataType) => (
                    <div key={item.id}>{item.title}</div>
                ))
            }
        </main>
    );
}
