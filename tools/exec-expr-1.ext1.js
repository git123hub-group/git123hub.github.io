function click1(){var _,a,r=$("inexpr").value,n=r.indexOf("=");try{n>=0?(_=r.slice(0,n).trim().replace(/[^\w\$]/),__variables__[_]=a=__expr_eval__(r.slice(n+1))):a=__expr_eval__(r),$("outexpr").innerHTML="<span class='error'>"+escapeHTML(a)+"</span>"}catch(t){$("outexpr").innerHTML="<span class='error'>错误: "+escapeHTML(t)+"</span>"}changed&&($("outdoc").innerHTML=Ostr)}var changed=!1,Ostr="";__variables__.print=function(_){Ostr+=escapeHTML(_),changed=!0},__variables__.println=function(_){Ostr+=escapeHTML(_)+"\n",changed=!0},__variables__.clear=function(_){Ostr="",changed=!0},__variables__.sin=Math.sin,__variables__.sinh=Math.sinh||function(_){return(Math.exp(_)-Math.exp(-_))/2},__variables__.asin=Math.asin,__variables__.asinh=Math.asinh||function(_){return sgn=1,0>_&&(_=-_,sgn=-1),sgn*Math.log(_+Math.sqrt(_*_+1))},__variables__.cos=Math.cos,__variables__.cosh=Math.cosh||function(_){return(Math.exp(_)+Math.exp(-_))/2},__variables__.acos=Math.acos,__variables__.acosh=Math.acosh||function(_){return Math.log(_+Math.sqrt(_*_-1))},__variables__.tan=Math.tan,__variables__.tanh=Math.tanh||function(_){return _===1/0?1:_===-(1/0)?-1:(Math.exp(_)-Math.exp(-_))/(Math.exp(_)+Math.exp(-_))},__variables__.atan=Math.atan,__variables__.atan2=Math.atan2,__variables__.atanh=Math.atanh||function(_){return sgn=1,0>_&&(_=-_,sgn=-1),sgn*Math.log((1+_)/(1-_))/2},__variables__.cot=function(_){return 1/Math.tan(_)},__variables__.coth=function(_){return 1/__variables__.tanh(_)},__variables__.acot=function(_){return Math.atan(1/_)},__variables__.acoth=function(_){return __variables__.atanh(1/_)},__variables__.sqr=function(_){return _*_},__variables__.sqrt=Math.sqrt,__variables__.ln=Math.log,__variables__.log=function(_,a){return a||(a=10),Math.log(_)/Math.log(a)},__variables__.log1p=Math.log1p||function(_){return Math.log(_)+1},__variables__.log2=Math.log10||function(_){return Math.log(_)*Math.LOG10E},__variables__.lg=__variables__.log10=Math.log10||function(_){return Math.log(_)*Math.LOG10E},__variables__.exp=Math.exp,__variables__.expm1=Math.expm1||function(_){return Math.exp(_)-1},__variables__.pow=Math.pow,__variables__.mod=function(_,a){},__variables__.quotient=function(_,a){},__variables__.abs=function(_){},__variables__.sign=Math.sign||function(_){return _=+_,0===_||isNaN(_)?+_:_>0?1:-1},__variables__.ident=function(_){return _},__variables__.neg=function(_){return-_},__variables__.recip=function(_){return 1/_},__variables__.zero=function(){return 0},__variables__.one=function(){return 1},__variables__.floor=Math.floor,__variables__.ceil=Math.ceil,__variables__.trunc=Math.trunc||function(_){return _-_%1},__variables__.round=Math.round,__variables__.hypot=Math.hypot||function(){for(var _=0,a=arguments.length,r=0;a>r;r++){if(arguments[r]===1/0||arguments[r]===-(1/0))return 1/0;_+=arguments[r]*arguments[r]}return Math.sqrt(_)},__variables__.erf=function(_){var a=.140012,r=(4/Math.PI+a*_*_)/(1+a*_*_);return __variables__.sign(_)*Math.sqrt(1-Math.exp(-_*_*r))},__variables__.max=Math.max,__variables__.min=Math.min,__variables__.and=function(_,a){return _&&a},__variables__.bit_and=function(_,a){return _&a},__variables__.or=function(_,a){return _||a},__variables__.bit_or=function(_,a){return _|a},__variables__.not=function(_){return!_},__variables__.bit_not=function(_){return~_},__variables__.bit_xor=function(_,a){return _^a},__variables__["if"]=function(_,a,r){return _?a:r},__variables__.bit_sal=__variables__.bit_shl=function(_,a){return _<<a},__variables__.bit_sar=function(_,a){return _>>>a},__variables__.bit_shr=function(_,a){return _>>a},__variables__.equ=function(_,a){return _===a},__variables__.neq=function(_,a){return _!==a},__variables__.lss=function(_,a){return a>_},__variables__.leq=function(_,a){return a>=_},__variables__.gtr=function(_,a){return _>a},__variables__.geq=function(_,a){return _>=a},__variables__.pi=Math.PI,__variables__.e=Math.E,__variables__.phi=(Math.sqrt(5)+1)/2,__variables__.random=Math.random;