import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with placeholder text', () => {
    render(<SearchBar value="" onChange={mockOnChange} placeholder="Search..." />);
    
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(<SearchBar value="" onChange={mockOnChange} placeholder="Search characters..." />);
    
    const input = screen.getByPlaceholderText('Search characters...');
    expect(input).toBeInTheDocument();
  });

  it('displays the current value', () => {
    render(<SearchBar value="Luke" onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Luke');
  });

  it('calls onChange when typing', () => {
    render(<SearchBar value="" onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Vader' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('Vader');
  });

  it('shows clear button when value is not empty', () => {
    render(<SearchBar value="test" onChange={mockOnChange} />);
    
    const clearButton = screen.getByRole('button');
    expect(clearButton).toBeInTheDocument();
  });

  it('does not show clear button when value is empty', () => {
    render(<SearchBar value="" onChange={mockOnChange} />);
    
    const clearButton = screen.queryByRole('button');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('clears the input when clear button is clicked', () => {
    render(<SearchBar value="test" onChange={mockOnChange} />);
    
    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);
    
    expect(mockOnChange).toHaveBeenCalledWith('');
  });

  it('renders search icon', () => {
    render(<SearchBar value="" onChange={mockOnChange} />);
    
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
