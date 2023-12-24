import {useState} from 'react';
import graph from 'graphology';
import {dijkstra} from 'graphology-shortest-path';

const MatrixComponent = () => {
    const [matrixSize, setMatrixSize] = useState(3);
    const [matrix, setMatrix] = useState(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));

    const [sourceNode, setSourceNode] = useState(0);
    const [targetNode, setTargetNode] = useState(2);
    const [pathLength, setPathLength] = useState(null);

    const handleMatrixSizeChange = (e) => {
        setMatrixSize(parseInt(e.target.value));
        setMatrix(Array(parseInt(e.target.value)).fill().map(() => Array(parseInt(e.target.value)).fill(0)));
        setSourceNode(0)
        setTargetNode(parseInt(e.target.value) - 1)
    };

    const handleCellValueChange = (row, col, value) => {
        const newMatrix = [...matrix];
        newMatrix[row][col] = value;
        setMatrix(newMatrix);
    };

    const calculatePathLength = () => {
        const g = new graph();
        for (let i = 0; i < matrix.length; i++) {
            g.addNode(i);
        }

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] !== 0 && i !== j) {
                    g.addEdge(i, j);
                    g.setEdgeAttribute(i, j, 'weight', matrix[i][j]);
                }
            }
        }

        const path = dijkstra.bidirectional(g, sourceNode, targetNode);

        if (path !== null) {
            let length = 0;
            for (let i = 0; i < path.length - 1; i++) {
                const u = path[i];
                const v = path[i + 1];
                length += g.getEdgeAttribute(u, v, 'weight');
            }
            setPathLength(length);
        } else {
            setPathLength(null);
        }
    };

    return (
        <div>
            <input
                type="number"
                value={matrixSize}
                onChange={handleMatrixSizeChange}
                min={2}
            />
            <table>
                <tbody>
                {matrix.map((row, i) => (
                    <tr key={i}>
                        {row.map((cell, j) => (
                            <td key={j}>
                                <input
                                    type="number"
                                    value={cell}
                                    min={0}
                                    onChange={(e) => handleCellValueChange(i, j, parseInt(e.target.value))}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>

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

            <br />
            <button onClick={calculatePathLength}>Calculate Path Length</button>

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