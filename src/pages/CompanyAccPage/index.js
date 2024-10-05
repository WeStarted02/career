import "./index.css";
import CompanyAccount from "../../Components/CompanyAccount";
import { Header, Filter, Footer, WorksList } from "../../Components";

function CompanyAccPage() {
    return (
        <div>
            <Header/>
            <CompanyAccount/>
            <Footer/>
        </div>
    );
}
export default CompanyAccPage;