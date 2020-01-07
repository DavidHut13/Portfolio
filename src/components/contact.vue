<template>
<b-container>
    <b-row>
        <b-col>
            <b-card class="shadow-lg">
                <b-row>
                    <b-col cols="12" lg="6" class="flexCenter">
                        <b-img fluid class="mailImage" src="/img/AdobeStock_266976905_Preview.png"></b-img>
                        <!-- <i class="far fa-envelope-open fa-4x"></i> -->
                    </b-col>
                    <b-col cols="12" lg="6">
                        <b-form-group id="name" label="Name">
                            <b-form-input></b-form-input>
                        </b-form-group>
                        <b-form-group id="email" label="Email">
                            <b-form-input></b-form-input>
                        </b-form-group>
                        <b-form-group id="message" label="Message">
                            <div class="textAreaWrapper py-3 pr-2">
                                <b-form-textarea class="textAreaInput" id="textarea" v-model="messageText" placeholder="Enter your message here..." rows="6" max-rows="6"></b-form-textarea>
                            </div>

                        </b-form-group>
                        <div class="sendBtnWrapper">
                            <b-button variant="none" class="sendBtn px-5">Send</b-button>
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
            messageText: ""
        }
    }
}
</script>

<style scoped>
.mailImage{
    max-height:250px;
}
.textAreaWrapper{
border:1px solid #ced4da;
border-radius:25px;
}
.textAreaInput{
border:none !important;
box-shadow:none;
}
.sendBtnWrapper {
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
}

.card {
    border: none;
}

.sendBtn {
    color: white;
    font-weight: bold;
    border-style: none;
   background-image: linear-gradient(to right, #37ecba 0%, #72afd3 100%);
   /* background-image: linear-gradient(to right, #4481eb 0%, #04befe 100%); */
    border-radius:25px 25px 0px 25px;
}

.sendBtn:hover {
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
}

.form-control {
    border-radius: 25px;
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
