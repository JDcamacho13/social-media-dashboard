import React, { useContext } from 'react';
import { FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Card } from './Card';
import '../styles/ListOfCards.css';
import { AppContext } from '../context/AppContext';

export const ListOfCards = () => {
    const {
        state: { facebook, instagram, youtube },
    } = useContext(AppContext);

    console.log(facebook, instagram, youtube);

    return (
        <div className="container-cards">
            <Card
                username="José Daniel Camacho"
                followers={facebook}
                socialMedia="facebook"
                nameOfFollowers="FRIENDS"
            >
                <FaFacebookSquare className="icon" />
            </Card>

            <Card
                username="José Daniel Camacho"
                followers={youtube}
                socialMedia="youtube"
                nameOfFollowers="VIEWS"
            >
                <FaYoutube className="icon" />
            </Card>

            <Card
                username="@JDcamacho"
                followers={instagram}
                socialMedia="instagram"
                nameOfFollowers="FOLLOWERS"
            >
                <FaInstagram className="icon-instagram" />
            </Card>
        </div>
    );
};
