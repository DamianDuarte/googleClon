import React from 'react';
import {Header} from '../components/header';
import {Central_img} from '../components/central_img';
import {SearchBar} from '../components/searchbar';
import {Footer} from '../components/footer';


export const Home = () => {
    return (
        <>
            <Header />
            <Central_img />
            <SearchBar />
            <Footer />
        </>
    );
}