import React, { Component } from 'react';
import { Row, Col, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';
import { Table, Button } from '@icedesign/base';

export default class AccountTable extends Component {

  renderOperator = (value, index, record) => {
    const { addAccountModalToggle } = this.props;
    return (
      <div>
        <Button onClick={() => {addAccountModalToggle({...record, opType: 'update'})}}
        >
          修改
        </Button>
        <Button>删除</Button>
      </div>
    );
  };  
  
  render() {
    const { dataSource, isLoading } = this.props;
    return (
      <div className="animated fadeIn">
        <Table
          dataSource={ dataSource }
          hasBorder={false}
          isLoading={isLoading}
        >
          <Table.Column title="序号" width={120} 
            cell={(value, index, record) => (<span>{index}</span>)}
          />  
          <Table.Column title="创建日期" dataIndex="createDate" width={120} />
          <Table.Column title="账号名称" dataIndex="userName" width={120} />
          <Table.Column title="角色" dataIndex="roleName" width={120} />
          <Table.Column title="操作" 
            cell={this.renderOperator}
            lock="right"
            width={120}
          />
        </Table>
      </div>  
    )
  }  
}