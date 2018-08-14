import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardGroup, Col, Container, InputGroup, InputGroupAddon, InputGroupText, Input, Row } from 'reactstrap';
import { Button } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { getIaModels, addModelToggle } from './actions';
import reducer from './reducer';
import ModalTable from './components/Table';
import AddModel from './components/AddModel';

class IAModel extends Component {
  
  componentDidMount() {
    const { getIaModels } = this.props
    getIaModels()
  }

  render() {
    const { iaModel, addModelToggle } = this.props;
    return (
      <div className="app">
        <AddModel shouldOpen={iaModel && iaModel.shouldAddModelModalOpen} toggle={addModelToggle}/>
        <IceContainer>
          <Button onClick={addModelToggle}>新增模版</Button>
          <InputGroup className="mb-4">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                类型：
              </InputGroupText>
            </InputGroupAddon>
            <Input type="select" name="type">
              <option value="">全部</option>
              <option value="">云图</option>
              <option value="">中插</option>
            </Input>
          </InputGroup>
        </IceContainer>
        <ModalTable />
      </div>   
    ) 
  }  
}

const mapDispatchToProps = {
  getIaModels,
  addModelToggle,
};

const mapStateToProps = (state) => {
  return { iaModel: state.iaModel };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'iaModel', reducer });

export default compose(
  withReducer,
  withConnect
)(IAModel);