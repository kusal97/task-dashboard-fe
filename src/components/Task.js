import React, { useState } from "react";
import { Row, Col, Modal } from "antd";
import {
  UpCircleFilled,
  DownCircleFilled,
  MinusCircleFilled,
} from "@ant-design/icons";
import EditModal from "./EditModal";

const Task = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log({ isModalOpen });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="task" onClick={showModal}>
        <Row className="main-row">{props.ticket.summary}</Row>
        <Row className="secondary-row">
          <Col className="priority">
            <Col className="priority-icon">
              <div>
                {props.ticket.priority === "High" && <UpCircleFilled />}
                {props.ticket.priority === "Medium" && <MinusCircleFilled />}
                {props.ticket.priority === "Low" && <DownCircleFilled />}
              </div>
            </Col>
            <Col>{props.ticket.priority}</Col>
          </Col>
          <Col className="ticket-number">3RIVE-000{props.ticket.id}</Col>
        </Row>
      </div>
      <div>
        <Modal
          className="edit-modal"
          width={700}
          title="Edit Task"
          open={isModalOpen}
          onOk={handleOk}
          okText="Save"
          onCancel={handleCancel}
        >
          <EditModal ticketData={props.ticket} />
        </Modal>
      </div>
    </div>
  );
};

export default Task;
