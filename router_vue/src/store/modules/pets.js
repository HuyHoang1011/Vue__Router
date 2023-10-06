const state = function(){
    return{
        petList : [
            {
                name: "Luki",
                type: "Dog",
                img:"https://media.istockphoto.com/id/1405183227/vi/anh/m%E1%BB%99t-beagle-ng%E1%BB%93i-trong-m%E1%BB%99t-chi%E1%BA%BFc-vali-m%E1%BB%9F-v%E1%BB%9Bi-qu%E1%BA%A7n-%C3%A1o-v%C3%A0-c%C3%A1c-v%E1%BA%ADt-d%E1%BB%A5ng-gi%E1%BA%A3i-tr%C3%AD-du-l%E1%BB%8Bch-h%C3%A8-chu%E1%BA%A9n.webp?b=1&s=612x612&w=0&k=20&c=QnkhU0HVts5P5gGWnwV_9I9tbDuAvYW0hTh6KpMUQII=",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia, mollitia aspernatur cum aperiam dolores iste numquam cumque delectus, optio possimus beatae cupiditate adipisci harum? Earum facilis sed inventore eius.",
            },
            {
                name: "Mickey",
                type: "Mouse",
                img:"https://cdn.pixabay.com/photo/2022/02/21/21/18/animal-7027637_640.jpg",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia, mollitia aspernatur cum aperiam dolores iste numquam cumque delectus, optio possimus beatae cupiditate adipisci harum? Earum facilis sed inventore eius.",
            },
            {
                name: "Meomeo",
                type: "Cat",
                img:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia, mollitia aspernatur cum aperiam dolores iste numquam cumque delectus, optio possimus beatae cupiditate adipisci harum? Earum facilis sed inventore eius.",
            },
            {
                name: "Ro",
                type: "Fish",
                img:"https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_640.jpg",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia, mollitia aspernatur cum aperiam dolores iste numquam cumque delectus, optio possimus beatae cupiditate adipisci harum? Earum facilis sed inventore eius.",
            },
        ]
    };
}

export default {
    namespaced : true,
    state,
}