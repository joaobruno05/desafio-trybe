const connectionMongo = require('./connectionMongo');

const addTask = async (taskName) => {
  const connect = await connectionMongo();

  const task = await connect.collection('tasks').insertOne({ taskName });

  return task.insertedId;
};

module.exports = {
  addTask,
};
