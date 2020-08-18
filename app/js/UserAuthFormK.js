
/**
 * ユーザー認証フォームK
 * @version 1.0.0
 * @since 2020-8-17
 * @auther kenji uehara
 * @lisence MIT
 */
class UserAuthFormK{
	
	/**
	 * コンストラクタ
	 * @param {} param
	 *  - string app_slt Vue用app区分要素のセレクタ。 デフォルト⇒#uafk_app
	 *  
	 */
	constructor(param){
		
		param = this._setParamIfEmpty(param);
		
		let ent = {
				id:0, 			// ユーザーIDではない。		DBテーブルにおけるid。
				email:'',		// メールアドレス。			ユーザー名またはユーザーIDを兼ねる。
				pw_hash:'', // パスワードハッシュ。		パスワードの暗号化文字列。セキュリティ上、新規登録時以外はパスワードをそのままの形で扱わないための仕組み。
				pw:'', 		// パスワード。
				hash:'', 		// ハッシュコード。				メールを介した処理で、”手形”としての役割を持つ。
				fw:'laravel7', // フレームワーク種別。	対応フレームワークはcakephp2,laravel7。
				form_mode:'none', // フォームモード。			現在のフォームの状態。フォームモードの種類⇒none, new_form, repw_form, res_form, auth_form, sendmail_form
				res_msg:'', // レスポンスメッセージ
				err_msg:'', // エラーメッセージ
				
		}
		
		 // パスワード設定URL・メール送信のパラメータ
		let smpu ={
				res_msg:'', // レスポンスメッセージ
				err_msg:'', // エラーメッセージ
				dev_mail_msg:'', // 開発環境用メールメッセージ
			};
		

		this.app = new Vue({
				el: param.app_slt,
				data: {
					ent:ent,
					resend_pw_div_show:0, // パスワード再発行区分・表示フラグ
					smpu:smpu, // パスワード設定URL・メール送信のパラメータ
				},
				methods: {
					clickLoginBtn: () => {this.clickLoginBtn()}, 			// ログインボタンをクリック。
					showResendDiv: () => {this.showResendDiv()}, 	// パスワード再発行区分を表示する。
					resendPw:() => {this.resendPw()},						// 「パスワードを発行」ボタンを押下
				},
			});
		
		this.param = param;
		
	}
	
	/**
	 * If Param property is empty, set a value.
	 */
	_setParamIfEmpty(param){
		
		if(param == null) param = {};

		if(param['app_slt'] == null) param['app_slt'] = '#uafk_app'; // vueのapp要素のidセレクタ
		if(param['main_content_slt'] == null) param['main_content_slt'] = null; // メインコンテンツ。	認証成功時に表示するコンテンツの要素セレクタ。
		

		return param;
	}
	
	
	/**
	 * ログインボタンをクリック
	 */
	clickLoginBtn(){
		console.log('ログインボタンをクリック');//■■■□□□■■■□□□)
	} 
	
	/**
	 * パスワード再発行区分を表示
	 */
	showResendDiv(){
		console.log('パスワード再発行区分を表示');//■■■□□□■■■□□□)
	} 
	
	
	/**
	 *  「パスワードを発行」ボタンを押下
	 */
	resendPw(){
		console.log('「パスワードを発行」ボタンを押下');//■■■□□□■■■□□□)
	}

	
	// Check empty.
	_empty(v){
		if(v == null || v == '' || v=='0'){
			return true;
		}else{
			if(typeof v == 'object'){
				if(Object.keys(v).length == 0){
					return true;
				}
			}
			return false;
		}
	}
}