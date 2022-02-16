const connectionMongo = require('./connectionMongo');

const getAllTasks = async () => {
  const connect = await connectionMongo();

  const tasks = await connect.collection('tasks').find().toArray();

  return tasks;
};

const addTask = async (taskName) => {
  const connect = await connectionMongo();

  const task = await connect.collection('tasks').insertOne({ taskName });

  return task.insertedId;
};

module.exports = {
  getAllTasks,
  addTask,
};
