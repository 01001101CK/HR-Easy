import { Create, useForm, useSelect } from "@refinedev/antd";
import { IResourceComponentsProps } from "@refinedev/core";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";
import React from "react";
import { COMPANY_SELECT_QUERY, COMPANY_CREATE_MUTATION } from "./queries";
import { Typography } from 'antd';

export const CompanyCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps } = useForm({
        meta: {
            gqlMutation: COMPANY_CREATE_MUTATION,
        },
    });

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
        meta: {
            gqlQuery: COMPANY_SELECT_QUERY,
        },
    });
    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Is Active"
                    name="isActive"
                    valuePropName="checked"
                >
                    <Checkbox>Active</Checkbox>
                </Form.Item>

                {/* Assuming you want to keep the Typography for the links section header */}
                <Form.Item>
                    <Typography.Title level={5}>Links</Typography.Title>
                </Form.Item>

                <Row gutter={16}>
                    {['web', 'linkedin', 'twitter', 'instagram', 'youtube', 'github'].map((platform) => (
                        <Col span={12} key={platform}>
                            <Form.Item label={platform.charAt(0).toUpperCase() + platform.slice(1)} name={platform}>
                                <Input />
                            </Form.Item>
                        </Col>
                    ))}
                </Row>
            </Form>
        </Create>
    );
};