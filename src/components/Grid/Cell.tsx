import { useState } from "react"

type cellProps = {
    row: number,
    col: number,
    cellWidth: number
}

const Cell = ({ row, col, cellWidth }: cellProps) => {

    let [bgColor, setBgColor] = useState("black");

    const handleClick = () => {
        setBgColor("white")
    }

    return (
        <div
            className="border"
            onClick={() => handleClick()}
            style={{ width: cellWidth, height: cellWidth, backgroundColor: bgColor }}
        ></div>
    );
}

export default Cell;