/* eslint-disable no-unused-vars, no-use-before-define, no-undef */
import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import ArticleTile, { ArticleTileProps } from '../src/component/ArticleTile';
import ArticleData from '../content/ArticleTile.content.json';

export default {
  component: ArticleTile,
  title: 'Editorial',
  decorators: [withKnobs],
  parameters: {
    notes: ``,
  },
};

export const BasicTile = () => {
  return (
    <ArticleTile
      title={text('Title', ArticleData.title as string)}
      description={text('Description', ArticleData.description as string)}
      tags={ArticleData.tags}
    />
  );
};

/* eslint-enable */
