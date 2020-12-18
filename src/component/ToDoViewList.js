import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../component/table/CommonTable';
import CommonTableColumn from '../component/table/CommonTableColumn';
import CommonTableRow from '../component/table/CommonTableRow';
import postList from '../component/data';

const ToDoViewList = props => {
    const [ dataList, setDataList ] = useState([]);

    useEffect(() => {
        setDataList(ToDoViewList);
    },[ ])

    return(
        <>
        <CommonTable headersName={['제목', '내용']}>
            {
                dataList ? dataList.map((item, index) => {
                    return(
                        <CommonTableRow key={index}>
                            <CommonTableColumn>{ item.no }</CommonTableColumn>
                            <CommonTableColumn>
                                <Link to={`/postView/${item.no}`}>{ item.title }</Link>
                            </CommonTableColumn>
                            <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                            <CommonTableColumn>{ item.readCount }</CommonTableColumn>
                        </CommonTableRow>
                    )
                }) : ''
            }
        </CommonTable>
        </>
    )
}

export default ToDoViewList;