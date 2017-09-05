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
        }
    },

    Event: {
        id: root => root._id || root.id
    }
};