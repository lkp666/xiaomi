<?php
	header("content-type:text/html;charset=utf-8");

	$name = $_GET["name"];
	$pwd = $_GET["pwd"];
	//连接数据源
	$con = mysqli_connect("localhost","root","");
	//连接数据库
	//mysqli_select_db($con,"studentsys");
	mysqli_select_db($con,"fanke");
	
	//设置字符编码
	mysqli_query($con,"set names utf8");
	
	//创建一个查询语句
	$selectsql = "select name from register";
	
	//查询语句返回的是一个结果集
	$row = mysqli_query($con,$selectsql);
	
	//表示用户名不存在
	$flag = false;
	
	/*while($resultArr = mysqli_fetch_array($row)){
	if($name == $resultArr["name"]){
		$flag = true;
		break;
	}
}*/
	while($resultArr = mysqli_fetch_array($row)){
		if($name == $resultArr["name"]){
			$flag = true;
			break;
		}
	}
	
	if($flag){//表示用户名已存在
		echo "<script>alert('用户名已存在，请重新输入');location.href = '../html/register.html'</script>";
	}else{//表示用户名不存在
		
		$sql = "insert into register (name,pwd) values ('$name','$pwd')";
		$final = mysqli_query($con,$sql);
		
		if($final){
			echo"<script>alert('注册成功');location.href = '../html/login.html'</script>";
		}else{
			echo"<script>alert('注册失败，请重新注册');location.href = '../html/register.html'</script>";
		}
	
	}
	
	
	
?>