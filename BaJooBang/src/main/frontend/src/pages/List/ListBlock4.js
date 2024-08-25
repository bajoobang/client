import React from 'react';
import './ListBlock1.css'; // 별도의 CSS 파일로 스타일을 관리합니다.
import { useNavigate } from 'react-router-dom';

function ListBlock4({ Num, Address, Price, Date, Request_id, State }) {
    const navigate = useNavigate();

    const getStateStyle = (state) => {
        switch (state) {
            case '요청 중':
                return { color: '#FF5555', backgroundColor: '#FFF0EE' };
            case '매칭 완료':
                return { color: '#FFC633', backgroundColor: '#FFFCE5' };
            case '작성 완료':
                return { color: '#3888FF', backgroundColor: '#E5F0FF' };
            case '매칭 실패':
                return { color: '#FF5555', backgroundColor: '#FFF0EE' };
                case '환불 중':
                return { color : '#31A82F', backgroundColor: '#DAFCDD' };
            case '환불 완료':
                return { color : '#FFA800', backgroundColor: '#FFE9B7' };
            default:
                return { color: 'black', backgroundColor: 'transparent' };
        }
    };

    return (
        <div onClick={() => navigate(`/request/${Request_id}`)} className='ListBlockContainer'>
            <div className='ListBlockHeader'>
                {Address}
            </div>
            <div className='ListBlockBody'>
                <div>가격: {Price}</div><p></p>
                <div>등록일: {Date}</div><p></p>
                <div style={{ padding: '5px', borderRadius: '8px', fontSize: '13.5px', ...getStateStyle(State), textAlign:'center' } }>
                    {State}
                </div>
                            </div>
        </div>
    );
}

export default ListBlock4;
