const Users = require("@/respositories/users");

export default async (req, res) => {
  const { page, pageSize } = req.query;
  const users = await Users.getPage(page||1, pageSize||10);
  if (users) {
    res.status(200).json(users);
    return;
  }
  res.status(401).send("");
};