import React, { useState } from "react";
import { Text, Grid, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

import Permit from "../shared/Permit";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log(_session_key);
  console.log(sessionStorage.getItem(_session_key));
  console.log(is_session);
  // const [isLogin, setIsLogin] = useState(false);

  // React.useEffect(() => {
  //   let cookie = getCookie("user_id");
  //   console.log(cookie);
  //   if (cookie) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // });

  if (is_login && is_session) {
    return (
      <Permit>
        <React.Fragment>
          <Grid is_flex padding="16px">
            <Grid>
              <Text margin="0px" size="24px" bold>
                안녕?
              </Text>
            </Grid>
            <Grid is_flex>
              <Button text="내정보"></Button>
              <Button text="알림"></Button>
              <Button
                text="로그아웃"
                _onClick={() => {
                  dispatch(userActions.logoutFB());
                  // deleteCookie("user_id");
                }}
              ></Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </Permit>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            안녕?
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.propTypes = {};

export default Header;
// 로그인 한 헤더
// 로그인 안한 헤더
