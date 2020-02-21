/*
 *
*/
import React, {Component} from 'react'
import {reqLogin} from '../../api/index'
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    message
} from 'antd'
import {connect} from 'react-redux'
import human from '../../assets/images/icon_human.png'

import './login.less'

const Item = Form.Item
class Login extends Component {

    handleSubmit = () => {
        this.props.form.validateFields(async (err, values) => {
           if (!err) {
               const {userCode, password,orgig} = values
               // this.props.login(username, password,orgig)
               console.log(userCode, password,orgig)

           }
           else{
             message.error("校验不通过")
           }

        });
    }

    componentDidMount() {

        reqLogin({tranCode:"810001",
            opCode:"01679802",
            opBranchNo:"3115",
            idCard:"412822199404262690",
            mac:"00187db1c17b",
            ip:"169.254.1.4",
            hardwareInfo:"D362226F2DDC1445D0145076BA86E035",
            secuKey:"46AF80532C90B2D9B90239DA9A81D859C6BF52ED92BF28F6199E332F2267AB5B7844F91C4DE95546CAF21832B616D2CAD232C68DDA6B23C00055032F60CCAE0C"})

    }

    render() {
        const form = this.props.form
        const { getFieldDecorator } = form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
                style:{align:"middle",type:"flex",justify:"space-around"}
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div className="login">

                <header className="login-header">
                    <h1>V.1.2.3</h1>
                </header>

                <section className="login-content">

                    <span>
                        <img src={human} alt="human"/>
                        <h2>员工登录</h2>
                    </span>

                    <Form {...formItemLayout} className="login-form" >
                        <Item label="员工工号" type="flex"  justify="space-around" align="middle">
                            {
                                getFieldDecorator('userCode', {
                                    rules: [
                                        { len: 6, message: '用户名为6位数字' },
                                        { pattern: /^[0-9]+$/, message: '用户名必须是数字组成' },
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}

                                        className="login-form-input"

                                    />
                                )
                            }
                        </Item>
                        <Item label="员工密码" type="flex" justify="space-around" align="middle">
                            {
                                getFieldDecorator('password', {

                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        className="login-form-input"

                                    />
                                )
                            }

                        </Item>
                        <Item label="员工机构号" type="flex"  justify="space-around" align="middle">
                            {
                                getFieldDecorator('orgig', {

                                })(
                                <Input
                                    prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                    className="login-form-input"

                                />
                                )
                            }

                        </Item>
                        <Item type="flex"  justify="space-around" align="middle" >
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox className="login-form-checkbox">保持登录状态</Checkbox>)}

                        </Item>
                        <Item {...tailFormItemLayout}>

                            <Button  className="login-form-button">
                            退出
                            </Button>
                            <Button type="primary" size="large" onClick={this.handleSubmit} className="login-form-button">
                                登陆
                            </Button>


                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}
const WrapLogin = Form.create()(Login)
export default connect(
    state => ({user: state.user}),
)(WrapLogin)