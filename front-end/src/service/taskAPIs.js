const axios = require('axios').default;

const BASE_URL = 'http://localhost:3001';

const getAllTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.log(`Error getAllTasks: ${error.message}`);
    return error;
  }
};

const addTask = async (taskName) => {
  try {
    const response = await axios.post(`${BASE_URL}/task`, {
      taskName,
    });
    return response;
  } catch (error) {
    console.log(`Error addTask: ${error.message}`);
    return error;
  }
};

module.exports = {
  getAllTasks,
  addTask,
};
