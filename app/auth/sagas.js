import {take, put, fork, call} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { LOGIN_REQUEST, SIGNUP_REQUEST, LOGOUT } from './constants';
import {loginRequest, loginError, loginSuccess, setAuthToken} from './actions';
import 'isomorphic-fetch';


// LOGIN_SUBMIT,
// LOGIN_REQUEST,
// LOGIN_SUCCESS,
// LOGIN_ERROR,
// LOGOUT,

export function* handleLoginRequest(){
  while(true){
      // wait for a login submit
      var {payload} = yield take(LOGIN_REQUEST);
      console.log(payload);

      // Endpoint to login
      let response = yield call(fetch, "/api/auth/local", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: new Headers({
      		'Content-Type': 'application/json'
      	})
      });
    console.log('Im here babayt ')
      if(response && response.body.token){
        yield put(setAuthToken(response))
        // put a login request
        yield put(loginSuccess(payload));
      }
      else{
        // Error in login
        yield put( loginError() );
      }

  }
}



export default function* saga(){
  yield [fork(handleLoginRequest)];
}

// export default function* auth(getState){
//     yield fork(handleLoginRequest);
//     // yield fork(handleLoginSubmit);
// }
