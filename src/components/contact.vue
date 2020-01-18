<template>
<b-container>
    <b-row>
        <b-col cols="12">
            <h1 class="sectionHeader skillsHeader ml-4 my-5">Get in touch</h1>
        </b-col>
        <b-col data-aos="fade-right">
            <b-card class="shadow-lg">
                <b-row>
                    <b-col data-aos="fade-right" data-aos-delay="400" cols="12" lg="6" class="flexCenter">
                        <b-img fluid class="mailImage" src="/img/AdobeStock_266976905_Preview.png"></b-img>
                        <!-- <i class="far fa-envelope-open fa-4x"></i> -->
                    </b-col>
                    <b-col cols="12" md="10" offset-md="1" lg="5" offset-lg="1">
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
    },
    mounted() {
        import('aos').then(AOS => AOS.init({
            once: false,
            delay: 300,
            mirror: true,
            anchorPlacement: 'center-bottom',

        }));
    },
    destroyed() {
        AOS.refresh();
    },
}
</script>

<style scoped>
.sectionHeader {
    background-color: #5e5e5e;
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
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    border-radius: 25px 25px 0px 25px;
     -webkit-box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.75);
}

.sendBtn:hover {
transform: scale(1.1);
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
