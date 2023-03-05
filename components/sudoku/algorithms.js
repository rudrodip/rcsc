import Cell from "./cell";

function findNextEmptyCell(grid) {
	// Loop through each cell in the grid
	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			// If the cell is empty, return its coordinates
			if (grid[row][col].val === 0) {
				return [row, col];
			}
		}
	}

	// If there are no empty cells, return -1,-1 to indicate this
	return [-1, -1];
}

function isValidMove(grid, row, col, num) {
	// Check row
	for (let i = 0; i < 9; i++) {
		if (grid[row][i].val === num) {
			return false;
		}
	}

	// Check column
	for (let i = 0; i < 9; i++) {
		if (grid[i][col].val === num) {
			return false;
		}
	}

	// Check box
	const boxRow = Math.floor(row / 3) * 3;
	const boxCol = Math.floor(col / 3) * 3;

	for (let i = boxRow; i < boxRow + 3; i++) {
		for (let j = boxCol; j < boxCol + 3; j++) {
			if (grid[i][j].val === num) {
				return false;
			}
		}
	}

	// If the number is not in the same row, column or box, it's a valid move
	return true;
}

function quickSolve(grid, color="rgb(0, 100, 210)"){
	const [row, col] = findNextEmptyCell(grid);
	if (row === -1 && col === -1) {
		return true;
	}

	for (let num = 1; num <= 9; num++) {
		if (isValidMove(grid, row, col, num)) {

			grid[row][col].val = num
			grid[row][col].color = color

			if (quickSolve(grid, color)) {
				return true;
			}

			grid[row][col].val = 0
		}
	}
	return false;
}

const generateRandom = () => {
	let y = Math.floor(Math.random() * (9 - 0))
	let x = Math.floor(Math.random() * (9 - 0))
	let n = Math.floor(Math.random() * (10 - 1)) + 1
	return { y, x, n }
}

const reset = (editable = true) => {
	let grid = []
	for (let i = 0; i < 9; i++) {
		const row = []
		for (let j = 0; j < 9; j++) {
			let cell = new Cell(i, j, 0, editable)
			row.push(cell)
		}
		grid.push(row)
	}
	return grid
}

const generateBoard = (samples = 17) => {
	let grid = reset(false)

	let given = 0
	while (given <= samples) {
		let { y, x, n } = generateRandom()
		if (grid[y][x].val == 0){
			if (isValidMove(grid, y, x, n)){
				grid[y][x].val = n
				grid[y][x].color = "rgb(0, 220, 90)"
				given++
			}
		}
	}
	return grid
}
  

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
  

export {findNextEmptyCell, isValidMove, quickSolve, reset, generateBoard, timeout}