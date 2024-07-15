const cardData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        time: "5 Hours ago",
        imgSrc: "/sample.jpg"
    },
    {
        id: 2,
        title: "Voluptas cumque ut fuga odit nemo recusandae quasi impedit nam optio necessitatibus?",
        time: "2 Hours ago",
        imgSrc: "/sample.jpg"
    },
    {
        id: 3,
        title: "Cumque magnam alias voluptatibus repellat sunt laboriosam officia voluptas quidem.",
        time: "1 Day ago",
        imgSrc: "/sample.jpg"
    },
    {
        id: 4,
        title: "Cumque magnam alias voluptatibus repellat sunt laboriosam officia voluptas quidem.",
        time: "1 Day ago",
        imgSrc: "/sample.jpg"
    },
    {
        id: 5,
        title: "Cumque magnam alias voluptatibus repellat sunt laboriosam officia voluptas quidem.",
        time: "1 Day ago",
        imgSrc: "/sample.jpg"
    },
];
const CardRecomend = () => {
    return (
        <div>
            {cardData.map((item) =>(
                <div key={item.id} className="flex gap-5 mt-4 shadow-md p-5 rounded-2xl bg-[#f7f9fb]">
                    <div className="w-3/4">
                        <p className="font-thin text-slate-500 text-sm">Tech News | {item.time}</p>
                        <p className="line-clamp-3 text-lg">{item.title}</p>
                    </div>
                    <div className="w-1/4">
                        <img className="rounded-xl" src={item.imgSrc} width="80px" height='80px' alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CardRecomend;