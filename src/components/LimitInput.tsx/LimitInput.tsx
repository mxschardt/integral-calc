import LimitInputProps from './LimitInput.interface';

function LimitInput(props: LimitInputProps) {
  return (
    <input
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type="number"
      className="input"
      step="0.001"
      required
    />
  );
}
export default LimitInput;
