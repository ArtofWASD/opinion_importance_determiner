"use client"
import InputRadio from "@/src/components/input/input_radio"
import { useState } from "react"

const Home = () => {
  const [name, setName] = useState<string>("")
  const [watchFilm, setWatchFilm] = useState<string>("")
  const [likeFilm, setLikeFilm] = useState<string>("")
  const [cashSuccess, setCashSuccess] = useState<string>("")
  const [result, setResult] = useState<string>("")

  const opinionResult = () => {
    const results: any = {
      // смотрел, понравился, окупился
      "yes, yes, yes": "врывайся с двух ног в спор!",
      "yes, yes, no": "да, но стоит задуматься!",
      "yes, no, no": "вы илитарный говноед, будь осторожен!",
      "yes, no, yes": "аргументируй или невозникай!",
      "no, yes, yes": "молчи свой рот?!",
      "no, yes, no": "тише будь!",
      "no, no, yes": "только сильные аргументы?",
      "no, no, no": "ну и куда ты лезешь? ",
    }
    const userAnswers = {
      watchFilm: watchFilm,
      likeFilm: likeFilm,
      cash: cashSuccess,
    }
    setResult(
      results[`${userAnswers.watchFilm}, ${userAnswers.likeFilm}, ${userAnswers.cash}`],
    )
    if (!name) {
      setName('Username')
    }
  }

  return (
    <main className="grid justify-center">
      <div className="pt-10">
        <h1 className="text-2xl text-center py-4">
          Давай определим важность твоего мнения дружок!
        </h1>
        <form className="flex flex-col justify-center border-2 p-4 rounded-lg">
          <div className="flex gap-4 py-2 justify-between">
            <p>Ваше имя:</p>
            <input
              type="text"
              className="border-2 border-cyan-600 rounded-lg text-center px-4"
              placeholder="Иванов Иван"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
              }}
            />
          </div>
          <div className="flex gap-4 py-2 justify-between">
            <p>Ты смотрел фильм или играл в игру?</p>
            <div className="flex justify-end gap-2">
              <InputRadio
                inputType="Да"
                onChangeHandler={() => {
                  setWatchFilm("yes")
                }}
                state={watchFilm}
                stateValue="yes"
              />
              <InputRadio
                inputType="Нет"
                onChangeHandler={() => {
                  setWatchFilm("no")
                }}
                state={watchFilm}
                stateValue="no"
              />
            </div>
          </div>
          <div className="flex gap-4 py-2 justify-between">
            <p>Тебе понравился фильм или игра?</p>
            <div className="flex justify-end gap-2">
              <InputRadio
                inputType="Да"
                onChangeHandler={() => {
                  setLikeFilm("yes")
                }}
                state={likeFilm}
                stateValue="yes"
              />
              <InputRadio
                inputType="Нет"
                onChangeHandler={() => {
                  setLikeFilm("no")
                }}
                state={likeFilm}
                stateValue="no"
              />
            </div>
          </div>
          <div className="flex gap-4 py-2 justify-between">
            <p>Фильм или игра имели коммерческий успех?</p>
            <div className="flex justify-end gap-2">
              <InputRadio
                inputType="Да"
                onChangeHandler={() => {
                  setCashSuccess("yes")
                }}
                state={cashSuccess}
                stateValue="yes"
              />
              <InputRadio
                inputType="Нет"
                onChangeHandler={() => {
                  setCashSuccess("no")
                }}
                state={cashSuccess}
                stateValue="no"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Проверить"
            className="border-2 border-cyan-600 rounded-lg p-2 hover:bg-slate-500 mt-4"
            onClick={(event) => {
              event.preventDefault()
              opinionResult()
            }}
          />
        </form>
        <div className="mt-4 text-center text-2xl break-all">
          {name ? <>{name}, </> : <></>} {result}
        </div>
      </div>
    </main>
  )
}
export default Home
