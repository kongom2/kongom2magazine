import React from "react";
import { Grid, Image, Text } from "../elements";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

const Post = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text bold>{props.update_date}</Text>
        </Grid>
        <Grid padding="16px">
          <Text bold>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_count}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  //필요한 props를 미리 넘겨 받는 것. props가 없어서 오류가 나거나 화면이 깨지는 일이 없음
  user_info: {
    user_name: "kongom2",
    user_profile:
      "https://tos-kr.neet.tv/images/payment/item_icon_helmet_blackbear.png",
  },
  image_url:
    "https://littledeep.com/wp-content/uploads/2019/05/littledeep_bear_style2.png",
  contents: "곰이시네요",
  comment_count: 20,
  update_date: "2021-11-29 16:14:00",
};
export default Post;
