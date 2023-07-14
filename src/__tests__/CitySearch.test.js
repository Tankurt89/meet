import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
    test ('renders text input', () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const CitySearchComponent = render(<CitySearch />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const cityTextBox = CitySearchComponent.queryByRole('textbox')
        expect(cityTextBox).toBeInTheDocument()
        expect(cityTextBox).toHaveClass('city')
    })
    test('suggestions list is hidden by default', () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const CitySearchComponent = render(<CitySearch />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const suggestionList = CitySearchComponent.queryByRole('list')
        expect(suggestionList).not.toBeInTheDocument()
    })
    test('renders a list of suggestions when city text box gains focus', async () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const CitySearchComponent = render(<CitySearch />)
        const user = userEvent.setup()
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const cityTextBox = CitySearchComponent.queryByRole('textbox')
        await user.click(cityTextBox)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const suggestionList = CitySearchComponent.queryByRole('list')
        expect(suggestionList).toBeInTheDocument()
        expect(suggestionList).toHaveClass('suggestions') 
    })
})