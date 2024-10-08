import React, { useState } from 'react';
import './helpmap.css';
import MypageMap from './kakaomap';
import { ReactComponent as Closer } from '../components/images/closer.svg';
import Bell from './bell.js';
import { positions } from './kakaomap';

// 매물지도의 검색라인
const SearchBar = ({ onFilterChange, onSearchChange, currentFilter }) => {
  return (
    <div className="search">
      <div className='searchbox'>
        <Closer />
        <input 
          type="text" 
          placeholder="Search by name or location" 
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="house_type_buttons">
        
        <button 
          className={currentFilter === '월세' ? 'active' : ''} 
          onClick={() => onFilterChange('월세')}
        >
          월세
        </button>
        <button 
          className={currentFilter === '전세' ? 'active' : ''} 
          onClick={() => onFilterChange('전세')}
        >
          전세
        </button>
        <button 
          className={currentFilter === '전체' ? 'active' : ''} 
          onClick={() => onFilterChange('전체')}
        >
          전체
        </button>
      </div>
      <div className="right_elements">
        
      </div>
    </div>
  );
};

const Helppage = () => {
  const [filter, setFilter] = useState('전체');
  const [search, setSearch] = useState('');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  return (
    <div className="container">  
      <div className="search-and-bell">
        <SearchBar 
          onFilterChange={handleFilterChange} 
          onSearchChange={handleSearchChange} 
          currentFilter={filter}
        />
      </div>
      <MypageMap filter={filter} search={search}  />
    </div>
  );
};

export default Helppage;
