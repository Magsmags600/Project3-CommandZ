import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
  me {
    _id
    username
    email
    resume {
      name
      email
      address
      phone
      education {
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
