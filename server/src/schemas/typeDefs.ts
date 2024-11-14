const typeDefs = `

  type Auth {
    token: ID!
    profile: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Resume {
    _id: ID!
    name: String!
    email: String!
    education: [String!]!
    experiences: [String!]!
    projects: [String!]!
    skills: [String!]!
    contacts: [String!]!
  }

  type Query {
    getAllUsers: [User!]!
    getAllResumes: [Resume!]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth!
    addResume(name: String!, email: String!, education: [String!]!, experiences: [String!]!, projects: [String!]!, skills: [String!]!, contacts: [String!]!): Resume!
    updateUser(_id: ID!, username: String, email: String, password: String): User!
    updateResume(_id: ID!, name: String, email: String, education: String, experiences: [String!], projects: [String!], skills: [String!], contacts: [String!]): Resume!
    deleteResume(_id: ID!): Resume!
  }

`;

export default typeDefs;
