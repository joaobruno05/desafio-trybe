const axios = require('axios').default;

const BASE_URL = 'http://localhost:3001';

const getAllTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response;
  } catch (error) {
    console.log(`Error getAllTasks: ${error.message}`);
    return error;
  }
};

module.exports = {
  getAllTasks,
};
