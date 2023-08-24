export const generateRandomUniqueUri = (): number => {
  const timestamp = Date.now(); // Get the current timestamp in milliseconds
  const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
  const id = `${timestamp}${randomNum}`; // Concatenate the timestamp and random number
  return Number(id);
};
