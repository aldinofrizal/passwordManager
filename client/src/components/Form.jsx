import React , { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux'
import * as addActions from '../store/action/password'

class AddForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.form.resetFields()
        this.props.Add.addData(values)
      }
    });
  };
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('url', {
            rules: [{ required: true, message: 'Please input website url!' }],
          })(
            <Input
              prefix={<Icon type="cloud" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="URL"
            />,
          )}
        </Form.Item>
        
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              { pattern : /[A-Z]/ , 
                message : 'must contain at least one uppercase character\n' },
              { pattern : /[a-z]/ ,
                 message : 'must contain at least one lowercase character\n' },
              { pattern : /[@#$%^&*]/ , 
                message : 'must contain at least one special character\n' },
              { pattern : /[0-9]/,
                message : 'must contain at least one number\n'},
              { min : 5,
                message : 'password is too short, must contain at least 5 character\n'},
              { required : true,
                message : 'Please input your Password!\n'},
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba( 0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            add password
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  password : state.password
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        Add: bindActionCreators(addActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( Form.create({ name: 'add_form' })(AddForm) )
