import React from 'react';
import { Link } from 'gatsby';

import { CustomButtonStyles } from './custom-button.styles';

const CustomButton = ({pageUrl, children}) => {
    return (
        <CustomButtonStyles>
            <Link to={pageUrl}>
                {children}
            </Link>
        </CustomButtonStyles>
    )
}

export default CustomButton;
