/* eslint-disable no-unused-vars, no-use-before-define, no-undef */
import React from 'react';
import Enzyme, { shallow, mount, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ArticleTile, { ArticleTileProps } from '../src/component/ArticleTile';
import ArticleData from '../content/ArticleTile.content.json';

const ArticleTileProps: ArticleTileProps = {
  title: ArticleData.title,
  description: ArticleData.description,
  tags: ArticleData.tags,
};

Enzyme.configure({ adapter: new Adapter() });

describe('<Breadcrumb />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<ArticleTile {...ArticleTileProps} />);
  });

  afterEach(() => {
    component.unmount();
  });

  test('render component', () => {
    expect(component.exists()).toBe(true);
  });
});
/* eslint-enable */
