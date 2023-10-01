const userService = require('../services/user.service');

const getUsers = async (req, res) => {
  try {
    const result = await userService.getUsers();

    res.status(200).send({
      status: 200,
      message: 'Get Users Success',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: 500,
      message: 'Get Users Error',
      data: null,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const result = await userService.getUser(req.params.userId);

    res.status(200).send({
      status: 200,
      message: 'Get User Success',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: 500,
      message: 'Get User Error',
      data: null,
    });
  }
};

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const result = await userService.createUser(req.body);

    res.status(200).send({
      status: 200,
      message: 'Create User Success',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: 500,
      message: 'Create User Error',
      data: null,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await userService.updateUser(req.body, req.params.userId);

    res.status(200).send({
      status: 200,
      message: 'Update User Success',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: 500,
      message: 'Update User Error',
      data: null,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await userService.deleteUser(req.params.userId);

    res.status(200).send({
      status: 200,
      message: 'Delete User Success',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: 500,
      message: 'Delete User Error',
      data: null,
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
