const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const rootGraphQlObjectType = new GraphQLObjectType({
	name: 'root',
	fields: {
		message: {
			type: GraphQLString,
			resolve: () => 'Hello World'
		}
	}
});

const schema = new GraphQLSchema({
	query: rootGraphQlObjectType
});
