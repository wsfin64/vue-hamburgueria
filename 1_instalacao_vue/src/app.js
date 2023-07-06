const MyNameApp = {
    data(){
        return {
            name: "Wellington",
            age: 30
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")