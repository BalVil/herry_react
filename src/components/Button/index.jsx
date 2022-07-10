import styled from 'styled-components';

const Button = styled.button`
  padding: 0 10px;
  background-color: ${props => (props.close ? 'palevioletred' : 'lightblue')};
  border: none;
  color: white;
  border-radius: 5px;
`;

export const NormalButton = () => <Button>X</Button>;
export const CloseButton = ({ item = [], onRemoveItem }) => (
  <Button close isRed={item.count > 0} onClick={onRemoveItem}>
    X
  </Button>
);

export default Button;
