var bgPage = chrome.extension.getBackgroundPage();
$('.zanzhu .zk-but').click(function(){$('.zanzhu').toggleClass('show')});

if(bgPage.quanju){
    $('.pbut-quanju').addClass('on');
}else{
    $('.pbut-quanju').removeClass('on');
}


$('.pbut-quanju').click(function(){
    if(bgPage.quanju){
        bgPage.setquanju(false);
        $('.pbut-quanju').removeClass('on');
    }else{
        bgPage.setquanju(true);
        $('.pbut-quanju').addClass('on');
    }
});