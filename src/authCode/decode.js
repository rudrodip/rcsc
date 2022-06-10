const decode = (grade, section, roll) => {
    grade = parseInt(grade)
    roll = parseInt(roll)
    
    function num(x, y){
        if (y < 100){
            y = y + x + 100
        }
        let output = x**3 + y**2 + 4*x*y
        output = parseInt(output)
        return output
    }

    let number = num(grade, roll)
    let keyCode = {
        "p" : "jamuna",
        "j" : "meghna",
        "m" : "padma"
    }

    section = section.toLowerCase()
    let sec = keyCode[section[0]][keyCode[section[0]].length - 3] + keyCode[section[0]][keyCode[section[0]].length - 2]
    let code = number + sec

    return code

}

export default decode