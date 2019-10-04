export const userLoginFetch = user => {
    return dispatch => {
      return fetch("http://neunhuladinhmenh.herokuapp.com/user/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
          } else {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }

  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })