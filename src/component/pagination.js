import React, {useState} from 'react';
import Pagination from './common/Pagination';

const ToDoPagination = () => {
    const getdata = (ToDoInfo) => {};

     const[ todo, setTodo ] = useState({ //todo리스트정보담는 state
         data: getdata(),
         pageSize: 10 // 한페이지에 보여줄 아이템 개수
     });

}
