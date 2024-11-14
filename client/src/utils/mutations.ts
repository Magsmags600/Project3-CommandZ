import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
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
    $education: String!
    $experiences: [String!]!
    $projects: [String!]!
    $skills: [String!]!
    $contacts: [String!]!
  ) {
    addResume(
      name: $name
      email: $email
      education: $education
      experiences: $experiences
      projects: $projects
      skills: $skills
      contacts: $contacts
    ) {
      _id
      name
      email
      education
      experiences
      projects
      skills
      contacts
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

export const UPDATE_RESUME = gql`
  mutation updateResume(
    $id: ID!
    $name: String
    $email: String
    $education: String
    $experiences: [String!]
    $projects: [String!]
    $skills: [String!]
    $contacts: [String!]
  ) {
    updateResume(
      _id: $id
      name: $name
      email: $email
      education: $education
      experiences: $experiences
      projects: $projects
      skills: $skills
      contacts: $contacts
    ) {
      _id
      name
      email
      education
      experiences
      projects
      skills
      contacts
    }
  }
`;

export const DELETE_RESUME = gql`
  mutation deleteResume($id: ID!) {
    deleteResume(_id: $id) {
      _id
      name
    }
  }
`;
