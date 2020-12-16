    layui.config({
      version: '1559293953947'
    });

    var sexValue = '0'
    var $;
    layui.use(['laydate', 'layer', 'element','form','jquery'], function () {
        var laydate = layui.laydate //日期
        , layer = layui.layer //弹出层
        , element = layui.element //元素
        , form = layui.form // 表单

        $ = layui.$  

    form.on('radio(sexRadio)', function(data){
      sexValue = data.value
    }); 
  
    //执行一个laydate实例
    laydate.render({
      elem: '#birthdayId' //指定元素
    });
   
    });
    Date.prototype.Format = function(fmt)   
    { //author: meizz   
      var o = {   
        "M+" : this.getMonth()+1,                 //月份   
        "d+" : this.getDate(),                    //日   
        "h+" : this.getHours(),                   //小时   
        "m+" : this.getMinutes(),                 //分   
        "s+" : this.getSeconds(),                 //秒   
        "q+" : Math.floor((this.getMonth()+3)/3), //季度   
        "S"  : this.getMilliseconds()             //毫秒   
      };   
      if(/(y+)/.test(fmt))   
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
      for(var k in o)   
        if(new RegExp("("+ k +")").test(fmt))   
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
      return fmt;   
    }  

    // 计算两个日期之间的月数
    function datemonth(date1,date2){
      // 拆分年月日
      date1 = date1.split('-');
      // 得到月数
      date1 = parseInt(date1[0]) * 12 + parseInt(date1[1]);
      // 拆分年月日
      date2 = date2.split('-');
      // 得到月数
      date2 = parseInt(date2[0]) * 12 + parseInt(date2[1]);
      var m = Math.abs(date1 - date2);
      return m;
    }

    
    function changeChart (){
      var titleText1='',titleText2 = ''
      var seriesArr1 = [], seriesArr2 =[]
      var curStature = $('#statureId').val() // 当前身高
      var curWeight = $('#weightId').val() // 当前体重
      var curDate = $('#birthdayId').val()
      if(curDate=='NaN'||curDate==''){
        layer.msg('请输入出生日期'); 
        return
      }
      if(curStature=='NaN'||curStature==''){
        layer.msg('请输入身高'); 
        return
      }
      if(curWeight=='NaN'||curWeight==''){
        layer.msg('请输入体重'); 
        return
      }
      var xData = [0,1,2,3,4,5,6,7,8,9,10,11,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81]


      var myDate = new Date().Format("yyyy-MM-dd");
      var months = datemonth(curDate,myDate); // 相差的月数
      var curStatureValue = [] //身高数组值 
      var curWeightValue = [] //身高数组值 
      for(var i=0;i<xData.length;i++){
        if(months==xData[i]){
          curStatureValue.push(curStature)
          curWeightValue.push(curWeight)
          break;
        }
        if(months>xData[i]){
          curStatureValue.push(0)
          curWeightValue.push(0)
          if(i+1<=xData.length&&months<xData[i+1]){
            curStatureValue.push(curStature)
            curWeightValue.push(curWeight)
            break;
          }
        }
      }
      if(sexValue=="0"){
        titleText1= '男童身高'
        titleText2= '男童体重'
        seriesArr1=  [{
              id:'-2SD',
              name:'-2SD',
              data: [46.9,50.7,54.3,57.5,60.1,62.1,63.7,65.0,66.3,67.6,
              68.9,70.1,71.2,74,76.6,79.1,81.6,83.9,85.9,88.0,90,91.2,93,
              94.6,96.3,97.9,99.5,101.1,102.8,104.4,105.9,107.3,108.6,109.8,111.1,112.6],
              type: 'line',
              smooth: true,
              },
              {
              id:'-1SD',
              name:'-1SD',
              data: [48.6,52.7,56.5,59.7,62.3,64.4,66.0,67.4,68.7,70.1,71.4,72.7,73.8,76.9,
              79.6,82.3,85.1,87.5,89.6,91.6,93.7,94.9,96.7,98.5,100.2,101.9,103.6,105.3,
              107,108.7,110.2,111.7,113.1,114.4,115.8,117.4],
              type: 'line',
              smooth: true,
              },
              {
              id:'标准身高',
              name:'标准身高',
              data: [50.4,54.8,58.7,62,64.6,66.7,68.4,69.8,71.2,72.6,74,75.3,76.5,79.8,
              82.7,85.6,88.5,91.1,93.3,95.4,97.5,98.8,100.6,102.4,104.1,105.9,107.7,
              109.5,111.3,113,114.7,116.3,117.7,119.2,120.7,122.3],
              type: 'line',
              smooth: true,
              },
              {
              id:'1SD',
              name:'+1SD',
              data: [52.2,56.9,61.1,64.3,66.9,69.1,70.8,72.3,73.7,75.2,76.6,78,79.3,82.8,
              85.8,89,92.1,94.8,97.1,99.3,101.4,102.7,104.5,106.4,108.2,110,111.9,113.8,
              115.7,117.5,119.2,120.9,122.4,124,125.6,127.3],
              type: 'line',
              smooth: true,
              },
              {
              id:'2SD',
              name:'+2SD',
              data: [54,59,63.3,66.6,69.3,71.5,73.3,74.8,76.3,77.8,79.3,80.8,82.1,85.8,
              89.1,92.4,95.8,98.6,101,103.2,105.3,106.7,108.6,110.4,112.3,114.2,116.2,
              118.2,120.1,122,123.8,125.6,127.2,128.8,130.5,132.4],
              type: 'line',
              smooth: true,
              },
              {
                  id:'0',
                  type:'line',
                  symbol:'image://https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/examples/images/favicon.png?_v_=20200710_1',
                  symbolSize:20,
                  smooth: true,
                  data: curStatureValue
              }
          ];
          seriesArr2=   [{
              id:'-2SD',
              name:'-2SD',
              data: [2.58,3.52,4.47,5.29,5.91,6.36,6.7,6.99,7.23,7.46,7.67,7.87,8.06,8.57,9.07,9.59,10.09,10.54,
              10.97,11.39,11.79,12.19,12.57,12.96,13.35,13.76,14.18,14.61,15.06,15.48,
              15.87,16.24,16.56,16.9,17.27,17.73],
              type: 'line',
              smooth: true,
              },
              {
              id:'-1SD',
              name:'-1SD',
              data: [2.93,3.99,5.05,5.97,6.64,7.14,7.51,7.83,8.09,8.35,8.58,8.8,9,9.57,10.12,
              10.69,11.24,11.75,12.22,12.68,13.13,13.57,14,14.44,14.88,15.35,15.84,16.34,16.87,
              17.38,17.85,18.31,18.71,19.14,19.62,20.22],
              type: 'line',
              smooth: true,
              },
              {
              id:'标准体重',
              name:'标准体重',
              data: [3.32,4.51,5.68,6.7,7.45,8,8.41,8.76,9.05,9.33,9.58,9.83,10.05,10.68,
              11.29,11.93,12.54,13.11,13.64,14.15,14.65,15.15,15.63,16.13,16.64,17.18,17.75,
              18.35,18.98,19.6,20.18,20.75,21.26,21.82,22.45,23.24],
              type: 'line',
              smooth: true,
              },
              {
              id:'1SD',
              name:'+1SD',
              data: [3.73,5.07,6.38,7.51,8.34,8.95,9.41,9.79,10.11,10.42,10.71,10.98,11.23,11.93,
              12.61,13.33,14.01,14.64,15.24,15.82,16.39,16.95,17.5,18.07,18.67,19.3,19.98,20.69,
              21.46,22.21,22.94,23.66,24.32,25.06,25.89,26.95],
              type: 'line',
              smooth: true,
              },
              {
              id:'2SD',
              name:'+2SD',
              data: [4.18,5.67,7.14,8.4,9.32,9.99,10.5,10.93,11.29,11.64,11.95,12.26,12.54,13.32,14.09,
              14.9,15.67,16.38,17.06,17.72,18.37,19.02,19.65,20.32,21.01,21.76,22.57,23.43,
              24.38,25.32,26.24,27.17,28.03,29.01,30.13,31.56],
              type: 'line',
              smooth: true,
              },
              {
                  id:'0',
                  type:'line',
                  symbol:'image://https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/examples/images/favicon.png?_v_=20200710_1',
                  symbolSize:20,
                  smooth: true,
                  data: curWeightValue
              }
          ];
      }else{
        titleText1= '女童身高'
        titleText2= '女童体重'
        seriesArr1=  [{
              id:'-2SD',
              name:'-2SD',
              data: [46.4,49.8,53.2,56.3,58.8,60.8,62.3,63.6,64.8,66.1,67.3,68.6,69.7,72.9,75.6,
              78.1,80.5,82.7,84.8,86.9,88.9,90.1,91.9,93.7,95.4,97,98.7,100.3,101.8,
              103.4,104.9,106.3,107.6,108.8,110.1,111.4],
              type: 'line',
              smooth: true,
              },
              {
              id:'-1SD',
              name:'-1SD',
              data: [48,51.7,55.3,58.4,61,62.9,64.5,65.9,67.2,68.5,69.8,71.1,72.3,75.6,78.5,81.2,
              83.8,86.2,88.4,90.5,92.5,93.8,95.6,97.4,99.2,100.9,102.7,104.4,106,
              107.6,109.2,110.7,112,113.4,114.7,116.1],
              type: 'line',
              smooth: true,
              },
              {
              id:'标准身高',
              name:'标准身高',
              data: [49.7,53.7,57.4,60.6,63.1,65.2,66.8,68.2,69.6,71,72.4,73.7,75,78.5,
              81.5,84.4,87.2,89.8,92.1,94.3,96.3,97.5,99.4,101.2,103.1,104.9,106.7,
              108.5,110.2,111.9,113.5,115.2,116.6,118,119.4,121],
              type: 'line',
              smooth: true,
              },
              {
              id:'1SD',
              name:'+1SD',
              data: [51.4,55.7,59.6,62.8,65.4,67.4,69.1,70.6,72.1,73.6,75,76.4,77.7,81.4,84.6,
              87.7,90.7,93.5,95.9,98.1,100.1,101.4,103.3,105.1,107,109,110.9,
              112.8,114.5,116.2,118,119.7,121.2,122.7,124.3,125.9],
              type: 'line',
              smooth: true,
              },
              {
              id:'2SD',
              name:'+2SD',
              data: [53.2,57.8,61.8,65.1,67.7,69.8,71.5,73.1,74.7,76.2,77.7,79.2,80.5,84.3,
              87.7,91.1,94.3,97.3,99.8,102,104.1,105.4,107.2,109.2,111.1,113.1,115.2,
              117.1,118.9,120.7,122.6,124.4,126,127.6,129.2,130.9],
              type: 'line',
              smooth: true,
              },
              {
                  id:'0',
                  type:'line',
                  symbol:'image://https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/examples/images/favicon.png?_v_=20200710_1',
                  symbolSize:20,
                  smooth: true,
                  data: curStatureValue
              }
          ];

          seriesArr2=   [{
              id:'-2SD',
              name:'-2SD',
              data: [2.54,3.33,4.15,4.9,5.48,5.92,6.26,6.55,6.79,7.03,7.23,7.43,7.61,8.12,
              8.63,9.15,9.64,10.09,10.52,10.94,11.36,11.77,12.16,12.55,12.93,13.32,
              13.71,14.08,14.44,14.8,15.18,15.54,15.87,16.21,16.55,16.92],
              type: 'line',
              smooth: true,
              },
              {
              id:'-1SD',
              name:'-1SD',
              data: [2.85,3.74,4.65,5.47,6.11,6.59,6.96,7.28,7.55,7.81,8.03,8.25,8.45,9.01,
              9.57,10.15,10.7,11.21,11.7,12.18,12.65,13.11,13.55,14,14.44,14.88,
              15.33,15.78,16.2,16.64,17.09,17.53,17.94,18.35,18.78,19.25],
              type: 'line',
              smooth: true,
              },
              {
              id:'标准体重',
              name:'标准体重',
              data: [3.21,4.2,5.21,6.13,6.83,7.36,7.77,8.11,8.41,8.69,8.94,9.18,9.4,10.02,
              10.65,11.3,11.92,12.5,13.05,13.59,14.13,14.65,15.16,15.67,16.17,
              16.69,17.22,17.75,18.26,18.78,19.33,19.88,20.37,20.89,21.44,22.03],
              type: 'line',
              smooth: true,
              },
              {
              id:'1SD',
              name:'+1SD',
              data: [3.63,4.74,5.86,6.87,7.65,8.23,8.68,9.06,9.39,9.7,9.98,10.24,10.48,11.18,
              11.88,12.61,13.31,13.97,14.6,15.22,15.83,16.43,17.01,17.6,18.19,
              18.79,19.42,20.05,20.66,21.3,21.98,22.65,23.27,23.92,24.61,25.37],
              type: 'line',
              smooth: true,
              },
              {
              id:'2SD',
              name:'+2SD',
              data: [4.1,5.35,6.6,7.73,8.59,9.23,9.73,10.15,10.51,10.86,11.16,11.46,11.73,12.5,
              13.29,14.12,14.92,15.67,16.39,17.11,17.81,18.5,19.17,19.85,20.54,21.25,
              22,22.75,23.5,24.28,25.12,25.96,26.74,27.57,28.46,29.42],
              type: 'line',
              smooth: true,
              },
              {
                  id:'0',
                  type:'line',
                  symbol:'image://https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/examples/images/favicon.png?_v_=20200710_1',
                  symbolSize:20,
                  smooth: true,
                  data: curWeightValue
              }
          ];

      }

      statureOption = {
          title: {
              text: titleText1
          },
          legend: {
            data:['-2SD','-1SD','标准身高','+1SD','+2SD']
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          markLine:{
            label:{
              show:true,
              formatter:'{a}'
            }
          },
          color:['#c0cafa', '#7289fa','#062ff4','#fb9fef','#ffc9f8','#1e9fff'],
          xAxis: {
              type: 'category',
              splitArea:{
                  show:true
              },
              axisLabel:{
                  formatter: function (value, index) {
                      if (value>0&&value%12===0) {
                          return value/12+'岁';
                      }
                      return value;
                  },
                  margin:20,
                  rotate:-45
              },
              splitLine:{
                  interval:8,
              },
              data: xData
          },
          grid: {
              left: '2%',
              right: '2%',
              bottom: '3%',
              containLabel: true
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value} cm'
              },
              splitNumber:15,
              min:40,
              max:150
          },
          series: seriesArr1
      };

      weightOption = {
          title: {
              text: titleText2
          },
          legend: {
            data:['-2SD','-1SD','标准体重','+1SD','+2SD']
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          color:['#c0cafa', '#7289fa','#062ff4','#fb9fef','#ffc9f8','#1e9fff'],
          xAxis: {
              type: 'category',
              splitArea:{
                  show:true
              },
              axisLabel:{
                  formatter: function (value, index) {
                      if (value>0&&value%12===0) {
                          return value/12+'岁';
                      }
                      return value;
                  },
                  margin:20,
                  rotate:-45
              },
              splitLine:{
                  interval:8,
              },
              data:xData
          },
          grid: {
              left: '2%',
              right: '2%',
              bottom: '3%',
              containLabel: true
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value} kg'
              },
              splitNumber:15,
              min:1.5,
              max:36
          },
          series: seriesArr2
      };
      echarts.init(document.getElementById('statureMain')).setOption(statureOption);
      echarts.init(document.getElementById('weightMain')).setOption(weightOption);
    }
