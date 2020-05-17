const frogJump = require('./app.js');

test('Get expected out', () => {
    expect(frogJump(20,100,20)).toBe(4)
})

test('Check for invalid input', () => {
    expect(frogJump(20,'string',20)).toBe(null)
})

test('If starting point is ahead of finish point', () => {
    expect(frogJump(20,10,10)).toBe(0)
})