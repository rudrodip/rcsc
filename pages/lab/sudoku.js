import { React, useEffect, useState } from 'react'
import Head from 'next/head'
import Cell from '../../components/sudoku/cell';
import CellRenderer from '../../components/sudoku/cellRenderer';
import { findNextEmptyCell, isValidMove, quickSolve, reset, generateBoard, timeout } from '../../components/sudoku/algorithms';

const Sudoku = () => {
	const [sudoku, setSudoku] = useState(generateBoard());
	const [loading, setLoading] = useState(false)
	const [pause, setPause] = useState(false)
	const [samples, setSamples] = useState(17)

	const handleChange = (row, col, value, color = "rgb(3, 252, 169)") => {
		const newSudoku = [...sudoku];
		const cell = new Cell(row, col, value, true, color);
		newSudoku[row][col] = cell;
		setSudoku(newSudoku);
	}

	const handleInputs = (e) => {
		if (e.target.name == "givenValue") {
			setLoading(true)
			let val = e.target.value
			setSudoku(generateBoard(val))
			setSamples(e.target.value)
			setLoading(false)
		}
	}

	const resetBoard = () => {
		setLoading(true)
		setSudoku(reset())
		setLoading(false)
	}
	const generateRandomBoard = () => {
		setLoading(true)
		setSudoku(generateBoard())
		setLoading(false)
	}

	function solveBoard(){
		setLoading(true)
		const newSudoku = [...sudoku];
		quickSolve(newSudoku)
		setSudoku(newSudoku)
		setLoading(false)
	}

	async function solveSudoku(grid) {
		// Find the next empty cell
		const [row, col] = findNextEmptyCell(grid);

		// If there are no empty cells, the Sudoku is solved
		if (row === -1 && col === -1) {
			return true;
		} else {
			let cell = sudoku[row][col];
			handleChange(row, col, cell.val)
		}

		// Try each digit from 1 to 9
		for (let num = 1; num <= 9; num++) {

			if (isValidMove(grid, row, col, num)) {
				// Place the number in the current cell
				await timeout(0)
				handleChange(row, col, num, "rgb(0, 100, 210)");

				// Recursively solve the Sudoku
				if (await solveSudoku(grid)) {
					return true;
				}

				// If the recursive call didn't solve the Sudoku, backtrack
				await timeout(0)
				handleChange(row, col, 0, "rgb(255, 0, 0)");
			}
		}

		// If none of the digits worked, the Sudoku is unsolvable
		return false;
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
			<div id="controll" className='flex flex-col justify-center items-center'>
				<div className='flex justify-center items-center'>
					<button className='btn btn-info m-2' onClick={() => solveBoard()} disabled={loading}>Solve</button>
					<button className='btn btn-info m-2' onClick={async () => await solveSudoku(sudoku)} disabled={loading}>Animate</button>
					<button className='btn btn-info m-2' onClick={resetBoard} disabled={loading}>Reset</button>
					<button className='btn btn-info m-2' onClick={generateRandomBoard} disabled={loading}>Generate</button>
					<button className='btn btn-success m-2' onClick={() => setPause(!pause)} disabled={loading}>{pause ? "Continue" : "Pause"}</button>
				</div>
				<div className=''>
					<label>Given: {samples}</label>
					<input type="range" min="0" max="40" value={samples} name="givenValue" className="range range-info" onChange={handleInputs} />
				</div>
			</div>
		</div>
	)
}

export default Sudoku

function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}