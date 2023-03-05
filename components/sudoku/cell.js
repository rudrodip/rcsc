class Cell {
	constructor(y, x, value, isEditable, color = "white", textColor = "rgb(0, 0, 0)") {
		this.row = y
		this.col = x
		this.val = value
		this.isEditable = isEditable
		this.color = color
		this.textColor = textColor
	}
}

export default Cell