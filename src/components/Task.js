import React from "react";
import { Row, Col } from "antd";
import { UpCircleFilled } from "@ant-design/icons";

const Task = (props) => {
  return (
    <div className="task">
      <Row className="main-row">{props.ticket.title}</Row>
      <Row className="secondary-row">
        <Col className="priority">
          <Col className="priority-icon">
            <UpCircleFilled />
          </Col>
          <Col>{props.ticket.priority}</Col>
        </Col>
        <Col className="ticket-number">3RIVE-000{props.ticket.task_id}</Col>
      </Row>
    </div>
  );
};

export default Task;
