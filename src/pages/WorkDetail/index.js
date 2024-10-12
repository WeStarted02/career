import WorkDeatil from "../../Components/WorkDetail/index.js";
import { Header, Filter, Footer, WorksList } from "../../Components";
import { Container, Row, Col } from "reactstrap";
import "./index.css"
function WorkDetailPage() {
    return (
        <div>
            <Row>
                <Header />
                <Filter />
            </Row>
            <Row className="row-2">
                <Col className="col1">
                    <WorksList />
                </Col>
                <Col className="col_2">
                    <WorkDeatil />
                </Col>
            </Row>
            <Footer />
        </div>
    );
}
export default WorkDetailPage;