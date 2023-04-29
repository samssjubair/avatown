import React, { useState } from 'react';
import AvatarCard from '../AvatarCard/AvatarCard';
import Pagination from 'react-bootstrap/Pagination';
import jsonData from './../../assets/data.json'

const MainContainer = () => {
    console.log(jsonData)
  const [activePage, setActivePage] = useState(1);
  const cardsPerPage = 12;
  const totalCards = jsonData.avatars.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const cardIndexStart = (activePage - 1) * cardsPerPage;
  const cardIndexEnd = Math.min(activePage * cardsPerPage, totalCards);

  const renderAvatarCards = () => {
    const avatarCards = [];
    for (let i = cardIndexStart; i < cardIndexEnd; i++) {
      const data = jsonData.avatars[i];
      avatarCards.push(<AvatarCard key={i} data={data} />);
    }
    return avatarCards;
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <Pagination.Item key={i} active={i === activePage} onClick={() => handlePageChange(i)}>
          {i}
        </Pagination.Item>
      );
    }
    return paginationItems;
  };

  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
      <div className="row">
        {renderAvatarCards()}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination>{renderPaginationItems()}</Pagination>
      </div>
    </main>
  );
};

export default MainContainer;
