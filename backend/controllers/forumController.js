exports.getComments = async (req, res) => {
  const { petitionId } = req.params;
  try {
    const db = req.app.locals.db;
    const [rows] = await db.execute('SELECT comments FROM forums WHERE petitionId = ?', [petitionId]);
    res.json(JSON.parse(rows[0].comments));
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.addComment = async (req, res) => {
  const { petitionId } = req.params;
  const { text } = req.body;
  try {
    const db = req.app.locals.db;
    const [rows] = await db.execute('SELECT comments FROM forums WHERE petitionId = ?', [petitionId]);
    const comments = JSON.parse(rows[0].comments);
    comments.push({ text, votes: 0 });
    await db.execute('UPDATE forums SET comments = ? WHERE petitionId = ?', [JSON.stringify(comments), petitionId]);
    res.status(201).send('Comment added');
  } catch (err) {
    res.status(500).send('Server error');
  }
};