const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, password, county } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const db = req.app.locals.db;
    await db.execute('INSERT INTO users (username, password, county) VALUES (?, ?, ?)', [username, hashedPassword, county]);
    res.status(201).send('User registered');
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const db = req.app.locals.db;
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    const user = rows[0];
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');
      res.json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
};