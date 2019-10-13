const { add, addPromise } = require('./add');

describe('Testing Add Function', () => {
  // testing normal add function
  describe('Normal Add', () => {

    it('should return 5 for 2 & 3', () => {
      // asserting the return value of add function
      expect(add(2, 3)).toBe(5);
    });

    it(`should return 5 for '2' & 3`, () => {
      // sending string as a argument
      // expect(add('2', 3)).toBe(5);
    });

    it('should throw error for invalid arguements', () => {
      // testing exceptions: pass a callback function
      expect(() => {
        add(5, 'b').tothrow('Invalid Agruments Passed');
      });
    });

  });
});

describe('Testing Promisified Addition Function', () => {
  // testing normal add function
  describe('Promisified Add', () => {

    it('Should return 5 for 2 & 3', (done) => {
      // asserting the return value of add function
      addPromise(2, 3).then(sum => {
        expect(sum).toBe(5);
        done();
      })
    });
  });
});