/* eslint-disable no-unused-vars, no-use-before-define, no-undef */
import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import Tag, { TagProps } from '../src/component/Tag';
import TagData from '../content/Tag.content.json';

const oneTag = TagData.tags[0];

export default {
  component: Tag,
  title: 'Editorial',
  decorators: [withKnobs],
  parameters: {
    notes: ``,
  },
};

export const BasicTag = () => {
  return <Tag name={text('Title', oneTag.name as string)} style={text('Style', oneTag.style as string)} />;
};

export const ListsTag = () => {
  return (
    <>
      {TagData.tags.map((item, i) => (
        <Tag name={text('Title', item.name as string)} style={text('Style', item.style as string)} />
      ))}
    </>
  );
};
/* eslint-enable */
