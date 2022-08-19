<!-- 6-1페이지에서 내용 입력 받아야 함 -->
<template>
<body>
    <h1>회고록</h1>
    <div id="review">
        <form>
            <table class="tbadd">
                <tr class="tbtitle">
                    <th>제목</th>
                    <th>{{title}}</th>
                    <!-- 제목은 굵은 글씨로 가도 ㄱㅊ을듯?-->
                </tr>
                <tr class="tbauthor">
                    <th>작성자</th>
                    <td></td>
                </tr>
                <tr class="tbauthor_id">
                    <th>작성자 ID</th>
                    <td></td>
                </tr>
                <tr class="tbcont">
                    <th>느낀점</th>
                    <td class="txt_cont" v-html="cont"></td>
                </tr>
                <tr class="tbimg">
                    <th>이미지</th>
                    <td class="txt_img"><img src="../assets/logo.png" alt=""></td>
                </tr>
                <!-- 이미지는 경로 설정으로 나타내기 -->
            </table>
        </form>
    </div>
    <div class="comment">
        <div class="comment_add">
            <div><th>댓글</th></div>
            <textarea class="comment_write" placeholder="댓글을 입력하세요."></textarea>
            <button class="add_btn" @click="createComment" @mouseover="hover = true" @mouseleave="hover = false"
            :class="{'add_btn-hover': hover}">댓글달기</button>
        </div>
    </div>
    <div class="category">
        <button class="category_btn" @mouseover="hover2 = true" @mouseleave="hover2 = false"
        :class="{'category_btn-hover': hover2}">목록</button>
    </div>
</body>

</template>

<script>
/* eslint-disable */
export default {
    data () {
        return {
            title: '',
            cont: '',
            view: '',
            commentWrite: '',
            hover: false,
            hover2: false
        }
    }
}

</script>

<style scoped>
#review {
    margin-left:20%;
}
table {
    width: 75%;
}
.tbadd {
    border-top:1px solid #888;
    /* border-bottom:1px solid #888; */
}

.tbadd th, .tbadd td {
    border-bottom:1px solid gainsboro; 
    padding:5px 0;
}

.tbadd th {
    text-align: left;
}
.tbadd td {
    padding:10px 10px; 
    box-sizing:border-box;
    text-align:left;
}

.tbadd.tbtitle {
    margin-top:10px;
}

.tbadd.tbauthor {
    display: flex;
}

.tbadd td.txt_cont {
    height:150px; 
    vertical-align:top;
}

.tbadd td.txt_img {
    height: auto;
}
.comment {
    width: 60%;
    margin-left:20%;
}
.comment_add {
    display: flex;
    margin-top:5px;
}
.comment_write {
    margin-left:40px;
    margin-right:15px;
    resize:none;
    width:80%;
    height:80px;
    white-space: pre-line;
}
.add_btn {
    border:none;
    background-color: rgb(0,42,134);
    color: white;
    cursor: pointer;
}

.category_btn {
    width: 80px;
    height: 40px;
    margin-left: 730px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    background-color: rgb(232, 232, 232);
}
/* hover */
.add_btn-hover {
    background-color: rgb(12, 59, 161);
}
.category_btn-hover {
    background-color: gainsboro;
}
</style>