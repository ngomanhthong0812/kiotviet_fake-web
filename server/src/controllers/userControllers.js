const { getAllUsers } = require("../services/CRUDService");
const selectUsers = async (req, res) => {
  let users = await getAllUsers();
  res.json(users);
};
module.exports = { selectUsers };
