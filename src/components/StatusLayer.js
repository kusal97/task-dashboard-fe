import React from "react";
import { Row, Col } from "antd";
import { tickets } from "../constants/constants";
import Task from "./Task";

const StatusLayer = () => {
  return (
    <div className="status-layer">
      <Col span={8} className="captured">
        <Row className="captured-title">Captured</Row>
        <Row className="captured-tickets">
          {tickets.map((ticketData, indexed) => {
            return (
              <div>
                {ticketData.status === "captured" && (
                  <Task ticket={ticketData} />
                )}
              </div>
            );
          })}
        </Row>
      </Col>
      <Col span={8} className="in-progress">
        <Row className="in-progress-title">In Progress</Row>
        <Row className="in-progress-tickets">
          {tickets.map((ticketData, indexed) => {
            return (
              <div>
                {ticketData.status === "in-progress" && (
                  <Task ticket={ticketData} />
                )}
              </div>
            );
          })}
        </Row>
      </Col>
      <Col span={8} className="done">
        <Row className="done-title">Done</Row>
        <Row className="done-tickets">
          {tickets.map((ticketData, indexed) => {
            return (
              <div>
                {ticketData.status === "done" && <Task ticket={ticketData} />}
              </div>
            );
          })}
        </Row>
      </Col>
    </div>
  );
};

export default StatusLayer;
