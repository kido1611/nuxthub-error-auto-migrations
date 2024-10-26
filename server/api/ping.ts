export default eventHandler(() => {
  const db = hubDatabase()
  const usersStmt = db.prepare('SELECT * FROM users')
  usersStmt.all()

  return 'pong'
})

