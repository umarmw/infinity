import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleTile, { ArticleTileProps } from '../src/component/ArticleTile';
import ArticleData from '../content/ArticleTile.content.json';

export default {
  title: 'Article',
  component: ArticleTile,
  argTypes: {
    description:{ control: 'text' },
  }
} as ComponentMeta<typeof ArticleTile>;

const Template: ComponentStory<typeof ArticleTile> = (args) => <ArticleTile {...args} />;

export const BasicTile = Template.bind({});

const buttonprops = {className:"test", label: "text"}

BasicTile.args = {
  title: ArticleData.title,
  description: ArticleData.description,
  tags: ArticleData.tags, 
  button: {...buttonprops}
};


/*

import CalloutQuote from './CalloutQuote';
import styles from "../assets/global.scss";

export default {
    title: 'Atoms/Editorial/CallOutQuote',
    component: CalloutQuote,
    parameters: {
        docs: {
          description: {
            component: 'CallOutQuote',
          }
        },
    },
    argTypes: {        
      quoteText: {
          description: 'Quote text',
          type:{required: true},
          table: {
              category: 'CallOutQuote'
          },
          control: {
            type: 'text'
        }
      },
      authorImg: {
        description: 'Author image',
        table: {
            category: 'CallOutQuote'
        },
        control: {
            type: 'boolean'
        }
      },
      authorName:{
        description: 'Author name',
        table: {
            category: 'CallOutQuote'
        },
        control: {
            type: 'text'
        }
      },
      authorRole:{
        description: 'Author role',
        table: {
            category: 'CallOutQuote'
        },
        control: {
            type: 'text'
        }
      },
      srcImgAuthor:{
        description: 'Author Image URL',
        table: {
            category: 'CallOutQuote'
        },
        control: {
            type: 'text'
        }
      }
    },       
}

// Template Wrapper
const Template = (args) => (
  <div className={styles["container"]}>
    <div className={styles["container-inner"]}>
      <CalloutQuote {...args}>{args.children}</CalloutQuote>
    </div>
  </div>
)

// Basic Usage Story
export const Default = Template.bind({})
Default.args = {
  quoteText: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl metus, rutrum at lacus pellentesque, pulvinar rhoncus nisi.',
  authorImg: true,
  srcImgAuthor:'https://gravatar.com/avatar/8eaba863188e78ac22e42ec12bc3bfdb?s=400&d=mp&r=x',
  authorName: 'Jonathan Smith',
  authorRole:'Lead Scientist at ABC'
}

*/