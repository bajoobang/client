import React, { useEffect, useState } from 'react';
import './MyPage.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as Profile } from '../../components/images/mp_profile.svg';

function MyPage() {
  const [listData, setListData] = useState({
    memberDTO: {},
    numOfLikes: 0,
    numOfRegistered: 0,
    numOfInquiries: 0,
    numOfFootworks: 0,
    numOfAlarms: 0,
    star: 0.0,
  });

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('/member'); // Replace with your actual API endpoint
            const requestData = response.data;
            setListData(requestData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
  }, []);

  return (
    <div className="PageWrapper">
      
      <div className="HeaderBackground"></div>  {/* This is the section with the background color/gradient */}
      
      <div className="MyPageContainer">
        <div className="MainContent">
          <div className="ProfileSection">
            <Profile className="ProfileIcon" />
            <div className="ProfileDetails">
              <p className='MPName'>{listData.memberDTO.name}님</p>
              <p className='MPInfo'>{listData.memberDTO.email}</p>
              <p className='MPAddress'>{listData.memberDTO.address}</p>
            </div>
          </div>
          
          <div className='ActivitySection'>
            <div className='RequestorActivity'>
              <h3>나의 요청인 활동</h3><p></p>
              <div className='ActivityBox'>
                <div className='ActivityItem'>
                  <p>찜한 방</p>
                  <p>{listData.numOfLikes}개</p>
                </div>
                <div className='ActivityItem'>
                  <p>등록 매물</p>
                  <p>{listData.numOfRegistered}건</p>
                </div>
                <div className='ActivityItem'>
                  <p>신청 조회</p>
                  <p>{listData.numOfInquiries}건</p>
                </div>
              </div>
              <Link to='/member/registered' className='ViewMapLink'>매물 지도 보러가기</Link>
            </div>

            <div className='FootworkActivity'>
              <p></p>
              <h3>나의 발품인 활동</h3><p></p>
              <div className='ActivityBox'>
                <div className='ActivityItem'>
                  <p>나의 별점</p>
                  <p>{listData.star}</p>
                </div>
                <div className='ActivityItem'>
                  <p>신청 발품</p>
                  <p>{listData.numOfFootworks}건</p>
                </div>
                <div className='ActivityItem'>
                  <p>알림</p>
                  <p>{listData.numOfAlarms}건</p>
                </div>
              </div>
              <Link to='/member/footwork' className='ViewMapLink'>발품 지도 보러가기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
