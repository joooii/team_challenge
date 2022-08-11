<template>
<body>
    <h1>회고록 등록</h1>
    <div class="writebox">
        <form class="write_form">
                <div class="reviewtitle">회고록 제목<input type="text" v-model="title" name="title" class="text_field">
                </div>

            <div class="contform">
                <div>느낀점 추가</div>
                <textarea v-model="cont" name="cont" class="text_field"></textarea>
            </div>
            <div class="imgadd">
            이미지 추가
              <input class="imgform_control" type="file" id="formFile">
            </div>
            <p>{{title}}</p>
            <p>{{cont}}</p>
        </form>
    </div>
</body>
<footer>
    <div class="footer_right">
        <button class="add_btn"><a href="javascript:;" @click="fnAddProc"><p>회고록 추가</p></a></button>
        <!-- <router-link to="MyReview"><button class="makebtn"><p>회고록 추가</p></button></router-link> -->
        <!-- 추가 누르면 MyReview로 넘어감 -->
    </div>
</footer>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  data () {
    return {
      title: '',
      cont: '',
      id: 'admin',
      form: '' // form 데이터 전송
    }
  },
  method: {
    fnAddProc () { // 등록 프로세스
      if (!this.title) {
        alert('제목을 입력해주세요')
        this.$refs.title.focus()
      }
      this.form = { // 얘가 백엔드로 전송될 데이터
        // board_code: this.board_code
        title: this.title,
        cont: this.cont,
        id: this.id
      }
      // 백엔드 머 어쩌공 좀 더 자세히 공부
      this.$axios.post('http://localhost:3000/api/board', this.form)
        .then((res) => {
          if (res.data.success) {
            alert('등록되었습니다.')
            this.fnAddProc()
          } else {
            alert('실행 중 실패하였습니다.<br> 다시 이용해주세요')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color:white;
}
.writebox {
    margin-right: auto;
    margin-left: auto;
    padding: 20px;
    border: none;
    display: flex;
    justify-content: center;
    margin-right:70px;
}
.text_field {
    font-size: 14px;
    padding: 10px;
    border: 1px solid gainsboro;
    width: 600px;
    margin-bottom: 10px;
    margin-left:10px;
    margin-bottom: 10px;
}
.imgform_control {
    font-size: 14px;
    padding: 10px;
    width: 610px;
}
textarea {
    resize: vertical;
    height: 150px;
}
.contform {
    display: flex;
}

footer {
    height: 80px;
    bottom: 0px;
    position:absolute;
    right:5%;
}

.footer_right {
    border: none;
}

.add_btn {
    border: none;
    background-color: tomato;
    color:white;
    width: 200px;
    font-size: 14px;
}
</style>
