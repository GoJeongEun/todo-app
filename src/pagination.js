import React,{ useEffect } from 'react';
import React, { useState } from 'react';


/* 
 
※ 구분 쉽게 대문자로 변경했음
 
 data : 보여줄 데이터
 currentPage: '현재'보는 페이지를 명시하는 요소
 postperPage: 페이지에서 보여줄 데이터(포스트)의 개수 limits로 표현하기도함
 indexOfLastpage: 페이지내에서 '마지막포스트'의 index값 위에서 정한 
                  currentpage값과 postperpage값을 곱하면 구할 수 있음
 indexOfFirstpage:페이지의 '첫포스트'의 index값 위에서 정의한 indexOfLastpage
                  값에서 postperpage값을 빼면 구할 수 있다
 currentposts: '현재'보는 페이지에서 보내줄 데이터(포스트). 위에서 정의한 
                indexofFirstpage 부터 indexofLastpage까지의 데이터를
                slice등의 방법을 통해 보여준다
 paging function: 페이지를 이동시킬 함수. 추후 만들게 될 번호 또는 스크롤
                  이벤트를 통해 위의 currentPage 값을 변경
 
 */

