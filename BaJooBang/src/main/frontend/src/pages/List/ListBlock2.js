import React from 'react';
import './ListBlock1.css';
import { useNavigate } from 'react-router-dom';

function ListBlock2({Num, Address, Price, State, Request_id, Date}) {
    const navigate = useNavigate();
    
    const getStateStyle = (state) => {
        switch (state) {
            case '매칭 전':
                return { color: '#FF5555', backgroundColor: '#FFF0EE' };
            case '매칭 완료':
                return { color: '#FFC633', backgroundColor: '#FFFCE5' };
            case '작성 완료':
                return { color: '#3888FF', backgroundColor: '#E5F0FF' };
            case '평가 완료':
                return { color : '#7B78FF', backgroundColor: '#EDEAFF' };
            case '환불 중':
                return { color : '#31A82F', backgroundColor: '#DAFCDD' };
            case '환불 완료':
                return { color : '#FFA800', backgroundColor: '#FFE9B7' };

            default:
                return { color: 'black', backgroundColor: 'transparent' };
        }
    };

    return(
        <div className='ListBlockContainer' onClick={() => navigate(`/request/${Request_id}`)}>
            <div className='ListBlockHeader'>
                {Address}
            </div>
            <div className='ListBlockBody'>
                <div>가격 : {Price}</div><p></p>
                <div>등록일 : {Date}</div>
                <div><p><p></p></p></div><p></p>
                <div style={{ padding: '5px', borderRadius: '8px', fontSize: '13.5px', ...getStateStyle(State), textAlign:'center' }}>
                    {State}
                </div>
                
            </div>
        </div>
    );
}

export default ListBlock2;
