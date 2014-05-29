    var btn = '<a class="new-dbtn" hidefocus="true" href="javascript:;" id="MiDownFileButtom">'+
	'<b>下载到小米路由</b>'+
	'</a>';

    var btn2 = '<li class="down-sfile down-xm" title="下载到小米路由"><em class="icon-download icon-xmdownload" _i="8"></em></li>';
    var btn3= '<li><a class="rcm-xmd" href="javascript:;">下载到小米</a></li>';
	var src = window.location.origin+window.location.pathname+window.location.search;

// infiniteListView
console.log('开始注入');
$(function(){
	$('#infiniteListView>*').on('mouseover',function(){
		var sizecol = $(this).find('.size-col').text();
		if(sizecol!='-'){
			if($(this).find('.more-btn .down-xm').length==0){
				$(this).find('.more-btn .down-sfile').after(btn2);
				$(this).find('.down-xm').click(function(){
					xmd($(this).parents("dd").find('.file-col').attr('title'),src,function(){});
				});
			}
		}else{
			$(this).find('.down-xm').remove();
		}
	});


    $('body').mouseup(function(){
        setTimeout(function(){
            if($('.rcm-xmd').length==0&&$('#right-context-menu').length!=0){
                $('#right-context-menu').append(btn3);
                $('.rcm-xmd').click(function(){
                    xmd('',src,function(){$('#right-context-menu a').get(1).click();});
                });
            }
        },200);
    });


});

function xmd(name,src,fun){
	chrome.extension.sendRequest({name: name,src:src}, fun);
}



	$('#downFileButtom').after(btn);
	var downFileButtomname = $('.slide-show-header .ellipsis').text();
	$('#MiDownFileButtom').click(function(){
		xmd(downFileButtomname,src,function(){$("#downFileButtom").get(0).click();});
	})

