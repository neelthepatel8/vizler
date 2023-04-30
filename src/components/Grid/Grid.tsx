import Cell from "./Cell";

const Grid = () => {
  const gridSize = 20;
  const cellWidth = 30;
  const gridWidth = cellWidth * gridSize;

  let grid: any[] = [];

  for (let i = 0; i < gridSize; i++) {
    let row: any[] = [];
    for (let j = 0; j < gridSize; j++) {
      row.push(
        <Cell key={`${i}, ${j}`}
          row={i} col={j} cellWidth={cellWidth} />
      );
    }
    grid.push(row);
  }
  return (
    <div className="flex justify-center">
      <div
        className="grid mx-auto my-auto"
        style={{
          width: gridWidth,
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`, gridTemplateRows: `repeat(${gridSize}, 1fr)`
        }}
      >
        {grid}
      </div>
    </div>
  );
};

export default Grid;
