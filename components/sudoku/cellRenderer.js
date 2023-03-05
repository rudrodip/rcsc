const CellRenderer = ({ cell, handleChange }) => {
	function handleValueChange(e) {
		const value = parseInt(e.target.value);
		handleChange(cell.row, cell.col, value);
	}

	return (
		<input
			name="cell"
			className={`h-16 w-16 text-center inline-block align-middle border-2 border-gray-400`}
			style={{ backgroundColor: cell.color }}
			onChange={handleValueChange}
			value={cell.val}
			disabled={!cell.isEditable}
		/>
	)
}

export default CellRenderer