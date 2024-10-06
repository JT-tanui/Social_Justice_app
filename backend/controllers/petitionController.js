exports.getPetitions = async (req, res) => {
  try {
    const db = req.app.locals.db;
    const [rows] = await db.execute('SELECT * FROM petitions');
    res.json(rows);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.createPetition = async (req, res) => {
  const { title, description, imageUrl } = req.body;
  try {
    const db = req.app.locals.db;
    await db.execute('INSERT INTO petitions (title, description, votes, comments, image_url) VALUES (?, ?, 0, ?, ?)', [title, description, '[]', imageUrl]);
    res.status(201).send('Petition created');
  } catch (err) {
    res.status(500).send('Server error');
  }
};