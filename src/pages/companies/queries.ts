import gql from "graphql-tag";

export const COMPANY_CREATE_MUTATION = gql`
  mutation CompanyCreate($input: CreateOneCompanyInput!) {
    createOneCompany(input: $input) {
      id
      name
      location
      isActive
      industry {
        id
        name
      }
      web
      linkedin
      twitter
      instagram
      youtube
      github
    }
  }
`;

export const COMPANY_EDIT_MUTATION = gql`
  mutation CompanyEdit($input: UpdateOneCompanyInput!) {
    updateOneCompany(input: $input) {
      id
      name
      location
      isActive
      industry {
        id
        name
      }
      web
      linkedin
      twitter
      instagram
      youtube
      github
    }
  }
`;

export const COMPANIES_LIST_QUERY = gql`
  query CompaniesList(
    $paging: OffsetPaging!
    $filter: CompanyFilter
    $sorting: [CompanySort!]!
  ) {
    companies(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        id
        name
        location
        isActive
        industry {
          id
          name
        }
        web
        linkedin
        twitter
        instagram
        youtube
        github
        createdAt
      }
      totalCount
    }
  }
`;

export const COMPANY_SHOW_QUERY = gql`
  query CompanyShow($id: ID!) {
    company(id: $id) {
      id
      name
      location
      isActive
      industry {
        id
        name
      }
      web
      linkedin
      twitter
      instagram
      youtube
      github
      createdAt
    }
  }
`;

export const COMPANY_SELECT_QUERY = gql`
  query CompanySelect($filter: IndustryFilter!) {
    Company(filter: $filter) {
      nodes {
        id
        name
      }
    }
  }
`;