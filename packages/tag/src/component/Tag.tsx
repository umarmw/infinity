import React from 'react';
import Styled from 'styled-components';

export interface TagProps {
  name: string;
  style: string;
}

const Tag: React.FC<TagProps> = ({ name, style }) => {
  return <StyleWrapper className={style}>{name}</StyleWrapper>;
};

const StyleWrapper = Styled.div`
    &{
        border: 1px solid teal;
        border-radius: 10px;
        display: inline-block;
        padding: 10px 20px;
        margin: 5px;
    }
`;

export default Tag;
