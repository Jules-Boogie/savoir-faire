import axios from 'axios';

export default {

    getUsers: function () {
        //api/users
        return axios.get("/api/users")

    },

    getUser: function (id) {
        //api/user/:id
        return axios.get("/api/users/" + id)

    },

    addUser: function (userdata) {
        ///api/users
        return axios.post("/api/users/signup", userdata)

    },
    LoginUser: function(query){
        return axios.post("/api/users/signin", query)
    },
    LoginAdmin: function(query){
        return axios.post("/api/users/signin/admin", query)
    },
    updateUser: function (id) {

        return axios.put("/api/users/" + id)

    },
    populateUserFavorites: function (id) {
        return axios.get("/api/users/"+ id + "/wishlist/populate/" )
    },
    deleteuser: function (id) {
        //api/user/:id
        return axios.delete("/api/users/" + id)

    },
    removeUserfavorite: function (Userid, productId) {
        return axios.put("/api/users/"  + Userid + "/wishlist", productId)
    },
    removeUsercart: function (Userid, productId) {
        return axios.put("/api/users/"+ Userid + "/cart",productId)
    },
    addtoCart: function(id, cartData){
        return axios.post("/api/users/" + id + "/cart"  , cartData)
    }, 
    addtoFavorite: function(id, favData){
        return axios.post("/api/users/" + id + "/wishlist" , favData)
    },
    populateUserCart: function(id){
        return axios.get("/api/users/"  + id + "/cart/populate" )
    }

}