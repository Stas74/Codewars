// Regexp Basics - is it a digit?

/*
Implement String#digit? (in Java StringUtils.isDigit(String)), 
which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function() {
  return /^\d$/.test(this)
};


describe('hex number', () => {
  it('Basic tests', () => {
    Test.assertEquals(''.digit(), false);
    Test.assertEquals('7'.digit(), true);
    Test.assertEquals(' '.digit(), false);
    Test.assertEquals('a'.digit(), false);
    Test.assertEquals('a5'.digit(), false);
    Test.assertEquals('14'.digit(), false);
  });
});
