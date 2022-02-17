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

const updateTask = async (id, taskName) => {
  const connect = await connectionMongo();

  const task = await connect.collection('tasks').findOneAndUpdate(
    { _id: id },
    { $set: { taskName } },
  );

  return task.value;
};

const deleteTask = async (id) => {
  const connect = await connectionMongo();

  const task = await connect.collection('tasks').findOneAndDelete({ _id: id });

  return task.value;
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
};
