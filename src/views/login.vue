<!-- eslint-disable -->
<template>
    <header>
        <h1>로그인</h1>
        <p class="login_info" style="text-align:center;">아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
    </header>

    <body>
      <div id="login_form">
        <div>
          <label for="id">아이디</label>
          <input type="text" class="text_field" id="id" v-model="user.userid" placeholder="아이디">
        </div>

        <div>
          <label for="password">비밀번호</label>
          <input type="password" class="text_field" id="password" v-model="user.password" placeholder="비밀번호">
        </div>

        <button @click="login" @mouseover="hover = true" @mouseleave="hover = false" :class="{'submit_btn-hover': hover}"
        class="submit_btn" value="로그인">로그인</button>

          <div>
            <router-link to="/SignUp">
              <button class="login_join" @mouseover="hover2 = true" @mouseleave="hover2 = false" :class="{'login_join-hover2': hover2}">회원가입</button>
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
      user: {
        userid: '',
        password: ''
      },
      hover: false,
      hover2: false
    }
  },
  methods: {
    login: function (event) {
      this.$http.post('/api/users/login', {
        user: this.user
      })
      .then(
        (res) => {  //로그인 성공
          alert(res.data.message);
        },
        (err) => { // error 를 보여줌
          alert('Login failed! please check your id or password');
      })
      .catch(err => {
        alert(err);
      })
    },
    // 위는 블로그대로 한거
    
    login () {
      if (this.user.userid === '') {
        alert('아이디를 입력해주세요.');
        // this.$refs.idInput.focus();
        return false;
      }
      else if (this.user.password === '') {
        alert('비밀번호를 입력해주세요.');
        // this.$refs.pwInput.focus();
        return;
      }
        alert('로그인 되었습니다.');
        this.$router.push({name:'3-0'});
        // input 값 모두 입력했을시에만 화면 넘어감
  }
}
}
</script>

<style scope>
header {
  margin-top: 80px;
}

label {
  /* text-align: left; */
  float: left;
  margin-bottom: 5px;
}

.login_info {
    font-size: 13px;
}
#login_form {
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
    margin-bottom: 20px;
}
.submit_btn {
    font-size: 14px;
    border: none;
    padding: 10px;
    width: 320px;
    background-color: rgb(0,42,134);
    margin-bottom: 15px;
    color: white;
    cursor: pointer;
}
.login_join{
    font-size: 14px;
    border: none;
    padding: 10px;
    width: 320px;
    background-color: rgb(0,42,134);
    color: white;
    cursor: pointer;
}
/* hover 구현 */
.submit_btn-hover {
  background-color: rgb(12, 59, 161);
}
.login_join-hover2 {
  background-color: rgb(12, 59, 161);
}
</style>
