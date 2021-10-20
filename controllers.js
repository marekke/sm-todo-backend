const {Todo} = require("./models");

const actionIndex = async (req, res) => {
  const todos = await Todo.findAll();
  res.json({todos});
};

const actionCreate = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({message: "Field 'name' is required"})
    return;
  }

  const todo = await Todo.create({name: req.body.name});
  res.json({todo});
};

const actionDelete = async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);

  if (todo === null) {
    res.status(400).json({message: `The given Todo with ID: ${req.params.id} doesn't exist.`})
    return;
  }

  await todo.destroy();
  res.json({message: `Successfull removed todo id: ${req.params.id}`});
};

module.exports = {
  actionIndex,
  actionCreate,
  actionDelete
};
