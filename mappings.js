// mappings.js — hosted on GitHub
// This file ONLY contains form field selectors.
// It is completely useless without the API key stored locally in the extension.
// Safe to share publicly — contains no credentials, no client data.

var MAPPINGS = {
  monterey: {
    name: "Monterey Financial",
    hostMatch: "montereyfinancial.com",
    fields: [
      { from: "FirstName", to: "[name='applicant_firstname']" },
      { from: "LastName",  to: "[name='applicant_lastname']" },
      { from: "CellPhone", to: "[name='applicant_cellphone']" },
      { from: "HomePhone", to: "[name='applicant_msgphone']" },
      { from: "Email",     to: "[name='applicant_email']" },
      { from: "Address",   to: "[name='applicant_streetaddress']" },
      { from: "City",      to: "[name='applicant_city']" },
      { from: "State",     to: "[name='applicant_state']" },
      { from: "Zip",       to: "[name='applicant_zip']" },
      { from: "SSN",       to: "[name='applicant_socialsecurity']" },
      { from: "DOB",       to: "[name='applicant_dob']", type: "date" }
    ]
  },
  ucfs: {
    name: "UCFS",
    hostMatch: "ucfs.net",
    fields: [
      { from: "FirstName", to: "[name='CustomerInformation.FirstName']" },
      { from: "LastName",  to: "[name='CustomerInformation.LastName']" },
      { from: "CellPhone", to: "#CustomerInformation_MobilePhoneNumber" },
      { from: "HomePhone", to: "#CustomerInformation_HomePhoneNumber" },
      { from: "Email",     to: "[name='CustomerInformation.EmailAddress']" },
      { from: "Email",     to: "[name='CustomerInformation.ConfirmEmailAddress']" },
      { from: "Address",   to: "[name='CustomerInformation.Address.Address1']" },
      { from: "City",      to: "[name='CustomerInformation.Address.City']" },
      { from: "State",     to: "[name='CustomerInformation.Address.StateOrProvince']" },
      { from: "Zip",       to: "[name='CustomerInformation.Address.ZipCode']" },
      { from: "SSN",       to: "[name='CustomerInformation.SocialSecurityNumber']" },
      { from: "SSN",       to: "[name='CustomerInformation.ConfirmSocialSecurityNumber']" },
      { from: "DOB",       to: "[name='CustomerInformation.BirthDate']", type: "date" }
    ]
  }
};
