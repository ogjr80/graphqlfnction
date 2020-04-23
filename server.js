const { graphql, buildSchema } = require("graphql");

const db = {
  users: [
    {
      id: "1",
      email: "gideon@gmail.com",
      name: "Gideon",
      avatarUrl: "http://avatar.com/..."
    },
    {
      id: "2",
      email: "max@gmail.com",
      name: "Max",
      avatarUrl: "http://avatar.com/..."
    }
  ]
};

const schema = buildSchema(`
  type Query {
    users: [User!]!
  }
  type User {
  id: ID!
  email: String!
  name: String
  avatarUrl : String
}


  `);

const rootValue = {
  users: () => db.users
};

graphql(
  schema,
  `
      {
        users {
          email
          name
          avatarUrl
        }
      }
    `,
  rootValue
)
  .then(res => console.dir(res.data, { depth: null }))
  .catch(console.error);
