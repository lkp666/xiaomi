<?php
header("content-type:text/html;charset=utf-8");

$name = $_GET["name"];
$pwd = $_GET["pwd"];
//连接数据源
$con = mysqli_connect("localhost","root","");
//连接数据库
mysqli_select_db($con,"fanke");
//设置字符编码
mysqli_query($con,"set names utf8");
//创建一个查询语句
$selectsql = "select * from register";
//查询语句返回的是一个结果集

$result = mysqli_query($con,$selectsql);

$flag = false;

while($arr = mysqli_fetch_array($result )){
		if($name == $arr["name"]){
		$flag = true;
		
		if($pwd == $arr["pwd"]){//相等 登录成功
			echo "<script>alert('登录成功');location.href='../html/index.html'</script>";
		}else{
			echo "<script>alert('登录失败');location.href = '../html/login.html'</script>";
		}
		break;
	}	
}




?>