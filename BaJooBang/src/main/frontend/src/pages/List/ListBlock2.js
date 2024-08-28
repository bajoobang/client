import React from 'react';
import './ListBlock1.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Add this line to use axios for API calls

function ListBlock2({ Num, Address, Price, State, Request_id, Date }) {
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

    const handleCancel = async () => {
        try {
            await axios.patch(`/withdraw`, { request_id: Request_id });
            alert('구매가 취소되었습니다.');
            // Optionally, refresh the list or update the state to reflect the cancellation
        } catch (error) {
            console.error('구매 취소 중 오류 발생:', error);
            alert('구매 취소에 실패했습니다.');
        }
    };

    return(
        <div className='ListBlockContainer'>
            <div className='ListBlockHeader'>
                {Address}
                {(State !== '작성 완료' && State !== '평가 완료') && (
                    <button className='cancel-button' onClick={handleCancel}>구매 취소</button>
                )}
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
