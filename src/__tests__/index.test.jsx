import { render, fireEvent, screen } from "@testing-library/react";
import { act } from "react-test-renderer";
import App from "../App";



describe('App component', () => {
    it('renders button correctly', () => {
        render(<App />);
        const button = screen.getByText(/Clique aqui/i);
        expect(button).toBeInTheDocument();
    });

    it('displays "Loading..." when the button is clicked and the state is loading', () => {
        render(<App />);
        const button = screen.getByText(/Clique aqui/i);
        fireEvent.click(button);
        const loadingText = screen.queryByText(/Carregando.../i);
        expect(loadingText).toBeInTheDocument();
    });

    it('displays the original text after 1500ms when the button is clicked', () => {
        jest.useFakeTimers();
        render(<App />);
        const button = screen.getByText(/Clique aqui/i);
        act(() => {
            fireEvent.click(button);
            jest.runAllTimers();
            const originalText = screen.queryByText(/Clique aqui/i);
            expect(originalText).toBeInTheDocument();
            jest.useRealTimers();
        })
    });
});
