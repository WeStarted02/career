import AddWork from "../../Components/AddWork/index.js";
import { Header, Filter, Footer, WorksList } from "../../Components";
import { Container, Row, Col } from "reactstrap";
import "./index.css"
function AddWorkPage() {
    return (
        <div>
            <Row>
                <Header />
                <Filter />
            </Row>

            <Row className="row">
                <Col className="col-left">
                    <AddWork />
                </Col>
                <Col className="col-right">
                    <WorksList />
                </Col>

            </Row>
            <Footer />
        </div>
    );
}
export default AddWorkPage;