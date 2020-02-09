const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;

    const existingUser = await db.checkForUser(username);

    if(existingUser[0]){
        res.status(409).json('Username already taken, please choose another');
    } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.create_user(username, hash, `https://robohash.org/${username}?set=set4`);

        req.session.user = {
            user_id: newUser[0].user_id,
            username: newUser[0].username,
            profile_img: newUser[0].profile_pic
        }
        res.status(200).json(req.session.user);
    }
}

const login = async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;

    const existingUser = await db.checkForUser(username);

    if(!existingUser[0]){
        res.status(403).json('Please create an account')
    } else {
        const authUser = bcrypt.compareSync(password, existingUser[0].password);

        if(!authUser){
            res.status(403).json('Username or password incorrect, please try again')
        } else {
            req.session.user = {
                user_id: existingUser[0].user_id,
                username: existingUser[0].username,
                profile_img: existingUser[0].profile_pic
            }
            res.status(200).json(req.session.user)
        }
    }
}

module.exports = {
    register,
    login
}