import React from 'react'

import { TitleStyles, Heading2, Span} from './title.styles';

const Title = ({ title }) => {
    return (
        <TitleStyles>
            <Heading2>
                <Span>/</Span> {title}
            </Heading2>
        </TitleStyles>
    )
}

export default Title
