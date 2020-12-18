import { render } from '@testing-library/react';
import React, { useEffect,useState } from 'react';
import { getPostByNo } from './data';
import '../App.css';


const ToDoView = ({history,location,match}) => {
    const [ data, setData ] = useState({});

    const { no } = match.params;

    useEffect(() =>{
        setData(getPostByNo(no));
    }, [ ]);
    return (
        <>
       <div className="todo-list-tampleate">
       <h1 className="todo-list-title">상세페이지</h1>
        <div className="post-view-wrapper">
            
        {
          data ? (
            <>
              <div className="post-view-row">
                <label>제목</label>
                <label>{ data.id }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <label>{ data.text }</label>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
      </div>
      </div>
       </>
    )
}
export default ToDoView;