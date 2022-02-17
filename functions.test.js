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

// less than or greater than
test("Should be under 1600 ", () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test("There is no I in word ", () => {
    expect('team').not.toMatch(/I/);

});

//Arrays
test(" Admin should be in usernames ", () => {
    usernames = ['pappz', 'silva', 'lucifier']
    expect(usernames).toContain('pappzi');

});

