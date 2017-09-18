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
        category: Category
	}
	type User {
		id: ID!
		name: String!
		email: String
    }
    type Category {
        id: ID!
        user: User!
        name: String!
        parent: Category
    }

	type Tag {
		id: ID!
		user: User!
		name: String!
		description: String
	}
	type Query {
        allEvents: [Event!]!
        allUsers: [User!]!
    }
    
	type Mutation {
        	createEvent(title: String!, start_timestamp: String!): Event 
		createCategory(name: String!): Category
		createTag(name: String!): Tag
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
