jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom'),
        useParams: jest.fn(),
        useHistory: jest.fn(),
    };
});
