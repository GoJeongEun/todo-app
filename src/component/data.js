const toDoList = [
    {
        "id": 1,
        "text": "여수"
    },
    {
        "id": 2,
        "text": "제주"
    },
    {
        "id": 3, 
        "text": "부산"
    },
    {
        "id": 4,
        "text":"독도"
    },
    {
        "id": 5,
        "text": "울릉도"
    },
];

const getPostByNo = no => {
    const array = toDoList.filter(x=> x.no == no);
    if (array.length == 1){
        return array[0];
    }
    return null;
}

export {
    toDoList,
    getPostByNo
};