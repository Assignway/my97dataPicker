/**
 * 获取当前月的第一天
 */
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth()+1;
    if (month<10){
        month = "0"+month;
    }
    var firstDay = year+"-"+month+"-01 00:00";

/**
 * 获取当前时间
 */
   var _Date=myDate.getDate(); 
   var Hours=myDate.getHours();       //获取当前小时数(0-23)
   var Minutes=myDate.getMinutes();     //获取当前分钟数(0-59)
   var endDate=year+"-"+month+"-"+_Date+" "+Hours+":"+Minutes;     //获取日期与时间
  
//初始化时间
$(function(){
 $("#StartTime").attr("value",firstDay);
 $("#EndTime").attr("value",endDate);


//时间改变提交
$("#beSure").click(function(){
 var _ThisStartTime=$("#StartTime").val();
 var _ThisEndTime=$("#EndTime").val();
 alert(_ThisStartTime);
 alert(_ThisEndTime);
})


});

