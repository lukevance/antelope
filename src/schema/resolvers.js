module.exports = {
    Query: {
        allEvents: async(root, data, { mongo: { Events } }) => {
            return await Events.find({}).toArray();
        },
    },

    Mutation: {
        createEvent: async(root, data, { mongo: { Events } }) => {
            const response = await Events.insert(data);
            return Object.assign({ id: response.insertedIds[0] }, data);
        },
        createUser: async(root, data, { mongo: { Users } }) => {
            const newUser = {
                name: data.name,
                email: data.authProvider.email.email,
                password: data.authProvider.email.password,
            };
            const response = await Users.insert(newUser);
            return Object.assign({ id: response.insertedIds[0] }, newUser);
        },
	signinUser: async (root, data, {mongo: {Users}}) => {
		const user = await Users.findOne({email: data.email.email});
		if (data.email.password === user.password) {
			return {token: `token-${user.email}`, user};
		}
	}
    },

    Event: {
        id: root => root._id || root.id
    },
	User: {
		id: root => root._id || root.id
	}
};
