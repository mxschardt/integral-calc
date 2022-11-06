function Accuracy(args: React.HTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor="accuracy">
      Точность
      <input
        type="number"
        className="accuracy input"
        step="0.00001"
        required
        {...args}
      />
    </label>
  );
}

export default Accuracy;
