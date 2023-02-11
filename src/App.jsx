import { useState } from "react";
import Companys from "./components/companys";
import generateUniqueId from "./helper/uniqeID";


const App = () => {


  const [company, setCompany] = useState([
    {
      companyID: "K8FJ7T6M",
      name: "Acme Inc.",
      adressInfo: "123 Main St.",
      industry: "Technology",
      contactPerson: "John Doe",
      phone: "555-555-5555",
      email: "john.doe@acmeinc.com",
      website: "www.acmeinc.com"
    },
    {
      companyID: "G9H1N2D3",
      name: "Bravo Corp.",
      adressInfo: "456 Market St.",
      industry: "Finance",
      contactPerson: "Jane Doe",
      phone: "555-555-5556",
      email: "jane.doe@bravocorp.com",
      website: "www.bravocorp.com"
    },
    {
      companyID: "Z5L4M6B8",
      name: "Charlie Co.",
      adressInfo: "789 Elm St.",
      industry: "Retail",
      contactPerson: "Jim Smith",
      phone: "555-555-5557",
      email: "jim.smith@charlieco.com",
      website: "www.charlieco.com"
    },
    {
      companyID: "E7T9R1A6",
      name: "Delta Ltd.",
      adressInfo: "101 Main St.",
      industry: "Manufacturing",
      contactPerson: "Sarah Johnson",
      phone: "555-555-5558",
      email: "sarah.johnson@deltaltd.com",
      website: "www.deltaltd.com"
    },
    {
      companyID: "J3D6F9H2",
      name: "Echo Enterprises",
      adressInfo: "202 Market St.",
      industry: "Services",
      contactPerson: "Mike Brown",
      phone: "555-555-5559",
      email: "mike.brown@echoenterprises.com",
      website: "www.echoenterprises.com"
    },
    {
      companyID: "H7G9N6T3",
      name: "Foxtrot Inc.",
      adressInfo: "303 Elm St.",
      industry: "Technology",
      contactPerson: "Emily Davis",
      phone: "555-555-5560",
      email: "emily.davis@foxtrotinc.com",
      website: "www.foxtrotinc.com"
    },
    {
      companyID: "P5L2J3D1",
      name: "Golf Corp.",
      adressInfo: "404 Main St.",
      industry: "Finance",
      contactPerson: "William Thompson",
      phone: "555-555-5561",
      email: "william.thompson@golfcorp.com",
      website: "www.golfcorp.com"
    },
    {
      companyID: "R6T7M8K9",
      name: "Hotel Ltd.",
      adressInfo: "505 Market St.",
      industry: "Retail",
      contactPerson: "Ashley Johnson",
      phone: "555-555-5562",
      email: "ashley.johnson@hotelltd.com",
      website: "www.hotelltd.com"
    },
    {
      companyID: "C9H2E3N1",
      name: "India Inc.",
      adressInfo: "606 Elm St.",
      industry: "Manufacturing",
      contactPerson: "Michael Martinez",
      phone: "555-555-5563",
      email: "michael.martinez@indiainc.com",
      website: "www.indiainc.com"
    },
    {
      companyID: "B8T1Z7L5",
      name: "Juliette Co.",
      adressInfo: "707 Main St.",
      industry: "Services",
      contactPerson: "Emily Wilson",
      phone: "555-555-5564",
      email: "emily.wilson@julietteco.com",
      website: "www.julietteco.com"
    }
  ]);

  // Handels
  const addCompany = () => { }
  const editCompany = () => { }
  const deleteCompany = (companyID) => { console.log("deleteCompany wurde aufgerufen",companyID);
  // Es werden alle daten zurück gegeben die Ungleich der gewählten company ID sind
  const filterdCompanys = company.filter(c=>c.companyID !== companyID);
  // Es wird der gefilterte Array als neuer State gesetzt
  setCompany(filterdCompanys);
}

  return (
    <div>
      <h1>Task Tiger</h1>
      <Companys companyList={company} deleteCompany={deleteCompany} />

    </div>
  );
};

export default App;
