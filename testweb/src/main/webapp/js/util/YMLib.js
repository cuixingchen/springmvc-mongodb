var Libs = {
    projectName:"payment",
    service:"localhost:8080",
    version : 'v1.0',
    debug : true,
    Debug : {
      Test : function(){
        $.post('page/index/test/test.jsp',{action:'add'},function(result){
          var tmp = $("<div></div>").html(result);
          var data = tmp.find("#testform").html();
          tmp.remove();
          alert(data);
        },'html');
      }
    },
    ID : function(){
      var _yyyy = new Date().getFullYear();
        var _MM = new Date().getMonth() + 1;
        var _dd = new Date().getDate();
        var _hh = new Date().getHours();
        var _mm = new Date().getMinutes();
        var _ss = new Date().getSeconds();
        var _sss = new Date().getMilliseconds();
        _MM = _MM < 10 ? '0' + _MM : _MM;
        _dd = _dd < 10 ? '0' + _dd : _dd;
        _hh = _hh < 10 ? '0' + _hh : _hh;
        _mm = _mm < 10 ? '0' + _mm : _mm;
        _ss = _ss < 10 ? '0' + _ss : _ss;
        return _yyyy  + _MM  + _dd + _hh +  _mm  + _ss + _sss;
    },
    /**
     * 功能性函数：日期类
     */
    Date : {
      /**
       * 获取客户端当前时间
       * 参数为前一小时时间
       * @param dataval
       * @returns {String}
       */
      getNowDateTime : function(dataval){
        if(arguments.length != 0){
            var _yyyy = new Date().getFullYear();
            var _MM = new Date().getMonth() + 1;
            var _dd = new Date().getDate();
            var _hh = new Date().getHours() - dataval;
            var _mm = new Date().getMinutes();
            var _ss = new Date().getSeconds();
            _MM = _MM < 10 ? '0' + _MM : _MM;
            _dd = _dd < 10 ? '0' + _dd : _dd;
            _hh = _hh < 10 ? '0' + _hh : _hh;
            _mm = _mm < 10 ? '0' + _mm : _mm;
            _ss = _ss < 10 ? '0' + _ss : _ss;
            return _yyyy + '-' + _MM + '-' + _dd + ' ' + _hh + ':' + _mm + ':' + _ss;
        }else{
            var _yyyy = new Date().getFullYear();
            var _MM = new Date().getMonth() + 1;
            var _dd = new Date().getDate();
            var _hh = new Date().getHours();
            var _mm = new Date().getMinutes();
            var _ss = new Date().getSeconds();
            _MM = _MM < 10 ? '0' + _MM : _MM;
            _dd = _dd < 10 ? '0' + _dd : _dd;
            _hh = _hh < 10 ? '0' + _hh : _hh;
            _mm = _mm < 10 ? '0' + _mm : _mm;
            _ss = _ss < 10 ? '0' + _ss : _ss;
            return _yyyy + '-' + _MM + '-' + _dd + ' ' + _hh + ':' + _mm + ':' + _ss;
        }
      },
      getNowDT : function(dataval){
        if(arguments.length != 0){
            var _yyyy = new Date().getFullYear();
            var _MM = new Date().getMonth() + 1;
            var _dd = new Date().getDate() + dataval;
            var _hh = new Date().getHours();
            var _mm = new Date().getMinutes();
            var _ss = new Date().getSeconds();
            _MM = _MM < 10 ? '0' + _MM : _MM;
            _dd = _dd < 10 ? '0' + _dd : _dd;
            _hh = _hh < 10 ? '0' + _hh : _hh;
            _mm = _mm < 10 ? '0' + _mm : _mm;
            _ss = _ss < 10 ? '0' + _ss : _ss;
            return _yyyy + '-' + _MM + '-' + _dd + ' ' + _hh + ':' + _mm + ':' + _ss;
        }else{
            var _yyyy = new Date().getFullYear();
            var _MM = new Date().getMonth() + 1;
            var _dd = new Date().getDate();
            var _hh = new Date().getHours();
            var _mm = new Date().getMinutes();
            var _ss = new Date().getSeconds();
            _MM = _MM < 10 ? '0' + _MM : _MM;
            _dd = _dd < 10 ? '0' + _dd : _dd;
            _hh = _hh < 10 ? '0' + _hh : _hh;
            _mm = _mm < 10 ? '0' + _mm : _mm;
            _ss = _ss < 10 ? '0' + _ss : _ss;
            return _yyyy + '-' + _MM + '-' + _dd + ' ' + _hh + ':' + _mm + ':' + _ss;
        }
      },
      getNowDate : function(dval){
        if(arguments.length != 0){
          var _yyyy = new Date().getFullYear();
            var _MM = new Date().getMonth() + 1;
            var _dd = new Date().getDate()+dval;
            _MM = _MM < 10 ? '0' + _MM : _MM;
            _dd = _dd < 10 ? '0' + _dd : _dd;
            return _yyyy + '-' + _MM + '-' + _dd ;
        }else{
          var _yyyy = new Date().getFullYear();
            var _MM = new Date().getMonth() + 1;
            var _dd = new Date().getDate();
            _MM = _MM < 10 ? '0' + _MM : _MM;
            _dd = _dd < 10 ? '0' + _dd : _dd;
            return _yyyy + '-' + _MM + '-' + _dd ;
        }

      },
      nowTime : function(format){

         var dt=new Date();
         //年份
         this.Year=dt.getFullYear();
         //月份
         this.Month=dt.getMonth()+1<10?'0'+(dt.getMonth()+1):dt.getMonth()+1;
         //日期
         this.Day=dt.getDate()<10?'0'+dt.getDate():dt.getDate();
         //星期几,数字
         this.Week=dt.getDay();
         //星期几，中文
         this.WeekDay='日一二三四五六'.charAt(dt.getDay());
         //24制小时
         this.Hours24=dt.getHours()<10?'0'+dt.getHours():dt.getHours();
         //12制小时
         this.Hours12=this.Hours24>12 ? this.Hours24-12 : this.Hours24;
         //分钟
         this.Minutes=dt.getMinutes()<10?'0'+dt.getMinutes():dt.getMinutes();
         //秒
         this.Seconds=dt.getSeconds();
         format=format.replace("yy",this.Year);
         format=format.replace("MM",this.Month);
         format=format.replace("dd",this.Day);
         format=format.replace("HH",this.Hours24);
         format=format.replace("hh",this.Hours12);
         format=format.replace("mm",this.Minutes);
         format=format.replace("ss",this.Seconds);
         format=format.replace("ww",this.Week);
         format=format.replace("WW",this.WeekDay);
         return format;
      }
    },
    /**
     * 工具类
     */
    Tools : {
      /**
       * 创建一个带ID的DIV
       * @param myDiv
       * @returns
       */
      createDivById : function(myDiv){
        _t = document.createElement("div");
        _t.setAttribute("id", myDiv);
        document.body.appendChild(_t);
        return myDiv;
      },
      /**
       * 创建随机名字的DIV
       * @returns {String}返回是随机名字
       */
      createRandomDiv : function(){
        var _t = document.createElement("div");
        var _id = "winDiv" + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + new Date().getMilliseconds();
        _t.setAttribute("id", _id);
        document.body.appendChild(_t);
        return _id;
      },
      prompt: function(_logo, _content) {
        var _t = $('<div></div>');
        var _div = '<div class="' + _logo + '"></div>' + '<span class="prompt-content">' + _content + '</span>';
        var _id = "winDiv" + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + new Date().getMilliseconds();
        _t.attr("id", _id);
        _t.append(_div);
        _t.addClass("prompt-box");
        _t.appendTo('body');
        return _id;
      },
      showPrompt : function(_logo, _content, _interval){
        var _t = null;
        var _tipsid = Libs.Tools.prompt(_logo, _content);
        var _left = $(document).width() / 2 - 120;
        var _top = $(document).height() / 2 - 82;
        function _closeTip(){
          $("#" + _tipsid).fadeOut('slow',function(){
            $("#" + _tipsid).remove();
          });
          clearInterval(_t);
          if(_logo == 'ok-logo') {
            if($('#table').length > 0) {
              $('#table').datagrid("reload");
            }
          };
        }
        $("#" + _tipsid).css({
          position : 'absolute',
          left : _left,
          top : _top,
          display : 'none',
          zIndex : 10000
        });
        $("#" + _tipsid).fadeIn('slow');
        _t = setInterval(_closeTip, _interval);
      },
      /**
       * 移除指定名称的元素
       * @param _id
       */
      removeElement : function (_id){
        if($("#" + _id).size() != 0){
          $("#" + _id).remove();
        }
      },
      /**
       * 显示一段文字的TIPS
       * @param _tips
       * @param _interval
       */
      Show : function(_tips,_interval){

        var _t = null ;
        var _tipsid = Libs.Tools.createRandomDiv();
        var _width = _tips.length * 13;
        var _left = $(document).width() / 2 - _width / 2;
        var _top = $(document).height() / 2 -100;
        function _closeTip(){
          $("#" + _tipsid).fadeOut('slow',function(){
            $("#" + _tipsid).remove();
          });
          clearInterval(_t);
        }
        $("#" + _tipsid).css({
          position : 'absolute',
          left : _left,
          top : _top,
          width :_width+20,
          height : 35,
          display : 'none',
          zIndex : 10000,
          color : 'red',
          border : '1px solid #99bbe8',
          padding : '10px 8px 0px 8px',
          background :'#E0ECFF',
          font :'12px 宋体',
          fontWeight:'bold'
        });
        $("#" + _tipsid).html(_tips);
        $("#" + _tipsid).fadeIn('slow');
        _t = setInterval(_closeTip, _interval);
      },
      Tips : function(_tips){

        var _tipsid = Libs.Tools.createDivById('ajax_tips');
        var _width = _tips.length * 15;
        var _left = $(document).width() / 2 - _width / 2;
        var _top = $(document).height() / 2 - 70;
        $("#" + _tipsid).css({
          position : 'absolute',
          left : _left,
          top : _top,
          width :_width+30,
          height : 35,
          display : 'none',
          zIndex : 10000,
          font :'12px 宋体',
          fontWeight:'bold'
        });
        $("#" + _tipsid).html("<img src='./image/loading2.gif' />&nbsp;"+_tips);
        $("#" + _tipsid).show();

      },
      createRandom : function(){
        return "K_" + Math.round(Math.random() * 100000);
      },
      logoutSys : function(_url){
        if(confirm('是否退出系统？')){
          document.location.href = _url;
        }
      }
    },
    /**
     * EasyUI 框架相关操作。
     */
    UI : {
      /**
       * 添加一个tab页面
       * @param _id
       * @param _title
       * @param _href
       * @param _icon
       * @param _close
       */
      addTab : function(_id,_title,_href,_icon,_close){
        if($("#" +_id).tabs('exists',_title)){
          $("#" + _id).tabs('select',_title);
        }else{
          $("#" + _id).tabs('add',{
            title : _title,
            href : _href,
            loadingMessage : '正在加载中……',
            iconCls : _icon,
            closable : _close
          });
        }
      },
      addTabByHTML : function(_id,_title,_href,_icon,_close){
        if($("#" +_id).tabs('exists',_title)){
          $("#" + _id).tabs('select',_title);
        }else{
          $("#" + _id).tabs('add',{
            title : _title,
            content : _href,
            loadingMessage : '正在加载中……',
            iconCls : _icon,
            closable : _close
          });
        }
      },
      /**
       * 选择一个tab
       * @param _id
       * @param _title
       */
      selectTab : function(_id,_title){
        $("#" + _id).tabs('select',_title);
      },
      /**
       * 初始化tab
       * @param _id
       */
      initTab : function(_id){
        $('#' + _id).tabs({
            border:true,
            onSelect:function(title){

            }
        });
      },
      /**
       * 清除datagrid所有数据
       * @param _datagrid
       */
      dataGridClear : function(_datagrid){
        var _length = $("#" + _datagrid).datagrid('getRows').length;
        for ( var i = 0; i < _length; i++) {
          $("#" + _datagrid).datagrid('deleteRow',0);
        }
      },
      closeAllTab : function(_id){
        var tabs = $("#" + _id).tabs("tabs");
        var length = tabs.length;
        for(var i = 1; i < length; i++) {
           var onetab = tabs[1];
             var title = onetab.panel('options').title;
            $("#" + _id).tabs("close", title);
        }
      },
      layout : function(_id,_method,_region,_iconCls,_width,_title,_split,_href){
        $('#' + _id).layout(_method, {
          region : _region,
          iconCls : _iconCls,
          width : _width,
          title : _title,
          split : _split,
          href : _href
        });
      },
      window : function(_id,_title,_href,_icon,_width,_height){
        if($("#"+_id).size()!=0){
          return;
        }
        Libs.Tools.createDivById(_id);
        $("#" + _id).window({
          title : _title,
          iconCls : _icon,
          href : _href,
          width : _width,
          height : _height,
          collapsible : false,
          minimizable : false,
          maximizable : false,
          resizable : false,
          modal : false,
          onClose : function(){
            $("#" + _id).window('destroy');
            $("#" + _id).remove();
          }
        });
      },
      windowOnClose : function(_id,_title,_href,_icon,_width,_height,_onClose){
        if($("#"+_id).size()!=0){
          return;
        }
        Libs.Tools.createDivById(_id);
        $("#" + _id).window({
          title : _title,
          iconCls : _icon,
          href : _href,
          width : _width,
          height : _height,
          collapsible : false,
          minimizable : false,
          maximizable : false,
          resizable : false,
          modal : false,
          onClose : function(){
            _onClose();
            $("#" + _id).window('destroy');
            $("#" + _id).remove();
          }
        });
      },
      windowIF : function(_id, _title, _href, _icon, _width, _height) {//初始化window
          if ($("#" + _id).size() != 0) {//是否存在
              return;
          }
          Libs.Tools.createDivById(_id); //创建div
          $("#" + _id).window({//渲染window
              title: _title,
              iconCls: _icon,
              content: "<iframe id='" + _id + "_frame' name='" + _id + "_frame' src='" + _href + "' frameborder='0' height='100%' width='100%'></iframe>",
              width: _width,
              height: _height,
              collapsible: false,
              minimizable: false,
              maximizable: false,
              resizable: false,
              modal: false,
              onClose: function() {
                  var frame = $('iframe', $("#" + _id)); //释放frame
                  if (frame.length > 0) {
                      frame[0].contentWindow.document.write('');
                      frame[0].contentWindow.close();
                      frame.remove();
                      if ($.browser.msie) { CollectGarbage(); }
                  }

                  $("#" + _id).window('destroy');
                  $("#" + _id).remove();
              }
          });
      }
    },
    create : function(_xtype,_json){
      switch (_xtype) {
      case 'LeftMenu':
        var id = typeof _json.id != 'undefined' ? _json.id : null;
        var title = typeof _json.title != 'undefined' ? _json.title : null;
        var imgSrc = typeof _json.imgSrc != 'undefined' ? _json.imgSrc : null;
        var renderTo = typeof _json.renderTo != 'undefined' ? _json.renderTo : null;
        var fun = typeof _json.click != 'undefined' ? _json.click : null;
        var html = "<div><a id='"+id+"' href='javascript:void(0)' ><img src='"+imgSrc+"' alt='"+title+"' title='"+title+"'/><br/><span>"+title+"</span></a></div>";
        $("#" + renderTo).append(html);
        $("#"+id).click(fun);
        id = null;
        title = null;
        imgSrc = null;
        renderTo = null;
        html = null;
        fun = null;
        delete id;
        delete title;
        delete imgSrc;
        delete renderTo;
        delete html;
        delete fun;
        break;
      default:
        alert("错误的类型");
      }
    },
    /**
     * 生成下拉复选框
     * @author Luqi
     * @param _id 采用选择器选择
     * @param _path 请求路径
     * @param _selected 默认选择
     * @date 2014年1月3日 下午13:42:16
     */
    select: function(_id, _path, _selected) {
      var url = "/" + Libs.projectName + _path;
      $(_id).combobox({
        url: url,
        value: _selected,
        editable: false
      });
    }

};