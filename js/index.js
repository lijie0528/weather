/*
* @Author: asus
* @Date:   2017-11-28 16:32:52
* @Last Modified by:   asus
* @Last Modified time: 2017-11-28 16:51:11
*/
$.getScript(
		"http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",
		function(){
			// 获取对象的属性city
			//document.getElementById('q1').innerHTML=remote_ip_info.city;
			$("#q1").html(remote_ip_info.city);
		}
	);