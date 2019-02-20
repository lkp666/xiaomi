window.onload = function() {
    $(function() {
        $(".span01").click(function() {
            $(".hide").toggle();
        })

    })

    $(".inp01").blur(function() {
        if ($(".inp01").val() == "") {
            alert("验证码不能为空")
        } else if ($(".inp01").val() == "qfzuz") {
            alert("验证码输入正确")
        } else {
            alert("验证码输入错误，请重新输入")
        }
    })

    $(".name").blur(function() {
        var reg = /^1[35789]\d{9}$/;
        if ($(".name").val() == "") {
            alert("手机号不能为空")
        } else if (reg.test($(".name").val())) {
            alert("手机号输入正确")
        } else {
            alert("手机号输入错误，请重新输入")
        }
    })

    $(".yzm").blur(function() {
        if ($(".yzm").val() == "") {
            alert("验证码不能为空")
        } else if ($(".yzm").val() == "521125") {
            alert("验证码输入正确")
            $(".hide").hide();

        } else {
            alert("验证码输入错误，请重新输入")
        }
    })

    $(".pwd").blur(function() {
        var reg = /^\w{6,15}$/;
        if ($(".pwd").val() == "") {
            alert("密码不能为空")
        } else if (reg.test($(".pwd").val())) {
            alert("密码格式正确")
        } else {
            alert("密码格式错误，请输入6-15位的密码，且为数字或字母")
        }

        $(".pwd2").blur(function() {
            if ($(".pwd2").val() == "") {
                alert("内容不能为空")
            } else if ($(".pwd2").val() == $(".pwd").val()) {
                alert("恭喜验证成功")
            } else {
                alert("两次密码输入不一致，请重新输入")
            }
        })


    })







}