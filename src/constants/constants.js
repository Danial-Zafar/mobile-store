export const  AppConstant= {
    fakeApi: {
      users: 'http://localhost:3000/users',
      mobiles: 'http://localhost:3000/mobiles'
    },
    navigation: {
      home : "/",
      login: '/login',
      dashboard: '/dashboard',
      mobiledetails : (id = ":id")=> id ? `/mobile-details/${id}` :"/mobile-details/:id",
      cart: '/cart'
    }
  }