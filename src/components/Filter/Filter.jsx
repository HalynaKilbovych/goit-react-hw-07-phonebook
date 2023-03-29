import React from 'react';
import { FilterWrapper, Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';


export function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };
  return (
  <FilterWrapper>
    <Label>
      Find name
      <Input type="text" value={filterValue} onChange={onChange} placeholder=" " />
    </Label>
  </FilterWrapper>
  );
}