import {useState} from "react";
import MatrixSettings from "../MatrixSettings";

const MatrixInput = ({ size, onSizeChange, onChange }) => {
    const [matrix, setMatrix] = useState([]);

    const handleValueChange = (e, i, j, k) => {
        const newValue = parseInt(e.target.value);
        const newMatrix = [...matrix];
        newMatrix[i][j][k] = newValue;
        setMatrix(newMatrix);
        onChange(newMatrix);
    };

    const generateEmptyMatrix = (size) => {
        const newMatrix = [];

        for (let i = 0; i < size; i++) {
            const layer = [];
            for (let j = 0; j < size; j++) {
                const row = [];
                for (let k = 0; k < size; k++) {
                    row.push(0);
                }
                layer.push(row);
            }
            newMatrix.push(layer);
        }

        return newMatrix;
    };

    const handleMatrixSizeChange = (newSize) => {
        const newMatrix = generateEmptyMatrix(newSize);
        setMatrix(newMatrix);
        onChange(newMatrix);
        onSizeChange(newSize)
    };

    return (
        <div>
            <h3>Заполните матрицу:</h3>
            <MatrixSettings size={size} onChange={handleMatrixSizeChange} />
            {matrix.map((layer, i) => (
                <div key={i}>
                    <h4>Слой {i + 1}</h4>
                    {layer.map((row, j) => (
                        <div key={j}>
                            {row.map((value, k) => (
                                <input
                                    key={k}
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={value}
                                    onChange={(e) => handleValueChange(e, i, j, k)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MatrixInput