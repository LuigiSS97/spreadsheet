import { memo, useCallback } from "react";
import PropTypes from "prop-types";

function Cell({ rowIndex, colIndex, cell, data, setData }) {
  const handleCellChange = useCallback(
    (rowIndex, colIndex, value) => {
      const updatedData = [...data];
      updatedData[rowIndex][colIndex] = value;
      setData(updatedData);
    },
    [data, setData]
  );

  return (
    <td>
      <input
        type="text"
        value={cell}
        onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
      />
    </td>
  );
}

Cell.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
  cell: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default memo(Cell);
