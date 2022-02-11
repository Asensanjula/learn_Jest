const functions = require('./functions');

test("Add 2 + 2 = 4 ", () => {
    expect(functions.add(2,2)).toBe(4);
});

test("Add 2 + 2 != 5 ", () => {
   expect(functions.add(2,2)).not.toBe(5);
});

test("Should be Falsy ", () => {
    expect(functions.checkValue(null)).toBeFalsy(); // null, undefined, 0 gets passed
});

test("Should be Equal to User Object ", () => {
    expect(functions.createUser('Pappzi')).toEqual({firstName: 'Pappzi'});
});

