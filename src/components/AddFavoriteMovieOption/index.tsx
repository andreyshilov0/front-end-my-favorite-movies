import { useState, useEffect } from "react";
import { DEFAULT_RANGE, DEFAULT_YEAR } from "@api/constants";
import ListGenre from "@components/ListGenre";
import {
  LinkButton,
  SelectorWrapper,
  InputWrapper,
  SelectWrapper,
  WrapperMovie,
  WrapperButtonView,
} from "./style";
import AddFavoriteMovie from "@components/AddFavoriteMovie";
import { useTranslation } from "react-i18next";
import ButtonView from "@components/ButtonView";

const AddFavoriteMovieOption = () => {
  const [rangeSelector, setRangeSelector] = useState<number>(DEFAULT_RANGE);
  const [date, setDate] = useState<number[]>([]);
  const [currentDate, setCurrentDate] = useState<number>(DEFAULT_YEAR);
  const [changeGenreId, setChangeGenreId] = useState<number[]>([]);
  const [blockView, setBlockView] = useState<boolean>(false);
  const { t } = useTranslation("add-favorite");

  useEffect(() => {
    for (let i = 1990; i <= new Date().getFullYear(); i++) {
      date.push(i);
    }
    setDate([...date]);
  }, []);

  return (
    <>
      <ListGenre setChangeGenresId={setChangeGenreId} />
      <SelectorWrapper>
        {t("option.popularity")}
        <InputWrapper
          value={rangeSelector}
          type="range"
          max={100}
          min={1}
          step={1}
          onChange={(event) => setRangeSelector(Number(event.target.value))}
        />
        {t("option.releaseDate")}
        <SelectWrapper
          value={currentDate}
          onChange={(event) => setCurrentDate(Number(event.target.value))}
        >
          {date.map((date, index) => (
            <option key={index}>{date}</option> // Какой использользовать ключ правильно?
          ))}
        </SelectWrapper>
      </SelectorWrapper>
      <LinkButton to={"/main"}>{t("option.button")}</LinkButton>
      <WrapperButtonView>
        <ButtonView
          onClick={() => setBlockView(false)}
          viewBlock={!blockView}
          name={t("option.list")}
        />
        <ButtonView
          onClick={() => setBlockView(true)}
          viewBlock={blockView}
          name={t("option.module")}
        />
      </WrapperButtonView>

      <WrapperMovie>
        <AddFavoriteMovie
          blockView={blockView}
          currentDate={currentDate}
          changeGenresId={changeGenreId}
          range={rangeSelector}
        />
      </WrapperMovie>
    </>
  );
};

export default AddFavoriteMovieOption;
