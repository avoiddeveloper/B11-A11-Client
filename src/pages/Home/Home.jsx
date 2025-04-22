import React from 'react';
import Banner from './Banner';
import BookCategories from './BookCategories';
import RandomQA from './RandomQA';
import LibraryStaff from './LibraryStaff';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <LibraryStaff></LibraryStaff>
            <RandomQA></RandomQA>
        </div>
    );
};

export default Home;