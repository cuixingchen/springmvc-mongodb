function out(){
	$.ajax({
		url : "rest/user/9",
		type : "post",
		dataType : "json",
//		data : {},
		async : false,
		success : function(results) {
			if (results.state == 200) {
				location.href = 'login.html';
			} else {
				 hdsxUtil.Tools.Show(results.msg, 3000);
			}
		},
		error : function(e) {
			hdsxUtil.Tools.messager({
				msg:"退出异常",
				timeout:3000,
				title:'<font color="white">警告</font>',
			});
//			 hdsxUtil.Tools.Show("退出异常", 3000);
		}
	});
}
$(function() {

	 $('.easyui-layout').css('visibility', 'visible');
	    $('.north-nav ul li a').click(function() {
	        $(".north-nav ul li a").removeClass("selected");
	        $(this).addClass("selected");
	    });
    $('#form_update').form({
        url : "rest/user/10",
        onSubmit : function(data) {
//        	var oldPsw = data.password;
        	var psw1 = document.getElementById("newPsw1").value;
        	var psw2 = document.getElementById("newPsw2").value;
        	var username = document.getElementById("username").value;
        	if(psw1==null||''==psw1||psw2==null||''==psw2){
        		hdsxUtil.Tools.messager({
					msg:"密码不能为空！",
					timeout:3000,
					title:'<font color="white">用户信息修改</font>',
				});
        		return false;
        	}else if(psw1 != psw2){
        		hdsxUtil.Tools.messager({
					msg:"两次密码输入不一致,请重新输入！",
					timeout:3000,
					title:'<font color="white">用户信息修改</font>'
				});
        		$("#newPsw1").val("");
        		$("#newPsw2").val("");
    			return false;
        	}else if(username==null || ''==username){
        		hdsxUtil.Tools.messager({
					msg:"用户名不能为空！",
					timeout:3000,
					title:'<font color="white">用户信息修改</font>'
				});
        		$("#username").val("");
    			return false;
        	}
        },
        success : function(result) {
        	var obj = $.parseJSON(result);
            if (obj.state == 200) {
            	hdsxUtil.Tools.messager({
					msg:"修改信息成功！",
					timeout:3000,
					title:'<font color="white">用户信息修改</font>',
				});
//                hdsxUtil.Tools.Show("修改成功！", 3000);
                $('#dlg_update').dialog('close');
                $('#table').datagrid("reload");
            } else {
            	hdsxUtil.Tools.messager({
					msg:"旧密码输入错误，请重新输入",
					timeout:3000,
					title:'<font color="white">用户信息修改</font>'
				});
            	$("#oldPsw").val("");
//                hdsxUtil.Tools.Show("修改失败，请稍后再试！", 3000);
            }
        },
    });
});
function updateUser(){
//	$('#table').datagrid("selectRow",index);
//	var row=$('#table').datagrid("getSelected");
//	if (!row) {
//        $.messager.alert('警告', "请选择要修改的数据！");
//        return;
//    }
    $('#dlg_update').css("display", "block");
    $('#form_update').form('clear');
//    $("#form_update").form("load", row);
//    $("#form_update textarea").attr("readOnly", false);
    $('#dlg_update').dialog({
    	resizable : false,
    	title :'<font color="white" size="3">修改密码</font>',
        buttons : [ {
            text : '保存',
            handler : function() {
                $('#form_update').submit();
            }
        }, {
            text : '取消',
            handler : function() {
                $('#dlg_update').dialog('close');
            }
        } ]
    });
	
}
function getUsername(obj){
	$.ajax({
		url : "rest/user/11",
		type : "post",
		dataType : "json",
		data : {username:obj.value},
		async : false,
		success : function(results) {
			var count=parseInt(results.result);
			if(count>0){
				hdsxUtil.Tools.messager({
					msg:"用户名重复请重新输入!",
					timeout:3000,
					title:'<font color="white" size="3">用户信息修改</font>'
				});
//				hdsxUtil.Tools.Show("用户名重复请重新输入！", 3000);
				$("#username").val("");
			}
		},
		error : function(e) {
			hdsxUtil.Tools.messager({
				msg:"出现异常",
				timeout:3000,
				title:'<font color="white" size="3">警告</font>',
			});

		}
	});
}