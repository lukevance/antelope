module.exports = {
	Query: {
        	allEvents:  async (root, data, {mongo: { Events }}) => {
			return await Events.find({}).toArray();
		},
	},

	Mutation: {
		createEvent: async (root, data, {mongo: { Events }}) => {
			const response = await Events.insert(data);
			return Object.assign({ id: response.insertedIds[0]}, data);
		}
	},

	Event: {
		id: root => root._id || root.id
	}
};
