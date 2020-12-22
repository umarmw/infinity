import { configure } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';

configure({ adapter: new EnzymeAdapter() });
