import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Task from "./Task";

const StatusLayer = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9090/api/task`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          setTickets(json);
        });
      }
    });
  }, []);

  return (
    <div className="status-layer">
      <Col span={8} className="captured">
        <Row className="captured-title">Captured</Row>
        <Row className="captured-tickets">
          {tickets.map((ticketData, indexed) => {
            return (
              <div>
                {ticketData.status === "Captured" && (
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
                {ticketData.status === "In-progress" && (
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
                {ticketData.status === "Done" && <Task ticket={ticketData} />}
              </div>
            );
          })}
        </Row>
      </Col>
    </div>
  );
};

export default StatusLayer;
