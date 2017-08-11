const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

// Define types
const typeDefs = `
	type Event {
		id: ID!
		title: String!
		start_timestamp: String!
		end_timestamp: String!
	}

	type Query {
		allEvents: [Event!]!
    }
    
    type Mutation {
        createEvent(title: String!, start_timestamp: String!): Event
    }
`;

// Generate the schema object from types
module.exports = makeExecutableSchema({ typeDefs, resolvers });
