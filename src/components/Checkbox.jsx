const Checkbox = ({ perishable }) => {
  return (
    <input type="checkbox" checked={perishable} disabled />
  );
};

export default Checkbox;