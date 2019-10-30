<template>
    <div>
      <div>
        <img src="@/assets/img/login1.jpg" class="img-responsive" alt="Responsive image" style="height: 100%">
      </div>
      <div style="margin-top: -100%;width: 80%;color: white;margin-left: 10%;" class="form-inline">
        <div class="form-group">
          <label for="userName" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-10">
            <input type="text" v-model="userName" class="form-control" id="userName" placeholder="请输入用户名">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-10">
            <input type="password" v-model="password" class="form-control" id="inputPassword3" placeholder="请输入密码">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button style="width: 40%;" @click="login" class="btn btn-info">登录</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
        name: "Login",
        data(){
          return{
            userName:'',
            password:'',
          }
        },
        methods:{
          login(){
              var data={
                'userName':this.userName,
                'password':this.password,
              };
              var url='http://localhost:8089/fangDa/login';
              this.$ajax(url,data,'GET').then(function(value){
                console.log(value);
              })
          }
        }
    }
</script>

<style>

</style>
