const errorMiddleware = (err, _req, res, next) => {
  const { status, error } = err;

  if (status) return res.status(status).json({ error });

  return res.status(500).json({ message: 'Internal Error' });
};

module.exports = errorMiddleware;
