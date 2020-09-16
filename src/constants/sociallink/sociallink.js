import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

import {SNS} from './sociallink.styles';

const data = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faTwitter} aria-label='Twitterへのリンク' />,
        url: 'https://www.twitter.com',
        label: 'twitterへのリンク'
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faInstagram} aria-label='Instagramへのリンク'/>,
        url: 'https://www.instagram.com/',
        label: 'Instagramへのリンク'
    }
]

const links = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} aria-label={link.label}>
                {link.icon}
            </a>
        </li>
    )
})

export default () => {
    return (
        <SNS>
            {links}
        </SNS>
    )
}


