!function(a){function d(a){var b={};switch(a){case"fb":b.autohidemode=!1,b.cursorcolor="#ededed",b.railcolor="",b.cursoropacitymax=.8,b.cursorwidth=10,b.cursorborder="none",b.cursorborderradius="0px"}return b}function e(a,c){function e(){c._stylerfbstate=!1,c.rail.css({backgroundColor:""}),c.cursor.stop().animate({width:3},200)}if(c.rail)switch(a){case"fb":c.rail.css({"-webkit-border-radius":"0px","-moz-border-radius":"0px","border-radius":"0px"}),c.cursor.css({width:3});var d=c.ispage?c.rail:c.win;d.hover(function(){c._stylerfbstate=!0,c.rail.css({backgroundColor:"#CED0D3"}),c.cursor.stop().css({width:10})},function(){c.rail.drag||e()}),b(document).mouseup(function(){c._stylerfbstate&&e()})}}var b=a;if(b&&"nicescroll"in b){b.extend(b.nicescroll.options,{styler:!1});var c={niceScroll:b.fn.niceScroll,getNiceScroll:b.fn.getNiceScroll};b.fn.niceScroll=function(a,f){"undefined"!=typeof a&&"object"==typeof a&&(f=a,a=!1);var g=f&&f.styler||b.nicescroll.options.styler||!1;g&&(nw=d(g),b.extend(nw,f),f=nw);var h=c.niceScroll.call(this,a,f);return g&&e(g,h),h.scrollTo=function(a){var b=this.win.position(),c=this.win.find(a).position();if(c){var d=Math.floor(c.top-b.top+this.scrollTop());this.doScrollTop(d)}},h},b.fn.getNiceScroll=function(a){var b=c.getNiceScroll.call(this,a);return b.scrollTo=function(a){this.each(function(){this.scrollTo.call(this,a)})},b}}}(jQuery);