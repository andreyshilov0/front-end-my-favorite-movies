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
import { arrayYears } from "@components/helpers/addCurrentYear";

const AddFavoriteMovieOption = () => {
  const [rangeSelector, setRangeSelector] = useState<number>(DEFAULT_RANGE);
  const [currentDate, setCurrentDate] = useState<number>(DEFAULT_YEAR);
  const [currentGenreIds, setCurrentGenreIds] = useState<number[]>([]);
  const [blockView, setBlockView] = useState<boolean>(false);
  const { t } = useTranslation("add-favorite");

  return (
    <>
      <ListGenre setChangeGenresId={setCurrentGenreIds} />
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
          {arrayYears.map((date, index) => (
            <option key={index + date}>{date}</option>
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
          currentYear={currentDate}
          currentGenreIds={currentGenreIds}
          range={rangeSelector}
        />
      </WrapperMovie>
    </>
  );
};

export default AddFavoriteMovieOption;
