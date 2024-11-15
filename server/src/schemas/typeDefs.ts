const typeDefs = `

  type Auth {
    token: ID!
    profile: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    resume: [Resume!]!
  }

  type Resume {
    _id: ID!
    name: String!
    email: String!
    education: [Education!]!
    experiences: [String!]!
    projects: [Project!]!
    skills: [String!]!
    contacts: [String!]!
  }

  type Education {
    educationId: ID!
    institution: String!
    degree: String!
    fieldOfStudy: String!
    startDate: String!
    endDate: String!
  }

  type Project {
    projectsId: ID!
    title: String!
    description: String!
    startDate: String!
    endDate: String!
  }

  type Query {
    # 1. Get user by ID
    getUserById(_id: ID!): User
  }


  input EducationInput {
    educationId: ID!
    institution: String!
    degree: String!
    fieldOfStudy: String!
    startDate: String!
    endDate: String!
  }

  input ProjectInput {
    projectsId: ID!
    title: String!
    description: String!
    startDate: String!
    endDate: String!
  }

`;

export default typeDefs;
