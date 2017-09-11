module.exports = {
    Query: {
        allEvents: async(root, data, { mongo: { Events } }) => {
            return await Events.find({}).toArray();
        },
        allUsers: async(root, data, { mongo: { Users } }) => {
            return await Users.find({}).toArray();
        }
    },

    Mutation: {
        createEvent: async(root, data, { mongo: { Events }, user }) => {
            const newEvent = Object.assign({ eventOwnerId: user && user._id }, data);
            const response = await Events.insert(newEvent);
            return Object.assign({ id: response.insertedIds[0] }, newEvent);
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
        signinUser: async(root, data, { mongo: { Users } }) => {
            const user = await Users.findOne({ email: data.email.email });
            if (data.email.password === user.password) {
                return { token: `token-${user.email}`, user };
            }
        },
    },

    Event: {
        id: root => root._id || root.id,
        eventOwner: async({ eventOwnerId }, data, { mongo: { Users } }) => {
            return await Users.findOne({ _id: eventOwnerId })
        }
    },
    User: {
        id: root => root._id || root.id
    }
};