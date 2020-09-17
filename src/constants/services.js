import React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faBell} />,
        label: 'イラスト',
        text: 'イラストもできるで〜〜'
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faBell} />,
        label: 'バナー、アイコン',
        text: 'バナーも作れるで〜〜'
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faBell} />,
        label: '似顔絵',
        text: '似顔絵もまかせてやで〜〜'
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faBell} />,
        label: 'デザイン',
        text: 'デザイン感覚もあるんやで〜'
    }
]

