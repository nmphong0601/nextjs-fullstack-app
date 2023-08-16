const Users = require("@/respositories/users");

export default async (req, res) => {
  const { userId } = req.query;
  const user = await Users.getById(userId);
  if (user) {
    res.status(200).json(user);
    return;
  }
  res.status(401).send("");
}
