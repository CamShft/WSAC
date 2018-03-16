

const { getUsers } = require('./../services/userService');
const {notFound} = require('./../utils/errorHandling');
class UserController {

    getUsers(req, res, next) {
        let users = getUsers();
        res.status(200).send(users);
    }

    getUser(req, res, next) {
        throw new notFound('Not found.', 404);

        res.status(200).send(user);
    }

    addUser(req, res, next) {
        let user = null;
        res.status(200).send(user);
    }

}

module.exports = new UserController();