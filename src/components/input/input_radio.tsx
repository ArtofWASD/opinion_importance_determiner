import { FC } from "react";

interface inputRadioProps {
  inputType: string;
  onChangeHandler: Function;
  state: string;
  stateValue: string;
}

const InputRadio: FC<inputRadioProps> = ({
  inputType,
  onChangeHandler,
  state,
  stateValue,
}) => {
  return (
    <div className="flex gap-2">
      <input
        type="radio"
        checked={state === stateValue}
        onChange={() => {
          onChangeHandler(stateValue);
        }}
      />
      <p>{inputType}</p>
    </div>
  );
};

export default InputRadio;
