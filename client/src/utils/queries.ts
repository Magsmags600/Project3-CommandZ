import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
  me {
    _id
    username
    email
    resume {
      _id
      name
      email
      address
      phone
      education {
        educationId
        institution
        degree
        fieldOfStudy
        startDate
        endDate
      }
      experiences {
        company
        description
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
      skills {
        skills
      }
      contacts
    }
  }
  }
`;
