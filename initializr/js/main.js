/*! jqlouds - v - 2014-07-06
* https://github.com/enricodeleo/jqlouds
* Copyright (c) 2014 Enrico Deleo; Licensed MIT */
!function(a){a.extend({random:function(a){return Math.floor(a*(Math.random()%1))},randomBetween:function(b,c){return b+a.random(c-b+1)}}),a.fn.jQlouds=function(b){return b=a.extend({},a.jQlouds.options,b),this.each(function(){var c=a.jQlouds.jQloudsFactory(b,this);a(this).addClass("jqlouds-clouds").css({position:"relative",minHeight:b.maxHeight+"px",height:b.skyHeight+"px"}).append(c),b.wind===!0&&a(this).trigger("jqlouds.init",[a(this)])})},a.jQlouds=function(b){return b=a.extend({},a.jQlouds.options,b),function(){}},a.jQlouds.options={src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAABgCAYAAADvqsU6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNkZFQThGREUyNUMxMUUzOEQ0NzlDNTY1NDZBODE0OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNkZFQThGRUUyNUMxMUUzOEQ0NzlDNTY1NDZBODE0OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY2RkVBOEZCRTI1QzExRTM4RDQ3OUM1NjU0NkE4MTQ4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY2RkVBOEZDRTI1QzExRTM4RDQ3OUM1NjU0NkE4MTQ4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+INz2FgAACfRJREFUeNrsnXeM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",maxWidth:227,maxHeight:96,minClouds:20,maxClouds:30,skyHeight:null,wind:!1},a.jQlouds.jQloudsFactory=function(b,c){var d,e=a(c).width(),f="",g=a.randomBetween(b.minClouds,b.maxClouds);d=b.skyHeight?b.skyHeight:a(c).height();for(var h=0;g>h;h++){var i=a.randomBetween(1,4),j=Math.floor(b.maxHeight/i),k=Math.floor(b.maxWidth/i),l=a("<img />",{"class":"jqlouds-cloud",src:b.src,height:j,width:k});if(l.css({position:"absolute",bottom:d*("0."+a.randomBetween(1,9)+a.randomBetween(1,9))-j+"px",left:e*("0."+a.randomBetween(1,90))+"px"}),1===a.randomBetween(1,3)){var m="blur(3px)";l.addClass("blur").css("filter",m).css("webkitFilter",m).css("mozFilter",m).css("oFilter",m).css("msFilter",m)}2===a.randomBetween(1,3)&&l.css({opacity:"0."+a.randomBetween(5,8)}),f+=l[0].outerHTML}return f},a(document).on("jqlouds.init",function(b,c){c.find("img.jqlouds-cloud").each(function(){a.jQlouds.jQloudsAnimate(a(this))})}),a(document).on("jqlouds.wind",function(b,c){a.jQlouds.jQloudsAnimate(c)}),a.jQlouds.jQloudsAnimate=function(b){var c;c=0===a.randomBetween(0,1)?"+":"-",b.delay(a.randomBetween(2e3,6e3)).animate({left:c+"="+a.randomBetween(10,40)},a.randomBetween(4e3,7e3),"linear",function(){a(document).trigger("jqlouds.wind",[b])})}}(jQuery);
