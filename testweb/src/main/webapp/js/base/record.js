$(function() {
    $('#table').datagrid({
        fit           : true,
        fitColumns    : true,
        border        : false,
        loadMsg       : '正在加载数据，请稍候...',
        url           : '../../rest/user/4',
        rownumbers    : true,
        autoRowHeight : true,
        striped       : true,
        pagination    : true,
        fitColumns    : true,
        pageSize      : 15,
        pageList      : [ 10, 15, 20, 25, 30 ],
        columns : [ [
//            { field : 'ck', checkbox : true },
            { field : 'username', title : '用户名', width: 1 },
            { field : 'jsms', title : '角色', width: 1
            },
            { field : 'scjsj', title : '创建时间', width: 1 }
        ] ],
        toolbar : [ {
            text : '添加',
            iconCls : 'icon-add',
            handler : function() {
                showAdd();
            }
        }, {
            text : '修改',
            iconCls : 'icon-edit',
            handler : function() {
                showUpdate();
            }
        }, {
            text : '删除',
            iconCls : 'icon-remove',
            handler : function() {
                showRemove();
            }
        } ]
    });

    $('#div_toolbar').appendTo('.datagrid-toolbar');

    $("body").css("visibility", "visible");

    $(".enterDu").keyup(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            event.stopPropagation();
            query();
        }
    });

    $('#form_add').form({
        url : "../../rest/user/1",
        onSubmit : function(param) {
        	param.pw='123456'
        },
        success : function(result) {
            var obj = $.parseJSON(result);
            if (obj.state == 200) {
            	hdsxUtil.Tools.messager({
					msg:"添加新用户成功！",
					timeout:3000,
					title:'<font color="white">用户添加</font>'
				});
//                hdsxUtil.Tools.Show("保存成功！", 3000);
                $('#dlg_add').dialog('close');
                $('#table').datagrid("reload");
            } else {
            	hdsxUtil.Tools.messager({
					msg:"添加新用户失败，请稍后再试！",
					timeout:3000,
					title:'<font color="white">用户添加</font>'
				});
//                hdsxUtil.Tools.Show("保存失败，请稍后再试！", 3000);
            }
        },

    });

    $('#form_update').form({
        url : "../../rest/user/3",
        onSubmit : function() {

        },
        success : function(result) {
            var obj = $.parseJSON(result);
            if (obj.state == 200) {
            	hdsxUtil.Tools.messager({
					msg:"修改用户信息成功！",
					timeout:3000,
					title:'<font color="white">用户信息修改</font>'
				});
//                hdsxUtil.Tools.Show("修改成功！", 3000);
                $('#dlg_update').dialog('close');
                $('#table').datagrid("reload");
            } else {
            	hdsxUtil.Tools.messager({
					msg:"修改用户信息失败，请稍后再试！",
					timeout:3000,
					title:'<font color="white">用户信息修改</font>'
				});
//                hdsxUtil.Tools.Show("修改失败，请稍后再试！", 3000);
            }
        },
    });
});

function query() {
    $('#table').datagrid("load", {
        username : $.trim($("#username").val())
    });
}

function showAdd() {}

function showUpdate() {}

function showRemove() {
    var rows = $('#table').datagrid("getSelections");
    if (!rows || rows.length == 0) {
        $.messager.alert('警告', "请选择要修改的数据！");
        return;
    }
    $('#dlg_remove').css("display", "block");
    var ids = "";
    for (var i = 0; i < rows.length; i++) {
        ids += rows[i].id + ",";
    }
    ids = ids.substring(0, ids.length - 1);
    $('#dlg_remove').dialog({
    	title : '<font color="white">用户删除</font>',
    	resizable : false,
        buttons : [ {
            text : '删除',
            handler : function() {
                $.ajax({
                    type : "POST",
                    url : "../../rest/user/2",
                    cache : false,
                    dataType : 'json',
                    data : "id=" + ids,
                    success : function(result) {
//                        var obj = $.parseJSON(result);
                    	
                        if (result.state == 200) {
                        	hdsxUtil.Tools.messager({
            					msg:"删除用户信息成功！",
            					timeout:3000,
            					title:'<font color="white">用户删除</font>'
            				});
//                            hdsxUtil.Tools.Show("删除成功！", 3000);
                        } else {
                        	hdsxUtil.Tools.messager({
            					msg:"删除用户信息失败，请稍后再试！",
            					timeout:3000,
            					title:'<font color="white">用户删除</font>'
            				});
//                            hdsxUtil.Tools.Show("删除失败，请稍后再试！", 3000);
                            return;
                        }
                        $('#dlg_remove').dialog('close');
                        $('#table').datagrid("reload");
                    },
                    error : function() {
                    	hdsxUtil.Tools.messager({
        					msg:"系统发生异常，请联系系统管理员！",
        					timeout:3000,
        					title:'<font color="white">警告</font>'
        				});
//                        hdsxUtil.Tools.Show("系统发生异常，请联系系统管理员！", 3000);
                    }
                });
            }
        }, {
            text : '取消',
            handler : function() {
                $('#dlg_remove').dialog('close');
            }
        } ]
    });
}