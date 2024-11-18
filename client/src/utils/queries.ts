import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query getUserById($id: ID!) {
    getUserById(_id: $id) {
      _id
      username
      email
      resume {
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
        experiences
        projects {
          projectsId
          title
          description
          startDate
          endDate
        }
        skills
        contacts
      }
    }
  }
`;
