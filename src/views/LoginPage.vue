<template>
    <header>
        <h1>로그인</h1>
        <p class="login_info" style="text-align:center;">아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
    </header>

    <body>
        <div class="login_form">
            <form name="loginForm" style="text-align:center;">
                <input type="text" v-model="userId" name="idInput" class="text_field" placeholder="아이디" ref="idInput" /><br>
                <input type="password" v-model="userPassword" name="pwInput" class="text_field" placeholder="비밀번호" ref="pwInput" /><br>
                <div class="submit_form">
                    <input type="submit" @click="loginSubmit" class="submit_btn" value="로그인">
                </div>
            </form>
            <div>
              <router-link to="/JoinPage">
                <button class="login_join">회원가입</button>
              </router-link>
              <!-- 회원가입 누르면 회원가입창 이동 -->
            </div>
        </div>
    </body>
</template>

<script>
/* eslint-disable */
// import { loginUser } from '백엔드위치'

export default {
  data () {
    return {
      userId: '',
      userPassword: ''
    }
  },
  methods: {
    loginSubmit () {
      if (this.userId === '') {
        alert('아이디를 입력해주세요.');
        this.$refs.idInput.focus();
        return false;
      }
      else if (this.userPassword === '') {
        alert('비밀번호를 입력해주세요.');
        this.$refs.pwInput.focus();
        return;
      }
        alert('로그인 되었습니다.');
        this.$router.push({name:'home'});
        // input 값 모두 입력했을시에만 화면 넘어감
  }
}
}
</script>
<style scope>
.login_info {
    font-size: 13px;
}

.login_form {
    width: 300px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px;
    border: none;
}

.text_field {
    font-size: 14px;
    padding: 10px;
    border: 1px solid gainsboro;
    width: 300px;
    margin-bottom: 10px;
}

.submit_btn {
    font-size: 14px;
    border: none;
    padding: 10px;
    width: 320px;
    background-color: tomato;
    margin-bottom: 10px;
    /* margin-left: 100px; */
    color: white;
    /* border-radius: 10px; */
}

.login_join{
    font-size: 14px;
    border: none;
    padding: 10px;
    width: 320px;
    background-color: tomato;
    /* margin-left: 10px; */
    color: white;
}
</style>
