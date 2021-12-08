/**
 * Schema Definition
 * 
 */

import { gql } from "apollo-server";

export default gql`
  type EachAddress {
    street: String
    city: String
    zipcode: String
  }

  type EachPeople {
    name: String
    email: String
    username: String
    address: EachAddress
  }

  type Query {
    People: [EachPeople]
  }
`;

