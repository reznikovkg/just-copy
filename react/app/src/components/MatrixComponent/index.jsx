import {useState} from 'react';
import MatrixInput from "./MatrixInput";

const MatrixComponent = () => {
    const [size, setSize] = useState(3);
    const [matrix, setMatrix] = useState([]);

    const [sourceNode, setSourceNode] = useState(0);
    const [targetNode, setTargetNode] = useState(2);
    const [pathLength, setPathLength] = useState(null);

    const handleMatrixChange = (newMatrix) => {
        setMatrix(newMatrix);
    };

    const calculatePathLength = (source, target) => {
        const m = matrix.length;
        const n = matrix[0].length;

        const distances = Array(m)
            .fill()
            .map(() =>
                Array(n)
                    .fill()
                    .map(() => Infinity)
            );

        distances[0][source] = 0;

        for (let layer = 0; layer < m - 1; layer++) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (
                        matrix[layer][i][j] !== 0 &&
                        distances[layer][i] !== Infinity &&
                        distances[layer + 1][j] > distances[layer][i] + matrix[layer][i][j]
                    ) {
                        distances[layer + 1][j] = distances[layer][i] + matrix[layer][i][j];
                    }
                }
            }
        }

        return distances[m - 1][target];
    };

    const handleCalculateClick = () => {
        const pathLength = calculatePathLength(sourceNode, targetNode);
        setPathLength(pathLength);
    };

    return (
        <div>
            <h2>Матрица</h2>
            <MatrixInput
                size={size}
                onSizeChange={setSize}
                onChange={handleMatrixChange}
            />

            <h2>Source Node:</h2>
            <input
                type="number"
                value={sourceNode}
                min={0}
                max={matrix.length - 1}
                onChange={e => setSourceNode(parseInt(e.target.value))}
            />

            <h2>Target Node:</h2>
            <input
                type="number"
                value={targetNode}
                min={0}
                max={matrix.length - 1}
                onChange={e => setTargetNode(parseInt(e.target.value))}
            />

            <br/>

            <button onClick={handleCalculateClick}>Calculate</button>

            <h2>Path Length:</h2>
            {pathLength === null ? (
                <p>Path does not exist between the source and target nodes.</p>
            ) : (
                <p>{pathLength}</p>
            )}
        </div>
    );
};

export default MatrixComponent;