import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import { createTask } from "../services/taskService";

const optionsWithPriority = [
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];

const optionsWithStatus = [
  { label: "Captured", value: "Captured" },
  { label: "In Progress", value: "In Progress", disabled: true },
  { label: "Done", value: "Done", disabled: true },
];

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
};

const onFinish = async (values) => {
  values["user_id"] = 1;
  createTask(JSON.stringify(values));
  alert("Task added successfully !");
};

const TaskForm = () => {
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Captured");

  const onChangePriority = ({ target: { value } }) => {
    console.log("Priority checked", value);
    setPriority(value);
  };

  const onChangeStatus = ({ target: { value } }) => {
    console.log("Status checked", value);
    setStatus(value);
  };

  return (
    <div className="task-form">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["summary"]}
          label="Title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["description"]}
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={["priority"]}
          label="Priority"
          rules={[{ required: true }]}
        >
          <Radio.Group
            onChange={onChangePriority}
            options={optionsWithPriority}
            value={priority}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>
        <Form.Item
          name={["status"]}
          label="Status"
          rules={[{ required: true }]}
        >
          <Radio.Group
            onChange={onChangeStatus}
            options={optionsWithStatus}
            value={status}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TaskForm;
