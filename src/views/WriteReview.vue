<template>
<body>
    <h1>회고록 등록</h1>
    <div class="writebox">
        <form>
            <div>회고록 제목<input type="text" v-model="title" name="title" class="text_field"></div>
            <div class="writer_form">작성자<input type="text" v-model="writer" class="writer">
                작성자 ID<input type="text" v-model="writer_id" class="writer_id"></div>

            <div class="contform">
                <div>느낀점 추가</div>
                <textarea v-model="cont" name="cont" class="text_field"></textarea>
            </div>
            <div>
            이미지 추가
              <input class="imgform_control" type="file" id="formFile">
            </div>
        </form>
    </div>
</body>
<footer>
    <div class="footer_right">
        <button class="add_btn" @click="write" @mouseover="hover = true" @mouseleave="hover = false" :class="{'add_btn-hover': hover}">
        <p>회고록 추가</p></button>
    </div>
</footer>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import data from '@/data';

export default {
  name: 'App',
  data () {
    return {
      data: data,
      title: '',
      writer: '',
      writer_id: '',
      cont: '',
      hover: false
    }
  },
  methods: {
    write () {
      this.data.push({
        title: this.title,
        writer: this.writer,
        writer_id: this.writer_id,
        cont: this.cont,
      })
      this.$router.push({path:'/MyReview'});
    }
    // fnAddProc () { // 등록 프로세스
    //   if (!this.title) {
    //     alert('제목을 입력해주세요')
    //     this.$refs.title.focus()
    //   }
    //   this.form = { // 얘가 백엔드로 전송될 데이터
    //     // board_code: this.board_code
    //     title: this.title,
    //     cont: this.cont,
    //     id: this.id
    //   }

    //   this.$axios.post('http://localhost:3000/api/board', this.form)
    //     .then((res) => {
    //       if (res.data.success) {
    //         alert('등록되었습니다.')
    //         this.fnAddProc()
    //       } else {
    //         alert('실행 중 실패하였습니다.<br> 다시 이용해주세요')
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }
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

.writer_form {
  margin-left: 35px;
}

.writer {
    font-size: 14px;
    padding: 10px;
    border: 1px solid gainsboro;
    width: 230px;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-right: 34px;
}

.writer_id {
    font-size: 14px;
    padding: 10px;
    border: 1px solid gainsboro;
    width: 230px;
    margin-left: 10px;
    margin-bottom: 10px;
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
    background-color: rgb(0,42,134);
    color:white;
    width: 200px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
}

/* hover */
.add_btn-hover {
    background-color: rgb(12, 59, 161);
}
</style>