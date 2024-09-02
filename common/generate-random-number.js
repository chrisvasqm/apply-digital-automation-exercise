const generateRandomNumber = (min = 1, max = 20) => {
  // Ensure min is not greater than max
  if (min > max)
    throw Error('Max must be greater than min');

  // Calculate the range 
  const range = max - min + 1;

  // Generate and return the random number
  return Math.floor(Math.random() * range) + min;
}

export default generateRandomNumber;