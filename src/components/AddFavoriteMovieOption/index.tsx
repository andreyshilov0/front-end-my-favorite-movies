import React, { useState, useEffect } from "react";
import { DEFAULT_RANGE, DEFAULT_YEAR } from "@api/constants";
import ListGenre from "@components/ListGenre";
import {
  LinkButton,
  SelectorWrapper,
  InputWrapper,
  SelectWrapper,
} from "./style";

const AddFavoriteMovieOption = () => {
  const [rangeSelector, setRangeSelector] = useState<number>(DEFAULT_RANGE);
  const [date, setDate] = useState<number[]>([]);
  const [currentDate, setCurrentDate] = useState<number>(DEFAULT_YEAR);

  useEffect(() => {
    for (let i = 1990; i <= new Date().getFullYear(); i++) {
      date.push(i);
    }
    setDate([...date]);
  }, []);
  return (
    <>
      <ListGenre />
      <SelectorWrapper>
        Популярность
        <InputWrapper
          value={rangeSelector}
          type="range"
          max={100}
          min={1}
          step={1}
          onChange={(event) => setRangeSelector(Number(event.target.value))}
        />
        Дата выхода
        <SelectWrapper
          value={currentDate}
          onChange={(event) => setCurrentDate(Number(event.target.value))}
        >
          {date.map((date) => (
            <option>{date}</option>
          ))}
        </SelectWrapper>
      </SelectorWrapper>
      <LinkButton to={"/main"}>Перейти к избранному</LinkButton>
    </>
  );
};

export default AddFavoriteMovieOption;
