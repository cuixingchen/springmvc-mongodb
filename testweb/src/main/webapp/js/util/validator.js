//扩展easyui表单的验证
//验证数字：^[0-9]*$ 
//验证n位的数字：^\d{n}$ 
//验证至少n位数字：^\d{n,}$ 
//验证m-n位的数字：^\d{m,n}$ 
//验证零和非零开头的数字：^(0|[1-9][0-9]*)$ 
//验证有两位小数的正实数：^[0-9]+(.[0-9]{2})?$ 
//验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$ 
//验证非零的正整数：^\+?[1-9][0-9]*$ 
//验证非零的负整数：^\-[1-9][0-9]*$ 
//验证非负整数（正整数 + 0） ^\d+$ 
//验证非正整数（负整数 + 0） ^((-\d+)|(0+))$ 
//验证长度为3的字符：^.{3}$ 
//验证由26个英文字母组成的字符串：^[A-Za-z]+$ 
//验证由26个大写英文字母组成的字符串：^[A-Z]+$ 
//验证由26个小写英文字母组成的字符串：^[a-z]+$ 
//验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$ 
//验证由数字、26个英文字母或者下划线组成的字符串：^\w+$ 
//验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。 
// 验证是否含有 ^%&',;=?$\" 等字符：[^%&',;=?$\x22]+ 
//验证汉字：^[\u4e00-\u9fa5],{0,}$ 
//验证Email地址：^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$ 
//验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$ 
//验证电话号码：^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。 
// 验证身份证号（15位或18位数字）：^\d{15}|\d{}18$ 
//验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12” 
//验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$ 正确格式为：01、09和1、31。 
// 整数：^-?\d+$ 
//非负浮点数（正浮点数 + 0）：^\d+(\.\d+)?$ 
//正浮点数 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$ 
//非正浮点数（负浮点数 + 0） ^((-\d+(\.\d+)?)|(0+(\.0+)?))$ 
//负浮点数 ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$ 
//浮点数 ^(-?\d+)(\.\d+)?$ 
$.extend($.fn.validatebox.defaults.rules, {
    //验证汉子
    CHS: {
        validator: function (value) {
            return /^[\u0391-\uFFE5]+$/.test(value);
        },
        message: '只能输入汉字'
    },
    //移动手机号码验证
    mobile: {//value值为文本框中的值
        validator: function (value) {
            var reg = /^1[3|4|5|8|9]\d{9}$/;
            return reg.test(value);
        },
        message: '输入手机号码格式不准确.'
    },
    //电话号码验证
    telPhone: {//value值为文本框中的值
        validator: function (value) {
            var reg = /^((\+?86)|(\(\+86\)))?\d{3,4}-\d{7,8}(-\d{3,4})?$/;
            return reg.test(value);
        },
        message: '输入电话号码格式不准确.'
    },
    //国内邮编验证
    zipcode: {
        validator: function (value) {
            var reg = /^[1-9]\d{5}$/;
            return reg.test(value);
        },
        message: '邮编必须是非0开始的6位数字.'
    },
    //用户账号验证(只能包括 _ 数字 字母) 
    account: {//param的值为[]中值
        validator: function (value, param) {
            if (value.length < param[0] || value.length > param[1]) {
                $.fn.validatebox.defaults.rules.account.message = '用户名长度必须在' + param[0] + '至' + param[1] + '范围';
                return false;
            } else {
                if (!/^[\w]+$/.test(value)) {
                    $.fn.validatebox.defaults.rules.account.message = '用户名只能数字、字母、下划线组成.';
                    return false;
                } else {
                    return true;
                }
            }
        }, message: ''
    },
    cphm:{
    	validator: function (value) {
            var reg=/^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
            return reg.test(value);
        },
        message: '输入的车牌号格式不正确'
    },
    sfzh:{
    	validator: function (value) {
    		// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
    		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
            return reg.test(value);
        },
        message: '输入的身份证号码格式不正确'
    },
    number:{
    	validator: function (value) {
    		var reg = /^[0-9]*$/ ;  
            return reg.test(value);
        },
        message: "请输入数字"
    },
    numberAF:{
    	validator: function (value) {
    		var reg = /^[0-9a-fA-F]{4,4}$/ ;  
//    		alert(reg.test(value));
            return reg.test(value);
        },
        message: "请输入4位16进制"
    }
})