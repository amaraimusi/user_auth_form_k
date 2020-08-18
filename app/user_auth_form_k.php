
<div id="uafk_app">

	<!-- ユーザー認証フォーム -->
	<div style="display:inline-block">
		<table style="">
		<tr><td>ユーザー（メールアドレス）:</td><td><input type="text" v-model="ent.email" /></td></tr>
		<tr><td>パスワード:</td><td><input type="password" v-model="ent.pw" /></td></tr>
		</table>
		<input type="button" value="ログイン" v-on:click="clickLoginBtn" class="btn btn-primary" />
		<div class="err_msg2">{{ent.res_msg}}</div>
		<pre v-if="ent.err_msg!='' " style="color:red; v-html="ent.err_msg"></pre>
		
		<div style="text-align:right;margin-top:30px">
		<button type="button" v-on:click="showResendDiv" class="btn btn-link" >パスワード設定/再送</button>
		</div>
		<div v-if="resend_pw_div_show==1" style="width:400px;font-size:0.8em;text-align:left">
		パスワードを設定する場合、もしくは忘れた場合、下の「パスワードを発行」ボタンを押してください。
		メールにてパスワード設定URLを送信します。<br>
		<div style="text-align:right">
		<button type="button" v-on:click="resendPw" class="btn btn-warning">パスワードを発行</button>
		</div>
		<div>
		<div v-if="smpu.res_msg!='' " style="font-size:1.6em;color:#1fa400;font-weight:normal;text-align:center">{{smpu.res_msg}}</div>
		<pre v-if="smpu.err_msg!='' " v-html="smpu.err_msg" style="color:red" ></pre>
		<pre v-if="smpu.dev_mail_msg!='' ">{{smpu.dev_mail_msg}}</pre>
		</div>
		</div>
	</div>

</div>