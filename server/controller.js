const register = async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;

    const existingUser = await db.checkForUser(username);

    if(existingUser[0]){
        res.status(409).json('Username already taken, please choose another');
    } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.registerUser(username, hash, isAdmin);

        req.session.user = {
            user_id: newUser[0].user_id,
            username: newUser[0].username,
        }
        res.status(200).json(req.session.user);
    }
}

module.exports = {
    register
}