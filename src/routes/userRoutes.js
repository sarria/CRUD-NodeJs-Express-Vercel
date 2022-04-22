import {
	getUsers,
	addUser,
	getUserById,
	updateUser,
	deleteUser
} from '../controllers/userController'

const routes = (app) => {

	app.route('/users')
		.get(getUsers);

	app.route('/user')
		.post(addUser);

	app.route('/user/:id')
		.get(getUserById)
		.put(updateUser)
		.delete(deleteUser);
}

export default routes;