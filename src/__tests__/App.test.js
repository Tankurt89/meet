import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    })
    test('renders list of events', () => {     
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument()
    })
    test('render CitySearch', () => {  
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });
    test("renders a textbox with the number of events", () => {
        // eslint-disable-next-line jest/valid-expect
        expect(AppDOM.querySelector('#number-of-events'))
    })
    
})