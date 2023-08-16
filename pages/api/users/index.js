const Users = require("@/respositories/users");

export default async (req, res) => {
  const users = await Users.getAll();
  if (users) {
    res.status(200).json(users);
    return;
  }
  res.status(401).send("");
};