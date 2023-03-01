import { React, useEffect, useState } from 'react'
import Head from 'next/head'

const Sudoku = () => {
	let grid = []
	for (let i = 0; i < 9; i++) {
		const row = []
		for (let j = 0; j < 9; j++) {
			let cell = new Cell(i, j, 0, true)
			row.push(cell)
		}
		grid.push(row)
	}

	const [sudoku, setSudoku] = useState(grid);

	const handleChange = (row, col, value, color="white") => {
		const newSudoku = [...sudoku];
		const cell = new Cell(row, col, value, true, color);
		newSudoku[row][col] = cell;
		setSudoku(newSudoku);
	}

	function solveSudoku(grid) {
		// Find the next empty cell
		const [row, col] = findNextEmptyCell(grid);

		// If there are no empty cells, the Sudoku is solved
		if (row === -1 && col === -1) {
			return true;
		} else {
			let cell = sudoku[row][col];
			wait(400)
			handleChange(row, col, cell.val, "rgb(0, 0, 255)")
		}

		// Try each digit from 1 to 9
		for (let num = 1; num <= 9; num++) {
			if (isValidMove(grid, row, col, num)) {
				// Place the number in the current cell
				wait(400)
				handleChange(row, col, num, "rgb(0, 155, 155)");

				// Recursively solve the Sudoku
				if (solveSudoku(grid)) {
					return true;
				}

				// If the recursive call didn't solve the Sudoku, backtrack
				wait(400)
				handleChange(row, col, 0);
			}
		}

		// If none of the digits worked, the Sudoku is unsolvable
		return false;
	}

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


	return (
		<div>
			<Head>
				<title>RCSC - Lab - Sudoku</title>
				<link rel="icon" type="image/x-icon" href="/logo/rcsc-logo.png"></link>
			</Head>

			<h1 className="p-4 text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-400 to-cyan-500 tracking-widest">
				Sudoku Solver
			</h1>

			<div className='flex justify-center align-middle items-center m-5'>
				<div className='flex flex-col'>
					{
						sudoku.map(row => {
							return <div key={sudoku.indexOf(row)} className='flex flex-row'>
								{
									row.map(val => {
										return (
											<CellRenderer cell={val} key={Math.random()} handleChange={handleChange} />
										)
									})
								}
							</div>
						})
					}
				</div>
			</div>
			<button className='btn btn-info' onClick={() => solveSudoku(sudoku)}>Solve</button>

		</div>
	)
}

export default Sudoku

const CellRenderer = ({ cell, handleChange }) => {
	function handleValueChange(e) {
		const value = parseInt(e.target.value);
		handleChange(cell.row, cell.col, value);
	}

	return (
		<input
			name="cell"
			className={`h-16 w-16 text-black text-center inline-block align-middle border-2 border-gray-400`}
			style={{backgroundColor: cell.color}}
			onChange={handleValueChange}
			value={cell.val}
			disabled={!cell.isEditable}
		/>
	)
}

class Cell {
	constructor(y, x, value, isEditable, color="white") {
		this.row = y
		this.col = x
		this.val = value
		this.isEditable = isEditable
		this.color = color
	}
}

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done waiting");
      resolve(ms)
    }, ms )
  })
}