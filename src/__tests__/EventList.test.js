/* eslint-disable testing-library/render-result-naming-convention */
import { render } from '@testing-library/react'
import EventList from '../components/EventList'

describe('<EventList /> component', () => {
    let EventListComponent;
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        EventListComponent = render(<EventList />)
    })
    test('has an element with "list" role', () => {
        // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/prefer-presence-queries
        expect (EventListComponent.queryByRole("list")).toBeInTheDocument()
    })
    test('renders correct number of events', () => {
        EventListComponent.rerender(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4)
    })
})
