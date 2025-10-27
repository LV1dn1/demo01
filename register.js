// register.js
exports.register = (req, res) => {
  const {username} = req.body;
  if (username === 'admin') {
    return res.status(409).json({msg: '用户名已存在'});
  }
  res.json({uid: 1, username});
};