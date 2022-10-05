let app = new Vue({
    el: "#app",
    data: {
        message: "Hello",
        fsize: "42px",
        msg2: "Dummy",
    },
    methods: {
        updateMsg() {
            this.message = "Back to square one";
        },
    },
    computed: {
        myFontSize: function () {
            return `${this.message.length + 10}px`;
        },
    },
    watch: {
        // message: function(omsg, nmsg) {
        message: function (nmsg) {
            // this.msg2 = 'old: ${omsg), New: ${nmsg}`;
            this.msg2 = `New: ${nmsg}`;

        }
    }
})
