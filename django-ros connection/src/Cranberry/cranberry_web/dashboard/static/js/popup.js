var popup_button = document.getElementById('btn_popup');
  $(popup_button).click(function(){
    layer_popup("#notice_layer");
  });

function layer_popup(el){
    var check = 0; //NOT CHECKED
    var $el = $(el);        //레이어의 id를 $el 변수에 저장
    var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

    isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

    var $elWidth = ~~($el.outerWidth()),
        $elHeight = ~~($el.outerHeight()),
        docWidth = $(document).width(),
        docHeight = $(document).height();

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {
        $el.css({top: 0, left: 0});
    }

    $el.find('a.btn-layerClose').click(function(){
        
        //이부분에 로봇에 신호 주는 부분 작성
        isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 기부완료 버튼을 클릭시 레이어가 닫힌다.
        //alert("Bye");
	check = 1;
        myFunction(check);
        return false;
    });

    $('.layer .dimBg').click(function(){
        $('.dim-layer').fadeOut();
        return false;
    });

} 
