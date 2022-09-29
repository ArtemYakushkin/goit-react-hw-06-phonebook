import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const onChange = element => {
    dispatch(changeFilter(element.currentTarget.value));
  };

  return (
    <FilterLabel>
      <FilterInput
        onChange={onChange}
        value={filter}
      ></FilterInput>
    </FilterLabel>
  );
};