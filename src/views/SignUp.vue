<template>
    <header>
        <h1>회원가입</h1>
        <p class="join_info" style="text-align:center;">빈칸을 채운 후, 가입하기 버튼을 클릭해 주세요.</p>
    </header>

<body>
    <div class="login_form">
        <form @submit.prevent="submitForm">
            <div class="idform">
                <label for="id">아이디</label>
                <input type="text" class="text_field" v-model="user.userid" placeholder="아이디" @blur="checkDuplicate" />

                <div class="idconfirm">
                    <button class="idconfirm_chk" :click="doubleChk">아이디 중복 확인</button>
                    <div class="idconfirm_txt" v-if="doubleId">이미 사용중인 아이디입니다.</div>
                </div>
            </div>

            <div class="pwform">
                <label for="password">비밀번호</label>
                <input type="password" class="text_field" v-model="user.password" placeholder="비밀번호" />
            </div>

            <div class="nameform">
                <label for="name">이름</label>
                <input type="text" class="text_field" v-model="user.name" placeholder="이름" />
            </div>
<!-- 이름의 v-model은 블로그와 다름(user. 추가) -->
            <div>
                <button :click="signUp" @mouseover="hover = true" @mouseleave="hover = false" :class="{'submit_btn-hover': hover}"
                class="submit_btn" type="submit">가입하기</button>
            </div>
        </form>
    </div>
</body>
</template>

<script>
/* eslint-disable */
// import { response } from 'express';
import axios from 'axios';

export default {
    name: 'SignUp',
    data () {
        return {
            user: {
                userid: '',
                idConfirm: '',
                password: '',
                name: '',
                doubleId: false
            },
            hover: false
        }
    },
    methods: {
        signUp: function (event) {
        this.$http.post('/api/users/signUp', { 
        user: this.user
        })
        .then((res) => {
        if (res.data.success == true) {
            alert(res.data.message);
            this.$router.push('/login') 
        }
        if (res.data.success == false) {
            alert(res.data.message);
        }
        })
        .catch(function (error) {
        alert('error')
        })  // 얘가 백엔드랑 연결시킬 수 있는 거
    },

// 아래는 안쓸거같음
    submitForm () {
        if (this.user.name === '' || this.user.userid === '' || this.user.password === '') {
            // if (this.user === '') {
            alert ('빈칸을 모두 입력해주세요.');
            return;
        }
            alert ('회원가입에 성공하였습니다.');
            this.$router.push({name:'Login'});
        // input 값 모두 입력했을시에만 화면 넘어감
    },
    doubleChk () {
        this.user.doubleId = true;
    }
    // 평소에는 안나와있다가 중복체크 클릭 시 나오게 끔 구현은 했는데
    // 백엔드랑 연결해서 다시 써야하긴 할 것 같음
    }
}

</script>

<style scoped>
header {
    margin-top:80px;
}

.join_info {
    font-size: 13px;
    margin-bottom: 20px;
}
label {
    float:left;
    margin-bottom: 5px;
}
.login_form {
    width: 300px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
    border: none;
}
.idconfirm {
    display: flex;
    /* flex-direction: column; */
}
.idconfirm_chk {
    border:none;
    margin-bottom:10px;
    margin-right: 7px;
    height: auto;
    flex-direction: row;
}
.idconfirm_txt {
    font-size:14px;
    flex-direction: row;
}

.text_field {
    font-size: 14px;
    padding: 10px;
    border: 1px solid gainsboro;
    width: 300px;
    margin-top: 5px;
    margin-bottom: 5px;
    /* flex-direction: row; */
}
.submit_btn {
    font-size: 14px;
    border: none;
    padding: 10px;
    width: 320px;
    background-color: rgb(0,42,134);
    margin-top: 10px;
    color: white;
    cursor: pointer;
}
/* hover */
.submit_btn-hover {
    background-color: rgb(12, 59, 161);
}
</style>