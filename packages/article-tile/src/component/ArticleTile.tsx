import React from 'react';
import Styled from 'styled-components';
import { Tag } from '@infinity-core/tag';

export interface ArticleTileProps {
  title: string;
  description: string;
  tags: Array<TagProps>;
}

export interface TagProps {
  name: string;
  style?: string;
}

const ArticleTile: React.FC<ArticleTileProps> = ({ title, description, tags }) => {
  return (
    <StyleWrapper className="article-tile">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{tags && tags.map((item, i) => <Tag name={item.name} key={['t', i].join('')} />)}</div>
    </StyleWrapper>
  );
};

const StyleWrapper = Styled.div`
    &{
        border: 1px solid blue;
        border-radius: 10px;
        display: inline-block;
        padding: 10px 20px;
        margin: 5px;
    }
`;

export default ArticleTile;
