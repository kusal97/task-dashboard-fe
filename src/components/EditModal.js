import { Typography, Form, Radio } from "antd";
import React, { useState } from "react";

const optionsWithPriority = [
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];

const optionsWithStatus = [
  { label: "Captured", value: "Captured" },
  { label: "In Progress", value: "In-progress" },
  { label: "Done", value: "Done" },
];

const EditModal = (props) => {
  const [text, setText] = useState("Untitled");
  const [priority, setPriority] = useState("Medium");

  return (
    <div className="modal-body">
      <div className="edit-title">
        <Typography.Text
          editable={{
            onChange: setText,
            maxLength: 500,
            autoSize: false,
          }}
        >
          {props.ticketData.summary}
        </Typography.Text>
      </div>
      <div className="edit-description">
        <Typography.Text
          editable={{
            onChange: setText,
            maxLength: 20000,
            autoSize: false,
          }}
        >
          {props.ticketData.description}
        </Typography.Text>
      </div>
      <div className="edit-priority">
        <Form.Item name={["user", "priority"]} label="Priority">
          <Radio.Group
            options={optionsWithPriority}
            value={priority}
            optionType="button"
            buttonStyle="solid"
            defaultValue={props.ticketData.priority}
          />
        </Form.Item>
      </div>
      <div className="edit-status">
        <Form.Item name={["user", "priority"]} label="Status">
          <Radio.Group
            options={optionsWithStatus}
            value={priority}
            optionType="button"
            buttonStyle="solid"
            defaultValue={props.ticketData.status}
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default EditModal;
