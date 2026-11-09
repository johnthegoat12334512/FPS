(()=>{var Dc="170";var Pd=0,Eh=1,Id=2;var ku=1,Ld=2,$i=3,vn=0,qe=1,ke=2,Fi=0,wi=1,Ye=2,wh=3,Th=4,Dd=5,Fn=100,Ud=101,Nd=102,zd=103,Fd=104,Od=200,kd=201,Bd=202,Hd=203,al=204,ll=205,Vd=206,Gd=207,Wd=208,Xd=209,qd=210,Yd=211,$d=212,Zd=213,Jd=214,cl=0,hl=1,ul=2,gs=3,dl=4,fl=5,pl=6,ml=7,Uc=0,Kd=1,Qd=2,yn=0,Nc=1,zc=2,Fc=3,yr=4,jd=5,Oc=6,kc=7;var Bu=300,xs=301,ys=302,gl=303,xl=304,$o=306,vs=1e3,kn=1001,yl=1002,si=1003,tf=1004;var Pr=1005;var Ni=1006,Ta=1007;var Bn=1008;var Qi=1009,Hu=1010,Vu=1011,sr=1012,Bc=1013,Hn=1014,zi=1015,oi=1016,Hc=1017,Vc=1018,_s=1020,Gu=35902,Wu=1021,Xu=1022,Ei=1023,qu=1024,Yu=1025,fs=1026,Ms=1027,Gc=1028,Wc=1029,$u=1030,Xc=1031;var qc=1033,co=33776,ho=33777,uo=33778,fo=33779,vl=35840,_l=35841,Ml=35842,bl=35843,Sl=36196,El=37492,wl=37496,Tl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Il=37813,Ll=37814,Dl=37815,Ul=37816,Nl=37817,zl=37818,Fl=37819,Ol=37820,kl=37821,po=36492,Bl=36494,Hl=36495,Zu=36283,Vl=36284,Gl=36285,Wl=36286;var mo=2300,Xl=2301,Aa=2302,Ah=2400,Rh=2401,Ch=2402;var ef=3200,nf=3201;var Yc=0,sf=1,gn="",ye="srgb",Cs="srgb-linear",Zo="linear",le="srgb";var qn=7680;var Ph=519,rf=512,of=513,af=514,Ju=515,lf=516,cf=517,hf=518,uf=519,ql=35044,Sn=35048;var Ih="300 es",Ji=2e3,go=2001,_n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=1234567,Qs=Math.PI/180,rr=180/Math.PI;function Oi(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[r&255]+We[r>>8&255]+We[r>>16&255]+We[r>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function Oe(r,t,e){return Math.max(t,Math.min(e,r))}function $c(r,t){return(r%t+t)%t}function df(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function ff(r,t,e){return r!==t?(e-r)/(t-r):0}function js(r,t,e){return(1-e)*r+e*t}function pf(r,t,e,i){return js(r,t,1-Math.exp(-e*i))}function mf(r,t=1){return t-Math.abs($c(r,t*2)-t)}function gf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function xf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function yf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function vf(r,t){return r+Math.random()*(t-r)}function _f(r){return r*(.5-Math.random())}function Mf(r){r!==void 0&&(Lh=r);let t=Lh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bf(r){return r*Qs}function Sf(r){return r*rr}function Ef(r){return(r&r-1)===0&&r!==0}function wf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Tf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Af(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Si(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function he(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Zc={DEG2RAD:Qs,RAD2DEG:rr,generateUUID:Oi,clamp:Oe,euclideanModulo:$c,mapLinear:df,inverseLerp:ff,lerp:js,damp:pf,pingpong:mf,smoothstep:gf,smootherstep:xf,randInt:yf,randFloat:vf,randFloatSpread:_f,seededRandom:Mf,degToRad:bf,radToDeg:Sf,isPowerOfTwo:Ef,ceilPowerOfTwo:wf,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:Af,normalize:he,denormalize:Si},K=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class r{constructor(t,e,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],_=n[1],M=n[4],v=n[7],I=n[2],w=n[5],C=n[8];return s[0]=a*x+o*_+l*I,s[3]=a*g+o*M+l*w,s[6]=a*m+o*v+l*C,s[1]=c*x+h*_+u*I,s[4]=c*g+h*M+u*w,s[7]=c*m+h*v+u*C,s[2]=d*x+f*_+p*I,s[5]=d*g+f*M+p*w,s[8]=d*m+f*v+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ra=new Xt;function Ku(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rf(){let r=xo("canvas");return r.style.display="block",r}var Dh={};function Js(r){r in Dh||(Dh[r]=!0,console.warn(r))}function Cf(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Pf(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function If(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gn?Zo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Uh=[.64,.33,.3,.6,.15,.06],Nh=[.2126,.7152,.0722],zh=[.3127,.329],Fh=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[Cs]:{primaries:Uh,whitePoint:zh,transfer:Zo,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:Nh,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:Uh,whitePoint:zh,transfer:le,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:Nh,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});var Yn,Yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=xo("canvas")),Yn.width=t.width,Yn.height=t.height;let i=Yn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ki(e[i]/255)*255):e[i]=Ki(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lf=0,yo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Ca(n[a].image)):s.push(Ca(n[a]))}else s=Ca(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Ca(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Df=0,ti=class r extends _n{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=kn,n=kn,s=Ni,a=Bn,o=Ei,l=Qi,c=r.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Oi(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Bu;ti.DEFAULT_ANISOTROPY=1;var ue=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(f+1)/2,I=(m+1)/2,w=(h+d)/4,C=(u+x)/4,P=(p+g)/4;return M>v&&M>I?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=w/i,s=C/i):v>I?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=w/n,s=P/n):I<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(I),i=C/s,n=P/s),this.set(i,n,s,e),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$l=class extends _n{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new ti(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends $l{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vo=class extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=si,this.minFilter=si,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=si,this.minFilter=si,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==p){let g=1-o,m=l*d+c*f+h*p+u*x,_=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let I=Math.sqrt(M),w=Math.atan2(I,m*_);g=Math.sin(g*w)/I,o=Math.sin(o*w)/I}let v=o*_;if(l=l*g+d*v,c=c*g+f*v,h=h*g+p*v,u=u*g+x*v,g===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new R,kh=new ki,ji=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_i):_i.fromBufferAttribute(s,a),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Lr.subVectors(this.max,ks),$n.subVectors(t.a,ks),Zn.subVectors(t.b,ks),Jn.subVectors(t.c,ks),hn.subVectors(Zn,$n),un.subVectors(Jn,Zn),Pn.subVectors($n,Jn);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Pn.z,Pn.y,hn.z,0,-hn.x,un.z,0,-un.x,Pn.z,0,-Pn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Pn.y,Pn.x,0];return!Ia(e,$n,Zn,Jn,Lr)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,$n,Zn,Jn,Lr))?!1:(Dr.crossVectors(hn,un),e=[Dr.x,Dr.y,Dr.z],Ia(e,$n,Zn,Jn,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gi=[new R,new R,new R,new R,new R,new R,new R,new R],_i=new R,Ir=new ji,$n=new R,Zn=new R,Jn=new R,hn=new R,un=new R,Pn=new R,ks=new R,Lr=new R,Dr=new R,In=new R;function Ia(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){In.fromArray(r,s);let o=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),h=i.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Uf=new ji,Bs=new R,La=new R,tn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Uf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Bs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(La)),this.expandByPoint(Bs.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wi=new R,Da=new R,Ur=new R,dn=new R,Ua=new R,Nr=new R,Na=new R,or=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Da.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),dn.copy(this.origin).sub(Da);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Ur),o=dn.dot(this.direction),l=-dn.dot(Ur),c=dn.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Da).addScaledVector(Ur,d),f}intersectSphere(t,e){Wi.subVectors(t.center,this.origin);let i=Wi.dot(this.direction),n=Wi.dot(Wi)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,n,s){Ua.subVectors(e,t),Nr.subVectors(i,t),Na.crossVectors(Ua,Nr);let a=this.direction.dot(Na),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dn.subVectors(this.origin,t);let l=o*this.direction.dot(Nr.crossVectors(dn,Nr));if(l<0)return null;let c=o*this.direction.dot(Ua.cross(dn));if(c<0||l+c>a)return null;let h=-o*dn.dot(Na);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class r{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Kn.setFromMatrixColumn(t,0).length(),s=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,zf)}lookAt(t,e,i){let n=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),fn.crossVectors(i,ii),fn.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),fn.crossVectors(i,ii)),fn.normalize(),zr.crossVectors(ii,fn),n[0]=fn.x,n[4]=zr.x,n[8]=ii.x,n[1]=fn.y,n[5]=zr.y,n[9]=ii.y,n[2]=fn.z,n[6]=zr.z,n[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],_=i[3],M=i[7],v=i[11],I=i[15],w=n[0],C=n[4],P=n[8],S=n[12],y=n[1],T=n[5],U=n[9],D=n[13],N=n[2],V=n[6],H=n[10],Z=n[14],k=n[3],et=n[7],nt=n[11],ut=n[15];return s[0]=a*w+o*y+l*N+c*k,s[4]=a*C+o*T+l*V+c*et,s[8]=a*P+o*U+l*H+c*nt,s[12]=a*S+o*D+l*Z+c*ut,s[1]=h*w+u*y+d*N+f*k,s[5]=h*C+u*T+d*V+f*et,s[9]=h*P+u*U+d*H+f*nt,s[13]=h*S+u*D+d*Z+f*ut,s[2]=p*w+x*y+g*N+m*k,s[6]=p*C+x*T+g*V+m*et,s[10]=p*P+x*U+g*H+m*nt,s[14]=p*S+x*D+g*Z+m*ut,s[3]=_*w+M*y+v*N+I*k,s[7]=_*C+M*T+v*V+I*et,s[11]=_*P+M*U+v*H+I*nt,s[15]=_*S+M*D+v*Z+I*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+x*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+g*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+m*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=u*g*c-x*d*c+x*l*f-o*g*f-u*l*m+o*d*m,M=p*d*c-h*g*c-p*l*f+a*g*f+h*l*m-a*d*m,v=h*x*c-p*u*c+p*o*f-a*x*f-h*o*m+a*u*m,I=p*u*l-h*x*l-p*o*d+a*x*d+h*o*g-a*u*g,w=e*_+i*M+n*v+s*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=_*C,t[1]=(x*d*s-u*g*s-x*n*f+i*g*f+u*n*m-i*d*m)*C,t[2]=(o*g*s-x*l*s+x*n*c-i*g*c-o*n*m+i*l*m)*C,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*C,t[4]=M*C,t[5]=(h*g*s-p*d*s+p*n*f-e*g*f-h*n*m+e*d*m)*C,t[6]=(p*l*s-a*g*s-p*n*c+e*g*c+a*n*m-e*l*m)*C,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*C,t[8]=v*C,t[9]=(p*u*s-h*x*s-p*i*f+e*x*f+h*i*m-e*u*m)*C,t[10]=(a*x*s-p*o*s+p*i*c-e*x*c-a*i*m+e*o*m)*C,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*C,t[12]=I*C,t[13]=(h*x*n-p*u*n+p*i*d-e*x*d-h*i*g+e*u*g)*C,t[14]=(p*o*n-a*x*n-p*i*l+e*x*l+a*i*g-e*o*g)*C,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*C,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,x=a*h,g=a*u,m=o*u,_=l*c,M=l*h,v=l*u,I=i.x,w=i.y,C=i.z;return n[0]=(1-(x+m))*I,n[1]=(f+v)*I,n[2]=(p-M)*I,n[3]=0,n[4]=(f-v)*w,n[5]=(1-(d+m))*w,n[6]=(g+_)*w,n[7]=0,n[8]=(p+M)*C,n[9]=(g-_)*C,n[10]=(1-(d+x))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=Kn.set(n[0],n[1],n[2]).length(),a=Kn.set(n[4],n[5],n[6]).length(),o=Kn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Mi.copy(this);let c=1/s,h=1/a,u=1/o;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=h,Mi.elements[5]*=h,Mi.elements[6]*=h,Mi.elements[8]*=u,Mi.elements[9]*=u,Mi.elements[10]*=u,e.setFromRotationMatrix(Mi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=Ji){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,p;if(o===Ji)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===go)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Ji){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-s),d=(e+t)*c,f=(i+n)*h,p,x;if(o===Ji)p=(a+s)*u,x=-2*u;else if(o===go)p=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Kn=new R,Mi=new ie,Nf=new R(0,0,0),zf=new R(1,1,1),fn=new R,zr=new R,ii=new R,Bh=new ie,Hh=new ki,$e=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ff=0,Vh=new R,Qn=new ki,Xi=new ie,Fr=new R,Hs=new R,Of=new R,kf=new ki,Gh=new R(1,0,0),Wh=new R(0,1,0),Xh=new R(0,0,1),qh={type:"added"},Bf={type:"removed"},jn={type:"childadded",child:null},za={type:"childremoved",child:null},_e=class r extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new R,e=new $e,i=new ki,n=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ie},normalMatrix:{value:new Xt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(Gh,t)}rotateY(t){return this.rotateOnAxis(Wh,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gh,t)}translateY(t){return this.translateOnAxis(Wh,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fr.copy(t):Fr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Hs,Fr,this.up):Xi.lookAt(Fr,Hs,this.up),this.quaternion.setFromRotationMatrix(Xi),n&&(Xi.extractRotation(n.matrixWorld),Qn.setFromRotationMatrix(Xi),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qh),jn.child=t,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bf),za.child=t,this.dispatchEvent(za),za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qh),jn.child=t,this.dispatchEvent(jn),jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};_e.DEFAULT_UP=new R(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=new R,qi=new R,Fa=new R,Yi=new R,ts=new R,es=new R,Yh=new R,Oa=new R,ka=new R,Ba=new R,Ha=new ue,Va=new ue,Ga=new ue,xn=class r{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),bi.subVectors(t,e),n.cross(bi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){bi.subVectors(n,e),qi.subVectors(i,e),Fa.subVectors(t,e);let a=bi.dot(bi),o=bi.dot(qi),l=bi.dot(Fa),c=qi.dot(qi),h=qi.dot(Fa),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return Ha.setScalar(0),Va.setScalar(0),Ga.setScalar(0),Ha.fromBufferAttribute(t,e),Va.fromBufferAttribute(t,i),Ga.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Ha,s.x),a.addScaledVector(Va,s.y),a.addScaledVector(Ga,s.z),a}static isFrontFacing(t,e,i,n){return bi.subVectors(i,e),qi.subVectors(t,e),bi.cross(qi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),bi.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;ts.subVectors(n,i),es.subVectors(s,i),Oa.subVectors(t,i);let l=ts.dot(Oa),c=es.dot(Oa);if(l<=0&&c<=0)return e.copy(i);ka.subVectors(t,n);let h=ts.dot(ka),u=es.dot(ka);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ts,a);Ba.subVectors(t,s);let f=ts.dot(Ba),p=es.dot(Ba);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(es,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Yh.subVectors(s,n),o=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(Yh,o);let m=1/(g+x+d);return a=x*m,o=d*m,e.copy(i).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Wa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Kt.workingColorSpace){if(t=$c(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Wa(a,s,t+1/3),this.g=Wa(a,s,t),this.b=Wa(a,s,t-1/3)}return Kt.toWorkingColorSpace(this,n),this}setStyle(t,e=ye){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let i=Qu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Kt.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Oe(Xe.r*255,0,255))*65536+Math.round(Oe(Xe.g*255,0,255))*256+Math.round(Oe(Xe.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Xe.copy(this),e);let i=Xe.r,n=Xe.g,s=Xe.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=ye){Kt.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,i=Xe.g,n=Xe.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(pn),this.setHSL(pn.h+t,pn.s+e,pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pn),t.getHSL(Or);let i=js(pn.h,Or.h,e),n=js(pn.s,Or.s,e),s=js(pn.l,Or.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new gt;gt.NAMES=Qu;var Hf=0,Ti=class extends _n{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Oi(),this.name="",this.blending=wi,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(i.blending=this.blending),this.side!==vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jt=class extends Ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new R,kr=new K,Re=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=he(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}};var Mo=class extends Re{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var bo=class extends Re{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ht=class extends Re{constructor(t,e,i){super(new Float32Array(t),e,i)}},Vf=0,ui=new ie,Xa=new _e,is=new R,ni=new ji,Vs=new ji,De=new R,de=class r extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ku(t)?bo:Mo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,i){return ui.makeTranslation(t,e,i),this.applyMatrix4(ui),this}scale(t,e,i){return ui.makeScale(t,e,i),this.applyMatrix4(ui),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(i,3))}else{for(let i=0,n=e.count;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(ni.min,Vs.min),ni.expandByPoint(De),De.addVectors(ni.max,Vs.max),ni.expandByPoint(De)):(ni.expandByPoint(Vs.min),ni.expandByPoint(Vs.max))}ni.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)De.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(De));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),De.add(is)),n=Math.max(n,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new R,l[P]=new R;let c=new R,h=new R,u=new R,d=new K,f=new K,p=new K,x=new R,g=new R;function m(P,S,y){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,y),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let T=1/(f.x*p.y-p.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(T),o[P].add(x),o[S].add(x),o[y].add(x),l[P].add(g),l[S].add(g),l[y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,S=_.length;P<S;++P){let y=_[P],T=y.start,U=y.count;for(let D=T,N=T+U;D<N;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let M=new R,v=new R,I=new R,w=new R;function C(P){I.fromBufferAttribute(n,P),w.copy(I);let S=o[P];M.copy(S),M.sub(I.multiplyScalar(I.dot(S))).normalize(),v.crossVectors(w,S);let T=v.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,T)}for(let P=0,S=_.length;P<S;++P){let y=_[P],T=y.start,U=y.count;for(let D=T,N=T+U;D<N;D+=3)C(t.getX(D+0)),C(t.getX(D+1)),C(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$h=new ie,Ln=new or,Br=new tn,Zh=new R,Hr=new R,Vr=new R,Gr=new R,qa=new R,Wr=new R,Jh=new R,Xr=new R,tt=class extends _e{constructor(t=new de,e=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(qa.fromBufferAttribute(u,t),a?Wr.addScaledVector(qa,h):Wr.addScaledVector(qa.sub(e),h))}e.add(Wr)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(s),Ln.copy(t.ray).recast(t.near),!(Br.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(Br,Zh)===null||Ln.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&($h.copy(s).invert(),Ln.copy(t.ray).applyMatrix4($h),!(i.boundingBox!==null&&Ln.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,I=M;v<I;v+=3){let w=o.getX(v),C=o.getX(v+1),P=o.getX(v+2);n=qr(this,m,t,i,c,h,u,w,C,P),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=o.getX(g),M=o.getX(g+1),v=o.getX(g+2);n=qr(this,a,t,i,c,h,u,_,M,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,I=M;v<I;v+=3){let w=v,C=v+1,P=v+2;n=qr(this,m,t,i,c,h,u,w,C,P),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=g,M=g+1,v=g+2;n=qr(this,a,t,i,c,h,u,_,M,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Gf(r,t,e,i,n,s,a,o){let l;if(t.side===qe?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===vn,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Xr);return c<e.near||c>e.far?null:{distance:c,point:Xr.clone(),object:r}}function qr(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Hr),r.getVertexPosition(l,Vr),r.getVertexPosition(c,Gr);let h=Gf(r,t,e,i,Hr,Vr,Gr,Jh);if(h){let u=new R;xn.getBarycoord(Jh,Hr,Vr,Gr,u),n&&(h.uv=xn.getInterpolatedAttribute(n,o,l,c,u,new K)),s&&(h.uv1=xn.getInterpolatedAttribute(s,o,l,c,u,new K)),a&&(h.normal=xn.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};xn.getNormal(Hr,Vr,Gr,d.normal),h.face=d,h.barycoord=u}return h}var Ze=class r extends de{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function p(x,g,m,_,M,v,I,w,C,P,S){let y=v/C,T=I/P,U=v/2,D=I/2,N=w/2,V=C+1,H=P+1,Z=0,k=0,et=new R;for(let nt=0;nt<H;nt++){let ut=nt*T-D;for(let It=0;It<V;It++){let Ut=It*y-U;et[x]=Ut*_,et[g]=ut*M,et[m]=N,c.push(et.x,et.y,et.z),et[x]=0,et[g]=0,et[m]=w>0?1:-1,h.push(et.x,et.y,et.z),u.push(It/C),u.push(1-nt/P),Z+=1}}for(let nt=0;nt<P;nt++)for(let ut=0;ut<C;ut++){let It=d+ut+V*nt,Ut=d+ut+V*(nt+1),q=d+(ut+1)+V*(nt+1),lt=d+(ut+1)+V*nt;l.push(It,Ut,lt),l.push(Ut,q,lt),k+=6}o.addGroup(f,k,S),f+=k,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bs(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Qe(r){let t={};for(let e=0;e<r.length;e++){let i=bs(r[e]);for(let n in i)t[n]=i[n]}return t}function Wf(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ju(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var En={clone:bs,merge:Qe},Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Me=class extends Ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},So=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Ji}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=new R,Kh=new K,Qh=new K,Ue=class extends So{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mn.x,mn.y).multiplyScalar(-t/mn.z),mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mn.x,mn.y).multiplyScalar(-t/mn.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,Qh),e.subVectors(Qh,Kh)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ns=-90,ss=1,Jl=class extends _e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ue(ns,ss,t,e);n.layers=this.layers,this.add(n);let s=new Ue(ns,ss,t,e);s.layers=this.layers,this.add(s);let a=new Ue(ns,ss,t,e);a.layers=this.layers,this.add(a);let o=new Ue(ns,ss,t,e);o.layers=this.layers,this.add(o);let l=new Ue(ns,ss,t,e);l.layers=this.layers,this.add(l);let c=new Ue(ns,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Eo=class extends ti{constructor(t,e,i,n,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kl=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Eo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ni}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ze(5,5,5),s=new Me({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:Fi});s.uniforms.tEquirect.value=e;let a=new tt(n,s),o=e.minFilter;return e.minFilter===Bn&&(e.minFilter=Ni),new Jl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Ya=new R,Yf=new R,$f=new Xt,Zi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Ya.subVectors(i,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ya),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||$f.getNormalMatrix(t),n=this.coplanarPoint(Ya).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dn=new tn,Yr=new R,ar=class{constructor(t=new Zi,e=new Zi,i=new Zi,n=new Zi,s=new Zi,a=new Zi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ji){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],p=n[9],x=n[10],g=n[11],m=n[12],_=n[13],M=n[14],v=n[15];if(i[0].setComponents(l-s,d-c,g-f,v-m).normalize(),i[1].setComponents(l+s,d+c,g+f,v+m).normalize(),i[2].setComponents(l+a,d+h,g+p,v+_).normalize(),i[3].setComponents(l-a,d-h,g-p,v-_).normalize(),i[4].setComponents(l-o,d-u,g-x,v-M).normalize(),e===Ji)i[5].setComponents(l+o,d+u,g+x,v+M).normalize();else if(e===go)i[5].setComponents(o,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Yr.x=n.normal.x>0?t.max.x:t.min.x,Yr.y=n.normal.y>0?t.max.y:t.min.y,Yr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function td(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Zf(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var He=class r extends de{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*d-a;for(let M=0;M<c;M++){let v=M*u-s;p.push(v,-_,0),x.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let M=_+c*m,v=_+c*(m+1),I=_+1+c*(m+1),w=_+1+c*m;f.push(M,v,w),f.push(v,I,w)}this.setIndex(f),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,w0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Am=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:Jf,alphahash_pars_fragment:Kf,alphamap_fragment:Qf,alphamap_pars_fragment:jf,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:ip,aomap_pars_fragment:np,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:xp,color_vertex:yp,common:vp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:Mp,displacementmap_pars_vertex:bp,displacementmap_vertex:Sp,emissivemap_fragment:Ep,emissivemap_pars_fragment:wp,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Vp,envmap_vertex:Lp,fog_vertex:Dp,fog_pars_vertex:Up,fog_fragment:Np,fog_pars_fragment:zp,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Op,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Bp,lights_pars_begin:Hp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:$p,lights_fragment_begin:Zp,lights_fragment_maps:Jp,lights_fragment_end:Kp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:i0,map_pars_fragment:n0,map_particle_fragment:s0,map_particle_pars_fragment:r0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:a0,morphinstance_vertex:l0,morphcolor_vertex:c0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:x0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:b0,opaque_fragment:S0,packing:E0,premultiplied_alpha_fragment:w0,project_vertex:T0,dithering_fragment:A0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:L0,shadowmap_vertex:D0,shadowmask_pars_fragment:U0,skinbase_vertex:N0,skinning_pars_vertex:z0,skinning_vertex:F0,skinnormal_vertex:O0,specularmap_fragment:k0,specularmap_pars_fragment:B0,tonemapping_fragment:H0,tonemapping_pars_fragment:V0,transmission_fragment:G0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:q0,uv_vertex:Y0,worldpos_vertex:$0,background_vert:Z0,background_frag:J0,backgroundCube_vert:K0,backgroundCube_frag:Q0,cube_vert:j0,cube_frag:tm,depth_vert:em,depth_frag:im,distanceRGBA_vert:nm,distanceRGBA_frag:sm,equirect_vert:rm,equirect_frag:om,linedashed_vert:am,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:dm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:xm,meshphong_frag:ym,meshphysical_vert:vm,meshphysical_frag:_m,meshtoon_vert:Mm,meshtoon_frag:bm,points_vert:Sm,points_frag:Em,shadow_vert:wm,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Rm},ft={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Ui={basic:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new gt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new gt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Qe([ft.points,ft.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Qe([ft.common,ft.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Qe([ft.sprite,ft.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Qe([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Qe([ft.lights,ft.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Ui.physical={uniforms:Qe([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var $r={r:0,b:0,g:0},Un=new $e,Cm=new ie;function Pm(r,t,e,i,n,s,a){let o=new gt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function p(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function x(_){let M=!1,v=p(_);v===null?m(o,l):v&&v.isColor&&(m(v,1),M=!0);let I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(_,M){let v=p(M);v&&(v.isCubeTexture||v.mapping===$o)?(h===void 0&&(h=new tt(new Ze(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:bs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Un.copy(M.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(Un)),h.material.toneMapped=Kt.getTransfer(v.colorSpace)!==le,(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new tt(new He(2,2),new Me({name:"BackgroundMaterial",uniforms:bs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,M){_.getRGB($r,ju(r)),i.buffers.color.setClear($r.r,$r.g,$r.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(o,l)},render:x,addToRenderList:g}}function Im(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(y,T,U,D,N){let V=!1,H=u(D,U,T);s!==H&&(s=H,c(s.object)),V=f(y,D,U,N),V&&p(y,D,U,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(y,T,U,D),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,T,U){let D=U.wireframe===!0,N=i[y.id];N===void 0&&(N={},i[y.id]=N);let V=N[T.id];V===void 0&&(V={},N[T.id]=V);let H=V[D];return H===void 0&&(H=d(l()),V[D]=H),H}function d(y){let T=[],U=[],D=[];for(let N=0;N<e;N++)T[N]=0,U[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:D,object:y,attributes:{},index:null}}function f(y,T,U,D){let N=s.attributes,V=T.attributes,H=0,Z=U.getAttributes();for(let k in Z)if(Z[k].location>=0){let nt=N[k],ut=V[k];if(ut===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),nt===void 0||nt.attribute!==ut||ut&&nt.data!==ut.data)return!0;H++}return s.attributesNum!==H||s.index!==D}function p(y,T,U,D){let N={},V=T.attributes,H=0,Z=U.getAttributes();for(let k in Z)if(Z[k].location>=0){let nt=V[k];nt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor));let ut={};ut.attribute=nt,nt&&nt.data&&(ut.data=nt.data),N[k]=ut,H++}s.attributes=N,s.attributesNum=H,s.index=D}function x(){let y=s.newAttributes;for(let T=0,U=y.length;T<U;T++)y[T]=0}function g(y){m(y,0)}function m(y,T){let U=s.newAttributes,D=s.enabledAttributes,N=s.attributeDivisors;U[y]=1,D[y]===0&&(r.enableVertexAttribArray(y),D[y]=1),N[y]!==T&&(r.vertexAttribDivisor(y,T),N[y]=T)}function _(){let y=s.newAttributes,T=s.enabledAttributes;for(let U=0,D=T.length;U<D;U++)T[U]!==y[U]&&(r.disableVertexAttribArray(U),T[U]=0)}function M(y,T,U,D,N,V,H){H===!0?r.vertexAttribIPointer(y,T,U,N,V):r.vertexAttribPointer(y,T,U,D,N,V)}function v(y,T,U,D){x();let N=D.attributes,V=U.getAttributes(),H=T.defaultAttributeValues;for(let Z in V){let k=V[Z];if(k.location>=0){let et=N[Z];if(et===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(et=y.instanceColor)),et!==void 0){let nt=et.normalized,ut=et.itemSize,It=t.get(et);if(It===void 0)continue;let Ut=It.buffer,q=It.type,lt=It.bytesPerElement,wt=q===r.INT||q===r.UNSIGNED_INT||et.gpuType===Bc;if(et.isInterleavedBufferAttribute){let ht=et.data,Dt=ht.stride,kt=et.offset;if(ht.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)m(k.location+Ft,ht.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)g(k.location+Ft);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let Ft=0;Ft<k.locationSize;Ft++)M(k.location+Ft,ut/k.locationSize,q,nt,Dt*lt,(kt+ut/k.locationSize*Ft)*lt,wt)}else{if(et.isInstancedBufferAttribute){for(let ht=0;ht<k.locationSize;ht++)m(k.location+ht,et.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ht=0;ht<k.locationSize;ht++)g(k.location+ht);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let ht=0;ht<k.locationSize;ht++)M(k.location+ht,ut/k.locationSize,q,nt,ut*lt,ut/k.locationSize*ht*lt,wt)}}else if(H!==void 0){let nt=H[Z];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(k.location,nt);break;case 3:r.vertexAttrib3fv(k.location,nt);break;case 4:r.vertexAttrib4fv(k.location,nt);break;default:r.vertexAttrib1fv(k.location,nt)}}}}_()}function I(){P();for(let y in i){let T=i[y];for(let U in T){let D=T[U];for(let N in D)h(D[N].object),delete D[N];delete T[U]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;let T=i[y.id];for(let U in T){let D=T[U];for(let N in D)h(D[N].object),delete D[N];delete T[U]}delete i[y.id]}function C(y){for(let T in i){let U=i[T];if(U[y.id]===void 0)continue;let D=U[y.id];for(let N in D)h(D[N].object),delete D[N];delete U[y.id]}}function P(){S(),a=!0,s!==n&&(s=n,c(s.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Lm(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];e.update(p,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Dm(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){return!(C!==Ei&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let P=C===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Qi&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zi&&!P)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=p>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:I,maxSamples:w}}function Um(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Zi,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{let _=s?0:i,M=_*4,v=m.clippingState||null;l.value=v,v=h(p,d,M,f);for(let I=0;I!==M;++I)v[I]=e[I];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,v=f;M!==x;++M,v+=4)a.copy(u[M]).applyMatrix4(_,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Nm(r){let t=new WeakMap;function e(a,o){return o===gl?a.mapping=xs:o===xl&&(a.mapping=ys),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===gl||o===xl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Kl(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Ss=class extends So{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,jh=[.125,.215,.35,.446,.526,.582],On=20,$a=new Ss,tu=new gt,Za=null,Ja=0,Ka=0,Qa=!1,zn=(1+Math.sqrt(5))/2,rs=1/zn,eu=[new R(-zn,rs,0),new R(zn,rs,0),new R(-rs,0,zn),new R(rs,0,zn),new R(0,zn,-rs),new R(0,zn,rs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Es=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,Ja,Ka),this._renderer.xr.enabled=Qa,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:oi,format:Ei,colorSpace:Cs,depthBuffer:!1},n=iu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(s)),this._blurMaterial=Fm(s,t,e)}return n}_compileMaterial(t){let e=new tt(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,i,n){let o=new Ue(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(tu),h.toneMapping=yn,h.autoClear=!1;let f=new Jt({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),p=new tt(new Ze,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(tu),x=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let M=this._cubeSize;Zr(n,_*M,m>2?M:0,M,M),h.setRenderTarget(n),x&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===xs||t.mapping===ys;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new tt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Zr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,$a)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=eu[(n-s-1)%eu.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new tt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*On-1),x=s/p,g=isFinite(s)?1+Math.floor(h*x):On;g>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${On}`);let m=[],_=0;for(let C=0;C<On;++C){let P=C/x,S=Math.exp(-P*P/2);m.push(S),C===0?_+=S:C<g&&(_+=2*S)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-i;let v=this._sizeLods[n],I=3*v*(n>M-us?n-M+us:0),w=4*(this._cubeSize-v);Zr(e,I,w,3*v,2*v),l.setRenderTarget(e),l.render(u,$a)}};function zm(r){let t=[],e=[],i=[],n=r,s=r-us+1+jh.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>r-us?l=jh[a-r+us-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*f),M=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,P=w>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(S,x*p*w),M.set(d,g*p*w);let y=[w,w,w,w,w,w];v.set(y,m*p*w)}let I=new de;I.setAttribute("position",new Re(_,x)),I.setAttribute("uv",new Re(M,g)),I.setAttribute("faceIndex",new Re(v,m)),t.push(I),n>us&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function iu(r,t,e){let i=new Be(r,t,e);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Fm(r,t,e){let i=new Float32Array(On),n=new R(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function nu(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function su(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Om(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===gl||l===xl,h=l===xs||l===ys;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Es(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Es(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function km(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Js("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Bm(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let M=0,v=_.length;M<v;M+=3){let I=_[M+0],w=_[M+1],C=_[M+2];d.push(I,w,w,C,C,I)}}else if(p!==void 0){let _=p.array;x=p.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let I=M+0,w=M+1,C=M+2;d.push(I,w,w,C,C,I)}}else return;let g=new(Ku(d)?bo:Mo)(d,1);g.version=x;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Hm(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),e.update(f,i,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(i,f,s,d*a,p),e.update(f,i,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function u(d,f,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*x[_];e.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vm(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Gm(r,t,e){let i=new WeakMap,n=new ue;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=o.attributes.position.count*M,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*I*4*u),C=new vo(w,v,I,u);C.type=zi,C.needsUpdate=!0;let P=M*4;for(let y=0;y<u;y++){let T=g[y],U=m[y],D=_[y],N=v*I*4*y;for(let V=0;V<T.count;V++){let H=V*P;f===!0&&(n.fromBufferAttribute(T,V),w[N+H+0]=n.x,w[N+H+1]=n.y,w[N+H+2]=n.z,w[N+H+3]=0),p===!0&&(n.fromBufferAttribute(U,V),w[N+H+4]=n.x,w[N+H+5]=n.y,w[N+H+6]=n.z,w[N+H+7]=0),x===!0&&(n.fromBufferAttribute(D,V),w[N+H+8]=n.x,w[N+H+9]=n.y,w[N+H+10]=n.z,w[N+H+11]=D.itemSize===4?n.w:1)}}d={count:u,texture:C,size:new K(v,I)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Wm(r,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var wo=class extends ti{constructor(t,e,i,n,s,a,o,l,c,h=fs){if(h!==fs&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fs&&(i=Hn),i===void 0&&h===Ms&&(i=_s),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:si,this.minFilter=l!==void 0?l:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ed=new ti,ru=new wo(1,1),id=new vo,nd=new Zl,sd=new Eo,ou=[],au=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function Ps(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=ou[n];if(s===void 0&&(s=new Float32Array(n),ou[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ce(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Pe(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Jo(r,t){let e=au[t];e===void 0&&(e=new Int32Array(t),au[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Xm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function qm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2fv(this.addr,t),Pe(e,t)}}function Ym(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;r.uniform3fv(this.addr,t),Pe(e,t)}}function $m(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4fv(this.addr,t),Pe(e,t)}}function Zm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;hu.set(i),r.uniformMatrix2fv(this.addr,!1,hu),Pe(e,i)}}function Jm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;cu.set(i),r.uniformMatrix3fv(this.addr,!1,cu),Pe(e,i)}}function Km(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;lu.set(i),r.uniformMatrix4fv(this.addr,!1,lu),Pe(e,i)}}function Qm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function jm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2iv(this.addr,t),Pe(e,t)}}function tg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3iv(this.addr,t),Pe(e,t)}}function eg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4iv(this.addr,t),Pe(e,t)}}function ig(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ng(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2uiv(this.addr,t),Pe(e,t)}}function sg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3uiv(this.addr,t),Pe(e,t)}}function rg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4uiv(this.addr,t),Pe(e,t)}}function og(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(ru.compareFunction=Ju,s=ru):s=ed,e.setTexture2D(t||s,n)}function ag(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||nd,n)}function lg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||sd,n)}function cg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||id,n)}function hg(r){switch(r){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return $m;case 35674:return Zm;case 35675:return Jm;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ig;case 36294:return ng;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(r,t){r.uniform1fv(this.addr,t)}function dg(r,t){let e=Ps(t,this.size,2);r.uniform2fv(this.addr,e)}function fg(r,t){let e=Ps(t,this.size,3);r.uniform3fv(this.addr,e)}function pg(r,t){let e=Ps(t,this.size,4);r.uniform4fv(this.addr,e)}function mg(r,t){let e=Ps(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function gg(r,t){let e=Ps(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function xg(r,t){let e=Ps(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function yg(r,t){r.uniform1iv(this.addr,t)}function vg(r,t){r.uniform2iv(this.addr,t)}function _g(r,t){r.uniform3iv(this.addr,t)}function Mg(r,t){r.uniform4iv(this.addr,t)}function bg(r,t){r.uniform1uiv(this.addr,t)}function Sg(r,t){r.uniform2uiv(this.addr,t)}function Eg(r,t){r.uniform3uiv(this.addr,t)}function wg(r,t){r.uniform4uiv(this.addr,t)}function Tg(r,t,e){let i=this.cache,n=t.length,s=Jo(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Pe(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||ed,s[a])}function Ag(r,t,e){let i=this.cache,n=t.length,s=Jo(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Pe(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||nd,s[a])}function Rg(r,t,e){let i=this.cache,n=t.length,s=Jo(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Pe(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||sd,s[a])}function Cg(r,t,e){let i=this.cache,n=t.length,s=Jo(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Pe(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||id,s[a])}function Pg(r){switch(r){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return vg;case 35668:case 35672:return _g;case 35669:case 35673:return Mg;case 5125:return bg;case 36294:return Sg;case 36295:return Eg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}var Ql=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=hg(e.type)}},jl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},ja=/(\w+)(\])?(\[|\.)?/g;function uu(r,t){r.seq.push(t),r.map[t.id]=t}function Ig(r,t,e){let i=r.name,n=i.length;for(ja.lastIndex=0;;){let s=ja.exec(i),a=ja.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){uu(e,c===void 0?new Ql(o,r,t):new jl(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new tc(o),uu(e,u)),e=u}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);Ig(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function du(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Lg=37297,Dg=0;function Ug(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var fu=new Xt;function Ng(r){Kt._getMatrix(fu,Kt.workingColorSpace,r);let t=`mat3( ${fu.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(r)){case Zo:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function pu(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Ug(r.getShaderSource(t),a)}else return n}function zg(r,t){let e=Ng(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fg(r,t){let e;switch(t){case Nc:e="Linear";break;case zc:e="Reinhard";break;case Fc:e="Cineon";break;case yr:e="ACESFilmic";break;case Oc:e="AgX";break;case kc:e="Neutral";break;case jd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jr=new R;function Og(){Kt.getLuminanceCoefficients(Jr);let r=Jr.x.toFixed(4),t=Jr.y.toFixed(4),e=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Bg(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Hg(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ks(r){return r!==""}function mu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(r){return r.replace(Vg,Wg)}var Gg=new Map;function Wg(r,t){let e=Yt[t];if(e===void 0){let i=Gg.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ec(e)}var Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(r){return r.replace(Xg,qg)}function qg(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function yu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ld?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function $g(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xs:case ys:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Jg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Uc:t="ENVMAP_BLENDING_MULTIPLY";break;case Kd:t="ENVMAP_BLENDING_MIX";break;case Qd:t="ENVMAP_BLENDING_ADD";break}return t}function Kg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Qg(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Yg(e),c=$g(e),h=Zg(e),u=Jg(e),d=Kg(e),f=kg(e),p=Bg(s),x=n.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ks).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ks).join(`
`),m.length>0&&(m+=`
`)):(g=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),m=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==yn?Fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,zg("linearToOutputTexel",e.outputColorSpace),Og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),a=ec(a),a=mu(a,e),a=gu(a,e),o=ec(o),o=mu(o,e),o=gu(o,e),a=xu(a),o=xu(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=_+g+a,v=_+m+o,I=du(n,n.VERTEX_SHADER,M),w=du(n,n.FRAGMENT_SHADER,v);n.attachShader(x,I),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function C(T){if(r.debug.checkShaderErrors){let U=n.getProgramInfoLog(x).trim(),D=n.getShaderInfoLog(I).trim(),N=n.getShaderInfoLog(w).trim(),V=!0,H=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,I,w);else{let Z=pu(n,I,"vertex"),k=pu(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+Z+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||N==="")&&(H=!1);H&&(T.diagnostics={runnable:V,programLog:U,vertexShader:{log:D,prefix:g},fragmentShader:{log:N,prefix:m}})}n.deleteShader(I),n.deleteShader(w),P=new ms(n,x),S=Hg(n,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(x,Lg)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=w,this}var jg=0,ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new nc(t),e.set(t,i)),i}},nc=class{constructor(t){this.id=jg++,this.code=t,this.usedTimes=0}};function tx(r,t,e,i,n,s,a){let o=new _o,l=new ic,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,y,T,U,D){let N=U.fog,V=D.geometry,H=S.isMeshStandardMaterial?U.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),k=Z&&Z.mapping===$o?Z.image.height:null,et=p[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let nt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=nt!==void 0?nt.length:0,It=0;V.morphAttributes.position!==void 0&&(It=1),V.morphAttributes.normal!==void 0&&(It=2),V.morphAttributes.color!==void 0&&(It=3);let Ut,q,lt,wt;if(et){let ce=Ui[et];Ut=ce.vertexShader,q=ce.fragmentShader}else Ut=S.vertexShader,q=S.fragmentShader,l.update(S),lt=l.getVertexShaderID(S),wt=l.getFragmentShaderID(S);let ht=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),kt=D.isInstancedMesh===!0,Ft=D.isBatchedMesh===!0,ee=!!S.map,Q=!!S.matcap,at=!!Z,L=!!S.aoMap,Pt=!!S.lightMap,rt=!!S.bumpMap,bt=!!S.normalMap,dt=!!S.displacementMap,Nt=!!S.emissiveMap,_t=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,B=S.clearcoat>0,Y=S.dispersion>0,j=S.iridescence>0,$=S.sheen>0,Tt=S.transmission>0,pt=b&&!!S.anisotropyMap,Mt=B&&!!S.clearcoatMap,Zt=B&&!!S.clearcoatNormalMap,ot=B&&!!S.clearcoatRoughnessMap,St=j&&!!S.iridescenceMap,zt=j&&!!S.iridescenceThicknessMap,Ot=$&&!!S.sheenColorMap,Et=$&&!!S.sheenRoughnessMap,jt=!!S.specularMap,qt=!!S.specularColorMap,fe=!!S.specularIntensityMap,z=Tt&&!!S.transmissionMap,mt=Tt&&!!S.thicknessMap,X=!!S.gradientMap,J=!!S.alphaMap,vt=S.alphaTest>0,xt=!!S.alphaHash,Gt=!!S.extensions,Se=yn;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Se=r.toneMapping);let Ge={shaderID:et,shaderType:S.type,shaderName:S.name,vertexShader:Ut,fragmentShader:q,defines:S.defines,customVertexShaderID:lt,customFragmentShaderID:wt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&D._colorsTexture!==null,instancing:kt,instancingColor:kt&&D.instanceColor!==null,instancingMorph:kt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Cs,alphaToCoverage:!!S.alphaToCoverage,map:ee,matcap:Q,envMap:at,envMapMode:at&&Z.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:Pt,bumpMap:rt,normalMap:bt,displacementMap:d&&dt,emissiveMap:Nt,normalMapObjectSpace:bt&&S.normalMapType===sf,normalMapTangentSpace:bt&&S.normalMapType===Yc,metalnessMap:_t,roughnessMap:A,anisotropy:b,anisotropyMap:pt,clearcoat:B,clearcoatMap:Mt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:ot,dispersion:Y,iridescence:j,iridescenceMap:St,iridescenceThicknessMap:zt,sheen:$,sheenColorMap:Ot,sheenRoughnessMap:Et,specularMap:jt,specularColorMap:qt,specularIntensityMap:fe,transmission:Tt,transmissionMap:z,thicknessMap:mt,gradientMap:X,opaque:S.transparent===!1&&S.blending===wi&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:vt,alphaHash:xt,combine:S.combine,mapUv:ee&&x(S.map.channel),aoMapUv:L&&x(S.aoMap.channel),lightMapUv:Pt&&x(S.lightMap.channel),bumpMapUv:rt&&x(S.bumpMap.channel),normalMapUv:bt&&x(S.normalMap.channel),displacementMapUv:dt&&x(S.displacementMap.channel),emissiveMapUv:Nt&&x(S.emissiveMap.channel),metalnessMapUv:_t&&x(S.metalnessMap.channel),roughnessMapUv:A&&x(S.roughnessMap.channel),anisotropyMapUv:pt&&x(S.anisotropyMap.channel),clearcoatMapUv:Mt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(S.sheenRoughnessMap.channel),specularMapUv:jt&&x(S.specularMap.channel),specularColorMapUv:qt&&x(S.specularColorMap.channel),specularIntensityMapUv:fe&&x(S.specularIntensityMap.channel),transmissionMapUv:z&&x(S.transmissionMap.channel),thicknessMapUv:mt&&x(S.thicknessMap.channel),alphaMapUv:J&&x(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(bt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(ee||J),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:It,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&T.length>0,shadowMapType:r.shadowMap.type,toneMapping:Se,decodeVideoTexture:ee&&S.map.isVideoTexture===!0&&Kt.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:Nt&&S.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ke,flipSided:S.side===qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function m(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let T in S.defines)y.push(T),y.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(_(y,S),M(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function _(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){let y=p[S.type],T;if(y){let U=Ui[y];T=En.clone(U.uniforms)}else T=S.uniforms;return T}function I(S,y){let T;for(let U=0,D=h.length;U<D;U++){let N=h[U];if(N.cacheKey===y){T=N,++T.usedTimes;break}}return T===void 0&&(T=new Qg(r,y,S,s),h.push(T)),T}function w(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:I,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:P}}function ex(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function ix(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function vu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function _u(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,p,x,g){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function o(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||ix),i.length>1&&i.sort(d||vu),n.length>1&&n.sort(d||vu)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function nx(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new _u,r.set(i,[a])):n>=s.length?(a=new _u,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function sx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new gt};break;case"SpotLight":e={position:new R,direction:new R,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function rx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var ox=0;function ax(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function lx(r){let t=new sx,e=rx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,s=new ie,a=new ie;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,M=0,v=0,I=0,w=0,C=0;c.sort(ax);for(let S=0,y=c.length;S<y;S++){let T=c[S],U=T.color,D=T.intensity,N=T.distance,V=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=U.r*D,u+=U.g*D,d+=U.b*D;else if(T.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(T.sh.coefficients[H],D);C++}else if(T.isDirectionalLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let Z=T.shadow,k=e.get(T);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=T.shadow.matrix,_++}i.directional[f]=H,f++}else if(T.isSpotLight){let H=t.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(U).multiplyScalar(D),H.distance=N,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,i.spot[x]=H;let Z=T.shadow;if(T.map&&(i.spotLightMap[I]=T.map,I++,Z.updateMatrices(T),T.castShadow&&w++),i.spotLightMatrix[x]=Z.matrix,T.castShadow){let k=e.get(T);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=V,v++}x++}else if(T.isRectAreaLight){let H=t.get(T);H.color.copy(U).multiplyScalar(D),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=H,g++}else if(T.isPointLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let Z=T.shadow,k=e.get(T);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,i.pointShadow[p]=k,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=T.shadow.matrix,M++}i.point[p]=H,p++}else if(T.isHemisphereLight){let H=t.get(T);H.skyColor.copy(T.color).multiplyScalar(D),H.groundColor.copy(T.groundColor).multiplyScalar(D),i.hemi[m]=H,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==_||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==I||P.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+I-w,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,P.directionalLength=f,P.pointLength=p,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=_,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=I,P.numLightProbes=C,i.version=ox++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let M=c[m];if(M.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),u++}else if(M.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function Mu(r){let t=new lx(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function cx(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new Mu(r),t.set(n,[o])):s>=a.length?(o=new Mu(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var sc=class extends Ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rc=class extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dx(r,t,e){let i=new ar,n=new K,s=new K,a=new ue,o=new sc({depthPacking:nf}),l=new rc,c={},h=e.maxTextureSize,u={[vn]:qe,[qe]:vn,[ke]:ke},d=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new de;p.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new tt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let m=this.type;this.render=function(w,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let S=r.getRenderTarget(),y=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Fi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let D=m!==$i&&this.type===$i,N=m===$i&&this.type!==$i;for(let V=0,H=w.length;V<H;V++){let Z=w[V],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);let et=k.getFrameExtents();if(n.multiply(et),s.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/et.x),n.x=s.x*et.x,k.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/et.y),n.y=s.y*et.y,k.mapSize.y=s.y)),k.map===null||D===!0||N===!0){let ut=this.type!==$i?{minFilter:si,magFilter:si}:{};k.map!==null&&k.map.dispose(),k.map=new Be(n.x,n.y,ut),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();let nt=k.getViewportCount();for(let ut=0;ut<nt;ut++){let It=k.getViewport(ut);a.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),U.viewport(a),k.updateMatrices(Z,ut),i=k.getFrustum(),v(C,P,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===$i&&_(k,P),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(S,y,T)};function _(w,C){let P=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Be(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(C,null,P,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(C,null,P,f,x,null)}function M(w,C,P,S){let y=null,T=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)y=T;else if(y=P.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let U=y.uuid,D=C.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let V=N[D];V===void 0&&(V=y.clone(),N[D]=V,C.addEventListener("dispose",I)),y=V}if(y.visible=C.visible,y.wireframe=C.wireframe,S===$i?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=r.properties.get(y);U.light=P}return y}function v(w,C,P,S,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===$i)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let D=t.update(w),N=w.material;if(Array.isArray(N)){let V=D.groups;for(let H=0,Z=V.length;H<Z;H++){let k=V[H],et=N[k.materialIndex];if(et&&et.visible){let nt=M(w,et,S,y);w.onBeforeShadow(r,w,C,P,D,nt,k),r.renderBufferDirect(P,null,D,nt,w,k),w.onAfterShadow(r,w,C,P,D,nt,k)}}}else if(N.visible){let V=M(w,N,S,y);w.onBeforeShadow(r,w,C,P,D,V,null),r.renderBufferDirect(P,null,D,V,w,null),w.onAfterShadow(r,w,C,P,D,V,null)}}let U=w.children;for(let D=0,N=U.length;D<N;D++)v(U[D],C,P,S,y)}function I(w){w.target.removeEventListener("dispose",I);for(let P in c){let S=c[P],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var fx={[cl]:hl,[ul]:pl,[dl]:ml,[gs]:fl,[hl]:cl,[pl]:ul,[ml]:dl,[fl]:gs};function px(r,t){function e(){let z=!1,mt=new ue,X=null,J=new ue(0,0,0,0);return{setMask:function(vt){X!==vt&&!z&&(r.colorMask(vt,vt,vt,vt),X=vt)},setLocked:function(vt){z=vt},setClear:function(vt,xt,Gt,Se,Ge){Ge===!0&&(vt*=Se,xt*=Se,Gt*=Se),mt.set(vt,xt,Gt,Se),J.equals(mt)===!1&&(r.clearColor(vt,xt,Gt,Se),J.copy(mt))},reset:function(){z=!1,X=null,J.set(-1,0,0,0)}}}function i(){let z=!1,mt=!1,X=null,J=null,vt=null;return{setReversed:function(xt){if(mt!==xt){let Gt=t.get("EXT_clip_control");mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let Se=vt;vt=null,this.setClear(Se)}mt=xt},getReversed:function(){return mt},setTest:function(xt){xt?ht(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(xt){X!==xt&&!z&&(r.depthMask(xt),X=xt)},setFunc:function(xt){if(mt&&(xt=fx[xt]),J!==xt){switch(xt){case cl:r.depthFunc(r.NEVER);break;case hl:r.depthFunc(r.ALWAYS);break;case ul:r.depthFunc(r.LESS);break;case gs:r.depthFunc(r.LEQUAL);break;case dl:r.depthFunc(r.EQUAL);break;case fl:r.depthFunc(r.GEQUAL);break;case pl:r.depthFunc(r.GREATER);break;case ml:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=xt}},setLocked:function(xt){z=xt},setClear:function(xt){vt!==xt&&(mt&&(xt=1-xt),r.clearDepth(xt),vt=xt)},reset:function(){z=!1,X=null,J=null,vt=null,mt=!1}}}function n(){let z=!1,mt=null,X=null,J=null,vt=null,xt=null,Gt=null,Se=null,Ge=null;return{setTest:function(ce){z||(ce?ht(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(ce){mt!==ce&&!z&&(r.stencilMask(ce),mt=ce)},setFunc:function(ce,yi,Hi){(X!==ce||J!==yi||vt!==Hi)&&(r.stencilFunc(ce,yi,Hi),X=ce,J=yi,vt=Hi)},setOp:function(ce,yi,Hi){(xt!==ce||Gt!==yi||Se!==Hi)&&(r.stencilOp(ce,yi,Hi),xt=ce,Gt=yi,Se=Hi)},setLocked:function(ce){z=ce},setClear:function(ce){Ge!==ce&&(r.clearStencil(ce),Ge=ce)},reset:function(){z=!1,mt=null,X=null,J=null,vt=null,xt=null,Gt=null,Se=null,Ge=null}}}let s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,M=null,v=null,I=null,w=null,C=new gt(0,0,0),P=0,S=!1,y=null,T=null,U=null,D=null,N=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Z>=2);let et=null,nt={},ut=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),Ut=new ue().fromArray(ut),q=new ue().fromArray(It);function lt(z,mt,X,J){let vt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(z,xt),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<X;Gt++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(mt,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,vt):r.texImage2D(mt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,vt);return xt}let wt={};wt[r.TEXTURE_2D]=lt(r.TEXTURE_2D,r.TEXTURE_2D,1),wt[r.TEXTURE_CUBE_MAP]=lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[r.TEXTURE_2D_ARRAY]=lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),wt[r.TEXTURE_3D]=lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(r.DEPTH_TEST),a.setFunc(gs),rt(!1),bt(Eh),ht(r.CULL_FACE),L(Fi);function ht(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function Dt(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function kt(z,mt){return u[z]!==mt?(r.bindFramebuffer(z,mt),u[z]=mt,z===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=mt),z===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ft(z,mt){let X=f,J=!1;if(z){X=d.get(mt),X===void 0&&(X=[],d.set(mt,X));let vt=z.textures;if(X.length!==vt.length||X[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Gt=vt.length;xt<Gt;xt++)X[xt]=r.COLOR_ATTACHMENT0+xt;X.length=vt.length,J=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,J=!0);J&&r.drawBuffers(X)}function ee(z){return p!==z?(r.useProgram(z),p=z,!0):!1}let Q={[Fn]:r.FUNC_ADD,[Ud]:r.FUNC_SUBTRACT,[Nd]:r.FUNC_REVERSE_SUBTRACT};Q[zd]=r.MIN,Q[Fd]=r.MAX;let at={[Od]:r.ZERO,[kd]:r.ONE,[Bd]:r.SRC_COLOR,[al]:r.SRC_ALPHA,[qd]:r.SRC_ALPHA_SATURATE,[Wd]:r.DST_COLOR,[Vd]:r.DST_ALPHA,[Hd]:r.ONE_MINUS_SRC_COLOR,[ll]:r.ONE_MINUS_SRC_ALPHA,[Xd]:r.ONE_MINUS_DST_COLOR,[Gd]:r.ONE_MINUS_DST_ALPHA,[Yd]:r.CONSTANT_COLOR,[$d]:r.ONE_MINUS_CONSTANT_COLOR,[Zd]:r.CONSTANT_ALPHA,[Jd]:r.ONE_MINUS_CONSTANT_ALPHA};function L(z,mt,X,J,vt,xt,Gt,Se,Ge,ce){if(z===Fi){x===!0&&(Dt(r.BLEND),x=!1);return}if(x===!1&&(ht(r.BLEND),x=!0),z!==Dd){if(z!==g||ce!==S){if((m!==Fn||v!==Fn)&&(r.blendEquation(r.FUNC_ADD),m=Fn,v=Fn),ce)switch(z){case wi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ye:r.blendFunc(r.ONE,r.ONE);break;case wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Th:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case wi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ye:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Th:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}_=null,M=null,I=null,w=null,C.set(0,0,0),P=0,g=z,S=ce}return}vt=vt||mt,xt=xt||X,Gt=Gt||J,(mt!==m||vt!==v)&&(r.blendEquationSeparate(Q[mt],Q[vt]),m=mt,v=vt),(X!==_||J!==M||xt!==I||Gt!==w)&&(r.blendFuncSeparate(at[X],at[J],at[xt],at[Gt]),_=X,M=J,I=xt,w=Gt),(Se.equals(C)===!1||Ge!==P)&&(r.blendColor(Se.r,Se.g,Se.b,Ge),C.copy(Se),P=Ge),g=z,S=!1}function Pt(z,mt){z.side===ke?Dt(r.CULL_FACE):ht(r.CULL_FACE);let X=z.side===qe;mt&&(X=!X),rt(X),z.blending===wi&&z.transparent===!1?L(Fi):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);let J=z.stencilWrite;o.setTest(J),J&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Nt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(z){y!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),y=z)}function bt(z){z!==Pd?(ht(r.CULL_FACE),z!==T&&(z===Eh?r.cullFace(r.BACK):z===Id?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),T=z}function dt(z){z!==U&&(H&&r.lineWidth(z),U=z)}function Nt(z,mt,X){z?(ht(r.POLYGON_OFFSET_FILL),(D!==mt||N!==X)&&(r.polygonOffset(mt,X),D=mt,N=X)):Dt(r.POLYGON_OFFSET_FILL)}function _t(z){z?ht(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function A(z){z===void 0&&(z=r.TEXTURE0+V-1),et!==z&&(r.activeTexture(z),et=z)}function b(z,mt,X){X===void 0&&(et===null?X=r.TEXTURE0+V-1:X=et);let J=nt[X];J===void 0&&(J={type:void 0,texture:void 0},nt[X]=J),(J.type!==z||J.texture!==mt)&&(et!==X&&(r.activeTexture(X),et=X),r.bindTexture(z,mt||wt[z]),J.type=z,J.texture=mt)}function B(){let z=nt[et];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{r.texSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Zt(){try{r.texStorage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{r.texStorage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{r.texImage2D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function zt(){try{r.texImage3D.apply(r,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(z){Ut.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Ut.copy(z))}function Et(z){q.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),q.copy(z))}function jt(z,mt){let X=c.get(mt);X===void 0&&(X=new WeakMap,c.set(mt,X));let J=X.get(z);J===void 0&&(J=r.getUniformBlockIndex(mt,z.name),X.set(z,J))}function qt(z,mt){let J=c.get(mt).get(z);l.get(mt)!==J&&(r.uniformBlockBinding(mt,J,z.__bindingPointIndex),l.set(mt,J))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},et=null,nt={},u={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,_=null,M=null,v=null,I=null,w=null,C=new gt(0,0,0),P=0,S=!1,y=null,T=null,U=null,D=null,N=null,Ut.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ht,disable:Dt,bindFramebuffer:kt,drawBuffers:Ft,useProgram:ee,setBlending:L,setMaterial:Pt,setFlipSided:rt,setCullFace:bt,setLineWidth:dt,setPolygonOffset:Nt,setScissorTest:_t,activeTexture:A,bindTexture:b,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:St,texImage3D:zt,updateUBOMapping:jt,uniformBlockBinding:qt,texStorage2D:Zt,texStorage3D:ot,texSubImage2D:$,texSubImage3D:Tt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:Ot,viewport:Et,reset:fe}}function bu(r,t,e,i){let n=mx(i);switch(e){case Wu:return r*t;case qu:return r*t;case Yu:return r*t*2;case Gc:return r*t/n.components*n.byteLength;case Wc:return r*t/n.components*n.byteLength;case $u:return r*t*2/n.components*n.byteLength;case Xc:return r*t*2/n.components*n.byteLength;case Xu:return r*t*3/n.components*n.byteLength;case Ei:return r*t*4/n.components*n.byteLength;case qc:return r*t*4/n.components*n.byteLength;case co:case ho:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case uo:case fo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _l:case bl:return Math.max(r,16)*Math.max(t,8)/4;case vl:case Ml:return Math.max(r,8)*Math.max(t,8)/2;case Sl:case El:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case po:case Bl:case Hl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Zu:case Vl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Gl:case Wl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mx(r){switch(r){case Qi:case Hu:return{byteLength:1,components:1};case sr:case Vu:case oi:return{byteLength:2,components:1};case Hc:case Vc:return{byteLength:2,components:4};case Hn:case Bc:case zi:return{byteLength:4,components:1};case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function gx(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,b){return f?new OffscreenCanvas(A,b):xo("canvas")}function x(A,b,B){let Y=1,j=_t(A);if((j.width>B||j.height>B)&&(Y=B/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(Y*j.width),Tt=Math.floor(Y*j.height);u===void 0&&(u=p($,Tt));let pt=b?p($,Tt):u;return pt.width=$,pt.height=Tt,pt.getContext("2d").drawImage(A,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Tt+")."),pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){r.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(A,b,B,Y,j=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=b;if(b===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8)),b===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),b===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8)),b===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RG8UI),B===r.UNSIGNED_SHORT&&($=r.RG16UI),B===r.UNSIGNED_INT&&($=r.RG32UI),B===r.BYTE&&($=r.RG8I),B===r.SHORT&&($=r.RG16I),B===r.INT&&($=r.RG32I)),b===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGB8UI),B===r.UNSIGNED_SHORT&&($=r.RGB16UI),B===r.UNSIGNED_INT&&($=r.RGB32UI),B===r.BYTE&&($=r.RGB8I),B===r.SHORT&&($=r.RGB16I),B===r.INT&&($=r.RGB32I)),b===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGBA8UI),B===r.UNSIGNED_SHORT&&($=r.RGBA16UI),B===r.UNSIGNED_INT&&($=r.RGBA32UI),B===r.BYTE&&($=r.RGBA8I),B===r.SHORT&&($=r.RGBA16I),B===r.INT&&($=r.RGBA32I)),b===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),b===r.RGBA){let Tt=j?Zo:Kt.getTransfer(Y);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=Tt===le?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(A,b){let B;return A?b===null||b===Hn||b===_s?B=r.DEPTH24_STENCIL8:b===zi?B=r.DEPTH32F_STENCIL8:b===sr&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hn||b===_s?B=r.DEPTH_COMPONENT24:b===zi?B=r.DEPTH_COMPONENT32F:b===sr&&(B=r.DEPTH_COMPONENT16),B}function I(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==si&&A.minFilter!==Ni?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function w(A){let b=A.target;b.removeEventListener("dispose",w),P(b),b.isVideoTexture&&h.delete(b)}function C(A){let b=A.target;b.removeEventListener("dispose",C),y(b)}function P(A){let b=i.get(A);if(b.__webglInit===void 0)return;let B=A.source,Y=d.get(B);if(Y){let j=Y[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(A),Object.keys(Y).length===0&&d.delete(B)}i.remove(A)}function S(A){let b=i.get(A);r.deleteTexture(b.__webglTexture);let B=A.source,Y=d.get(B);delete Y[b.__cacheKey],a.memory.textures--}function y(A){let b=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let j=0;j<b.__webglFramebuffer[Y].length;j++)r.deleteFramebuffer(b.__webglFramebuffer[Y][j]);else r.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)r.deleteFramebuffer(b.__webglFramebuffer[Y]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let B=A.textures;for(let Y=0,j=B.length;Y<j;Y++){let $=i.get(B[Y]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(B[Y])}i.remove(A)}let T=0;function U(){T=0}function D(){let A=T;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),T+=1,A}function N(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function V(A,b){let B=i.get(A);if(A.isVideoTexture&&dt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,A,b);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+b)}function H(A,b){let B=i.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+b)}function Z(A,b){let B=i.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,b);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+b)}function k(A,b){let B=i.get(A);if(A.version>0&&B.__version!==A.version){lt(B,A,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+b)}let et={[vs]:r.REPEAT,[kn]:r.CLAMP_TO_EDGE,[yl]:r.MIRRORED_REPEAT},nt={[si]:r.NEAREST,[tf]:r.NEAREST_MIPMAP_NEAREST,[Pr]:r.NEAREST_MIPMAP_LINEAR,[Ni]:r.LINEAR,[Ta]:r.LINEAR_MIPMAP_NEAREST,[Bn]:r.LINEAR_MIPMAP_LINEAR},ut={[rf]:r.NEVER,[uf]:r.ALWAYS,[of]:r.LESS,[Ju]:r.LEQUAL,[af]:r.EQUAL,[hf]:r.GEQUAL,[lf]:r.GREATER,[cf]:r.NOTEQUAL};function It(A,b){if(b.type===zi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ni||b.magFilter===Ta||b.magFilter===Pr||b.magFilter===Bn||b.minFilter===Ni||b.minFilter===Ta||b.minFilter===Pr||b.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,et[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,et[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,et[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,nt[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,nt[b.minFilter]),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ut[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===si||b.minFilter!==Pr&&b.minFilter!==Bn||b.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ut(A,b){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",w));let Y=b.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let $=N(b);if($!==A.__cacheKey){j[$]===void 0&&(j[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[$].usedTimes++;let Tt=j[A.__cacheKey];Tt!==void 0&&(j[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(b)),A.__cacheKey=$,A.__webglTexture=j[$].texture}return B}function q(A,b,B){let Y=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=r.TEXTURE_3D);let j=Ut(A,b),$=b.source;e.bindTexture(Y,A.__webglTexture,r.TEXTURE0+B);let Tt=i.get($);if($.version!==Tt.__version||j===!0){e.activeTexture(r.TEXTURE0+B);let pt=Kt.getPrimaries(Kt.workingColorSpace),Mt=b.colorSpace===gn?null:Kt.getPrimaries(b.colorSpace),Zt=b.colorSpace===gn||pt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let ot=x(b.image,!1,n.maxTextureSize);ot=Nt(b,ot);let St=s.convert(b.format,b.colorSpace),zt=s.convert(b.type),Ot=M(b.internalFormat,St,zt,b.colorSpace,b.isVideoTexture);It(Y,b);let Et,jt=b.mipmaps,qt=b.isVideoTexture!==!0,fe=Tt.__version===void 0||j===!0,z=$.dataReady,mt=I(b,ot);if(b.isDepthTexture)Ot=v(b.format===Ms,b.type),fe&&(qt?e.texStorage2D(r.TEXTURE_2D,1,Ot,ot.width,ot.height):e.texImage2D(r.TEXTURE_2D,0,Ot,ot.width,ot.height,0,St,zt,null));else if(b.isDataTexture)if(jt.length>0){qt&&fe&&e.texStorage2D(r.TEXTURE_2D,mt,Ot,jt[0].width,jt[0].height);for(let X=0,J=jt.length;X<J;X++)Et=jt[X],qt?z&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,Et.width,Et.height,St,zt,Et.data):e.texImage2D(r.TEXTURE_2D,X,Ot,Et.width,Et.height,0,St,zt,Et.data);b.generateMipmaps=!1}else qt?(fe&&e.texStorage2D(r.TEXTURE_2D,mt,Ot,ot.width,ot.height),z&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot.width,ot.height,St,zt,ot.data)):e.texImage2D(r.TEXTURE_2D,0,Ot,ot.width,ot.height,0,St,zt,ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qt&&fe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Ot,jt[0].width,jt[0].height,ot.depth);for(let X=0,J=jt.length;X<J;X++)if(Et=jt[X],b.format!==Ei)if(St!==null)if(qt){if(z)if(b.layerUpdates.size>0){let vt=bu(Et.width,Et.height,b.format,b.type);for(let xt of b.layerUpdates){let Gt=Et.data.subarray(xt*vt/Et.data.BYTES_PER_ELEMENT,(xt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,xt,Et.width,Et.height,1,St,Gt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,ot.depth,St,Et.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Ot,Et.width,Et.height,ot.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?z&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,ot.depth,St,zt,Et.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,Ot,Et.width,Et.height,ot.depth,0,St,zt,Et.data)}else{qt&&fe&&e.texStorage2D(r.TEXTURE_2D,mt,Ot,jt[0].width,jt[0].height);for(let X=0,J=jt.length;X<J;X++)Et=jt[X],b.format!==Ei?St!==null?qt?z&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(r.TEXTURE_2D,X,Ot,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?z&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,Et.width,Et.height,St,zt,Et.data):e.texImage2D(r.TEXTURE_2D,X,Ot,Et.width,Et.height,0,St,zt,Et.data)}else if(b.isDataArrayTexture)if(qt){if(fe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Ot,ot.width,ot.height,ot.depth),z)if(b.layerUpdates.size>0){let X=bu(ot.width,ot.height,b.format,b.type);for(let J of b.layerUpdates){let vt=ot.data.subarray(J*X/ot.data.BYTES_PER_ELEMENT,(J+1)*X/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,ot.width,ot.height,1,St,zt,vt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,St,zt,ot.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,ot.width,ot.height,ot.depth,0,St,zt,ot.data);else if(b.isData3DTexture)qt?(fe&&e.texStorage3D(r.TEXTURE_3D,mt,Ot,ot.width,ot.height,ot.depth),z&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,St,zt,ot.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,ot.width,ot.height,ot.depth,0,St,zt,ot.data);else if(b.isFramebufferTexture){if(fe)if(qt)e.texStorage2D(r.TEXTURE_2D,mt,Ot,ot.width,ot.height);else{let X=ot.width,J=ot.height;for(let vt=0;vt<mt;vt++)e.texImage2D(r.TEXTURE_2D,vt,Ot,X,J,0,St,zt,null),X>>=1,J>>=1}}else if(jt.length>0){if(qt&&fe){let X=_t(jt[0]);e.texStorage2D(r.TEXTURE_2D,mt,Ot,X.width,X.height)}for(let X=0,J=jt.length;X<J;X++)Et=jt[X],qt?z&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,St,zt,Et):e.texImage2D(r.TEXTURE_2D,X,Ot,St,zt,Et);b.generateMipmaps=!1}else if(qt){if(fe){let X=_t(ot);e.texStorage2D(r.TEXTURE_2D,mt,Ot,X.width,X.height)}z&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,St,zt,ot)}else e.texImage2D(r.TEXTURE_2D,0,Ot,St,zt,ot);g(b)&&m(Y),Tt.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function lt(A,b,B){if(b.image.length!==6)return;let Y=Ut(A,b),j=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+B);let $=i.get(j);if(j.version!==$.__version||Y===!0){e.activeTexture(r.TEXTURE0+B);let Tt=Kt.getPrimaries(Kt.workingColorSpace),pt=b.colorSpace===gn?null:Kt.getPrimaries(b.colorSpace),Mt=b.colorSpace===gn||Tt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,ot=b.image[0]&&b.image[0].isDataTexture,St=[];for(let J=0;J<6;J++)!Zt&&!ot?St[J]=x(b.image[J],!0,n.maxCubemapSize):St[J]=ot?b.image[J].image:b.image[J],St[J]=Nt(b,St[J]);let zt=St[0],Ot=s.convert(b.format,b.colorSpace),Et=s.convert(b.type),jt=M(b.internalFormat,Ot,Et,b.colorSpace),qt=b.isVideoTexture!==!0,fe=$.__version===void 0||Y===!0,z=j.dataReady,mt=I(b,zt);It(r.TEXTURE_CUBE_MAP,b);let X;if(Zt){qt&&fe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,jt,zt.width,zt.height);for(let J=0;J<6;J++){X=St[J].mipmaps;for(let vt=0;vt<X.length;vt++){let xt=X[vt];b.format!==Ei?Ot!==null?qt?z&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,xt.width,xt.height,Ot,xt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,jt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,xt.width,xt.height,Ot,Et,xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,jt,xt.width,xt.height,0,Ot,Et,xt.data)}}}else{if(X=b.mipmaps,qt&&fe){X.length>0&&mt++;let J=_t(St[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,jt,J.width,J.height)}for(let J=0;J<6;J++)if(ot){qt?z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St[J].width,St[J].height,Ot,Et,St[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,St[J].width,St[J].height,0,Ot,Et,St[J].data);for(let vt=0;vt<X.length;vt++){let Gt=X[vt].image[J].image;qt?z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,Gt.width,Gt.height,Ot,Et,Gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,jt,Gt.width,Gt.height,0,Ot,Et,Gt.data)}}else{qt?z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ot,Et,St[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,Ot,Et,St[J]);for(let vt=0;vt<X.length;vt++){let xt=X[vt];qt?z&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,Ot,Et,xt.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,jt,Ot,Et,xt.image[J])}}}g(b)&&m(r.TEXTURE_CUBE_MAP),$.__version=j.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function wt(A,b,B,Y,j,$){let Tt=s.convert(B.format,B.colorSpace),pt=s.convert(B.type),Mt=M(B.internalFormat,Tt,pt,B.colorSpace),Zt=i.get(b),ot=i.get(B);if(ot.__renderTarget=b,!Zt.__hasExternalTextures){let St=Math.max(1,b.width>>$),zt=Math.max(1,b.height>>$);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,$,Mt,St,zt,b.depth,0,Tt,pt,null):e.texImage2D(j,$,Mt,St,zt,0,Tt,pt,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),bt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,j,ot.__webglTexture,0,rt(b)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,j,ot.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(A,b,B){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer){let Y=b.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,$=v(b.stencilBuffer,j),Tt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=rt(b);bt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt,$,b.width,b.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,$,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,$,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,A)}else{let Y=b.textures;for(let j=0;j<Y.length;j++){let $=Y[j],Tt=s.convert($.format,$.colorSpace),pt=s.convert($.type),Mt=M($.internalFormat,Tt,pt,$.colorSpace),Zt=rt(b);B&&bt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Mt,b.width,b.height):bt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,Mt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Mt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Dt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let j=Y.__webglTexture,$=rt(b);if(b.depthTexture.format===fs)bt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(b.depthTexture.format===Ms)bt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function kt(A){let b=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=Y}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Dt(b.__webglFramebuffer,A)}else if(B){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=r.createRenderbuffer(),ht(b.__webglDepthbuffer[Y],A,!1);else{let j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ht(b.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,j)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(A,b,B){let Y=i.get(A);b!==void 0&&wt(Y.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&kt(A)}function ee(A){let b=A.texture,B=i.get(A),Y=i.get(b);A.addEventListener("dispose",C);let j=A.textures,$=A.isWebGLCubeRenderTarget===!0,Tt=j.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=b.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)B.__webglFramebuffer[pt][Mt]=r.createFramebuffer()}else B.__webglFramebuffer[pt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<b.mipmaps.length;pt++)B.__webglFramebuffer[pt]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let pt=0,Mt=j.length;pt<Mt;pt++){let Zt=i.get(j[pt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&bt(A)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<j.length;pt++){let Mt=j[pt];B.__webglColorRenderbuffer[pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);let Zt=s.convert(Mt.format,Mt.colorSpace),ot=s.convert(Mt.type),St=M(Mt.internalFormat,Zt,ot,Mt.colorSpace,A.isXRRenderTarget===!0),zt=rt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,St,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),It(r.TEXTURE_CUBE_MAP,b);for(let pt=0;pt<6;pt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)wt(B.__webglFramebuffer[pt][Mt],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else wt(B.__webglFramebuffer[pt],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let pt=0,Mt=j.length;pt<Mt;pt++){let Zt=j[pt],ot=i.get(Zt);e.bindTexture(r.TEXTURE_2D,ot.__webglTexture),It(r.TEXTURE_2D,Zt),wt(B.__webglFramebuffer,A,Zt,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,0),g(Zt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let pt=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),It(pt,b),b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)wt(B.__webglFramebuffer[Mt],A,b,r.COLOR_ATTACHMENT0,pt,Mt);else wt(B.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,pt,0);g(b)&&m(pt),e.unbindTexture()}A.depthBuffer&&kt(A)}function Q(A){let b=A.textures;for(let B=0,Y=b.length;B<Y;B++){let j=b[B];if(g(j)){let $=_(A),Tt=i.get(j).__webglTexture;e.bindTexture($,Tt),m($),e.unbindTexture()}}}let at=[],L=[];function Pt(A){if(A.samples>0){if(bt(A)===!1){let b=A.textures,B=A.width,Y=A.height,j=r.COLOR_BUFFER_BIT,$=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=i.get(A),pt=b.length>1;if(pt)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let Zt=i.get(b[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Zt,0)}r.blitFramebuffer(0,0,B,Y,0,0,B,Y,j,r.NEAREST),l===!0&&(at.length=0,L.length=0,at.push(r.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(at.push($),L.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let Zt=i.get(b[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,Zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function rt(A){return Math.min(n.maxSamples,A.samples)}function bt(A){let b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Nt(A,b){let B=A.colorSpace,Y=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Cs&&B!==gn&&(Kt.getTransfer(B)===le?(Y!==Ei||j!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function _t(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=bt}function xx(r,t){function e(i,n=gn){let s,a=Kt.getTransfer(n);if(i===Qi)return r.UNSIGNED_BYTE;if(i===Hc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Vc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Gu)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Hu)return r.BYTE;if(i===Vu)return r.SHORT;if(i===sr)return r.UNSIGNED_SHORT;if(i===Bc)return r.INT;if(i===Hn)return r.UNSIGNED_INT;if(i===zi)return r.FLOAT;if(i===oi)return r.HALF_FLOAT;if(i===Wu)return r.ALPHA;if(i===Xu)return r.RGB;if(i===Ei)return r.RGBA;if(i===qu)return r.LUMINANCE;if(i===Yu)return r.LUMINANCE_ALPHA;if(i===fs)return r.DEPTH_COMPONENT;if(i===Ms)return r.DEPTH_STENCIL;if(i===Gc)return r.RED;if(i===Wc)return r.RED_INTEGER;if(i===$u)return r.RG;if(i===Xc)return r.RG_INTEGER;if(i===qc)return r.RGBA_INTEGER;if(i===co||i===ho||i===uo||i===fo)if(a===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vl||i===_l||i===Ml||i===bl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===El||i===wl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sl||i===El)return a===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===Ul||i===Nl||i===zl||i===Fl||i===Ol||i===kl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ol)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return a===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===po||i===Bl||i===Hl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===po)return a===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zu||i===Vl||i===Gl||i===Wl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===po)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var oc=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},se=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},yx={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ti,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Me({vertexShader:vx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tt(new He(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends _n{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=new ac,g=e.getContextAttributes(),m=null,_=null,M=[],v=[],I=new K,w=null,C=new Ue;C.viewport=new ue;let P=new Ue;P.viewport=new ue;let S=[C,P],y=new oc,T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let lt=M[q];return lt===void 0&&(lt=new tr,M[q]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(q){let lt=M[q];return lt===void 0&&(lt=new tr,M[q]=lt),lt.getGripSpace()},this.getHand=function(q){let lt=M[q];return lt===void 0&&(lt=new tr,M[q]=lt),lt.getHandSpace()};function D(q){let lt=v.indexOf(q.inputSource);if(lt===-1)return;let wt=M[lt];wt!==void 0&&(wt.update(q.inputSource,q.frame,c||a),wt.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",V);for(let q=0;q<M.length;q++){let lt=v[q];lt!==null&&(v[q]=null,M[q].disconnect(lt))}T=null,U=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,n=null,_=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",N),n.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),n.renderState.layers===void 0){let lt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,lt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Be(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let lt=null,wt=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=g.stencil?Ms:fs,wt=g.stencil?_s:Hn);let Dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Dt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Be(d.textureWidth,d.textureHeight,{format:Ei,type:Qi,depthTexture:new wo(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ut.setContext(n),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(q){for(let lt=0;lt<q.removed.length;lt++){let wt=q.removed[lt],ht=v.indexOf(wt);ht>=0&&(v[ht]=null,M[ht].disconnect(wt))}for(let lt=0;lt<q.added.length;lt++){let wt=q.added[lt],ht=v.indexOf(wt);if(ht===-1){for(let kt=0;kt<M.length;kt++)if(kt>=v.length){v.push(wt),ht=kt;break}else if(v[kt]===null){v[kt]=wt,ht=kt;break}if(ht===-1)break}let Dt=M[ht];Dt&&Dt.connect(wt)}}let H=new R,Z=new R;function k(q,lt,wt){H.setFromMatrixPosition(lt.matrixWorld),Z.setFromMatrixPosition(wt.matrixWorld);let ht=H.distanceTo(Z),Dt=lt.projectionMatrix.elements,kt=wt.projectionMatrix.elements,Ft=Dt[14]/(Dt[10]-1),ee=Dt[14]/(Dt[10]+1),Q=(Dt[9]+1)/Dt[5],at=(Dt[9]-1)/Dt[5],L=(Dt[8]-1)/Dt[0],Pt=(kt[8]+1)/kt[0],rt=Ft*L,bt=Ft*Pt,dt=ht/(-L+Pt),Nt=dt*-L;if(lt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Nt),q.translateZ(dt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Dt[10]===-1)q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let _t=Ft+dt,A=ee+dt,b=rt-Nt,B=bt+(ht-Nt),Y=Q*ee/A*_t,j=at*ee/A*_t;q.projectionMatrix.makePerspective(b,B,Y,j,_t,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,lt){lt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(lt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let lt=q.near,wt=q.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),y.near=P.near=C.near=lt,y.far=P.far=C.far=wt,(T!==y.near||U!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,U=y.far),C.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,y.layers.mask=C.layers.mask|P.layers.mask;let ht=q.parent,Dt=y.cameras;et(y,ht);for(let kt=0;kt<Dt.length;kt++)et(Dt[kt],ht);Dt.length===2?k(y,C,P):y.projectionMatrix.copy(C.projectionMatrix),nt(q,y,ht)};function nt(q,lt,wt){wt===null?q.matrix.copy(lt.matrixWorld):(q.matrix.copy(wt.matrixWorld),q.matrix.invert(),q.matrix.multiply(lt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ut=null;function It(q,lt){if(h=lt.getViewerPose(c||a),p=lt,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let ht=!1;wt.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let kt=0;kt<wt.length;kt++){let Ft=wt[kt],ee=null;if(f!==null)ee=f.getViewport(Ft);else{let at=u.getViewSubImage(d,Ft);ee=at.viewport,kt===0&&(t.setRenderTargetTextures(_,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(_))}let Q=S[kt];Q===void 0&&(Q=new Ue,Q.layers.enable(kt),Q.viewport=new ue,S[kt]=Q),Q.matrix.fromArray(Ft.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ft.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),kt===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(Q)}let Dt=n.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let kt=u.getDepthInformation(wt[0]);kt&&kt.isValid&&kt.texture&&x.init(t,kt,n.renderState)}}for(let wt=0;wt<M.length;wt++){let ht=v[wt],Dt=M[wt];ht!==null&&Dt!==void 0&&Dt.update(ht,lt,c||a)}ut&&ut(q,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),p=null}let Ut=new td;Ut.setAnimationLoop(It),this.setAnimationLoop=function(q){ut=q},this.dispose=function(){}}},Nn=new $e,Mx=new ie;function bx(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ju(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),M=_.envMap,v=_.envMapRotation;M&&(g.envMap.value=M,Nn.copy(v),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),g.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(Nn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Sx(r,t,e,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let v=M.program;i.uniformBlockBinding(_,v)}function c(_,M){let v=n[_.id];v===void 0&&(p(_),v=h(_),n[_.id]=v,_.addEventListener("dispose",g));let I=M.program;i.updateUBOMapping(_,I);let w=t.render.frame;s[_.id]!==w&&(d(_),s[_.id]=w)}function h(_){let M=u();_.__bindingPointIndex=M;let v=r.createBuffer(),I=_.__size,w=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,I,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let M=n[_.id],v=_.uniforms,I=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,C=v.length;w<C;w++){let P=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,y=P.length;S<y;S++){let T=P[S];if(f(T,w,S,I)===!0){let U=T.__offset,D=Array.isArray(T.value)?T.value:[T.value],N=0;for(let V=0;V<D.length;V++){let H=D[V],Z=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,U+N,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,M,v,I){let w=_.value,C=M+"_"+v;if(I[C]===void 0)return typeof w=="number"||typeof w=="boolean"?I[C]=w:I[C]=w.clone(),!0;{let P=I[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return I[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function p(_){let M=_.uniforms,v=0,I=16;for(let C=0,P=M.length;C<P;C++){let S=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,T=S.length;y<T;y++){let U=S[y],D=Array.isArray(U.value)?U.value:[U.value];for(let N=0,V=D.length;N<V;N++){let H=D[N],Z=x(H),k=v%I,et=k%Z.boundary,nt=k+et;v+=et,nt!==0&&I-nt<Z.storage&&(v+=I-nt),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Z.storage}}}let w=v%I;return w>0&&(v+=I-w),_.__size=v,_.__cache={},this}function x(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){let M=_.target;M.removeEventListener("dispose",g);let v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function m(){for(let _ in n)r.deleteBuffer(n[_]);a=[],n={},s={}}return{bind:l,update:c,dispose:m}}var To=class{constructor(t={}){let{canvas:e=Rf(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,_=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=yn,this.toneMappingExposure=1;let v=this,I=!1,w=0,C=0,P=null,S=-1,y=null,T=new ue,U=new ue,D=null,N=new gt(0),V=0,H=e.width,Z=e.height,k=1,et=null,nt=null,ut=new ue(0,0,H,Z),It=new ue(0,0,H,Z),Ut=!1,q=new ar,lt=!1,wt=!1,ht=new ie,Dt=new ie,kt=new R,Ft=new ue,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function at(){return P===null?k:1}let L=i;function Pt(E,F){return e.getContext(E,F)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),L===null){let F="webgl2";if(L=Pt(F,E),L===null)throw Pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let rt,bt,dt,Nt,_t,A,b,B,Y,j,$,Tt,pt,Mt,Zt,ot,St,zt,Ot,Et,jt,qt,fe,z;function mt(){rt=new km(L),rt.init(),qt=new xx(L,rt),bt=new Dm(L,rt,t,qt),dt=new px(L,rt),bt.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),Nt=new Vm(L),_t=new ex,A=new gx(L,rt,dt,_t,bt,qt,Nt),b=new Nm(v),B=new Om(v),Y=new Zf(L),fe=new Im(L,Y),j=new Bm(L,Y,Nt,fe),$=new Wm(L,j,Y,Nt),Ot=new Gm(L,bt,A),ot=new Um(_t),Tt=new tx(v,b,B,rt,bt,fe,ot),pt=new bx(v,_t),Mt=new nx,Zt=new cx(rt),zt=new Pm(v,b,B,dt,$,f,l),St=new dx(v,$,bt),z=new Sx(L,Nt,bt,dt),Et=new Lm(L,rt,Nt),jt=new Hm(L,rt,Nt),Nt.programs=Tt.programs,v.capabilities=bt,v.extensions=rt,v.properties=_t,v.renderLists=Mt,v.shadowMap=St,v.state=dt,v.info=Nt}mt();let X=new lc(v,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(H,Z,!1))},this.getSize=function(E){return E.set(H,Z)},this.setSize=function(E,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,Z=F,e.width=Math.floor(E*k),e.height=Math.floor(F*k),G===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(H*k,Z*k).floor()},this.setDrawingBufferSize=function(E,F,G){H=E,Z=F,k=G,e.width=Math.floor(E*G),e.height=Math.floor(F*G),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(ut)},this.setViewport=function(E,F,G,W){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,F,G,W),dt.viewport(T.copy(ut).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(It)},this.setScissor=function(E,F,G,W){E.isVector4?It.set(E.x,E.y,E.z,E.w):It.set(E,F,G,W),dt.scissor(U.copy(It).multiplyScalar(k).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(E){dt.setScissorTest(Ut=E)},this.setOpaqueSort=function(E){et=E},this.setTransparentSort=function(E){nt=E},this.getClearColor=function(E){return E.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(E=!0,F=!0,G=!0){let W=0;if(E){let O=!1;if(P!==null){let ct=P.texture.format;O=ct===qc||ct===Xc||ct===Wc}if(O){let ct=P.texture.type,yt=ct===Qi||ct===Hn||ct===sr||ct===_s||ct===Hc||ct===Vc,At=zt.getClearColor(),Rt=zt.getClearAlpha(),Bt=At.r,Wt=At.g,Ct=At.b;yt?(p[0]=Bt,p[1]=Wt,p[2]=Ct,p[3]=Rt,L.clearBufferuiv(L.COLOR,0,p)):(x[0]=Bt,x[1]=Wt,x[2]=Ct,x[3]=Rt,L.clearBufferiv(L.COLOR,0,x))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Mt.dispose(),Zt.dispose(),_t.dispose(),b.dispose(),B.dispose(),$.dispose(),fe.dispose(),z.dispose(),Tt.dispose(),X.dispose(),X.removeEventListener("sessionstart",gh),X.removeEventListener("sessionend",xh),Cn.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let E=Nt.autoReset,F=St.enabled,G=St.autoUpdate,W=St.needsUpdate,O=St.type;mt(),Nt.autoReset=E,St.enabled=F,St.autoUpdate=G,St.needsUpdate=W,St.type=O}function xt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Gt(E){let F=E.target;F.removeEventListener("dispose",Gt),Se(F)}function Se(E){Ge(E),_t.remove(E)}function Ge(E){let F=_t.get(E).programs;F!==void 0&&(F.forEach(function(G){Tt.releaseProgram(G)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,G,W,O,ct){F===null&&(F=ee);let yt=O.isMesh&&O.matrixWorld.determinant()<0,At=Ad(E,F,G,W,O);dt.setMaterial(W,yt);let Rt=G.index,Bt=1;if(W.wireframe===!0){if(Rt=j.getWireframeAttribute(G),Rt===void 0)return;Bt=2}let Wt=G.drawRange,Ct=G.attributes.position,ne=Wt.start*Bt,pe=(Wt.start+Wt.count)*Bt;ct!==null&&(ne=Math.max(ne,ct.start*Bt),pe=Math.min(pe,(ct.start+ct.count)*Bt)),Rt!==null?(ne=Math.max(ne,0),pe=Math.min(pe,Rt.count)):Ct!=null&&(ne=Math.max(ne,0),pe=Math.min(pe,Ct.count));let me=pe-ne;if(me<0||me===1/0)return;fe.setup(O,W,At,G,Rt);let je,oe=Et;if(Rt!==null&&(je=Y.get(Rt),oe=jt,oe.setIndex(je)),O.isMesh)W.wireframe===!0?(dt.setLineWidth(W.wireframeLinewidth*at()),oe.setMode(L.LINES)):oe.setMode(L.TRIANGLES);else if(O.isLine){let Lt=W.linewidth;Lt===void 0&&(Lt=1),dt.setLineWidth(Lt*at()),O.isLineSegments?oe.setMode(L.LINES):O.isLineLoop?oe.setMode(L.LINE_LOOP):oe.setMode(L.LINE_STRIP)}else O.isPoints?oe.setMode(L.POINTS):O.isSprite&&oe.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)oe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))oe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Lt=O._multiDrawStarts,Vi=O._multiDrawCounts,ae=O._multiDrawCount,vi=Rt?Y.get(Rt).bytesPerElement:1,Xn=_t.get(W).currentProgram.getUniforms();for(let ei=0;ei<ae;ei++)Xn.setValue(L,"_gl_DrawID",ei),oe.render(Lt[ei]/vi,Vi[ei])}else if(O.isInstancedMesh)oe.renderInstances(ne,me,O.count);else if(G.isInstancedBufferGeometry){let Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Vi=Math.min(G.instanceCount,Lt);oe.renderInstances(ne,me,Vi)}else oe.render(ne,me)};function ce(E,F,G){E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=qe,E.needsUpdate=!0,Cr(E,F,G),E.side=vn,E.needsUpdate=!0,Cr(E,F,G),E.side=ke):Cr(E,F,G)}this.compile=function(E,F,G=null){G===null&&(G=E),m=Zt.get(G),m.init(F),M.push(m),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ct=O.material;if(ct)if(Array.isArray(ct))for(let yt=0;yt<ct.length;yt++){let At=ct[yt];ce(At,G,O),W.add(At)}else ce(ct,G,O),W.add(ct)}),M.pop(),m=null,W},this.compileAsync=function(E,F,G=null){let W=this.compile(E,F,G);return new Promise(O=>{function ct(){if(W.forEach(function(yt){_t.get(yt).currentProgram.isReady()&&W.delete(yt)}),W.size===0){O(E);return}setTimeout(ct,10)}rt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let yi=null;function Hi(E){yi&&yi(E)}function gh(){Cn.stop()}function xh(){Cn.start()}let Cn=new td;Cn.setAnimationLoop(Hi),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(E){yi=E,X.setAnimationLoop(E),E===null?Cn.stop():Cn.start()},X.addEventListener("sessionstart",gh),X.addEventListener("sessionend",xh),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,P),m=Zt.get(E,M.length),m.init(F),M.push(m),Dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Dt),wt=this.localClippingEnabled,lt=ot.init(this.clippingPlanes,wt),g=Mt.get(E,_.length),g.init(),_.push(g),X.enabled===!0&&X.isPresenting===!0){let ct=v.xr.getDepthSensingMesh();ct!==null&&wa(ct,F,-1/0,v.sortObjects)}wa(E,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(et,nt),Q=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Q&&zt.addToRenderList(g,E),this.info.render.frame++,lt===!0&&ot.beginShadows();let G=m.state.shadowsArray;St.render(G,E,F),lt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,O=g.transmissive;if(m.setupLights(),F.isArrayCamera){let ct=F.cameras;if(O.length>0)for(let yt=0,At=ct.length;yt<At;yt++){let Rt=ct[yt];vh(W,O,E,Rt)}Q&&zt.render(E);for(let yt=0,At=ct.length;yt<At;yt++){let Rt=ct[yt];yh(g,E,Rt,Rt.viewport)}}else O.length>0&&vh(W,O,E,F),Q&&zt.render(E),yh(g,E,F);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,F),fe.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(m=M[M.length-1],lt===!0&&ot.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function wa(E,F,G,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){W&&Ft.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Dt);let yt=$.update(E),At=E.material;At.visible&&g.push(E,yt,At,G,Ft.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let yt=$.update(E),At=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ft.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ft.copy(yt.boundingSphere.center)),Ft.applyMatrix4(E.matrixWorld).applyMatrix4(Dt)),Array.isArray(At)){let Rt=yt.groups;for(let Bt=0,Wt=Rt.length;Bt<Wt;Bt++){let Ct=Rt[Bt],ne=At[Ct.materialIndex];ne&&ne.visible&&g.push(E,yt,ne,G,Ft.z,Ct)}}else At.visible&&g.push(E,yt,At,G,Ft.z,null)}}let ct=E.children;for(let yt=0,At=ct.length;yt<At;yt++)wa(ct[yt],F,G,W)}function yh(E,F,G,W){let O=E.opaque,ct=E.transmissive,yt=E.transparent;m.setupLightsView(G),lt===!0&&ot.setGlobalState(v.clippingPlanes,G),W&&dt.viewport(T.copy(W)),O.length>0&&Rr(O,F,G),ct.length>0&&Rr(ct,F,G),yt.length>0&&Rr(yt,F,G),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function vh(E,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Be(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?oi:Qi,minFilter:Bn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let ct=m.state.transmissionRenderTarget[W.id],yt=W.viewport||T;ct.setSize(yt.z,yt.w);let At=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(N),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Q&&zt.render(G);let Rt=v.toneMapping;v.toneMapping=yn;let Bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),lt===!0&&ot.setGlobalState(v.clippingPlanes,W),Rr(E,G,W),A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ct=0,ne=F.length;Ct<ne;Ct++){let pe=F[Ct],me=pe.object,je=pe.geometry,oe=pe.material,Lt=pe.group;if(oe.side===ke&&me.layers.test(W.layers)){let Vi=oe.side;oe.side=qe,oe.needsUpdate=!0,_h(me,G,W,je,oe,Lt),oe.side=Vi,oe.needsUpdate=!0,Wt=!0}}Wt===!0&&(A.updateMultisampleRenderTarget(ct),A.updateRenderTargetMipmap(ct))}v.setRenderTarget(At),v.setClearColor(N,V),Bt!==void 0&&(W.viewport=Bt),v.toneMapping=Rt}function Rr(E,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ct=E.length;O<ct;O++){let yt=E[O],At=yt.object,Rt=yt.geometry,Bt=W===null?yt.material:W,Wt=yt.group;At.layers.test(G.layers)&&_h(At,F,G,Rt,Bt,Wt)}}function _h(E,F,G,W,O,ct){E.onBeforeRender(v,F,G,W,O,ct),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,F,G,W,E,ct),O.transparent===!0&&O.side===ke&&O.forceSinglePass===!1?(O.side=qe,O.needsUpdate=!0,v.renderBufferDirect(G,F,W,O,E,ct),O.side=vn,O.needsUpdate=!0,v.renderBufferDirect(G,F,W,O,E,ct),O.side=ke):v.renderBufferDirect(G,F,W,O,E,ct),E.onAfterRender(v,F,G,W,O,ct)}function Cr(E,F,G){F.isScene!==!0&&(F=ee);let W=_t.get(E),O=m.state.lights,ct=m.state.shadowsArray,yt=O.state.version,At=Tt.getParameters(E,O.state,ct,F,G),Rt=Tt.getProgramCacheKey(At),Bt=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?B:b).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Gt),Bt=new Map,W.programs=Bt);let Wt=Bt.get(Rt);if(Wt!==void 0){if(W.currentProgram===Wt&&W.lightsStateVersion===yt)return bh(E,At),Wt}else At.uniforms=Tt.getUniforms(E),E.onBeforeCompile(At,v),Wt=Tt.acquireProgram(At,Rt),Bt.set(Rt,Wt),W.uniforms=At.uniforms;let Ct=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=ot.uniform),bh(E,At),W.needsLights=Cd(E),W.lightsStateVersion=yt,W.needsLights&&(Ct.ambientLightColor.value=O.state.ambient,Ct.lightProbe.value=O.state.probe,Ct.directionalLights.value=O.state.directional,Ct.directionalLightShadows.value=O.state.directionalShadow,Ct.spotLights.value=O.state.spot,Ct.spotLightShadows.value=O.state.spotShadow,Ct.rectAreaLights.value=O.state.rectArea,Ct.ltc_1.value=O.state.rectAreaLTC1,Ct.ltc_2.value=O.state.rectAreaLTC2,Ct.pointLights.value=O.state.point,Ct.pointLightShadows.value=O.state.pointShadow,Ct.hemisphereLights.value=O.state.hemi,Ct.directionalShadowMap.value=O.state.directionalShadowMap,Ct.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ct.spotShadowMap.value=O.state.spotShadowMap,Ct.spotLightMatrix.value=O.state.spotLightMatrix,Ct.spotLightMap.value=O.state.spotLightMap,Ct.pointShadowMap.value=O.state.pointShadowMap,Ct.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Wt,W.uniformsList=null,Wt}function Mh(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=ms.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function bh(E,F){let G=_t.get(E);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ad(E,F,G,W,O){F.isScene!==!0&&(F=ee),A.resetTextureUnits();let ct=F.fog,yt=W.isMeshStandardMaterial?F.environment:null,At=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Cs,Rt=(W.isMeshStandardMaterial?B:b).get(W.envMap||yt),Bt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!G.morphAttributes.position,ne=!!G.morphAttributes.normal,pe=!!G.morphAttributes.color,me=yn;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(me=v.toneMapping);let je=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=je!==void 0?je.length:0,Lt=_t.get(W),Vi=m.state.lights;if(lt===!0&&(wt===!0||E!==y)){let hi=E===y&&W.id===S;ot.setState(W,E,hi)}let ae=!1;W.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Vi.state.version||Lt.outputColorSpace!==At||O.isBatchedMesh&&Lt.batching===!1||!O.isBatchedMesh&&Lt.batching===!0||O.isBatchedMesh&&Lt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Lt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Lt.instancing===!1||!O.isInstancedMesh&&Lt.instancing===!0||O.isSkinnedMesh&&Lt.skinning===!1||!O.isSkinnedMesh&&Lt.skinning===!0||O.isInstancedMesh&&Lt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Lt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Lt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Lt.instancingMorph===!1&&O.morphTexture!==null||Lt.envMap!==Rt||W.fog===!0&&Lt.fog!==ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ot.numPlanes||Lt.numIntersection!==ot.numIntersection)||Lt.vertexAlphas!==Bt||Lt.vertexTangents!==Wt||Lt.morphTargets!==Ct||Lt.morphNormals!==ne||Lt.morphColors!==pe||Lt.toneMapping!==me||Lt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Lt.__version=W.version);let vi=Lt.currentProgram;ae===!0&&(vi=Cr(W,F,O));let Xn=!1,ei=!1,Fs=!1,ge=vi.getUniforms(),Di=Lt.uniforms;if(dt.useProgram(vi.program)&&(Xn=!0,ei=!0,Fs=!0),W.id!==S&&(S=W.id,ei=!0),Xn||y!==E){dt.buffers.depth.getReversed()?(ht.copy(E.projectionMatrix),Pf(ht),If(ht),ge.setValue(L,"projectionMatrix",ht)):ge.setValue(L,"projectionMatrix",E.projectionMatrix),ge.setValue(L,"viewMatrix",E.matrixWorldInverse);let ln=ge.map.cameraPosition;ln!==void 0&&ln.setValue(L,kt.setFromMatrixPosition(E.matrixWorld)),bt.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,ei=!0,Fs=!0)}if(O.isSkinnedMesh){ge.setOptional(L,O,"bindMatrix"),ge.setOptional(L,O,"bindMatrixInverse");let hi=O.skeleton;hi&&(hi.boneTexture===null&&hi.computeBoneTexture(),ge.setValue(L,"boneTexture",hi.boneTexture,A))}O.isBatchedMesh&&(ge.setOptional(L,O,"batchingTexture"),ge.setValue(L,"batchingTexture",O._matricesTexture,A),ge.setOptional(L,O,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",O._indirectTexture,A),ge.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",O._colorsTexture,A));let Os=G.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&Ot.update(O,G,vi),(ei||Lt.receiveShadow!==O.receiveShadow)&&(Lt.receiveShadow=O.receiveShadow,ge.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Di.envMap.value=Rt,Di.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Di.envMapIntensity.value=F.environmentIntensity),ei&&(ge.setValue(L,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&Rd(Di,Fs),ct&&W.fog===!0&&pt.refreshFogUniforms(Di,ct),pt.refreshMaterialUniforms(Di,W,k,Z,m.state.transmissionRenderTarget[E.id]),ms.upload(L,Mh(Lt),Di,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ms.upload(L,Mh(Lt),Di,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(L,"center",O.center),ge.setValue(L,"modelViewMatrix",O.modelViewMatrix),ge.setValue(L,"normalMatrix",O.normalMatrix),ge.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let hi=W.uniformsGroups;for(let ln=0,cn=hi.length;ln<cn;ln++){let Sh=hi[ln];z.update(Sh,vi),z.bind(Sh,vi)}}return vi}function Rd(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Cd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,F,G){_t.get(E.texture).__webglTexture=F,_t.get(E.depthTexture).__webglTexture=G;let W=_t.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){let G=_t.get(E);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,G=0){P=E,w=F,C=G;let W=!0,O=null,ct=!1,yt=!1;if(E){let Rt=_t.get(E);if(Rt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Rt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Rt.__hasExternalTextures)A.rebindTextures(E,_t.get(E.texture).__webglTexture,_t.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ct=E.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&_t.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(yt=!0);let Wt=_t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?O=Wt[F][G]:O=Wt[F],ct=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?O=_t.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[G]:O=Wt,T.copy(E.viewport),U.copy(E.scissor),D=E.scissorTest}else T.copy(ut).multiplyScalar(k).floor(),U.copy(It).multiplyScalar(k).floor(),D=Ut;if(dt.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&dt.drawBuffers(E,O),dt.viewport(T),dt.scissor(U),dt.setScissorTest(D),ct){let Rt=_t.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Rt.__webglTexture,G)}else if(yt){let Rt=_t.get(E.texture),Bt=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.__webglTexture,G||0,Bt)}S=-1},this.readRenderTargetPixels=function(E,F,G,W,O,ct,yt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){dt.bindFramebuffer(L.FRAMEBUFFER,At);try{let Rt=E.texture,Bt=Rt.format,Wt=Rt.type;if(!bt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&G>=0&&G<=E.height-O&&L.readPixels(F,G,W,O,qt.convert(Bt),qt.convert(Wt),ct)}finally{let Rt=P!==null?_t.get(P).__webglFramebuffer:null;dt.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,F,G,W,O,ct,yt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){let Rt=E.texture,Bt=Rt.format,Wt=Rt.type;if(!bt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-W&&G>=0&&G<=E.height-O){dt.bindFramebuffer(L.FRAMEBUFFER,At);let Ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.bufferData(L.PIXEL_PACK_BUFFER,ct.byteLength,L.STREAM_READ),L.readPixels(F,G,W,O,qt.convert(Bt),qt.convert(Wt),0);let ne=P!==null?_t.get(P).__webglFramebuffer:null;dt.bindFramebuffer(L.FRAMEBUFFER,ne);let pe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Cf(L,pe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ct),L.deleteBuffer(Ct),L.deleteSync(pe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,G=0){E.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);let W=Math.pow(2,-G),O=Math.floor(E.image.width*W),ct=Math.floor(E.image.height*W),yt=F!==null?F.x:0,At=F!==null?F.y:0;A.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,yt,At,O,ct),dt.unbindTexture()},this.copyTextureToTexture=function(E,F,G=null,W=null,O=0){E.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let ct,yt,At,Rt,Bt,Wt,Ct,ne,pe,me=E.isCompressedTexture?E.mipmaps[O]:E.image;G!==null?(ct=G.max.x-G.min.x,yt=G.max.y-G.min.y,At=G.isBox3?G.max.z-G.min.z:1,Rt=G.min.x,Bt=G.min.y,Wt=G.isBox3?G.min.z:0):(ct=me.width,yt=me.height,At=me.depth||1,Rt=0,Bt=0,Wt=0),W!==null?(Ct=W.x,ne=W.y,pe=W.z):(Ct=0,ne=0,pe=0);let je=qt.convert(F.format),oe=qt.convert(F.type),Lt;F.isData3DTexture?(A.setTexture3D(F,0),Lt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Lt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Lt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let Vi=L.getParameter(L.UNPACK_ROW_LENGTH),ae=L.getParameter(L.UNPACK_IMAGE_HEIGHT),vi=L.getParameter(L.UNPACK_SKIP_PIXELS),Xn=L.getParameter(L.UNPACK_SKIP_ROWS),ei=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt);let Fs=E.isDataArrayTexture||E.isData3DTexture,ge=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Di=_t.get(E),Os=_t.get(F),hi=_t.get(Di.__renderTarget),ln=_t.get(Os.__renderTarget);dt.bindFramebuffer(L.READ_FRAMEBUFFER,hi.__webglFramebuffer),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let cn=0;cn<At;cn++)Fs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.get(E).__webglTexture,O,Wt+cn),E.isDepthTexture?(ge&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.get(F).__webglTexture,O,pe+cn),L.blitFramebuffer(Rt,Bt,ct,yt,Ct,ne,ct,yt,L.DEPTH_BUFFER_BIT,L.NEAREST)):ge?L.copyTexSubImage3D(Lt,O,Ct,ne,pe+cn,Rt,Bt,ct,yt):L.copyTexSubImage2D(Lt,O,Ct,ne,pe+cn,Rt,Bt,ct,yt);dt.bindFramebuffer(L.READ_FRAMEBUFFER,null),dt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ge?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Lt,O,Ct,ne,pe,ct,yt,At,je,oe,me.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Lt,O,Ct,ne,pe,ct,yt,At,je,me.data):L.texSubImage3D(Lt,O,Ct,ne,pe,ct,yt,At,je,oe,me):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Ct,ne,ct,yt,je,oe,me.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Ct,ne,me.width,me.height,je,me.data):L.texSubImage2D(L.TEXTURE_2D,O,Ct,ne,ct,yt,je,oe,me);L.pixelStorei(L.UNPACK_ROW_LENGTH,Vi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ae),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ei),O===0&&F.generateMipmaps&&L.generateMipmap(Lt),dt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,G=null,W=null,O=0){return E.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,G,W,O)},this.initRenderTarget=function(E){_t.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),dt.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,dt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var Ao=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new gt(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mn=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},cc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ke=new R,Ro=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=he(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},lr=class extends Ti{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},os,Gs=new R,as=new R,ls=new R,cs=new K,Ws=new K,rd=new ie,Kr=new R,Xs=new R,Qr=new R,Su=new K,tl=new K,Eu=new K,Co=class extends _e{constructor(t=new lr){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cc(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new Ro(i,3,0,!1)),os.setAttribute("uv",new Ro(i,2,3,!1))}this.geometry=os,this.material=t,this.center=new K(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;jr(Kr.set(-.5,-.5,0),ls,a,as,n,s),jr(Xs.set(.5,-.5,0),ls,a,as,n,s),jr(Qr.set(.5,.5,0),ls,a,as,n,s),Su.set(0,0),tl.set(1,0),Eu.set(1,1);let o=t.ray.intersectTriangle(Kr,Xs,Qr,!1,Gs);if(o===null&&(jr(Xs.set(-.5,.5,0),ls,a,as,n,s),tl.set(0,1),o=t.ray.intersectTriangle(Kr,Qr,Xs,!1,Gs),o===null))return;let l=t.ray.origin.distanceTo(Gs);l<t.near||l>t.far||e.push({distance:l,point:Gs.clone(),uv:xn.getInterpolation(Gs,Kr,Xs,Qr,Su,tl,Eu,new K),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function jr(r,t,e,i,n,s){cs.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(Ws.x=s*cs.x-n*cs.y,Ws.y=n*cs.x+s*cs.y):Ws.copy(cs),r.copy(t),r.x+=Ws.x,r.y+=Ws.y,r.applyMatrix4(rd)}var hc=class extends ti{constructor(t=null,e=1,i=1,n,s,a,o,l,c=si,h=si,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Po=class extends Re{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new ie,wu=new ie,to=[],Tu=new ji,Ex=new ie,qs=new tt,Ys=new tn,en=class extends tt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Po(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ex)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,hs),Tu.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,hs),Ys.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),t.ray.intersectsSphere(Ys)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,hs),wu.multiplyMatrices(i,hs),qs.matrixWorld=wu,qs.raycast(t,to);for(let a=0,o=to.length;a<o;a++){let l=to[a];l.instanceId=s,l.object=this,e.push(l)}to.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new hc(new Float32Array(n*this.count),n,this.count,Gc,zi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var cr=class extends Ti{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Io=new R,Lo=new R,Au=new ie,$s=new or,eo=new tn,el=new R,Ru=new R,Do=class extends _e{constructor(t=new de,e=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Io.fromBufferAttribute(e,n-1),Lo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Io.distanceTo(Lo);t.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(n),eo.radius+=s,t.ray.intersectsSphere(eo)===!1)return;Au.copy(n).invert(),$s.copy(t.ray).applyMatrix4(Au);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),_=h.getX(x+1),M=io(this,t,$s,l,m,_);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=io(this,t,$s,l,x,g);m&&e.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=io(this,t,$s,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=io(this,t,$s,l,p-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function io(r,t,e,i,n,s){let a=r.geometry.attributes.position;if(Io.fromBufferAttribute(a,n),Lo.fromBufferAttribute(a,s),e.distanceSqToSegment(Io,Lo,el,Ru)>i)return;el.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(el);if(!(l<t.near||l>t.far))return{distance:l,point:Ru.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}var hr=class extends Ti{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cu=new ie,uc=new or,no=new tn,so=new R,ws=class extends _e{constructor(t=new de,e=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(n),no.radius+=s,t.ray.intersectsSphere(no)===!1)return;Cu.copy(n).invert(),uc.copy(t.ray).applyMatrix4(Cu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);so.fromBufferAttribute(u,g),Pu(so,g,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)so.fromBufferAttribute(u,p),Pu(so,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Pu(r,t,e,i,n,s,a){let o=uc.distanceSqToPoint(r);if(o<e){let l=new R;uc.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ri=class extends ti{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new K:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new R,n=[],s=[],a=[],o=new R,l=new ie;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Oe(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Oe(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ur=class extends di{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new K){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dc=class extends ur{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kc(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var ro=new R,il=new Kc,nl=new Kc,sl=new Kc,fc=class extends di{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(ro.subVectors(n[0],n[1]).add(n[0]),c=ro);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(ro.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),il.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),nl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),sl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),nl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),sl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(il.calc(l),nl.calc(l),sl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Iu(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function wx(r,t){let e=1-r;return e*e*t}function Tx(r,t){return 2*(1-r)*r*t}function Ax(r,t){return r*r*t}function er(r,t,e,i){return wx(r,t)+Tx(r,e)+Ax(r,i)}function Rx(r,t){let e=1-r;return e*e*e*t}function Cx(r,t){let e=1-r;return 3*e*e*r*t}function Px(r,t){return 3*(1-r)*r*r*t}function Ix(r,t){return r*r*r*t}function ir(r,t,e,i,n){return Rx(r,t)+Cx(r,e)+Px(r,i)+Ix(r,n)}var Uo=class extends di{constructor(t=new K,e=new K,i=new K,n=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new K){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ir(t,n.x,s.x,a.x,o.x),ir(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pc=class extends di{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ir(t,n.x,s.x,a.x,o.x),ir(t,n.y,s.y,a.y,o.y),ir(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},No=class extends di{constructor(t=new K,e=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends di{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends di{constructor(t=new K,e=new K,i=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new K){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(er(t,n.x,s.x,a.x),er(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends di{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(er(t,n.x,s.x,a.x),er(t,n.y,s.y,a.y),er(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Iu(o,l.x,c.x,h.x,u.x),Iu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new K().fromArray(n))}return this}},xc=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:fc,CubicBezierCurve:Uo,CubicBezierCurve3:pc,EllipseCurve:ur,LineCurve:No,LineCurve3:mc,QuadraticBezierCurve:zo,QuadraticBezierCurve3:gc,SplineCurve:Fo}),yc=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new xc[n.type]().fromJSON(n))}return this}},Oo=class extends yc{constructor(t){super(),this.type="Path",this.currentPoint=new K,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new No(this.currentPoint.clone(),new K(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new zo(this.currentPoint.clone(),new K(t,e),new K(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new Uo(this.currentPoint.clone(),new K(t,e),new K(i,n),new K(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Fo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let c=new ur(t,e,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var nn=class r extends de{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new R,h=new K;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},be=class r extends de{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(f,2));function _(){let v=new R,I=new R,w=0,C=(e-t)/i;for(let P=0;P<=s;P++){let S=[],y=P/s,T=y*(e-t)+t;for(let U=0;U<=n;U++){let D=U/n,N=D*l+o,V=Math.sin(N),H=Math.cos(N);I.x=T*V,I.y=-y*i+g,I.z=T*H,u.push(I.x,I.y,I.z),v.set(V,C,H).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-y),S.push(p++)}x.push(S)}for(let P=0;P<n;P++)for(let S=0;S<s;S++){let y=x[S][P],T=x[S+1][P],U=x[S+1][P+1],D=x[S][P+1];(t>0||S!==0)&&(h.push(y,T,D),w+=3),(e>0||S!==s-1)&&(h.push(T,U,D),w+=3)}c.addGroup(m,w,0),m+=w}function M(v){let I=p,w=new K,C=new R,P=0,S=v===!0?t:e,y=v===!0?1:-1;for(let U=1;U<=n;U++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),p++;let T=p;for(let U=0;U<=n;U++){let N=U/n*l+o,V=Math.cos(N),H=Math.sin(N);C.x=S*H,C.y=g*y,C.z=S*V,u.push(C.x,C.y,C.z),d.push(0,y,0),w.x=V*.5+.5,w.y=H*.5*y+.5,f.push(w.x,w.y),p++}for(let U=0;U<n;U++){let D=I+U,N=T+U;v===!0?h.push(N,N+1,D):h.push(N+1,N,D),P+=3}c.addGroup(m,P,v===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var dr=class r extends de{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(s.slice(),3)),this.setAttribute("uv",new Ht(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new R,v=new R,I=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],v),f(e[w+2],I),l(M,v,I,_)}function l(_,M,v,I){let w=I+1,C=[];for(let P=0;P<=w;P++){C[P]=[];let S=_.clone().lerp(v,P/w),y=M.clone().lerp(v,P/w),T=w-P;for(let U=0;U<=T;U++)U===0&&P===w?C[P][U]=S:C[P][U]=S.clone().lerp(y,U/T)}for(let P=0;P<w;P++)for(let S=0;S<2*(w-P)-1;S++){let y=Math.floor(S/2);S%2===0?(d(C[P][y+1]),d(C[P+1][y]),d(C[P][y])):(d(C[P][y+1]),d(C[P+1][y+1]),d(C[P+1][y]))}}function c(_){let M=new R;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(_),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function h(){let _=new R;for(let M=0;M<s.length;M+=3){_.x=s[M+0],_.y=s[M+1],_.z=s[M+2];let v=g(_)/2/Math.PI+.5,I=m(_)/Math.PI+.5;a.push(v,1-I)}p(),u()}function u(){for(let _=0;_<a.length;_+=6){let M=a[_+0],v=a[_+2],I=a[_+4],w=Math.max(M,v,I),C=Math.min(M,v,I);w>.9&&C<.1&&(M<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,M){let v=_*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function p(){let _=new R,M=new R,v=new R,I=new R,w=new K,C=new K,P=new K;for(let S=0,y=0;S<s.length;S+=9,y+=6){_.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),w.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),I.copy(_).add(M).add(v).divideScalar(3);let T=g(I);x(w,y+0,_,T),x(C,y+2,M,T),x(P,y+4,v,T)}}function x(_,M,v,I){I<0&&_.x===1&&(a[M]=_.x-1),v.x===0&&v.z===0&&(a[M]=I/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}},ko=class r extends dr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var fr=class extends Oo{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Oo().fromJSON(n))}return this}},Lx={triangulate:function(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=od(r,0,n,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(i&&(s=Fx(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let p=e;p<n;p+=e)u=r[p],d=r[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return pr(s,a,e,o,l,f,0),a}};function od(r,t,e,i,n){let s,a;if(n===$x(r,t,e,i)>0)for(s=t;s<e;s+=i)a=Lu(s,r[s],r[s+1],a);else for(s=e-i;s>=t;s-=i)a=Lu(s,r[s],r[s+1],a);return a&&Ko(a,a.next)&&(gr(a),a=a.next),a}function Vn(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(Ko(e,e.next)||ve(e.prev,e,e.next)===0)){if(gr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function pr(r,t,e,i,n,s,a){if(!r)return;!a&&s&&Vx(r,i,n,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Ux(r,i,n,s):Dx(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),gr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Nx(Vn(r),t,e),pr(r,t,e,i,n,s,2)):a===2&&zx(r,t,e,i,n,s):pr(Vn(r),t,e,i,n,s,1);break}}}function Dx(r){let t=r.prev,e=r,i=r.next;if(ve(t,e,i)>=0)return!1;let n=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c,p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ds(n,o,s,l,a,c,p.x,p.y)&&ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ux(r,t,e,i){let n=r.prev,s=r,a=r.next;if(ve(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=vc(f,p,t,e,i),_=vc(x,g,t,e,i),M=r.prevZ,v=r.nextZ;for(;M&&M.z>=m&&v&&v.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&ds(o,h,l,u,c,d,M.x,M.y)&&ve(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==n&&v!==a&&ds(o,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==n&&M!==a&&ds(o,h,l,u,c,d,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==n&&v!==a&&ds(o,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Nx(r,t,e){let i=r;do{let n=i.prev,s=i.next.next;!Ko(n,s)&&ad(n,i,i.next,s)&&mr(n,s)&&mr(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),gr(i),gr(i.next),i=r=s),i=i.next}while(i!==r);return Vn(i)}function zx(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xx(a,o)){let l=ld(a,o);a=Vn(a,a.next),l=Vn(l,l.next),pr(a,t,e,i,n,s,0),pr(l,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Fx(r,t,e,i){let n=[],s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,l=s<a-1?t[s+1]*i:r.length,c=od(r,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Wx(c));for(n.sort(Ox),s=0;s<n.length;s++)e=kx(n[s],e);return e}function Ox(r,t){return r.x-t.x}function kx(r,t){let e=Bx(r,t);if(!e)return t;let i=ld(e,r);return Vn(i,i.next),Vn(e,e.next)}function Bx(r,t){let e=t,i=-1/0,n,s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===s))return n}e=e.next}while(e!==t);if(!n)return null;let o=n,l=n.x,c=n.y,h=1/0,u;e=n;do s>=e.x&&e.x>=l&&s!==e.x&&ds(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),mr(e,r)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&Hx(n,e)))&&(n=e,h=u)),e=e.next;while(e!==o);return n}function Hx(r,t){return ve(r.prev,r,t.prev)<0&&ve(t.next,r,r.next)<0}function Vx(r,t,e,i){let n=r;do n.z===0&&(n.z=vc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Gx(n)}function Gx(r){let t,e,i,n,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;e=i}s.nextZ=null,c*=2}while(a>1);return r}function vc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Wx(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ds(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function Xx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!qx(r,t)&&(mr(r,t)&&mr(t,r)&&Yx(r,t)&&(ve(r.prev,r,t.prev)||ve(r,t.prev,t))||Ko(r,t)&&ve(r.prev,r,r.next)>0&&ve(t.prev,t,t.next)>0)}function ve(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ko(r,t){return r.x===t.x&&r.y===t.y}function ad(r,t,e,i){let n=ao(ve(r,t,e)),s=ao(ve(r,t,i)),a=ao(ve(e,i,r)),o=ao(ve(e,i,t));return!!(n!==s&&a!==o||n===0&&oo(r,e,t)||s===0&&oo(r,i,t)||a===0&&oo(e,r,i)||o===0&&oo(e,t,i))}function oo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function ao(r){return r>0?1:r<0?-1:0}function qx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&ad(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function mr(r,t){return ve(r.prev,r,r.next)<0?ve(r,t,r.next)>=0&&ve(r,r.prev,t)>=0:ve(r,t,r.prev)<0||ve(r,r.next,t)<0}function Yx(r,t){let e=r,i=!1,n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function ld(r,t){let e=new _c(r.i,r.x,r.y),i=new _c(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Lu(r,t,e,i){let n=new _c(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function gr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function _c(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $x(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}var nr=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];Du(t),Uu(i,t);let a=t.length;e.forEach(Du);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Uu(i,e[l]);let o=Lx.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Du(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Uu(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Bo=class r extends de{constructor(t=new fr([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Ht(n,3)),this.setAttribute("uv",new Ht(s,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Zx,M,v=!1,I,w,C,P;m&&(M=m.getSpacedPoints(h),v=!0,d=!1,I=m.computeFrenetFrames(h,!1),w=new R,C=new R,P=new R),d||(g=0,f=0,p=0,x=0);let S=o.extractPoints(c),y=S.shape,T=S.holes;if(!nr.isClockWise(y)){y=y.reverse();for(let Q=0,at=T.length;Q<at;Q++){let L=T[Q];nr.isClockWise(L)&&(T[Q]=L.reverse())}}let D=nr.triangulateShape(y,T),N=y;for(let Q=0,at=T.length;Q<at;Q++){let L=T[Q];y=y.concat(L)}function V(Q,at,L){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(at,L)}let H=y.length,Z=D.length;function k(Q,at,L){let Pt,rt,bt,dt=Q.x-at.x,Nt=Q.y-at.y,_t=L.x-Q.x,A=L.y-Q.y,b=dt*dt+Nt*Nt,B=dt*A-Nt*_t;if(Math.abs(B)>Number.EPSILON){let Y=Math.sqrt(b),j=Math.sqrt(_t*_t+A*A),$=at.x-Nt/Y,Tt=at.y+dt/Y,pt=L.x-A/j,Mt=L.y+_t/j,Zt=((pt-$)*A-(Mt-Tt)*_t)/(dt*A-Nt*_t);Pt=$+dt*Zt-Q.x,rt=Tt+Nt*Zt-Q.y;let ot=Pt*Pt+rt*rt;if(ot<=2)return new K(Pt,rt);bt=Math.sqrt(ot/2)}else{let Y=!1;dt>Number.EPSILON?_t>Number.EPSILON&&(Y=!0):dt<-Number.EPSILON?_t<-Number.EPSILON&&(Y=!0):Math.sign(Nt)===Math.sign(A)&&(Y=!0),Y?(Pt=-Nt,rt=dt,bt=Math.sqrt(b)):(Pt=dt,rt=Nt,bt=Math.sqrt(b/2))}return new K(Pt/bt,rt/bt)}let et=[];for(let Q=0,at=N.length,L=at-1,Pt=Q+1;Q<at;Q++,L++,Pt++)L===at&&(L=0),Pt===at&&(Pt=0),et[Q]=k(N[Q],N[L],N[Pt]);let nt=[],ut,It=et.concat();for(let Q=0,at=T.length;Q<at;Q++){let L=T[Q];ut=[];for(let Pt=0,rt=L.length,bt=rt-1,dt=Pt+1;Pt<rt;Pt++,bt++,dt++)bt===rt&&(bt=0),dt===rt&&(dt=0),ut[Pt]=k(L[Pt],L[bt],L[dt]);nt.push(ut),It=It.concat(ut)}for(let Q=0;Q<g;Q++){let at=Q/g,L=f*Math.cos(at*Math.PI/2),Pt=p*Math.sin(at*Math.PI/2)+x;for(let rt=0,bt=N.length;rt<bt;rt++){let dt=V(N[rt],et[rt],Pt);ht(dt.x,dt.y,-L)}for(let rt=0,bt=T.length;rt<bt;rt++){let dt=T[rt];ut=nt[rt];for(let Nt=0,_t=dt.length;Nt<_t;Nt++){let A=V(dt[Nt],ut[Nt],Pt);ht(A.x,A.y,-L)}}}let Ut=p+x;for(let Q=0;Q<H;Q++){let at=d?V(y[Q],It[Q],Ut):y[Q];v?(C.copy(I.normals[0]).multiplyScalar(at.x),w.copy(I.binormals[0]).multiplyScalar(at.y),P.copy(M[0]).add(C).add(w),ht(P.x,P.y,P.z)):ht(at.x,at.y,0)}for(let Q=1;Q<=h;Q++)for(let at=0;at<H;at++){let L=d?V(y[at],It[at],Ut):y[at];v?(C.copy(I.normals[Q]).multiplyScalar(L.x),w.copy(I.binormals[Q]).multiplyScalar(L.y),P.copy(M[Q]).add(C).add(w),ht(P.x,P.y,P.z)):ht(L.x,L.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let at=Q/g,L=f*Math.cos(at*Math.PI/2),Pt=p*Math.sin(at*Math.PI/2)+x;for(let rt=0,bt=N.length;rt<bt;rt++){let dt=V(N[rt],et[rt],Pt);ht(dt.x,dt.y,u+L)}for(let rt=0,bt=T.length;rt<bt;rt++){let dt=T[rt];ut=nt[rt];for(let Nt=0,_t=dt.length;Nt<_t;Nt++){let A=V(dt[Nt],ut[Nt],Pt);v?ht(A.x,A.y+M[h-1].y,M[h-1].x+L):ht(A.x,A.y,u+L)}}}q(),lt();function q(){let Q=n.length/3;if(d){let at=0,L=H*at;for(let Pt=0;Pt<Z;Pt++){let rt=D[Pt];Dt(rt[2]+L,rt[1]+L,rt[0]+L)}at=h+g*2,L=H*at;for(let Pt=0;Pt<Z;Pt++){let rt=D[Pt];Dt(rt[0]+L,rt[1]+L,rt[2]+L)}}else{for(let at=0;at<Z;at++){let L=D[at];Dt(L[2],L[1],L[0])}for(let at=0;at<Z;at++){let L=D[at];Dt(L[0]+H*h,L[1]+H*h,L[2]+H*h)}}i.addGroup(Q,n.length/3-Q,0)}function lt(){let Q=n.length/3,at=0;wt(N,at),at+=N.length;for(let L=0,Pt=T.length;L<Pt;L++){let rt=T[L];wt(rt,at),at+=rt.length}i.addGroup(Q,n.length/3-Q,1)}function wt(Q,at){let L=Q.length;for(;--L>=0;){let Pt=L,rt=L-1;rt<0&&(rt=Q.length-1);for(let bt=0,dt=h+g*2;bt<dt;bt++){let Nt=H*bt,_t=H*(bt+1),A=at+Pt+Nt,b=at+rt+Nt,B=at+rt+_t,Y=at+Pt+_t;kt(A,b,B,Y)}}}function ht(Q,at,L){l.push(Q),l.push(at),l.push(L)}function Dt(Q,at,L){Ft(Q),Ft(at),Ft(L);let Pt=n.length/3,rt=_.generateTopUV(i,n,Pt-3,Pt-2,Pt-1);ee(rt[0]),ee(rt[1]),ee(rt[2])}function kt(Q,at,L,Pt){Ft(Q),Ft(at),Ft(Pt),Ft(at),Ft(L),Ft(Pt);let rt=n.length/3,bt=_.generateSideWallUV(i,n,rt-6,rt-3,rt-2,rt-1);ee(bt[0]),ee(bt[1]),ee(bt[3]),ee(bt[1]),ee(bt[2]),ee(bt[3])}function Ft(Q){n.push(l[Q*3+0]),n.push(l[Q*3+1]),n.push(l[Q*3+2])}function ee(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Jx(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new xc[n.type]().fromJSON(n)),new r(i,t.options)}},Zx={generateTopUV:function(r,t,e,i,n){let s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new K(s,a),new K(o,l),new K(c,h)]},generateSideWallUV:function(r,t,e,i,n,s){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new K(a,1-l),new K(c,1-u),new K(d,1-p),new K(x,1-m)]:[new K(o,1-l),new K(h,1-u),new K(f,1-p),new K(g,1-m)]}};function Jx(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){let s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var sn=class r extends dr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Ho=class r extends dr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Vo=class r extends de{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new R,p=new K;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){let m=s+g/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<n;x++){let g=x*(i+1);for(let m=0;m<i;m++){let _=m+g,M=_,v=_+i+1,I=_+i+2,w=_+1;o.push(M,v,w),o.push(v,I,w)}}this.setIndex(o),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Je=class r extends de{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let _=[],M=m/i,v=0;m===0&&a===0?v=.5/e:m===i&&l===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let w=I/e;u.x=-t*Math.cos(n+w*s)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(n+w*s)*Math.sin(a+M*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(w+v,1-M),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let M=h[m][_+1],v=h[m][_],I=h[m+1][_],w=h[m+1][_+1];(m!==0||a>0)&&f.push(M,v,w),(m!==i-1||l<Math.PI)&&f.push(v,I,w)}this.setIndex(f),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bn=class r extends de{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=i;f++)for(let p=0;p<=n;p++){let x=p/n*s,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=n;p++){let x=(n+1)*f+p-1,g=(n+1)*(f-1)+p-1,m=(n+1)*(f-1)+p,_=(n+1)*f+p;a.push(x,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Go=class extends Me{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},$t=class extends Ti{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ne=class extends Ti{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function lo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Kx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ts=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mc=class extends Ts{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rh:s=t,o=2*e-i;break;case Ch:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rh:a=t,l=2*i-e;break;case Ch:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,M=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let I=0;I!==o;++I)s[I]=m*a[h+I]+_*a[c+I]+M*a[l+I]+v*a[u+I];return s}},bc=class extends Ts{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Sc=class extends Ts{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ai=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lo(e,this.TimeBufferType),this.values=lo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:lo(t.times,Array),values:lo(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case Xl:e=this.InterpolantFactoryMethodLinear;break;case Aa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return Aa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Kx(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Aa,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Xl;var Gn=class extends Ai{constructor(t,e,i){super(t,e,i)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=mo;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends Ai{};Ec.prototype.ValueTypeName="color";var wc=class extends Ai{};wc.prototype.ValueTypeName="number";var Tc=class extends Ts{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)ki.slerpFlat(s,0,a,c-o,a,c,l);return s}},Wo=class extends Ai{InterpolantFactoryMethodLinear(t){return new Tc(this.times,this.values,this.getValueSize(),t)}};Wo.prototype.ValueTypeName="quaternion";Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Ai{constructor(t,e,i){super(t,e,i)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=mo;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends Ai{};Ac.prototype.ValueTypeName="vector";var Rc=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Qx=new Rc,Cc=class{constructor(t){this.manager=t!==void 0?t:Qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var As=class extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Rs=class extends As{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rl=new ie,Nu=new R,zu=new R,Xo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nu),zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zu),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Fu=new ie,Zs=new R,ol=new R,Pc=class extends Xo{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Zs),ol.copy(i.position),ol.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ol),i.updateMatrixWorld(),n.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Fu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}},Ri=class extends As{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Pc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ic=class extends Xo{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xr=class extends As{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Ic}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},qo=class extends As{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Yo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ou();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ou(){return performance.now()}var Qc="\\[\\]\\.:\\/",jx=new RegExp("["+Qc+"]","g"),jc="[^"+Qc+"]",ty="[^"+Qc.replace("\\.","")+"]",ey=/((?:WC+[\/:])*)/.source.replace("WC",jc),iy=/(WCOD+)?/.source.replace("WCOD",ty),ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jc),sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jc),ry=new RegExp("^"+ey+iy+ny+sy+"$"),oy=["material","materials","bones","map"],Lc=class{constructor(t,e,i){let n=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jx,"")}static parseTrackName(t){let e=ry.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);oy.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Lc;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);function fi(r){return function(){r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var rn=(r,t,e)=>r<t?t:r>e?e:r,ay=(r,t,e)=>r+(t-r)*e,pi=(r,t,e,i)=>ay(r,t,1-Math.exp(-e*i));function Is(r,t){let e=document.createElement("canvas");return e.width=r,e.height=t,e}function Ls(r,t=!0){let e=new ri(r);return t&&(e.wrapS=e.wrapT=vs),e.colorSpace=ye,e.anisotropy=4,e}function vr(r,t,e,i,n,s=.08){for(let a=0;a<i;a++){let o=Math.floor(n()*255);r.fillStyle=`rgba(${o},${o},${o},${s})`;let l=1+n()*3;r.fillRect(n()*t,n()*e,l,l)}}function cd(r,t=1){let e=fi(t),i=Is(256,256),n=i.getContext("2d");if(r==="hub"){n.fillStyle="#5d6670",n.fillRect(0,0,256,256),n.strokeStyle="#4a525b",n.lineWidth=4;for(let s=0;s<=256;s+=128)n.beginPath(),n.moveTo(s,0),n.lineTo(s,256),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(256,s),n.stroke();n.fillStyle="#6c7680",n.fillRect(6,6,116,116),n.fillRect(134,134,116,116),vr(n,256,256,3e3,e,.06)}else if(r==="bay"){n.fillStyle="#6b6457",n.fillRect(0,0,256,256),vr(n,256,256,6e3,e,.08),n.fillStyle="rgba(40,36,30,0.09)";for(let s=0;s<4;s++)n.beginPath(),n.arc(e()*256,e()*256,10+e()*30,0,7),n.fill();n.strokeStyle="#4b463d",n.lineWidth=3,n.strokeRect(0,0,256,256)}else if(r==="office"){n.fillStyle="#3e4a5c",n.fillRect(0,0,256,256);for(let s=0;s<256;s+=4)for(let a=0;a<256;a+=4){let o=e()*20|0;n.fillStyle=`rgba(${o},${o+10},${o+25},0.25)`,n.fillRect(a,s,4,4)}n.strokeStyle="rgba(20,25,35,0.6)",n.lineWidth=2,n.strokeRect(0,0,128,128),n.strokeRect(128,128,128,128)}else if(r==="green"){n.fillStyle="#41584a",n.fillRect(0,0,256,256),n.strokeStyle="#2c3d33",n.lineWidth=3;for(let s=0;s<=256;s+=64)n.beginPath(),n.moveTo(s,0),n.lineTo(s,256),n.stroke(),n.beginPath(),n.moveTo(0,s),n.lineTo(256,s),n.stroke();vr(n,256,256,4e3,e,.07)}else{n.fillStyle="#2a2b30",n.fillRect(0,0,256,256),n.fillStyle="#3a3c43";for(let s=0;s<256;s+=16)for(let a=0;a<256;a+=16)n.fillRect(a+2,s+2,12,12);n.fillStyle="#16171a";for(let s=0;s<256;s+=16)for(let a=0;a<256;a+=16)n.fillRect(a+5,s+5,6,6);n.strokeStyle="#c26a1c",n.lineWidth=6,n.strokeRect(3,3,250,250),vr(n,256,256,2e3,e,.08)}return Ls(i)}function hd(r,t=2){let e=fi(t),i=Is(256,256),n=i.getContext("2d"),s={hub:"#7a8590",bay:"#857a63",office:"#a3a093",green:"#6c8a74",reactor:"#4a4c55"}[r]||"#777";if(n.fillStyle=s,n.fillRect(0,0,256,256),vr(n,256,256,3e3,e,.07),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=3,n.strokeRect(2,2,252,252),n.beginPath(),n.moveTo(0,128),n.lineTo(256,128),n.stroke(),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(0,220,256,36),r==="bay"||r==="reactor")for(let a=-40;a<256;a+=40)n.fillStyle="#d6a21c",n.beginPath(),n.moveTo(a,256),n.lineTo(a+20,256),n.lineTo(a+40,222),n.lineTo(a+20,222),n.fill();n.fillStyle="rgba(255,255,255,0.15)";for(let[a,o]of[[12,12],[244,12],[12,116],[244,116],[12,140],[244,140]])n.beginPath(),n.arc(a,o,3,0,7),n.fill();return Ls(i)}function ud(r,t){let e=fi(t),i=Is(128,128),n=i.getContext("2d"),[s,a,o]=r;for(let c=0;c<26;c++){let h=e()*Math.PI*2,u=e()*34,d=64+Math.cos(h)*u,f=64+Math.sin(h)*u,p=8+e()*22,x=n.createRadialGradient(d,f,0,d,f,p);x.addColorStop(0,`rgba(${s},${a},${o},0.9)`),x.addColorStop(1,`rgba(${s},${a},${o},0)`),n.fillStyle=x,n.beginPath(),n.arc(d,f,p,0,7),n.fill()}for(let c=0;c<12;c++)n.fillStyle=`rgba(${s*.6|0},${a*.6|0},${o*.6|0},0.8)`,n.beginPath(),n.arc(64+(e()-.5)*100,64+(e()-.5)*100,1+e()*4,0,7),n.fill();return Ls(i,!1)}function wn(r,t={}){let e=t.w||512,i=t.h||256,n=Is(e,i),s=n.getContext("2d");s.fillStyle=t.bg||"rgba(10,14,20,0.92)",s.fillRect(0,0,e,i),t.border&&(s.strokeStyle=t.border,s.lineWidth=10,s.strokeRect(5,5,e-10,i-10)),s.textAlign="center",s.textBaseline="middle";let a=r.length;return r.forEach((o,l)=>{let c=o.size||Math.floor(i/(a+1.2));s.font=`${o.bold===!1?"":"bold "}${c}px "Segoe UI", Arial, sans-serif`,s.fillStyle=o.color||"#fff",s.fillText(o.text,e/2,i*(l+1)/(a+1))}),Ls(n,!1)}function dd(r,t,e){let i=Is(512,256),n=i.getContext("2d");n.clearRect(0,0,512,256),n.strokeStyle="rgba(230,240,255,0.9)",n.lineWidth=6,n.lineJoin="round",n.shadowColor="#7fd8ff",n.shadowBlur=14,n.beginPath();let s=e==="sniper"||e==="dmr"?420:e==="pistol"?200:340,a=256-s/2,o=100;return n.moveTo(a,o),n.lineTo(a+s*.75,o),n.lineTo(a+s,o+6),n.lineTo(a+s*.75,o+18),n.lineTo(a+s*.42,o+18),n.lineTo(a+s*.36,o+60),n.lineTo(a+s*.28,o+60),n.lineTo(a+s*.3,o+18),n.lineTo(a+s*.12,o+18),n.lineTo(a,o+45),n.lineTo(a-10,o+30),n.closePath(),n.stroke(),(e==="sniper"||e==="dmr")&&n.strokeRect(a+s*.35,o-26,s*.25,18),n.shadowBlur=0,n.fillStyle="#e8f6ff",n.font='bold 34px "Segoe UI", Arial',n.textAlign="center",n.fillText(r.toUpperCase(),256,210),n.fillStyle="#ffd25a",n.font='bold 30px "Segoe UI", Arial',n.fillText(t+" \xA2",256,246),Ls(i,!1)}function fd(){let r=fi(77),t=Is(128,128),e=t.getContext("2d");e.fillStyle="#2b0b45",e.fillRect(0,0,128,128);for(let i=0;i<40;i++)e.fillStyle=["#7b2cff","#ff2fd0","#22e6ff","#3d0f66"][i%4],e.globalAlpha=.7,e.beginPath(),e.arc(r()*128,r()*128,4+r()*14,0,7),e.fill();return e.globalAlpha=1,Ls(t)}function Qo(r,t=2){let e=r.image,i=e.width,n=e.height,a=e.getContext("2d").getImageData(0,0,i,n).data,o=new Float32Array(i*n);for(let f=0;f<i*n;f++)o[f]=(a[f*4]*.3+a[f*4+1]*.59+a[f*4+2]*.11)/255;let l=document.createElement("canvas");l.width=i,l.height=n;let c=l.getContext("2d"),h=c.createImageData(i,n),u=(f,p)=>o[(p+n)%n*i+(f+i)%i];for(let f=0;f<n;f++)for(let p=0;p<i;p++){let x=(u(p+1,f)-u(p-1,f))*t,g=(u(p,f+1)-u(p,f-1))*t,m=Math.hypot(x,g,1),_=(f*i+p)*4;h.data[_]=(-x/m*.5+.5)*255,h.data[_+1]=(g/m*.5+.5)*255,h.data[_+2]=(1/m*.5+.5)*255,h.data[_+3]=255}c.putImageData(h,0,0);let d=new ri(l);return d.wrapS=d.wrapT=vs,d.anisotropy=4,d}var we={sidearm:{name:"M-9 Sidearm",cls:"pistol",dmg:34,head:2,rate:6.5,auto:!1,mag:12,reserve:84,reload:1.35,spread:.022,ads:.006,pellets:1,zoom:1.15,recoil:.018,cost:0,ammoCost:150,color:2764083,accent:9080729,sound:"pistol",len:.28},cannon:{name:"Hand Cannon",cls:"pistol",dmg:115,head:2.2,rate:2.6,auto:!1,mag:7,reserve:49,reload:1.8,spread:.03,ads:.004,pellets:1,zoom:1.2,recoil:.06,cost:900,ammoCost:450,color:12105912,accent:2236962,sound:"cannon",len:.34,pierce:1},hornet:{name:"Hornet SMG",cls:"smg",dmg:27,head:1.8,rate:13,auto:!0,mag:32,reserve:224,reload:1.9,spread:.035,ads:.012,pellets:1,zoom:1.2,recoil:.011,cost:1200,ammoCost:600,color:3159355,accent:14725152,sound:"smg",len:.46},scatter:{name:"Scattergun",cls:"shotgun",dmg:24,head:1.5,rate:1.5,auto:!1,mag:6,reserve:42,reload:2.4,spread:.075,ads:.055,pellets:9,zoom:1.1,recoil:.07,cost:1500,ammoCost:750,color:4863268,accent:1842204,sound:"shotgun",len:.7},vanguard:{name:"AR-7 Vanguard",cls:"rifle",dmg:42,head:2,rate:9.5,auto:!0,mag:30,reserve:210,reload:2.2,spread:.03,ads:.004,pellets:1,zoom:1.35,recoil:.014,cost:1800,ammoCost:900,color:3883059,accent:1118481,sound:"rifle",len:.72,pierce:1},mauler:{name:"Mauler LMG",cls:"lmg",dmg:48,head:1.8,rate:11,auto:!0,mag:100,reserve:300,reload:4,spread:.045,ads:.012,pellets:1,zoom:1.25,recoil:.012,cost:3e3,ammoCost:1500,color:2501166,accent:7035434,sound:"lmg",len:.85,pierce:1},marksman:{name:"Marksman DMR",cls:"dmr",dmg:95,head:2.5,rate:4.2,auto:!1,mag:15,reserve:105,reload:2.3,spread:.03,ads:0,pellets:1,zoom:3,scope:!0,recoil:.03,cost:2e3,ammoCost:1e3,color:5922640,accent:1118481,sound:"dmr",len:.9,pierce:2},longbow:{name:"Longbow .338",cls:"sniper",dmg:450,head:3,rate:.8,auto:!1,mag:5,reserve:35,reload:3,spread:.12,ads:0,pellets:1,zoom:6,scope:!0,recoil:.11,cost:2500,ammoCost:1250,color:3824186,accent:1381653,sound:"sniper",len:1.05,pierce:4}},jo={sidearm:'M-9 "Mopper"',cannon:"Grime Reaper",hornet:"Swarm Queen",scatter:"Power Washer XL",vanguard:'AR-7 "Sterilizer"',mauler:"The Decontaminator",marksman:"Clean Cut DMR",longbow:"Spotless .338"},Pi={combat:{name:"Combat Knife",dmg:100,speed:2.2,range:2.1,cost:0,kind:"combat",color:9212310,handle:2236962,desc:"Standard issue."},bayonet:{name:"Bayonet",dmg:150,speed:2,range:2.4,cost:1e3,kind:"bayonet",color:13226200,handle:3877402,desc:"Long reach, heavy stab."},huntsman:{name:"Huntsman",dmg:180,speed:1.7,range:2.4,cost:1300,kind:"huntsman",color:10134445,handle:1979172,desc:"Serrated. Slow but brutal."},karambit:{name:"Karambit",dmg:125,speed:2.9,range:2,cost:1600,kind:"karambit",color:2981375,handle:1119256,desc:"Lightning fast curved blade."},butterfly:{name:"Butterfly Knife",dmg:150,speed:2.6,range:2.1,cost:2200,kind:"butterfly",color:16734900,handle:3159098,desc:"Fast, deadly, and it flips."}},_r={vacuum:{name:"Hoover-9 Vacuum",cost:0,desc:"Sucks up debris into your tank. Empty the tank at a Disposal Chute for credits."},washer:{name:"Hydro Lance",cost:750,desc:"High-pressure washer. Blasts sludge stains off floors and walls. Refill water at Service Stations.",minPhase:1},torch:{name:"Spore Torch",cost:2e3,desc:"Flamethrower. Burns spore pods and roasts anything nearby. Refill fuel at Service Stations.",minPhase:3}},mi={tank:{name:"Tank Capacity",desc:"Debris tank size",costs:[600,1200,2400],values:[120,200,300,450],unit:"units"},suction:{name:"Suction Power",desc:"Vacuum speed & range",costs:[700,1500,3e3],values:[1,1.5,2.1,2.8],unit:"x"},pressure:{name:"Lance Pressure",desc:"Washer cleaning speed & spray width",costs:[800,1600,3200],values:[1,1.5,2.1,2.8],unit:"x",needs:"washer"},reservoir:{name:"Reservoirs",desc:"Water & fuel capacity",costs:[500,1e3,2e3],values:[100,160,240,350],unit:"L"},armor:{name:"Hazmat Plating",desc:"Reduces damage taken",costs:[1e3,2200,4e3],values:[0,.15,.28,.4],unit:"%"}},Tn={ironhide:{name:"Ironhide Ale",cost:2500,color:13641768,desc:"Max health 100 \u2192 200"},quickhands:{name:"Quickhands Cola",cost:3e3,color:3129162,desc:"Reload & swap 50% faster"},rush:{name:"Rush Tonic",cost:2e3,color:15909400,desc:"Sprint +15%, longer slides"},doubletap:{name:"Double Pump",cost:2e3,color:15890968,desc:"Fire rate +30%"},janitor:{name:"Janitor's Brew",cost:1500,color:2788592,desc:"All tools clean 40% faster"}},th={sludger:{name:"Sludger",hp:110,speed:4.3,dmg:22,rate:1,radius:.45,height:1.7,reward:60,color:5208618,eye:16765471},spitter:{name:"Spitter",hp:90,speed:3.6,dmg:14,rate:2.2,radius:.42,height:1.9,reward:80,color:8010380,eye:7274400,ranged:!0},brute:{name:"Brute",hp:650,speed:3,dmg:45,rate:1.5,radius:.8,height:2.5,reward:200,color:6044194,eye:16726559}},Ie=[null,{zone:"a",title:"Phase 1 \u2014 Loading Bay",brief:"Vacuum the debris and clear the Loading Bay. Empty your tank at a Disposal Chute.",threshold:.8,mix:{sludger:1},maxAlive:8,interval:4.2,hpMul:1,bonus:1e3},{zone:"b",title:"Phase 2 \u2014 Admin Offices",brief:"The offices are caked in sludge. Get a Hydro Lance from the terminal and wash it all away.",threshold:.8,mix:{sludger:.75,spitter:.25},maxAlive:11,interval:3.5,hpMul:1.45,bonus:2e3},{zone:"c",title:"Phase 3 \u2014 Hydroponics",brief:"Spore pods are everywhere. Buy the Spore Torch and burn them out.",threshold:.8,mix:{sludger:.6,spitter:.25,brute:.15},maxAlive:14,interval:2.9,hpMul:2,bonus:3e3},{zone:"d",title:"Phase 4 \u2014 Reactor Core",brief:"Purge the Reactor Core. Something is growing in the middle of it...",threshold:.8,mix:{sludger:.5,spitter:.3,brute:.2},maxAlive:16,interval:2.4,hpMul:2.7,bonus:5e3}],Ee={hit:10,kill:60,headKill:100,meleeKill:130,perUnit:4,stain:12,spore:40,refineCost:5e3,crateCost:950,grenadeCost:300},pd=["cannon","hornet","scatter","vanguard","mauler","marksman","longbow","vanguard","hornet","mauler"];var it=2,ze=4.5,eh=1.1,ih=2.4,ly=2.2,gi=["h","a","b","c","d"],Mr={h:{name:"Sanitation HQ",tex:"hub",fog:1777960},a:{name:"Loading Bay",tex:"bay",fog:2236186},b:{name:"Admin Offices",tex:"office",fog:1711396},c:{name:"Hydroponics",tex:"green",fog:1450265},d:{name:"Reactor Core",tex:"reactor",fog:2364943}};function cy(){let e=[];for(let o=0;o<40;o++)e.push(new Array(48).fill("#"));let i=(o,l,c,h,u)=>{for(let d=l;d<=h;d++)for(let f=o;f<=c;f++)e[d][f]=u},n=(o,l,c)=>{e[l][o]=c};i(1,27,20,38,"h"),i(22,24,46,38,"a"),i(17,12,46,22,"b"),i(1,12,15,25,"c"),i(12,1,35,10,"d"),n(21,31,"1"),n(21,32,"1"),n(33,23,"2"),n(34,23,"2"),n(16,17,"3"),n(16,18,"3"),n(6,26,"3"),n(7,26,"3"),n(23,11,"4"),n(24,11,"4"),n(11,27,"S"),n(16,27,"R"),n(1,29,"M"),n(1,35,"I"),n(20,28,"W"),n(4,38,"P"),n(8,38,"P"),n(12,38,"P"),n(16,38,"P"),n(19,38,"P"),n(14,32,"x"),n(15,32,"x"),n(15,33,"x"),n(15,34,"X");for(let[o,l]of[[25,26],[26,26],[25,27],[30,29],[31,29],[30,30],[38,26],[39,26],[40,26],[36,33],[37,33],[36,34],[43,30],[43,31],[44,31],[28,35],[29,35],[41,36],[42,36]])n(o,l,"x");for(let[o,l]of[[26,27],[31,30],[31,31],[39,27],[37,34],[29,36],[42,37]])n(o,l,"X");n(34,30,"#"),n(34,31,"#"),n(46,24,"I"),n(46,38,"W"),i(20,15,23,15,"#"),i(26,15,29,15,"#"),i(20,19,23,19,"#"),i(26,19,29,19,"#"),i(32,13,32,16,"#"),i(32,19,32,20,"#"),i(37,15,40,15,"#"),i(43,15,44,15,"#");for(let[o,l]of[[21,13],[22,13],[27,13],[28,13],[21,17],[22,17],[27,17],[28,17],[21,21],[22,21],[27,21],[28,21],[36,18],[37,18],[40,18],[41,18],[44,20],[45,20],[38,21]])n(o,l,"x");n(39,18,"X"),n(46,12,"I"),n(17,22,"W"),i(3,14,5,14,"x"),i(9,14,12,14,"x"),i(3,18,6,18,"x"),i(10,18,13,18,"x"),i(3,22,5,22,"x"),i(10,22,13,22,"x"),n(8,16,"#"),n(8,20,"#"),n(1,12,"I"),n(15,25,"W");for(let[o,l]of[[18,3],[29,3],[18,8],[29,8]])n(o,l,"#");for(let[o,l]of[[14,2],[15,2],[14,9],[33,2],[32,9],[33,9],[13,5],[34,6]])n(o,l,"x");return n(13,6,"X"),n(34,5,"X"),n(12,1,"I"),n(35,10,"W"),{W:48,H:40,g:e,wallbuys:[{x:0,y:32,gun:"hornet"},{x:0,y:36,gun:"cannon"},{x:47,y:31,gun:"scatter"},{x:40,y:39,gun:"vanguard"},{x:47,y:17,gun:"marksman"},{x:30,y:11,gun:"longbow"},{x:0,y:20,gun:"mauler"}],perkOrder:["ironhide","quickhands","rush","doubletap","janitor"],start:{x:10,y:33},boss:{x:24,y:6}}}var ta=class{constructor(t){this.scene=t;let e=cy();this.W=e.W,this.H=e.H,this.chars=e.g,this.wallbuyDefs=e.wallbuys,this.perkOrder=e.perkOrder,this.startCell=e.start,this.bossCell=e.boss;let i=this.W*this.H;this.height=new Float32Array(i),this.type=new Uint8Array(i),this.zone=new Int8Array(i).fill(-1),this.doorPhase=new Int8Array(i),this.doors={},this.objects=[],this.flow=new Float32Array(i),this.flowFrom=-1,this._parse(),this._floodZones(),this.zoneCells={};for(let n of gi)this.zoneCells[n]=[];for(let n=0;n<this.H;n++)for(let s=0;s<this.W;s++){let a=this.idx(s,n);this.type[a]===0&&this.zone[a]>=0&&this.zoneCells[gi[this.zone[a]]].push(a)}this.group=new se,t.add(this.group),this._buildMeshes()}idx(t,e){return e*this.W+t}inside(t,e){return t>=0&&e>=0&&t<this.W&&e<this.H}cellOf(t,e){return[Math.floor(t/it),Math.floor(e/it)]}center(t,e){return[t*it+it/2,e*it+it/2]}hAt(t,e){return this.inside(t,e)?this.height[this.idx(t,e)]:99}zoneAtWorld(t,e){let[i,n]=this.cellOf(t,e);if(!this.inside(i,n))return null;let s=this.zone[this.idx(i,n)];return s>=0?gi[s]:null}_parse(){var t;for(let e=0;e<this.H;e++)for(let i=0;i<this.W;i++){let n=this.chars[e][i],s=this.idx(i,e),a=gi.indexOf(n);if(n==="#")this.type[s]=1,this.height[s]=99;else if(a>=0)this.type[s]=0,this.zone[s]=a;else if(n==="x")this.type[s]=2,this.height[s]=eh;else if(n==="X")this.type[s]=3,this.height[s]=ih;else if(n>="1"&&n<="4"){let o=+n;this.type[s]=4,this.height[s]=99,this.doorPhase[s]=o,((t=this.doors)[o]||(t[o]={cells:[],open:!1,t:0,meshes:[]})).cells.push(s)}else this.type[s]=5,this.height[s]=ly,this.objects.push({kind:n,x:i,y:e,i:s})}}_floodZones(){let t=!0;for(;t;){t=!1;for(let e=0;e<this.H;e++)for(let i=0;i<this.W;i++){let n=this.idx(i,e);if(!(this.type[n]===1||this.zone[n]>=0))for(let[s,a]of[[1,0],[-1,0],[0,1],[0,-1]]){let o=i+s,l=e+a;if(!this.inside(o,l))continue;let c=this.zone[this.idx(o,l)];if(c>=0&&this.type[this.idx(o,l)]!==4){this.zone[n]=c,t=!0;break}}}}}_buildMeshes(){let t={},e={};for(let y of gi){let T=Mr[y].tex,U=cd(T,11+y.charCodeAt(0)),D=hd(T,23+y.charCodeAt(0)),N=T==="reactor";t[y]=new $t({map:U,normalMap:Qo(U,3),roughness:N?.42:T==="office"?.95:.62,metalness:N?.65:.08,vertexColors:!0}),e[y]=new $t({map:D,normalMap:Qo(D,2.5),roughness:N?.5:.78,metalness:N?.5:.05,vertexColors:!0})}let i={},n={};for(let y of gi)i[y]=[],n[y]=[];for(let y=0;y<this.H;y++)for(let T=0;T<this.W;T++){let U=this.idx(T,y);if(this.type[U]===1)for(let[D,N]of[[1,0],[-1,0],[0,1],[0,-1]]){let V=T+D,H=y+N;if(!this.inside(V,H))continue;let Z=this.idx(V,H);if(this.type[Z]===1)continue;let k=this.zone[Z]>=0?gi[this.zone[Z]]:"h";n[k].push([T,y,D,N])}else{let D=this.zone[U]>=0?gi[this.zone[U]]:"h";i[D].push([T,y])}}for(let y of gi)i[y].length&&this.group.add(new tt(this._floorGeo(i[y],0,!0),t[y])),n[y].length&&this.group.add(new tt(this._wallGeo(n[y]),e[y]));let s=[];for(let y=0;y<this.H;y++)for(let T=0;T<this.W;T++)this.type[this.idx(T,y)]!==1&&s.push([T,y]);let a=new $t({color:2303531,roughness:.9,vertexColors:!0});this.group.add(new tt(this._floorGeo(s,ze,!1),a));let o=[];for(let y=0;y<this.H;y++)for(let T=0;T<this.W;T++){let U=this.idx(T,y);this.type[U]!==1&&T%3===1&&y%3===1&&o.push([T,y])}let l=new Ze(.9,.05,.32),c=new Jt({color:new gt(2.6,2.5,2.2)}),h=new en(l,c,o.length),u=new ie;o.forEach(([y,T],U)=>{let[D,N]=this.center(y,T);u.makeTranslation(D,ze-.03,N),h.setMatrixAt(U,u)}),this.group.add(h),this.lightCells=o;let d=o.filter((y,T)=>T%2===0),f=new be(.35,1.5,ze-.1,16,1,!0);f.translate(0,-(ze-.1)/2,0);let p=new Me({transparent:!0,depthWrite:!1,blending:Ye,side:ke,uniforms:{time:{value:0}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = uv.y; vec4 mv = modelViewMatrix * instanceMatrix * vec4(position,1.0); vN = normalize(normalMatrix * mat3(instanceMatrix) * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float time; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN, vV)), 1.5); float a = vY * vY * 0.07 * edge; gl_FragColor = vec4(1.0, 0.95, 0.85, a); }"}),x=new en(f,p,d.length);d.forEach(([y,T],U)=>{let[D,N]=this.center(y,T);u.makeTranslation(D,ze-.05,N),x.setMatrixAt(U,u)}),x.renderOrder=5,this.group.add(x);let g=this._crateTexture(),m=new $t({map:g,normalMap:Qo(g,4),roughness:.8}),_=[],M=[];for(let y=0;y<this.type.length;y++)this.type[y]===2&&_.push(y),this.type[y]===3&&M.push(y);let v=new Ze(it*.98,eh,it*.98),I=new en(v,m,_.length);_.forEach((y,T)=>{let U=y%this.W,D=y/this.W|0,[N,V]=this.center(U,D);u.makeTranslation(N,eh/2,V),I.setMatrixAt(T,u)}),this.group.add(I);let w=new Ze(it*.98,ih,it*.98),C=new $t({map:g,normalMap:m.normalMap,color:10465472,roughness:.6,metalness:.3}),P=new en(w,C,M.length);M.forEach((y,T)=>{let U=y%this.W,D=y/this.W|0,[N,V]=this.center(U,D);u.makeTranslation(N,ih/2,V),P.setMatrixAt(T,u)}),this.group.add(P);for(let y in this.doors){let T=this.doors[y],U=new Ne({map:wn([{text:"LOCKED",color:"#ff5050"},{text:`PHASE ${y}`,color:"#ffd25a"}],{bg:"#2c3038",border:"#c0392b"})}),D=new Ne({color:3817288});for(let N of T.cells){let V=N%this.W,H=N/this.W|0,Z=this.type[this.idx(V-1,H)]!==1||this.type[this.idx(V+1,H)]!==1,[k,et]=this.center(V,H),nt=Z?new Ze(.4,ze,it):new Ze(it,ze,.4),ut=Z?[U,U,D,D,D,D]:[D,D,D,D,U,U],It=new tt(nt,ut);It.position.set(k,ze/2,et),this.group.add(It),T.meshes.push(It)}}this.wallbuys=[];for(let y of this.wallbuyDefs){let T=0,U=0;for(let[nt,ut]of[[1,0],[-1,0],[0,1],[0,-1]]){let It=y.x+nt,Ut=y.y+ut;if(this.inside(It,Ut)&&this.type[this.idx(It,Ut)]===0){T=nt,U=ut;break}}let D=we[y.gun],N=dd(D.name,D.cost,D.cls),V=new tt(new He(2,1),new Jt({map:N,transparent:!0})),[H,Z]=this.center(y.x,y.y);V.position.set(H+T*(it/2+.02),1.7,Z+U*(it/2+.02)),V.rotation.y=Math.atan2(T,U),this.group.add(V);let[k,et]=this.center(y.x+T,y.y+U);this.wallbuys.push({gun:y.gun,x:k,z:et,mesh:V})}let S=0;for(let y of this.objects){let[T,U]=this.center(y.x,y.y);y.cx=T,y.cz=U;let D=[0,1];for(let[V,H]of[[0,1],[0,-1],[1,0],[-1,0]]){let Z=y.x+V,k=y.y+H;if(this.inside(Z,k)&&this.type[this.idx(Z,k)]===0){D=[V,H];break}}y.face=D;let N=new se;N.position.set(T,0,U),N.rotation.y=Math.atan2(D[0],D[1]),y.kind==="P"&&(y.perk=this.perkOrder[S++]),this._buildObject(y,N),this.group.add(N),y.group=N}}_buildObject(t,e){let i=(s,a,o,l,c=a/2,h=0,u={})=>{let d=new tt(new Ze(s,a,o),new Ne({color:l,...u}));return d.position.set(0,c,h),e.add(d),d},n=(s,a,o,l,c)=>{let h=new tt(new He(a,o),new Jt({map:s}));return h.position.set(0,l,c),e.add(h),h};if(t.kind==="S")i(1.6,1.1,1,3159615),i(1.6,1.2,.3,2501427,1.7,-.35),n(wn([{text:"SUPPLY TERMINAL",color:"#6fe3ff"},{text:"Press E",color:"#fff",size:44}],{bg:"#06222c",border:"#1fb6e0"}),1.4,.8,1.7,-.19);else if(t.kind==="R"){i(1.7,1,1.4,2826042);let s=new tt(new sn(.42,1),new Jt({color:12602879}));s.position.y=1.5,e.add(s),t.anim=s,i(.2,1.6,.2,4206677,1.6,-.55),n(wn([{text:"REFINERY",color:"#e09bff"},{text:"5000 \xA2",color:"#ffd25a"}],{bg:"#1a0b26",border:"#c04dff",h:200}),1.2,.47,.6,.71)}else if(t.kind==="M"){i(1.8,.9,1.1,7031338),i(1.85,.12,1.15,3942936,.9);let s=new tt(new He(1.1,.55),new Jt({map:wn([{text:"? SUPPLY CRATE ?",color:"#7fd8ff"},{text:"950 \xA2",color:"#ffd25a"}],{bg:"#0b1a2a",border:"#7fd8ff",h:256})}));s.position.set(0,.5,.56),e.add(s);let a=new tt(new be(.6,.6,3.5,16,1,!0),new Jt({color:5949695,transparent:!0,opacity:.12,side:ke,depthWrite:!1}));a.position.y=2.6,e.add(a)}else if(t.kind==="I"){i(1.8,1.4,1.6,3882794),i(1.2,.6,.1,328965,1,.8);let s=i(1.4,.15,.12,6750037,1.4,.8,{emissive:3385890});n(wn([{text:"DISPOSAL CHUTE",color:"#8dff6f"},{text:"Empty tank: E",color:"#fff",size:40}],{bg:"#0d1f0a",border:"#55dd33"}),1.4,.7,1.95,0).position.z=0,e.children[e.children.length-1].position.set(0,1.95,.81),s.name="glow"}else if(t.kind==="W"){let s=new Ne({color:2781119});for(let o of[-.45,.45]){let l=new tt(new be(.38,.38,1.7,14),s);l.position.set(o,.85,0),e.add(l)}let a=new tt(new be(.2,.2,1.3,10),new Ne({color:12597547}));a.position.set(0,.65,.35),e.add(a),n(wn([{text:"SERVICE STATION",color:"#7fc8ff"},{text:"Water + Fuel: E",color:"#fff",size:40}],{bg:"#08182a",border:"#2a8cf0"}),1.4,.7,2,.42)}else if(t.kind==="P"){let s=Tn[t.perk];i(1.3,2.1,1,s.color),i(1.1,1,.05,1118481,1.1,.5),n(wn([{text:s.name.toUpperCase(),color:"#fff"},{text:s.cost+" \xA2",color:"#ffd25a"}],{bg:"#101010",border:"#"+s.color.toString(16).padStart(6,"0"),h:256}),1,.5,1.6,.53);let a=i(1.32,.1,1.02,16777215,2.12,0,{emissive:s.color});a.material.emissiveIntensity=1}}_crateTexture(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle="#6e5636",e.fillRect(0,0,128,128),e.strokeStyle="#3e2f1b",e.lineWidth=10,e.strokeRect(5,5,118,118),e.lineWidth=8,e.beginPath(),e.moveTo(8,8),e.lineTo(120,120),e.stroke(),e.fillStyle="rgba(0,0,0,0.15)";for(let n=0;n<8;n++)e.fillRect(0,n*16,128,2);let i=new ri(t);return i.colorSpace=ye,i}_cornerAO(t,e){let i=0;for(let[n,s]of[[-1,-1],[0,-1],[-1,0],[0,0]]){let a=this.hAt(t+n,e+s);a>50?i+=1:a>0&&(i+=.5)}return i}_floorGeo(t,e,i){let n=[],s=[],a=[],o=[],l=[],c=0;for(let[u,d]of t){let f=u*it,p=d*it,x=f+it,g=p+it;n.push(f,e,p,x,e,p,x,e,g,f,e,g);for(let[_,M]of[[u,d],[u+1,d],[u+1,d+1],[u,d+1]]){let v=1-this._cornerAO(_,M)*(i?.17:.1);l.push(v,v,v)}s.push(0,0,1,0,1,1,0,1);let m=i?1:-1;for(let _=0;_<4;_++)a.push(0,m,0);i?o.push(c,c+2,c+1,c,c+3,c+2):o.push(c,c+1,c+2,c,c+2,c+3),c+=4}let h=new de;return h.setAttribute("position",new Ht(n,3)),h.setAttribute("uv",new Ht(s,2)),h.setAttribute("normal",new Ht(a,3)),h.setAttribute("color",new Ht(l,3)),h.setIndex(o),h}_wallGeo(t){let e=[],i=[],n=[],s=[],a=[],o=0,l=Math.round(ze/it*2)/2;for(let[h,u,d,f]of t){let p=h*it+it/2+d*it/2,x=u*it+it/2+f*it/2,g=-f,m=d,_=p-g*it/2,M=x-m*it/2,v=p+g*it/2,I=x+m*it/2;e.push(_,0,M,v,0,I,v,ze,I,_,ze,M),i.push(0,0,1,0,1,ze/it,0,ze/it);for(let w=0;w<4;w++)n.push(d,0,f);a.push(.62,.62,.62,.62,.62,.62,1,1,1,1,1,1),s.push(o,o+2,o+1,o,o+3,o+2),o+=4}let c=new de;return c.setAttribute("position",new Ht(e,3)),c.setAttribute("uv",new Ht(i,2)),c.setAttribute("normal",new Ht(n,3)),c.setAttribute("color",new Ht(a,3)),c.setIndex(s),c.computeBoundingSphere(),c}openDoor(t,e=!1){let i=this.doors[t];if(!i||i.open)return!1;i.open=!0,i.t=e?1:0;for(let n of i.cells)this.height[n]=0,this.type[n]=0;if(e)for(let n of i.meshes)n.visible=!1;return this.flowFrom=-1,!0}update(t,e){for(let i in this.doors){let n=this.doors[i];if(n.open&&n.t<1){n.t=Math.min(1,n.t+t/1.6);for(let s of n.meshes)s.position.y=ze/2+n.t*(ze-.2),n.t>=1&&(s.visible=!1)}}for(let i of this.objects)i.anim&&(i.anim.rotation.y=e*1.5,i.anim.rotation.x=e*.7,i.anim.position.y=1.5+Math.sin(e*2)*.08)}blockedCircle(t,e,i,n,s=.45){let a=Math.floor((t-i)/it),o=Math.floor((t+i)/it),l=Math.floor((e-i)/it),c=Math.floor((e+i)/it);for(let h=l;h<=c;h++)for(let u=a;u<=o;u++)if(this.hAt(u,h)>n+s){let f=Math.max(u*it,Math.min(t,u*it+it)),p=Math.max(h*it,Math.min(e,h*it+it)),x=t-f,g=e-p;if(x*x+g*g<i*i)return!0}return!1}groundAt(t,e,i,n=99){let s=Math.floor((t-i)/it),a=Math.floor((t+i)/it),o=Math.floor((e-i)/it),l=Math.floor((e+i)/it),c=0;for(let h=o;h<=l;h++)for(let u=s;u<=a;u++){let d=this.hAt(u,h);if(d<50&&d<=n+.46){let f=Math.max(u*it,Math.min(t,u*it+it)),p=Math.max(h*it,Math.min(e,h*it+it)),x=t-f,g=e-p;x*x+g*g<i*i*.9&&d>c&&(c=d)}}return c}moveCircle(t,e,i,n,s,a,o){let l=t+i;this.blockedCircle(l,e,s,a,o)&&(l=t);let c=e+n;return this.blockedCircle(l,c,s,a,o)&&(c=e),[l,c]}raycast(t,e,i,n,s,a,o=200){let l=o,c=[0,0,0];if(s<-1e-6){let v=-e/s;v<l&&(l=v,c=[0,1,0])}if(s>1e-6){let v=(ze-e)/s;v<l&&(l=v,c=[0,-1,0])}let h=Math.floor(t/it),u=Math.floor(i/it),d=n>0?1:-1,f=a>0?1:-1,p=Math.abs(n)>1e-9?it/Math.abs(n):1e9,x=Math.abs(a)>1e-9?it/Math.abs(a):1e9,g=Math.abs(n)>1e-9?(n>0?(h+1)*it-t:t-h*it)/Math.abs(n):1e9,m=Math.abs(a)>1e-9?(a>0?(u+1)*it-i:i-u*it)/Math.abs(a):1e9,_=0,M=-1;for(let v=0;v<400&&!(_>l);v++){let I=Math.min(g,m);if(!this.inside(h,u)){_<l&&(l=_,c=M===0?[-d,0,0]:[0,0,-f]);break}let w=this.height[this.idx(h,u)];if(w>0){let C=e+s*_,P=e+s*Math.min(I,l);if(C<w&&v>0){_<l&&(l=_,c=M===0?[-d,0,0]:[0,0,-f]);break}if(C>=w&&P<w){let S=_+(C-w)/(C-P)*(Math.min(I,l)-_);S<l&&(l=S,c=[0,1,0]);break}}g<m?(_=g,g+=p,h+=d,M=0):(_=m,m+=x,u+=f,M=1)}return{dist:l,x:t+n*l,y:e+s*l,z:i+a*l,nx:c[0],ny:c[1],nz:c[2]}}lineOfSight(t,e,i,n,s,a){let o=n-t,l=s-e,c=a-i,h=Math.hypot(o,l,c);return h<1e-4?!0:this.raycast(t,e,i,o/h,l/h,c/h,h).dist>=h-.05}passableForEnemy(t){let e=this.type[t];return e===0||e===2}computeFlow(t,e){let[i,n]=this.cellOf(t,e);if(!this.inside(i,n))return;let s=this.idx(i,n);if(s===this.flowFrom)return;this.flowFrom=s;let a=this.flow;a.fill(1e9);let o=new Int32Array(this.W*this.H),l=0,c=0;for(a[s]=0,o[c++]=s;l<c;){let h=o[l++],u=h%this.W,d=h/this.W|0,f=a[h]+1;if(u>0){let p=h-1;a[p]>f&&this.passableForEnemy(p)&&(a[p]=f,o[c++]=p)}if(u<this.W-1){let p=h+1;a[p]>f&&this.passableForEnemy(p)&&(a[p]=f,o[c++]=p)}if(d>0){let p=h-this.W;a[p]>f&&this.passableForEnemy(p)&&(a[p]=f,o[c++]=p)}if(d<this.H-1){let p=h+this.W;a[p]>f&&this.passableForEnemy(p)&&(a[p]=f,o[c++]=p)}}}flowDir(t,e){let[i,n]=this.cellOf(t,e);if(!this.inside(i,n))return null;let s=this.idx(i,n),a=this.flow[s],o=-1,l=-1;for(let p=-1;p<=1;p++)for(let x=-1;x<=1;x++){if(!x&&!p)continue;let g=i+x,m=n+p;if(!this.inside(g,m))continue;let _=this.idx(g,m);if(!this.passableForEnemy(_)||x&&p&&(!this.passableForEnemy(this.idx(i+x,n))||!this.passableForEnemy(this.idx(i,n+p))))continue;let M=this.flow[_]+(x&&p?.41:0);M<a&&(a=M,o=g,l=m)}if(o<0)return null;let[c,h]=this.center(o,l),u=c-t,d=h-e,f=Math.hypot(u,d)||1;return[u/f,d/f]}flowDist(t,e){let[i,n]=this.cellOf(t,e);return this.inside(i,n)?this.flow[this.idx(i,n)]:1e9}};var md={a:[70,22,10,0],b:[30,55,45,0],c:[35,25,15,42],d:[40,40,25,28]},hy={a:[[70,60,40],[60,80,30]],b:[[60,90,30],[80,60,35],[50,70,25]],c:[[90,50,110],[60,95,40]],d:[[110,60,20],[100,40,110],[60,90,30]]},nh=1,sh=1,rh=2,ea=class{constructor(t,e){this.scene=t,this.level=e,this.group=new se,t.add(this.group),this.zones={},this.texCache={},this.chunkGeo=new ko(.16,0),this.sporeGeo=new sn(1,1),this.stainGeo=new He(1,1),this.tmpM=new ie,this.tmpQ=new ki,this.tmpS=new R,this.tmpP=new R;for(let i of Object.keys(md))this._genZone(i)}_tex(t,e){let i=hy[t],n=t+e%(i.length*2);return this.texCache[n]||(this.texCache[n]=ud(i[e%i.length],1e3+n.charCodeAt(0)*7+e)),this.texCache[n]}_genZone(t){let e=fi(9e3+t.charCodeAt(0)*31),i=this.level,n=i.bossCell.x*it,s=i.bossCell.y*it,a=i.zoneCells[t].filter(I=>{let[w,C]=i.center(I%i.W,I/i.W|0);return Math.hypot(w-n,C-s)>4.6}),[o,l,c,h]=md[t],u={key:t,piles:[],stains:[],spores:[],total:0,cleaned:0,extraStains:0};this.zones[t]=u;let d=()=>a[e()*a.length|0],f=5,p=new en(this.chunkGeo,new Ne({color:16777215}),o*f);p.instanceMatrix.setUsage(Sn);let x=[7035973,5327163,8022602,4938293,6113850],g=new gt;for(let I=0;I<o;I++){let w=d(),C=w%i.W,P=w/i.W|0,S=C*it+.3+e()*(it-.6),y=P*it+.3+e()*(it-.6),T=6+(e()*7|0),U={id:I,x:S,y:.12,z:y,units:T,max:T,chunks:[],done:!1};for(let D=0;D<f;D++){let N=I*f+D,V=(e()-.5)*.7,H=(e()-.5)*.7,Z=.6+e()*.9;U.chunks.push({ci:N,ox:V,oz:H,s:Z,rx:e()*6,ry:e()*6}),g.setHex(x[e()*x.length|0]),p.setColorAt(N,g)}u.piles.push(U),u.total+=nh}u.inst=p,this.group.add(p);for(let I of u.piles)this._updatePile(u,I);p.instanceColor&&(p.instanceColor.needsUpdate=!0);let m=0;for(let I=0;I<l;I++){let w=d(),C=w%i.W,P=w/i.W|0,S=C*it+.5+e()*(it-1),y=P*it+.5+e()*(it-1),T=1.2+e()*1.6;m=(m+1)%40,this._addStain(u,S,.012+m*7e-4,y,0,1,0,T,e()*6|0,e()*6.28,70+T*30)}let _=[];for(let I of a){let w=I%i.W,C=I/i.W|0;for(let[P,S]of[[1,0],[-1,0],[0,1],[0,-1]]){let y=w+P,T=C+S;i.inside(y,T)&&i.type[i.idx(y,T)]===1&&_.push([w,C,P,S])}}for(let I=0;I<c&&_.length;I++){let[w,C,P,S]=_[e()*_.length|0],y=1+e()*1.4,T=(e()-.5)*(it-y*.6),U=w*it+it/2+P*(it/2-.015-e()*.004)+(S!==0?T:0),D=C*it+it/2+S*(it/2-.015-e()*.004)+(P!==0?T:0),N=.6+e()*(ze-1.6);this._addStain(u,U,N,D,-P,0,-S,y,e()*6|0,e()*6.28,70+y*30)}this.sporeMats=[0,1].map(()=>new $t({color:9054896,emissive:7999648,emissiveIntensity:.5,roughness:.3,metalness:.05}));let M=new Jt({color:new gt(2.4,.6,2.8)}),v=new $t({color:3811904,roughness:.7});this.noduleGeo||(this.noduleGeo=new Je(1,8,6),this.stalkGeo=new be(.05,.09,1,6));for(let I=0;I<h;I++){let w=d(),C=w%i.W,P=w/i.W|0,S=1+(e()*3|0),y=C*it+.5+e()*(it-1),T=P*it+.5+e()*(it-1),U=new se;U.position.set(y,0,T);for(let N=0;N<S;N++){let V=.2+e()*.2,H=(e()-.5)*.6,Z=(e()-.5)*.6,k=V*.6+e()*.25,et=new tt(this.stalkGeo,v);et.scale.set(V*1.2,k,V*1.2),et.position.set(H,k/2,Z),U.add(et);let nt=new tt(this.sporeGeo,this.sporeMats[(I+N)%2]);nt.scale.set(V,V*1.25,V),nt.position.set(H,k+V*.9,Z),U.add(nt);for(let ut=0;ut<5;ut++){let It=e()*6.28,Ut=(e()-.3)*1.4,q=new tt(this.noduleGeo,M);q.scale.setScalar(V*(.1+e()*.08)),q.position.set(H+Math.cos(It)*Math.cos(Ut)*V,k+V*.9+Math.sin(Ut)*V*1.25,Z+Math.sin(It)*Math.cos(Ut)*V),U.add(q)}}this.group.add(U);let D={id:I,x:y,y:.35,z:T,hp:60,max:60,mesh:U,done:!1,phase:e()*6.28};u.spores.push(D),u.total+=rh}}_addStain(t,e,i,n,s,a,o,l,c,h,u,d=!1){let f=new Ne({map:this._tex(t.key,c),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),p=new tt(this.stainGeo,f);p.position.set(e,i,n),p.scale.set(l,l,1),a>.5?p.rotation.set(-Math.PI/2,0,h):p.rotation.set(0,Math.atan2(s,o),h),p.renderOrder=1,this.group.add(p);let x={id:t.stains.length,x:e,y:i,z:n,nx:s,ny:a,nz:o,r:l*.45,hp:u,max:u,mesh:p,done:!1,dynamic:d};return t.stains.push(x),t.total+=sh,x}_updatePile(t,e){let i=e.done?0:Math.max(0,e.units/e.max);for(let n of e.chunks){let s=n.s*(i>0?.35+.65*i:0);this.tmpP.set(e.x+n.ox*(.5+.5*i),.08*s+.02,e.z+n.oz*(.5+.5*i)),this.tmpQ.setFromEuler(new $e(n.rx,n.ry,0)),this.tmpS.setScalar(s),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),t.inst.setMatrixAt(n.ci,this.tmpM)}t.inst.instanceMatrix.needsUpdate=!0}cleanliness(t){let e=this.zones[t];if(!e)return 1;let i=0;for(let n of e.piles)i+=n.done?nh:nh*(1-n.units/n.max)*.5;for(let n of e.stains)i+=n.done?sh:sh*(1-n.hp/n.max)*.5;for(let n of e.spores)i+=n.done?rh:rh*(1-n.hp/n.max)*.5;return e.total>0?i/e.total:1}remaining(t){let e=this.zones[t];return e?{piles:e.piles.filter(i=>!i.done).length,stains:e.stains.filter(i=>!i.done).length,spores:e.spores.filter(i=>!i.done).length}:{piles:0,stains:0,spores:0}}vacuum(t,e,i,n,s,a,o,l,c,h,u,d,f){let p=0,x=[];for(let g of t){let m=this.zones[g];if(m)for(let _ of m.piles){if(_.done)continue;let M=_.x-e,v=_.y-i,I=_.z-n,w=Math.hypot(M,v,I);w>l||w<.01||(M*s+v*a+I*o)/w<c||d.lineOfSight(e,i,n,_.x,_.y+.15,_.z)&&x.push([m,_,w])}}x.sort((g,m)=>g[2]-m[2]);for(let[g,m]of x){if(p>=u)break;let _=Math.min(m.units,h,u-p);m.units-=_,p+=_,m.units<=.001&&(m.units=0,m.done=!0,f&&f(m)),this._updatePile(g,m)}return{collected:p,hits:x}}wash(t,e,i,n,s,a,o){let l=0;for(let c of t){let h=this.zones[c];if(h)for(let u of h.stains){if(u.done)continue;let d=Math.hypot(u.x-e,u.y-i,u.z-n);d>s+u.r||(l++,u.hp-=a*(d<u.r?1:.6),u.mesh.material.opacity=Math.max(0,.15+.85*u.hp/u.max),u.hp<=0&&(u.done=!0,u.mesh.visible=!1,o&&o(u)))}}return l}burn(t,e,i,n,s,a,o,l,c,h,u,d){let f=0;for(let p of t){let x=this.zones[p];if(x)for(let g of x.spores){if(g.done)continue;let m=g.x-e,_=g.y-i,M=g.z-n,v=Math.hypot(m,_,M);v>l||c>-1&&v>.3&&(m*s+_*a+M*o)/v<c||u.lineOfSight(e,i,n,g.x,g.y+.2,g.z)&&(f++,g.hp-=h,g.burning=.3,g.hp<=0&&(g.done=!0,g.mesh.visible=!1,d&&d(g)))}}return f}foam(t,e,i,n,s,a){for(let o of t){let l=this.zones[o];if(l){for(let c of l.stains)!c.done&&Math.hypot(c.x-e,c.z-i)<n&&(c.hp=0,c.done=!0,c.mesh.visible=!1,s(c));for(let c of l.spores)!c.done&&Math.hypot(c.x-e,c.z-i)<n&&(c.hp=0,c.done=!0,c.mesh.visible=!1,a(c))}}}addGooStain(t,e,i,n){let s=this.zones[t];return!s||s.extraStains>25?null:(s.extraStains++,this._addStain(s,e,.03+s.extraStains*9e-4,i,0,1,0,n,Math.random()*6|0,Math.random()*6.28,60,!0))}update(t,e){this.sporeMats&&(this.sporeMats[0].emissiveIntensity=.45+Math.sin(e*2.4)*.35,this.sporeMats[1].emissiveIntensity=.45+Math.sin(e*2.4+2)*.35);for(let i in this.zones)for(let n of this.zones[i].spores){if(n.done)continue;let s=1+Math.sin(e*2.5+n.phase)*.06;n.mesh.scale.set(s,1/s,s),n.burning>0&&(n.burning-=t,n.mesh.rotation.y+=t*8)}}forEachRemaining(t,e){let i=this.zones[t];if(i){for(let n of i.piles)n.done||e(n.x,n.z,0);for(let n of i.stains)n.done||e(n.x,n.z,1);for(let n of i.spores)n.done||e(n.x,n.z,2)}}serialize(){let t={};for(let e in this.zones){let i=this.zones[e];t[e]={p:i.piles.map(n=>n.done?-1:Math.round(n.units*10)/10),s:i.stains.filter(n=>!n.dynamic).map(n=>n.done?-1:Math.round(n.hp)),o:i.spores.map(n=>n.done?-1:Math.round(n.hp))}}return t}deserialize(t){if(t)for(let e in t){let i=this.zones[e],n=t[e];!i||!n||((n.p||[]).forEach((s,a)=>{let o=i.piles[a];o&&(s<0?(o.done=!0,o.units=0):o.units=Math.min(o.max,s),this._updatePile(i,o))}),(n.s||[]).forEach((s,a)=>{let o=i.stains[a];o&&(s<0?(o.done=!0,o.hp=0,o.mesh.visible=!1):(o.hp=Math.min(o.max,s),o.mesh.material.opacity=.15+.85*o.hp/o.max))}),(n.o||[]).forEach((s,a)=>{let o=i.spores[a];o&&(s<0?(o.done=!0,o.hp=0,o.mesh.visible=!1):o.hp=Math.min(o.max,s))}))}}};var uy=`
attribute float size;
attribute vec4 pcolor;
varying vec4 vColor;
uniform float scale;
void main(){
  vColor = pcolor;
  vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,dy=`
varying vec4 vColor;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if(d > 0.5) discard;
  float a = smoothstep(0.5, 0.1, d);
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
}`,ia=class{constructor(t,e,i){this.max=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.baseSize=new Float32Array(e),this.grow=new Float32Array(e),this.alpha=new Float32Array(e),this.alive=0;let n=new de;this.posAttr=new Re(this.pos,3).setUsage(Sn),this.colAttr=new Re(this.col,4).setUsage(Sn),this.sizeAttr=new Re(this.size,1).setUsage(Sn),n.setAttribute("position",this.posAttr),n.setAttribute("pcolor",this.colAttr),n.setAttribute("size",this.sizeAttr),n.setDrawRange(0,0),this.mat=new Me({vertexShader:uy,fragmentShader:dy,transparent:!0,depthWrite:!1,blending:i?Ye:wi,uniforms:{scale:{value:400}}}),this.points=new ws(n,this.mat),this.points.frustumCulled=!1,this.geo=n,t.add(this.points)}spawn(t,e,i,n,s,a,o,l,c,h,u,d=1,f=0,p=0,x=0){if(this.alive>=this.max)return;let g=this.alive++;this.pos[g*3]=t,this.pos[g*3+1]=e,this.pos[g*3+2]=i,this.vel[g*3]=n,this.vel[g*3+1]=s,this.vel[g*3+2]=a,this.col[g*4]=c,this.col[g*4+1]=h,this.col[g*4+2]=u,this.col[g*4+3]=d,this.alpha[g]=d,this.life[g]=o,this.maxLife[g]=o,this.baseSize[g]=l,this.size[g]=l,this.grav[g]=f,this.drag[g]=p,this.grow[g]=x}update(t){let e=0;for(;e<this.alive;){if(this.life[e]-=t,this.life[e]<=0){this._kill(e);continue}let i=e*3,n=Math.max(0,1-this.drag[e]*t);this.vel[i]*=n,this.vel[i+1]=this.vel[i+1]*n-this.grav[e]*t,this.vel[i+2]*=n,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t,this.pos[i+1]<.02&&(this.pos[i+1]=.02,this.vel[i+1]*=-.3,this.vel[i]*=.6,this.vel[i+2]*=.6);let s=this.life[e]/this.maxLife[e];this.col[e*4+3]=this.alpha[e]*Math.min(1,s*2.5),this.size[e]=this.baseSize[e]*(1+this.grow[e]*(1-s)),e++}this.geo.setDrawRange(0,this.alive),this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0}_kill(t){let e=--this.alive;if(t!==e){for(let i=0;i<3;i++)this.pos[t*3+i]=this.pos[e*3+i],this.vel[t*3+i]=this.vel[e*3+i];for(let i=0;i<4;i++)this.col[t*4+i]=this.col[e*4+i];this.life[t]=this.life[e],this.maxLife[t]=this.maxLife[e],this.size[t]=this.size[e],this.baseSize[t]=this.baseSize[e],this.grav[t]=this.grav[e],this.drag[t]=this.drag[e],this.grow[t]=this.grow[e],this.alpha[t]=this.alpha[e]}}setScale(t){this.mat.uniforms.scale.value=t*.5}},na=class{constructor(t){this.add=new ia(t,2500,!0),this.norm=new ia(t,2500,!1)}update(t){this.add.update(t),this.norm.update(t)}setScale(t){this.add.setScale(t),this.norm.setScale(t)}sparks(t,e,i,n,s,a,o=6){for(let l=0;l<o;l++){let c=3+Math.random()*4;this.add.spawn(t,e,i,(n+(Math.random()-.5))*c,(s+Math.random()*.8)*c,(a+(Math.random()-.5))*c,.15+Math.random()*.2,.06,1,.8,.4,1,9,2)}this.norm.spawn(t+n*.05,e+s*.05,i+a*.05,0,.4,0,.6,.25,.4,.4,.4,.5,-.2,1,2)}goo(t,e,i,n,s=10,a=3){let o=(n>>16&255)/255,l=(n>>8&255)/255,c=(n&255)/255;for(let h=0;h<s;h++)this.norm.spawn(t,e,i,(Math.random()-.5)*a,Math.random()*a,(Math.random()-.5)*a,.4+Math.random()*.4,.09+Math.random()*.08,o,l,c,.95,12,1)}water(t,e,i,n,s,a,o){let l=16+Math.random()*6;this.norm.spawn(t,e,i,(n+(Math.random()-.5)*o)*l,(s+(Math.random()-.5)*o)*l,(a+(Math.random()-.5)*o)*l,.3+Math.random()*.15,.05,.7,.85,1,.55,6,1,3)}mist(t,e,i){this.norm.spawn(t,e,i,(Math.random()-.5)*1.5,Math.random()*1.2,(Math.random()-.5)*1.5,.5,.2,.85,.92,1,.35,0,1,3)}flame(t,e,i,n,s,a){let o=7+Math.random()*3,l=Math.random();this.add.spawn(t,e,i,(n+(Math.random()-.5)*.25)*o,(s+(Math.random()-.3)*.25)*o,(a+(Math.random()-.5)*.25)*o,.4+Math.random()*.2,.1,1,.35+l*.35,.08,.38,-2,1.5,4)}suck(t,e,i,n,s,a,o=9075290){let l=(o>>16&255)/255,c=(o>>8&255)/255,h=(o&255)/255,u=.25;this.norm.spawn(t,e,i,(n-t)/u,(s-e)/u,(a-i)/u,u,.07,l,c,h,1,0,0,-.5)}smoke(t,e,i,n=1,s=[.3,.3,.3]){for(let a=0;a<n;a++)this.norm.spawn(t,e,i,(Math.random()-.5)*.8,.6+Math.random(),(Math.random()-.5)*.8,1.2,.35,s[0],s[1],s[2],.4,-.3,.5,3)}burst(t,e,i,n,s=30,a=6,o=.12){let l=(n>>16&255)/255,c=(n>>8&255)/255,h=(n&255)/255;for(let u=0;u<s;u++){let d=Math.random()*Math.PI*2,f=(Math.random()-.3)*Math.PI,p=a*(.4+Math.random()*.6);this.add.spawn(t,e,i,Math.cos(d)*Math.cos(f)*p,Math.sin(f)*p,Math.sin(d)*Math.cos(f)*p,.4+Math.random()*.5,o,l,c,h,1,4,2,1)}}};function br(r,t=128,e=0){let i=document.createElement("canvas");i.width=i.height=t;let n=i.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(let[o,l]of r)s.addColorStop(o,l);if(n.fillStyle=s,n.fillRect(0,0,t,t),e){let o=fi(5);n.globalCompositeOperation="destination-out";for(let l=0;l<e;l++)n.fillStyle=`rgba(0,0,0,${o()*.5})`,n.beginPath(),n.arc(o()*t,o()*t,2+o()*t*.12,0,7),n.fill();n.globalCompositeOperation="source-over"}let a=new ri(i);return a.colorSpace=ye,a}var sa=class{constructor(t){this.game=t;let e=this.scene=t.scene;this.tracers=[],this.holes=[],this.holeGeo=new nn(.05,8),this.holeMat=new Jt({color:1118481,transparent:!0,opacity:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.fireTex=br([[0,"rgba(255,255,230,1)"],[.2,"rgba(255,210,110,1)"],[.5,"rgba(255,110,30,0.8)"],[1,"rgba(120,20,0,0)"]],128,40),this.smokeTex=br([[0,"rgba(60,60,60,0.9)"],[.6,"rgba(40,40,40,0.5)"],[1,"rgba(20,20,20,0)"]],128,60),this.foamTex=br([[0,"rgba(255,255,255,1)"],[.4,"rgba(200,240,255,0.9)"],[1,"rgba(120,200,255,0)"]],128,50),this.ringTex=br([[0,"rgba(255,255,255,0)"],[.75,"rgba(255,255,255,0)"],[.88,"rgba(255,255,255,0.9)"],[1,"rgba(255,255,255,0)"]],256),this.scorchTex=br([[0,"rgba(0,0,0,0.85)"],[.6,"rgba(10,8,5,0.5)"],[1,"rgba(0,0,0,0)"]],128,30),this.sprites=[],this.rings=[],this.scorches=[],this.lights=[];for(let i=0;i<3;i++){let n=new Ri(16747066,0,16,1.4);e.add(n),this.lights.push(n)}this.lightI=0,this.ringGeo=new He(1,1)}tracer(t,e,i){let n=new de().setFromPoints([t,e]),s=new gt(i).multiplyScalar(2.2),a=new cr({color:s,transparent:!0,opacity:.9,blending:Ye,depthWrite:!1}),o=new Do(n,a);this.scene.add(o),this.tracers.push({line:o,t:.07})}bulletHole(t){let e;this.holes.length>=80?e=this.holes.shift():(e=new tt(this.holeGeo,this.holeMat),this.scene.add(e)),e.position.set(t.x+t.nx*.01,t.y+t.ny*.01,t.z+t.nz*.01),e.lookAt(t.x+t.nx,t.y+t.ny,t.z+t.nz),this.holes.push(e)}sprite(t,e,i,n,s,a,o,l={}){let c=new lr({map:t,transparent:!0,depthWrite:!1,blending:l.additive?Ye:wi,color:l.color||16777215,rotation:Math.random()*6.28}),h=new Co(c);h.position.set(e,i,n),h.scale.setScalar(s),this.scene.add(h),this.sprites.push({s:h,s0:s,s1:a,life:o,max:o,vy:l.vy||0,vx:l.vx||0,vz:l.vz||0,a0:l.alpha??1,spin:(Math.random()-.5)*(l.spin||1)})}explosion(t,e,i,n=4,s="fire"){let a=this.game,o=s==="foam",l=o?this.foamTex:this.fireTex,c=o?new gt(1.6,1.9,2.2):new gt(2.4,1.8,1.3);this.sprite(l,t,e,i,n*.3,n*1.3,.45,{additive:!0,color:c,spin:2});for(let p=0;p<6;p++){let x=Math.random()*6.28,g=Math.random()*n*.35;this.sprite(l,t+Math.cos(x)*g,e+Math.random()*n*.3,i+Math.sin(x)*g,n*.2,n*(.5+Math.random()*.4),.35+Math.random()*.25,{additive:!0,color:c,vy:1.5,spin:3})}for(let p=0;p<(o?10:8);p++){let x=Math.random()*6.28,g=Math.random()*n*.4;this.sprite(o?this.foamTex:this.smokeTex,t+Math.cos(x)*g,e+.3,i+Math.sin(x)*g,n*.4,n*(.9+Math.random()*.5),1.6+Math.random()*1,{color:o?15267583:5592405,alpha:o?.7:.75,vy:.7+Math.random()*.8,vx:Math.cos(x)*.8,vz:Math.sin(x)*.8,spin:.6})}let h=new Jt({map:this.ringTex,transparent:!0,depthWrite:!1,blending:Ye,color:o?new gt(1,2,2.5):new gt(2.5,1.6,.9),side:ke}),u=new tt(this.ringGeo,h);u.rotation.x=-Math.PI/2,u.position.set(t,.08,i),this.scene.add(u),this.rings.push({m:u,t:.5,max:.5,r:n*2.4});let d=this.lights[this.lightI++%this.lights.length];if(d.position.set(t,e+.8,i),d.color.set(o?9099519:16747066),d.intensity=120,d.userData.decay=300,a.particles.burst(t,e,i,o?14677759:16756800,70,n*2.2,.12),!o)for(let p=0;p<18;p++)a.particles.norm.spawn(t,e,i,(Math.random()-.5)*12,3+Math.random()*8,(Math.random()-.5)*12,1.2,.09,.15,.12,.1,1,16,.5);if(e<1.5){let p;this.scorches.length>=24?p=this.scorches.shift():(p=new tt(this.ringGeo,new Jt({map:this.scorchTex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3})),p.rotation.x=-Math.PI/2,this.scene.add(p)),p.material.color.set(o?12577023:16777215),p.material.blending=o?Ye:wi,p.material.opacity=o?.35:1,p.position.set(t,.015+this.scorches.length*5e-4,i),p.scale.setScalar(n*1.1),p.rotation.z=Math.random()*6,this.scorches.push(p)}let f=a.player.pos.distanceTo(new R(t,e,i));a.shake=Math.max(a.shake,Math.max(0,.9-f/(n*4))),a.post&&a.post.flash(Math.max(0,.35-f/40))}update(t){for(let i=this.tracers.length-1;i>=0;i--){let n=this.tracers[i];n.t-=t,n.line.material.opacity=Math.max(0,n.t/.07)*.9,n.t<=0&&(this.scene.remove(n.line),n.line.geometry.dispose(),n.line.material.dispose(),this.tracers.splice(i,1))}let e=this.game.ambience?this.game.ambience.wind:null;for(let i=this.sprites.length-1;i>=0;i--){let n=this.sprites[i];n.life-=t;let s=1-n.life/n.max;n.s.scale.setScalar(n.s0+(n.s1-n.s0)*(1-Math.pow(1-s,3))),n.s.material.opacity=n.a0*Math.min(1,(1-s)*1.6),n.s.position.x+=(n.vx+(e?e.x*.4:0))*t,n.s.position.y+=n.vy*t,n.s.position.z+=(n.vz+(e?e.z*.4:0))*t,n.s.material.rotation+=n.spin*t,n.life<=0&&(this.scene.remove(n.s),n.s.material.dispose(),this.sprites.splice(i,1))}for(let i=this.rings.length-1;i>=0;i--){let n=this.rings[i];n.t-=t;let s=1-n.t/n.max;n.m.scale.setScalar(.5+n.r*(1-Math.pow(1-s,2))),n.m.material.opacity=1-s,n.t<=0&&(this.scene.remove(n.m),n.m.material.dispose(),this.rings.splice(i,1))}for(let i of this.lights)i.intensity>0&&(i.intensity=Math.max(0,i.intensity-(i.userData.decay||300)*t))}},ra=class{constructor(t){this.game=t,this.wind=new R(1,0,.3),this.gust=0,this.gustT=6,this.time=0;let e=500;this.N=e,this.box=18;let i=new Float32Array(e*3),n=fi(3);for(let h=0;h<e;h++)i[h*3]=(n()-.5)*this.box*2,i[h*3+1]=n()*4.4,i[h*3+2]=(n()-.5)*this.box*2;this.offs=new Float32Array(e);for(let h=0;h<e;h++)this.offs[h]=n()*100;this.local=i;let s=new de;this.posAttr=new Re(new Float32Array(e*3),3).setUsage(Sn),s.setAttribute("position",this.posAttr);let a=document.createElement("canvas");a.width=a.height=32;let o=a.getContext("2d"),l=o.createRadialGradient(16,16,0,16,16,16);l.addColorStop(0,"rgba(255,250,235,1)"),l.addColorStop(1,"rgba(255,250,235,0)"),o.fillStyle=l,o.fillRect(0,0,32,32);let c=new ri(a);this.dust=new ws(s,new hr({size:.05,map:c,transparent:!0,opacity:.55,depthWrite:!1,blending:Ye,color:16773848})),this.dust.frustumCulled=!1,t.scene.add(this.dust),this.buildFoliage(),this.flickerLights=[]}buildFoliage(){let t=this.game.level,e=fi(42),i=new $t({color:5216826,roughness:.6,side:ke,emissive:666120}),n=new $t({color:3824162,roughness:.8}),s=new He(.16,.42);s.translate(0,.21,0);let a=new Jt({color:new gt(1.6,.5,2)});this.plants=[];for(let o=0;o<t.H;o++)for(let l=0;l<t.W;l++){let c=t.idx(l,o);if(t.type[c]!==2||t.zone[c]!==3)continue;let[h,u]=t.center(l,o);for(let d=0;d<3;d++){let f=new se;f.position.set(h+(e()-.5)*1.3,1.1,u+(e()-.5)*1.3);let p=.5+e()*.6,x=new tt(new be(.015,.025,p,5),n);x.position.y=p/2,f.add(x);for(let g=0;g<6;g++){let m=new tt(s,i);m.position.y=p*(.3+g*.12),m.rotation.set(.6+e()*.5,g*2.4,0),m.scale.setScalar(.7+e()*.6),f.add(m)}if(e()<.4){let g=new tt(new Je(.05,8,6),a);g.position.y=p+.05,f.add(g)}t.group.add(f),this.plants.push({p:f,ph:e()*6.28,k:.6+e()*.5})}}}update(t){let e=this.game,i=e.player;this.time+=t;let n=this.time;this.gustT-=t,this.gustT<=0&&(this.gustT=8+Math.random()*10,this.gustDur=2.5,this.gustDir=Math.random()*6.28),this.gustDur>0?(this.gustDur-=t,this.gust=Math.min(1,this.gust+t*1.5)):this.gust=Math.max(0,this.gust-t*.6);let s=Math.sin(n*.07)*2+(this.gustDir||0)*this.gust*.3,a=.35+this.gust*2.8;if(this.wind.set(Math.cos(s)*a,0,Math.sin(s)*a),e.audio&&e.audio.wind(this.gust),this.gust>.3&&Math.random()<t*25*this.gust){let u=Math.random()*6.28,d=2+Math.random()*10,f=i.pos.x+Math.cos(u)*d,p=i.pos.z+Math.sin(u)*d;if(!e.level.blockedCircle(f,p,.1,0)){let x=Math.random()<.5?[.55,.5,.4]:[.75,.72,.65];e.particles.norm.spawn(f,.05+Math.random()*.3,p,this.wind.x*1.6,.4+Math.random()*.8,this.wind.z*1.6,1.2,.05+Math.random()*.04,x[0],x[1],x[2],.9,2.5,.3)}}let o=this.box,l=this.posAttr.array,c=this.local;for(let u=0;u<this.N;u++){let d=this.offs[u];c[u*3]+=(this.wind.x*.35+Math.sin(n*.7+d)*.08)*t,c[u*3+1]+=Math.sin(n*.5+d*1.3)*.06*t,c[u*3+2]+=(this.wind.z*.35+Math.cos(n*.6+d)*.08)*t;let f=c[u*3]-i.pos.x,p=c[u*3+2]-i.pos.z;f>o?c[u*3]-=2*o:f<-o&&(c[u*3]+=2*o),p>o?c[u*3+2]-=2*o:p<-o&&(c[u*3+2]+=2*o),c[u*3+1]>4.4?c[u*3+1]=.1:c[u*3+1]<.05&&(c[u*3+1]=4.3),l[u*3]=c[u*3],l[u*3+1]=c[u*3+1],l[u*3+2]=c[u*3+2]}this.posAttr.needsUpdate=!0;let h=this.wind.length();for(let u of this.plants)u.p.rotation.z=Math.sin(n*2.2*u.k+u.ph)*.06*(1+h)+this.wind.x*.05,u.p.rotation.x=Math.cos(n*1.9*u.k+u.ph)*.05*(1+h)+this.wind.z*.05;for(let u of this.flickerLights)u.userData.flickT>0?(u.userData.flickT-=t,u.intensity=u.userData.base*(Math.random()<.5?.15:1)):(u.intensity=u.userData.base,Math.random()<t*.08&&(u.userData.flickT=.2+Math.random()*.6))}},oa=class{constructor(t){this.game=t,this.list=[];let e=t.level,i=this.texture(),n=new $t({map:i,metalness:.6,roughness:.4}),s=new Jt({color:new gt(.6,2.6,.5)}),a=new be(.38,.38,1.05,20),o=new be(.3,.3,.04,20),l=new bn(.38,.025,6,24),c=new $t({color:2236962,metalness:.8,roughness:.3}),h=fi(777),u={a:6,b:5,c:5,d:6},d=e.bossCell.x*it,f=e.bossCell.y*it;for(let p of Object.keys(u)){let x=e.zoneCells[p],g=0,m=0;for(;g<u[p]&&m++<200;){let _=x[h()*x.length|0],M=_%e.W,v=_/e.W|0,I=!1;for(let[D,N]of[[1,0],[-1,0],[0,1],[0,-1]])e.type[e.idx(M+D,v+N)]===1&&(I=!0);if(!I)continue;let[w,C]=e.center(M,v);if(Math.hypot(w-d,C-f)<6||this.list.some(D=>Math.hypot(D.x-w,D.z-C)<3)||e.objects.some(D=>Math.abs(D.x-M)+Math.abs(D.y-v)<=1))continue;let P=w+(h()-.5)*.6,S=C+(h()-.5)*.6,y=new se;y.position.set(P,0,S);let T=new tt(a,n);T.position.y=.525,y.add(T);let U=new tt(o,s);U.position.y=1.06,y.add(U);for(let D of[.05,.5,1]){let N=new tt(l,c);N.rotation.x=Math.PI/2,N.position.y=D,y.add(N)}y.rotation.y=h()*6,e.group.add(y),this.list.push({x:P,z:S,hp:35,mesh:y,alive:!0,fuse:-1,zone:p}),g++}}}texture(){let t=document.createElement("canvas");t.width=256,t.height=128;let e=t.getContext("2d");e.fillStyle="#3e6b2a",e.fillRect(0,0,256,128);for(let n=-40;n<256;n+=32)e.fillStyle="#e0b21a",e.beginPath(),e.moveTo(n,50),e.lineTo(n+16,50),e.lineTo(n+32,78),e.lineTo(n+16,78),e.fill();e.fillStyle="#111",e.fillRect(0,46,256,4),e.fillRect(0,78,256,4),e.fillStyle="#d8ff5a",e.font="bold 22px sans-serif",e.fillText("VOLATILE",70,30),e.fillText("SLUDGE",82,112);let i=new ri(t);return i.colorSpace=ye,i}raycast(t,e,i){let n=null;for(let s of this.list)if(s.alive)for(let a of[.3,.75]){let o=s.x-t.x,l=a-t.y,c=s.z-t.z,h=o*e.x+l*e.y+c*e.z;if(h<0)continue;let u=o*o+l*l+c*c-h*h;if(u>.42*.42)continue;let d=h-Math.sqrt(.42*.42-u);d<i&&(!n||d<n.dist)&&(n={barrel:s,dist:d})}return n}damage(t,e){t.alive&&(t.hp-=e,t.hp<=0&&t.fuse<0?t.fuse=.05:t.fuse<0&&(t.fuse=-1,this.game.particles.goo(t.x,1,t.z,10289002,4,2)))}explode(t){let e=this.game;t.alive=!1,t.mesh.visible=!1,e.audio.boom(),e.effects.explosion(t.x,.7,t.z,4.5,"fire"),e.particles.goo(t.x,.8,t.z,10289002,40,8),e.enemies.radiusDamage(t.x,.7,t.z,5.5,450*(1+.5*(e.phase-1)));let i=e.player,n=Math.hypot(i.pos.x-t.x,i.pos.z-t.z);n<4.5&&e.state==="playing"&&i.damage(Math.round(45*(1-n/4.5))+5,{x:t.x,z:t.z}),e.grime.foam(e.activeGrimeZones(),t.x,t.z,3.2,()=>{e.addCredits(12,null,!0),e.stats.stains++},()=>{e.addCredits(40,null,!0),e.stats.spores++}),e.enemies.washBoss(0,null,t.x,t.z,6,60),e.enemies.damageBoss(300,null,"fire");for(let s of this.list)s.alive&&s.fuse<0&&Math.hypot(s.x-t.x,s.z-t.z)<5&&(s.fuse=.18+Math.random()*.15)}push(t,e){for(let i of this.list){if(!i.alive)continue;let n=t.x-i.x,s=t.z-i.z,a=Math.hypot(n,s),o=.4+e;a<o&&a>1e-4&&t.y<1&&(t.x=i.x+n/a*o,t.z=i.z+s/a*o)}}update(t){for(let e of this.list)e.alive&&e.fuse>=0&&(e.fuse-=t,e.mesh.position.x=e.x+(Math.random()-.5)*.04,e.fuse<=0&&this.explode(e))}};var fy=new R;function aa(r,t,e,i){let n=r.x-e.x,s=r.y-e.y,a=r.z-e.z,o=n*t.x+s*t.y+a*t.z,l=n*n+s*s+a*a-i*i,c=o*o-l;if(c<0)return-1;let h=Math.sqrt(c),u=-o-h;return u>=0?u:-o+h>=0?0:-1}var oh={ammo:{name:"MAX AMMO",color:5635925},double:{name:"DOUBLE CREDITS",color:16765498},insta:{name:"INSTA-CLEAN",color:16726586},purge:{name:"PURGE",color:3856639}},la=class{constructor(t){this.game=t,this.list=[],this.projectiles=[],this.pickups=[],this.group=new se,t.scene.add(this.group),this.spawnTimer=3,this.flowTimer=0,this.surgeTimer=100,this.surgeActive=0;let e=new Je(1,28,20),i=e.attributes.position;for(let n=0;n<i.count;n++){let s=i.getX(n),a=i.getY(n),o=i.getZ(n),l=1+.07*Math.sin(s*7.1+a*3.3)*Math.cos(o*6.2-a*2.1)+.04*Math.sin(a*13+s*5);i.setXYZ(n,s*l,a*l,o*l)}e.computeVertexNormals(),this.geo={body:e,eye:new Je(1,8,6),arm:new be(.5,.3,1,8),glob:new Je(.16,8,6),pickup:new Ho(.35,0)},this.eyeMats={},this.boss=null}makeMesh(t){var c;let e=th[t],i=new se,n=new $t({color:e.color,emissive:0,roughness:.22,metalness:.05}),s=(c=this.eyeMats)[t]||(c[t]=new Jt({color:new gt(e.eye).multiplyScalar(2.6)})),a=e.height,o=new tt(this.geo.body,n),l={mat:n};if(t==="brute"){o.scale.set(.85,.95,.7),o.position.y=1.25;let h=new tt(this.geo.body,n);h.scale.set(.35,.3,.35),h.position.set(0,2.25,.25),i.add(h),l.head=h;for(let u of[-1,1]){let d=new tt(this.geo.arm,n);d.scale.set(.55,1.4,.55),d.position.set(u*.95,1.2,.15),d.rotation.z=u*.2,i.add(d),(l.arms||(l.arms=[])).push(d)}for(let u of[-1,1]){let d=new tt(this.geo.eye,s);d.scale.setScalar(.07),d.position.set(u*.13,2.3,.55),i.add(d)}}else if(t==="spitter"){o.scale.set(.4,.75,.4),o.position.y=.95;let h=new tt(this.geo.body,new $t({color:10289002,emissive:4893200,emissiveIntensity:1.3,roughness:.15,transparent:!0,opacity:.9}));h.scale.set(.32,.28,.32),h.position.set(0,1.55,-.12),i.add(h),l.sac=h;let u=new tt(this.geo.body,n);u.scale.set(.22,.24,.26),u.position.set(0,1.72,.12),i.add(u),l.head=u;for(let d of[-1,1]){let f=new tt(this.geo.eye,s);f.scale.setScalar(.05),f.position.set(d*.09,1.78,.34),i.add(f)}for(let d of[-1,1]){let f=new tt(this.geo.arm,n);f.scale.set(.15,.8,.15),f.position.set(d*.38,1,.1),f.rotation.z=d*.3,i.add(f),(l.arms||(l.arms=[])).push(f)}}else{o.scale.set(.48,.62,.42),o.position.y=.75;let h=new tt(this.geo.body,n);h.scale.set(.27,.25,.27),h.position.set(0,1.42,.08),i.add(h),l.head=h;for(let u of[-1,1]){let d=new tt(this.geo.eye,s);d.scale.setScalar(.055),d.position.set(u*.1,1.47,.32),i.add(d)}for(let u of[-1,1]){let d=new tt(this.geo.arm,n);d.scale.set(.18,.9,.18),d.position.set(u*.45,.95,.25),d.rotation.x=-1.1,i.add(d),(l.arms||(l.arms=[])).push(d)}for(let u=0;u<3;u++){let d=new tt(this.geo.body,n);d.scale.setScalar(.12+Math.random()*.08),d.position.set((Math.random()-.5)*.6,.3+Math.random()*.7,(Math.random()-.5)*.5),i.add(d)}}return i.add(o),l.body=o,{g:i,parts:l}}spawn(t,e,i,n=!1){let s=this.game,a=th[t],o=Ie[Math.max(1,Math.min(4,s.phase))],{g:l,parts:c}=this.makeMesh(t),h=s.level.groundAt(e,i,a.radius);l.position.set(e,h,i),this.group.add(l);let u=a.hp*o.hpMul*(s.difficulty||1),d={type:t,d:a,mesh:l,parts:c,pos:new R(e,h,i),vel:new R,knock:new R,hp:u,maxHp:u,attackCd:1,windup:0,spawnT:n?0:.9,dying:0,flash:0,burn:0,los:!1,losT:Math.random()*.3,anim:Math.random()*10,lastClose:s.time,bestDist:1e9,charge:0,chargeCd:4+Math.random()*3,strafe:Math.random()<.5?1:-1,lastCreditT:-1,yaw:0,speedMul:.9+Math.random()*.25};return this.list.push(d),n||s.particles.goo(e,.2,i,a.color,16,3),d}pickSpawnPoint(){let t=this.game,e=t.level,i=t.player.pos,n=t.spawnZones();if(!n.length)return null;for(let s=0;s<30;s++){let a=s>18,o=n[Math.random()*n.length|0],l=e.zoneCells[o],c=l[Math.random()*l.length|0],h=c%e.W,u=c/e.W|0,[d,f]=e.center(h,u),p=Math.hypot(d-i.x,f-i.z);if(!(p<13||p>60)&&!(e.flow[c]>1e8)&&!(!a&&e.lineOfSight(i.x,i.y+1.6,i.z,d,1,f)))return[d+(Math.random()-.5)*.8,f+(Math.random()-.5)*.8]}return null}director(t){let e=this.game;if(e.phase<1)return;let i=Ie[Math.min(4,e.phase)];e.victory||(this.surgeTimer-=t),this.surgeActive>0?(this.surgeActive-=t,this.surgeActive<=0&&e.ui.banner("Surge contained","The bloom quiets down... for now",2.5)):this.surgeTimer<=0&&(this.surgeActive=22,this.surgeTimer=110+Math.random()*30,e.ui.banner("BLOOM SURGE","The sludge is boiling over \u2014 survive!",3,"#ff4a4a"),e.audio.surge());let n=e.grime.cleanliness(i.zone),s=this.surgeActive>0,a=e.victory?6:i.maxAlive+(s?8:0)+(this.boss&&this.boss.active?-4:0),o=i.interval*(.65+.8*n)*(s?.35:1);e.inHub()&&(o*=1.6),this.spawnTimer-=t;let l=this.list.filter(c=>c.dying<=0).length;if(this.spawnTimer<=0&&l<a){this.spawnTimer=o*(.7+Math.random()*.6);let c=this.pickSpawnPoint();if(c){let h=Math.random(),u="sludger";for(let[d,f]of Object.entries(i.mix)){if(h<f){u=d;break}h-=f}this.spawn(u,c[0],c[1])}}}update(t){let e=this.game,i=e.level,n=e.player;this.flowTimer-=t,this.flowTimer<=0&&(this.flowTimer=.2,i.computeFlow(n.pos.x,n.pos.z)),e.state==="playing"&&this.director(t);let s=new R(n.pos.x,n.pos.y+1,n.pos.z);for(let a=this.list.length-1;a>=0;a--){let o=this.list[a];if(o.anim+=t,o.flash>0&&(o.flash-=t,o.parts.mat.emissive.setHex(o.flash>0?8930372:o.burn>0?5579264:0)),o.dying>0){o.dying-=t;let P=1-o.dying/.6;o.mesh.scale.set(1+P*.6,Math.max(.01,1-P),1+P*.6),o.dying<=0&&(this.group.remove(o.mesh),this.list.splice(a,1));continue}if(o.spawnT>0){o.spawnT-=t,o.mesh.position.y=o.pos.y-Math.max(0,o.spawnT)/.9*o.d.height,Math.random()<.3&&e.particles.goo(o.pos.x,.1,o.pos.z,o.d.color,1,2);continue}if(o.burn>0&&(o.burn-=t,this.damage(o,30*t*(1+.4*(e.phase-1)),{kind:"fire",silent:!0}),Math.random()<.4&&e.particles.flame(o.pos.x+(Math.random()-.5)*.4,o.pos.y+.5+Math.random(),o.pos.z+(Math.random()-.5)*.4,0,.3,0),o.burn<=0&&o.parts.mat.emissive.setHex(0),o.dying>0))continue;let l=n.pos.x-o.pos.x,c=n.pos.z-o.pos.z,h=Math.hypot(l,c),u=n.pos.y-o.pos.y;if(o.losT-=t,o.losT<=0&&(o.losT=.25+Math.random()*.1,o.los=i.lineOfSight(o.pos.x,o.pos.y+o.d.height*.8,o.pos.z,s.x,s.y+.5,s.z)),h<o.bestDist-1&&(o.bestDist=h,o.lastClose=e.time),e.time-o.lastClose>14&&!o.los&&h>18){this.group.remove(o.mesh),this.list.splice(a,1);continue}let d=0,f=0,p=o.d.speed*o.speedMul*(1+.06*(e.phase-1));if(o.los&&h<9&&Math.abs(u)<1.5||h<1.2)d=l/(h||1),f=c/(h||1);else{let P=i.flowDir(o.pos.x,o.pos.z);P?(d=P[0],f=P[1]):h>0&&(d=l/h,f=c/h)}if(o.type==="spitter"&&o.los&&h<14){let P=-c/(h||1),S=l/(h||1),y=h>9?1:h<6?-1:0;d=l/h*y+P*o.strafe*.6,f=c/h*y+S*o.strafe*.6,Math.random()<t*.3&&(o.strafe*=-1),o.attackCd-=t,o.attackCd<=0&&(o.attackCd=o.d.rate*(.8+Math.random()*.4),this.spit(o,s))}o.type==="brute"&&(o.chargeCd-=t,o.charge>0?(o.charge-=t,p*=2.6,d=o.cdx,f=o.cdz):o.chargeCd<=0&&o.los&&h<12&&h>3&&(o.charge=1,o.chargeCd=6+Math.random()*3,o.cdx=l/h,o.cdz=c/h,e.audio.growl()));let g=o.d.radius+.95;(o.type!=="spitter"||h<g)&&(o.attackCd-=o.type==="spitter"?0:t,o.windup>0?(o.windup-=t,p*=.35,o.windup<=0&&(h<g+.5&&Math.abs(u)<1.9&&e.state==="playing"&&n.damage(o.d.dmg*(1+.25*(e.phase-1)),o.pos),o.attackCd=o.d.rate)):h<g&&o.attackCd<=0&&Math.abs(u)<1.9&&(o.windup=.32,o.charge>0&&(o.charge=0))),h<o.d.radius+n.radius+.1&&Math.abs(u)<1.8&&(d*=.1,f*=.1);for(let P of this.list){if(P===o||P.dying>0)continue;let S=o.pos.x-P.pos.x,y=o.pos.z-P.pos.z,T=S*S+y*y,U=o.d.radius+P.d.radius;if(T<U*U&&T>1e-6){let D=Math.sqrt(T);d+=S/D*.9,f+=y/D*.9}}let m=Math.hypot(d,f);m>1&&(d/=m,f/=m);let _=o.knock.x,M=o.knock.z;o.knock.multiplyScalar(Math.max(0,1-t*5)),o.vel.x=d*p+_,o.vel.z=f*p+M;let[v,I]=i.moveCircle(o.pos.x,o.pos.z,o.vel.x*t,o.vel.z*t,o.d.radius*.8,o.pos.y,1.25);o.pos.x=v,o.pos.z=I,this.boss&&this.boss.alive&&this.pushFromBoss(o.pos,o.d.radius),e.barrels.push(o.pos,o.d.radius*.8);let w=i.groundAt(o.pos.x,o.pos.z,o.d.radius*.5,o.pos.y+.9);if(o.pos.y+=(w-o.pos.y)*Math.min(1,t*(w>o.pos.y?8:12)),o.mesh.position.copy(o.pos),m>.05||h<10){let S=(h<10&&o.los?Math.atan2(l,c):Math.atan2(d,f))-o.yaw;for(;S>Math.PI;)S-=2*Math.PI;for(;S<-Math.PI;)S+=2*Math.PI;o.yaw+=rn(S,-8*t,8*t)}o.mesh.rotation.y=o.yaw;let C=Math.sin(o.anim*(o.charge>0?18:9))*.08;o.parts.body.rotation.z=C,o.parts.arms&&o.parts.arms.forEach((P,S)=>{P.rotation.x=(o.type==="sludger"?-1.1:0)+Math.sin(o.anim*9+S*Math.PI)*.4-(o.windup>0?.9:0)}),o.parts.sac&&o.parts.sac.scale.setScalar(.3+(1-o.attackCd/o.d.rate)*.08),Math.random()<t*.15&&h<20&&e.audio.growl()}this.updateProjectiles(t),this.updatePickups(t),this.boss&&this.updateBoss(t)}spit(t,e){let i=this.game,n=new R(t.pos.x,t.pos.y+1.6,t.pos.z),a=e.clone().add(new R(i.player.vel.x*.3,0,i.player.vel.z*.3)).sub(n),c=Math.hypot(a.x,a.z)/14,h=new R(a.x/c,a.y/c+.5*9*c,a.z/c);this.addProjectile(n,h,t.d.dmg*(1+.25*(i.phase-1)),10289002,9),i.audio.spit()}addProjectile(t,e,i,n,s,a=1){let o=new tt(this.geo.glob,new Jt({color:n}));o.scale.setScalar(a),o.position.copy(t),this.group.add(o),this.projectiles.push({mesh:o,vel:e,dmg:i,color:n,grav:s,life:5,size:a})}updateProjectiles(t){let e=this.game,i=e.level,n=e.player;for(let s=this.projectiles.length-1;s>=0;s--){let a=this.projectiles[s];a.life-=t,a.vel.y-=a.grav*t;let o=a.mesh.position;o.addScaledVector(a.vel,t),Math.random()<.5&&e.particles.norm.spawn(o.x,o.y,o.z,0,0,0,.3,.1*a.size,(a.color>>16&255)/255,(a.color>>8&255)/255,(a.color&255)/255,.6,0,0,0);let l=o.x-n.pos.x,c=o.z-n.pos.z,h=o.y-(n.pos.y+.9),u=!1;l*l+c*c<.5*a.size+.2&&Math.abs(h)<1&&(e.state==="playing"&&n.damage(a.dmg,o),u=!0);let[d,f]=i.cellOf(o.x,o.z);(o.y<i.hAt(d,f)||o.y<.05||o.y>4.5||a.life<=0)&&(u=!0),u&&(e.particles.goo(o.x,Math.max(.1,o.y),o.z,a.color,10,3),e.audio.splat(),this.group.remove(a.mesh),a.mesh.material.dispose(),this.projectiles.splice(s,1))}}raycast(t,e,i){let n=[];for(let s of this.list){if(s.dying>0||s.spawnT>.5)continue;let a=s.parts.head,o=fy.set(0,0,0);a.getWorldPosition(o);let l=a.scale.x*1.1,c=aa(t,e,o,l),h=new R(s.pos.x,s.pos.y+s.d.height*.42,s.pos.z),u=s.d.radius*1.05,d=aa(t,e,h,u),f=new R(s.pos.x,s.pos.y+s.d.height*.16,s.pos.z),p=aa(t,e,f,u*.9);(d<0||p>=0&&p<d)&&(d=p);let x=-1,g=!1;c>=0&&(d<0||c<=d+.05)?(x=c,g=!0):d>=0&&(x=d),x>=0&&x<i&&n.push({enemy:s,dist:x,head:g,point:t.clone().addScaledVector(e,x)})}return n.sort((s,a)=>s.dist-a.dist),n}meleeTarget(t,e,i,n){let s=null,a=1e9;for(let o of this.list){if(o.dying>0||o.spawnT>.5)continue;let c=new R(o.pos.x,o.pos.y+o.d.height*.5,o.pos.z).sub(t),h=c.length();h>i+o.d.radius||(c.normalize(),(c.x*e.x+c.z*e.z)/(Math.hypot(c.x,c.z)*Math.hypot(e.x,e.z)||1)<n)||this.game.level.lineOfSight(t.x,t.y,t.z,o.pos.x,o.pos.y+o.d.height*.5,o.pos.z)&&h<a&&(a=h,s=o)}return s}coneDamage(t,e,i,n,s,a){for(let o of this.list){if(o.dying>0||o.spawnT>.5)continue;let l=new R(o.pos.x,o.pos.y+o.d.height*.5,o.pos.z).sub(t),c=l.length();c>i+o.d.radius||c>.5&&l.dot(e)/c<n||this.game.level.lineOfSight(t.x,t.y,t.z,o.pos.x,o.pos.y+1,o.pos.z)&&(o.burn=2.5,this.damage(o,s*(1+.4*(this.game.phase-1)),{kind:a,silent:!0}))}if(this.boss&&this.boss.alive&&this.boss.active){let o=this.boss,l=new R(o.x,2.2,o.z).sub(t),c=l.length();c<i+2.4&&l.dot(e)/c>n-.15&&(this.damageBoss(s*3,null,"fire"),this.washBoss(s*.5,null))}}radiusDamage(t,e,i,n,s){for(let a of this.list){if(a.dying>0)continue;let o=Math.hypot(a.pos.x-t,a.pos.y+.8-e,a.pos.z-i);if(o<n){this.damage(a,s*(1-o/n*.6),{kind:"blast"});let l=(1-o/n)*10;a.knock.x+=(a.pos.x-t)/(o||1)*l,a.knock.z+=(a.pos.z-i)/(o||1)*l}}}damage(t,e,i={}){let n=this.game;if(!(t.dying>0||t.hp<=0)){if(n.powerups.insta>0&&i.kind!=="water"&&(e=t.hp+1),t.hp-=e,i.silent)t.dotAcc=(t.dotAcc||0)+e,n.time-(t.dotShown||0)>.35&&t.dotAcc>=1&&(t.dotShown=n.time,n.ui.damageNumber(t.pos.x,t.pos.y+t.d.height+.2,t.pos.z,t.dotAcc,i.kind==="fire"?"fire":"water"),t.dotAcc=0);else{let s=i.point||new R(t.pos.x,t.pos.y+t.d.height*.7,t.pos.z);n.ui.damageNumber(s.x,s.y+.2,s.z,e,i.head?"head":i.kind==="melee"?"melee":t.hp<=0?"kill":"normal"),t.flash=.08,t.parts.mat.emissive.setHex(8930372),i.point&&n.particles.goo(i.point.x,i.point.y,i.point.z,t.d.color,i.head?10:5,3),n.audio.hit(),i.head&&n.audio.headshot(),i.kind==="bullet"&&n.time-t.lastCreditT>.06&&(t.lastCreditT=n.time,n.addCredits(Ee.hit,null,!0))}t.hp<=0?this.kill(t,i):i.silent||n.ui.hitmarker(!!i.head,!1)}}kill(t,e){let i=this.game;t.hp=0,t.dying=.6,i.stats.kills++;let n=e.kind==="melee"?Ee.meleeKill:e.head?Ee.headKill:Ee.kill;i.addCredits(n+(t.d.reward-60),null,!1,e.kind==="melee"?"MELEE KILL":e.head?"HEADSHOT":null),i.ui.hitmarker(!!e.head,!0),i.audio.kill(),i.particles.goo(t.pos.x,t.pos.y+t.d.height*.5,t.pos.z,t.d.color,30,5);let s=i.level.zoneAtWorld(t.pos.x,t.pos.z);if(s&&s!=="h"&&Math.random()<.3&&i.grime.addGooStain(s,t.pos.x,t.pos.z,1+t.d.radius),Math.random()<.035&&this.pickups.length<3){let a=Object.keys(oh);this.dropPickup(a[Math.random()*a.length|0],t.pos.x,t.pos.z)}}dropPickup(t,e,i){let n=oh[t],s=new tt(this.geo.pickup,new Jt({color:n.color})),a=this.game.level.groundAt(e,i,.3)+.9;s.position.set(e,a,i);let o=new tt(new Vo(.45,.6,24),new Jt({color:n.color,transparent:!0,opacity:.5,side:ke}));s.add(o),this.group.add(s),this.pickups.push({kind:t,mesh:s,life:25,y:a})}updatePickups(t){let e=this.game,i=e.player;for(let n=this.pickups.length-1;n>=0;n--){let s=this.pickups[n];s.life-=t,s.mesh.rotation.y+=t*2,s.mesh.position.y=s.y+Math.sin(e.time*3)*.12,s.mesh.visible=s.life>5||Math.sin(e.time*20)>0,Math.hypot(s.mesh.position.x-i.pos.x,s.mesh.position.z-i.pos.z)<1.2&&Math.abs(s.y-.9-i.pos.y)<1.5?(e.applyPowerup(s.kind,oh[s.kind].name),this.group.remove(s.mesh),this.pickups.splice(n,1)):s.life<=0&&(this.group.remove(s.mesh),this.pickups.splice(n,1))}}purgeAll(){for(let t of this.list)t.dying<=0&&t.spawnT<=.5&&this.kill(t,{kind:"blast"})}pushPlayer(t){for(let e of this.list){if(e.dying>0||e.spawnT>0)continue;let i=t.pos.x-e.pos.x,n=t.pos.z-e.pos.z,s=t.radius+e.d.radius*.8,a=i*i+n*n;if(a<s*s&&a>1e-6&&Math.abs(t.pos.y-e.pos.y)<1.6){let o=Math.sqrt(a),l=(s-o)*.5,c=t.pos.x+i/o*l,h=t.pos.z+n/o*l;this.game.level.blockedCircle(c,h,t.radius,t.pos.y,.45)||(t.pos.x=c,t.pos.z=h)}}this.boss&&this.boss.alive&&this.pushFromBoss(t.pos,t.radius,!0)}createBoss(){let t=this.game,e=t.level,[i,n]=e.center(e.bossCell.x,e.bossCell.y),s=i-it/2,a=n-it/2,o=new se;o.position.set(s,0,a);let l=new Ne({color:9054826,emissive:3803690}),c=new tt(new sn(1.8,2),l);c.position.y=2.1,o.add(c);let h=new Ne({color:7012154,transparent:!0,opacity:.55,emissive:1726986}),u=new tt(new sn(2.3,2),h);u.position.y=2.1,o.add(u);let d=[],f=new Ne({color:5904970});for(let g=0;g<8;g++){let m=new se,_=g/8*Math.PI*2;m.position.set(Math.cos(_)*1.5,.6,Math.sin(_)*1.5),m.rotation.y=-_;let M=new tt(new be(.08,.32,3.2,8),f);M.position.y=1.6,m.add(M),o.add(m),d.push(m)}let p=new tt(new be(2.6,3.2,.5,20),new Ne({color:3807786}));p.position.y=.25,o.add(p);for(let g=0;g<6;g++){let m=new tt(this.geo.eye,new Jt({color:16769594})),_=g/6*Math.PI*2;m.scale.setScalar(.18),m.position.set(Math.cos(_)*1.75,2.4+Math.sin(g)*.4,Math.sin(_)*1.75),o.add(m)}t.scene.add(o);let x=9e3*(t.difficulty||1);this.boss={x:s,z:a,grp:o,core:c,shell:u,coreMat:l,shellMat:h,tentacles:d,hp:x,maxHp:x,shield:800,maxShield:800,active:!1,alive:!0,volleyT:4,summonT:10,slamT:3,lastWash:-10,flash:0,r:2.4},o.scale.setScalar(.6)}awakenBoss(){this.boss||this.createBoss(),this.boss.active=!0,this.game.audio.boss()}pushFromBoss(t,e,i=!1){let n=this.boss,s=t.x-n.x,a=t.z-n.z,o=Math.hypot(s,a),l=(n.active?3.1:2)+e;if(o<l&&o>1e-4){let c=n.x+s/o*l,h=n.z+a/o*l;this.game.level.blockedCircle(c,h,e,t.y,.45)||(t.x=c,t.z=h)}}bossRaycast(t,e,i){let n=this.boss;if(!n||!n.alive||!n.active)return null;let s=aa(t,e,new R(n.x,2.1,n.z),n.shield>0?2.3:1.9);return s>=0&&s<i?{dist:s,point:t.clone().addScaledVector(e,s)}:null}damageBoss(t,e,i){let n=this.game,s=this.boss;if(!s||!s.alive||!s.active)return;let a=t;s.shield>0&&i!=="fire"?(a=t*.08,e&&n.particles.goo(e.x,e.y,e.z,7012154,3,2)):e&&n.particles.goo(e.x,e.y,e.z,13650592,6,3),n.powerups.insta>0&&(a*=2),s.hp-=a,s.flash=.06,e&&n.ui.damageNumber(e.x,e.y+.3,e.z,a,s.shield>0?"shield":"normal"),i==="bullet"&&n.time-(s.lastCredit||0)>.08&&(s.lastCredit=n.time,n.addCredits(Ee.hit,null,!0)),n.ui.hitmarker(!1,!1),s.hp<=0&&this.killBoss()}washBoss(t,e,i,n,s,a){let o=this.boss;if(!(!o||!o.alive||!o.active)){if(i!==void 0){Math.hypot(o.x-i,o.z-n)<s+2.3&&(o.shield=Math.max(0,o.shield-a*4),o.lastWash=this.game.time);return}o.shield=Math.max(0,o.shield-t),o.lastWash=this.game.time,e&&Math.random()<.5&&this.game.particles.mist(e.x,e.y,e.z)}}killBoss(){let t=this.game,e=this.boss;e.alive=!1,e.hp=0,t.particles.burst(e.x,2.2,e.z,13650592,200,14,.3),t.effects.explosion(e.x,2.2,e.z,7,"fire"),setTimeout(()=>t.effects.explosion(e.x+2,1.5,e.z-1,4,"fire"),250),setTimeout(()=>t.effects.explosion(e.x-2,2.5,e.z+1,5,"fire"),500),t.particles.goo(e.x,2.2,e.z,7012154,80,10),t.audio.boom(),t.scene.remove(e.grp),this.purgeAll(),t.addCredits(1e4,null,!1,"BLOOM MOTHER DESTROYED"),t.onBossDefeated()}updateBoss(t){let e=this.game,i=this.boss,n=e.player;if(!i.alive)return;let s=e.time,a=i.active?Math.min(1,i.grp.scale.x+t*.5):.6;i.grp.scale.setScalar(a),i.core.rotation.y+=t*.3;let o=1+Math.sin(s*2)*.04;if(i.core.scale.setScalar(o),i.shell.visible=i.shield>0,i.shell.scale.setScalar(o*(.9+.1*i.shield/i.maxShield)),i.shellMat.opacity=.2+.45*i.shield/i.maxShield,i.tentacles.forEach((h,u)=>{h.rotation.z=Math.sin(s*1.5+u)*.5-.3,h.rotation.x=Math.cos(s*1.2+u*2)*.3}),i.flash>0&&(i.flash-=t,i.coreMat.emissive.setHex(i.flash>0?11156090:3803690)),!i.active)return;s-i.lastWash>6&&i.shield<i.maxShield&&(i.shield=Math.min(i.maxShield,i.shield+60*t));let l=Math.hypot(n.pos.x-i.x,n.pos.z-i.z);i.volleyT-=t,i.summonT-=t,i.slamT-=t;let c=1+(1-i.hp/i.maxHp)*.8;if(i.volleyT<=0&&(i.volleyT=3.6/c,e.level.lineOfSight(i.x,3.5,i.z,n.pos.x,n.pos.y+1,n.pos.z))){for(let h=0;h<5;h++){let u=new R(i.x,3.6,i.z),f=new R(n.pos.x+(Math.random()-.5)*3,n.pos.y+.8,n.pos.z+(Math.random()-.5)*3).clone().sub(u),p=Math.hypot(f.x,f.z),x=Math.max(.6,p/11);this.addProjectile(u,new R(f.x/x,f.y/x+.5*9*x,f.z/x),18,13656319,9,1.8)}e.audio.spit()}if(i.summonT<=0&&(i.summonT=13/c,this.list.length<18))for(let h=0;h<3;h++){let u=Math.random()*Math.PI*2,d=i.x+Math.cos(u)*4.5,f=i.z+Math.sin(u)*4.5;e.level.blockedCircle(d,f,.5,0,.45)||this.spawn(Math.random()<.25?"spitter":"sludger",d,f)}if(i.slamT<=0&&l<6.5&&(i.slamT=3.5,e.particles.burst(i.x,.3,i.z,7012154,60,10,.2),e.audio.boom(),e.shake=Math.max(e.shake,.4),n.onGround||n.pos.y<.6)){n.damage(28,{x:i.x,z:i.z});let h=12;n.vel.x+=(n.pos.x-i.x)/(l||1)*h,n.vel.z+=(n.pos.z-i.z)/(l||1)*h,n.vel.y=5,n.onGround=!1}}clearAll(){for(let t of this.list)this.group.remove(t.mesh);for(let t of this.projectiles)this.group.remove(t.mesh);for(let t of this.pickups)this.group.remove(t.mesh);this.list=[],this.projectiles=[],this.pickups=[],this.spawnTimer=4}};var Sr=new R;function xi(r,t,e,i,n,s){let a=2*Math.PI*n/4,o=Math.max(s-2*n,0),l=Math.PI/4;Sr.copy(t),Sr[i]=0,Sr.normalize();let c=.5*a/(a+o),h=1-Sr.angleTo(r)/l;return Math.sign(Sr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var ca=class extends Ze{constructor(t=1,e=1,i=1,n=2,s=.1){if(n=n*2+1,s=Math.min(t/2,e/2,i/2,s),super(1,1,1,n,n,n),n===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new R,l=new R,c=new R(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new R,x=.5/n;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*s,h[g+1]=c.y*Math.sign(o.y)+l.y*s,h[g+2]=c.z*Math.sign(o.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=xi(p,l,"z","y",s,i),d[m+1]=1-xi(p,l,"y","z",s,e);break;case 1:p.set(-1,0,0),d[m+0]=1-xi(p,l,"z","y",s,i),d[m+1]=1-xi(p,l,"y","z",s,e);break;case 2:p.set(0,1,0),d[m+0]=1-xi(p,l,"x","z",s,t),d[m+1]=xi(p,l,"z","x",s,i);break;case 3:p.set(0,-1,0),d[m+0]=1-xi(p,l,"x","z",s,t),d[m+1]=1-xi(p,l,"z","x",s,i);break;case 4:p.set(0,0,1),d[m+0]=1-xi(p,l,"x","y",s,t),d[m+1]=1-xi(p,l,"y","x",s,e);break;case 5:p.set(0,0,-1),d[m+0]=xi(p,l,"x","y",s,t),d[m+1]=1-xi(p,l,"y","x",s,e);break}}};var ah=null,Fe={};function on(){return Fe.ready||(Fe.gunmetal=new $t({color:2830134,metalness:.85,roughness:.32}),Fe.steel=new $t({color:10134445,metalness:.95,roughness:.22}),Fe.dark=new $t({color:1184791,metalness:.6,roughness:.45}),Fe.polymer=new $t({color:1908772,metalness:.1,roughness:.75}),Fe.brass=new $t({color:13213763,metalness:1,roughness:.3}),Fe.shell=new $t({color:11545114,metalness:.2,roughness:.5}),Fe.glass=new $t({color:3837183,metalness:.2,roughness:.05,emissive:666197,emissiveIntensity:.6}),Fe.glowCyan=new Jt({color:new gt(.2,2.2,3)}),Fe.glowRed=new Jt({color:new gt(3,.2,.15)}),Fe.glowGreen=new Jt({color:new gt(.4,3,.5)}),Fe.glowPink=new Jt({color:new gt(3,.4,2.6)}),Fe.robot=new $t({color:3817287,metalness:.9,roughness:.28}),Fe.robotPlate=new $t({color:14262811,metalness:.55,roughness:.35}),Fe.robotJoint=new $t({color:1382170,metalness:.7,roughness:.4}),Fe.ready=!0),Fe}function ai(r,t=.6,e=.4){return new $t({color:r,metalness:t,roughness:e})}function st(r,t,e,i,n,s=0,a=0,o=0,l=.006){let c=Math.min(l,t/2.01,e/2.01,i/2.01),h=new tt(new ca(t,e,i,2,c),n);return h.position.set(s,a,o),r.add(h),h}function Vt(r,t,e,i,n=0,s=0,a=0,o=16,l){let c=new tt(new be(t,l===void 0?t:l,e,o),i);return c.rotation.x=Math.PI/2,c.position.set(n,s,a),r.add(c),c}function te(r,t=0,e=0,i=0){let n=new se;return n.position.set(t,e,i),r.add(n),n}function py(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,235,1)"),e.addColorStop(.25,"rgba(255,200,90,0.95)"),e.addColorStop(1,"rgba(255,110,0,0)"),t.fillStyle=e,t.beginPath();for(let c=0;c<16;c++){let h=c/16*Math.PI*2,u=c%2?22:64;t.lineTo(64+Math.cos(h)*u,64+Math.sin(h)*u)}t.fill();let i=new ri(r);i.colorSpace=ye;let n=new Jt({map:i,transparent:!0,blending:Ye,depthWrite:!1,color:new gt(3,2.6,2)}),s=new se,a=new tt(new He(.2,.2),n);s.add(a);let o=new tt(new He(.1,.28),n);o.rotation.y=Math.PI/2,o.position.z=-.1,o.rotation.z=Math.PI/2,s.add(o);let l=o.clone();return l.rotation.x=Math.PI/2,s.add(l),s.visible=!1,s}function ha(r,t=1,e=.9){let i=on(),n=te(r);st(n,.05,.065,.075,i.robot,0,0,0,.012),st(n,.052,.02,.05,i.robotPlate,0,.034,.005,.006);let s=st(n,.004,.035,.03,i.glowCyan,t*.026,0,0,.001);for(let o=0;o<4;o++){let l=te(n,-t*.005,.022-o*.016,-.04),c=st(l,.014,.013,.03,i.robot,0,0,-.012,.004),h=te(l,0,0,-.027);h.add(new tt(new Je(.008,8,6),i.robotJoint));let u=st(h,.013,.012,.024,i.robot,0,0,-.012,.004);l.rotation.y=-t*e*1.2,h.rotation.y=-t*e*1.3}let a=te(n,-t*.022,.02,-.01);return st(a,.014,.014,.035,i.robot,0,0,-.016,.004),a.rotation.y=t*.5,a.rotation.x=.3,n}function ua(r,t=1,e=.34){let i=on(),n=te(r);n.add(new tt(new Je(.024,12,10),i.robotJoint)),Vt(n,.022,e,i.robot,0,0,e/2+.01,14,.03);let s=st(n,.062,.05,e*.55,i.robotPlate,0,.012,e*.42,.012);s.rotation.z=t*.25,st(n,.064,.036,.05,i.robotJoint,0,0,e*.08,.008);let a=st(n,.006,.006,e*.5,i.glowCyan,t*.034,.012,e*.42,.002);Vt(n,.006,e*.5,i.steel,-t*.028,-.02,e*.4,8);let o=new tt(new Je(.034,12,10),i.robotJoint);return o.position.z=e+.01,n.add(o),n}function Ii(r,t,e,i={}){let n=te(r,...t);ha(n,1,i.rightGrip??.9);let s=ua(n,1,.36);if(s.position.set(.01,-.03,.03),s.rotation.set(.35,-.12,0),r.userData.rightHand=n,e){let a=te(r,...e);ha(a,-1,i.leftGrip??.8);let o=ua(a,-1,.4);o.position.set(-.01,-.03,.03),o.rotation.set(.3,-.75,0),r.userData.leftHand=a,r.userData.leftRest=a.position.clone()}}function my(r,t){return t?(ah||(ah=fd()),new $t({map:ah,emissive:3803744,emissiveIntensity:.7,roughness:.25,metalness:.7})):ai(r.color,.55,.42)}function gd(r,t,e,i){let n=on();st(r,.026,.008,t,n.dark,0,e,i,.002);for(let s=0;s<t/.012;s++)st(r,.03,.005,.005,n.dark,0,e+.006,i-t/2+s*.012+.006,.001)}function lh(r,t,e,i){let n=on();st(r,.032,.012,.05,n.dark,0,t,e,.003);let s=te(r,0,t+.024,e-.01);st(s,.004,.036,.008,n.dark,-.016,0,0,.002),st(s,.004,.036,.008,n.dark,.016,0,0,.002),st(s,.036,.004,.008,n.dark,0,.018,0,.002);let a=new tt(new He(.028,.03),new $t({color:6728447,transparent:!0,opacity:.25,metalness:.2,roughness:.05}));s.add(a);let o=new tt(new nn(.0022,10),i);return o.position.z=-.001,s.add(o),t+.024}function xd(r,t,e,i,n){let s=on(),a=te(r,0,t,e);Vt(a,.02,i,s.gunmetal,0,0,0,20),Vt(a,.028,.06,s.gunmetal,0,0,-i/2,20,.022),Vt(a,.025,.05,s.gunmetal,0,0,i/2,20,.02),Vt(a,.024,.03,s.dark,0,.022,0,12).rotation.x=0;let o=new tt(new nn(.026,20),s.glass);o.position.z=-i/2-.031,o.rotation.y=Math.PI,a.add(o);let l=new tt(new nn(.02,20),s.glass);return l.position.z=i/2+.026,a.add(l),st(r,.014,.024,.02,s.dark,0,t-.024,e-i*.25,.003),st(r,.014,.024,.02,s.dark,0,t-.024,e+i*.25,.003),a}function yd(r,t){let e=we[r],i=on(),n=my(e,t),s=ai(e.accent,.5,.5),a=t?i.glowPink:r==="sidearm"||r==="cannon"?i.glowGreen:i.glowRed,o=new se,l={},c=-.3,h=.06,u=new R(.03,.03,-.08);if(r==="sidearm"){st(o,.036,.032,.2,i.polymer,0,-.005,-.08,.008),l.slide=te(o),st(l.slide,.04,.034,.21,n,0,.028,-.085,.008);for(let x=0;x<6;x++)st(l.slide,.042,.024,.004,i.dark,0,.028,-.005-x*.008,.001);st(l.slide,.006,.008,.006,a,0,.05,-.18,.002),st(l.slide,.022,.008,.006,i.dark,0,.05,.01,.002),Vt(o,.007,.03,i.dark,0,.026,-.2);let p=st(o,.034,.11,.05,i.polymer,0,-.07,0,.01);p.rotation.x=-.22,l.mag=te(o,0,-.07,.003),st(l.mag,.026,.1,.038,i.dark,0,-.012,0,.004),l.mag.rotation.x=-.22,l.magRest=l.mag.position.clone(),st(o,.008,.03,.03,i.dark,0,-.03,-.035,.004),c=-.215,h=.058,u.set(.025,.035,-.06),Ii(o,[0,-.085,.01],[-.02,-.095,0],{leftGrip:1.1})}else if(r==="cannon"){st(o,.036,.05,.12,n,0,.012,-.03,.008),Vt(o,.014,.2,n,0,.028,-.18,18),st(o,.02,.026,.2,n,0,.012,-.18,.006),st(o,.008,.012,.18,i.dark,0,.046,-.17,.003),st(o,.006,.01,.006,a,0,.056,-.27,.002),l.cylPivot=te(o,-0,-.002,-.06),l.cylinder=te(l.cylPivot,0,.02,0);let p=Vt(l.cylinder,.03,.06,i.steel,0,0,0,6);p.rotation.z=Math.PI/6;for(let g=0;g<6;g++){let m=g/6*Math.PI*2;Vt(l.cylinder,.007,.062,i.dark,Math.cos(m)*.018,Math.sin(m)*.018,0,8)}l.hammer=te(o,0,.035,.03),st(l.hammer,.01,.03,.012,i.steel,0,.01,0,.003),l.hammer.rotation.x=0;let x=st(o,.034,.1,.05,ai(4860954,.1,.7),0,-.06,.035,.012);x.rotation.x=-.35,c=-.285,h=.058,u=null,Ii(o,[0,-.075,.04],[-.02,-.085,.03],{leftGrip:1.1})}else if(r==="hornet"){st(o,.044,.06,.24,n,0,0,-.1,.01),st(o,.04,.04,.1,i.polymer,0,-.005,-.27,.01),Vt(o,.012,.06,i.dark,0,.005,-.34),gd(o,.18,.034,-.1),h=lh(o,.042,-.06,a),l.bolt=te(o,.024,.016,-.05),st(l.bolt,.012,.012,.025,i.steel,0,0,0,.003);let p=st(o,.034,.1,.045,i.polymer,0,-.07,0,.01);p.rotation.x=-.25,l.mag=te(o,0,-.04,-.13),st(l.mag,.028,.16,.035,i.dark,0,-.07,0,.005),l.mag.rotation.x=.12,l.magRest=l.mag.position.clone(),st(o,.03,.03,.14,i.polymer,0,-.005,.08,.008),st(o,.004,.012,.08,a,.023,.01,-.13,.002),c=-.37,u.set(.03,.02,-.06),Ii(o,[0,-.08,.01],[-.005,-.06,-.25])}else if(r==="scatter"){st(o,.042,.06,.2,n,0,0,-.05,.01),Vt(o,.016,.5,i.gunmetal,0,.018,-.38,16),Vt(o,.014,.42,i.dark,0,-.016,-.33,14),l.pump=te(o,0,-.016,-.32),st(l.pump,.044,.04,.14,ai(3811866,.1,.7),0,0,0,.012);for(let _=0;_<6;_++)st(l.pump,.046,.004,.006,i.dark,0,0,-.05+_*.02,.001);l.pumpRest=l.pump.position.z,st(o,.008,.008,.008,a,0,.04,-.6,.002);let p=st(o,.038,.07,.24,ai(4863268,.1,.65),0,-.02,.15,.015);p.rotation.x=.12;let x=st(o,.034,.09,.045,ai(4863268,.1,.65),0,-.06,.03,.01);x.rotation.x=-.3,l.shell=te(o,0,-.05,-.1),Vt(l.shell,.009,.05,i.shell,0,0,0,10),Vt(l.shell,.0095,.012,i.brass,0,0,.022,10),l.shell.visible=!1,st(o,.02,.016,.06,i.dark,.022,.012,-.06,.003),c=-.64,u.set(.03,.015,-.06),Ii(o,[0,-.075,.03],null);let g=te(l.pump,-.005,-.03,0);ha(g,-1,.8);let m=ua(g,-1,.4);m.position.set(-.01,-.03,.03),m.rotation.set(.3,-.75,0),o.userData.leftHand=g}else if(r==="vanguard"){st(o,.044,.06,.3,n,0,0,-.12,.009),st(o,.048,.048,.22,i.polymer,0,.006,-.36,.012);for(let g=0;g<5;g++)st(o,.05,.02,.012,i.dark,0,0,-.28-g*.035,.003);Vt(o,.011,.14,i.dark,0,.008,-.53),Vt(o,.017,.05,i.dark,0,.008,-.6,8),gd(o,.42,.034,-.2),h=lh(o,.042,-.08,a),l.charge=te(o,0,.03,.04),st(l.charge,.05,.008,.012,i.dark,0,0,0,.002),l.chargeRest=l.charge.position.z,l.bolt=te(o,.023,.012,-.08),st(l.bolt,.004,.018,.05,i.steel,0,0,0,.002);let p=st(o,.034,.1,.045,i.polymer,0,-.07,0,.01);p.rotation.x=-.25,l.mag=te(o,0,-.035,-.13);let x=st(l.mag,.03,.15,.06,i.dark,0,-.07,0,.006);x.rotation.x=.22,l.magRest=l.mag.position.clone(),st(o,.04,.07,.2,i.polymer,0,-.02,.14,.014),st(o,.004,.01,.1,a,.025,-.008,-.36,.002),c=-.63,u.set(.03,.02,-.06),Ii(o,[0,-.08,.01],[-.005,-.04,-.36])}else if(r==="mauler"){st(o,.06,.075,.34,n,0,0,-.12,.01),l.lid=te(o,0,.038,.02),st(l.lid,.058,.014,.18,s,0,.004,-.09,.005),Vt(o,.02,.4,i.gunmetal,0,0,-.46,16);for(let x=0;x<8;x++)Vt(o,.023,.012,i.dark,0,0,-.32-x*.03,16);Vt(o,.026,.05,i.dark,0,0,-.68,10),l.box=te(o,0,-.065,-.1),st(l.box,.08,.09,.1,ai(4867632,.3,.6),.02,-.02,0,.01),l.boxRest=l.box.position.clone(),l.belt=te(o,.03,0,-.1);for(let x=0;x<5;x++)Vt(l.belt,.006,.03,i.brass,0,-.01-x*.012,0,8).rotation.set(0,0,Math.PI/2);let p=st(o,.036,.1,.05,i.polymer,0,-.08,.02,.01);p.rotation.x=-.25,st(o,.05,.08,.22,i.polymer,0,-.02,.17,.016),st(o,.044,.03,.1,i.polymer,0,-.04,-.3,.008),h=lh(o,.05,-.02,a),st(o,.004,.012,.16,a,.032,0,-.12,.002),c=-.72,u.set(-.035,0,-.08),Ii(o,[0,-.09,.03],[-.005,-.05,-.32])}else if(r==="marksman"){st(o,.044,.065,.32,n,0,0,-.12,.01),st(o,.05,.05,.26,i.polymer,0,0,-.4,.014),Vt(o,.012,.2,i.dark,0,.005,-.62),Vt(o,.02,.07,i.dark,0,.005,-.74,8),l.scope=xd(o,.075,-.13,.26,a),l.bolt=te(o,.024,.012,-.06),st(l.bolt,.006,.02,.05,i.steel,0,0,0,.002);let p=st(o,.034,.1,.045,i.polymer,0,-.07,0,.01);p.rotation.x=-.25,l.mag=te(o,0,-.035,-.14),st(l.mag,.03,.1,.06,i.dark,0,-.05,0,.006),l.magRest=l.mag.position.clone();let x=st(o,.042,.09,.24,ai(5922640,.2,.6),0,-.02,.15,.016);st(o,.004,.01,.12,a,.026,-.005,-.4,.002),c=-.78,h=.075,u.set(.03,.02,-.06),Ii(o,[0,-.08,.01],[-.005,-.045,-.4])}else if(r==="longbow"){let p=ai(3824186,.2,.55);st(o,.05,.06,.7,p,0,-.01,-.12,.016),st(o,.04,.05,.22,i.gunmetal,0,.022,-.06,.01),Vt(o,.014,.55,i.gunmetal,0,.022,-.6,18,.012),st(o,.034,.034,.08,i.dark,0,.022,-.9,.008);for(let M=0;M<3;M++)st(o,.036,.008,.012,i.steel,0,.022,-.88-M*.022,.002);l.scope=xd(o,.09,-.08,.36,a),l.bolt=te(o,.026,.028,.03),Vt(l.bolt,.008,.05,i.steel,0,0,-.025,10);let x=te(l.bolt,0,0,0);l.boltHandle=x;let g=st(x,.05,.007,.007,i.steel,.025,0,0,.003),m=new tt(new Je(.011,12,10),i.dark);m.position.x=.05,x.add(m),l.boltRest=l.bolt.position.z;let _=st(o,.036,.1,.05,p,0,-.08,.02,.012);_.rotation.x=-.3,l.mag=te(o,0,-.045,-.08),st(l.mag,.032,.05,.08,i.dark,0,-.02,0,.006),l.magRest=l.mag.position.clone(),st(o,.05,.03,.08,p,0,.03,.16,.01),st(o,.004,.012,.3,a,.026,-.01,-.3,.002),c=-.95,h=.09,u.set(.03,.03,-.04),Ii(o,[0,-.09,.03],[-.005,-.06,-.42])}let d=new _e;d.position.set(0,r==="cannon"?.028:r==="sidearm"?.026:.012,c),o.add(d);let f=py();return f.position.copy(d.position),o.add(f),r==="scatter"&&f.scale.setScalar(1.8),(r==="longbow"||r==="cannon")&&f.scale.setScalar(1.5),o.userData.muzzle=d,o.userData.flash=f,o.userData.parts=l,o.userData.eject=u,o.userData.sightY=h,o.userData.id=r,o}function Er(r,t,e=.006){let i=new Bo(r,{depth:e,bevelEnabled:!0,bevelThickness:.0025,bevelSize:.0035,bevelSegments:2});return i.translate(0,0,-e/2),i.computeVertexNormals(),new tt(i,t)}function ch(r){let t=Pi[r],e=on(),i=new $t({color:t.color,metalness:.95,roughness:.15}),n=new $t({color:t.handle,metalness:.35,roughness:.55}),s=new se,a=new se,o=new fr;if(t.kind==="karambit"){o.moveTo(0,0),o.quadraticCurveTo(.09,-.005,.15,-.075),o.quadraticCurveTo(.12,-.02,.02,.03),o.lineTo(0,.025),a.add(Er(o,i));let u=new tt(new bn(.022,.006,10,24),n);u.position.set(-.13,0,0),a.add(u),st(a,.11,.028,.018,n,-.06,.012,0,.007),st(a,.09,.004,.019,e.glowCyan,-.06,.012,0,.001)}else if(t.kind==="butterfly"){o.moveTo(0,0),o.lineTo(.13,.004),o.lineTo(.16,.02),o.lineTo(.12,.028),o.lineTo(0,.026),a.add(Er(o,i));let u=new se,d=new se;for(let f of[u,d]){st(f,.12,.012,.016,n,-.06,.006,0,.005);for(let p=0;p<4;p++)st(f,.014,.004,.017,e.robotJoint,-.02-p*.025,.006,0,.001)}u.position.set(0,.022,.01),d.position.set(0,.004,-.01),a.add(u),a.add(d),s.userData.h1=u,s.userData.h2=d}else if(t.kind==="bayonet")o.moveTo(0,0),o.lineTo(.2,.006),o.lineTo(.23,.02),o.lineTo(.19,.032),o.lineTo(0,.032),a.add(Er(o,i,.007)),st(a,.012,.06,.03,e.steel,-.005,.016,0,.004),st(a,.12,.03,.024,n,-.07,.016,0,.01);else if(t.kind==="huntsman"){o.moveTo(0,0),o.lineTo(.17,0),o.quadraticCurveTo(.21,.01,.22,.03),o.lineTo(.15,.036);for(let u=.15;u>.02;u-=.02)o.lineTo(u-.01,.046),o.lineTo(u-.02,.038);o.lineTo(0,.038),a.add(Er(o,i,.008)),st(a,.015,.07,.03,e.steel,-.005,.018,0,.004),st(a,.12,.034,.026,n,-.07,.018,0,.012)}else o.moveTo(0,0),o.lineTo(.15,.004),o.lineTo(.18,.02),o.lineTo(.14,.03),o.lineTo(0,.03),a.add(Er(o,i)),st(a,.012,.05,.026,e.steel,-.005,.015,0,.004),st(a,.11,.028,.022,n,-.065,.015,0,.01);a.rotation.y=Math.PI/2;let l=new se;l.add(a),l.rotation.x=.5,s.add(l),s.userData.knife=a,s.userData.holder=l,s.userData.kind=t.kind;let c=te(s,0,-.005,.07);ha(c,1,1.15);let h=ua(c,1,.36);return h.position.set(.01,-.03,.03),h.rotation.set(.35,-.12,0),s.userData.sightY=.05,s}function vd(r){let t=on(),e=new se,i={},n=ai(14725152,.35,.4);if(r==="vacuum"){let s=Vt(e,.08,.3,n,.06,-.08,.05,24);Vt(e,.082,.02,t.dark,.06,-.08,-.09,24),Vt(e,.082,.02,t.dark,.06,-.08,.19,24),i.window=te(e,.06,-.08,.05);let a=Vt(i.window,.084,.16,new $t({color:8965375,transparent:!0,opacity:.25,roughness:.05}),0,0,0,24);i.fill=Vt(i.window,.07,.16,ai(8020032,.1,.9),0,0,0,20),e.userData.fill=i.fill,Vt(e,.024,.55,t.gunmetal,0,-.02,-.3,16);for(let u=0;u<6;u++)Vt(e,.028,.01,t.dark,0,-.02,-.12-u*.07,16);i.head=te(e,0,-.02,-.62),Vt(i.head,.035,.12,t.steel,0,0,0,20,.075);let o=new tt(new bn(.072,.006,8,28),t.glowCyan);o.position.z=-.06,i.head.add(o),i.ring=o;let l=new tt(new bn(.09,.016,10,20,Math.PI),t.dark);l.position.set(.05,-.06,-.12),l.rotation.y=Math.PI/2,e.add(l);let c=st(e,.034,.1,.045,t.polymer,0,-.07,-.05,.01);c.rotation.x=-.2;let h=new _e;h.position.set(0,-.02,-.7),e.add(h),e.userData.muzzle=h,Ii(e,[0,-.1,-.04],[-.005,-.05,-.34])}else if(r==="washer"){let s=ai(2781119,.4,.35);st(e,.06,.09,.2,s,0,-.01,0,.014),i.lance=te(e),Vt(i.lance,.011,.7,t.steel,0,.02,-.45,14),Vt(i.lance,.02,.06,t.dark,0,.02,-.82,14,.014);let a=Vt(i.lance,.008,.02,t.glowCyan,0,.02,-.855,10),o=st(e,.036,.1,.05,t.polymer,0,-.08,0,.01);o.rotation.x=-.2,st(e,.04,.03,.16,t.polymer,0,-0,-.28,.008);let l=Vt(e,.05,.18,new $t({color:8374527,transparent:!0,opacity:.6,roughness:.05,metalness:.1}),-.075,0,0,20);e.userData.fill=l;let c=new tt(new nn(.018,16),t.glowCyan);c.position.set(.031,.01,-.02),c.rotation.y=Math.PI/2,e.add(c);let h=new _e;h.position.set(0,.02,-.87),e.add(h),e.userData.muzzle=h,Ii(e,[0,-.09,.01],[-.005,-.04,-.28])}else{let s=ai(11545114,.4,.4),a=Vt(e,.065,.28,s,0,-.1,-.03,20);e.userData.fill=a,Vt(e,.067,.02,t.dark,0,-.1,-.14,20),st(e,.06,.07,.25,t.gunmetal,0,0,-.05,.012),Vt(e,.022,.4,t.steel,0,.01,-.35,14);for(let c=0;c<5;c++)Vt(e,.03,.008,t.dark,0,.01,-.3-c*.04,14);Vt(e,.04,.1,t.dark,0,.01,-.58,16,.03),i.pilot=new tt(new Je(.012,10,8),new Jt({color:new gt(.6,1.4,4)})),i.pilot.position.set(0,-.025,-.6),e.add(i.pilot),e.userData.pilot=i.pilot;let o=st(e,.036,.1,.05,t.polymer,0,-.08,.04,.01);o.rotation.x=-.2;let l=new _e;l.position.set(0,.01,-.64),e.add(l),e.userData.muzzle=l,Ii(e,[0,-.09,.05],[-.005,-.04,-.33])}return e.userData.parts=i,e.userData.sightY=.05,e}var da=class{constructor(t){let e=on();this.list=[],this.geo=new be(.0026,.0026,.012,8),this.shellGeo=new be(.005,.005,.022,8);for(let i=0;i<24;i++){let n=new tt(this.geo,e.brass);n.visible=!1,t.add(n),this.list.push({mesh:n,vel:new R,spin:new R,t:0})}this.i=0,this.m=e}eject(t,e=!1){if(!t||!t.userData.eject)return;let i=this.list[this.i++%this.list.length];i.mesh.geometry=e?this.shellGeo:this.geo,i.mesh.material=e?this.m.shell:this.m.brass;let n=t.userData.eject.clone();t.localToWorld(n),i.mesh.position.copy(n),i.mesh.visible=!0,i.vel.set(.45+Math.random()*.3,.55+Math.random()*.3,.1+Math.random()*.15),i.spin.set(Math.random()*20,Math.random()*20,Math.random()*20),i.t=.6}update(t){for(let e of this.list)e.t<=0||(e.t-=t,e.vel.y-=4.5*t,e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t,e.mesh.rotation.z+=e.spin.z*t,e.t<=0&&(e.mesh.visible=!1))}};var Ve=Math.PI*2,_d=r=>r<0?0:r>1?1:r,Le=r=>(r=_d(r),r*r*(3-2*r)),re=(r,t,e)=>{if(r<=t||r>=e)return 0;let i=(r-t)/(e-t);return Math.sin(i*Math.PI)},Qt=(r,t,e,i=.1)=>r<=t||r>=e?0:Math.min(Le((r-t)/i),Le((e-r)/i)),an=(r,t,e)=>Le((r-t)/(e-t)),Te=(r,t)=>Math.exp(-r*t);function An(r,t,e,i,n,s,a=.3){if(!r.mag)return;let o=r.magRest;if(r.mag.visible=!0,t>=e&&t<n){let l=an(t,e,i);r.mag.position.set(o.x-l*.02,o.y-l*a,o.z+l*.03),r.mag.rotation.z=l*.6,t>i+.02&&(r.mag.visible=!1)}else if(t>=n&&t<s+.001){let l=an(t,n,s);r.mag.position.set(o.x-(1-l)*.04,o.y-(1-l)*.2,o.z+(1-l)*.02),r.mag.rotation.z=(1-l)*-.3}else r.mag.position.copy(o),r.mag.rotation.z=0}function Bi(r,t,e){let i=r.userData.leftHand,n=r.userData.leftRest;!i||!n||i.position.set(n.x+(t.x-n.x)*e,n.y+(t.y-n.y)*e,n.z+(t.z-n.z)*e)}function Md(r,t,e,i,n){let s=r.userData.parts||{},{fT:a,rP:o,dT:l,iP:c}=e,h=o>=0,u=h?o:0,d=c>=0?c:-1;switch(r.userData.leftRest&&!h&&Bi(r,r.userData.leftRest,0),t){case"sidearm":{s.slide&&(s.slide.position.z=.032*Math.max(re(a,0,.09)*(a<.045,1),0)+(e.mag===0&&!h?.032:0)+.035*re(u,.78,.92)),i.rot.x+=.14*Te(a,16),i.pos.z+=.02*Te(a,20),h?(i.rot.z+=.5*Qt(u,0,1,.15),i.rot.x+=.15*Qt(u,0,1,.15),i.pos.y+=.02*Qt(u,0,1),An(s,u,.1,.32,.42,.62,.35),Bi(r,{x:-.03,y:-.2,z:.02},re(u,.3,.68))):An(s,1,0,0,0,0),i.rot.z-=Le(l)*Ve,i.pos.y-=l*.08,d>=0&&(i.rot.y+=Math.sin(d*Ve)*.7,i.rot.z+=Qt(d,.35,.85,.12)*Math.PI,i.pos.x-=re(d,0,1)*.06);break}case"cannon":{if(i.rot.x+=.5*Te(a,8),i.pos.z+=.06*Te(a,11),i.pos.y+=.02*Te(a,9),s.hammer&&(s.hammer.rotation.x=a<.04?0:-.6*_d((a-.04)/.25)*(a<.6?1:0)),s.hammer&&a>=.6&&(s.hammer.rotation.x=-.6),s.cylinder){let f=e.shots*(Ve/6)+(a<.15?-(1-a/.15)*(Ve/6):0);s.cylinder.rotation.z=f+(h?an(u,.3,.75)*Ve*3:0)+Le(l)*Ve*2}if(s.cylPivot){let f=Qt(u,.1,.88,.1);s.cylPivot.position.x=-.045*f,s.cylPivot.rotation.z=.8*f}if(h){if(i.rot.z+=.75*Qt(u,.05,.9,.12)-.25*re(u,.86,.98),i.rot.x-=.5*re(u,.15,.35),u>.24&&!e.flags.ejected){e.flags.ejected=!0;for(let f=0;f<6;f++)n.casingAt(r,-.05,.02,-.06)}Bi(r,{x:-.06,y:-.04,z:-.05},re(u,.35,.8))}if(i.rot.x-=Le(l)*Ve,i.pos.y-=l*.05,d>=0){let f=d<.75?an(d,0,.75):1;i.rot.x+=f*Ve*2,i.pos.y+=re(d,0,.75)*.03}break}case"hornet":{a<.08&&(i.pos.x+=(Math.random()-.5)*.006,i.pos.y+=(Math.random()-.5)*.006),i.rot.x+=.06*Te(a,25),i.pos.z+=.015*Te(a,25),s.bolt&&(s.bolt.position.z=-.05+.02*Te(a,30)+.04*re(u,.76,.92)),h?(i.rot.z-=.7*Qt(u,0,1,.14),i.rot.x+=.2*Qt(u,0,1,.14),i.pos.x-=.03*Qt(u,0,1),An(s,u,.14,.36,.45,.66),Bi(r,{x:-.02,y:-.22,z:-.13},re(u,.3,.7)),i.rot.y+=.25*re(u,.74,.9)):An(s,1,0,0,0,0),i.pos.x+=l*.25,i.rot.z-=l*1,i.rot.y+=l*.4,d>=0&&(i.rot.z+=Qt(d,.2,.85,.15)*Math.PI,i.rot.y+=Math.sin(d*Ve)*.35);break}case"scatter":{i.rot.x+=.42*Te(a,9),i.pos.z+=.08*Te(a,11);let f=re(a,.16,.5),p=f;if(i.rot.z+=.18*f,i.rot.x-=.06*f,a>.3&&!e.flags.shellOut&&(e.flags.shellOut=!0,n.casing(r,!0)),h){let x=Le(Math.min(1,e.reloadTime/.25))*(e.reloadPhase==="close"?1-Le(e.phaseT/.35):1);if(i.rot.z+=.65*x,i.rot.y-=.25*x,i.pos.x-=.03*x,i.pos.y+=.03*x,s.shell){s.shell.visible=e.reloadPhase==="shell";let g=e.shellP;s.shell.position.set(0,-.13+an(g,0,.6)*.08,-.04-an(g,.5,.9)*.08),s.shell.rotation.x=.5-an(g,.4,.8)*.5,i.pos.y+=.006*re(g,.75,1)}e.reloadPhase==="close"&&(p=re(e.phaseT/.35,0,1))}else s.shell&&(s.shell.visible=!1);p=Math.max(p,l>0&&l<.6?re(l,0,.6):0),s.pump&&(s.pump.position.z=s.pumpRest+.085*p),d>=0&&(i.rot.z+=Le(d)*Ve,i.pos.x-=re(d,0,1)*.05,i.rot.y-=re(d,0,1)*.3),i.pos.y-=l*.12,i.rot.x-=l*.4;break}case"vanguard":{i.rot.x+=.07*Te(a,20),i.pos.z+=.025*Te(a,20),s.bolt&&(s.bolt.position.z=-.08+.025*Te(a,35));let f=0;h?(i.rot.z+=.5*Qt(u,0,1,.14),i.rot.x+=.12*Qt(u,0,1,.14),An(s,u,.1,.34,.44,.62,.35),i.pos.y+=.012*re(u,.6,.68),Bi(r,{x:-.01,y:-.2,z:-.13},re(u,.28,.68)),f=re(u,.76,.93),i.rot.y-=.3*f,f>0&&Bi(r,{x:0,y:.03,z:.05},f)):An(s,1,0,0,0,0),f=Math.max(f,re(1-l,.35,.85)*(l>0?1:0)),s.charge&&(s.charge.position.z=s.chargeRest+.06*f),i.rot.z-=l*.8,i.pos.y-=l*.1,d>=0&&(i.rot.y-=Qt(d,.05,.55,.12)*.9,i.rot.z+=Qt(d,.5,.95,.12)*.7,i.pos.x-=re(d,0,1)*.05,re(d,.3,.4)>.5&&(i.pos.y+=.006));break}case"mauler":{if(a<.1&&(i.rot.z+=(Math.random()-.5)*.03,i.rot.y+=(Math.random()-.5)*.02),i.pos.z+=.03*Te(a,16),i.rot.x+=.04*Te(a,16),s.belt&&(s.belt.position.y=-.006*(e.shots%2)),h){if(i.rot.x+=.3*Qt(u,0,1,.15),i.rot.z-=.25*Qt(u,0,1,.15),s.lid&&(s.lid.rotation.x=-1.3*Qt(u,.08,.84,.1)),s.box){let f=an(u,.2,.38)*(1-an(u,.45,.62));s.box.position.y=s.boxRest.y-f*.3,s.box.visible=!(u>.37&&u<.46)}s.belt&&(s.belt.visible=u<.2||u>.62),Bi(r,{x:0,y:-.15,z:-.1},re(u,.15,.7)),u>.82&&u<.88&&(i.pos.y-=.012,i.rot.z+=(Math.random()-.5)*.03)}else s.lid&&(s.lid.rotation.x=0),s.box&&(s.box.position.copy(s.boxRest),s.box.visible=!0),s.belt&&(s.belt.visible=!0);i.pos.y-=Math.pow(l,1.5)*.3,i.rot.x-=l*.5,d>=0&&(i.rot.x-=re(d,0,1)*.35,i.rot.y+=re(d,.1,.9)*.6,s.lid&&(s.lid.rotation.x=-.8*Qt(d,.3,.7)));break}case"marksman":{i.rot.x+=.16*Te(a,11),i.rot.z+=.06*Te(a,8),i.pos.z+=.035*Te(a,12),s.bolt&&(s.bolt.position.z=-.06+.03*Te(a,25)+.03*re(u,.82,.95)),h?(i.rot.z-=.55*Qt(u,0,1,.14),i.rot.y+=.15*Qt(u,0,1,.14),An(s,u,.12,.34,.44,.64,.3),Bi(r,{x:-.01,y:-.18,z:-.14},re(u,.28,.7))):An(s,1,0,0,0,0),i.pos.z+=l*.1,i.rot.y+=l*.5,i.pos.y-=l*.06,d>=0&&(i.rot.y+=Qt(d,.05,.6,.15)*.85,i.rot.x+=Qt(d,.05,.6,.15)*.15,i.rot.z-=Qt(d,.55,.95,.12)*.6);break}case"longbow":{i.rot.x+=.32*Te(a,7),i.pos.z+=.09*Te(a,10);let f=-1;a>.32&&a<1.15&&e.shots>0&&!h&&(f=(a-.32)/.8),l>0&&(f=1-l);let p=0,x=0;if(f>=0&&f<=1&&(p=Qt(f,0,1,.22),x=Qt(f,.22,.78,.2),i.rot.z+=.28*re(f,0,1),i.pos.x-=.03*re(f,0,1),f>.42&&!e.flags.boltEject&&l<=0&&(e.flags.boltEject=!0,n.casing(r)),Bi(r,{x:.03,y:.03,z:.03},Qt(f,0,1,.15))),h){p=Qt(u,0,1,.1),x=Qt(u,.08,.92,.08),i.rot.z+=.45*Qt(u,0,1,.12),i.pos.y+=.02*Qt(u,0,1);let g=.6/5;for(let m=0;m<5;m++){let _=re(u,.18+m*g,.18+(m+1)*g);i.pos.y-=.005*_}Bi(r,{x:.02,y:0,z:0},re(u,.12,.88))}s.boltHandle&&(s.boltHandle.rotation.z=1.25*p),s.bolt&&(s.bolt.position.z=s.boltRest+.075*x),d>=0&&(i.rot.y+=Qt(d,.05,.6,.15)*.7,i.rot.x-=Qt(d,.05,.6,.15)*.2,i.rot.z+=Qt(d,.55,.95,.12)*.5),i.pos.y-=l*.05;break}}}function hh(r,t,e,i){let n=r.userData.holder,{mT:s,heavy:a,alt:o,dT:l,iP:c}=e;if(n&&n.rotation.set(.5,0,0),r.userData.h1&&(r.userData.h1.rotation.x=0,r.userData.h2.rotation.x=0),s>=0){let h=s;if(a){let u=h<.4?Le(h/.4):1,d=h<.4?0:h<.6?Le((h-.4)/.2):1-Le((h-.6)/.4);i.pos.z+=u*.08-d*.28,i.pos.x-=d*.12,i.rot.x+=d*.2-u*.25,t==="karambit"&&n&&(n.rotation.z=-d*1.2)}else{let u=Math.sin(h*Math.PI),d=o?-1:1;if(t==="karambit")i.rot.y+=(.9-h*1.8)*d,i.pos.x-=u*.16*d,i.rot.z+=u*.6*d,n&&(n.rotation.z=h*Ve*d);else if(t==="butterfly")i.rot.z+=d*(h-.5)*2.2,i.rot.y+=u*.9*d,i.pos.x-=u*.18,i.pos.z-=u*.06,r.userData.h1&&(r.userData.h1.rotation.x=Math.sin(h*Ve)*.8,r.userData.h2.rotation.x=-Math.sin(h*Ve)*.8);else if(t==="bayonet")i.pos.z-=u*.26,i.pos.x-=u*.1,i.rot.x-=u*.15,i.rot.y+=u*.15;else if(t==="huntsman"){let f=h<.35?Le(h/.35):0,p=h<.35?0:h<.6?Le((h-.35)/.25):1-Le((h-.6)/.4);i.rot.x+=f*.9-p*.7,i.pos.y+=f*.08-p*.06,i.pos.x-=(f+p)*.1,i.pos.z-=p*.12}else i.rot.z+=d*(h-.5)*2.2,i.rot.y+=u*.9*d,i.pos.x-=u*.18,i.pos.y+=u*.05,i.pos.z-=u*.08}}if(l>0&&(t==="karambit"?n&&(n.rotation.z=Le(l)*Ve*2):t==="butterfly"?r.userData.h1&&(r.userData.h1.rotation.x=Le(l)*Math.PI*3,r.userData.h2.rotation.x=-Le(l)*Math.PI*3):i.rot.x+=Le(l)*Ve,i.pos.y-=l*.06),c>=0){let h=Math.sin(c*Math.PI);if(t==="butterfly"){i.rot.z+=h*.8,i.pos.x-=h*.1;let u=c*Math.PI*8;r.userData.h1&&(r.userData.h1.rotation.x=Math.sin(u)*Math.PI,r.userData.h2.rotation.x=-Math.sin(u)*Math.PI),n&&(n.rotation.z=Math.sin(u*.5)*.5)}else t==="karambit"?(n&&(n.rotation.z=c<.7?c/.7*Ve*2:0),i.rot.y-=h*.6,i.pos.x-=h*.08):t==="huntsman"?(i.rot.y-=h*1,i.rot.x+=Qt(c,.4,.9)*.6,i.pos.x-=h*.1):t==="bayonet"?(i.rot.z+=Qt(c,.1,.9)*Math.PI*(c<.5,1),i.rot.y-=h*.5,i.pos.x-=h*.08):(i.rot.y-=h*1.2,i.rot.z+=h*.9,i.pos.x-=h*.12,i.pos.y+=h*.04,n&&(n.rotation.z=Math.sin(c*Ve)*.3))}}function bd(r,t,e,i){let n=r.userData.parts||{};if(t==="vacuum"){if(n.head){let s=e.active?1+Math.sin(e.time*60)*.02:1;n.head.scale.set(s,s,1)}n.ring&&n.ring.material.color.setRGB(e.full?3:.2,e.full?.4:2.2,e.full?.2:3),e.active&&(i.pos.z+=.01*Math.sin(e.time*50),i.rot.x-=.03)}else t==="washer"?e.active&&(i.pos.z+=.012+Math.sin(e.time*70)*.004,i.rot.x+=.02+Math.sin(e.time*55)*.006):t==="torch"&&e.active&&(i.pos.x+=Math.sin(e.time*37)*.003,i.pos.y+=Math.sin(e.time*29)*.003,i.rot.x+=.02);if(i.pos.y-=e.dT*.15,i.rot.x-=e.dT*.5,e.iP>=0){let s=Math.sin(e.iP*Math.PI);i.rot.y-=s*.8,i.rot.z+=s*.5,i.pos.x-=s*.08}}var fa=["gun0","gun1","knife","vacuum","washer","torch"],pa=class{constructor(t){this.game=t,this.guns=[{id:"sidearm",mag:we.sidearm.mag,reserve:we.sidearm.reserve,refined:!1},null],this.knife="combat",this.ownedKnives={combat:!0},this.tools={vacuum:!0,washer:!1,torch:!1},this.grenades=2,this.slot="gun0",this.lastSlot="vacuum",this.tank=0,this.water=100,this.fuel=100,this.cool=0,this.reloadT=0,this.reloading=!1,this.switchT=0,this.switching=!1,this.pendingSlot=null,this.adsT=0,this.ads=!1,this.adsZoomFactor=1,this.lastShot=-10,this.meleeT=0,this.meleeHeavy=!1,this.meleeHitDone=!0,this.quickMelee=!1,this.inspectT=0,this.kick=0,this.kickRot=0,this.sway=new K,this.toolActive=!1,this.grenadesLive=[],this.throwT=0,this.vmScene=new Mn,this.vmCam=new Ue(62,1,.01,10),this.vmScene.add(new Rs(14674175,4208688,.55));let e=new xr(16773856,1.6);e.position.set(1,2,1),this.vmScene.add(e);let i=new xr(8433919,.9);i.position.set(-1.5,.5,-1),this.vmScene.add(i),this.vmRoot=new se,this.vmScene.add(this.vmRoot),this.casings=new da(this.vmScene),this.shots=0,this.animFlags={},this.flashLight=new Ri(16756832,0,9,1.6),t.scene.add(this.flashLight),this.vmFlashLight=new Ri(16756832,0,2,1.5),this.vmScene.add(this.vmFlashLight),this.models={},this.knifeVM=null,this.rebuildModel(),this.grenadeGeo=new be(.06,.06,.16,10),this.grenadeMat=new Ne({color:4177919,emissive:667728})}get current(){let t=this.slot;if(t==="gun0"||t==="gun1"){let e=this.guns[t==="gun0"?0:1];return e?{type:"gun",st:e,def:this.gunStats(e)}:null}return t==="knife"?{type:"knife",def:Pi[this.knife]}:{type:"tool",kind:t}}gunStats(t){let e=we[t.id];return t.refined?{...e,id:t.id,name:jo[t.id],dmg:e.dmg*2.2,mag:Math.round(e.mag*1.5),reserve:Math.round(e.reserve*1.5),rate:e.rate*1.1,ammoCost:e.ammoCost*3,pierce:(e.pierce||0)+1}:{...e,id:t.id}}has(t){return t==="gun0"?!!this.guns[0]:t==="gun1"?!!this.guns[1]:t==="knife"?!0:!!this.tools[t]}tankCap(){return mi.tank.values[this.game.upg.tank]}resCap(){return mi.reservoir.values[this.game.upg.reservoir]}cleanMul(){return this.game.perks.janitor?1.4:1}isFiringBlocksSprint(){let t=this.current;if(!t)return!1;let e=this.game;return t.type==="gun"&&e.input.mouse[0]&&t.st.mag>0||t.type==="tool"&&e.input.mouse[0]?!0:e.time-this.lastShot<.2}adsMoveSpeed(){let t=this.current;return t&&t.type==="gun"&&t.def.scope?2.4:3.3}ownsGun(t){return this.guns.some(e=>e&&e.id===t)}giveGun(t){let e=we[t],i={id:t,mag:e.mag,reserve:e.reserve,refined:!1};if(this.guns.findIndex(a=>a&&a.id===t)>=0)return!1;let s=this.guns[0]?this.guns[1]?this.slot==="gun1"?1:0:1:0;return this.guns[s]=i,this.models["gun"+s]=null,this.forceSwitch("gun"+s),!0}refillAmmo(t){let e=this.guns.find(n=>n&&n.id===t);if(!e)return!1;let i=this.gunStats(e);return e.mag=i.mag,e.reserve=i.reserve,!0}refillAllAmmo(){for(let t of this.guns)if(t){let e=this.gunStats(t);t.mag=e.mag,t.reserve=e.reserve}}refine(){let t=this.current;if(!t||t.type!=="gun"||t.st.refined)return!1;t.st.refined=!0;let e=this.gunStats(t.st);return t.st.mag=e.mag,t.st.reserve=e.reserve,this.models[this.slot]=null,this.forceSwitch(this.slot),!0}setKnife(t){this.knife=t,this.ownedKnives[t]=!0,this.models.knife=null,this.knifeVM=null,this.forceSwitch("knife")}modelFor(t){if(this.models[t])return this.models[t];let e;if(t==="gun0"||t==="gun1"){let n=this.guns[t==="gun0"?0:1];if(!n)return null;e=yd(n.id,n.refined)}else t==="knife"?e=ch(this.knife):e=vd(t);let i=t==="knife"?.8:.62;return e.scale.setScalar(i),e.userData.sightY*=i,this.models[t]=e,e}rebuildModel(){this.vmRoot.clear();let t=this.modelFor(this.slot);t&&this.vmRoot.add(t),this.knifeVM||(this.knifeVM=ch(this.knife),this.knifeVM.scale.setScalar(.8))}forceSwitch(t){this.slot=t,this.switching=!0,this.switchT=0,this.pendingSlot=null,this.reloading=!1,this.inspectT=0,this.meleeT=0,this.rebuildModel()}switchTo(t){t===this.slot||!this.has(t)||this.meleeT>0||(this.lastSlot=this.slot,this.slot=t,this.switching=!0,this.switchT=0,this.reloading=!1,this.inspectT=0,this.adsT=0,this.rebuildModel(),this.game.audio.pickup())}onMantle(){this.inspectT=0}update(t,e,i){let n=this.game,s=n.player,a=n.perks.quickhands?.5:1;if(this.switching&&(this.switchT+=t/(.35*a),this.switchT>=1&&(this.switching=!1)),this.cool-=t,i&&(["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6"].forEach((d,f)=>{e.hit(d)&&this.switchTo(fa[f])}),e.hit("KeyQ")&&this.switchTo(this.has(this.lastSlot)?this.lastSlot:"knife"),e.wheel)){let d=fa.filter(p=>this.has(p)),f=d.indexOf(this.slot);f=(f+(e.wheel>0?1:-1)+d.length)%d.length,this.switchTo(d[f])}let o=this.current;if(!o){this.switchTo("knife");return}let l=i&&o.type==="gun"&&e.mouse[2]&&!this.reloading&&!s.sprinting&&!this.switching&&this.meleeT<=0;this.adsT=rn(this.adsT+(l?t/.2:-t/.15),0,1),this.ads=this.adsT>.5;let c=o.type==="gun"?o.def.zoom:1;if(this.adsZoomFactor=1+(c-1)*this.adsT*this.adsT,this.reloading&&o.type==="gun")if(this.reloadT+=t,o.def.cls==="shotgun"){let u=.25*a,d=.42*a,f=.35;this.phaseT+=t,this.reloadPhase==="open"&&this.phaseT>=u&&(this.reloadPhase="shell",this.phaseT=0),this.reloadPhase==="shell"&&(this.shellP=this.phaseT/d,this.phaseT>=d&&(this.phaseT-=d,o.st.mag<o.def.mag&&o.st.reserve>0&&(o.st.mag++,o.st.reserve--,this.game.audio.reload()),(o.st.mag>=o.def.mag||o.st.reserve<=0)&&(this.reloadPhase="close",this.phaseT=0))),this.reloadPhase==="close"&&this.phaseT>=f&&(this.reloading=!1),this.reloadP=.5}else{let u=o.def.reload*a;if(this.reloadP=Math.min(1,this.reloadT/u),this.reloadT>=u){let d=o.def.mag-o.st.mag,f=Math.min(d,o.st.reserve);o.st.mag+=f,o.st.reserve-=f,this.reloading=!1}}if(this.meleeT>0){let u=this.meleeDur;this.meleeT-=t,!this.meleeHitDone&&this.meleeT<u*.55&&(this.meleeHitDone=!0,this.doMeleeHit()),this.meleeT<=0&&(this.meleeT=0,this.quickMelee=!1)}this.inspectT>0&&(this.inspectT-=t);let h=!1;if(i&&!this.switching)if(e.hit("KeyV")&&this.meleeT<=0&&this.startMelee(!1,o.type!=="knife"),e.hit("KeyF")&&this.meleeT<=0&&!this.reloading&&(this.inspectT=this.inspectDur(o),this.inspectLen=this.inspectT),e.hit("KeyG")&&this.grenades>0&&this.throwT<=0&&this.throwGrenade(),o.type==="gun"&&this.meleeT<=0){e.hit("KeyR")&&!this.reloading&&o.st.mag<o.def.mag&&o.st.reserve>0&&this.startReload();let u=o.def.auto?e.mouse[0]:e.mousePressed[0];u&&this.reloading&&o.def.cls==="shotgun"&&o.st.mag>0&&this.reloadPhase==="shell"&&(this.reloading=!1,this.cool=0),u&&!this.reloading&&this.cool<=0&&!s.mantle&&(o.st.mag>0?this.fire(o):o.st.reserve>0?this.startReload():(n.audio.click(),this.cool=.25))}else o.type==="knife"&&this.meleeT<=0?e.mouse[0]?this.startMelee(!1,!1):e.mouse[2]&&this.startMelee(!0,!1):o.type==="tool"&&this.meleeT<=0&&!s.mantle&&e.mouse[0]&&(h=this.useTool(o.kind,t));h!==this.toolActive&&(this.toolActive=h),n.audio.loop("vacuum",h&&o.kind==="vacuum"),n.audio.loop("washer",h&&o.kind==="washer"),n.audio.loop("torch",h&&o.kind==="torch"),h&&(this.inspectT=0),this.throwT-=t,this.updateGrenades(t),this.animate(t,e,o)}startReload(){this.reloading=!0,this.reloadT=0,this.inspectT=0,this.reloadP=0,this.reloadPhase="open",this.phaseT=0,this.shellP=0,this.animFlags.ejected=!1,this.game.audio.reload()}inspectDur(t){return t.type==="knife"?this.knife==="butterfly"?2.6:2.2:t.type==="gun"?{cannon:2.4,scatter:2,mauler:2.6,longbow:2.6}[t.st.id]||2.2:1.8}fire(t){let e=this.game,i=e.player,n=t.def,s=e.perks.doubletap?1.3:1;this.cool=1/(n.rate*s),t.st.mag--,this.lastShot=e.time,this.inspectT=0,e.audio.shot(n.sound);let a=i.eyePos(),o=i.speedH(),l=this.ads?n.ads:n.spread;(!this.ads||!n.scope)&&(l*=1+Math.min(1,o/7)*.8),i.onGround||(l*=1.8),(i.crouching||i.sliding)&&(l*=.8),n.scope&&!this.ads&&(l=Math.max(l,n.spread));let c=i.forward(),h=new R(Math.cos(i.yaw),0,-Math.sin(i.yaw)),u=new R().crossVectors(h,c).normalize(),d=a.clone().addScaledVector(c,.6).addScaledVector(h,this.ads?0:.14).addScaledVector(u,this.ads?-.06:-.12);for(let x=0;x<n.pellets;x++){let g=Math.random()*Math.PI*2,m=Math.sqrt(Math.random())*l,_=c.clone().addScaledVector(h,Math.cos(g)*m).addScaledVector(u,Math.sin(g)*m).normalize();this.hitscan(a,_,n,d)}let f=n.recoil*(this.ads?.6:1)*(i.crouching?.8:1);i.pitch+=f,i.recoilPitch+=f,i.yaw+=(Math.random()-.5)*f*.6,this.kick=Math.min(.12,this.kick+.03+n.recoil*.6),this.kickRot=Math.min(.3,this.kickRot+.05+n.recoil*1.5);let p=this.models[this.slot];if(p&&p.userData.flash&&(p.userData.flash.visible=!0,p.userData.flash.rotation.z=Math.random()*6,p.userData.flash.scale.multiplyScalar(1),this.flashT=.05),this.shots++,this.animFlags.shellOut=!1,this.animFlags.boltEject=!1,p&&!["scatter","longbow","cannon"].includes(t.st.id)&&this.casings.eject(p),this.flashLight.position.copy(d),this.flashLight.intensity=n.cls==="sniper"||n.cls==="shotgun"?30:16,this.vmFlashLight.intensity=3,p&&p.userData.muzzle){let x=new R;p.userData.muzzle.getWorldPosition(x),this.vmFlashLight.position.copy(x)}e.ui.crosshairKick()}hitscan(t,e,i,n){let s=this.game,a=s.level.raycast(t.x,t.y,t.z,e.x,e.y,e.z,150),o=s.barrels.raycast(t,e,a.dist);o&&s.barrels.damage(o.barrel,i.dmg);let l=s.enemies.raycast(t,e,o?o.dist:a.dist),c=(i.pierce||0)+1,h=1,u=o?o.dist:a.dist;for(let f of l){if(c<=0)break;let p=i.dmg*h*(f.head?i.head:1);s.enemies.damage(f.enemy,p,{head:f.head,kind:"bullet",point:f.point,dir:e}),c--,h*=.75,c<=0&&(u=f.dist)}if(c>0){let f=s.enemies.bossRaycast(t,e,u);f?(u=f.dist,s.enemies.damageBoss(i.dmg*h,f.point,"bullet")):u===a.dist&&a.dist<150&&(s.particles.sparks(a.x,a.y,a.z,a.nx,a.ny,a.nz,5),s.effects.bulletHole(a))}let d=t.clone().addScaledVector(e,Math.min(u,150));s.effects.tracer(n,d,i.cls==="sniper"?12577023:16769696)}startMelee(t,e){let i=Pi[this.knife],n=this.game.perks.quickhands?.85:1;this.meleeHeavy=t,this.quickMelee=e,this.meleeDur=(t?1.6:1)/i.speed*n,this.meleeT=this.meleeDur,this.meleeHitDone=!1,this.inspectT=0,this.reloading=this.reloading&&!e?!1:this.reloading,e&&(this.reloading=!1),this.game.audio.swing()}doMeleeHit(){let t=this.game,e=t.player,i=Pi[this.knife],n=e.eyePos(),s=e.forward(),a=i.range*(this.meleeHeavy?1.1:1),o=t.enemies.meleeTarget(n,s,a+1.2,.6);if(o){let l=Math.hypot(o.pos.x-e.pos.x,o.pos.z-e.pos.z);if(l>a*.7){let h=(o.pos.x-e.pos.x)/l,u=(o.pos.z-e.pos.z)/l;e.vel.x=h*9,e.vel.z=u*9}let c=i.dmg*(this.meleeHeavy?1.85:1);t.enemies.damage(o,c,{kind:"melee",point:o.pos.clone().setY(o.pos.y+1.1),dir:s}),t.audio.slash()}else{let l=t.barrels.raycast(n,s,a+.5);l&&t.barrels.damage(l.barrel,999);let c=t.enemies.bossRaycast(n,s,a+.8);if(c)t.enemies.damageBoss(i.dmg*(this.meleeHeavy?1.85:1),c.point,"melee"),t.audio.slash();else{let h=t.level.raycast(n.x,n.y,n.z,s.x,s.y,s.z,a);h.dist<a&&(t.particles.sparks(h.x,h.y,h.z,h.nx,h.ny,h.nz,4),t.audio.hit())}}}useTool(t,e){let i=this.game,n=i.player,s=n.eyePos(),a=n.forward(),o=new R(Math.cos(n.yaw),0,-Math.sin(n.yaw)),l=s.clone().addScaledVector(a,.75).addScaledVector(o,.12).add(new R(0,-.15,0)),c=i.activeGrimeZones();if(t==="vacuum"){let h=this.tankCap();if(this.tank>=h-.01)return i.ui.flash("TANK FULL \u2014 empty it at a Disposal Chute","#ffcf3a"),i.audio.deny(),!1;let u=mi.suction.values[i.upg.suction],d=4.5+u*1.3,f=16*u*this.cleanMul(),p=i.grime.vacuum(c,s.x,s.y,s.z,a.x,a.y,a.z,d,Math.cos(.42),f*e,h-this.tank,i.level,x=>{i.audio.pickup(),i.stats.piles++});this.tank+=p.collected;for(let[,x]of p.hits.slice(0,6))Math.random()<.7&&i.particles.suck(x.x+(Math.random()-.5)*.5,.15,x.z+(Math.random()-.5)*.5,l.x,l.y,l.z);if(Math.random()<.5){let x=1+Math.random()*2.5,g=l.x+a.x*x+(Math.random()-.5)*x*.6,m=l.y+a.y*x+(Math.random()-.5)*x*.6,_=l.z+a.z*x+(Math.random()-.5)*x*.6;i.particles.norm.spawn(g,m,_,(l.x-g)*4,(l.y-m)*4,(l.z-_)*4,.25,.03,.8,.8,.75,.4,0,0,0)}return!0}if(t==="washer"){if(this.water<=0)return i.ui.flash("OUT OF WATER \u2014 refill at a Service Station","#7fc8ff"),i.audio.deny(),!1;this.water=Math.max(0,this.water-9*e);let h=mi.pressure.values[i.upg.pressure],u=i.level.raycast(s.x,s.y,s.z,a.x,a.y,a.z,10);for(let p=0;p<4;p++)i.particles.water(l.x,l.y,l.z,a.x,a.y,a.z,.08+h*.02);if(u.dist<10){Math.random()<.6&&i.particles.mist(u.x+u.nx*.1,u.y+u.ny*.1,u.z+u.nz*.1);let p=.55+Math.sqrt(h)*.35;i.grime.wash(c,u.x,u.y,u.z,p,85*h*this.cleanMul()*e,x=>{i.addCredits(Ee.stain,null,!0),i.stats.stains++,i.audio.pickup()})}let d=i.enemies.raycast(s,a,Math.min(u.dist,10));if(d.length){let p=d[0].enemy;i.enemies.damage(p,18*h*e,{kind:"water",silent:!0}),p.knock.x+=a.x*14*e,p.knock.z+=a.z*14*e}let f=i.enemies.bossRaycast(s,a,Math.min(u.dist,10));return f&&i.enemies.washBoss(55*h*this.cleanMul()*e,f.point),!0}if(t==="torch"){if(this.fuel<=0)return i.ui.flash("OUT OF FUEL \u2014 refill at a Service Station","#ff8a3a"),i.audio.deny(),!1;this.fuel=Math.max(0,this.fuel-10*e);for(let u=0;u<4;u++)i.particles.flame(l.x,l.y,l.z,a.x,a.y,a.z);let h=6.5;i.grime.burn(c,s.x,s.y-.2,s.z,a.x,a.y,a.z,h,Math.cos(.35),50*this.cleanMul()*e,i.level,u=>{i.addCredits(Ee.spore,null,!0),i.stats.spores++,i.audio.pop(),i.particles.burst(u.x,u.y+.2,u.z,13656319,25,4,.1)}),i.enemies.coneDamage(s,a,h,Math.cos(.35),95*e,"fire");for(let u of i.barrels.list){if(!u.alive)continue;let d=u.x-s.x,f=u.z-s.z,p=Math.hypot(d,f);p<h&&(d*a.x+f*a.z)/p>Math.cos(.35)&&i.barrels.damage(u,25*e)}return!0}return!1}throwGrenade(){let t=this.game,e=t.player;this.grenades--,this.throwT=.6;let i=e.forward(),n=e.eyePos(),s=new tt(this.grenadeGeo,this.grenadeMat);s.position.copy(n).addScaledVector(i,.5),t.scene.add(s),this.grenadesLive.push({mesh:s,vel:i.clone().multiplyScalar(14).add(new R(0,3,0)).add(e.vel.clone().multiplyScalar(.5)),t:1.6}),t.audio.swing()}updateGrenades(t){let e=this.game,i=e.level;for(let n=this.grenadesLive.length-1;n>=0;n--){let s=this.grenadesLive[n];s.t-=t,s.vel.y-=18*t;let a=s.mesh.position,o=a.x+s.vel.x*t,l=a.y+s.vel.y*t,c=a.z+s.vel.z*t,[h,u]=i.cellOf(o,c),d=i.hAt(h,u);if(l<d)if(a.y>=d)a.y=d,s.vel.y*=-.35,s.vel.x*=.6,s.vel.z*=.6;else{let[f]=i.cellOf(a.x,a.z);f!==h?s.vel.x*=-.4:s.vel.z*=-.4}else l>4.3?s.vel.y*=-.3:a.set(o,l,c);a.y<.08&&(a.y=.08,s.vel.y*=-.35,s.vel.x*=.7,s.vel.z*=.7),s.mesh.rotation.x+=t*8,s.mesh.rotation.z+=t*5,s.t<=0&&(e.scene.remove(s.mesh),this.grenadesLive.splice(n,1),this.explodeFoam(a.x,Math.max(.3,a.y),a.z))}}explodeFoam(t,e,i){let n=this.game;n.audio.boom(),n.effects.explosion(t,e,i,4.2,"foam");for(let s=0;s<40;s++)n.particles.norm.spawn(t+(Math.random()-.5)*3,e,i+(Math.random()-.5)*3,(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3,1.5,.5,.95,.98,1,.6,.5,1.5,2);for(let s of n.barrels.list)s.alive&&Math.hypot(s.x-t,s.z-i)<4.5&&n.barrels.damage(s,999);n.grime.foam(n.activeGrimeZones(),t,i,4.2,()=>{n.addCredits(Ee.stain,null,!0),n.stats.stains++},s=>{n.addCredits(Ee.spore,null,!0),n.stats.spores++}),n.enemies.radiusDamage(t,e,i,5,320*(1+.5*(n.phase-1))),n.enemies.washBoss(0,null,t,i,6,40)}animate(t,e,i){let n=this.game,s=n.player,a=this.models[this.slot];this.sway.x=pi(this.sway.x,rn(-e.dx*6e-4,-.05,.05),10,t),this.sway.y=pi(this.sway.y,rn(e.dy*6e-4,-.05,.05),10,t),this.kick=pi(this.kick,0,14,t),this.kickRot=pi(this.kickRot,0,12,t),this.flashT>0&&(this.flashT-=t,this.flashT<=0&&a&&a.userData.flash&&(a.userData.flash.visible=!1)),this.flashLight.intensity=Math.max(0,this.flashLight.intensity-t*400),this.vmFlashLight.intensity=Math.max(0,this.vmFlashLight.intensity-t*60),this.casings.update(t);let o=this.adsT,l=a?a.userData.sightY:.05,c=i.type==="knife"?new R(.17,-.17,-.34):i.type==="tool"?new R(.15,-.15,-.3):new R(.13,-.125,-.3),h=new R(0,-l,-.2),u=c.clone().lerp(h,o),d=new $e(0,0,0),f={pos:u,rot:d},p=s.bobAmt*(1-o*.85);u.x+=Math.cos(s.bob)*.012*p,u.y+=Math.abs(Math.sin(s.bob))*.014*p,u.y+=Math.sin(n.time*1.6)*.0025*(1-o),d.z+=Math.sin(n.time*.8)*.006*(1-o),u.x+=this.sway.x*(1-o*.7),u.y+=this.sway.y*(1-o*.7),d.y+=this.sway.x*1.5,this.sprintT=pi(this.sprintT||0,s.sprinting&&this.meleeT<=0&&!this.reloading?1:0,10,t);let x=this.sprintT;i.type==="gun"?(u.x+=.04*x,u.y-=.05*x,d.y+=.6*x,d.x-=.2*x,d.z+=.25*x):(u.y-=.04*x,d.x-=.35*x),u.y+=Math.sin(s.bob*2)*.02*x,s.sliding&&(d.z+=.2,u.x-=.03),s.mantle&&(u.y-=.12,d.x-=.4),u.z+=this.kick*(1-o*.5)*.4,d.x+=this.kickRot*(1-o*.6)*.3;let g=this.switching?1-this.switchT:0,m=this.inspectT>0?1-this.inspectT/(this.inspectLen||2):-1,_={casing:(v,I)=>this.casings.eject(v,I),casingAt:v=>this.casings.eject(v)},M=!1;if(i.type==="gun"&&a)Md(a,i.st.id,{fT:n.time-this.lastShot,rP:this.reloading?this.reloadP||0:-1,dT:g,iP:m,shots:this.shots,mag:i.st.mag,reloadPhase:this.reloadPhase,phaseT:this.phaseT||0,shellP:this.shellP||0,reloadTime:this.reloadT,flags:this.animFlags,time:n.time},f,_),o>.01&&(d.x*=1-o*.85,d.y*=1-o*.85,d.z*=1-o*.85);else if(i.type==="knife"&&a){let v=this.meleeT>0&&!this.quickMelee?1-this.meleeT/this.meleeDur:-1;hh(a,a.userData.kind,{mT:v,heavy:this.meleeHeavy,alt:this.swingAlt,dT:g,iP:m},f)}else if(i.type==="tool"&&a){if(bd(a,i.kind,{active:this.toolActive,full:this.tank>=this.tankCap()-.01,time:n.time,dT:g,iP:m},f),a.userData.fill)if(i.kind==="vacuum"){let v=Math.max(.02,this.tank/this.tankCap());a.userData.fill.scale.y=v}else i.kind==="washer"&&(a.userData.fill.material.opacity=.2+.6*(this.water/this.resCap()));a.userData.pilot&&a.userData.pilot.scale.setScalar(this.toolActive?2.5:1+Math.sin(n.time*30)*.2)}if(this.meleeT>0&&(this.quickMelee&&(M=!0),1-this.meleeT/this.meleeDur>.97&&(this.swingAlt=!this.swingAlt)),a&&(a.position.copy(u),a.rotation.copy(d),a.visible=!(i.type==="gun"&&i.def.scope&&o>.9)&&!M),this.knifeVM)if(M){this.knifeVM.parent!==this.vmRoot&&this.vmRoot.add(this.knifeVM);let v=1-this.meleeT/this.meleeDur,I={pos:new R(.15,-.17,-.34),rot:new $e};hh(this.knifeVM,this.knifeVM.userData.kind,{mT:v,heavy:!1,alt:!1,dT:0,iP:-1},I),I.pos.y-=Math.pow(1-Math.sin(v*Math.PI),3)*.15,this.knifeVM.position.copy(I.pos),this.knifeVM.rotation.copy(I.rot),this.knifeVM.visible=!0}else this.knifeVM.parent===this.vmRoot&&this.vmRoot.remove(this.knifeVM)}serialize(){return{guns:this.guns,knife:this.knife,ownedKnives:this.ownedKnives,tools:this.tools,grenades:this.grenades,tank:this.tank,water:this.water,fuel:this.fuel}}deserialize(t){t&&(Array.isArray(t.guns)&&(this.guns=[t.guns[0]&&we[t.guns[0].id]?t.guns[0]:null,t.guns[1]&&we[t.guns[1].id]?t.guns[1]:null]),!this.guns[0]&&!this.guns[1]&&(this.guns[0]={id:"sidearm",mag:12,reserve:84,refined:!1}),t.knife&&Pi[t.knife]&&(this.knife=t.knife),t.ownedKnives&&(this.ownedKnives={combat:!0,...t.ownedKnives}),t.tools&&(this.tools={vacuum:!0,washer:!!t.tools.washer,torch:!!t.tools.torch}),this.grenades=t.grenades|0,this.tank=+t.tank||0,this.water=+t.water||0,this.fuel=+t.fuel||0,this.models={},this.knifeVM=null,this.slot=this.guns[0]?"gun0":"gun1",this.rebuildModel())}};var Li=.35,gy=19,xy=6.6,uh=1.62,yy=1.05,vy=.78,ma=class{constructor(t){this.game=t,this.pos=new R,this.vel=new R,this.yaw=0,this.pitch=0,this.onGround=!0,this.crouching=!1,this.sprinting=!1,this.sliding=!1,this.slideT=0,this.slideDir=new K,this.mantle=null,this.eye=uh,this.bob=0,this.bobAmt=0,this.landDip=0,this.tilt=0,this.hp=100,this.maxHp=100,this.lastHurt=-10,this.recoilPitch=0,this.fallStartY=0,this.stepAcc=0,this.radius=Li}spawnAt(t,e,i=0){this.pos.set(t,0,e),this.vel.set(0,0,0),this.yaw=i,this.pitch=0,this.sliding=!1,this.mantle=null,this.crouching=!1,this.onGround=!0}forward(){return new R(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}eyePos(){return new R(this.pos.x,this.pos.y+this.eye,this.pos.z)}speedH(){return Math.hypot(this.vel.x,this.vel.z)}damage(t,e){let i=this.game;if(i.god)return;let n=i.stats.armor||0;this.hp-=t*(1-n),this.lastHurt=i.time,i.ui.hurt(e?Math.atan2(e.x-this.pos.x,e.z-this.pos.z)-Math.atan2(-Math.sin(this.yaw),-Math.cos(this.yaw)):null),i.audio.hurt(),this.hp<=0&&(this.hp=0,i.onPlayerDeath())}update(t,e,i){let n=this.game,s=n.level;if(i){let k=n.settings.sens*.0022*(n.weapons.adsZoomFactor?1/Math.pow(n.weapons.adsZoomFactor,.85):1);this.yaw-=e.dx*k,this.pitch-=e.dy*k*(n.settings.invert?-1:1)}let a=this.recoilPitch*Math.min(1,t*7);if(this.recoilPitch-=a,this.pitch-=a*.75,this.pitch=rn(this.pitch,-1.5,1.5),this.mantle){let k=this.mantle;k.t+=t/k.dur;let et=Math.min(1,k.t),nt=Math.min(1,et/.6),ut=Math.max(0,(et-.35)/.65);this.pos.y=k.y0+(k.y1-k.y0)*(1-Math.pow(1-nt,2)),this.pos.x=k.x0+(k.x1-k.x0)*ut,this.pos.z=k.z0+(k.z1-k.z0)*ut,this.eye=pi(this.eye,uh,10,t),et>=1&&(this.mantle=null,this.onGround=!0,this.vel.set(k.dx*3,0,k.dz*3));return}let o=e.key("KeyW")?1:0,l=e.key("KeyS")?1:0,c=e.key("KeyA")?1:0,h=e.key("KeyD")?1:0,u=o-l,d=h-c,f=Math.sin(this.yaw),p=Math.cos(this.yaw),x=-f*u+p*d,g=-p*u-f*d,m=Math.hypot(x,g);m>0&&(x/=m,g/=m);let _=e.key("KeyC")||e.key("KeyZ"),M=e.hit("KeyC")||e.hit("KeyZ"),v=n.weapons,I=n.perks.rush?1.15:1,w=e.key("ShiftLeft")||e.key("ShiftRight"),C=v.isFiringBlocksSprint();if(this.sprinting=w&&u>0&&!v.ads&&!C&&!this.crouching&&!this.sliding&&this.onGround,w&&u>0&&!this.onGround&&this.wasSprinting&&(this.sprinting=!0),M&&this.onGround&&!this.sliding&&(this.sprinting||this.speedH()>6.2)){this.sliding=!0,this.slideT=0;let k=Math.max(this.speedH(),7)+3.6*I,et=m>0?x:-f,nt=m>0?g:-p;this.slideDir.set(et,nt),this.vel.x=et*k,this.vel.z=nt*k,n.audio.slide(),this.sprinting=!1}else M&&this.onGround&&!this.sliding&&(this.crouching=!this.crouching);!_&&this.crouchHeldViaHold&&(this.crouching=!1);let P=.85*(n.perks.rush?1.3:1);if(this.sliding){this.slideT+=t;let k=this.speedH(),nt=Math.max(0,k-7.5*t);if(k>.001&&(this.vel.x*=nt/k,this.vel.z*=nt/k),m>0){let ut=Math.atan2(this.vel.x,this.vel.z),Ut=Math.atan2(x,g)-ut;for(;Ut>Math.PI;)Ut-=2*Math.PI;for(;Ut<-Math.PI;)Ut+=2*Math.PI;let q=ut+rn(Ut,-1.2*t,1.2*t);this.vel.x=Math.sin(q)*nt,this.vel.z=Math.cos(q)*nt}(this.slideT>P||nt<3.2||!this.onGround)&&(this.sliding=!1,this.crouching=_)}let S=e.hit("Space");if((S||e.key("Space")&&!this.onGround||!this.onGround&&u>0)&&this.tryMantle(S))return;S&&this.onGround&&(this.crouching&&!this.sliding?this.crouching=!1:(this.vel.y=xy,this.onGround=!1,this.sliding&&(this.sliding=!1,this.vel.x*=1.06,this.vel.z*=1.06),this.fallStartY=this.pos.y));let y=5;if(this.sprinting&&(y=7.6*I),this.crouching&&(y=2.7),v.ads&&(y=Math.min(y,v.adsMoveSpeed())),v.current&&v.current.type==="knife"&&(y*=1.08),this.onGround&&!this.sliding){let k=m>0?55:40,et=x*y,nt=g*y,ut=et-this.vel.x,It=nt-this.vel.z,Ut=Math.hypot(ut,It),q=Math.min(Ut,k*t);Ut>0&&(this.vel.x+=ut/Ut*q,this.vel.z+=It/Ut*q)}else if(!this.onGround){let k=this.speedH(),et=Math.max(k,y);this.vel.x+=x*14*t,this.vel.z+=g*14*t;let nt=this.speedH();nt>et&&(this.vel.x*=et/nt,this.vel.z*=et/nt)}let T=this.pos.y,[U,D]=s.moveCircle(this.pos.x,this.pos.z,this.vel.x*t,this.vel.z*t,Li,T,.45);U===this.pos.x&&Math.abs(this.vel.x)>0&&(this.vel.x=0),D===this.pos.z&&Math.abs(this.vel.z)>0&&(this.vel.z=0),this.pos.x=U,this.pos.z=D,n.enemies.pushPlayer(this),n.barrels.push(this.pos,Li),this.vel.y-=gy*t,this.pos.y+=this.vel.y*t;let N=s.groundAt(this.pos.x,this.pos.z,Li,T),V=this.onGround;this.pos.y<=N?(!V&&this.vel.y<-4&&(this.landDip=Math.min(.25,-this.vel.y*.025),n.audio.land()),this.pos.y=N,this.vel.y=0,this.onGround=!0):this.pos.y>N+.05&&(V&&this.vel.y<=0&&this.pos.y-N<.5?(this.pos.y=N,this.vel.y=0):this.onGround=!1),this.pos.y<N&&(this.pos.y=N),this.wasSprinting=this.sprinting||this.wasSprinting&&!this.onGround;let H=this.sliding?vy:this.crouching?yy:uh;this.eye=pi(this.eye,H,12,t);let Z=this.speedH();this.onGround&&!this.sliding&&Z>.5&&(this.bob+=t*Z*(this.sprinting?1.45:1.75),this.stepAcc+=Z*t,this.stepAcc>(this.sprinting?2.3:1.8)&&(this.stepAcc=0,n.audio.step())),this.bobAmt=pi(this.bobAmt,this.onGround&&!this.sliding?Math.min(1,Z/7):0,8,t),this.landDip=pi(this.landDip,0,8,t),this.tilt=pi(this.tilt,this.sliding?.07:-d*.012,8,t),this.maxHp=n.perks.ironhide?200:100,n.time-this.lastHurt>4&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+40*t))}tryMantle(t){let e=this.game.level,i=Math.sin(this.yaw),n=Math.cos(this.yaw),s=-i,a=-n;for(let o of[Li+.25,Li+.6]){let l=this.pos.x+s*o,c=this.pos.z+a*o,[h,u]=e.cellOf(l,c),d=e.hAt(h,u);if(d>50||d<=this.pos.y+.45||d-this.pos.y>1.75||!t&&this.onGround)continue;let p=l+s*(Li+.15),x=c+a*(Li+.15);if(e.blockedCircle(p,x,Li,d,.05))continue;if(e.groundAt(p,x,Li,d)<d-.01){let m=h*it+it/2,_=u*it+it/2;if(e.blockedCircle(m,_,Li,d,.05))continue;return this.startMantle(m,d,_,s,a),!0}return this.startMantle(p,d,x,s,a),!0}return!1}startMantle(t,e,i,n,s){this.mantle={t:0,dur:.38,x0:this.pos.x,y0:this.pos.y,z0:this.pos.z,x1:t,y1:e,z1:i,dx:n,dz:s},this.sliding=!1,this.crouching=!1,this.vel.set(0,0,0),this.game.weapons.onMantle()}applyCamera(t){let e=Math.sin(this.bob*2)*.035*this.bobAmt,i=Math.cos(this.bob)*.025*this.bobAmt;t.position.set(this.pos.x+Math.cos(this.yaw)*i,this.pos.y+this.eye+e-this.landDip,this.pos.z-Math.sin(this.yaw)*i),t.rotation.order="YXZ",t.rotation.set(this.pitch,this.yaw,this.tilt)}};var Sd=r=>document.getElementById(r),Ds=r=>Math.floor(r).toLocaleString("en-US"),ga=class{constructor(t){this.game=t,this.el={};for(let e of["objPhase","mapZone","dmgNums","hud","crosshair","hitmarker","scope","vignette","hurtDir","objTitle","objBrief","cleanFill","cleanText","objCounts","zoneName","minimap","banner","bannerTitle","bannerSub","prompt","flash","powerups","perks","credits","popups","hpFill","hpText","tankFill","tankText","waterFill","waterText","fuelFill","fuelText","waterM","fuelM","slots","weaponName","mag","reserve","grenades","fps","shopBody","shopTabs","shopCredits","statsBody"])this.el[e]=Sd(e);this.mm=this.el.minimap.getContext("2d"),this.hitT=0,this.hurtT=0,this.flashT=0,this.bannerT=0,this.spread=0,this.shopTab="weapons",this.lastHud=0,this.mmBase=null,this.mmZoom=4.2,this.dmg=[],this.dmgPool=[]}show(t,e=!0){Sd(t).classList.toggle("hidden",!e)}hurt(t){this.hurtT=.5,t!=null&&(this.el.hurtDir.style.transform=`rotate(${-t}rad)`,this.el.hurtDir.style.opacity=1,clearTimeout(this._hd),this._hd=setTimeout(()=>{this.el.hurtDir.style.opacity=0},450))}hitmarker(t,e){this.hitT=e?.3:.15,this.el.hitmarker.className=e?"kill":t?"head":""}crosshairKick(){this.spread=Math.min(30,this.spread+6)}flash(t,e="#fff"){(this.el.flash.textContent!==t||this.flashT<.5)&&(this.el.flash.textContent=t,this.el.flash.style.color=e),this.flashT=1.6}banner(t,e="",i=3,n="#fff"){this.el.bannerTitle.textContent=t,this.el.bannerTitle.style.color=n,this.el.bannerSub.textContent=e,this.bannerT=i}popup(t,e=!1){let i=document.createElement("div");for(i.className="popup"+(e?" big":""),i.textContent=t,i.style.left=Math.random()*30+"px",this.popN=((this.popN||0)+1)%5,i.style.bottom=this.popN*20+"px",this.el.popups.appendChild(i),setTimeout(()=>i.remove(),1150);this.el.popups.children.length>8;)this.el.popups.firstChild.remove()}damageNumber(t,e,i,n,s="normal"){let a=Math.round(n);if(a<=0)return;let o=this.dmgPool.pop();o||(o=document.createElement("div"),this.el.dmgNums.appendChild(o)),o.className="dmg "+s,o.textContent=(s==="head"?"\u2726 ":"")+a,o.style.display="";let l=(Math.random()-.5)*.5;if(this.dmg.push({el:o,x:t+l,y:e,z:i+l,t:0,life:s==="fire"||s==="water"?.6:.85,vx:(Math.random()-.5)*.6}),this.dmg.length>40){let c=this.dmg.shift();c.el.style.display="none",this.dmgPool.push(c.el)}}updateDamageNumbers(t){let e=this.game.camera,i=window.innerWidth,n=window.innerHeight,s=this._v||(this._v=e.position.clone());for(let a=this.dmg.length-1;a>=0;a--){let o=this.dmg[a];if(o.t+=t,o.t>=o.life){o.el.style.display="none",this.dmgPool.push(o.el),this.dmg.splice(a,1);continue}if(s.set(o.x+o.vx*o.t,o.y+o.t*.9-o.t*o.t*.4,o.z),s.project(e),s.z>1){o.el.style.opacity=0;continue}let l=(s.x*.5+.5)*i,c=(-s.y*.5+.5)*n,h=o.t/o.life,u=o.t<.08?1.35-o.t/.08*.35:1;o.el.style.transform=`translate(${l.toFixed(1)}px,${c.toFixed(1)}px) translate(-50%,-50%) scale(${u})`,o.el.style.opacity=h>.6?(1-h)/.4:1}}setPrompt(t){this._prompt!==t&&(this._prompt=t,this.el.prompt.innerHTML=t||"")}update(t){let e=this.game,i=e.player,n=e.weapons;this.hitT-=t,this.hurtT-=t,this.flashT-=t,this.bannerT-=t,this.el.hitmarker.style.opacity=this.hitT>0?1:0,this.updateDamageNumbers(t),this.el.flash.style.opacity=this.flashT>0?1:0,this.el.banner.style.opacity=this.bannerT>0?1:0;let s=1-i.hp/i.maxHp;this.el.vignette.style.opacity=Math.max(this.hurtT>0?.6:0,s>.5?(s-.5)*1.6:0);let a=n.current,o=8;a&&a.type==="gun"&&(o=4+a.def.spread*300*(1+Math.min(1,i.speedH()/7)*.8)*(i.onGround?1:1.8)),this.spread=Math.max(0,this.spread-t*60);let l=(o+this.spread)*(1-n.adsT),c=this.el.crosshair.children;c[0].style.top=-l-9+"px",c[1].style.top=l+"px",c[2].style.left=-l-9+"px",c[3].style.left=l+"px",this.el.crosshair.style.opacity=n.adsT>.6||i.sprinting?0:1;let h=a&&a.type==="gun"&&a.def.scope&&n.adsT>.9;if(this.el.scope.classList.toggle("hidden",!h),this.lastHud-=t,this.lastHud>0)return;this.lastHud=.05,this.el.credits.textContent=Ds(e.credits),this.el.hpFill.style.width=i.hp/i.maxHp*100+"%",this.el.hpText.textContent=Math.ceil(i.hp);let u=n.tankCap(),d=n.resCap();this.el.tankFill.style.width=n.tank/u*100+"%",this.el.tankFill.style.background=n.tank>=u-.01?"#ff4a3a":"",this.el.tankText.textContent=Math.floor(n.tank)+" / "+u,this.el.waterM.style.display=n.tools.washer?"":"none",this.el.fuelM.style.display=n.tools.torch?"":"none",this.el.waterFill.style.width=n.water/d*100+"%",this.el.waterText.textContent=Math.floor(n.water)+"L",this.el.fuelFill.style.width=n.fuel/d*100+"%",this.el.fuelText.textContent=Math.floor(n.fuel)+"L";let f={gun0:"1",gun1:"2",knife:"3 KNIFE",vacuum:"4 VAC",washer:"5 LANCE",torch:"6 TORCH"},p="";for(let v of fa){if(!n.has(v))continue;let I=f[v];if(v==="gun0"||v==="gun1"){let w=n.guns[v==="gun0"?0:1];I+=" "+(w.refined?jo[w.id]:we[w.id].name).split(" ")[0].toUpperCase()}p+=`<div class="${n.slot===v?"on":""}">${I}</div>`}this._slots!==p&&(this._slots=p,this.el.slots.innerHTML=p),a&&(a.type==="gun"?(this.el.weaponName.textContent=a.def.name+(n.reloading?"  \u2014 RELOADING":""),this.el.mag.textContent=a.st.mag,this.el.mag.style.color=a.st.mag===0?"#ff4a3a":a.st.mag<=a.def.mag*.25?"#ffb03a":"#fff",this.el.reserve.textContent="/ "+a.st.reserve):a.type==="knife"?(this.el.weaponName.textContent=a.def.name,this.el.mag.textContent="\u221E",this.el.mag.style.color="#fff",this.el.reserve.textContent=""):(this.el.weaponName.textContent=_r[a.kind].name,this.el.mag.style.color="#fff",a.kind==="vacuum"?(this.el.mag.textContent=Math.round(n.tank/u*100)+"%",this.el.reserve.textContent="TANK"):a.kind==="washer"?(this.el.mag.textContent=Math.floor(n.water),this.el.reserve.textContent="L WATER"):(this.el.mag.textContent=Math.floor(n.fuel),this.el.reserve.textContent="L FUEL"))),this.el.grenades.textContent=n.grenades>0?`FOAM GRENADES \xD7${n.grenades}  [G]`:"";let x="";for(let[v,I]of Object.entries(Tn))e.perks[v]&&(x+=`<div class="perk" style="background:#${I.color.toString(16).padStart(6,"0")}">${I.name[0]}</div>`);this._perks!==x&&(this._perks=x,this.el.perks.innerHTML=x);let g="";e.powerups.double>0&&(g+=`<div style="color:#ffd23a">DOUBLE CREDITS ${Math.ceil(e.powerups.double)}</div>`),e.powerups.insta>0&&(g+=`<div style="color:#ff5a4a">INSTA-CLEAN ${Math.ceil(e.powerups.insta)}</div>`),this._pu!==g&&(this._pu=g,this.el.powerups.innerHTML=g);let m=e.phase;if(this.el.objPhase.textContent=e.victory?"COMPLETE":e.bossActive()?"FINAL PHASE":"PHASE "+Math.min(4,m)+" / 4",e.victory)this.el.objTitle.textContent="Contract complete",this.el.objBrief.textContent="Free roam \u2014 keep cleaning, keep fighting.";else if(e.bossActive()){let v=e.enemies.boss;this.el.objTitle.textContent="The Bloom Mother",this.el.objBrief.textContent=v.shield>0?"Its slime shield deflects bullets \u2014 WASH it off with the Hydro Lance (or torch / foam), then shoot!":"Shield down! Unload on the core!"}else Ie[m]&&(this.el.objTitle.textContent=Ie[m].title.split("\u2014 ")[1]||Ie[m].title,this.el.objBrief.textContent=Ie[m].brief);let _=e.bossActive()?null:e.currentZoneKey();if(e.bossActive()){let v=e.enemies.boss,I=v.hp/v.maxHp;this.el.cleanFill.style.width=I*100+"%",this.el.cleanFill.style.background="linear-gradient(90deg,#a02a7a,#ff4ad0)",this.el.cleanText.textContent=Math.ceil(I*100)+"%";let w=`<span><i style="color:#9cff6a">\u25C8</i>Shield ${Math.ceil(v.shield/v.maxShield*100)}%</span>`;this._counts!==w&&(this._counts=w,this.el.objCounts.innerHTML=w)}else if(_){let v=e.grime.cleanliness(_),I=Ie[m]?Ie[m].threshold:1;this.el.cleanFill.style.width=Math.min(100,v*100)+"%",this.el.cleanFill.style.background="",this.el.cleanText.textContent=Math.floor(v*100)+"%",this.el.cleanText.title="goal "+Math.round(I*100)+"%";let w=e.grime.remaining(_),C=`<span style="color:#6dff9e">Goal ${Math.round(I*100)}%</span>`;w.piles&&(C+=`<span><i style="color:#e2b466">\u25CF</i>${w.piles}</span>`),w.stains&&(C+=`<span><i style="color:#8bff5a">\u25C6</i>${w.stains}</span>`),w.spores&&(C+=`<span><i style="color:#d060ff">\u2726</i>${w.spores}</span>`),this._counts!==C&&(this._counts=C,this.el.objCounts.innerHTML=C)}let M=e.level.zoneAtWorld(i.pos.x,i.pos.z);this.el.zoneName.textContent="",this.el.mapZone.textContent=M?Mr[M].name:"",e.settings.showFps?this.el.fps.textContent=Math.round(e.fps)+" FPS":this.el.fps.textContent="",this.drawMinimap()}buildMinimapBase(){let t=this.game.level,e=6,i=document.createElement("canvas");i.width=t.W*e,i.height=t.H*e;let n=i.getContext("2d"),s={0:"#3a4a58",1:"#5a4f3a",2:"#34425a",3:"#34503c",4:"#4a3428"};for(let a=0;a<t.H;a++)for(let o=0;o<t.W;o++){let l=t.idx(o,a),c=t.type[l];c!==1&&(n.fillStyle=c===4?"#a03030":c===2||c===3?"#6a6a6a":c===5?"#2a9ad0":s[t.zone[l]]||"#333",n.fillRect(o*e,a*e,e,e))}for(let a of t.objects)n.fillStyle={S:"#1fd6ff",I:"#55ff33",W:"#2a8cf0",P:"#ff5aa0",R:"#c04dff",M:"#7fd8ff"}[a.kind]||"#fff",n.fillRect(a.x*e-1,a.y*e-1,e+2,e+2);this.mmBase=i,this.mmScale=e}invalidateMinimap(){this.mmBase=null}drawMinimap(){let t=this.game,e=t.player;this.mmBase||this.buildMinimapBase();let i=this.mm,n=360,s=n/2,a=s-18,o=this.mmScale/it,l=2.1;i.clearRect(0,0,n,n),i.save(),i.beginPath(),i.arc(s,s,a,0,Math.PI*2),i.closePath(),i.fillStyle="rgba(8,12,18,0.72)",i.fill(),i.clip(),i.translate(s,s),i.rotate(e.yaw),i.scale(l,l),i.translate(-e.pos.x*o,-e.pos.z*o),i.globalAlpha=.85,i.imageSmoothingEnabled=!1,i.drawImage(this.mmBase,0,0),i.globalAlpha=1;let c=t.currentZoneKey();if(c&&c!=="h"){let d=["#e2b466","#8bff5a","#d060ff"];t.grime.forEachRemaining(c,(f,p,x)=>{i.fillStyle=d[x],i.fillRect(f*o-.8,p*o-.8,1.6,1.6)})}for(let d of t.barrels.list)d.alive&&(i.fillStyle="#b6ff3a",i.beginPath(),i.arc(d.x*o,d.z*o,1.3,0,7),i.fill());i.fillStyle="#ff4a4a";for(let d of t.enemies.list)d.dying<=0&&(i.beginPath(),i.arc(d.pos.x*o,d.pos.z*o,1.6,0,7),i.fill());for(let d of t.enemies.pickups)i.fillStyle="#fff",i.fillRect(d.mesh.position.x*o-1.5,d.mesh.position.z*o-1.5,3,3);t.enemies.boss&&t.enemies.boss.alive&&(i.fillStyle=t.enemies.boss.active?"#ff4ad0":"#7a3a6a",i.beginPath(),i.arc(t.enemies.boss.x*o,t.enemies.boss.z*o,4,0,7),i.fill()),i.restore(),i.save(),i.translate(s,s);let h=i.createRadialGradient(0,0,0,0,0,a*.6);h.addColorStop(0,"rgba(92,225,255,0.22)"),h.addColorStop(1,"rgba(92,225,255,0)"),i.fillStyle=h,i.beginPath(),i.moveTo(0,0),i.arc(0,0,a*.6,-Math.PI/2-.55,-Math.PI/2+.55),i.closePath(),i.fill(),i.fillStyle="#ffcc4d",i.strokeStyle="rgba(0,0,0,0.6)",i.lineWidth=2,i.beginPath(),i.moveTo(0,-11),i.lineTo(-8,8),i.lineTo(0,4),i.lineTo(8,8),i.closePath(),i.stroke(),i.fill(),i.restore(),i.beginPath(),i.arc(s,s,a,0,Math.PI*2),i.lineWidth=3,i.strokeStyle="rgba(255,255,255,0.18)",i.stroke(),i.beginPath(),i.arc(s,s,a+9,0,Math.PI*2),i.lineWidth=16,i.strokeStyle="rgba(8,12,18,0.6)",i.stroke(),i.font="700 15px Rajdhani, sans-serif",i.textAlign="center",i.textBaseline="middle";let u=[["N",0],["E",Math.PI/2],["S",Math.PI],["W",-Math.PI/2]];for(let[d,f]of u){let p=f+e.yaw,x=s+Math.sin(p)*(a+9),g=s-Math.cos(p)*(a+9);i.fillStyle=d==="N"?"#ff6a5a":"rgba(232,238,245,0.75)",i.fillText(d,x,g)}for(let d=0;d<24;d++){let f=d/24*Math.PI*2+e.yaw;if(d%6===0)continue;let p=a+5,x=a+(d%3===0?12:9);i.beginPath(),i.moveTo(s+Math.sin(f)*p,s-Math.cos(f)*p),i.lineTo(s+Math.sin(f)*x,s-Math.cos(f)*x),i.lineWidth=1.5,i.strokeStyle="rgba(255,255,255,0.3)",i.stroke()}}renderShop(){let t=this.game,e=t.weapons;this.el.shopCredits.textContent="\xA2 "+Ds(t.credits);let i=[["weapons","Weapons"],["knives","Knives"],["tools","Tools"],["upgrades","Upgrades"],["supplies","Supplies"]];this.el.shopTabs.innerHTML=i.map(([a,o])=>`<button data-tab="${a}" class="${this.shopTab===a?"on":""}">${o}</button>`).join("");let n=[],s=(a,o,l,c=!1)=>`<button data-act="${a}" ${c||t.credits<l?"disabled":""}>${o}${l?" \u2014 "+Ds(l)+" \xA2":""}</button>`;if(this.shopTab==="weapons"){for(let[a,o]of Object.entries(we)){a==="sidearm"&&e.ownsGun("sidearm");let l=e.ownsGun(a),c=a==="sidearm"?300:Math.round(o.cost*1.15);n.push(`<div class="card"><h4>${o.name}</h4><p>${o.cls.toUpperCase()}${o.pierce?" \xB7 piercing":""}${o.scope?" \xB7 scoped":""}</p>
          <div class="stats">DMG ${o.dmg}${o.pellets>1?"\xD7"+o.pellets:""} \xB7 RPM ${Math.round(o.rate*60)} \xB7 MAG ${o.mag}</div>
          ${l?s("ammo:"+a,"Refill ammo",e.guns.find(h=>h&&h.id===a).refined?o.ammoCost*3:o.ammoCost):s("gun:"+a,"Buy",c)}</div>`)}n.push('<div class="card"><h4>Note</h4><p>You can carry two guns. Buying a third replaces the one in your hands. Wall-buys around the facility are cheaper (no terminal markup).</p></div>')}else if(this.shopTab==="knives")for(let[a,o]of Object.entries(Pi)){let l=e.ownedKnives[a],c=e.knife===a;n.push(`<div class="card"><h4>${o.name}</h4><p>${o.desc}</p><div class="stats">DMG ${o.dmg} \xB7 SPEED ${o.speed}/s \xB7 REACH ${o.range}m</div>
          ${c?'<span class="owned">EQUIPPED</span>':l?s("knife:"+a,"Equip",0):s("knife:"+a,"Buy",o.cost)}</div>`)}else if(this.shopTab==="tools")for(let[a,o]of Object.entries(_r)){let l=e.tools[a],c=o.minPhase&&t.phase<o.minPhase;n.push(`<div class="card"><h4>${o.name}</h4><p>${o.desc}</p>
          ${l?'<span class="owned">OWNED</span>':c?`<span class="owned" style="color:#ff8a5a">Unlocks in Phase ${o.minPhase}</span>`:s("tool:"+a,"Buy",o.cost)}</div>`)}else if(this.shopTab==="upgrades")for(let[a,o]of Object.entries(mi)){let l=t.upg[a],c=o.costs.length,h='<div class="pips">'+Array.from({length:c},(f,p)=>`<i class="${p<l?"on":""}"></i>`).join("")+"</div>",u=f=>o.unit==="%"?Math.round(f*100)+"%":o.unit==="x"?f+"x":f+" "+o.unit,d=o.needs&&!e.tools[o.needs];n.push(`<div class="card"><h4>${o.name}</h4><p>${o.desc}</p>${h}<div class="stats">${u(o.values[l])}${l<c?" \u2192 "+u(o.values[l+1]):" (MAX)"}</div>
          ${l>=c?'<span class="owned">MAXED</span>':d?'<span class="owned" style="color:#ff8a5a">Requires Hydro Lance</span>':s("upg:"+a,"Upgrade",o.costs[l])}</div>`)}else n.push(`<div class="card"><h4>Foam Grenades \xD72</h4><p>Throw with G. Explodes into cleaning foam: wipes stains & spores in a radius and blasts creatures. Max 6.</p>${s("grenade","Buy",Ee.grenadeCost,e.grenades>=6)}</div>`),n.push(`<div class="card"><h4>Full Ammo Restock</h4><p>Refills every gun you're carrying.</p>${s("allammo","Buy",this.allAmmoCost())}</div>`),n.push(`<div class="card"><h4>Medkit</h4><p>Instantly restore full health.</p>${s("heal","Buy",250,t.player.hp>=t.player.maxHp)}</div>`),n.push(`<div class="card"><h4>Remote Tank Purge</h4><p>Empty your vacuum tank from here (pays 75% of chute value).</p>${s("remote","Use",0,e.tank<1)}</div>`);this.el.shopBody.innerHTML=n.join("")}allAmmoCost(){let t=this.game.weapons,e=0;for(let i of t.guns)if(i){let n=t.gunStats(i);e+=Math.round(n.ammoCost*.8)}return e}renderStats(t){let e=this.game,i=e.stats,n=Math.floor(i.time);t.innerHTML=`
      <div>Phase<b>${e.victory?"Complete":e.phase+" / 4"}</b></div>
      <div>Credits<b>\xA2 ${Ds(e.credits)}</b></div>
      <div>Total earned<b>\xA2 ${Ds(i.earned)}</b></div>
      <div>Creatures killed<b>${i.kills}</b></div>
      <div>Debris piles vacuumed<b>${i.piles}</b></div>
      <div>Stains washed<b>${i.stains}</b></div>
      <div>Spore pods burned<b>${i.spores}</b></div>
      <div>Debris sold<b>${Ds(i.units)} units</b></div>
      <div>Deaths<b>${i.deaths}</b></div>
      <div>Time on contract<b>${Math.floor(n/60)}m ${n%60}s</b></div>`}};var xa=class{constructor(){this.ctx=null,this.master=null,this.volume=.6,this.loops={},this.lastPlay={}}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*1.5;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let i=this.noise.getChannelData(0);for(let n=0;n<e;n++)i[n]=Math.random()*2-1}catch{this.ctx=null}}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_noise(t,e,i,n,s,a=.002,o=0){let l=this.ctx,c=l.currentTime+o,h=l.createBufferSource();h.buffer=this.noise;let u=l.createBiquadFilter();u.type=e,u.frequency.value=i,u.Q.value=n;let d=l.createGain();return d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(s,c+a),d.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(u),u.connect(d),d.connect(this.master),h.start(c,Math.random()*.5),h.stop(c+t+.05),u}_tone(t,e,i,n,s,a=0){let o=this.ctx,l=o.currentTime+a,c=o.createOscillator();c.type=t,c.frequency.setValueAtTime(e,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,i),l+n);let h=o.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(s,l+.005),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(h),h.connect(this.master),c.start(l),c.stop(l+n+.05)}_ok(t,e=.02){if(!this.ctx)return!1;let i=this.ctx.currentTime;return this.lastPlay[t]&&i-this.lastPlay[t]<e?!1:(this.lastPlay[t]=i,!0)}shot(t){if(!this._ok("shot_"+t,.03))return;let e={pistol:[.12,2400,.5,160,.14],cannon:[.3,1200,.9,90,.3],smg:[.08,3e3,.35,180,.12],shotgun:[.35,900,1,70,.35],rifle:[.14,2e3,.55,120,.16],lmg:[.15,1600,.6,100,.18],dmr:[.22,1500,.75,100,.22],sniper:[.55,800,1,60,.4]}[t]||[.12,2e3,.5,120,.15];this._noise(e[0],"lowpass",e[1],.7,e[2]),this._tone("triangle",e[3]*2,e[3]*.5,e[4],.5),t==="sniper"&&this._noise(.9,"lowpass",400,.5,.25,.01,.05)}click(){this._ok("click",.15)&&this._tone("square",1800,1200,.03,.08)}reload(){this._ok("reload",.2)&&(this._noise(.05,"bandpass",2500,4,.2),this._noise(.06,"bandpass",1800,4,.25,.002,.25))}swing(){this._ok("swing",.08)&&this._noise(.18,"bandpass",1200,1.5,.25,.04)}slash(){this._ok("slash",.05)&&(this._noise(.12,"highpass",3e3,1,.3),this._tone("sine",300,120,.12,.3))}hit(){this._ok("hit",.04)&&this._noise(.07,"bandpass",600,2,.35)}headshot(){this._ok("head",.05)&&this._tone("sine",1600,1500,.12,.2)}kill(){this._ok("kill",.05)&&(this._noise(.3,"lowpass",500,1,.45,.01),this._tone("sine",140,50,.3,.4))}hurt(){this._ok("hurt",.2)&&(this._tone("sawtooth",220,90,.25,.2),this._noise(.2,"lowpass",400,1,.3))}growl(){this._ok("growl",.6)&&(this._tone("sawtooth",90+Math.random()*40,50,.6,.08),this._noise(.5,"bandpass",300,3,.1,.1))}spit(){this._ok("spit",.1)&&this._noise(.2,"bandpass",900,3,.25,.02)}splat(){this._ok("splat",.05)&&this._noise(.15,"lowpass",700,1,.3)}step(){this._ok("step",.12)&&this._noise(.06,"lowpass",300+Math.random()*200,1,.12)}land(){this._ok("land",.15)&&this._noise(.12,"lowpass",220,1,.3)}slide(){this._ok("slide",.3)&&this._noise(.5,"bandpass",700,.8,.18,.03)}cash(){this._ok("cash",.08)&&(this._tone("square",1320,1320,.06,.06),this._tone("square",1760,1760,.12,.06,.07))}deny(){this._ok("deny",.2)&&(this._tone("square",200,160,.15,.1),this._tone("square",150,120,.2,.1,.15))}buy(){this._ok("buy",.1)&&[660,880,1320].forEach((t,e)=>this._tone("triangle",t,t,.12,.15,e*.07))}door(){this._ok("door",.5)&&(this._noise(1.6,"lowpass",300,1,.4,.2),this._tone("sawtooth",60,90,1.5,.12))}phase(){this._ok("phase",1)&&[523,659,784,1046].forEach((t,e)=>this._tone("triangle",t,t,.35,.18,e*.16))}surge(){this._ok("surge",2)&&(this._tone("sawtooth",80,40,2,.2),this._tone("sawtooth",83,41,2,.2))}boom(){this._ok("boom",.1)&&(this._noise(.9,"lowpass",500,.7,.6,.005),this._tone("sine",90,30,.8,.6))}pop(){this._ok("pop",.04)&&(this._tone("sine",500,1200,.08,.15),this._noise(.2,"highpass",2e3,1,.15))}pickup(){this._ok("pickup",.05)&&this._tone("sine",700,1100,.05,.05)}boss(){this._ok("boss",3)&&(this._tone("sawtooth",50,30,3,.3),this._noise(3,"lowpass",200,2,.4,.5))}loop(t,e){if(!this.ctx)return;let i=this.loops[t];if(e&&!i){let n=this.ctx,s=n.createBufferSource();s.buffer=this.noise,s.loop=!0;let a=n.createBiquadFilter(),o=n.createGain();o.gain.value=1e-4,t==="vacuum"?(a.type="bandpass",a.frequency.value=900,a.Q.value=.8):t==="washer"?(a.type="highpass",a.frequency.value=2500,a.Q.value=.5):(a.type="lowpass",a.frequency.value=600,a.Q.value=.7),s.connect(a),a.connect(o),o.connect(this.master),s.start();let l=null;if(t==="vacuum"){l=n.createOscillator(),l.type="sawtooth",l.frequency.value=110;let c=n.createGain();c.gain.value=.03,l.connect(c),c.connect(o),l.start()}i=this.loops[t]={src:s,g:o,osc:l},o.gain.setTargetAtTime(t==="washer"?.18:.3,n.currentTime,.05)}else if(!e&&i){let n=this.ctx;i.g.gain.setTargetAtTime(1e-4,n.currentTime,.05);let s=i.src,a=i.osc;setTimeout(()=>{try{s.stop(),a&&a.stop()}catch{}},300),delete this.loops[t]}}wind(t){if(!this.ctx)return;if(!this.windNode){let i=this.ctx,n=i.createBufferSource();n.buffer=this.noise,n.loop=!0;let s=i.createBiquadFilter();s.type="bandpass",s.frequency.value=400,s.Q.value=.6;let a=i.createGain();a.gain.value=1e-4,n.connect(s),s.connect(a),a.connect(this.master),n.start(),this.windNode={g:a,f:s}}let e=this.ctx.currentTime;this.windNode.g.gain.setTargetAtTime(.015+t*.09,e,.3),this.windNode.f.frequency.setTargetAtTime(300+t*500,e,.3)}stopLoops(){for(let t of Object.keys(this.loops))this.loop(t,!1)}};var ya=class{constructor(t){this.canvas=t,this.down=new Set,this.pressed=new Set,this.mouse=[!1,!1,!1],this.mousePressed=[!1,!1,!1],this.dx=0,this.dy=0,this.wheel=0,this.locked=!1,this.forceLocked=!1,this.enabled=!0,window.addEventListener("keydown",e=>{(e.code==="Tab"||e.code==="Space"||e.ctrlKey&&e.code!=="KeyR")&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.down.add(e.code)}),window.addEventListener("keyup",e=>{this.down.delete(e.code)}),window.addEventListener("blur",()=>{this.down.clear(),this.mouse=[!1,!1,!1]}),t.addEventListener("mousedown",e=>{this.mouse[e.button]=!0,this.mousePressed[e.button]=!0}),window.addEventListener("mouseup",e=>{this.mouse[e.button]=!1}),window.addEventListener("mousemove",e=>{this.isLocked()&&(this.dx+=e.movementX||0,this.dy+=e.movementY||0)}),window.addEventListener("wheel",e=>{this.isLocked()&&(this.wheel+=Math.sign(e.deltaY))},{passive:!0}),t.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||(this.mouse=[!1,!1,!1]),this.onLockChange&&this.onLockChange(this.locked)})}isLocked(){return this.locked||this.forceLocked}lock(){try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){document.pointerLockElement&&document.exitPointerLock()}key(t){return this.down.has(t)}hit(t){return this.pressed.has(t)}endFrame(){this.pressed.clear(),this.mousePressed=[!1,!1,!1],this.dx=0,this.dy=0,this.wheel=0}};var va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},_y=new Ss(-1,1,1,-1,0,1),dh=class extends de{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}},My=new dh,Rn=class{constructor(t){this._mesh=new tt(My,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,_y)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Us=class extends li{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=En.clone(t.uniforms),this.material=new Me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Rn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var wr=class extends li{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},_a=class extends li{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ma=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new K);this._width=i.width,this._height=i.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Us(va),this.copyPass.material.blending=Fi,this.clock=new Yo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wr!==void 0&&(a instanceof wr?i=!0:a instanceof _a&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tr=class extends li{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new gt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Ed={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new gt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ns=class r extends li{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new K(t.x,t.y):new K(256,256),this.clearColor=new gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Be(s,a,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Be(s,a,{type:oi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Be(s,a,{type:oi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=Ed;this.highPassUniforms=En.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new K(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=va;this.copyUniforms=En.clone(h.uniforms),this.blendMaterial=new Me({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ye,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new gt,this.oldClearAlpha=1,this.basic=new Jt,this.fsQuad=new Rn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new K(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ns.BlurDirectionX=new K(1,0);Ns.BlurDirectionY=new K(0,1);var wd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ba=class extends li{constructor(){super();let t=wd;this.uniforms=En.clone(t.uniforms),this.material=new Go({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Rn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Kt.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sa=class extends Mn{constructor(){super();let t=new Ze;t.deleteAttribute("uv");let e=new $t({side:qe}),i=new $t,n=new Ri(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let s=new tt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new tt(t,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new tt(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new tt(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new tt(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new tt(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new tt(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new tt(t,zs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new tt(t,zs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let p=new tt(t,zs(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let x=new tt(t,zs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new tt(t,zs(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let m=new tt(t,zs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function zs(r){let t=new Jt;return t.color.setScalar(r),t}var by={uniforms:{tDiffuse:{value:null},time:{value:0},damage:{value:0},aberration:{value:.0012},grain:{value:.035},vignette:{value:.9},flash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float time, damage, aberration, grain, vignette, flash;
    varying vec2 vUv;
    float rand(vec2 co){ return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 d = vUv - 0.5;
      float r2 = dot(d,d);
      float ab = aberration * (1.0 + damage * 4.0) * r2 * 4.0;
      vec3 c;
      c.r = texture2D(tDiffuse, vUv + d * ab).r;
      c.g = texture2D(tDiffuse, vUv).g;
      c.b = texture2D(tDiffuse, vUv - d * ab).b;
      float v = smoothstep(0.85, 0.2, r2 * vignette * 1.6);
      c *= mix(0.55, 1.0, v);
      c = mix(c, c * vec3(1.4, 0.35, 0.3), damage * (1.0 - v) * 0.9);
      c += (rand(vUv * 1000.0 + time) - 0.5) * grain;
      c += vec3(1.0, 0.85, 0.6) * flash;
      gl_FragColor = vec4(c, 1.0);
    }`},Ea=class{constructor(t){this.game=t;let e=t.renderer;e.toneMapping=yr,e.toneMappingExposure=.95;let n=new Es(e).fromScene(new Sa,.04).texture;t.scene.environment=n,t.scene.environmentIntensity=.45,t.weapons.vmScene.environment=n,t.weapons.vmScene.environmentIntensity=.6,this.high=t.settings.quality!=="low",this.build()}build(){let t=this.game,e=t.renderer,i=e.getDrawingBufferSize(new K),n=new Be(i.x,i.y,{type:oi,samples:4});this.composer=new Ma(e,n),this.mainPass=new Tr(t.scene,t.camera),this.vmPass=new Tr(t.weapons.vmScene,t.weapons.vmCam),this.vmPass.clear=!1,this.vmPass.clearDepth=!0,this.bloom=new Ns(new K(i.x,i.y),.55,.5,.82),this.grade=new Us(by),this.output=new ba,this.composer.addPass(this.mainPass),this.composer.addPass(this.vmPass),this.composer.addPass(this.bloom),this.composer.addPass(this.output),this.composer.addPass(this.grade)}setSize(t,e){if(!this.composer)return;let i=this.game.renderer.getPixelRatio();this.composer.setPixelRatio(i),this.composer.setSize(t,e)}setQuality(t){this.high=t!=="low"}render(t,e){let i=this.game,n=i.renderer;if(!this.high){n.clear(),n.render(i.scene,i.camera),e&&(n.clearDepth(),n.render(i.weapons.vmScene,i.weapons.vmCam));return}this.vmPass.enabled=e;let s=this.grade.uniforms;s.time.value=i.time%100;let a=i.player,o=Math.max(0,1-a.hp/a.maxHp-.35)*1.4+(i.time-a.lastHurt<.25?.4:0);s.damage.value+=(Math.min(1,o)-s.damage.value)*Math.min(1,t*8),s.flash.value=Math.max(0,s.flash.value-t*3),this.composer.render(t)}flash(t){this.grade&&(this.grade.uniforms.flash.value=Math.max(this.grade.uniforms.flash.value,t))}};var Ar="grimeProtocol.save.v1",fh="grimeProtocol.settings.v1",ci={get(r){try{return localStorage.getItem(r)}catch{return null}},set(r,t){try{return localStorage.setItem(r,t),!0}catch{return!1}},del(r){try{localStorage.removeItem(r)}catch{}},sget(r){try{return sessionStorage.getItem(r)}catch{return null}},sset(r,t){try{sessionStorage.setItem(r,t)}catch{}},sdel(r){try{sessionStorage.removeItem(r)}catch{}}},ph=class{constructor(){this.canvas=document.getElementById("game"),this.renderer=new To({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!window.__TEST__}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.autoClear=!1,this.renderer.outputColorSpace=ye,this.scene=new Mn,this.scene.background=new gt(921878),this.scene.fog=new Ao(1316894,18,75),this.camera=new Ue(70,1,.05,220),this.settings={sens:1,fov:95,vol:.6,invert:!1,showFps:!1,quality:"high"};try{Object.assign(this.settings,JSON.parse(ci.get(fh)||"{}"))}catch{}this.time=0,this.fps=60,this.shake=0,this.state="menu",this.phase=1,this.victory=!1,this.bossAwake=!1,this.credits=500,this.difficulty=1,this.upg={tank:0,suction:0,pressure:0,reservoir:0,armor:0},this.perks={},this.powerups={double:0,insta:0},this.stats={kills:0,piles:0,stains:0,spores:0,units:0,deaths:0,earned:0,time:0,armor:0},this.god=!1,this.audio=new xa,this.audio.setVolume(this.settings.vol),this.input=new ya(this.canvas),this.setupLights(),this.level=new ta(this.scene),this.grime=new ea(this.scene,this.level),this.particles=new na(this.scene),this.effects=new sa(this),this.player=new ma(this),this.weapons=new pa(this),this.enemies=new la(this),this.ui=new ga(this),this.post=new Ea(this),this.ambience=new ra(this),this.ambience.flickerLights=[this.zoneLights[4],this.zoneLights[7],this.zoneLights[9],this.zoneLights[11]],this.barrels=new oa(this),this.buildInteractables();let t=this.level.startCell,[e,i]=this.level.center(t.x,t.y);this.player.spawnAt(e,i,-Math.PI/2),this.level.openDoor(1,!0),window.addEventListener("resize",()=>this.resize()),this.resize(),this.input.onLockChange=n=>{!n&&this.state==="playing"&&!this.input.forceLocked&&this.pause()},this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.input.isLocked()&&this.input.lock()}),window.addEventListener("keydown",n=>this.onKey(n)),window.addEventListener("keyup",n=>{n.code==="Tab"&&this.ui.show("stats",!1)}),this.wireMenus(),this.last=performance.now(),this.autosaveT=30,this.checkT=0}setupLights(){this.scene.add(new Rs(13161702,3814444,.75));let t=new qo(16777215,.12);this.scene.add(t);let e=[[20,66,16773853],[30,60,14543103],[56,56,16769712],[80,66,16769712],[70,52,16767136],[44,30,14740735],[70,36,14740735],[86,28,13689087],[12,34,13172688],[22,46,13172688],[48,12,16751194],[30,10,16742970],[66,14,16742970]];this.zoneLights=[];for(let[i,n,s]of e){let a=new Ri(s,26,30,1.25);a.position.set(i,3.9,n),a.userData.base=26,this.scene.add(a),this.zoneLights.push(a)}}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.post&&this.post.setSize(t,e),this.camera.aspect=t/e,this.weapons.vmCam.aspect=t/e,this.weapons.vmCam.updateProjectionMatrix(),this.particles.setScale(e*this.renderer.getPixelRatio()),this.updateFov()}baseVFov(){let t=Zc.degToRad(this.settings.fov);return 2*Math.atan(Math.tan(t/2)/Math.max(1,this.camera.aspect*.75))*180/Math.PI}updateFov(){let t=Zc.degToRad(this.baseVFov()),e=this.weapons?this.weapons.adsZoomFactor:1,i=this.player&&this.player.sprinting?1.04:1;this.camera.fov=2*Math.atan(Math.tan(t/2)/e*i)*180/Math.PI,this.camera.updateProjectionMatrix()}currentZoneKey(){return this.phase<=4&&Ie[this.phase]?Ie[this.phase].zone:null}unlockedZones(){let t=[];for(let e=1;e<=Math.min(4,this.phase);e++)t.push(Ie[e].zone);return t}activeGrimeZones(){return this.unlockedZones()}spawnZones(){let t=this.unlockedZones(),e=this.currentZoneKey();return this.victory?t:e?[e,e,e,e,...t]:t}inHub(){return this.level.zoneAtWorld(this.player.pos.x,this.player.pos.z)==="h"}bossActive(){return!!(this.enemies.boss&&this.enemies.boss.alive&&this.enemies.boss.active)}checkProgress(){if(this.victory||this.phase>4)return;let t=Ie[this.phase];if(this.phase===4&&this.bossAwake)return;this.grime.cleanliness(t.zone)>=t.threshold&&this.completePhase()}completePhase(){let t=this.phase,e=Ie[t];if(this.addCredits(e.bonus,null,!1,`PHASE ${t} COMPLETE`),this.audio.phase(),t<4){this.phase=t+1,this.level.openDoor(this.phase),this.audio.door(),this.ui.invalidateMinimap();let i=Ie[this.phase];this.ui.banner(`PHASE ${t} COMPLETE`,`${Mr[i.zone].name} unlocked \u2014 +${e.bonus} \xA2`,4.5,"#8bff5a"),this.phase===2&&!this.weapons.tools.washer&&setTimeout(()=>this.ui.flash("Tip: buy the Hydro Lance at the Supply Terminal in HQ","#7fc8ff"),4800),this.phase===3&&!this.weapons.tools.torch&&setTimeout(()=>this.ui.flash("Tip: the Spore Torch is now for sale at the Supply Terminal","#ff9a3a"),4800),this.phase===3&&setTimeout(()=>this.ui.flash("The Refinery in HQ is now online \u2014 upgrade your gun!","#e09bff"),9e3),this.phase===4&&this.enemies.createBoss(),this.enemies.surgeTimer=Math.min(this.enemies.surgeTimer,45)}else this.bossAwake=!0,this.enemies.awakenBoss(),this.ui.banner("THE BLOOM MOTHER AWAKENS","Wash off its slime shield, then destroy the core!",5,"#ff4ad0");this.save()}onBossDefeated(){this.victory=!0,this.phase=5,this.save(),this.victoryT=3.5}showVictory(){this.state="victory",this.input.unlock(),this.audio.stopLoops(),this.ui.renderStats(document.getElementById("victoryStats")),this.ui.show("victory",!0)}addCredits(t,e,i=!1,n=null){let s=Math.round(t*(this.powerups.double>0?2:1));this.credits+=s,this.stats.earned+=s,this.ui.popup((n?n+"  ":"")+"+"+s,!i),i||this.audio.cash()}spend(t){return this.credits<t?(this.audio.deny(),this.ui.flash("Not enough credits","#ff5a4a"),!1):(this.credits-=t,this.audio.buy(),!0)}applyPowerup(t,e){this.ui.banner(e,"",2,"#fff"),this.audio.phase(),t==="ammo"?(this.weapons.refillAllAmmo(),this.weapons.grenades=Math.min(6,this.weapons.grenades+1)):t==="double"?this.powerups.double=30:t==="insta"?this.powerups.insta=30:t==="purge"&&(this.enemies.purgeAll(),this.addCredits(400,null,!1,"PURGE"))}buildInteractables(){let t=this.level;this.interactables=[];for(let e of t.objects){let i=e.cx+e.face[0]*it*.9,n=e.cz+e.face[1]*it*.9;this.interactables.push({kind:e.kind,x:i,z:n,ox:e.cx,oz:e.cz,obj:e})}for(let e of t.wallbuys)this.interactables.push({kind:"wallbuy",x:e.x,z:e.z,ox:e.mesh.position.x,oz:e.mesh.position.z,gun:e.gun})}findInteractable(){let t=this.player,e=null,i=1e9,n=-Math.sin(t.yaw),s=-Math.cos(t.yaw);for(let a of this.interactables){let o=Math.hypot(a.x-t.pos.x,a.z-t.pos.z);if(o>1.9)continue;let l=a.ox-t.pos.x,c=a.oz-t.pos.z,h=Math.hypot(l,c)||1;(l*n+c*s)/h<.2||o<i&&(i=o,e=a)}return e}promptFor(t){let e=this.weapons,i="<b>[E]</b>";switch(t.kind){case"S":return`${i} Open Supply Terminal`;case"I":return e.tank>0?`${i} Empty tank \u2014 ${Math.floor(e.tank)} units \u2192 <b>${Math.floor(e.tank*Ee.perUnit*(this.powerups.double>0?2:1))} \xA2</b>`:"Disposal Chute \u2014 your tank is empty";case"W":return e.tools.washer||e.tools.torch?`${i} Refill water &amp; fuel`:"Service Station \u2014 refills the Hydro Lance and Spore Torch";case"P":{let n=Tn[t.obj.perk];return this.perks[t.obj.perk]?`${n.name} \u2014 owned`:`${i} Buy ${n.name} \u2014 <b>${n.cost} \xA2</b><br><small>${n.desc}</small>`}case"R":{if(this.phase<3)return"Refinery \u2014 offline until Phase 3";let n=e.current;return!n||n.type!=="gun"?"Refinery \u2014 hold a gun to refine it":n.st.refined?"Refinery \u2014 this gun is already refined":`${i} Refine ${n.def.name} \u2014 <b>${Ee.refineCost} \xA2</b><br><small>\xD72.2 damage, bigger mags, extra pierce</small>`}case"M":return`${i} Supply Crate \u2014 random weapon \u2014 <b>${Ee.crateCost} \xA2</b>`;case"wallbuy":{let n=we[t.gun];if(e.ownsGun(t.gun)){let s=e.guns.find(a=>a&&a.id===t.gun);return`${i} Buy ammo for ${n.name} \u2014 <b>${s.refined?n.ammoCost*3:n.ammoCost} \xA2</b>`}return`${i} Buy ${n.name} \u2014 <b>${n.cost} \xA2</b>`}}return""}interact(t){let e=this.weapons;switch(t.kind){case"S":this.openShop();break;case"I":{if(e.tank<=0){this.audio.deny();break}let i=Math.floor(e.tank);this.stats.units+=i,this.addCredits(i*Ee.perUnit,null,!1,"DEBRIS SOLD"),e.tank=0,this.particles.burst(t.ox,1.6,t.oz,9305967,25,3,.1),this.save();break}case"W":{if(!e.tools.washer&&!e.tools.torch){this.audio.deny();break}e.water=e.resCap(),e.fuel=e.resCap(),this.audio.buy(),this.ui.flash("Water and fuel refilled","#7fc8ff");break}case"P":{let i=t.obj.perk,n=Tn[i];if(this.perks[i])break;this.spend(n.cost)&&(this.perks[i]=!0,this.ui.banner(n.name.toUpperCase(),n.desc,2.5,"#"+n.color.toString(16).padStart(6,"0")),i==="ironhide"&&(this.player.hp=200),this.save());break}case"R":{if(this.phase<3){this.audio.deny();break}let i=e.current;if(!i||i.type!=="gun"||i.st.refined){this.audio.deny();break}this.spend(Ee.refineCost)&&(e.refine(),this.ui.banner("REFINED",e.current.def.name,2.5,"#e09bff"),this.particles.burst(t.ox,1.5,t.oz,12602879,50,5,.12),this.save());break}case"M":{let i=pd.filter(n=>!e.ownsGun(n));if(!i.length){this.ui.flash("You already own everything in the crate!","#ffd25a");break}if(this.spend(Ee.crateCost)){let n=i[Math.random()*i.length|0];e.giveGun(n),this.ui.banner(we[n].name.toUpperCase(),"from the Supply Crate",2.2,"#7fd8ff"),this.particles.burst(t.ox,1.3,t.oz,8378623,40,5,.1),this.save()}break}case"wallbuy":{let i=we[t.gun];if(e.ownsGun(t.gun)){let n=e.guns.find(a=>a&&a.id===t.gun),s=e.gunStats(n);if(n.mag>=s.mag&&n.reserve>=s.reserve){this.ui.flash("Ammo already full","#fff");break}this.spend(n.refined?i.ammoCost*3:i.ammoCost)&&e.refillAmmo(t.gun)}else this.spend(i.cost)&&(e.giveGun(t.gun),this.save());break}}}openShop(){this.state="shop",this.audio.stopLoops(),this.input.unlock(),this.ui.renderShop(),this.ui.show("shop",!0)}closeShop(){this.ui.show("shop",!1),this.state="playing",this.input.lock()}shopAction(t){let e=this.weapons,[i,n]=t.split(":");if(i==="gun"){let s=n==="sidearm"?300:Math.round(we[n].cost*1.15);!e.ownsGun(n)&&this.spend(s)&&e.giveGun(n)}else if(i==="ammo"){let s=e.guns.find(a=>a&&a.id===n);s&&this.spend(s.refined?we[n].ammoCost*3:we[n].ammoCost)&&e.refillAmmo(n)}else if(i==="knife")e.ownedKnives[n]?(e.setKnife(n),this.audio.pickup()):this.spend(Pi[n].cost)&&e.setKnife(n);else if(i==="tool"){let s=_r[n];!e.tools[n]&&(!s.minPhase||this.phase>=s.minPhase)&&this.spend(s.cost)&&(e.tools[n]=!0,n==="washer"&&(e.water=e.resCap()),n==="torch"&&(e.fuel=e.resCap()),e.switchTo(n))}else if(i==="upg"){let s=mi[n],a=this.upg[n];a<s.costs.length&&this.spend(s.costs[a])&&(this.upg[n]++,this.stats.armor=mi.armor.values[this.upg.armor])}else if(i==="grenade")e.grenades<6&&this.spend(Ee.grenadeCost)&&(e.grenades=Math.min(6,e.grenades+2));else if(i==="allammo")this.spend(this.ui.allAmmoCost())&&e.refillAllAmmo();else if(i==="heal")this.player.hp<this.player.maxHp&&this.spend(250)&&(this.player.hp=this.player.maxHp);else if(i==="remote"&&e.tank>=1){let s=Math.floor(e.tank);this.stats.units+=s,this.addCredits(Math.floor(s*Ee.perUnit*.75),null,!1,"REMOTE PURGE"),e.tank=0}this.save(),this.ui.renderShop()}wireMenus(){let t=a=>document.getElementById(a),e=!!ci.get(Ar);t("btnContinue").classList.toggle("hidden",!e),t("btnNew").onclick=()=>{this.audio.init(),this.newGame()},t("btnContinue").onclick=()=>{this.audio.init(),this.continueGame()};let i=(a,o)=>{this.subFrom=o,this.ui.show(o,!1),this.ui.show(a,!0),a==="settings"&&this.syncSettingsUI()};t("btnControls").onclick=()=>i("controls","menu"),t("btnSettings").onclick=()=>i("settings","menu"),t("btnPControls").onclick=()=>i("controls","pause"),t("btnPSettings").onclick=()=>i("settings","pause"),document.querySelectorAll(".btnBack").forEach(a=>a.onclick=()=>{this.ui.show("controls",!1),this.ui.show("settings",!1),this.ui.show(this.subFrom||"menu",!0)}),t("btnResume").onclick=()=>this.resume(),t("btnSaveQuit").onclick=()=>{this.save(),ci.sdel("gp.autostart"),location.reload()},t("btnRespawn").onclick=()=>this.respawn(),t("btnFreeRoam").onclick=()=>{this.ui.show("victory",!1),this.state="playing",this.input.lock()},t("btnVictoryQuit").onclick=()=>{this.save(),location.reload()},t("shopClose").onclick=()=>this.closeShop(),t("shopTabs").onclick=a=>{let o=a.target.closest("button");o&&o.dataset.tab&&(this.ui.shopTab=o.dataset.tab,this.ui.renderShop())},t("shopBody").onclick=a=>{let o=a.target.closest("button");o&&o.dataset.act&&!o.disabled&&this.shopAction(o.dataset.act)};let n=(a,o,l,c)=>{let h=t(a);h.oninput=()=>{this.settings[o]=h.type==="checkbox"?h.checked:parseFloat(h.value),c&&c(),this.syncSettingsUI(),ci.set(fh,JSON.stringify(this.settings))}};n("sens","sens"),n("fov","fov",null,()=>this.updateFov()),n("vol","vol",null,()=>this.audio.setVolume(this.settings.vol)),n("invert","invert"),n("showFps","showFps"),t("quality").onchange=()=>{this.settings.quality=t("quality").value,this.post.setQuality(this.settings.quality),ci.set(fh,JSON.stringify(this.settings))},document.querySelectorAll("input[name=diff]").forEach(a=>a.onchange=()=>{this.difficulty=parseFloat(a.value)})}syncSettingsUI(){let t=i=>document.getElementById(i),e=this.settings;t("sens").value=e.sens,t("sensVal").textContent=e.sens.toFixed(2),t("fov").value=e.fov,t("fovVal").textContent=e.fov,t("vol").value=e.vol,t("volVal").textContent=Math.round(e.vol*100)+"%",t("invert").checked=!!e.invert,t("showFps").checked=!!e.showFps,t("quality").value=e.quality||"high"}newGame(){if(this.started){ci.del(Ar),ci.sset("gp.autostart","new:"+this.difficulty),location.reload();return}ci.del(Ar),this.started=!0,this.startPlaying(),this.ui.banner("PHASE 1 \u2014 LOADING BAY","Vacuum the debris (4), sell it at a Disposal Chute. Clean 80% to advance.",6,"#8fe3ff")}continueGame(){if(this.started){ci.sset("gp.autostart","continue"),location.reload();return}if(this.started=!0,!this.load()){this.newGame();return}this.startPlaying(),this.ui.banner("CONTRACT RESUMED",Ie[Math.min(4,this.phase)]?Ie[Math.min(4,this.phase)].title:"",3,"#8fe3ff")}startPlaying(){this.ui.show("menu",!1),this.ui.show("loading",!1),this.ui.show("hud",!0),this.state="playing",this.input.lock()}pause(){this.state==="playing"&&(this.state="paused",this.audio.stopLoops(),this.ui.renderStats(document.getElementById("pauseStats")),this.ui.show("pause",!0))}resume(){this.ui.show("pause",!1),this.state="playing",this.input.lock()}onKey(t){if((t.code==="Escape"||t.code==="KeyE")&&this.state==="shop"){t.preventDefault(),this.closeShop();return}if(t.code==="Escape"&&this.state==="paused"&&!document.getElementById("pause").classList.contains("hidden")){this.resume();return}if(t.code==="KeyP"&&this.state==="playing"){this.input.unlock(),this.pause();return}t.code==="Tab"&&this.state==="playing"&&(this.ui.renderStats(document.getElementById("statsBody")),this.ui.show("stats",!0))}onPlayerDeath(){if(this.state!=="playing")return;this.state="dead",this.stats.deaths++,this.audio.stopLoops(),this.input.unlock();let t=Math.floor(this.credits*.1);this.credits-=t;let e=Math.floor(this.weapons.tank);this.weapons.tank=0,document.getElementById("deathText").textContent=`You dropped ${t} \xA2 and ${e} units of debris. Your cleaning progress is safe.`,this.ui.show("death",!0),this.save()}respawn(){this.ui.show("death",!1);let t=this.level.startCell,[e,i]=this.level.center(t.x,t.y);this.player.spawnAt(e,i,-Math.PI/2),this.player.hp=this.player.maxHp,this.enemies.clearAll(),this.weapons.refillAllAmmo(),this.state="playing",this.input.lock()}save(){if(!this.started)return;let t={v:1,phase:this.phase,victory:this.victory,bossAwake:this.bossAwake,credits:this.credits,difficulty:this.difficulty,upg:this.upg,perks:this.perks,stats:this.stats,weapons:this.weapons.serialize(),grime:this.grime.serialize()};ci.set(Ar,JSON.stringify(t))}load(){let t;try{t=JSON.parse(ci.get(Ar)||"null")}catch{t=null}if(!t||t.v!==1)return!1;try{this.phase=Math.max(1,Math.min(5,t.phase|0)),this.victory=!!t.victory,this.bossAwake=!!t.bossAwake&&!this.victory,this.credits=Math.max(0,t.credits|0),this.difficulty=+t.difficulty||1;for(let e in this.upg)this.upg[e]=Math.max(0,Math.min(mi[e].costs.length,(t.upg&&t.upg[e])|0));this.perks={};for(let e in Tn)t.perks&&t.perks[e]&&(this.perks[e]=!0);Object.assign(this.stats,t.stats||{}),this.stats.armor=mi.armor.values[this.upg.armor],this.weapons.deserialize(t.weapons),this.grime.deserialize(t.grime);for(let e=2;e<=Math.min(4,this.phase);e++)this.level.openDoor(e,!0);return this.phase>=4&&!this.victory&&(this.enemies.createBoss(),this.bossAwake&&this.enemies.awakenBoss()),this.player.hp=this.perks.ironhide?200:100,this.ui.invalidateMinimap(),!0}catch(e){return console.error("Save load failed",e),!1}}step(t){this.time+=t;let e=this.state==="playing",i=e&&this.input.isLocked();if(e){this.stats.time+=t,this.player.update(t,this.input,i),this.weapons.update(t,this.input,i),this.enemies.update(t),this.powerups.double=Math.max(0,this.powerups.double-t),this.powerups.insta=Math.max(0,this.powerups.insta-t);let n=this.findInteractable();this.ui.setPrompt(n?this.promptFor(n):""),n&&i&&this.input.hit("KeyE")&&this.interact(n),this.checkT-=t,this.checkT<=0&&(this.checkT=.5,this.checkProgress()),this.autosaveT-=t,this.autosaveT<=0&&(this.autosaveT=30,this.save()),this.ui.update(t),this.victoryT>0&&(this.victoryT-=t,this.victoryT<=0&&this.showVictory())}this.level.update(t,this.time),this.grime.update(t,this.time),this.particles.update(t),this.effects.update(t),this.ambience.update(t),e&&this.barrels.update(t),this.input.endFrame()}render(){this.player.applyCamera(this.camera),this.shake>0&&(this.camera.position.x+=(Math.random()-.5)*this.shake*.2,this.camera.position.y+=(Math.random()-.5)*this.shake*.2,this.shake=Math.max(0,this.shake-.02)),this.updateFov(),this.post.render(this.lastDt||.016,this.state!=="menu")}frame(t){let e=Math.min(.05,Math.max(0,(t-this.last)/1e3));this.last=t,e>0&&(this.fps=this.fps*.95+1/e*.05),this.lastDt=e,this.step(e),this.render()}run(){if(window.__MANUAL__)return;let t=e=>{try{this.frame(e)}catch(i){mh(i)}requestAnimationFrame(t)};requestAnimationFrame(t)}};function mh(r){console.error(r);let t=document.getElementById("errorBox");t&&!t.dataset.shown&&(t.dataset.shown="1",t.classList.remove("hidden"),t.textContent="Error: "+(r&&r.stack?r.stack:r))}window.addEventListener("error",r=>mh(r.error||r.message));function Td(){let r;try{r=new ph}catch(e){mh(e);return}window.GAME=r,document.getElementById("loading").classList.add("hidden");let t=ci.sget("gp.autostart");if(ci.sdel("gp.autostart"),t){let e=t==="continue"?"btnContinue":"btnNew";t.startsWith("new:")&&(r.difficulty=parseFloat(t.split(":")[1])||1,document.querySelectorAll("input[name=diff]").forEach(i=>{i.checked=parseFloat(i.value)===r.difficulty})),document.getElementById(e).classList.remove("hidden")}r.run()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Td):Td();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
