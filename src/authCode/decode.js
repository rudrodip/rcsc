const decode = (grade, section, roll) => {
    grade = parseInt(grade)
    roll = parseInt(roll)
    
    function num(x, y){
        y = y + 100
        let output = (x**2 - 5*x + 3*y)**(1/3) + (3*y + 5*x**3 + 9*y**2)*(1/3)
        output = parseInt(output) % x*y
        output += y ** 2
        return output
    }

    let number = num(grade, roll)
    let keyCode = {
        "p" : "jamuna",
        "j" : "meghna",
        "m" : "padma"
    }

    section = section.toLowerCase()
    let sec = keyCode[section[0]][section.length - 4] + keyCode[section[0]][section.length - 3]
    let code = number + sec    

    if (code.length > 7){
        code = code.slice(0, 6)
    }

    return code

}

export default decode