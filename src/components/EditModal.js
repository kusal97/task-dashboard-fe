import { Typography, Form, Radio, Button } from "antd";
import React, { useState } from "react";
import { updateTasks } from "../services/taskService";

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
  const [text, setText] = useState();
  const [description, setDescription] = useState();
  const [priority, setPriority] = useState("Medium");

  const onFinish = async (values) => {
    values["summary"] = text;
    values["description"] = description;
    values["user_id"] = 1;
    console.log(values);
    updateTasks(JSON.stringify(values), props.ticketData.id);
    alert("Task edited successfully !");
  };

  return (
    <div className="modal-body">
      <Form name="nest-messages" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <div className="edit-title">
          <Form.Item name={["summary"]}>
            <Typography.Text
              editable={{
                onChange: setText,
                maxLength: 500,
                autoSize: true,
              }}
            >
              {props.ticketData.summary}
            </Typography.Text>
          </Form.Item>
        </div>
        <div className="edit-description">
          <Form.Item name={["description"]}>
            <Typography.Text
              editable={{
                onChange: setDescription,
                maxLength: 20000,
                autoSize: true,
              }}
            >
              {props.ticketData.description}
            </Typography.Text>
          </Form.Item>
        </div>
        <div className="edit-priority">
          <Form.Item name={["priority"]} label="Priority">
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
          <Form.Item name={["status"]} label="Status">
            <Radio.Group
              options={optionsWithStatus}
              value={priority}
              optionType="button"
              buttonStyle="solid"
              defaultValue={props.ticketData.status}
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Button className="save-btn" type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditModal;
