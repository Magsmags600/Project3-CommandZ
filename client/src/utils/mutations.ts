import { gql } from '@apollo/client';

export const ADD_USER = gql`
 mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    email
    username
  }
}

`;

export const LOGIN_USER = gql`
 mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      username
      email
    }
  }
}
`;

export const ADD_RESUME = gql`
  mutation addResume(
    $name: String!
    $email: String!
    $phone:String!
    $address:String!
    $education: [EducationInput!]!
    $experiences: [ExperienceInput!]!
    $projects: [ProjectInput!]!
    $skills: [SkillsInput!]!
    $contacts: [String]
  ) {
    addResume(
      name: $name
      email: $email
      address:$address
      phone:$phone
      education: $education
      experiences: $experiences
      projects: $projects
      skills: $skills
      contacts: $contacts
    ) {
      _id
      name
      email
      education {
        educationId
        institution
        degree
        fieldOfStudy
        startDate
        endDate
      }
    
      projects {
        projectsId
        title
        description
        startDate
        endDate
      }
   
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $username: String, $email: String, $password: String) {
    updateUser(_id: $id, username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

export const DELETE_RESUME = gql`
  mutation deleteResume($id: ID!) {
    deleteResume(_id: $id) {
      _id
      name
      email
    }
  }
`;

export const GENERATE_RESUME = gql`
  mutation generateResume($input: GenerateResumeInput!) {
    generateResume(input: $input)
  }
`;
