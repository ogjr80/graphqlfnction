const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    message: String
  }


  `);

const rootValue = {
  message: () => "graphql works"
};

graphql(
  schema,
  `
      {
        message
      }
    `,
  rootValue
)
  .then(res => console.log(res))
  .catch(console.error);
