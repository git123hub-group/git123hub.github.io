function click1(){var n;clinenum=0,mainprog=$("box1").value.split("\n"),breakpt=!1,delayf=!1,running=!1,parsed=!0,$("odoc1").innerHTML=outHtml="",changed=!1,tlines=mainprog.length,__user_vars__={},callstack=stack=[],callptr=0;for(var t=0,r=mainprog.length;r>t;++t)n=mainprog[t],":"===n.charAt(0)&&(__user_vars__["z"+n.slice(1)]=t)}function click2(){parsed||click1(),stepinto(),changed&&($("odoc1").innerHTML=outHtml),changed=!1,breakpt=!1}function click3(){for(parsed||click1(),running=!0;!breakpt;)stepinto();changed&&($("odoc1").innerHTML=outHtml),changed=!1,breakpt=!1,running&&delayf&&requestAnimationFrame(click3)}function jumpblock(){function n(){for(a=1;a>0;)":{:"===mainprog[clinenum]?t():":endif:"===mainprog[clinenum]?a--:":if"===mainprog[clinenum].slice(0,3)&&a++,clinenum++}function t(){var n=1;for(++clinenum;tlines>clinenum&&n;){switch(mainprog[clinenum]){case":{:":++n;break;case":}:":--n}clinenum++}}function r(){var n=1;for(--clinenum;clinenum>0&&n;){switch(mainprog[clinenum]){case":{:":--n;break;case":}:":++n}clinenum--}}var e,a;switch((e=mainprog[clinenum].match(/^:(\w+|[^\w\s])\s*(.*):$/))[1]){case"{":t();break;case"if":case"elseif":if("if"===e[1]&&(condiflag=!0)||condiflag)if(__expr_eval__(e[2]))condiflag=!1,clinenum++;else for(a=0,clinenum++;a>=0;){if(":{:"===mainprog[clinenum])t();else if(":else"===mainprog[clinenum].slice(0,5)){if(0>=a)break}else":endif:"===mainprog[clinenum]?a--:":if"===mainprog[clinenum].slice(0,3)&&a++;clinenum++}else n();break;case"else":condiflag?clinenum++:n(),condiflag=!1;break;case"while":if(clinenum++,!__expr_eval__(e[2]))for(a=1;a>0;)":{:"===mainprog[clinenum]?t():":endwhile:"===mainprog[clinenum]?a--:":while"===mainprog[clinenum].slice(0,6)&&a++,clinenum++;break;case"endwhile":a=1;do clinenum--,":}:"===mainprog[clinenum]?r():":endwhile:"===mainprog[clinenum]?a++:":while"===mainprog[clinenum].slice(0,6)&&a--;while(a>0);break;case"until":if(__expr_eval__(e[2])){++clinenum;break}a=1;do clinenum--,":}:"===mainprog[clinenum]?r():":until"===mainprog[clinenum].slice(0,6)?a++:":repeat:"===mainprog[clinenum]&&a--;while(a>0);break;default:++clinenum}}function stepinto(){try{var n;if((tmpline=clinenum)>=tlines)return parsed=!1,breakpt=!0,void(delayf=!1);if(tmpnl=clinenum+1,"#"===(n=mainprog[clinenum].charAt(0)))return void++clinenum;if(":"===n)return void(":"===mainprog[clinenum].slice(-1)?jumpblock():++clinenum);for(var t=mainprog[clinenum];(n=mainprog[clinenum].match(/\\*$/))&&n[0].length%2===1;)t+="\n"+mainprog[++clinenum],++tmpnl;__expr_eval__(t),clinenum=tmpnl}catch(r){console.error(r),parsed=!1,breakpt=!0,delayf=!1}}var mainprog,clinenum,breakpt,delayf,parsed=!1,outHtml,changed,tmpnl,tlines,callstack,callptr,stack,running,tmpline,condiflag;!function(n){n.print=function(n){for(var t=arguments.length,r=0;t>r;r++)outHtml+=escapeHTML(arguments[r]);changed=!0},n.println=function(n){for(var t=arguments.length,r=0;t>r;r++)outHtml+=escapeHTML(arguments[r]);outHtml+="\n",changed=!0},n.printf=function(){outHtml+=escapeHTML(sprintf.apply(null,arguments)),changed=!0},n.sprintf=function(){return sprintf.apply(null,arguments)},n.hash=function(n){n+="";for(var t=-1741611902,r=0,e=n.length;e>r;r++)t=84823*t|0,t=n.charCodeAt(r)-28683*t|0;return t},n.clear=function(n){outHtml="",changed=!0},n.breakpoint=function(){breakpt=!0,delayf=!1},n.jump=function(n){"string"==typeof n?tmpnl=__user_vars__["z"+n]:"number"==typeof n&&(tmpnl=tmpline+n)},n.absjump=function(n){tmpnl=n},n.jumpc=function(t,r){r&&n.jump(t)},n.call=function(n){callstack[callptr++]=tmpnl,"string"==typeof n?tmpnl=__user_vars__["z"+n]:"number"==typeof n&&(tmpnl=tmpline+n)},n.abscall=function(n){callstack[callptr++]=tmpnl,tmpnl=n},n["return"]=function(){return 0===callptr?(parsed=!1,breakpt=!0,void(delayf=!1)):void(tmpnl=callstack[--callptr])},n.nextframe=function(){breakpt=delayf=!0},n.template=function(t){for(var r,e="",a=0,i=t.length;i>a;a++)if("%"===t[a])if("%"===t[++a])e+="%";else{r="";do r+=t[a++];while("%"!==t[a]);e+=/\D/.test(r)?n.indirect(r):arguments[r]}else e+=t[a];return e},n.repeat=String.prototype.repeat?function(n,t){return(""+n).repeat(t)}:function(n,t){return Array(1+(t||0)).join(n)},n.sin=Math.sin,n.sinh=Math.sinh||function(n){return(Math.exp(n)-Math.exp(-n))/2},n.qexp=function(t,r){return 2*n.sinh(r?t*Math.log(r):t)},n.asin=Math.asin,n.asinh=Math.asinh||function(n){return sgn=1,0>n&&(n=-n,sgn=-1),sgn*Math.log(n+Math.sqrt(n*n+1))},n.qlog=function(t,r){var e=n.asinh(t/2);return r?e/Math.log(r):e},n.cos=Math.cos,n.cosh=Math.cosh||function(n){return(Math.exp(n)+Math.exp(-n))/2},n.acos=Math.acos,n.acosh=Math.acosh||function(n){return Math.log(n+Math.sqrt(n*n-1))},n.tan=Math.tan,n.tanh=Math.tanh||function(n){return n===1/0?1:n===-(1/0)?-1:(Math.exp(n)-Math.exp(-n))/(Math.exp(n)+Math.exp(-n))},n.atan=Math.atan,n.atan2=Math.atan2,n.atanh=Math.atanh||function(n){return sgn=1,0>n&&(n=-n,sgn=-1),sgn*Math.log((1+n)/(1-n))/2},n.cot=function(n){return 1/Math.tan(n)},n.coth=function(t){return 1/n.tanh(t)},n.acot=function(n){return Math.atan(1/n)},n.acoth=function(t){return n.atanh(1/t)},n.sqr=function(n){return n*n},n.sqrt=Math.sqrt,n.cube=function(n){return n*n*n},n.cbrt=Math.cbrt||function(n){var t=Math.pow(Math.abs(n),1/3);return 0>n?-t:t},n.ln=Math.log,n.log=function(n,t){return t?Math.log(n)/Math.log(t):Math.log(n)},n.log1p=Math.log1p||function(n){return Math.log(n)+1},n.log2=Math.log2||function(n){return Math.log(n)*Math.LOG2E},n.lg=n.log10=Math.log10||function(n){return Math.log(n)*Math.LOG10E},n.exp=Math.exp,n.expm1=Math.expm1||function(n){return Math.exp(n)-1},n.pow=Math.pow,n.mod=function(n,t){return n%t},n.quotient=function(n,t){return(n-n%t)/t},n.abs=function(n){return n>=0?n:-n},n.sign=Math.sign||function(n){return n=+n,0===n||isNaN(n)?+n:n>0?1:-1},n.ident=function(n){return n},n.neg=function(n){return-n},n.recip=function(n){return 1/n},n.zero=function(){return 0},n.one=function(){return 1},n.floor=Math.floor,n.ceil=Math.ceil,n.trunc=Math.trunc||function(n){return n-n%1},n.round=Math.round,n.hypot=Math.hypot||function(){for(var n=0,t=arguments.length,r=0;t>r;r++){if(arguments[r]===1/0||arguments[r]===-(1/0))return 1/0;n+=arguments[r]*arguments[r]}return Math.sqrt(n)},n.erf=function(t){var r=.140012,e=t*t,a=(4/Math.PI+r*e)/(1+r*e);return n.sign(t)*Math.sqrt(1-Math.exp(-e*a))},n.max=Math.max,n.min=Math.min,n.gcd=function(n,t){for(var r;0!==t;)r=n%t,n=t,t=r;return n},n.lcm=function(t,r){return t*(r/n.gcd(t,r))},n.and=function(n,t){return n&&t},n.str_and=function(n,t){var r,e=n.length,a="";(r=t.length)<e&&(e=r);for(var i=0;e>i;i++)a+=String.fromCharCode(n.charCodeAt(i)&t.charCodeAt(i));return a},n.bit_and=function(n,t){return n&t},n.or=function(n,t){return n||t},n.str_or=function(n,t){var r,e,a,i=n.length,u="";a=(bl=t.length)>i?bl:i;for(var o=0;a>o;o++)r=i>o?n.charCodeAt(o):0,e=o<bl?t.charCodeAt(o):0,u+=String.fromCharCode(r|e);return u},n.bit_or=function(n,t){return n|t},n.not=function(n){return!n},n.str_not=function(n,t){t||(t=8);for(var r=Math.pow(2,t)-1,e=n.length,a="",i=0;e>i;i++)a+=String.fromCharCode(r-n.charCodeAt(i));return a},n.bit_not=function(n){return~n},n.str_xor=function(n,t){var r,e,a,i=n.length,u="";a=(bl=t.length)>i?bl:i;for(var o=0;a>o;o++)r=i>o?n.charCodeAt(o):0,e=o<bl?t.charCodeAt(o):0,u+=String.fromCharCode(r^e);return u},n.bit_xor=function(n,t){return n^t},n["if"]=function(n,t,r){return n?t:r},n.bit_sal=n.bit_shl=function(n,t){return n<<t},n.bit_sar=function(n,t){return n>>>t},n.bit_shr=function(n,t){return n>>t},n.str_shl=function(n,t){for(var r=(Math.pow(2,t)-1,n.length),e="",a=0;r>a;a++)e+=String.fromCharCode(n.charCodeAt(a)<<t);return e},n.str_shl2=function(t,r){return 0>r?n.str_shr2(t,-r):t.slice(r)},n.str_shr=function(n,t){for(var r=(Math.pow(2,t)-1,n.length),e="",a=0;r>a;a++)e+=String.fromCharCode(n.charCodeAt(a)>>t);return e},n.str_shr2=function(t,r){return 0>r?n.str_shl2(t,-r):n.repeat("\x00",r)+t},n.clz32=Math.clz32||function(n){var n=+n>>>0;return n?32-n.toString(2).length:32},n.fib=function(n){var t,r=0,e=1,a=n%2===0?-1:1;if(0>n?n=-n:a=1,2>n)return n;if(n>1476)return NaN;for(;n>1;n--)t=r+e,r=e,e=t;return e*a},n.imul=Math.imul||function(n,t){var r=n>>>16&65535,e=65535&n,a=t>>>16&65535,i=65535&t;return e*i+(r*i+e*a<<16>>>0)|0},n.equ=function(n,t){return n===t},n.neq=function(n,t){return n!==t},n.lss=function(n,t){return t>n},n.leq=function(n,t){return t>=n},n.gtr=function(n,t){return n>t},n.geq=function(n,t){return n>=t},n.pi=Math.PI,n.e=Math.E,n.phi=(Math.sqrt(5)+1)/2,n.infinity=n.Infinity=1/0,n.NaN=NaN,n["true"]=!0,n["false"]=!1,n["null"]=null,n.undefined=void 0,n.random=Math.random,n.alert=function(n){alert(n)},n.confirm=function(n){confirm(n)},n.prompt=function(n,t){prompt(n,t)},n.noop=function(){},n.escape=escapeHTML,n.unescape=function(n){var t={amp:"&",lt:"<",gt:">",quot:'"'};return(""+n).replace(/&([^;]+);/g,function(n,r){return"#"!==r.charAt(0)?t[r]:"x"!==r.charAt(1).toLowerCase()?String.fromCharCode(r.slice(1)):String.fromCharCode(parseInt(r.slice(2),16))})},n.sescape=function(n){var t="0______abtnvfr_____________e".split("");return n.replace(/[\\"]/g,"\\$&").replace(/[\0\x07-\x0d\x1b]/g,function(n){return"\\"+t[n.charCodeAt(0)]}).replace(/[\x01-\x1f\x7f-\xff]/g,function(n){return"\\x"+("0"+n.charCodeAt(0).toString(16)).slice(-2)}).replace(/[\u0100-\uffff]/g,function(n){return"\\u"+("0"+n.charCodeAt(0).toString(16)).slice(-4)})},n.sunescape=StringParser,n.beginCSS=function(n){outHtml+='<span style="'+escapeHTML(n)+'">'},n.endCSS=function(){outHtml+="</span>"},n.multiline=function(n){for(var t="",r=n;r>0;r--,++tmpnl)t+=mainprog[tmpnl]+"\n";return t},n.multiline0=function(n){for(var t="",r=n;r>0;r--,++tmpnl)t+=mainprog[tmpnl]+(r>1?"\n":"");return t},n.assign=function(n,t){return __user_vars__["x"+n]=t},n.assign2=function(n,t){return __user_vars__["x"+t]=n},n.q=n.quote,n.qraw=function(n){return n},n.qraw.quotf=n.qraw.rawf=!0,n.qw=function(n){return n.trim().split(/\s+/)},n.qw.quotf=!0,n["delete"]=function(n){return delete __user_vars__["x"+n]},n.indirect=function(t){return null==(tmp2=__user_vars__["x"+t])?n[t]:tmp2},n.builtinvar=function(t){return n[t]},n.uservar=function(n){return __user_vars__["x"+n]},n.index=function(n,t){return n[+t]},n.len=function(n){return n.length},n.arglen=function(){return arguments.length},n.argjoin=function(n){return Array.prototype.slice.call(arguments,1).join(n)},n.array=Array.of||function(){return Array.prototype.slice.call(arguments)},n.regex=RegExp,n.chr=String.fromCharCode,n.ord=function(n,t){return(""+n).charCodeAt(t)},n.baseconvert=function(n,t,r){return parseInt(n,t).toString(r)},n.method=function(n,t){return null!=n&&n[t]!==Function?n[t].apply(n,Array.prototype.slice.call(arguments,2)):void 0},n.pushobj=function(){for(var n=0,t=arguments.length;t>n;n++)stack.push(arguments[n])},n.pushv=function(){for(var n=0,t=arguments.length;t>n;n++)stack.push(__user_vars__["x"+arguments[n]])},n.stack_drop=function(n){for(n>0||(n=1);n-- >0;)stack.pop()},n.popv=function(){for(var n=0,t=arguments.length;t>n;n++)__user_vars__["x"+arguments[n]]=stack.pop()},n.stack_dup=function(n){n>0||(n=1),stack.push(stack[stack.length-n])},n.stack_swap=function(n){n>1||(n=2);var t=stack[stack.length-1];stack[stack.length-1]=stack[stack.length-n],stack[stack.length-n]=t},n.stack_rot=function(n){n>1||(n=3);for(var t=stack[id=stack.length-1],r=1;n>r;r++)stack[id]=stack[id-1],id--;stack[id]=t},n.stack_rotcc=function(n){n>1||(n=3);for(var t=stack[id=stack.length-n],r=1;n>r;r++)stack[id]=stack[id+1],id++;stack[id]=t},n.lambda=function(){var n=arguments;return function(){for(var t,r=0,e=n.length-1;e>r;r++)stack.push(__user_vars__["x"+n[r]]),__user_vars__["x"+n[r]]=arguments[r];for(t=__expr_eval__(n[r]),r--;r>=0;r--)__user_vars__["x"+n[r]]=stack.pop();return t}}}(__variables__);