import { useCallback, useState } from "react";
import "./App.css";
import Cell from "./cell";

function App() {
  const [data, setData] = useState([
    ["", "A", "B", "C", "D"],
    [1, "", "", "", ""],
    [2, "", "", "", ""],
    [3, "", "", "", ""],
    [4, "", "", "", ""],
    [5, "", "", "", ""],
  ]);
  console.log(data);
  const handleCellChange = useCallback(
    (rowIndex, colIndex, value) => {
      const updatedData = [...data];
      updatedData[rowIndex][colIndex] = value;
      setData(updatedData);
    },
    [data]
  );

  const handleColumnCreation = useCallback(() => {
    let updatedData = [...data];
    for (const i in updatedData) {
      updatedData[i].push("");
    }
    setData(updatedData);
  }, [data]);

  const handleRowCreation = useCallback(() => {
    let updatedData = [...data];
    let newRow = [];
    for (const i in updatedData[0]) {
      newRow.push("");
    }
    setData([...updatedData, newRow]);
  }, [data]);

  return (
    <main>
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => {
                if (rowIndex === 0 && colIndex === 0) {
                  return <th key={colIndex}></th>;
                }

                return (
                  <Cell
                    key={colIndex}
                    type="text"
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                    cell={cell}
                    data={data}
                    setData={setData}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleColumnCreation}>ADD COLLUMN</button>
      <button onClick={handleRowCreation}>ADD ROW</button>
    </main>
  );
}

export default App;
