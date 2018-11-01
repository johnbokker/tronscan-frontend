import React, {Component} from "react";
import { Form, Input, Button, Radio } from 'antd';
import {QuestionMark} from "../../../common/QuestionMark";
import { withRouter } from 'react-router'
import queryString from 'query-string';
import {Client} from "../../../../services/api";
import {connect} from "react-redux";
import {injectIntl} from "react-intl";

const FormItem = Form.Item;

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
     firstName: '',
     lastName: '',
     exchangeInfo:'',

    }
  }

  componentDidMount() {
    this.getTokenName();
    this.getExchangeInfo();
  }

  // 获取 tokenname
  getTokenName() {
    const parsed = queryString.parse(this.props.location.search).token;
    const tokens = parsed.split('/');
    
    this.setState({
      firstName: tokens[0],
      lastName: tokens[1]
    })
  }

  getExchangeInfo = async () =>{
    let {data} = await Client.getExchangesList({'name':16});
      this.setState({
          exchangeInfo: data[0],
      })
    console.log("dataInfo",data)
  }

  handleSubmitBuy = (e) => {
    e.preventDefault();
    console.log(1111)
    this.props.form.validateFields(['first_quant_buy','second_quant_buy'],(err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSubmitSell = (e) => {
      e.preventDefault();
      console.log(22222)
      this.props.form.validateFields(['first_quant_sell','second_quant_sell'],(err, values) => {
          if (!err) {

              console.log('Received values of form: ', values);
          }
      });
  }



  handleSecondValueBuy = (e) => {
      let { exchangeInfo } = this.state
      this.props.form.setFieldsValue({
          second_quant_buy: e.target.value * exchangeInfo.price,
      });
  }

  handleSecondValueSell = (e) => {
      let { exchangeInfo } = this.state
      this.props.form.setFieldsValue({
          second_quant_sell: e.target.value * exchangeInfo.price,
      });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    let {firstName, lastName,exchangeInfo} = this.state
    return (
      <div className="exchange__transaction d-flex">

        {/* 买入模块 */}
        <div className="exchange__transaction__item mr-2 p-3">
          <h5 className="mr-3">{exchangeInfo.exchange_name} ≈ <span>{exchangeInfo.price}</span></h5>
          <hr/>
          <Form layout="vertical" onSubmit={this.handleSubmitBuy}>
            <FormItem
                label={<span>Expected to buy <QuestionMark text="这是提示"/></span>}
            >
                {getFieldDecorator('first_quant_buy', {
                    rules: [{ required: true, message: '请输入交易数量' }],
                })(
                    <Input addonAfter={firstName}
                           placeholder="input placeholder"
                           size="large"
                           type="number"
                           onChange={this.handleSecondValueBuy}
                    />
                )}
            </FormItem>
            <FormItem
              label={<span>Amout want to sell <QuestionMark text="这是提示"/></span>}
            >
            {getFieldDecorator('second_quant_buy', {
                rules: [{ required: true, message: '请输入交易数量' }],
              })(
              <Input addonAfter={lastName}
                     placeholder="input placeholder"
                     size="large"
                     type="number"
              />
            )}
            </FormItem>

            <FormItem>
              <Button type="primary" className="success" size="large" htmlType="submit">BUY IGG</Button>
            </FormItem>
          </Form>
        </div>

        {/* 卖出模块 */}
        <div className="exchange__transaction__item  p-3">
          <h5 className="mr-3">{exchangeInfo.exchange_name} ≈ <span>{exchangeInfo.price}</span></h5>
          <hr/>
          <Form layout="vertical" onSubmit={this.handleSubmitSell} >
            <FormItem
              label={<span>Amout want to sell <QuestionMark text="这是提示"/></span>}
            >
              {getFieldDecorator('first_quant_sell', {
                rules: [{ required: true, message: '请输入交易数量' }],
              })(
              <Input
                  addonAfter={firstName}
                  placeholder="input placeholder"
                  size="large"
                  onChange={this.handleSecondValueSell}
              />
            )}
            </FormItem>
            <FormItem
              label={<span>Expected to buy <QuestionMark text="这是提示"/></span>}
            >
              {getFieldDecorator('second_quant_sell', {
                rules: [{ required: true, message: '请输入交易数量' }],
              })(
              <Input addonAfter={lastName} placeholder="input placeholder" size="large"/>
            )}
            </FormItem>
            <FormItem>
              <Button type="primary" className="warning" size="large" htmlType="submit">SELL IGG</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        account: state.app.account,
        tokenBalances: state.account.tokens,
        totalTransactions: state.account.totalTransactions,
        frozen: state.account.frozen,
        accountResource: state.account.accountResource,
        wallet: state.wallet,
        currentWallet: state.wallet.current,
        trxBalance: state.account.trxBalance,
    };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Form.create()(withRouter(Transaction))));