class UserService {

    getUsers() {
        let users = {
            'id': 1,
            'firstName': 'samuel',
            'lastName': 'Rodrigue'
        };
        return users;
    }

}
module.exports = new UserService();