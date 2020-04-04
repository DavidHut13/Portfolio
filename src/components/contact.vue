<template>
<b-container>
    <b-row>
        <b-col cols="12">
            <h1 class="sectionHeader skillsHeader ml-4 my-5">Get in touch</h1>
        </b-col>
        <b-col cols="12" data-aos="fade-right">
            <b-card class="customShadow">
                <b-row>
                    <b-col id="LargeScreenMailWrapper" class="LargeScreenMailWrapper">
                        <div class="mailWrapper" key="messageOpen">
                            <b-img fluid class="mailOpen" src="\img\contact\MessageOpen.svg"></b-img>
                        </div>
                    </b-col>
                    <b-col cols="12" md="10" offset-md="1" lg="5" offset-lg="1">
                        <b-form-group class="input" id="name" label="Name">
                            <b-form-input v-model="contactForm.name"></b-form-input>
                        </b-form-group>
                        <b-form-group class="input" id="email" label="Email">
                            <b-form-input v-model="contactForm.email"></b-form-input>
                        </b-form-group>
                        <b-form-group id="message" label="Message">
                            <div class="textAreaWrapper py-3 pr-2">
                                <b-form-textarea class="textAreaInput" id="textarea" v-model="contactForm.message" placeholder="Enter your message here..." rows="6" max-rows="6"></b-form-textarea>
                            </div>
                        </b-form-group>
                        <div class="sendBtnWrapper">
                            <b-button @click="$bvModal.show('message-modal')" variant="none" class="sendBtn px-5">Send</b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
            <b-modal centered id="message-modal" hide-footer hide-header>
                <div key="messageSent" class=" text-center">
                    <b-img class="sentMailImg mt-5" fluid src="\img\contact\messageSent.svg"></b-img>
                    <h2 class="mt-4 messageSentText">Ready to Send?</h2>
                    <p>Thanks for reaching out!</p>
                    <div class="modalBtnWrapper">
                        <b-button @click="$bvModal.hide('message-modal')" variant="none" class="cancelBtn px-4 mr-2 my-3">cancel</b-button>
                        <b-button @click="sendMessage()" variant="none" class="sendBtn px-4 ml-2  my-3">Send</b-button>
                    </div>
                </div>
            </b-modal>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import {db} from './firebase/init.js'
import axios from 'axios'
export default {
    data() {
        return {
            contactForm: {
                name: '',
                email: '',
                message: '',
            },
            sendError: '',
            messageSent: false,
        }
    },
    methods: {
        sendMessage() {
            if (this.contactForm.name != null) {
                db.collection('Message').add({
                    name: this.contactForm.name,
                    email: this.contactForm.email,
                    message: this.contactForm.message,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err)
                })
                this.resetForm();
                this.$bvModal.hide('message-modal')
            
            }

        },
        resetForm() {
            this.contactForm = {
                name: '',
                email: '',
                message: '',
            }
        }
    },
    computed: {

    }
}
</script>

<style scoped>
@media(max-width:991px) {
    .LargeScreenMailWrapper {
        display: none;
    }
}

.mailWrapper {
    margin-top: 5rem;
    width: 100%;
}

::v-deep .modal-content {
    border: none;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.3);
}

.modalBtnWrapper {
    display: flex;
    justify-content: space-around;
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

.mailOpen {
    max-height: 250px;
}

.sentMailImg {
    max-height: 80px;
}

.messageSentText {
    color: rgb(54, 54, 54);
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
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
    border-radius: 20px;
    -webkit-box-shadow: 0px 10px 11px -8px rgba(138, 149, 158, 0.6);
    -moz-box-shadow: 0px 10px 11px -8px rgba(138, 149, 158, 0.6);
    box-shadow: 0px 10px 11px -8px rgba(138, 149, 158, 0.6);
}

.sendBtn.btn:active,
.cancelBtn.btn:active {
    transform: translateY(-2px);
    -webkit-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
}

.sendBtn:hover,
.cancelBtn:hover {
    transform: translateY(-4px);
    cursor: pointer;
    -webkit-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
}

.cancelBtn {
    transition: all .2s ease-in-out;
    color: #9a3cf4;
    font-weight: bold;
    border-style: none;
    border-radius: 20px;
    border: 1px solid #9a3cf4;
    -webkit-box-shadow: 0px 10px 11px -8px rgba(138, 149, 158, 0.6);
    -moz-box-shadow: 0px 10px 11px -8px rgba(138, 149, 158, 0.6);
    box-shadow: 0px 10px 11px -8px rgba(138, 149, 158, 0.6);
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
    transition: all .5s ease;
}

.slide-fade-leave-active {
    transition: all 0.25s ease;
}

.slide-fade-enter {
    opacity: 0;
    transform: translateX(-175px);
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
