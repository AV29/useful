import { bool, shape, string } from 'prop-types';

export const ItemType = shape({
  id: string.isRequired,
  path: string,
  disabled: bool
});
