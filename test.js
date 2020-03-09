const assert = require("assert");
const { findData, findPrime, findRange, validateData, validatePrime, validateRange } = require("./operations");

// 182
it('should return { summ: 40, quantity: 3 }', () => {
  assert.equal(findData([5, 10, 7, 14, 25]).toString(), { summ: 40, quantity: 3 }.toString())
})
it('must return true', () => {
  assert.equal(validateData([1, 3, 4, 7, 44, 21]), true)
})
it('must return false', () => {
  assert.equal(validateData([1, 'str', 4, 7, 44, 21]), false)
})
// 323
it("10 must return [2,3,5,7]", () => {
  assert.equal(findPrime(10).toString(), [2, 3, 5, 7]);
});

it("20 must return [2,3,5,7,11,13,17,19]", () => {
  assert.equal(findPrime(20).toString(), [2, 3, 5, 7, 11, 13, 17, 19]);
});
it("indicates false  argument is a string", () => {
  assert.equal(validatePrime('sammy'), false)
})

it("indicates false if argument is empty string", () => {
  assert.equal(validatePrime(''), false)
})

it("indicates true if argument is a  number", () => {
  assert.equal(validatePrime(5), true)
})
// 560
it('must return {220:\'284\',284:\'220\'}', () => {
  assert.equal(findRange(200, 300).toString(), { 220: '284', 284: '220' })
})
it('must return {220:\'284\',284:\'220\'}', () => {
  assert.equal(findRange(150, 250).toString(), { 220: '284', 284: '220' })
})
it("return falas if x is not a number & y is not a number", () => {
  assert.equal(validateRange(110, 300), true)
})
it("return falas if x is not a number & y is not a number", () => {
  assert.equal(validateRange(110, ''), false)
})
it("return falas if x is not a number & y is not a number", () => {
  assert.equal(validateRange('', ''), false)
})
it("return falas if x is not a number & y is not a number", () => {
  assert.equal(validateRange('cat', 'sam'), false)
});
