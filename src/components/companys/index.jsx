import { useState } from "react";

const Companys = (props) => {

  const [query, setQuery] = useState("");
  const { companyList, deleteCompany } = props;
  const filterdData = companyList.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  const handleSearch = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Unternehmen</h1>

      <div className="container-main">
        <form className="company-search--form">
          <label htmlFor="companySearch">Suche:</label>
          <input id="companySearch" type="search" value={query} onChange={handleSearch} />
        </form>
      </div>




      <ul className="company-list--ul">
        {filterdData.map((company, index) => (
          <CompanyEntry key={company.companyID} company={company} deleteBTN={deleteCompany} />
        ))}

      </ul>
    </div>
  );
};



const CompanyEntry = ({ company, deleteBTN }) => {

  const { companyID, name, adressInfo, industry, contactPerson, phone, email, website } = company;

  return (
    <li className="company-list--li">
      <h3>{name}</h3>
      <p>ID: {companyID}</p>
      <p>Industry: {industry}</p>
      <address>Address: {adressInfo}</address>
      <p>Contact Person: {contactPerson}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Website: {website}</p>

      <button onClick={() => deleteBTN(companyID)}>LÖSCHEN</button>
    </li>
  );
};



export default Companys;