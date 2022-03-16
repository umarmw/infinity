import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag, { TagProps } from '../src/component/Tag';
import TagData from '../content/Tag.content.json';

export default {
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const BasicTag = Template.bind({});

const oneTag = TagData.tags[0];

BasicTag.args = {
  name: oneTag.name,
  style: oneTag.style,
};

// const Template2: ComponentStory<typeof Tag> = (args) => { 
//   return(
//     <>
//       {
//       TagData.tags.map((arg, i) => (
//           <Tag
//             { ...arg}
//             key={['t', i].join('')}
//           />
//         ))
//       }
        
//     </>
//   )

// export const MultipleTag = Template2.bind({});


// /* eslint-disable no-unused-vars, no-use-before-define, no-undef */
// import React from 'react';
// import Tag, { TagProps } from '../src/component/Tag';
// import TagData from '../content/Tag.content.json';

// const oneTag = TagData.tags[0];

// export default {
//   component: Tag,
//   title: 'Editorial',
//   decorators: [withKnobs],
//   parameters: {
//     notes: ``,
//   },
// };

