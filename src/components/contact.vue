<template>
<b-container>
    <b-row>
        <b-col cols="12">
            <h1 class="sectionHeader skillsHeader ml-4 my-5">Get in touch</h1>
        </b-col>
        <b-col cols="12" data-aos="fade-right">
            <b-card class="customShadow">
                <b-row>
                    <b-col data-aos="fade-right" data-aos-delay="400" cols="12" lg="6" class="mailWrapper">
                        <transition-group name="slide-fade">
                            <div v-if="messageSent == true" class="text-center" key="messageSent">
                                <div class="flexCenter">
                                    <div class="text-center">
                                        <h2>Message Sent</h2>
                                        <b-img fluid class="mailImage" src="\img\contact\messageSent.svg"></b-img>
                                        <p class="mt-5">Thanks for reaching out!</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="messageSent == false" class="text-center" key="messageOpen">
                                <b-img fluid class="mailImage" src="\img\contact\messageOpen.svg"></b-img>
                            </div>
                        </transition-group>
                    </b-col>
                    <b-col cols="12" md="10" offset-md="1" lg="5" offset-lg="1">
                        <b-form-group class="input" id="name" label="Name">
                            <b-form-input></b-form-input>
                        </b-form-group>
                        <b-form-group class="input" id="email" label="Email">
                            <b-form-input></b-form-input>
                        </b-form-group>
                        <b-form-group id="message" label="Message">
                            <div class="textAreaWrapper py-3 pr-2">
                                <b-form-textarea class="textAreaInput" id="textarea" v-model="messageText" placeholder="Enter your message here..." rows="6" max-rows="6"></b-form-textarea>
                            </div>
                        </b-form-group>
                        <div class="sendBtnWrapper">
                            <b-button @click="sendMsg()" variant="none" class="sendBtn px-5">Send</b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    data() {
        return {
            messageText: "",
            messageSent: false,
        }
    },
    methods: {
        sendMsg() {
            this.messageSent = true;
        }
    }
}
</script>

<style scoped>
@media(max-width:991px) {
    .flexCenter.mailWrapper {
        display: none;
    }
}

.checkIcon {
    color: #9a3cf4;
}

.customShadow {
    -webkit-box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.25);
}

.sectionHeader {
    color: rgb(54, 54, 54);
    text-shadow: 2px 2px 3px rgba(145, 145, 145, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    font-size: 5em;
    font-family: 'Staatliches', cursive;
}

.mailImage {
    max-height: 250px;
}

.textAreaWrapper {
    border: 1px solid #ced4da;
    border-radius: 25px;
}

.textAreaInput {
    border: none !important;
    box-shadow: none;
}

.textAreaWrapper:focus-within {
    border-color: #b928f7c7;
    -webkit-box-shadow: 0px 0px 25px -10px rgba(186, 40, 247, 0.60);
    -moz-box-shadow: 0px 0px 25px -10px rgba(186, 40, 247, 0.60);
    box-shadow: 0px 0px 20px -10px rgba(186, 40, 247, 0.60);
}

input.form-control:focus {
    border-color: #b928f7c7;
    -webkit-box-shadow: 0px 0px 25px -10px rgba(186, 40, 247, 0.60);
    -moz-box-shadow: 0px 0px 25px -10px rgba(186, 40, 247, 0.60);
    box-shadow: 0px 0px 20px -10px rgba(186, 40, 247, 0.60);
}

.sendBtnWrapper {
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
}

.card {
    border: none;
    border-radius: 10px;
}

.sendBtn {
    transition: all .2s ease-in-out;
    color: white;
    font-weight: bold;
    border-style: none;
    background-image: linear-gradient(to bottom, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
    border-radius: 25px 25px 0px 25px;
    -webkit-box-shadow: 0px 10px 11px -8px rgba(138, 149, 158, 0.6);
    -moz-box-shadow: 0px 10px 11px -8px rgba(138, 149, 158, 0.6);
    box-shadow: 0px 10px 11px -8px rgba(138, 149, 158, 0.6);
}

.sendBtn.btn:active {
    transform: translateY(-2px);
    -webkit-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
}

.sendBtn:hover {
    transform: translateY(-4px);
    cursor: pointer;
    -webkit-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
}

.form-control {
    border-radius: 25px;
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide-fade-enter-active {
    transition: all 0.75s ease;
}

.slide-fade-leave-active {
    transition: all 0.5s ease;
}

.slide-fade-enter {
    opacity: 0;
    transform: translateX(-80px);
}

.slide-fade-enter-to {
    opacity: 1;
}

.slide-fade-leave {
    opacity: 1;
}

.slide-fade-leave-to {
    opacity: 0;
}
</style>
