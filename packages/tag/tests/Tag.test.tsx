/* eslint-disable no-unused-vars, no-use-before-define, no-undef */
import React from 'react';
import Enzyme, { shallow, mount, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Tag, { TagProps } from '../src/component/Tag';
import TagData from '../content/Tag.content.json';

const oneTag = TagData.tags[0];

const tagProps: TagProps = {
  name: oneTag.name,
  style: oneTag.style,
};

Enzyme.configure({ adapter: new Adapter() });

describe('<Breadcrumb />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Tag {...tagProps} />);
  });

  afterEach(() => {
    component.unmount();
  });

  test('render component', () => {
    expect(component.exists()).toBe(true);
  });
});
/* eslint-enable */
