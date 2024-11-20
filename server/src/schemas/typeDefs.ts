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
  type Experience{
    company: String!
    description: String!
    startDate: String!
    endDate: String!
  }

  type Skills{
    skills:String!
  }
  input SkillsInput{
    skills:String!
  }

  type Resume {
    _id: ID!
    name: String!
    email: String!
    address:String!
    phone:String!
    education: [Education!]!
    experiences: [Experience!]!
    projects: [Project!]!
    skills: [Skills!]!
    contacts: [String]
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
    me:User!
  }
  input ExperienceInput{
    company: String!
    description: String!
    startDate: String!
    endDate: String!
  }


  input EducationInput {
    
    institution: String!
    degree: String!
    fieldOfStudy: String!
    startDate: String!
    endDate: String!
  }

  input ProjectInput {
    
    title: String!
    description: String!
    startDate: String!
    endDate: String!
  }

  input GenerateResumeInput {
    name: String!
    email: String!
    address:String!
    phone:String!
    education: [EducationInput!]!
    experiences: [ExperienceInput!]!
    projects: [ProjectInput!]!
    skills: [SkillsInput!]!
    contacts: [String]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth!
    
    addResume(
      name: String!, 
      email: String!, 
      address:String!,
      phone:String!,
      education: [EducationInput!]!, 
      experiences: [ExperienceInput!]!, 
      projects: [ProjectInput!]!, 
      skills: [SkillsInput!]!, 
      contacts: [String]
    ): Resume!

    updateUser(
      _id: ID!, 
      username: String, 
      email: String, 
      password: String
    ): User!
    
    deleteResume(_id: ID!): Resume!
    generateResume(input: GenerateResumeInput!):String
  }

`;

export default typeDefs;
