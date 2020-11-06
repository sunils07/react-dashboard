import React, { useEffect } from "react";
import { array, bool, func } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    Container,
    Row,
    Col,
    CardHeader,
    CardBody,
    UncontrolledCollapse,
    Input
} from 'reactstrap';

import Avtar from '../../images/avtar.png';

import SideMenu from "../../components/sidemenu/sidemenu";
import Header from "../../components/header/header";

import StudentStatCard from "../../components/student-stat-card/student-stat-card";

import AppCollapsible from "../../components/app-collapsible/app-collapsible";
import StudentList from "../../components/student-list/student-list";

import "./dashboard.page.scss";

import { getStudentStat } from "../../lib/redux/modules/student-stats/student-stat.api";
import { getStudents } from "../../lib/redux/modules/students/students.api";

function DashboardPage(props) {

    useEffect(() => {
        props.getStudentStat();
        props.getStudents();
    }, []);

    return (
        <Container fluid>
            <Row>
                <SideMenu />
                <Col className="offset-md-1 gutter-2x">
                    <div className="dashboard-page">
                        <Header
                            userName="Sunil Dandwate"
                            userRole="Soft. Dev."
                            avtarUrl={Avtar}
                        />
                        <div className="page-header">
                            <h2 className="page-title">Dashboard</h2>
                            <div className="page-subtitle">Mobile ux/ui design</div>
                        </div>
                        <div className="page-body">
                            <Row className="stat-cards">
                                <StudentStatCard items={props.studentStatList} />
                            </Row>
                            <Row className="spacer-3">
                                <Col md="4">
                                    <AppCollapsible>
                                        <CardHeader className="collapsible-header">
                                            <div id="toggler" className="collapsible-toggler">Students by average marks</div>
                                            <Input type="select" name="select" className="plain-toggler">
                                                <option>Assending</option>
                                                <option>Deseding</option>
                                            </Input>
                                        </CardHeader>
                                        <UncontrolledCollapse toggler="#toggler" defaultOpen={true}>
                                            <CardBody className="gutter-0 scrollable">
                                                <StudentList items={props.studentsList} />
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </AppCollapsible>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

DashboardPage.propTypes = {
    studentStatList: array.isRequired,
    loading: bool.isRequired,
    getStudentStat: func.isRequired
};

const mapStateToProps = (state) => {
    return {
        studentStatList: state.StudentStat.list,
        studentsList: state.Students.list,
        loading: state.StudentStat.requesting || state.Students.requesting,
    }
}

const mapDispatchToProps = (props) => {
    return bindActionCreators({
        getStudentStat,
        getStudents
    }, props);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);