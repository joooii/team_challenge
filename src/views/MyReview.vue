<template>
<h1>회고록</h1>
<div>
    <table v-for="value in data" :key="value">
        <colgroup>
            <col width="8%">
        </colgroup>
        <tr>
            <th>제목</th>
            <td>{{value.title}}</td>
        </tr>
        <tr>
            <th>작성자</th>
            <td>{{value.writer}}</td>
        </tr>
        <tr>
            <th>작성자 ID</th>
            <td>{{value.writer_id}}</td>
        </tr>
        <tr>
            <th>느낀점</th>
            <td class="txt_cont">{{value.cont}}</td>
        </tr>
        <tr class="img">
            <th>이미지</th>
            <td><img src="" alt=""></td>
        </tr>
    </table>
</div>

<div class="comment">
        <div class="comment_add">
            <!-- <div> -->
                <th>댓글</th>
            <!-- </div> -->
            <textarea class="comment_write" placeholder="댓글을 입력하세요."></textarea>
            <button class="add_btn" @click="createComment" @mouseover="hover = true" @mouseleave="hover = false"
            :class="{'add_btn-hover': hover}">댓글달기</button>
        </div>
    </div>
    <div class="category">
        <button class="category_btn" @mouseover="hover2 = true" @mouseleave="hover2 = false"
        :class="{'category_btn-hover': hover2}">목록</button>
    </div>
</template>

<script>
/* eslint-disable */
import data from '@/data'

export default {
    name: 'MyReview',
    data () {
        return {
            data: data,
            hover: false,
            hover2: false
        }
    }
}
</script>

<style scoped>
table {
    border-top:1px solid #888;
    margin-left: 250px;
}

table th, table td {
    border-bottom:1px solid #eee; 
    padding:5px 0;
}

table td {
    padding:10px 10px;
    box-sizing:border-box;
    text-align:left;
}
table td.txt_cont {
    height:150px;
    vertical-align:top;
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