import { gql } from '@apollo/client';
// !NEEDS TO BE ADJ. TO THE SERVER SIDE TYPEDEFS.

export const QUERY_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      _id
      username
      email
    }
  }
`;
export const QUERY_USER = gql`
  query getUser {
    getUser {
      _id
      username
      email
    }
  }
`;
export const QUERY_ALL_RESUMES = gql`
  query getAllResumes {
    getAllResumes {
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
