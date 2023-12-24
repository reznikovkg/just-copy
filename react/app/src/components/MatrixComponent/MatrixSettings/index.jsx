const MatrixSettings = ({ size, onChange }) => {
    const handleSizeChange = (e) => {
        const newSize = parseInt(e.target.value);
        onChange(newSize);
    };

    return (
        <div>
            <label htmlFor="size">Размер матрицы:</label>
            <input id="size" type="number" min="1" max="10" value={size} onChange={handleSizeChange} />
        </div>
    );
};

export default MatrixSettings