import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavigationHome from "../navigation/Home";
import NavigationCompany from "../navigation/Company";


const Companys = (props) => {

  const [query, setQuery] = useState("");
  const { companyList, deleteCompany } = props;
  const companyTags = attribute => [...new Set(companyList.map(c => c[attribute].toLowerCase()))];
  const filterdData = companyList.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  // Handlers
  const handleSearch = event => {
    setQuery(event.target.value);
  };

  // FE Rendering 
  const _SearchBar = <CompanySearchBar val={query} onChange={handleSearch} />
  const _CompanyList = <CompanyList companyData={filterdData} deleteCompany={deleteCompany} />
  const _CompanyTasks = <CompanyTags companyData={filterdData} tags={companyTags("industry")} />


  const HomePage = (<><NavigationHome /></>)

  const CompanyPage = (<>
    <NavigationCompany />
    <CompanySearchBar val={query} onChange={handleSearch} />
    <CompanyTags companyData={filterdData} tags={companyTags("industry")} />
    <CompanyList companyData={filterdData} deleteCompany={deleteCompany} />
  </>)

  const CompanyAdd = (<>
    <NavigationCompany />
    <h1>Fügen Sie ein Untenehmen hinzu</h1>
  </>)

  const NotFound = (<>
    <NavigationHome />
    <main>
      Nichts gefunden
    </main>
  </>);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={HomePage} />
        <Route exact path="/companys" element={CompanyPage} />
        <Route exact path="/company/add" element={CompanyAdd} />
        <Route path='*' element={NotFound} />
      </Routes>
    </Router>
  )

};



// Components 
const CompanySearchBar = ({ val, onChange }) => {

  return (
    <div className="container-main">
      <form className="company-search--form">
        <label htmlFor="companySearch">Suche:</label>
        <input id="companySearch" type="search" value={val} onChange={onChange} />
      </form>
    </div>
  )
}

const CompanyList = ({ companyData, deleteCompany }) => {

  const hasResults = companyData.length > 0;
  if (hasResults) {
    return (
      <ul className="company-list--ul">
        {companyData.map((company) => (
          <CompanyEntry key={company.companyID} company={company} deleteBTN={deleteCompany} />
        ))}
      </ul>
    )
  }

  return (
    <div>Kein Eintrag gefunden</div>
  )
}

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

const CompanyTags = ({ tags, companyData }) => {
  return (
    <div className="container-main">
      <div className="company-tag">{tags.map(tag => {
        const quanty = companyData.reduce((count, company) => count + (company['industry'].toLowerCase() === tag.toLowerCase()), 0);
        return quanty > 0 && <CompanyTag tag={tag} quanty={quanty} />
      })}</div>
    </div>
  )
}

const CompanyTag = ({ tag, quanty }) => {
  return (
    <span className="company-tag--item">{tag} {quanty}</span>
  )

}

export default Companys;