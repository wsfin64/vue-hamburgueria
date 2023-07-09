const MyNameApp = {
    data(){
        return {
            name: "",
            age: 30,
            input_name: "",
            image: "",
            input_image: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            console.log(this.input_name);
            this.name = this.input_name;
        },
        submitImage(ev) {
            ev.preventDefault();

            this.image = this.input_image;
        }
        
    }
}

Vue.createApp(MyNameApp).mount("#app")