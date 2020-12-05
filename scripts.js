var ros = new ROSLIB.Ros({
	ros.connect('ws://0.0.0.0:9090');
});

//연결확인
ros.on('error', function(erros){
	console.log(error);
	//alert("Error...");
});

ros.on('connection', function(){
	console.log('Connection made');
	//alert("연결 성공");
});

ros.on('close', function(){
	console.log('Connection closed');
	//alert("연결 종료");
});

// 서비스 및 변수 선언
var iLightClient = new ROSLIB.Service({
  ros: ros,
  name: '/comm_light',
  serviceType: 'cranberry_topic/CommLight'
});
 
var state = 0;


function myFunction(light_id) {
  alert("hooo");

  // html에 존재하는 요소 자체의 값을 읽어와 처리합니다.
  if (document.getElementById(light_id).innerHTML == 0) { state = 1; document.getElementById(light_id).innerHTML = 1; }
  else if (document.getElementById(light_id).innerHTML == 1) { state = 0; document.getElementById(light_id).innerHTML = 0; }

  //문자열 데이터 'light_id'를 숫자 데이터로 변환합니다.
  var light_num = Number(light_id.split('_')[1]);

  //target과 state에 대한 정보를 포함하는 toggle_light Request를 만듭니다. 
  //이 request 값은 한 번 선언되면 변치 않는 것 같습니다. 따라서 매 update_light 함수가 실행될 때마다 선언합니다.

  var toggle_light = new ROSLIB.ServiceRequest({
    target: light_num,
    state: state
  });

  iLightClient.callService(toggle_light, function(result){
  	console.log("result : " + toggle_light.target + ':' + result.result);
  })
}




