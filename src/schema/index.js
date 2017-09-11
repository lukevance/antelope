const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

// Define types
const typeDefs = `
	type Event {
		id: ID!
		title: String!
		start_timestamp: String!
        end_timestamp: String!
        eventOwner: User
	}
	type User {
		id: ID!
		name: String!
		email: String
	}

	type Query {
        allEvents: [Event!]!
        allUsers: [User!]!
    }
    
	type Mutation {
        createEvent(title: String!, start_timestamp: String!): Event
		createUser(name: String!, authProvider: AuthProviderSignupData!): User	
		signinUser(email: AUTH_PROVIDER_EMAIL): SigninPayload!
	}
	type SigninPayload {
		token: String
		user: User
	}
	input AuthProviderSignupData {
		email: AUTH_PROVIDER_EMAIL
	}

	input AUTH_PROVIDER_EMAIL {
		email: String!
        password: String!
    }
`;

// Generate the schema object from types
module.exports = makeExecutableSchema({ typeDefs, resolvers });