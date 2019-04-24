function LoginController() {

  var userList;

  function loadUserList(users) {
    userList = users;
  }

  function isValidUserId(user) {
    return userList.indexOf(user) >= 0;
  }

  function isValidUserIdAsync(user, callback) {
    setTimeout(function () {
      callback(userList.indexOf(user) >= 0)
    }, 1);
  }
  var userList;
  function isAuthorizedPromise(user) {
    return new Promise(function (resolve,reject) {
      try{
      
        resolve(userList.indexOf(user) >= 0)
      
    }
    catch(ex){
      reject('User list is empty')
    }
    });
  }

  return {
    isValidUserId,
    isValidUserIdAsync,
    loadUserList,
    isAuthorizedPromise
  }

}

module.exports = LoginController();