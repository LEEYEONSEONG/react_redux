// export const getAuthState = function () {
//   let isLogined = false;
//   let userInfo = {};
//   if(localStorage.getItem('isLogined')) {
//     if(localStorage.getItem('isLogined')  === 'true') {
//       isLogined = true;
//     }
//   }
//   if(localStorage.getItem('userInfo')) {
//     userInfo =  JSON.parse(localStorage.getItem('userInfo'));
//   }
//   return {
//     isLogined: isLogined,
//     userID: localStorage.getItem('userID'),
//     userInfo: userInfo
//   }
// }

// class App extends Component {

//   constructor (props) {
//     super(props);
//     this.login = this.login.bind(this);
//     this._logout = this._logout.bind(this);

//     let authState = authentication.getAuthState();

//     this.state = {
//       user: {
//         loggedIn: authState.isLogined,
//         userID: authState.userID,
//         userInfo: authState.userInfo
//       }
//     }

//     const { dispatch } = this.props;
//     history.listen((location, action) => {
//         dispatch({type: STORE_CONSTANTS.LOGIN_INFO,
//           payload: {
//             isAuthenticated: authState.isLogined,
//             userID: authState.userID,
//             userInfo: authState.userInfo
//           }
//         });
//       });
//   }

//   login (username, password) {
//     const au = authentication.login(username, password, this).then(result => {
//           const statusCode = result.statusCode;
//           if(statusCode === LOGIN_STATUS_CODE.SUCCESSFUL) {
//             const userInfo = result.data.userInfo;
//             this.props.dispatch({type: STORE_CONSTANTS.LOGIN_INFO,
//               payload: {
//                 isAuthenticated: true,
//                 userID: userInfo.username,
//                 userInfo: userInfo
//               }
//             });
//             this.setState({
//               user: {
//                 loggedIn: true,
//                 userID: userInfo.username,
//                 userInfo: userInfo
//               }
//             });
//           } else {
//             this.props.dispatch({type: STORE_CONSTANTS.LOGIN_FAILED});
//             this.setState({
//               user: {
//                 loggedIn: false,
//                 userID: null,
//                 userInfo: {}
//               }
//             });
//           }
//           return result;
//         }).catch(err => {
//           this.props.dispatch({type: STORE_CONSTANTS.LOGIN_FAILED});
//           this.setState({
//             user: {
//               loggedIn: false,
//               userID: null,
//               userInfo: {}
//             }
//           });
//           return Promise.reject(err)
//         })
//         return au;
//   }

//   getChildContext () {
//     return {
//       user:{
//         loggedIn: this.state.user.loggedIn,
//         userID: this.state.user.userID,
//         userInfo: this.state.user.userInfo
//       }
//     }
//   }

//   _logout () {
//     this.props.dispatch({type: STORE_CONSTANTS.LOGOUT_SUCCESS});
//     this.setState({
//       user: {
//         loggedIn: false,
//         userID: null,
//         userInfo: {}
//       }
//     })
//     authentication.reset();
//   }


export const female = () => {
  return {
    type: 'FEMALE',
  };
};
export const male = () => {
  return {
    type: 'MALE',
  };
};
export const malefalse = () => {
  return {
    type: 'MALE_FALSE',
  };
};
export const femalefalse = () => {
  return {
    type: 'FEMALE_FALSE',
  };
};
export const maleGiver = (state = initialState, action) => {
  switch (action.type) {
    case 'MALE':
      return true;
    case 'MALE_FALSE':
      return false;
    default:
      return state;
  }
};
export const femaleGiver = (state = initialState, action) => {
  switch (action.type) {
    case 'FEMALE':
      return true;
    case 'FEMALE_FALSE':
      return false;
    default:
      return state;
  }
};
const initialState = false;