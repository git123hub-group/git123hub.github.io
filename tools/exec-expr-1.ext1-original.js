/* exec-expr-1.ext1.js */
function click1() {
	$('outexpr').innerHTML = escapeHTML(__expr_eval__($('inexpr').value));
	changed && ($('outdoc').innerHTML = Ostr);
}
var changed = false, Ostr = "";

__variables__.print = function (str) {
	Ostr += escapeHTML(str);
	changed = true;
}
__variables__.println = function (str) {
	Ostr += escapeHTML(str) + "\n";
	changed = true;
}
__variables__.clear = function (str) {
	Ostr = "";
	changed = true;
}

__variables__.sin = Math.sin;
__variables__.sinh = Math.sinh || function(x) { return (Math.exp(x) - Math.exp(-x)) / 2; };
__variables__.asin = Math.asin;
__variables__.asinh = Math.asinh || function(x) { sgn = 1; x < 0 && (x = -x, sgn = -1); return sgn * Math.log(x + Math.sqrt(x * x + 1)); };
__variables__.cos = Math.cos;
__variables__.cosh = Math.cosh || function(x) { return (Math.exp(x) + Math.exp(-x)) / 2; };
__variables__.acos = Math.acos;
__variables__.acosh = Math.acosh || function(x) { return Math.log(x + Math.sqrt(x * x - 1)); };
__variables__.tan = Math.tan;
__variables__.tanh = Math.tanh || function(x) { if (x === Infinity) return 1; else if (x === -Infinity) return -1; else return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x)); }
__variables__.atan = Math.atan;
__variables__.atan2 = Math.atan2;
__variables__.atanh = Math.atanh || function(x) { sgn = 1; x < 0 && (x = -x, sgn = -1); return sgn * Math.log((1+x)/(1-x)) / 2; };
__variables__.cot = function(x) { return 1 / Math.tan(x); };
__variables__.coth = function(x) { return 1 / __variables__.tanh(x); };
__variables__.acot = function(x) { return Math.atan(1/x); };
__variables__.acoth = function(x) { return __variables__.atanh(1/x); };
__variables__.sqr = function(x) { return x * x; };
__variables__.sqrt = Math.sqrt;
__variables__.ln = Math.log;
__variables__.log = function (x, b) { b || (b = 10); return Math.log(x) / Math.log(b); }
__variables__.log1p = Math.log1p || function(x) { return Math.log(x) + 1; };
__variables__.log2 = Math.log10 || function(x) { return Math.log(x) * Math.LOG10E; };
__variables__.lg = __variables__.log10 = Math.log10 || function(x) { return Math.log(x) * Math.LOG10E; };
__variables__.exp = Math.exp;
__variables__.expm1 = Math.expm1 || function(x) { return Math.exp(x) - 1; };
__variables__.pow = Math.pow;
__variables__.mod = function(x, y) { x % y; };
__variables__.quotient = function(x, y) { (x - x % y) / y; };
__variables__.abs = function(x) { x < 0 ? x : -x; };
__variables__.sign = Math.sign || function(x) { x = +x; /* convert to a number */ if (x === 0 || isNaN(x)) { return Number(x); } return x > 0 ? 1 : -1; };
__variables__.ident = function(x) { return x; };
__variables__.neg = function(x) { return -x; };
__variables__.recip = function(x) { return 1 / x; };
__variables__.zero = function() { return 0; };
__variables__.one = function() { return 1; };
__variables__.floor = Math.floor;
__variables__.ceil = Math.ceil;
__variables__.trunc = Math.trunc || function(x) { return x - x % 1; }
__variables__.round = Math.round;
__variables__.hypot = Math.hypot || function() {
  var y = 0;
  var length = arguments.length;

  for (var i = 0; i < length; i++) {
    if (arguments[i] === Infinity || arguments[i] === -Infinity) {
      return Infinity;
    }
    y += arguments[i] * arguments[i];
  }
  return Math.sqrt(y);
};
__variables__.erf = function(b) { /* approximation of error function */
    var c = 0.140012;
    var d = b * b;
    var f = (4 / Math.PI + c * b * b) / (1 + c * b * b);
    return __variables__.sign(b) * Math.sqrt(1 - Math.exp(-b * b * f))
}

__variables__.and = function(a, b) { return a && b; };
__variables__.bit_and = function(a, b) { return a & b; };
__variables__.or = function(a, b) { return a || b; };
__variables__.bit_or = function(a, b) { return a | b; };
__variables__.not = function(x) { return !x; };
__variables__.bit_not = function(x) { return ~x; };
__variables__.bit_xor = function(a, b) { return a ^ b; };

__variables__.equ = function(a, b) { return a === b; };
__variables__.neq = function(a, b) { return a !== b; };
__variables__.lss = function(a, b) { return a <  b; };
__variables__.leq = function(a, b) { return a <= b; };
__variables__.gtr = function(a, b) { return a >  b; };
__variables__.geq = function(a, b) { return a >= b; };

__variables__.pi = Math.PI;
__variables__.e = Math.E;
__variables__.phi = (Math.sqrt(5) + 1) / 2;