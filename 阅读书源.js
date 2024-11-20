//起点图目录地址
@js:
var qidian = baseUrl;

var s = java.ajax(`http://www.kudushu.org/modules/article/search.php?q=${book.name}`);
var shuming = java.getString('class.c_row.0@span.0@a.0@text',s,false);
var zuozhe = java.getString('class.c_row.0@class.c_tag.0@span.1@text',s,false);
var lianjie = java.getString('class.c_row.0@a.1@href',s,false);

java.log(`🍊书名${shuming}🍊作者${zuozhe}🍊链接${lianjie}`);

if (shuming==book.name&&zuozhe==book.author){
    java.log(`🍊获取成功`);
    lianjie;
}
else {
    qidian;
}


//js库
function geturl(){
    s = java.ajax('https://8xsk.org/');
    r = s.match(/href\=\"([^"]+)\"[^"]+电脑端/)[1];
    java.log("r🍊"+r+"🍊");
    source.setVariable(r);

    //注销前一行代码，可取消自动更新网址
}




//登录检查
n = String(source.getVariable());
if (!n) {
java.log("u🍊"+n+"🍊");
    s = java.ajax('https://8xsk.org/');
    r = s.match(/href\=\"([^"]+)\"[^"]+电脑端/)[1];
    //r = 'https://www.8xsk.com/';
    java.log("r🍊"+r+"🍊");
    source.setVariable(r);
    //注销前一行代码，可取消自动更新网址
}
result





n = source.getVariable();
if (n) {
java.log("u🍊"+baseUr+"🍊");
    s = java.ajax('https://8xsk.org/');
    r = s.match(/href\=\"([^"]+)\"[^"]+电脑端/)[1];
    java.log("r🍊"+r+"🍊");
    source.setVariable(r);
    //注销前一行代码，可取消自动更新网址
}





https://www.733330.xyz




if (baseUrl.startsWith('洛')) {
    geturl();
    '1';
}
else {'1'}

搜索
{{source.getVariable()}}/modules/article/search.php,{
    "method": "POST",
    "body": "ssearchtype=all&searchkey={{key}}&t_btnsearch="
  }






s = source.getVariable();

https://733330.xyz//modules/article/search.php,{
  "method": "POST",
  "body": "ssearchtype=all&searchkey={{key}}&t_btnsearch="
}



if(key.startsWith("zz")){
result="https://www.qidiantu.com/author/"+key.slice(2)}else{
result="https://www.qidiantu.com/book/"+key}
<js></js>


//登录地址
function login(){
    let nn = String(source.getVariable());
    if (!nn) {
        eval(String(source.loginCheckJs)); 
        nn = String(source.getVariable());
    }
    let url = nn+'/login.php';
    //cookie.removeCookie(url);
    let un = String(result['账号']);
    let pw = String(result['密码']);
    let time = new Date().getTime();
    body={
        'username': un,
        'password': pw,
        'act': 'login',
        'jumpreferer': '1',
        't_btnlogin' :'',
        'ajax_request': time
    }
    headers={
        'user-agent': ua,
        'referer': nn,
    }
    let option = {
        "method": "POST",
        "headers": JSON.stringify(headers),
        "body": JSON.stringify(body)
    }
    java.ajax(url +','+ JSON.stringify(option));
    let test = cookie.getKey(url, 'jieqiUserInfo');
    if (test != '') {
        java.toast('登录成功');
    }
    else {
        java.toast('登录失败');
    }
}
function web(){
    let nn = String(source.getVariable());
    if (!nn) {
        eval(String(source.loginCheckJs)); 
        nn = String(source.getVariable());
    }
    url = nn + "/login.php";
    java.startBrowser(url, '');
}





function remove(){
	cookie.removeCookie(source.key);
	java.toast('已退出登录');
	}

function Login(){
	let url = 'https://733330.xyz/login.php?do=submit&jumpurl=https%3A%2F%2F8xsk.com%2Fuserdetail.php';
	cookie.removeCookie(source.key);
	java.startBrowser(url, '');
	}
















