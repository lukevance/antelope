const app = require('express')();
const expressGraphql = require('express-graphql');
const schema = require('./schema');

app.use('/graphql', expressGraphql({
	schema: schema,
	graphiql: true
})
);

app.listen(3000, () => {
	console.log('App listing on port 3000!');
});
