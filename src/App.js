import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CardComponent from ""
import CardComponent from "./component/CardComponent";
import CardDetailComponent from "./component/CardDetailComponent"
import DetailsFormComponent from "./component/DetailsFormComponent"
import DebitCreditForm from "./component/DeditCardForm";
import HomePageComponent from "./component/HomePageComponent";




function App() {
  return (
    <>
   
   
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<CardComponent/>} />
        <Route path='card-details/:id' element={<CardDetailComponent/>} />
        <Route path="card-form" element={<DetailsFormComponent/>}/>
        <Route path="card-debit" element={<DebitCreditForm/>}/>
        {/* <HomePageComponent/> */}
        

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
