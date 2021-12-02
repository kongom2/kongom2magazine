import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";
import moment from "moment";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const initialStatePost = {
  // id: 0,
  // user_info: {
  //   user_name: "kongom2",
  //   user_profile:
  //     "https://tos-kr.neet.tv/images/payment/item_icon_helmet_blackbear.png",
  // },
  image_url:
    "https://littledeep.com/wp-content/uploads/2019/05/littledeep_bear_style2.png",
  contents: "",
  comment_count: 0,
  update_date: moment().format("YYYY-MM-DD hh:mm:ss"),
  // update_date: "2021-11-29 16:14:00",
};

const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    const _user = getState().user.user;

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };
    const _post = {
      ...initialStatePost,
      contents: contents,
      update_date: moment().format("YYYY-MM-DD hh:mm:ss"),
    };
    // console.log({ ...user_info, ..._post });
    // return;
    postDB
      .add({ ...user_info, ..._post })
      .then((doc) => {
        let post = { user_info, ..._post, id: doc.id };
        dispatch(addPost(post));
        history.replace("/");
      })
      .catch((err) => {
        console.log("post 작성에 실패했어요", err);
      });
  };
};

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = doc.data();
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        ); // 배열이 됨
        post_list.push(post);
        console.log(doc.id, doc.data());

        // let _post = {
        //   id: doc.id,
        //   ...doc.data(),
        // };

        // let post = {
        //   id: doc.id,
        //   user_info: {
        //     user_name: _post.user_name,
        //     user_profile: _post.user_profile,
        //   },
        //   image_url: _post.image_url,
        //   contents: _post.contents,
        //   comment_count: _post.comment_count,
        //   update_date: _post.update_date,
        // };
        // post_list.push(post);
      });
      console.log(post_list);
      dispatch(setPost(post_list));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
};

export { actionCreators };
