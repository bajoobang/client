import React, { useEffect, useState } from 'react';
import {Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './helpinfo.css';
import { ReactComponent as Location } from '../components/images/location.svg';
import { ReactComponent as Call } from '../components/images/call.svg';
import { ReactComponent as Profilecircle } from '../components/images/profile_circle.svg';
import { ReactComponent as List } from '../components/images/list.svg';
import { ReactComponent as Heart } from '../components/images/heart.svg';
import { ReactComponent as House_image1 } from '../components/images/house_image1.svg';
import { ReactComponent as House_image2 } from '../components/images/house_image2.svg';
import { ReactComponent as House_all_image } from '../components/images/house_all_image.svg';
import Loading from '../pages/Loading/Spinner';

const Imformation = ({ positions }) => {
  const navigate = useNavigate();
  const { house_id } = useParams();
  const numericHouseId = parseInt(house_id); // 문자열을 숫자로 변환

  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectedPosition = positions.find(pos => pos.house_id === numericHouseId);
        if (selectedPosition) {
          setPosition(selectedPosition);
          setLoading(false); // 데이터가 로드되면 로딩 상태를 false로 변경
        } else {
          const response = await axios.get(`/helpinfo/detail?house_id=${house_id}`);
          setPosition(response.data);
          setLoading(false); // 데이터가 로드되면 로딩 상태를 false로 변경
        }
      } catch (error) {
        console.error('Failed to fetch position:', error);
      }
    };
    fetchData();
  }, [house_id, numericHouseId, positions]); // dependencies에 positions도 추가

  if (!position) {
    return <div>해당하는 위치 정보를 찾을 수 없습니다.</div>;
  }
  if (loading) {
    return <Loading />;
  }

  const handleClick = (content) => {
    console.log(content);
    navigate(`/inputRequest/a${house_id}`, { state: { content: content, isFromInformation: true } });
};

  
  return (
    <div className="container">
      <div className="leftinfo">
        <div id="house_image">
          <p id="naming">{position.content}</p>
          <p id="moneying">월세 {position.money1} / {position.money2}</p>
        </div>

        <div id="house_info">
          <p style={{fontWeight: '500', fontSize: '22px'}}> 매물 사진 </p>
          <p><span className="blank"></span><House_image1/><span className="blank"></span><House_image2/></p>
          <p style={{fontWeight: '500', fontSize: '22px', marginTop: '6vw'}}> 매물 평면도 </p>
          <p><span className="blank"></span><House_all_image/></p>
          <p style={{fontWeight: '500', fontSize: '22px', marginTop: '6vw'}}> 매물 정보 </p>
          <div id="house_detail">
            <div id="house_detail_title">
              <p>월 관리비</p>
              <p>관리비 포함</p>
              <p>전용면적</p>
              <p>해당 층 / 총 층</p>
              <p>방 수</p>
              <p>방향</p>
              <p>입주 가능일</p>
            </div>
            <div className="house_detail_more">
              <p>{position.money1}</p>
              <p>{position.money2}</p>
              <p>100</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rightinfo">
        <div className="card-header">중개사</div>
        <div className="card">
          <div className="profile">
            <div className="avatar">
              <Profilecircle />
            </div>
            <div className="name">대표 홍길동</div>
          </div>
          <div className="contact-info">
            <p><Location /> 위치</p>
            <div className="contact-details">
              <p>서울특별시 서울로 123길 45</p>
            </div>
            <p><Call /> 전화</p>
            <div className="contact-details">
              <p>010-1234-5678</p>
            </div>
          </div>
        </div>
        <div className="actions">
          <button
            className="helpinfoBtn"
            style={{ width: '11vw' }}
            onClick={() => handleClick(position.content)}
          >
            <List style={{ paddingRight: '0.5vw' }} />
            발품 요청서 작성
          </button>


        </div>
      </div>
    </div>
  );
}

export default Imformation;
