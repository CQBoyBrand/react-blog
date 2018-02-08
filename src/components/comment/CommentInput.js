/**
 * Created By brand On 2018/1/23
 */
import React, {Component} from 'react'
import {Form, Icon, Row, Col, Input, Button, message} from 'antd';

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const FormItem = Form.Item;
const {TextArea} = Input

@withRouter
@connect(
    state => state,
    null
)
class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 20,
            isClickable: true
        }
    }
    timeDown(){
        if(this.state.isClickable){
            this.timer = setInterval(function () {
                var count = this.state.count;
                this.state.isClickable = false;
                count -= 1;
                if (count < 1) {
                    this.setState({
                        isClickable: true
                    });
                    count = 20;
                    clearInterval(this.timer);
                }
                this.setState({
                    count: count
                });
            }.bind(this), 1000);
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.timeDown()
                localStorage.setItem("cq-nickname", values.userName)
                localStorage.setItem("cq-email", values.userEmail)
                localStorage.setItem("cq-website", values.userWebsite)
                if(values.userWebsite == null || values.userWebsite == ""){
                    values.userWebsite = "javascript:void(0)"
                }
                this.props.onSubmitData(values);
            }
        });
    }
    createCommitId() {
        return 'xCxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    getNowFormatDatetwo() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var minuts = date.getMinutes();
        var secends = date.getSeconds();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        if (hours >= 0 && hours <= 9) {
            hours = "0" + hours;
        }
        if (minuts >= 0 && minuts <= 9) {
            minuts = "0" + minuts;
        }
        if (secends >= 0 && secends <= 9) {
            secends = "0" + secends;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + hours + seperator2 + minuts
            + seperator2 + secends;
        return currentdate;
    }

    render() {
        const userName = localStorage.getItem("cq-nickname") || "";
        const userEmail = localStorage.getItem("cq-email") || "";
        const userWebsite = localStorage.getItem("cq-website") || "";
        const {getFieldDecorator} = this.props.form;
        const artId = this.props.match.params.id;
        const commentTime = this.getNowFormatDatetwo();
        return (
            <Form onSubmit={this.handleSubmit}>
                {getFieldDecorator('artId', {
                    rules: [{required: true}],
                    initialValue: artId
                })(
                    <input type="hidden"/>
                )}
                {getFieldDecorator('parentCommentId', {
                    initialValue: this.props.replyToData.parentId
                })(
                    <input type="hidden"/>
                )}
                {getFieldDecorator('commentId', {
                    initialValue: this.createCommitId()
                })(
                    <input type="hidden"/>
                )}
                {getFieldDecorator('toUserEmail', {
                    initialValue: this.props.replyToData.toUserEmail
                })(
                    <input type="hidden"/>
                )}
                <FormItem>
                    {getFieldDecorator('commentTime', {
                        rules: [{required: true}],
                        initialValue: commentTime
                    })(
                        <input type="hidden"/>
                    )}
                </FormItem>
                <Row gutter={16}>
                    <Col md={8}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: '请输入你的名字!'}],
                                initialValue: userName
                            })(
                                <Input addonBefore="你的昵称*" placeholder="叫你什么好呢？"/>
                            )}
                        </FormItem>
                    </Col>
                    <Col md={8}>
                        <FormItem>
                            {getFieldDecorator('userEmail', {
                                rules: [{required: true,type: 'email', message: '请输入正确的邮箱!'}],
                                initialValue: userEmail
                            })(
                                <Input addonBefore="你的邮箱*" placeholder="怎样才能勾搭你？"/>
                            )}
                        </FormItem>
                    </Col>
                    <Col md={8}>
                        <FormItem>
                            {getFieldDecorator('userWebsite', {
                                initialValue: userWebsite
                            })(
                                <Input addonBefore="你的网址" placeholder="你的博客地址(请加上http(s)://)"/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                {
                    (this.props.replyToData.toName != "") ? (
                        <div className="toName">回复：{this.props.replyToData.toName}</div>) : null
                }

                <FormItem>
                    {getFieldDecorator('Content', {
                        rules: [{required: true, message: '你没有要对我说的话吗？'}],
                    })(
                        <TextArea style={{resize: "none"}} rows={4} placeholder="你想要说点什么呢~~"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button disabled={!this.state.isClickable} type="primary" htmlType="submit" className="login-form-button">
                        {this.state.isClickable ? "Submit" : `请${this.state.count}秒后再评论`}
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const CommentInput = Form.create({
    mapPropsToFields(props) {
        if (props.replyStatus.code == "4") {
            message.success("评论成功！");
            props.resetCommintStatus()
        }
        if(props.replyStatus.code == "439"){
            message.success("不要再戳啦，休息20秒再战可好");
        }
        if (props.replyStatus.code != "4" && props.replyStatus.code != null && props.replyStatus.code != "439") {
            message.error("操作失败！")
        }
    }
})(CommentForm);
export default CommentInput