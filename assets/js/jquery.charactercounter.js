!function(a){a.fn.characterCounter=function(b){function e(a){var b,c="";for(b in a)c+=" "+b+'="'+a[b]+'"';return c}function f(){var a=d.counterCssClass;return d.customFields.class&&(a+=" "+d.customFields.class,delete d.customFields["class"]),"<"+d.counterWrapper+e(d.customFields)+' class="'+a+'"></'+d.counterWrapper+">"}function g(a){var b=d.counterFormat.replace(/%1/,a);return d.renderTotal&&(b+="/"+d.limit),b}function h(b){var c=a(b).val().length,e=d.counterSelector?a(d.counterSelector):a(b).siblings("."+d.counterCssClass),f=d.limit-c,h=f<0;d.increaseCounting&&(f=c,h=f>d.limit),h?(e.addClass(d.counterExceededCssClass),d.exceeded=!0,d.onExceed(c)):d.exceeded&&(e.removeClass(d.counterExceededCssClass),d.onDeceed(c),d.exceeded=!1),e.html(g(f))}function i(b){a(b).on("keyup",function(){h(b)}).on("paste",function(){var a=this;setTimeout(function(){h(a)},0)})}var c={exceeded:!1,counterSelector:!1,limit:350,renderTotal:!0,counterWrapper:"span",counterCssClass:"counter",counterFormat:"%1",counterExceededCssClass:"exceeded",increaseCounting:!1,onExceed:function(){},onDeceed:function(){},customFields:{}},d=a.extend(c,b);return this.each(function(){var b=a(this).attr("maxlength");"undefined"!==typeof b&&b!==!1&&a.extend(c,{limit:parseInt(a(this).attr("maxlength"))}),d.counterSelector||a(this).after(f()),i(this),h(this)})}}(jQuery);