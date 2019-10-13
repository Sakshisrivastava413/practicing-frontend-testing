// normal addition function 
const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid Argument');
  }
  return a + b;
}

// addition function returning a promise
const addPromise = (a, b) => Promise.resolve(a + b);

module.exports ={
  add,
  addPromise
};