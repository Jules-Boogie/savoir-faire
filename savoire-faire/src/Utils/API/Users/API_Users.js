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
        return axios.post("/api/users", userdata)

    },


    updateUser: function (id) {

        return axios.put("/api/users/" + id)

    },
    populateUserFavorites: function (id) {
        return axios.get("/api/users/" + id + "/products")
    },
    deleteuser: function (id) {
        //api/user/:id
        return axios.delete("/api/users/" + id)

    },
    removeUserfavorite: function (id, updateData) {
        return axios.put("/api/users/" + id + "/products", updateData)
    },
    addtoCart: function(id, cartData){
        return axios.post("/api/users/" + id + "/cart", cartData)
    }, 
    populateUserCart: function(id){
        return axios.get("/api/users/" + id + "/cart/populate")
    }

}