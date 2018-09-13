import React, { Fragment } from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { Button, Feedback } from "@icedesign/base";

import styles from "./styles";

const AddType = ({
  shouldOpen,
  toggle,
  addType,
  updateType,
  record,
  setFormData,
  setFileIptState,
  formData,
  configInfo,
  fileName,
  showFileIpt,
  currentPage
}) => {
  const { opType } = record || {};
  const isRead = opType === "read";
  const isUpdate = opType === "update";
  return (
    <Fragment>
      <Modal isOpen={shouldOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {isRead ? "类型信息" : isUpdate ? "类型修改" : "新增类型"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <InputGroup className="mb-4">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>类型名称</InputGroupText>
              </InputGroupAddon>
              <Input
                type="text"
                maxLength={10}
                disabled={isRead ? "disabled" : false}
                defaultValue={
                  isRead || isUpdate
                    ? formData && formData.interactionTypeName
                    : ""
                }
                onChange={e => {
                  const { value } = e.target;
                  if (value && value.length > 10) {
                    return;
                  }
                  setFormData({
                    interactionTypeName: e.target.value
                  });
                }}
                placeholder="请输入名称"
              />
            </InputGroup>
            {isRead ? (
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>配置信息</InputGroupText>
                </InputGroupAddon>
                <span style={{ display: "table-cell", flex: 1 }}>
                  <Input
                    disabled
                    style={{ minHeight: "240px" }}
                    type="textarea"
                    value={configInfo || ""}
                  />
                </span>
              </InputGroup>
            ) : (
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>类型导入</InputGroupText>
                </InputGroupAddon>
                <span>
                  {!((formData && formData.file) || showFileIpt) &&
                  fileName &&
                  isUpdate ? (
                    <Button
                      onClick={() => {
                        setFileIptState({ showFileIpt: true });
                      }}
                    >
                      <span>{fileName}</span>
                      <span>{`    x`}</span>
                    </Button>
                  ) : (
                    <Input
                      type="file"
                      accept="text/x-java"
                      styles={styles.file_ipt}
                      onChange={e => {
                        const file = e.target.files && e.target.files[0];
                        if (!/.json$/gi.test(file.name)) {
                          Feedback.toast.error("请上传*.json文件");
                          return;
                        }
                        setFormData({
                          file
                        });
                      }}
                    />
                  )}
                </span>
              </InputGroup>
            )}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>取消</Button>
          <Button
            type="primary"
            onClick={() => {
              if (!formData) {
                Feedback.toast.error("请输入完整信息");
                return;
              }
              if (!formData.interactionTypeName) {
                Feedback.toast.error("请输入“类型名称”");
                return;
              }
              if (isUpdate) {
                updateType({
                  interactionTypeId: record && record.interactionTypeId,
                  interactionTypeName: formData.interactionTypeName,
                  file: formData.file,
                  currentPage
                });
              } else if (isRead) {
                toggle && toggle();
              } else {
                if (!formData.file) {
                  Feedback.toast.error("请导入类型文件");
                  return;
                }
                addType({ ...formData, currentPage });
              }
            }}
          >
            {isUpdate ? "确认修改" : isRead ? "确认" : "确认新增"}
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default AddType;
