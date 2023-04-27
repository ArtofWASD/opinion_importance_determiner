"use client";
import InputRadio from "@/src/components/input/input_radio";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [watchFilm, setWatchFilm] = useState("");
  const [likeFilm, setLikeFilm] = useState("");
  const [cashSuccess, setCashSuccess] = useState("");
  const opinion = {
    userName: name,
    userwatchFilm: watchFilm,
    userLikeFilm: likeFilm,
    userCash:cashSuccess
  };
  console.log(opinion);

  return (
    <main className="grid justify-center">
      <div className="pt-10">
        <form>
          <div className="flex gap-4 py-2 justify-between">
            <p>Привет, назови себя</p>
            <input
              type="text"
              className="border-2 border-cyan-600 rounded-lg mx-4 text-center px-2"
              placeholder="Имя"
              onChange={(event:React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="flex gap-4 py-2 justify-between">
            <p>Ты смотрел фильм или играл в игру?</p>
            <InputRadio
              inputType="Да"
              onChangeHandler={() => {
                setWatchFilm("yes");
              }}
              state={watchFilm}
              stateValue="yes"
            />
            <InputRadio
              inputType="Нет"
              onChangeHandler={() => {
                setWatchFilm("no");
              }}
              state={watchFilm}
              stateValue="no"
            />
          </div>
          <div className="flex gap-4 py-2 justify-between">
            <p>Тебе понравилась игра или фильм?</p>
            <InputRadio
              inputType="Да"
              onChangeHandler={() => {
                setLikeFilm("yes");
              }}
              state={likeFilm}
              stateValue="yes"
            />
            <InputRadio
              inputType="Нет"
              onChangeHandler={() => {
                setLikeFilm("no");
              }}
              state={likeFilm}
              stateValue="no"
            />
          </div>
          <div className="flex gap-4 py-2 justify-between">
            <p>Игра или фильм имели коммерческий успех?</p>
            <InputRadio
              inputType="Да"
              onChangeHandler={() => {
                setCashSuccess("yes");
              }}
              state={cashSuccess}
              stateValue="yes"
            />
            <InputRadio
              inputType="Нет"
              onChangeHandler={() => {
                setCashSuccess("no");
              }}
              state={cashSuccess}
              stateValue="no"
            />
          </div>
          <div className="flex gap-4 py-2 justify-between">
            <p>Cчитаешь ли ты того, кому не понравился фильм/игра долбоебом?</p>
            <InputRadio
              inputType="Да"
              onChangeHandler={() => {
                setCashSuccess("yes");
              }}
              state={cashSuccess}
              stateValue="yes"
            />
            <InputRadio
              inputType="Нет"
              onChangeHandler={() => {
                setCashSuccess("no");
              }}
              state={cashSuccess}
              stateValue="no"
            />
          </div>
          <div className="flex gap-4 py-2 justify-between">
          <p>Cчитаешь ли ты того, кому понравился фильм/игра долбоебом?</p>
            <InputRadio
              inputType="Да"
              onChangeHandler={() => {
                setCashSuccess("yes");
              }}
              state={cashSuccess}
              stateValue="yes"
            />
            <InputRadio
              inputType="Нет"
              onChangeHandler={() => {
                setCashSuccess("no");
              }}
              state={cashSuccess}
              stateValue="no"
            />
          </div>
          <input type="submit" value="Проверить" className="border-2 border-cyan-600 rounded-lg p-2 hover:bg-slate-500"/>
        </form>
      </div>
    </main>
  );
};
export default Home;
