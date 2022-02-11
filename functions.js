const functions = {
    add : (num1,num2) => num1 + num2,
    checkValue: x => x,
    createUser: (name) => {
        return {firstName: name};
    }
}

module.exports = functions;