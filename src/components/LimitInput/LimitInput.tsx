function LimitInput(args: React.HTMLAttributes<HTMLInputElement>) {
  return (
    <input type="number" className="input" step="0.001" required {...args} />
  );
}
export default LimitInput;
