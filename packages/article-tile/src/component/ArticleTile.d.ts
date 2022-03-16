import React from 'react';
export interface ArticleTileProps {
    title: string;
    description: string;
    tags: Array<TagProps>;
    button?: {
        className?: string;
        label?: string;
    };
}
export interface TagProps {
    name: string;
    style?: string;
}
declare const ArticleTile: React.FC<ArticleTileProps>;
export default ArticleTile;
