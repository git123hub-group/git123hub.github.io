function click1(){var n;clinenum=0,mainprog=$("box1").value.split("\n"),breakpt=!1,delayf=!1,running=!1,parsed=!0,$("odoc1").innerHTML=outHtml="",changed=!1,tlines=mainprog.length,__user_vars__={},callstack=stack=[],callptr=0;for(var t=0,r=mainprog.length;r>t;++t)n=mainprog[t],":"===n.charAt(0)&&(__user_vars__["z"+n.slice(1)]=t)}function click2(){parsed||click1(),stepinto(),changed&&($("odoc1").innerHTML=outHtml),changed=!1,breakpt=!1}function click3(){for(parsed||click1(),running=!0;!breakpt;)stepinto();changed&&($("odoc1").innerHTML=outHtml),changed=!1,breakpt=!1,running&&delayf&&requestAnimationFrame(click3)}function stepinto(){try{var n;if((tmpline=clinenum)>=tlines)return parsed=!1,breakpt=!0,void(delayf=!1);if(tmpnl=clinenum+1,"#"===(n=mainprog[clinenum].charAt(0))||":"===n)return void++clinenum;for(var t=mainprog[clinenum];(n=mainprog[clinenum].match(/\\*$/))&&n[0].length%2===1;)t+="\n"+mainprog[++clinenum],++tmpnl;__expr_eval__(t),clinenum=tmpnl}catch(r){console.error(r),parsed=!1,breakpt=!0,delayf=!1}}var mainprog,clinenum,breakpt,delayf,parsed=!1,outHtml,changed,tmpnl,tlines,callstack,callptr,stack,running,tmpline;!function(n){n.print=function(n){outHtml+=escapeHTML(n),changed=!0},n.println=function(n){outHtml+=escapeHTML(n)+"\n",changed=!0},n.printf=function(){outHtml+=escapeHTML(sprintf.apply(null,arguments)),changed=!0},n.sprintf=function(){return sprintf.apply(null,arguments)},n.clear=function(n){outHtml="",changed=!0},n.breakpoint=function(){breakpt=!0,delayf=!1},n.jump=function(n){"string"==typeof n?tmpnl=__user_vars__["z"+n]:"number"==typeof n&&(tmpnl=tmpline+n)},n.jumpc=function(t,r){r&&n.jump(t)},n.call=function(n){callstack[callptr++]=tmpnl,"string"==typeof n?tmpnl=__user_vars__["z"+n]:"number"==typeof n&&(tmpnl=tmpline+n)},n["return"]=function(){return 0===callptr?(parsed=!1,breakpt=!0,void(delayf=!1)):void(tmpnl=callstack[--callptr])},n.nextframe=function(){breakpt=delayf=!0},n.sin=Math.sin,n.sinh=Math.sinh||function(n){return(Math.exp(n)-Math.exp(-n))/2},n.asin=Math.asin,n.asinh=Math.asinh||function(n){return sgn=1,0>n&&(n=-n,sgn=-1),sgn*Math.log(n+Math.sqrt(n*n+1))},n.cos=Math.cos,n.cosh=Math.cosh||function(n){return(Math.exp(n)+Math.exp(-n))/2},n.acos=Math.acos,n.acosh=Math.acosh||function(n){return Math.log(n+Math.sqrt(n*n-1))},n.tan=Math.tan,n.tanh=Math.tanh||function(n){return n===1/0?1:n===-(1/0)?-1:(Math.exp(n)-Math.exp(-n))/(Math.exp(n)+Math.exp(-n))},n.atan=Math.atan,n.atan2=Math.atan2,n.atanh=Math.atanh||function(n){return sgn=1,0>n&&(n=-n,sgn=-1),sgn*Math.log((1+n)/(1-n))/2},n.cot=function(n){return 1/Math.tan(n)},n.coth=function(t){return 1/n.tanh(t)},n.acot=function(n){return Math.atan(1/n)},n.acoth=function(t){return n.atanh(1/t)},n.sqr=function(n){return n*n},n.sqrt=Math.sqrt,n.ln=Math.log,n.log=function(n,t){return t||(t=10),Math.log(n)/Math.log(t)},n.log1p=Math.log1p||function(n){return Math.log(n)+1},n.log2=Math.log2||function(n){return Math.log(n)*Math.LOG2E},n.lg=n.log10=Math.log10||function(n){return Math.log(n)*Math.LOG10E},n.exp=Math.exp,n.expm1=Math.expm1||function(n){return Math.exp(n)-1},n.pow=Math.pow,n.mod=function(n,t){return n%t},n.quotient=function(n,t){return(n-n%t)/t},n.abs=function(n){return n>=0?n:-n},n.sign=Math.sign||function(n){return n=+n,0===n||isNaN(n)?+n:n>0?1:-1},n.ident=function(n){return n},n.neg=function(n){return-n},n.recip=function(n){return 1/n},n.zero=function(){return 0},n.one=function(){return 1},n.floor=Math.floor,n.ceil=Math.ceil,n.trunc=Math.trunc||function(n){return n-n%1},n.round=Math.round,n.hypot=Math.hypot||function(){for(var n=0,t=arguments.length,r=0;t>r;r++){if(arguments[r]===1/0||arguments[r]===-(1/0))return 1/0;n+=arguments[r]*arguments[r]}return Math.sqrt(n)},n.erf=function(t){var r=.140012,e=t*t,a=(4/Math.PI+r*e)/(1+r*e);return n.sign(t)*Math.sqrt(1-Math.exp(-e*a))},n.max=Math.max,n.min=Math.min,n.and=function(n,t){return n&&t},n.bit_and=function(n,t){return n&t},n.or=function(n,t){return n||t},n.bit_or=function(n,t){return n|t},n.not=function(n){return!n},n.bit_not=function(n){return~n},n.bit_xor=function(n,t){return n^t},n["if"]=function(n,t,r){return n?t:r},n.bit_sal=n.bit_shl=function(n,t){return n<<t},n.bit_sar=function(n,t){return n>>>t},n.bit_shr=function(n,t){return n>>t},n.equ=function(n,t){return n===t},n.neq=function(n,t){return n!==t},n.lss=function(n,t){return t>n},n.leq=function(n,t){return t>=n},n.gtr=function(n,t){return n>t},n.geq=function(n,t){return n>=t},n.pi=Math.PI,n.e=Math.E,n.phi=(Math.sqrt(5)+1)/2,n.infinity=n.Infinity=1/0,n.NaN=NaN,n["true"]=!0,n["false"]=!1,n["null"]=null,n.undefined=void 0,n.random=Math.random,n.alert=function(n){alert(n)},n.confirm=function(n){confirm(n)},n.prompt=function(n,t){prompt(n,t)},n.noop=function(){},n.escape=escapeHTML,n.unescape=function(n){var t={amp:"&",lt:"<",gt:">",quot:'"'};return(""+n).replace(/&([^;]+);/g,function(n,r){return"#"!==r.charAt(0)?t[r]:"x"!==r.charAt(1).toLowerCase()?String.fromCharCode(r.slice(1)):String.fromCharCode(parseInt(r.slice(2),16))})},n.beginCSS=function(n){outHtml+='<span style="'+escapeHTML(n)+'">'},n.endCSS=function(){outHtml+="</span>"},n.multilineString=function(n){for(var t="",r=n;r>0;r--,++tmpnl)t+=mainprog[tmpnl]+"\n";return t},n.assign=function(n,t){return __user_vars__["x"+n]=t},n["delete"]=function(n){return delete __user_vars__["x"+n]},n.indirect=function(t){return null==(tmp2=__user_vars__["x"+t])?n[t]:tmp2},n.arglen=function(){return arguments.length},n.argjoin=function(n){return Array.prototype.slice.call(arguments,1).join(n)},n.array=Array.of||function(){return Array.prototype.slice.call(arguments)},n.regex=RegExp,n.chr=String.fromCharCode,n.ord=function(n,t){return(""+n).charCodeAt(t)},n.baseconvert=function(n,t,r){return parseInt(n,t).toString(r)},n.method=function(n,t){return null!=n&&n[t]!==Function?n[t].apply(n,Array.prototype.slice.call(arguments,2)):void 0}}(__variables__);