import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { WriteMain, TextStyle } from "./style";

class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    const { TextArea } = Input;
    if (loginStatus) {
      return (
        <WriteMain>
          <div>
            <Input placeholder="文章标题" style={{ width: 400, height: 25 }} />
          </div>
          <TextStyle>
            <TextArea rows={8} style={{ width: 400 }} placeholder="文章内容" />
          </TextStyle>
          <Button type="primary">提交</Button>
        </WriteMain>
      );
    } else {
      return <Redirect to="/login/entry" />;
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(["login", "login"]),
});

export default connect(mapState, null)(Write);
