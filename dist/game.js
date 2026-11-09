(()=>{var Il="170";var uu=0,fc=1,du=2;var Th=1,fu=2,En=3,Yn=0,ze=1,Ge=2,Wn=0,Xn=1,$n=2,pc=3,mc=4,pu=5,ci=100,mu=101,gu=102,xu=103,_u=104,yu=200,vu=201,Mu=202,bu=203,oa=204,aa=205,Su=206,Eu=207,wu=208,Tu=209,Au=210,Ru=211,Cu=212,Pu=213,Iu=214,la=0,ca=1,ha=2,Vi=3,ua=4,da=5,fa=6,pa=7,Ll=0,Lu=1,Du=2,qn=0,Uu=1,Nu=2,Fu=3,Ou=4,zu=5,ku=6,Bu=7;var Ah=300,Gi=301,Wi=302,ma=303,ga=304,oo=306,Ss=1e3,di=1001,xa=1002,We=1003,Hu=1004;var Ws=1005;var un=1006,To=1007;var fi=1008;var Rn=1009,Rh=1010,Ch=1011,Es=1012,Dl=1013,pi=1014,dn=1015,Os=1016,Ul=1017,Nl=1018,Xi=1020,Ph=35902,Ih=1021,Lh=1022,an=1023,Dh=1024,Uh=1025,ki=1026,qi=1027,Fl=1028,Ol=1029,Nh=1030,zl=1031;var kl=1033,vr=33776,Mr=33777,br=33778,Sr=33779,_a=35840,ya=35841,va=35842,Ma=35843,ba=36196,Sa=37492,Ea=37496,wa=37808,Ta=37809,Aa=37810,Ra=37811,Ca=37812,Pa=37813,Ia=37814,La=37815,Da=37816,Ua=37817,Na=37818,Fa=37819,Oa=37820,za=37821,Er=36492,ka=36494,Ba=36495,Fh=36283,Ha=36284,Va=36285,Ga=36286;var wr=2300,Wa=2301,Ao=2302,gc=2400,xc=2401,_c=2402;var Vu=3200,Gu=3201;var Bl=0,Wu=1,Gn="",Se="srgb",Qi="srgb-linear",ao="linear",ie="srgb";var Mi=7680;var yc=519,Xu=512,qu=513,Yu=514,Oh=515,$u=516,Zu=517,Ku=518,Ju=519,vc=35044,ji=35048;var Mc="300 es",Tn=2e3,Tr=2001,Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=1234567,xs=Math.PI/180,ws=180/Math.PI;function _i(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[s&255]+Ce[s>>8&255]+Ce[s>>16&255]+Ce[s>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function Hl(s,t){return(s%t+t)%t}function Qu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ju(s,t,e){return s!==t?(e-s)/(t-s):0}function _s(s,t,e){return(1-e)*s+e*t}function td(s,t,e,n){return _s(s,t,1-Math.exp(-e*n))}function ed(s,t=1){return t-Math.abs(Hl(s,t*2)-t)}function nd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function id(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function sd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function rd(s,t){return s+Math.random()*(t-s)}function od(s){return s*(.5-Math.random())}function ad(s){s!==void 0&&(bc=s);let t=bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ld(s){return s*xs}function cd(s){return s*ws}function hd(s){return(s&s-1)===0&&s!==0}function ud(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function dd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Vl={DEG2RAD:xs,RAD2DEG:ws,generateUUID:_i,clamp:Te,euclideanModulo:Hl,mapLinear:Qu,inverseLerp:ju,lerp:_s,damp:td,pingpong:ed,smoothstep:nd,smootherstep:id,randInt:sd,randFloat:rd,randFloatSpread:od,seededRandom:ad,degToRad:ld,radToDeg:cd,isPowerOfTwo:hd,ceilPowerOfTwo:ud,floorPowerOfTwo:dd,setQuaternionFromProperEuler:fd,normalize:De,denormalize:Fi},at=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],M=i[1],S=i[4],_=i[7],L=i[2],E=i[5],T=i[8];return r[0]=o*x+a*M+l*L,r[3]=o*m+a*S+l*E,r[6]=o*p+a*_+l*T,r[1]=c*x+h*M+u*L,r[4]=c*m+h*S+u*E,r[7]=c*p+h*_+u*T,r[2]=d*x+f*M+g*L,r[5]=d*m+f*S+g*E,r[8]=d*p+f*_+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ro.makeScale(t,e)),this}rotate(t){return this.premultiply(Ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ro=new Vt;function zh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pd(){let s=Ar("canvas");return s.style.display="block",s}var Sc={};function ms(s){s in Sc||(Sc[s]=!0,console.warn(s))}function md(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?ao:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function An(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ec=[.64,.33,.3,.6,.15,.06],wc=[.2126,.7152,.0722],Tc=[.3127,.329],Ac=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Qi]:{primaries:Ec,whitePoint:Tc,transfer:ao,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:wc,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:Ec,whitePoint:Tc,transfer:ie,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:wc,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}});var bi,Xa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=Ar("canvas")),bi.width=t.width,bi.height=t.height;let n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_d=0,Rr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Co(i[o].image)):r.push(Co(i[o]))}else r=Co(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Co(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yd=0,ke=class s extends Zn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=di,i=di,r=un,o=fi,a=an,l=Rn,c=s.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=_i(),this.name="",this.source=new Rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ss:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ss:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Ah;ke.DEFAULT_ANISOTROPY=1;var se=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,_=(f+1)/2,L=(p+1)/2,E=(h+d)/4,T=(u+x)/4,R=(g+m)/4;return S>_&&S>L?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=T/n):_>L?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=R/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=T/r,i=R/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Rr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Cr=class extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let L=Math.sqrt(S),E=Math.atan2(L,p*M);m=Math.sin(m*E)/L,a=Math.sin(a*E)/L}let _=a*M;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Po=new P,Cc=new fn,Pn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),qs.subVectors(this.max,as),Si.subVectors(t.a,as),Ei.subVectors(t.b,as),wi.subVectors(t.c,as),On.subVectors(Ei,Si),zn.subVectors(wi,Ei),ni.subVectors(Si,wi);let e=[0,-On.z,On.y,0,-zn.z,zn.y,0,-ni.z,ni.y,On.z,0,-On.x,zn.z,0,-zn.x,ni.z,0,-ni.x,-On.y,On.x,0,-zn.y,zn.x,0,-ni.y,ni.x,0];return!Io(e,Si,Ei,wi,qs)||(e=[1,0,0,0,1,0,0,0,1],!Io(e,Si,Ei,wi,qs))?!1:(Ys.crossVectors(On,zn),e=[Ys.x,Ys.y,Ys.z],Io(e,Si,Ei,wi,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},yn=[new P,new P,new P,new P,new P,new P,new P,new P],sn=new P,Xs=new Pn,Si=new P,Ei=new P,wi=new P,On=new P,zn=new P,ni=new P,as=new P,qs=new P,Ys=new P,ii=new P;function Io(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ii.fromArray(s,r);let a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var vd=new Pn,ls=new P,Lo=new P,In=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);let e=ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(Lo)),this.expandByPoint(ls.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new P,Do=new P,$s=new P,kn=new P,Uo=new P,Zs=new P,No=new P,Ts=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Do.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Do);let r=t.distanceTo(e)*.5,o=-this.direction.dot($s),a=kn.dot(this.direction),l=-kn.dot($s),c=kn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Do).addScaledVector($s,d),f}intersectSphere(t,e){vn.subVectors(t.center,this.origin);let n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,i,r){Uo.subVectors(e,t),Zs.subVectors(n,t),No.crossVectors(Uo,Zs);let o=this.direction.dot(No),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);let l=a*this.direction.dot(Zs.crossVectors(kn,Zs));if(l<0)return null;let c=a*this.direction.dot(Uo.cross(kn));if(c<0||l+c>o)return null;let h=-a*kn.dot(No);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),o=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Md,t,bd)}lookAt(t,e,n){let i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Bn.crossVectors(n,He),Bn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Bn.crossVectors(n,He)),Bn.normalize(),Ks.crossVectors(He,Bn),i[0]=Bn.x,i[4]=Ks.x,i[8]=He.x,i[1]=Bn.y,i[5]=Ks.y,i[9]=He.y,i[2]=Bn.z,i[6]=Ks.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],S=n[7],_=n[11],L=n[15],E=i[0],T=i[4],R=i[8],v=i[12],y=i[1],C=i[5],z=i[9],F=i[13],k=i[2],q=i[6],G=i[10],Q=i[14],O=i[3],tt=i[7],st=i[11],ft=i[15];return r[0]=o*E+a*y+l*k+c*O,r[4]=o*T+a*C+l*q+c*tt,r[8]=o*R+a*z+l*G+c*st,r[12]=o*v+a*F+l*Q+c*ft,r[1]=h*E+u*y+d*k+f*O,r[5]=h*T+u*C+d*q+f*tt,r[9]=h*R+u*z+d*G+f*st,r[13]=h*v+u*F+d*Q+f*ft,r[2]=g*E+x*y+m*k+p*O,r[6]=g*T+x*C+m*q+p*tt,r[10]=g*R+x*z+m*G+p*st,r[14]=g*v+x*F+m*Q+p*ft,r[3]=M*E+S*y+_*k+L*O,r[7]=M*T+S*C+_*q+L*tt,r[11]=M*R+S*z+_*G+L*st,r[15]=M*v+S*F+_*Q+L*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,_=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,L=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,E=e*M+n*S+i*_+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=M*T,t[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*T,t[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*T,t[4]=S*T,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*T,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*T,t[8]=_*T,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*T,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*T,t[12]=L*T,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*T,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,M=l*c,S=l*h,_=l*u,L=n.x,E=n.y,T=n.z;return i[0]=(1-(x+p))*L,i[1]=(f+_)*L,i[2]=(g-S)*L,i[3]=0,i[4]=(f-_)*E,i[5]=(1-(d+p))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+S)*T,i[9]=(m-M)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ti.set(i[0],i[1],i[2]).length(),o=Ti.set(i[4],i[5],i[6]).length(),a=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],rn.copy(this);let c=1/r,h=1/o,u=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Tn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===Tn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Tr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Tn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h,g,x;if(a===Tn)g=(o+r)*u,x=-2*u;else if(a===Tr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ti=new P,rn=new Qt,Md=new P(0,0,0),bd=new P(1,1,1),Bn=new P,Ks=new P,He=new P,Pc=new Qt,Ic=new fn,Ne=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ne.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sd=0,Lc=new P,Ai=new fn,Mn=new Qt,Js=new P,cs=new P,Ed=new P,wd=new fn,Dc=new P(1,0,0),Uc=new P(0,1,0),Nc=new P(0,0,1),Fc={type:"added"},Td={type:"removed"},Ri={type:"childadded",child:null},Fo={type:"childremoved",child:null},ge=class s extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new Ne,n=new fn,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Vt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Uc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Uc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(cs,Js,this.up):Mn.lookAt(Js,cs,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Td),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ge.DEFAULT_UP=new P(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new P,bn=new P,Oo=new P,Sn=new P,Ci=new P,Pi=new P,Oc=new P,zo=new P,ko=new P,Bo=new P,Ho=new se,Vo=new se,Go=new se,hi=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),on.subVectors(t,e),i.cross(on);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){on.subVectors(i,e),bn.subVectors(n,e),Oo.subVectors(t,e);let o=on.dot(on),a=on.dot(bn),l=on.dot(Oo),c=bn.dot(bn),h=bn.dot(Oo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ho.setScalar(0),Vo.setScalar(0),Go.setScalar(0),Ho.fromBufferAttribute(t,e),Vo.fromBufferAttribute(t,n),Go.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ho,r.x),o.addScaledVector(Vo,r.y),o.addScaledVector(Go,r.z),o}static isFrontFacing(t,e,n,i){return on.subVectors(n,e),bn.subVectors(t,e),on.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),on.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ci.subVectors(i,n),Pi.subVectors(r,n),zo.subVectors(t,n);let l=Ci.dot(zo),c=Pi.dot(zo);if(l<=0&&c<=0)return e.copy(n);ko.subVectors(t,i);let h=Ci.dot(ko),u=Pi.dot(ko);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ci,o);Bo.subVectors(t,r);let f=Ci.dot(Bo),g=Pi.dot(Bo);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Pi,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Oc.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Oc,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Ci,o).addScaledVector(Pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Wo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Hl(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wo(o,r,t+1/3),this.g=Wo(o,r,t),this.b=Wo(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Zt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Te(Pe.r*255,0,255))*65536+Math.round(Te(Pe.g*255,0,255))*256+Math.round(Te(Pe.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Pe.copy(this),e);let n=Pe.r,i=Pe.g,r=Pe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Se){Zt.fromWorkingColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,i=Pe.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Qs);let n=_s(Hn.h,Qs.h,e),i=_s(Hn.s,Qs.s,e),r=_s(Hn.l,Qs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new zt;zt.NAMES=kh;var Ad=0,pn=class extends Zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=_i(),this.name="",this.blending=Xn,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=aa,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==aa&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ue=class extends pn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new P,js=new at,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vc&&(t.usage=this.usage),t}};var Ir=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Lr=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Rd=0,qe=new Qt,Xo=new ge,Ii=new P,Ve=new Pn,hs=new Pn,be=new P,fe=class s extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zh(t)?Lr:Ir)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Ve.min,hs.min),Ve.expandByPoint(be),be.addVectors(Ve.max,hs.max),Ve.expandByPoint(be)):(Ve.expandByPoint(hs.min),Ve.expandByPoint(hs.max))}Ve.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(t,c),be.add(Ii)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new P,l[R]=new P;let c=new P,h=new P,u=new P,d=new at,f=new at,g=new at,x=new P,m=new P;function p(R,v,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[R].add(x),a[v].add(x),a[y].add(x),l[R].add(m),l[v].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,v=M.length;R<v;++R){let y=M[R],C=y.start,z=y.count;for(let F=C,k=C+z;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new P,_=new P,L=new P,E=new P;function T(R){L.fromBufferAttribute(i,R),E.copy(L);let v=a[R];S.copy(v),S.sub(L.multiplyScalar(L.dot(v))).normalize(),_.crossVectors(E,v);let C=_.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,C)}for(let R=0,v=M.length;R<v;++R){let y=M[R],C=y.start,z=y.count;for(let F=C,k=C+z;F<k;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zc=new Qt,si=new Ts,tr=new In,kc=new P,er=new P,nr=new P,ir=new P,qo=new P,sr=new P,Bc=new P,rr=new P,xt=class extends ge{constructor(t=new fe,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(qo.fromBufferAttribute(u,t),o?sr.addScaledVector(qo,h):sr.addScaledVector(qo.sub(e),h))}e.add(sr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(tr.containsPoint(si.origin)===!1&&(si.intersectSphere(tr,kc)===null||si.origin.distanceToSquared(kc)>(t.far-t.near)**2))&&(zc.copy(r).invert(),si.copy(t.ray).applyMatrix4(zc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,L=S;_<L;_+=3){let E=a.getX(_),T=a.getX(_+1),R=a.getX(_+2);i=or(this,p,t,n,c,h,u,E,T,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);i=or(this,o,t,n,c,h,u,M,S,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,L=S;_<L;_+=3){let E=_,T=_+1,R=_+2;i=or(this,p,t,n,c,h,u,E,T,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,S=m+1,_=m+2;i=or(this,o,t,n,c,h,u,M,S,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Cd(s,t,e,n,i,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Yn,a),l===null)return null;rr.copy(a),rr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(rr);return c<e.near||c>e.far?null:{distance:c,point:rr.clone(),object:s}}function or(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,er),s.getVertexPosition(l,nr),s.getVertexPosition(c,ir);let h=Cd(s,t,e,n,er,nr,ir,Bc);if(h){let u=new P;hi.getBarycoord(Bc,er,nr,ir,u),i&&(h.uv=hi.getInterpolatedAttribute(i,a,l,c,u,new at)),r&&(h.uv1=hi.getInterpolatedAttribute(r,a,l,c,u,new at)),o&&(h.normal=hi.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};hi.getNormal(er,nr,ir,d.normal),h.face=d,h.barycoord=u}return h}var Ie=class s extends fe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(x,m,p,M,S,_,L,E,T,R,v){let y=_/T,C=L/R,z=_/2,F=L/2,k=E/2,q=T+1,G=R+1,Q=0,O=0,tt=new P;for(let st=0;st<G;st++){let ft=st*C-F;for(let Ut=0;Ut<q;Ut++){let kt=Ut*y-z;tt[x]=kt*M,tt[m]=ft*S,tt[p]=k,c.push(tt.x,tt.y,tt.z),tt[x]=0,tt[m]=0,tt[p]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Ut/T),u.push(1-st/R),Q+=1}}for(let st=0;st<R;st++)for(let ft=0;ft<T;ft++){let Ut=d+ft+q*st,kt=d+ft+q*(st+1),X=d+(ft+1)+q*(st+1),rt=d+(ft+1)+q*st;l.push(Ut,kt,rt),l.push(kt,X,rt),O+=6}a.addGroup(f,O,v),f+=O,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Yi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){let t={};for(let e=0;e<s.length;e++){let n=Yi(s[e]);for(let i in n)t[i]=n[i]}return t}function Pd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Id={clone:Yi,merge:Ue},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends pn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Dr=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new P,Hc=new at,Vc=new at,Ee=class extends Dr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Hc,Vc),e.subVectors(Vc,Hc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Li=-90,Di=1,$a=class extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ee(Li,Di,t,e);i.layers=this.layers,this.add(i);let r=new Ee(Li,Di,t,e);r.layers=this.layers,this.add(r);let o=new Ee(Li,Di,t,e);o.layers=this.layers,this.add(o);let a=new Ee(Li,Di,t,e);a.layers=this.layers,this.add(a);let l=new Ee(Li,Di,t,e);l.layers=this.layers,this.add(l);let c=new Ee(Li,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ur=class extends ke{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Za=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ur(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ie(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Wn});r.uniforms.tEquirect.value=e;let o=new xt(i,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=un),new $a(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Yo=new P,Ud=new P,Nd=new Vt,wn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Yo.subVectors(n,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Nd.getNormalMatrix(t),i=this.coplanarPoint(Yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new In,ar=new P,As=class{constructor(t=new wn,e=new wn,n=new wn,i=new wn,r=new wn,o=new wn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],M=i[13],S=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+o,d+h,m+g,_+M).normalize(),n[3].setComponents(l-o,d-h,m-g,_-M).normalize(),n[4].setComponents(l-a,d-u,m-x,_-S).normalize(),e===Tn)n[5].setComponents(l+a,d+u,m+x,_+S).normalize();else if(e===Tr)n[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ar.x=i.normal.x>0?t.max.x:t.min.x,ar.y=i.normal.y>0?t.max.y:t.min.y,ar.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Fd(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var $e=class s extends fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let S=0;S<c;S++){let _=S*u-r;g.push(_,-M,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let S=M+c*p,_=M+c*(p+1),L=M+1+c*(p+1),E=M+1+c*p;f.push(S,_,E),f.push(_,L,E)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,af=`#define PI 3.141592653589793
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
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cf=`uniform bool receiveShadow;
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
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
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
#endif`,Ff=`struct PhysicalMaterial {
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
}`,Of=`
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
#endif`,zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yf=`#if defined( USE_POINTS_UV )
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
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
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
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
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
}`,Wp=`#if DEPTH_PACKING == 3200
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
}`,Xp=`#define DISTANCE
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
}`,qp=`#define DISTANCE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,tm=`#define LAMBERT
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
}`,em=`#define MATCAP
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
}`,nm=`#define MATCAP
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
}`,im=`#define NORMAL
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
}`,sm=`#define NORMAL
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
}`,rm=`#define PHONG
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
}`,om=`#define PHONG
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
}`,am=`#define STANDARD
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
}`,lm=`#define STANDARD
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
}`,cm=`#define TOON
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
}`,hm=`#define TOON
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
}`,um=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,pm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
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
}`,gm=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Od,alphahash_pars_fragment:zd,alphamap_fragment:kd,alphamap_pars_fragment:Bd,alphatest_fragment:Hd,alphatest_pars_fragment:Vd,aomap_fragment:Gd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:$d,bsdfs:Zd,iridescence_fragment:Kd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:tf,clipping_planes_vertex:ef,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:of,common:af,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:hf,displacementmap_vertex:uf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:xf,envmap_pars_fragment:_f,envmap_pars_vertex:yf,envmap_physical_pars_fragment:Pf,envmap_vertex:vf,fog_vertex:Mf,fog_pars_vertex:bf,fog_fragment:Sf,fog_pars_fragment:Ef,gradientmap_pars_fragment:wf,lightmap_pars_fragment:Tf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Rf,lights_pars_begin:Cf,lights_toon_fragment:If,lights_toon_pars_fragment:Lf,lights_phong_fragment:Df,lights_phong_pars_fragment:Uf,lights_physical_fragment:Nf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Of,lights_fragment_maps:zf,lights_fragment_end:kf,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Vf,logdepthbuf_vertex:Gf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:qf,map_particle_pars_fragment:Yf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Zf,morphinstance_vertex:Kf,morphcolor_vertex:Jf,morphnormal_vertex:Qf,morphtarget_pars_vertex:jf,morphtarget_vertex:tp,normal_fragment_begin:ep,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:hp,opaque_fragment:up,packing:dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:xp,roughnessmap_pars_fragment:_p,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:vp,shadowmap_vertex:Mp,shadowmask_pars_fragment:bp,skinbase_vertex:Sp,skinning_pars_vertex:Ep,skinning_vertex:wp,skinnormal_vertex:Tp,specularmap_fragment:Ap,specularmap_pars_fragment:Rp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Pp,transmission_fragment:Ip,transmission_pars_fragment:Lp,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:zp,backgroundCube_vert:kp,backgroundCube_frag:Bp,cube_vert:Hp,cube_frag:Vp,depth_vert:Gp,depth_frag:Wp,distanceRGBA_vert:Xp,distanceRGBA_frag:qp,equirect_vert:Yp,equirect_frag:$p,linedashed_vert:Zp,linedashed_frag:Kp,meshbasic_vert:Jp,meshbasic_frag:Qp,meshlambert_vert:jp,meshlambert_frag:tm,meshmatcap_vert:em,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:om,meshphysical_vert:am,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:hm,points_vert:um,points_frag:dm,shadow_vert:fm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},ht={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},hn={basic:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new zt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ue([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ue([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new zt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ue([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ue([ht.points,ht.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ue([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ue([ht.common,ht.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ue([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ue([ht.sprite,ht.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ue([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ue([ht.lights,ht.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};hn.physical={uniforms:Ue([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var lr={r:0,b:0,g:0},oi=new Ne,xm=new Qt;function _m(s,t,e,n,i,r,o){let a=new zt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function x(M){let S=!1,_=g(M);_===null?p(a,l):_&&_.isColor&&(p(_,1),S=!0);let L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,S){let _=g(S);_&&(_.isCubeTexture||_.mapping===oo)?(h===void 0&&(h=new xt(new Ie(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Yi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),oi.copy(S.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xm.makeRotationFromEuler(oi)),h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ie,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new xt(new $e(2,2),new Ye({name:"BackgroundMaterial",uniforms:Yi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(_.colorSpace)!==ie,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(lr,Bh(s)),n.buffers.color.setClear(lr.r,lr.g,lr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:m}}function ym(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(y,C,z,F,k){let q=!1,G=u(F,z,C);r!==G&&(r=G,c(r.object)),q=f(y,F,z,k),q&&g(y,F,z,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(y,C,z,F),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,C,z){let F=z.wireframe===!0,k=n[y.id];k===void 0&&(k={},n[y.id]=k);let q=k[C.id];q===void 0&&(q={},k[C.id]=q);let G=q[F];return G===void 0&&(G=d(l()),q[F]=G),G}function d(y){let C=[],z=[],F=[];for(let k=0;k<e;k++)C[k]=0,z[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,C,z,F){let k=r.attributes,q=C.attributes,G=0,Q=z.getAttributes();for(let O in Q)if(Q[O].location>=0){let st=k[O],ft=q[O];if(ft===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),st===void 0||st.attribute!==ft||ft&&st.data!==ft.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(y,C,z,F){let k={},q=C.attributes,G=0,Q=z.getAttributes();for(let O in Q)if(Q[O].location>=0){let st=q[O];st===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(st=y.instanceColor));let ft={};ft.attribute=st,st&&st.data&&(ft.data=st.data),k[O]=ft,G++}r.attributes=k,r.attributesNum=G,r.index=F}function x(){let y=r.newAttributes;for(let C=0,z=y.length;C<z;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){let z=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;z[y]=1,F[y]===0&&(s.enableVertexAttribArray(y),F[y]=1),k[y]!==C&&(s.vertexAttribDivisor(y,C),k[y]=C)}function M(){let y=r.newAttributes,C=r.enabledAttributes;for(let z=0,F=C.length;z<F;z++)C[z]!==y[z]&&(s.disableVertexAttribArray(z),C[z]=0)}function S(y,C,z,F,k,q,G){G===!0?s.vertexAttribIPointer(y,C,z,k,q):s.vertexAttribPointer(y,C,z,F,k,q)}function _(y,C,z,F){x();let k=F.attributes,q=z.getAttributes(),G=C.defaultAttributeValues;for(let Q in q){let O=q[Q];if(O.location>=0){let tt=k[Q];if(tt===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){let st=tt.normalized,ft=tt.itemSize,Ut=t.get(tt);if(Ut===void 0)continue;let kt=Ut.buffer,X=Ut.type,rt=Ut.bytesPerElement,St=X===s.INT||X===s.UNSIGNED_INT||tt.gpuType===Dl;if(tt.isInterleavedBufferAttribute){let lt=tt.data,Pt=lt.stride,Ft=tt.offset;if(lt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<O.locationSize;Dt++)p(O.location+Dt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Dt=0;Dt<O.locationSize;Dt++)m(O.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Dt=0;Dt<O.locationSize;Dt++)S(O.location+Dt,ft/O.locationSize,X,st,Pt*rt,(Ft+ft/O.locationSize*Dt)*rt,St)}else{if(tt.isInstancedBufferAttribute){for(let lt=0;lt<O.locationSize;lt++)p(O.location+lt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let lt=0;lt<O.locationSize;lt++)m(O.location+lt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let lt=0;lt<O.locationSize;lt++)S(O.location+lt,ft/O.locationSize,X,st,ft*rt,ft/O.locationSize*lt*rt,St)}}else if(G!==void 0){let st=G[Q];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(O.location,st);break;case 3:s.vertexAttrib3fv(O.location,st);break;case 4:s.vertexAttrib4fv(O.location,st);break;default:s.vertexAttrib1fv(O.location,st)}}}}M()}function L(){R();for(let y in n){let C=n[y];for(let z in C){let F=C[z];for(let k in F)h(F[k].object),delete F[k];delete C[z]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let z in C){let F=C[z];for(let k in F)h(F[k].object),delete F[k];delete C[z]}delete n[y.id]}function T(y){for(let C in n){let z=n[C];if(z[y.id]===void 0)continue;let F=z[y.id];for(let k in F)h(F[k].object),delete F[k];delete z[y.id]}}function R(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:v,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function vm(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==an&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Rn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==dn&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:L,maxSamples:E}}function bm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new wn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,S=M*4,_=p.clippingState||null;l.value=_,_=h(g,d,S,f);for(let L=0;L!==S;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==x;++S,_+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Sm(s){let t=new WeakMap;function e(o,a){return a===ma?o.mapping=Gi:a===ga&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ma||a===ga)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Za(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Nr=class extends Dr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oi=4,Gc=[.125,.215,.35,.446,.526,.582],ui=20,$o=new Nr,Wc=new zt,Zo=null,Ko=0,Jo=0,Qo=!1,li=(1+Math.sqrt(5))/2,Ui=1/li,Xc=[new P(-li,Ui,0),new P(li,Ui,0),new P(-Ui,0,li),new P(Ui,0,li),new P(0,li,-Ui),new P(0,li,Ui),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Ko,Jo),this._renderer.xr.enabled=Qo,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Os,format:an,colorSpace:Qi,depthBuffer:!1},i=qc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Em(r)),this._blurMaterial=wm(r,t,e)}return i}_compileMaterial(t){let e=new xt(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,i){let a=new Ee(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wc),h.toneMapping=qn,h.autoClear=!1;let f=new ue({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new xt(new Ie,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Wc),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let S=this._cubeSize;cr(i,M*S,p>2?S:0,S,S),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Gi||t.mapping===Wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$o)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xc[(i-r-1)%Xc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let p=[],M=0;for(let T=0;T<ui;++T){let R=T/x,v=Math.exp(-R*R/2);p.push(v),T===0?M+=v:T<m&&(M+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let _=this._sizeLods[i],L=3*_*(i>S-Oi?i-S+Oi:0),E=4*(this._cubeSize-_);cr(e,L,E,3*_,2*_),l.setRenderTarget(e),l.render(u,$o)}};function Em(s){let t=[],e=[],n=[],i=s,r=s-Oi+1+Gc.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Oi?l=Gc[o-s+Oi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),S=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){let T=E%3*2/3-1,R=E>2?0:-1,v=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(v,x*g*E),S.set(d,m*g*E);let y=[E,E,E,E,E,E];_.set(y,p*g*E)}let L=new fe;L.setAttribute("position",new Ae(M,x)),L.setAttribute("uv",new Ae(S,m)),L.setAttribute("faceIndex",new Ae(_,p)),t.push(L),i>Oi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qc(s,t,e){let n=new Cn(s,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function wm(s,t,e){let n=new Float32Array(ui),i=new P(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Yc(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function $c(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function Tm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ma||l===ga,h=l===Gi||l===Wi;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fr(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Fr(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Am(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rm(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let S=0,_=M.length;S<_;S+=3){let L=M[S+0],E=M[S+1],T=M[S+2];d.push(L,E,E,T,T,L)}}else if(g!==void 0){let M=g.array;x=g.version;for(let S=0,_=M.length/3-1;S<_;S+=3){let L=S+0,E=S+1,T=S+2;d.push(L,E,E,T,T,L)}}else return;let m=new(zh(d)?Lr:Ir)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Cm(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*x[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Im(s,t,e){let n=new WeakMap,i=new se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let v=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*L*4*u),T=new Cr(E,_,L,u);T.type=dn,T.needsUpdate=!0;let R=S*4;for(let y=0;y<u;y++){let C=m[y],z=p[y],F=M[y],k=_*L*4*y;for(let q=0;q<C.count;q++){let G=q*R;f===!0&&(i.fromBufferAttribute(C,q),E[k+G+0]=i.x,E[k+G+1]=i.y,E[k+G+2]=i.z,E[k+G+3]=0),g===!0&&(i.fromBufferAttribute(z,q),E[k+G+4]=i.x,E[k+G+5]=i.y,E[k+G+6]=i.z,E[k+G+7]=0),x===!0&&(i.fromBufferAttribute(F,q),E[k+G+8]=i.x,E[k+G+9]=i.y,E[k+G+10]=i.z,E[k+G+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new at(_,L)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Lm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Or=class extends ke{constructor(t,e,n,i,r,o,a,l,c,h=ki){if(h!==ki&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=pi),n===void 0&&h===qi&&(n=Xi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Vh=new ke,Zc=new Or(1,1),Gh=new Cr,Wh=new Ya,Xh=new Ur,Kc=[],Jc=[],Qc=new Float32Array(16),jc=new Float32Array(9),th=new Float32Array(4);function ts(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Kc[i];if(r===void 0&&(r=new Float32Array(i),Kc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function lo(s,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Dm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Um(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function Nm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function Fm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function Om(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;th.set(n),s.uniformMatrix2fv(this.addr,!1,th),ve(e,n)}}function zm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;jc.set(n),s.uniformMatrix3fv(this.addr,!1,jc),ve(e,n)}}function km(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Qc.set(n),s.uniformMatrix4fv(this.addr,!1,Qc),ve(e,n)}}function Bm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Hm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function Vm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function Gm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function Wm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Xm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function Ym(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function $m(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zc.compareFunction=Oh,r=Zc):r=Vh,e.setTexture2D(t||r,i)}function Zm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Wh,i)}function Km(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Xh,i)}function Jm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Gh,i)}function Qm(s){switch(s){case 5126:return Dm;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return zm;case 35676:return km;case 5124:case 35670:return Bm;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Jm}}function jm(s,t){s.uniform1fv(this.addr,t)}function t0(s,t){let e=ts(t,this.size,2);s.uniform2fv(this.addr,e)}function e0(s,t){let e=ts(t,this.size,3);s.uniform3fv(this.addr,e)}function n0(s,t){let e=ts(t,this.size,4);s.uniform4fv(this.addr,e)}function i0(s,t){let e=ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function s0(s,t){let e=ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function r0(s,t){let e=ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function o0(s,t){s.uniform1iv(this.addr,t)}function a0(s,t){s.uniform2iv(this.addr,t)}function l0(s,t){s.uniform3iv(this.addr,t)}function c0(s,t){s.uniform4iv(this.addr,t)}function h0(s,t){s.uniform1uiv(this.addr,t)}function u0(s,t){s.uniform2uiv(this.addr,t)}function d0(s,t){s.uniform3uiv(this.addr,t)}function f0(s,t){s.uniform4uiv(this.addr,t)}function p0(s,t,e){let n=this.cache,i=t.length,r=lo(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Vh,r[o])}function m0(s,t,e){let n=this.cache,i=t.length,r=lo(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Wh,r[o])}function g0(s,t,e){let n=this.cache,i=t.length,r=lo(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Xh,r[o])}function x0(s,t,e){let n=this.cache,i=t.length,r=lo(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Gh,r[o])}function _0(s){switch(s){case 5126:return jm;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return x0}}var Ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qm(e.type)}},Ja=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_0(e.type)}},Qa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},jo=/(\w+)(\])?(\[|\.)?/g;function eh(s,t){s.seq.push(t),s.map[t.id]=t}function y0(s,t,e){let n=s.name,i=n.length;for(jo.lastIndex=0;;){let r=jo.exec(n),o=jo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){eh(e,c===void 0?new Ka(a,s,t):new Ja(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Qa(a),eh(e,u)),e=u}}}var Hi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);y0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function nh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var v0=37297,M0=0;function b0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ih=new Vt;function S0(s){Zt._getMatrix(ih,Zt.workingColorSpace,s);let t=`mat3( ${ih.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case ao:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function sh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+b0(s.getShaderSource(t),o)}else return i}function E0(s,t){let e=S0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function w0(s,t){let e;switch(t){case Uu:e="Linear";break;case Nu:e="Reinhard";break;case Fu:e="Cineon";break;case Ou:e="ACESFilmic";break;case ku:e="AgX";break;case Bu:e="Neutral";break;case zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hr=new P;function T0(){Zt.getLuminanceCoefficients(hr);let s=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function R0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function gs(s){return s!==""}function rh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(s){return s.replace(P0,L0)}var I0=new Map;function L0(s,t){let e=Wt[t];if(e===void 0){let n=I0.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ja(e)}var D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(s){return s.replace(D0,U0)}function U0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function F0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gi:case Wi:t="ENVMAP_TYPE_CUBE";break;case oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function z0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ll:t="ENVMAP_BLENDING_MULTIPLY";break;case Lu:t="ENVMAP_BLENDING_MIX";break;case Du:t="ENVMAP_BLENDING_ADD";break}return t}function k0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function B0(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=N0(e),c=F0(e),h=O0(e),u=z0(e),d=k0(e),f=A0(e),g=R0(r),x=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==qn?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,E0("linearToOutputTexel",e.outputColorSpace),T0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=ja(o),o=rh(o,e),o=oh(o,e),a=ja(a),a=rh(a,e),a=oh(a,e),o=ah(o),a=ah(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=M+m+o,_=M+p+a,L=nh(i,i.VERTEX_SHADER,S),E=nh(i,i.FRAGMENT_SHADER,_);i.attachShader(x,L),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(C){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(L).trim(),k=i.getShaderInfoLog(E).trim(),q=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,L,E);else{let Q=sh(i,L,"vertex"),O=sh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+Q+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||k==="")&&(G=!1);G&&(C.diagnostics={runnable:q,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(L),i.deleteShader(E),R=new Hi(i,x),v=C0(i,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,v0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=E,this}var H0=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new el(t),e.set(t,n)),n}},el=class{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}};function V0(s,t,e,n,i,r,o){let a=new Pr,l=new tl,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,C,z,F){let k=z.fog,q=F.geometry,G=v.isMeshStandardMaterial?z.environment:null,Q=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),O=Q&&Q.mapping===oo?Q.image.height:null,tt=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let st=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ft=st!==void 0?st.length:0,Ut=0;q.morphAttributes.position!==void 0&&(Ut=1),q.morphAttributes.normal!==void 0&&(Ut=2),q.morphAttributes.color!==void 0&&(Ut=3);let kt,X,rt,St;if(tt){let ne=hn[tt];kt=ne.vertexShader,X=ne.fragmentShader}else kt=v.vertexShader,X=v.fragmentShader,l.update(v),rt=l.getVertexShaderID(v),St=l.getFragmentShaderID(v);let lt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,Dt=F.isBatchedMesh===!0,$t=!!v.map,K=!!v.matcap,it=!!Q,I=!!v.aoMap,Rt=!!v.lightMap,et=!!v.bumpMap,vt=!!v.normalMap,ct=!!v.displacementMap,It=!!v.emissiveMap,_t=!!v.metalnessMap,A=!!v.roughnessMap,b=v.anisotropy>0,B=v.clearcoat>0,Y=v.dispersion>0,J=v.iridescence>0,$=v.sheen>0,Et=v.transmission>0,ut=b&&!!v.anisotropyMap,yt=B&&!!v.clearcoatMap,qt=B&&!!v.clearcoatNormalMap,nt=B&&!!v.clearcoatRoughnessMap,Mt=J&&!!v.iridescenceMap,Lt=J&&!!v.iridescenceThicknessMap,Nt=$&&!!v.sheenColorMap,bt=$&&!!v.sheenRoughnessMap,Yt=!!v.specularMap,Gt=!!v.specularColorMap,re=!!v.specularIntensityMap,D=Et&&!!v.transmissionMap,dt=Et&&!!v.thicknessMap,W=!!v.gradientMap,Z=!!v.alphaMap,gt=v.alphaTest>0,pt=!!v.alphaHash,Bt=!!v.extensions,me=qn;v.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(me=s.toneMapping);let Re={shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:kt,fragmentShader:X,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:St,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Qi,alphaToCoverage:!!v.alphaToCoverage,map:$t,matcap:K,envMap:it,envMapMode:it&&Q.mapping,envMapCubeUVHeight:O,aoMap:I,lightMap:Rt,bumpMap:et,normalMap:vt,displacementMap:d&&ct,emissiveMap:It,normalMapObjectSpace:vt&&v.normalMapType===Wu,normalMapTangentSpace:vt&&v.normalMapType===Bl,metalnessMap:_t,roughnessMap:A,anisotropy:b,anisotropyMap:ut,clearcoat:B,clearcoatMap:yt,clearcoatNormalMap:qt,clearcoatRoughnessMap:nt,dispersion:Y,iridescence:J,iridescenceMap:Mt,iridescenceThicknessMap:Lt,sheen:$,sheenColorMap:Nt,sheenRoughnessMap:bt,specularMap:Yt,specularColorMap:Gt,specularIntensityMap:re,transmission:Et,transmissionMap:D,thicknessMap:dt,gradientMap:W,opaque:v.transparent===!1&&v.blending===Xn&&v.alphaToCoverage===!1,alphaMap:Z,alphaTest:gt,alphaHash:pt,combine:v.combine,mapUv:$t&&x(v.map.channel),aoMapUv:I&&x(v.aoMap.channel),lightMapUv:Rt&&x(v.lightMap.channel),bumpMapUv:et&&x(v.bumpMap.channel),normalMapUv:vt&&x(v.normalMap.channel),displacementMapUv:ct&&x(v.displacementMap.channel),emissiveMapUv:It&&x(v.emissiveMap.channel),metalnessMapUv:_t&&x(v.metalnessMap.channel),roughnessMapUv:A&&x(v.roughnessMap.channel),anisotropyMapUv:ut&&x(v.anisotropyMap.channel),clearcoatMapUv:yt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:qt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:bt&&x(v.sheenRoughnessMap.channel),specularMapUv:Yt&&x(v.specularMap.channel),specularColorMapUv:Gt&&x(v.specularColorMap.channel),specularIntensityMapUv:re&&x(v.specularIntensityMap.channel),transmissionMapUv:D&&x(v.transmissionMap.channel),thicknessMapUv:dt&&x(v.thicknessMap.channel),alphaMapUv:Z&&x(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(vt||b),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&($t||Z),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ut,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:$t&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===ie,decodeVideoTextureEmissive:It&&v.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(v.emissiveMap.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ge,flipSided:v.side===ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Bt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&v.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)y.push(C),y.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(M(y,v),S(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function M(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function S(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function _(v){let y=g[v.type],C;if(y){let z=hn[y];C=Id.clone(z.uniforms)}else C=v.uniforms;return C}function L(v,y){let C;for(let z=0,F=h.length;z<F;z++){let k=h[z];if(k.cacheKey===y){C=k,++C.usedTimes;break}}return C===void 0&&(C=new B0(s,y,v,r),h.push(C)),C}function E(v){if(--v.usedTimes===0){let y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function T(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function G0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function W0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ch(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function hh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||W0),n.length>1&&n.sort(d||ch),i.length>1&&i.sort(d||ch)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function X0(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new hh,s.set(n,[o])):i>=r.length?(o=new hh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function q0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new zt};break;case"SpotLight":e={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Y0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var $0=0;function Z0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function K0(s){let t=new q0,e=Y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new Qt,o=new Qt;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,S=0,_=0,L=0,E=0,T=0;c.sort(Z0);for(let v=0,y=c.length;v<y;v++){let C=c[v],z=C.color,F=C.intensity,k=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*F,u+=z.g*F,d+=z.b*F;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],F);T++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,O=e.get(C);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=G,f++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(z).multiplyScalar(F),G.distance=k,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;let Q=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,Q.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[x]=Q.matrix,C.castShadow){let O=e.get(C);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=q,_++}x++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(z).multiplyScalar(F),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let Q=C.shadow,O=e.get(C);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,O.shadowCameraNear=Q.camera.near,O.shadowCameraFar=Q.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=G,g++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(F),G.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==_||R.numSpotMaps!==L||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=_,R.numSpotMaps=L,R.numLightProbes=T,n.version=$0++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let S=c[p];if(S.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(S.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function uh(s){let t=new K0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function J0(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new uh(s),t.set(i,[a])):r>=o.length?(a=new uh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var nl=class extends pn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},il=class extends pn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
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
}`;function tg(s,t,e){let n=new As,i=new at,r=new at,o=new se,a=new nl({depthPacking:Gu}),l=new il,c={},h=e.maxTextureSize,u={[Yn]:ze,[ze]:Yn,[Ge]:Ge},d=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Q0,fragmentShader:j0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let p=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let v=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Wn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=p!==En&&this.type===En,k=p===En&&this.type!==En;for(let q=0,G=E.length;q<G;q++){let Q=E[q],O=Q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let tt=O.getFrameExtents();if(i.multiply(tt),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,O.mapSize.y=r.y)),O.map===null||F===!0||k===!0){let ft=this.type!==En?{minFilter:We,magFilter:We}:{};O.map!==null&&O.map.dispose(),O.map=new Cn(i.x,i.y,ft),O.map.texture.name=Q.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();let st=O.getViewportCount();for(let ft=0;ft<st;ft++){let Ut=O.getViewport(ft);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),z.viewport(o),O.updateMatrices(Q,ft),n=O.getFrustum(),_(T,R,O.camera,Q,this.type)}O.isPointLightShadow!==!0&&this.type===En&&M(O,R),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,y,C)};function M(E,T){let R=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,R,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,R,f,x,null)}function S(E,T,R,v){let y=null,C=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let z=y.uuid,F=T.uuid,k=c[z];k===void 0&&(k={},c[z]=k);let q=k[F];q===void 0&&(q=y.clone(),k[F]=q,T.addEventListener("dispose",L)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,v===En?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=s.properties.get(y);z.light=R}return y}function _(E,T,R,v,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===En)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let F=t.update(E),k=E.material;if(Array.isArray(k)){let q=F.groups;for(let G=0,Q=q.length;G<Q;G++){let O=q[G],tt=k[O.materialIndex];if(tt&&tt.visible){let st=S(E,tt,v,y);E.onBeforeShadow(s,E,T,R,F,st,O),s.renderBufferDirect(R,null,F,st,E,O),E.onAfterShadow(s,E,T,R,F,st,O)}}}else if(k.visible){let q=S(E,k,v,y);E.onBeforeShadow(s,E,T,R,F,q,null),s.renderBufferDirect(R,null,F,q,E,null),E.onAfterShadow(s,E,T,R,F,q,null)}}let z=E.children;for(let F=0,k=z.length;F<k;F++)_(z[F],T,R,v,y)}function L(E){E.target.removeEventListener("dispose",L);for(let R in c){let v=c[R],y=E.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}var eg={[la]:ca,[ha]:fa,[ua]:pa,[Vi]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:Vi};function ng(s,t){function e(){let D=!1,dt=new se,W=null,Z=new se(0,0,0,0);return{setMask:function(gt){W!==gt&&!D&&(s.colorMask(gt,gt,gt,gt),W=gt)},setLocked:function(gt){D=gt},setClear:function(gt,pt,Bt,me,Re){Re===!0&&(gt*=me,pt*=me,Bt*=me),dt.set(gt,pt,Bt,me),Z.equals(dt)===!1&&(s.clearColor(gt,pt,Bt,me),Z.copy(dt))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,dt=!1,W=null,Z=null,gt=null;return{setReversed:function(pt){if(dt!==pt){let Bt=t.get("EXT_clip_control");dt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);let me=gt;gt=null,this.setClear(me)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?lt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(pt){W!==pt&&!D&&(s.depthMask(pt),W=pt)},setFunc:function(pt){if(dt&&(pt=eg[pt]),Z!==pt){switch(pt){case la:s.depthFunc(s.NEVER);break;case ca:s.depthFunc(s.ALWAYS);break;case ha:s.depthFunc(s.LESS);break;case Vi:s.depthFunc(s.LEQUAL);break;case ua:s.depthFunc(s.EQUAL);break;case da:s.depthFunc(s.GEQUAL);break;case fa:s.depthFunc(s.GREATER);break;case pa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=pt}},setLocked:function(pt){D=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),s.clearDepth(pt),gt=pt)},reset:function(){D=!1,W=null,Z=null,gt=null,dt=!1}}}function i(){let D=!1,dt=null,W=null,Z=null,gt=null,pt=null,Bt=null,me=null,Re=null;return{setTest:function(ne){D||(ne?lt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(ne){dt!==ne&&!D&&(s.stencilMask(ne),dt=ne)},setFunc:function(ne,en,xn){(W!==ne||Z!==en||gt!==xn)&&(s.stencilFunc(ne,en,xn),W=ne,Z=en,gt=xn)},setOp:function(ne,en,xn){(pt!==ne||Bt!==en||me!==xn)&&(s.stencilOp(ne,en,xn),pt=ne,Bt=en,me=xn)},setLocked:function(ne){D=ne},setClear:function(ne){Re!==ne&&(s.clearStencil(ne),Re=ne)},reset:function(){D=!1,dt=null,W=null,Z=null,gt=null,pt=null,Bt=null,me=null,Re=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,S=null,_=null,L=null,E=null,T=new zt(0,0,0),R=0,v=!1,y=null,C=null,z=null,F=null,k=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=Q>=1):O.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=Q>=2);let tt=null,st={},ft=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),kt=new se().fromArray(ft),X=new se().fromArray(Ut);function rt(D,dt,W,Z){let gt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(D,pt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<W;Bt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(dt+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return pt}let St={};St[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(s.DEPTH_TEST),o.setFunc(Vi),et(!1),vt(fc),lt(s.CULL_FACE),I(Wn);function lt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Pt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ft(D,dt){return u[D]!==dt?(s.bindFramebuffer(D,dt),u[D]=dt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Dt(D,dt){let W=f,Z=!1;if(D){W=d.get(dt),W===void 0&&(W=[],d.set(dt,W));let gt=D.textures;if(W.length!==gt.length||W[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Bt=gt.length;pt<Bt;pt++)W[pt]=s.COLOR_ATTACHMENT0+pt;W.length=gt.length,Z=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,Z=!0);Z&&s.drawBuffers(W)}function $t(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let K={[ci]:s.FUNC_ADD,[mu]:s.FUNC_SUBTRACT,[gu]:s.FUNC_REVERSE_SUBTRACT};K[xu]=s.MIN,K[_u]=s.MAX;let it={[yu]:s.ZERO,[vu]:s.ONE,[Mu]:s.SRC_COLOR,[oa]:s.SRC_ALPHA,[Au]:s.SRC_ALPHA_SATURATE,[wu]:s.DST_COLOR,[Su]:s.DST_ALPHA,[bu]:s.ONE_MINUS_SRC_COLOR,[aa]:s.ONE_MINUS_SRC_ALPHA,[Tu]:s.ONE_MINUS_DST_COLOR,[Eu]:s.ONE_MINUS_DST_ALPHA,[Ru]:s.CONSTANT_COLOR,[Cu]:s.ONE_MINUS_CONSTANT_COLOR,[Pu]:s.CONSTANT_ALPHA,[Iu]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,dt,W,Z,gt,pt,Bt,me,Re,ne){if(D===Wn){x===!0&&(Pt(s.BLEND),x=!1);return}if(x===!1&&(lt(s.BLEND),x=!0),D!==pu){if(D!==m||ne!==v){if((p!==ci||_!==ci)&&(s.blendEquation(s.FUNC_ADD),p=ci,_=ci),ne)switch(D){case Xn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $n:s.blendFunc(s.ONE,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $n:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,L=null,E=null,T.set(0,0,0),R=0,m=D,v=ne}return}gt=gt||dt,pt=pt||W,Bt=Bt||Z,(dt!==p||gt!==_)&&(s.blendEquationSeparate(K[dt],K[gt]),p=dt,_=gt),(W!==M||Z!==S||pt!==L||Bt!==E)&&(s.blendFuncSeparate(it[W],it[Z],it[pt],it[Bt]),M=W,S=Z,L=pt,E=Bt),(me.equals(T)===!1||Re!==R)&&(s.blendColor(me.r,me.g,me.b,Re),T.copy(me),R=Re),m=D,v=!1}function Rt(D,dt){D.side===Ge?Pt(s.CULL_FACE):lt(s.CULL_FACE);let W=D.side===ze;dt&&(W=!W),et(W),D.blending===Xn&&D.transparent===!1?I(Wn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function vt(D){D!==uu?(lt(s.CULL_FACE),D!==C&&(D===fc?s.cullFace(s.BACK):D===du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),C=D}function ct(D){D!==z&&(G&&s.lineWidth(D),z=D)}function It(D,dt,W){D?(lt(s.POLYGON_OFFSET_FILL),(F!==dt||k!==W)&&(s.polygonOffset(dt,W),F=dt,k=W)):Pt(s.POLYGON_OFFSET_FILL)}function _t(D){D?lt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+q-1),tt!==D&&(s.activeTexture(D),tt=D)}function b(D,dt,W){W===void 0&&(tt===null?W=s.TEXTURE0+q-1:W=tt);let Z=st[W];Z===void 0&&(Z={type:void 0,texture:void 0},st[W]=Z),(Z.type!==D||Z.texture!==dt)&&(tt!==W&&(s.activeTexture(W),tt=W),s.bindTexture(D,dt||St[D]),Z.type=D,Z.texture=dt)}function B(){let D=st[tt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){kt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),kt.copy(D))}function bt(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Yt(D,dt){let W=c.get(dt);W===void 0&&(W=new WeakMap,c.set(dt,W));let Z=W.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(dt,D.name),W.set(D,Z))}function Gt(D,dt){let Z=c.get(dt).get(D);l.get(dt)!==Z&&(s.uniformBlockBinding(dt,Z,D.__bindingPointIndex),l.set(dt,Z))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,st={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,S=null,_=null,L=null,E=null,T=new zt(0,0,0),R=0,v=!1,y=null,C=null,z=null,F=null,k=null,kt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Pt,bindFramebuffer:Ft,drawBuffers:Dt,useProgram:$t,setBlending:I,setMaterial:Rt,setFlipSided:et,setCullFace:vt,setLineWidth:ct,setPolygonOffset:It,setScissorTest:_t,activeTexture:A,bindTexture:b,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:Mt,texImage3D:Lt,updateUBOMapping:Yt,uniformBlockBinding:Gt,texStorage2D:qt,texStorage3D:nt,texSubImage2D:$,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:yt,scissor:Nt,viewport:bt,reset:re}}function dh(s,t,e,n){let i=ig(n);switch(e){case Ih:return s*t;case Dh:return s*t;case Uh:return s*t*2;case Fl:return s*t/i.components*i.byteLength;case Ol:return s*t/i.components*i.byteLength;case Nh:return s*t*2/i.components*i.byteLength;case zl:return s*t*2/i.components*i.byteLength;case Lh:return s*t*3/i.components*i.byteLength;case an:return s*t*4/i.components*i.byteLength;case kl:return s*t*4/i.components*i.byteLength;case vr:case Mr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case br:case Sr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ya:case Ma:return Math.max(s,16)*Math.max(t,8)/4;case _a:case va:return Math.max(s,8)*Math.max(t,8)/2;case ba:case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Er:case ka:case Ba:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Fh:case Ha:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Va:case Ga:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ig(s){switch(s){case Rn:case Rh:return{byteLength:1,components:1};case Es:case Ch:case Os:return{byteLength:2,components:1};case Ul:case Nl:return{byteLength:2,components:4};case pi:case Dl:case dn:return{byteLength:4,components:1};case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function sg(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):Ar("canvas")}function x(A,b,B){let Y=1,J=_t(A);if((J.width>B||J.height>B)&&(Y=B/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(Y*J.width),Et=Math.floor(Y*J.height);u===void 0&&(u=g($,Et));let ut=b?g($,Et):u;return ut.width=$,ut.height=Et,ut.getContext("2d").drawImage(A,0,0,$,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Et+")."),ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(A,b,B,Y,J=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=b;if(b===s.RED&&(B===s.FLOAT&&($=s.R32F),B===s.HALF_FLOAT&&($=s.R16F),B===s.UNSIGNED_BYTE&&($=s.R8)),b===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.R8UI),B===s.UNSIGNED_SHORT&&($=s.R16UI),B===s.UNSIGNED_INT&&($=s.R32UI),B===s.BYTE&&($=s.R8I),B===s.SHORT&&($=s.R16I),B===s.INT&&($=s.R32I)),b===s.RG&&(B===s.FLOAT&&($=s.RG32F),B===s.HALF_FLOAT&&($=s.RG16F),B===s.UNSIGNED_BYTE&&($=s.RG8)),b===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.RG8UI),B===s.UNSIGNED_SHORT&&($=s.RG16UI),B===s.UNSIGNED_INT&&($=s.RG32UI),B===s.BYTE&&($=s.RG8I),B===s.SHORT&&($=s.RG16I),B===s.INT&&($=s.RG32I)),b===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.RGB8UI),B===s.UNSIGNED_SHORT&&($=s.RGB16UI),B===s.UNSIGNED_INT&&($=s.RGB32UI),B===s.BYTE&&($=s.RGB8I),B===s.SHORT&&($=s.RGB16I),B===s.INT&&($=s.RGB32I)),b===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&($=s.RGBA8UI),B===s.UNSIGNED_SHORT&&($=s.RGBA16UI),B===s.UNSIGNED_INT&&($=s.RGBA32UI),B===s.BYTE&&($=s.RGBA8I),B===s.SHORT&&($=s.RGBA16I),B===s.INT&&($=s.RGBA32I)),b===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),b===s.RGBA){let Et=J?ao:Zt.getTransfer(Y);B===s.FLOAT&&($=s.RGBA32F),B===s.HALF_FLOAT&&($=s.RGBA16F),B===s.UNSIGNED_BYTE&&($=Et===ie?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(A,b){let B;return A?b===null||b===pi||b===Xi?B=s.DEPTH24_STENCIL8:b===dn?B=s.DEPTH32F_STENCIL8:b===Es&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===pi||b===Xi?B=s.DEPTH_COMPONENT24:b===dn?B=s.DEPTH_COMPONENT32F:b===Es&&(B=s.DEPTH_COMPONENT16),B}function L(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){let b=A.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&h.delete(b)}function T(A){let b=A.target;b.removeEventListener("dispose",T),y(b)}function R(A){let b=n.get(A);if(b.__webglInit===void 0)return;let B=A.source,Y=d.get(B);if(Y){let J=Y[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(A),Object.keys(Y).length===0&&d.delete(B)}n.remove(A)}function v(A){let b=n.get(A);s.deleteTexture(b.__webglTexture);let B=A.source,Y=d.get(B);delete Y[b.__cacheKey],o.memory.textures--}function y(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let J=0;J<b.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(b.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)s.deleteFramebuffer(b.__webglFramebuffer[Y]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let B=A.textures;for(let Y=0,J=B.length;Y<J;Y++){let $=n.get(B[Y]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(A)}let C=0;function z(){C=0}function F(){let A=C;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),C+=1,A}function k(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function q(A,b){let B=n.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,A,b);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+b)}function G(A,b){let B=n.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+b)}function Q(A,b){let B=n.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,b);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+b)}function O(A,b){let B=n.get(A);if(A.version>0&&B.__version!==A.version){rt(B,A,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+b)}let tt={[Ss]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[xa]:s.MIRRORED_REPEAT},st={[We]:s.NEAREST,[Hu]:s.NEAREST_MIPMAP_NEAREST,[Ws]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[To]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},ft={[Xu]:s.NEVER,[Ju]:s.ALWAYS,[qu]:s.LESS,[Oh]:s.LEQUAL,[Yu]:s.EQUAL,[Ku]:s.GEQUAL,[$u]:s.GREATER,[Zu]:s.NOTEQUAL};function Ut(A,b){if(b.type===dn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===To||b.magFilter===Ws||b.magFilter===fi||b.minFilter===un||b.minFilter===To||b.minFilter===Ws||b.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,tt[b.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,tt[b.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,tt[b.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,st[b.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,st[b.minFilter]),b.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ft[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===We||b.minFilter!==Ws&&b.minFilter!==fi||b.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function kt(A,b){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",E));let Y=b.source,J=d.get(Y);J===void 0&&(J={},d.set(Y,J));let $=k(b);if($!==A.__cacheKey){J[$]===void 0&&(J[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[$].usedTimes++;let Et=J[A.__cacheKey];Et!==void 0&&(J[A.__cacheKey].usedTimes--,Et.usedTimes===0&&v(b)),A.__cacheKey=$,A.__webglTexture=J[$].texture}return B}function X(A,b,B){let Y=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=s.TEXTURE_3D);let J=kt(A,b),$=b.source;e.bindTexture(Y,A.__webglTexture,s.TEXTURE0+B);let Et=n.get($);if($.version!==Et.__version||J===!0){e.activeTexture(s.TEXTURE0+B);let ut=Zt.getPrimaries(Zt.workingColorSpace),yt=b.colorSpace===Gn?null:Zt.getPrimaries(b.colorSpace),qt=b.colorSpace===Gn||ut===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let nt=x(b.image,!1,i.maxTextureSize);nt=It(b,nt);let Mt=r.convert(b.format,b.colorSpace),Lt=r.convert(b.type),Nt=S(b.internalFormat,Mt,Lt,b.colorSpace,b.isVideoTexture);Ut(Y,b);let bt,Yt=b.mipmaps,Gt=b.isVideoTexture!==!0,re=Et.__version===void 0||J===!0,D=$.dataReady,dt=L(b,nt);if(b.isDepthTexture)Nt=_(b.format===qi,b.type),re&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,Nt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Nt,nt.width,nt.height,0,Mt,Lt,null));else if(b.isDataTexture)if(Yt.length>0){Gt&&re&&e.texStorage2D(s.TEXTURE_2D,dt,Nt,Yt[0].width,Yt[0].height);for(let W=0,Z=Yt.length;W<Z;W++)bt=Yt[W],Gt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,bt.width,bt.height,Mt,Lt,bt.data):e.texImage2D(s.TEXTURE_2D,W,Nt,bt.width,bt.height,0,Mt,Lt,bt.data);b.generateMipmaps=!1}else Gt?(re&&e.texStorage2D(s.TEXTURE_2D,dt,Nt,nt.width,nt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,Mt,Lt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,nt.width,nt.height,0,Mt,Lt,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Nt,Yt[0].width,Yt[0].height,nt.depth);for(let W=0,Z=Yt.length;W<Z;W++)if(bt=Yt[W],b.format!==an)if(Mt!==null)if(Gt){if(D)if(b.layerUpdates.size>0){let gt=dh(bt.width,bt.height,b.format,b.type);for(let pt of b.layerUpdates){let Bt=bt.data.subarray(pt*gt/bt.data.BYTES_PER_ELEMENT,(pt+1)*gt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,pt,bt.width,bt.height,1,Mt,Bt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,nt.depth,Mt,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Nt,bt.width,bt.height,nt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,nt.depth,Mt,Lt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Nt,bt.width,bt.height,nt.depth,0,Mt,Lt,bt.data)}else{Gt&&re&&e.texStorage2D(s.TEXTURE_2D,dt,Nt,Yt[0].width,Yt[0].height);for(let W=0,Z=Yt.length;W<Z;W++)bt=Yt[W],b.format!==an?Mt!==null?Gt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Nt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,bt.width,bt.height,Mt,Lt,bt.data):e.texImage2D(s.TEXTURE_2D,W,Nt,bt.width,bt.height,0,Mt,Lt,bt.data)}else if(b.isDataArrayTexture)if(Gt){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Nt,nt.width,nt.height,nt.depth),D)if(b.layerUpdates.size>0){let W=dh(nt.width,nt.height,b.format,b.type);for(let Z of b.layerUpdates){let gt=nt.data.subarray(Z*W/nt.data.BYTES_PER_ELEMENT,(Z+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,Mt,Lt,gt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Mt,Lt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,nt.width,nt.height,nt.depth,0,Mt,Lt,nt.data);else if(b.isData3DTexture)Gt?(re&&e.texStorage3D(s.TEXTURE_3D,dt,Nt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Mt,Lt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,nt.width,nt.height,nt.depth,0,Mt,Lt,nt.data);else if(b.isFramebufferTexture){if(re)if(Gt)e.texStorage2D(s.TEXTURE_2D,dt,Nt,nt.width,nt.height);else{let W=nt.width,Z=nt.height;for(let gt=0;gt<dt;gt++)e.texImage2D(s.TEXTURE_2D,gt,Nt,W,Z,0,Mt,Lt,null),W>>=1,Z>>=1}}else if(Yt.length>0){if(Gt&&re){let W=_t(Yt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Nt,W.width,W.height)}for(let W=0,Z=Yt.length;W<Z;W++)bt=Yt[W],Gt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,Mt,Lt,bt):e.texImage2D(s.TEXTURE_2D,W,Nt,Mt,Lt,bt);b.generateMipmaps=!1}else if(Gt){if(re){let W=_t(nt);e.texStorage2D(s.TEXTURE_2D,dt,Nt,W.width,W.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,Lt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Nt,Mt,Lt,nt);m(b)&&p(Y),Et.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function rt(A,b,B){if(b.image.length!==6)return;let Y=kt(A,b),J=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let $=n.get(J);if(J.version!==$.__version||Y===!0){e.activeTexture(s.TEXTURE0+B);let Et=Zt.getPrimaries(Zt.workingColorSpace),ut=b.colorSpace===Gn?null:Zt.getPrimaries(b.colorSpace),yt=b.colorSpace===Gn||Et===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let qt=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let Z=0;Z<6;Z++)!qt&&!nt?Mt[Z]=x(b.image[Z],!0,i.maxCubemapSize):Mt[Z]=nt?b.image[Z].image:b.image[Z],Mt[Z]=It(b,Mt[Z]);let Lt=Mt[0],Nt=r.convert(b.format,b.colorSpace),bt=r.convert(b.type),Yt=S(b.internalFormat,Nt,bt,b.colorSpace),Gt=b.isVideoTexture!==!0,re=$.__version===void 0||Y===!0,D=J.dataReady,dt=L(b,Lt);Ut(s.TEXTURE_CUBE_MAP,b);let W;if(qt){Gt&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Yt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){W=Mt[Z].mipmaps;for(let gt=0;gt<W.length;gt++){let pt=W[gt];b.format!==an?Nt!==null?Gt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,pt.width,pt.height,Nt,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,Yt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,pt.width,pt.height,Nt,bt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,Yt,pt.width,pt.height,0,Nt,bt,pt.data)}}}else{if(W=b.mipmaps,Gt&&re){W.length>0&&dt++;let Z=_t(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Yt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){Gt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Mt[Z].width,Mt[Z].height,Nt,bt,Mt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,Mt[Z].width,Mt[Z].height,0,Nt,bt,Mt[Z].data);for(let gt=0;gt<W.length;gt++){let Bt=W[gt].image[Z].image;Gt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,Bt.width,Bt.height,Nt,bt,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,Yt,Bt.width,Bt.height,0,Nt,bt,Bt.data)}}else{Gt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Nt,bt,Mt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,Nt,bt,Mt[Z]);for(let gt=0;gt<W.length;gt++){let pt=W[gt];Gt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,Nt,bt,pt.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,Yt,Nt,bt,pt.image[Z])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),$.__version=J.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function St(A,b,B,Y,J,$){let Et=r.convert(B.format,B.colorSpace),ut=r.convert(B.type),yt=S(B.internalFormat,Et,ut,B.colorSpace),qt=n.get(b),nt=n.get(B);if(nt.__renderTarget=b,!qt.__hasExternalTextures){let Mt=Math.max(1,b.width>>$),Lt=Math.max(1,b.height>>$);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,$,yt,Mt,Lt,b.depth,0,Et,ut,null):e.texImage2D(J,$,yt,Mt,Lt,0,Et,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),vt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,nt.__webglTexture,0,et(b)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,nt.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(A,b,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),b.depthBuffer){let Y=b.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,$=_(b.stencilBuffer,J),Et=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=et(b);vt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,$,b.width,b.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,$,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,$,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,A)}else{let Y=b.textures;for(let J=0;J<Y.length;J++){let $=Y[J],Et=r.convert($.format,$.colorSpace),ut=r.convert($.type),yt=S($.internalFormat,Et,ut,$.colorSpace),qt=et(b);B&&vt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,yt,b.width,b.height):vt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,yt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,yt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let J=Y.__webglTexture,$=et(b);if(b.depthTexture.format===ki)vt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(b.depthTexture.format===qi)vt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ft(A){let b=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=Y}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pt(b.__webglFramebuffer,A)}else if(B){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=s.createRenderbuffer(),lt(b.__webglDepthbuffer[Y],A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),lt(b.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(A,b,B){let Y=n.get(A);b!==void 0&&St(Y.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ft(A)}function $t(A){let b=A.texture,B=n.get(A),Y=n.get(b);A.addEventListener("dispose",T);let J=A.textures,$=A.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=b.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ut]=[];for(let yt=0;yt<b.mipmaps.length;yt++)B.__webglFramebuffer[ut][yt]=s.createFramebuffer()}else B.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)B.__webglFramebuffer[ut]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Et)for(let ut=0,yt=J.length;ut<yt;ut++){let qt=n.get(J[ut]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&vt(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ut=0;ut<J.length;ut++){let yt=J[ut];B.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ut]);let qt=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),Mt=S(yt.internalFormat,qt,nt,yt.colorSpace,A.isXRRenderTarget===!0),Lt=et(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,Mt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,B.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)St(B.__webglFramebuffer[ut][yt],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,yt);else St(B.__webglFramebuffer[ut],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,yt=J.length;ut<yt;ut++){let qt=J[ut],nt=n.get(qt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Ut(s.TEXTURE_2D,qt),St(B.__webglFramebuffer,A,qt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m(qt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,Y.__webglTexture),Ut(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)St(B.__webglFramebuffer[yt],A,b,s.COLOR_ATTACHMENT0,ut,yt);else St(B.__webglFramebuffer,A,b,s.COLOR_ATTACHMENT0,ut,0);m(b)&&p(ut),e.unbindTexture()}A.depthBuffer&&Ft(A)}function K(A){let b=A.textures;for(let B=0,Y=b.length;B<Y;B++){let J=b[B];if(m(J)){let $=M(A),Et=n.get(J).__webglTexture;e.bindTexture($,Et),p($),e.unbindTexture()}}}let it=[],I=[];function Rt(A){if(A.samples>0){if(vt(A)===!1){let b=A.textures,B=A.width,Y=A.height,J=s.COLOR_BUFFER_BIT,$=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(A),ut=b.length>1;if(ut)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);let qt=n.get(b[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,B,Y,0,0,B,Y,J,s.NEAREST),l===!0&&(it.length=0,I.length=0,it.push(s.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(it.push($),I.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);let qt=n.get(b[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function et(A){return Math.min(i.maxSamples,A.samples)}function vt(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ct(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function It(A,b){let B=A.colorSpace,Y=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Qi&&B!==Gn&&(Zt.getTransfer(B)===ie?(Y!==an||J!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function _t(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=O,this.rebindTextures=Dt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=St,this.useMultisampledRTT=vt}function rg(s,t){function e(n,i=Gn){let r,o=Zt.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===Ul)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return s.BYTE;if(n===Ch)return s.SHORT;if(n===Es)return s.UNSIGNED_SHORT;if(n===Dl)return s.INT;if(n===pi)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===Os)return s.HALF_FLOAT;if(n===Ih)return s.ALPHA;if(n===Lh)return s.RGB;if(n===an)return s.RGBA;if(n===Dh)return s.LUMINANCE;if(n===Uh)return s.LUMINANCE_ALPHA;if(n===ki)return s.DEPTH_COMPONENT;if(n===qi)return s.DEPTH_STENCIL;if(n===Fl)return s.RED;if(n===Ol)return s.RED_INTEGER;if(n===Nh)return s.RG;if(n===zl)return s.RG_INTEGER;if(n===kl)return s.RGBA_INTEGER;if(n===vr||n===Mr||n===br||n===Sr)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===ya||n===va||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Sa||n===Ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Sa)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===ka||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Er)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fh||n===Ha||n===Va||n===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var sl=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ee=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lg=`
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

}`,rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ke,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ye({vertexShader:ag,fragmentShader:lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ol=class extends Zn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new rl,m=e.getContextAttributes(),p=null,M=null,S=[],_=[],L=new at,E=null,T=new Ee;T.viewport=new se;let R=new Ee;R.viewport=new se;let v=[T,R],y=new sl,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let rt=S[X];return rt===void 0&&(rt=new ys,S[X]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(X){let rt=S[X];return rt===void 0&&(rt=new ys,S[X]=rt),rt.getGripSpace()},this.getHand=function(X){let rt=S[X];return rt===void 0&&(rt=new ys,S[X]=rt),rt.getHandSpace()};function F(X){let rt=_.indexOf(X.inputSource);if(rt===-1)return;let St=S[rt];St!==void 0&&(St.update(X.inputSource,X.frame,c||o),St.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",q);for(let X=0;X<S.length;X++){let rt=_[X];rt!==null&&(_[X]=null,S[X].disconnect(rt))}C=null,z=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",k),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Cn(f.framebufferWidth,f.framebufferHeight,{format:an,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,St=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?qi:ki,St=m.stencil?Xi:pi);let Pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Cn(d.textureWidth,d.textureHeight,{format:an,type:Rn,depthTexture:new Or(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(X){for(let rt=0;rt<X.removed.length;rt++){let St=X.removed[rt],lt=_.indexOf(St);lt>=0&&(_[lt]=null,S[lt].disconnect(St))}for(let rt=0;rt<X.added.length;rt++){let St=X.added[rt],lt=_.indexOf(St);if(lt===-1){for(let Ft=0;Ft<S.length;Ft++)if(Ft>=_.length){_.push(St),lt=Ft;break}else if(_[Ft]===null){_[Ft]=St,lt=Ft;break}if(lt===-1)break}let Pt=S[lt];Pt&&Pt.connect(St)}}let G=new P,Q=new P;function O(X,rt,St){G.setFromMatrixPosition(rt.matrixWorld),Q.setFromMatrixPosition(St.matrixWorld);let lt=G.distanceTo(Q),Pt=rt.projectionMatrix.elements,Ft=St.projectionMatrix.elements,Dt=Pt[14]/(Pt[10]-1),$t=Pt[14]/(Pt[10]+1),K=(Pt[9]+1)/Pt[5],it=(Pt[9]-1)/Pt[5],I=(Pt[8]-1)/Pt[0],Rt=(Ft[8]+1)/Ft[0],et=Dt*I,vt=Dt*Rt,ct=lt/(-I+Rt),It=ct*-I;if(rt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(It),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pt[10]===-1)X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let _t=Dt+ct,A=$t+ct,b=et-It,B=vt+(lt-It),Y=K*$t/A*_t,J=it*$t/A*_t;X.projectionMatrix.makePerspective(b,B,Y,J,_t,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function tt(X,rt){rt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(rt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let rt=X.near,St=X.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(St=x.depthFar)),y.near=R.near=T.near=rt,y.far=R.far=T.far=St,(C!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,z=y.far),T.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;let lt=X.parent,Pt=y.cameras;tt(y,lt);for(let Ft=0;Ft<Pt.length;Ft++)tt(Pt[Ft],lt);Pt.length===2?O(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),st(X,y,lt)};function st(X,rt,St){St===null?X.matrix.copy(rt.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(rt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(rt.projectionMatrix),X.projectionMatrixInverse.copy(rt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ws*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ft=null;function Ut(X,rt){if(h=rt.getViewerPose(c||o),g=rt,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let lt=!1;St.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Ft=0;Ft<St.length;Ft++){let Dt=St[Ft],$t=null;if(f!==null)$t=f.getViewport(Dt);else{let it=u.getViewSubImage(d,Dt);$t=it.viewport,Ft===0&&(t.setRenderTargetTextures(M,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(M))}let K=v[Ft];K===void 0&&(K=new Ee,K.layers.enable(Ft),K.viewport=new se,v[Ft]=K),K.matrix.fromArray(Dt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Dt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set($t.x,$t.y,$t.width,$t.height),Ft===0&&(y.matrix.copy(K.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(K)}let Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let Ft=u.getDepthInformation(St[0]);Ft&&Ft.isValid&&Ft.texture&&x.init(t,Ft,i.renderState)}}for(let St=0;St<S.length;St++){let lt=_[St],Pt=S[St];lt!==null&&Pt!==void 0&&Pt.update(lt,rt,c||o)}ft&&ft(X,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}let kt=new Hh;kt.setAnimationLoop(Ut),this.setAnimationLoop=function(X){ft=X},this.dispose=function(){}}},ai=new Ne,cg=new Qt;function hg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),S=M.envMap,_=M.envMapRotation;S&&(m.envMap.value=S,ai.copy(_),ai.x*=-1,ai.y*=-1,ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(ai)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ug(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let _=S.program;n.uniformBlockBinding(M,_)}function c(M,S){let _=i[M.id];_===void 0&&(g(M),_=h(M),i[M.id]=_,M.addEventListener("dispose",m));let L=S.program;n.updateUBOMapping(M,L);let E=t.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function h(M){let S=u();M.__bindingPointIndex=S;let _=s.createBuffer(),L=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let S=i[M.id],_=M.uniforms,L=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,T=_.length;E<T;E++){let R=Array.isArray(_[E])?_[E]:[_[E]];for(let v=0,y=R.length;v<y;v++){let C=R[v];if(f(C,E,v,L)===!0){let z=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],k=0;for(let q=0;q<F.length;q++){let G=F[q],Q=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,z+k,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,S,_,L){let E=M.value,T=S+"_"+_;if(L[T]===void 0)return typeof E=="number"||typeof E=="boolean"?L[T]=E:L[T]=E.clone(),!0;{let R=L[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return L[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(M){let S=M.uniforms,_=0,L=16;for(let T=0,R=S.length;T<R;T++){let v=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,C=v.length;y<C;y++){let z=v[y],F=Array.isArray(z.value)?z.value:[z.value];for(let k=0,q=F.length;k<q;k++){let G=F[k],Q=x(G),O=_%L,tt=O%Q.boundary,st=O+tt;_+=tt,st!==0&&L-st<Q.storage&&(_+=L-st),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=Q.storage}}}let E=_%L;return E>0&&(_+=L-E),M.__size=_,M.__cache={},this}function x(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){let S=M.target;S.removeEventListener("dispose",m);let _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var zr=class{constructor(t={}){let{canvas:e=pd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=qn,this.toneMappingExposure=1;let _=this,L=!1,E=0,T=0,R=null,v=-1,y=null,C=new se,z=new se,F=null,k=new zt(0),q=0,G=e.width,Q=e.height,O=1,tt=null,st=null,ft=new se(0,0,G,Q),Ut=new se(0,0,G,Q),kt=!1,X=new As,rt=!1,St=!1,lt=new Qt,Pt=new Qt,Ft=new P,Dt=new se,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function it(){return R===null?O:1}let I=n;function Rt(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Il}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),I===null){let U="webgl2";if(I=Rt(U,w),I===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,vt,ct,It,_t,A,b,B,Y,J,$,Et,ut,yt,qt,nt,Mt,Lt,Nt,bt,Yt,Gt,re,D;function dt(){et=new Am(I),et.init(),Gt=new rg(I,et),vt=new Mm(I,et,t,Gt),ct=new ng(I,et),vt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),It=new Pm(I),_t=new G0,A=new sg(I,et,ct,_t,vt,Gt,It),b=new Sm(_),B=new Tm(_),Y=new Fd(I),re=new ym(I,Y),J=new Rm(I,Y,It,re),$=new Lm(I,J,Y,It),Nt=new Im(I,vt,A),nt=new bm(_t),Et=new V0(_,b,B,et,vt,re,nt),ut=new hg(_,_t),yt=new X0,qt=new J0(et),Lt=new _m(_,b,B,ct,$,f,l),Mt=new tg(_,$,vt),D=new ug(I,It,vt,ct),bt=new vm(I,et,It),Yt=new Cm(I,et,It),It.programs=Et.programs,_.capabilities=vt,_.extensions=et,_.properties=_t,_.renderLists=yt,_.shadowMap=Mt,_.state=ct,_.info=It}dt();let W=new ol(_,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(G,Q,!1))},this.getSize=function(w){return w.set(G,Q)},this.setSize=function(w,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Q=U,e.width=Math.floor(w*O),e.height=Math.floor(U*O),H===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(G*O,Q*O).floor()},this.setDrawingBufferSize=function(w,U,H){G=w,Q=U,O=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ft)},this.setViewport=function(w,U,H,V){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,U,H,V),ct.viewport(C.copy(ft).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,U,H,V){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,U,H,V),ct.scissor(z.copy(Ut).multiplyScalar(O).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(w){ct.setScissorTest(kt=w)},this.setOpaqueSort=function(w){tt=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(w=!0,U=!0,H=!0){let V=0;if(w){let N=!1;if(R!==null){let ot=R.texture.format;N=ot===kl||ot===zl||ot===Ol}if(N){let ot=R.texture.type,mt=ot===Rn||ot===pi||ot===Es||ot===Xi||ot===Ul||ot===Nl,wt=Lt.getClearColor(),Tt=Lt.getClearAlpha(),Ot=wt.r,Ht=wt.g,At=wt.b;mt?(g[0]=Ot,g[1]=Ht,g[2]=At,g[3]=Tt,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Ot,x[1]=Ht,x[2]=At,x[3]=Tt,I.clearBufferiv(I.COLOR,0,x))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),yt.dispose(),qt.dispose(),_t.dispose(),b.dispose(),B.dispose(),$.dispose(),re.dispose(),D.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",rc),W.removeEventListener("sessionend",oc),ei.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let w=It.autoReset,U=Mt.enabled,H=Mt.autoUpdate,V=Mt.needsUpdate,N=Mt.type;dt(),It.autoReset=w,Mt.enabled=U,Mt.autoUpdate=H,Mt.needsUpdate=V,Mt.type=N}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Bt(w){let U=w.target;U.removeEventListener("dispose",Bt),me(U)}function me(w){Re(w),_t.remove(w)}function Re(w){let U=_t.get(w).programs;U!==void 0&&(U.forEach(function(H){Et.releaseProgram(H)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,V,N,ot){U===null&&(U=$t);let mt=N.isMesh&&N.matrixWorld.determinant()<0,wt=lu(w,U,H,V,N);ct.setMaterial(V,mt);let Tt=H.index,Ot=1;if(V.wireframe===!0){if(Tt=J.getWireframeAttribute(H),Tt===void 0)return;Ot=2}let Ht=H.drawRange,At=H.attributes.position,Jt=Ht.start*Ot,oe=(Ht.start+Ht.count)*Ot;ot!==null&&(Jt=Math.max(Jt,ot.start*Ot),oe=Math.min(oe,(ot.start+ot.count)*Ot)),Tt!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,Tt.count)):At!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,At.count));let le=oe-Jt;if(le<0||le===1/0)return;re.setup(N,V,wt,H,Tt);let Oe,jt=bt;if(Tt!==null&&(Oe=Y.get(Tt),jt=Yt,jt.setIndex(Oe)),N.isMesh)V.wireframe===!0?(ct.setLineWidth(V.wireframeLinewidth*it()),jt.setMode(I.LINES)):jt.setMode(I.TRIANGLES);else if(N.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),ct.setLineWidth(Ct*it()),N.isLineSegments?jt.setMode(I.LINES):N.isLineLoop?jt.setMode(I.LINE_LOOP):jt.setMode(I.LINE_STRIP)}else N.isPoints?jt.setMode(I.POINTS):N.isSprite&&jt.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ct=N._multiDrawStarts,_n=N._multiDrawCounts,te=N._multiDrawCount,nn=Tt?Y.get(Tt).bytesPerElement:1,vi=_t.get(V).currentProgram.getUniforms();for(let Be=0;Be<te;Be++)vi.setValue(I,"_gl_DrawID",Be),jt.render(Ct[Be]/nn,_n[Be])}else if(N.isInstancedMesh)jt.renderInstances(Jt,le,N.count);else if(H.isInstancedBufferGeometry){let Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_n=Math.min(H.instanceCount,Ct);jt.renderInstances(Jt,le,_n)}else jt.render(Jt,le)};function ne(w,U,H){w.transparent===!0&&w.side===Ge&&w.forceSinglePass===!1?(w.side=ze,w.needsUpdate=!0,Gs(w,U,H),w.side=Yn,w.needsUpdate=!0,Gs(w,U,H),w.side=Ge):Gs(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),p=qt.get(H),p.init(U),S.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==H&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ot=N.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){let wt=ot[mt];ne(wt,H,N),V.add(wt)}else ne(ot,H,N),V.add(ot)}),S.pop(),p=null,V},this.compileAsync=function(w,U,H=null){let V=this.compile(w,U,H);return new Promise(N=>{function ot(){if(V.forEach(function(mt){_t.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){N(w);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let en=null;function xn(w){en&&en(w)}function rc(){ei.stop()}function oc(){ei.start()}let ei=new Hh;ei.setAnimationLoop(xn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(w){en=w,W.setAnimationLoop(w),w===null?ei.stop():ei.start()},W.addEventListener("sessionstart",rc),W.addEventListener("sessionend",oc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,R),p=qt.get(w,S.length),p.init(U),S.push(p),Pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Pt),St=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,St),m=yt.get(w,M.length),m.init(),M.push(m),W.enabled===!0&&W.isPresenting===!0){let ot=_.xr.getDepthSensingMesh();ot!==null&&wo(ot,U,-1/0,_.sortObjects)}wo(w,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(tt,st),K=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,K&&Lt.addToRenderList(m,w),this.info.render.frame++,rt===!0&&nt.beginShadows();let H=p.state.shadowsArray;Mt.render(H,w,U),rt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){let ot=U.cameras;if(N.length>0)for(let mt=0,wt=ot.length;mt<wt;mt++){let Tt=ot[mt];lc(V,N,w,Tt)}K&&Lt.render(w);for(let mt=0,wt=ot.length;mt<wt;mt++){let Tt=ot[mt];ac(m,w,Tt,Tt.viewport)}}else N.length>0&&lc(V,N,w,U),K&&Lt.render(w),ac(m,w,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,U),re.resetDefaultState(),v=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],rt===!0&&nt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function wo(w,U,H,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){V&&Dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);let mt=$.update(w),wt=w.material;wt.visible&&m.push(w,mt,wt,H,Dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let mt=$.update(w),wt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Dt.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Dt.copy(mt.boundingSphere.center)),Dt.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(wt)){let Tt=mt.groups;for(let Ot=0,Ht=Tt.length;Ot<Ht;Ot++){let At=Tt[Ot],Jt=wt[At.materialIndex];Jt&&Jt.visible&&m.push(w,mt,Jt,H,Dt.z,At)}}else wt.visible&&m.push(w,mt,wt,H,Dt.z,null)}}let ot=w.children;for(let mt=0,wt=ot.length;mt<wt;mt++)wo(ot[mt],U,H,V)}function ac(w,U,H,V){let N=w.opaque,ot=w.transmissive,mt=w.transparent;p.setupLightsView(H),rt===!0&&nt.setGlobalState(_.clippingPlanes,H),V&&ct.viewport(C.copy(V)),N.length>0&&Vs(N,U,H),ot.length>0&&Vs(ot,U,H),mt.length>0&&Vs(mt,U,H),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function lc(w,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Cn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Os:Rn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let ot=p.state.transmissionRenderTarget[V.id],mt=V.viewport||C;ot.setSize(mt.z,mt.w);let wt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(k),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),K&&Lt.render(H);let Tt=_.toneMapping;_.toneMapping=qn;let Ot=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),rt===!0&&nt.setGlobalState(_.clippingPlanes,V),Vs(w,H,V),A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let At=0,Jt=U.length;At<Jt;At++){let oe=U[At],le=oe.object,Oe=oe.geometry,jt=oe.material,Ct=oe.group;if(jt.side===Ge&&le.layers.test(V.layers)){let _n=jt.side;jt.side=ze,jt.needsUpdate=!0,cc(le,H,V,Oe,jt,Ct),jt.side=_n,jt.needsUpdate=!0,Ht=!0}}Ht===!0&&(A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot))}_.setRenderTarget(wt),_.setClearColor(k,q),Ot!==void 0&&(V.viewport=Ot),_.toneMapping=Tt}function Vs(w,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=w.length;N<ot;N++){let mt=w[N],wt=mt.object,Tt=mt.geometry,Ot=V===null?mt.material:V,Ht=mt.group;wt.layers.test(H.layers)&&cc(wt,U,H,Tt,Ot,Ht)}}function cc(w,U,H,V,N,ot){w.onBeforeRender(_,U,H,V,N,ot),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(_,U,H,V,w,ot),N.transparent===!0&&N.side===Ge&&N.forceSinglePass===!1?(N.side=ze,N.needsUpdate=!0,_.renderBufferDirect(H,U,V,N,w,ot),N.side=Yn,N.needsUpdate=!0,_.renderBufferDirect(H,U,V,N,w,ot),N.side=Ge):_.renderBufferDirect(H,U,V,N,w,ot),w.onAfterRender(_,U,H,V,N,ot)}function Gs(w,U,H){U.isScene!==!0&&(U=$t);let V=_t.get(w),N=p.state.lights,ot=p.state.shadowsArray,mt=N.state.version,wt=Et.getParameters(w,N.state,ot,U,H),Tt=Et.getProgramCacheKey(wt),Ot=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?B:b).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",Bt),Ot=new Map,V.programs=Ot);let Ht=Ot.get(Tt);if(Ht!==void 0){if(V.currentProgram===Ht&&V.lightsStateVersion===mt)return uc(w,wt),Ht}else wt.uniforms=Et.getUniforms(w),w.onBeforeCompile(wt,_),Ht=Et.acquireProgram(wt,Tt),Ot.set(Tt,Ht),V.uniforms=wt.uniforms;let At=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=nt.uniform),uc(w,wt),V.needsLights=hu(w),V.lightsStateVersion=mt,V.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ht,V.uniformsList=null,Ht}function hc(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Hi.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function uc(w,U){let H=_t.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function lu(w,U,H,V,N){U.isScene!==!0&&(U=$t),A.resetTextureUnits();let ot=U.fog,mt=V.isMeshStandardMaterial?U.environment:null,wt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Qi,Tt=(V.isMeshStandardMaterial?B:b).get(V.envMap||mt),Ot=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,oe=!!H.morphAttributes.color,le=qn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(le=_.toneMapping);let Oe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,jt=Oe!==void 0?Oe.length:0,Ct=_t.get(V),_n=p.state.lights;if(rt===!0&&(St===!0||w!==y)){let Xe=w===y&&V.id===v;nt.setState(V,w,Xe)}let te=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==_n.state.version||Ct.outputColorSpace!==wt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==Tt||V.fog===!0&&Ct.fog!==ot||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==nt.numPlanes||Ct.numIntersection!==nt.numIntersection)||Ct.vertexAlphas!==Ot||Ct.vertexTangents!==Ht||Ct.morphTargets!==At||Ct.morphNormals!==Jt||Ct.morphColors!==oe||Ct.toneMapping!==le||Ct.morphTargetsCount!==jt)&&(te=!0):(te=!0,Ct.__version=V.version);let nn=Ct.currentProgram;te===!0&&(nn=Gs(V,U,N));let vi=!1,Be=!1,rs=!1,ce=nn.getUniforms(),cn=Ct.uniforms;if(ct.useProgram(nn.program)&&(vi=!0,Be=!0,rs=!0),V.id!==v&&(v=V.id,Be=!0),vi||y!==w){ct.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),gd(lt),xd(lt),ce.setValue(I,"projectionMatrix",lt)):ce.setValue(I,"projectionMatrix",w.projectionMatrix),ce.setValue(I,"viewMatrix",w.matrixWorldInverse);let Nn=ce.map.cameraPosition;Nn!==void 0&&Nn.setValue(I,Ft.setFromMatrixPosition(w.matrixWorld)),vt.logarithmicDepthBuffer&&ce.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ce.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Be=!0,rs=!0)}if(N.isSkinnedMesh){ce.setOptional(I,N,"bindMatrix"),ce.setOptional(I,N,"bindMatrixInverse");let Xe=N.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ce.setValue(I,"boneTexture",Xe.boneTexture,A))}N.isBatchedMesh&&(ce.setOptional(I,N,"batchingTexture"),ce.setValue(I,"batchingTexture",N._matricesTexture,A),ce.setOptional(I,N,"batchingIdTexture"),ce.setValue(I,"batchingIdTexture",N._indirectTexture,A),ce.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(I,"batchingColorTexture",N._colorsTexture,A));let os=H.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&Nt.update(N,H,nn),(Be||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,ce.setValue(I,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(cn.envMap.value=Tt,cn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(cn.envMapIntensity.value=U.environmentIntensity),Be&&(ce.setValue(I,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&cu(cn,rs),ot&&V.fog===!0&&ut.refreshFogUniforms(cn,ot),ut.refreshMaterialUniforms(cn,V,O,Q,p.state.transmissionRenderTarget[w.id]),Hi.upload(I,hc(Ct),cn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Hi.upload(I,hc(Ct),cn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ce.setValue(I,"center",N.center),ce.setValue(I,"modelViewMatrix",N.modelViewMatrix),ce.setValue(I,"normalMatrix",N.normalMatrix),ce.setValue(I,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Xe=V.uniformsGroups;for(let Nn=0,Fn=Xe.length;Nn<Fn;Nn++){let dc=Xe[Nn];D.update(dc,nn),D.bind(dc,nn)}}return nn}function cu(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function hu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,H){_t.get(w.texture).__webglTexture=U,_t.get(w.depthTexture).__webglTexture=H;let V=_t.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let H=_t.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){R=w,E=U,T=H;let V=!0,N=null,ot=!1,mt=!1;if(w){let Tt=_t.get(w);if(Tt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Tt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Tt.__hasExternalTextures)A.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let At=w.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&_t.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(mt=!0);let Ht=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?N=Ht[U][H]:N=Ht[U],ot=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?N=Ht[H]:N=Ht,C.copy(w.viewport),z.copy(w.scissor),F=w.scissorTest}else C.copy(ft).multiplyScalar(O).floor(),z.copy(Ut).multiplyScalar(O).floor(),F=kt;if(ct.bindFramebuffer(I.FRAMEBUFFER,N)&&V&&ct.drawBuffers(w,N),ct.viewport(C),ct.scissor(z),ct.setScissorTest(F),ot){let Tt=_t.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,H)}else if(mt){let Tt=_t.get(w.texture),Ot=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.__webglTexture,H||0,Ot)}v=-1},this.readRenderTargetPixels=function(w,U,H,V,N,ot,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){ct.bindFramebuffer(I.FRAMEBUFFER,wt);try{let Tt=w.texture,Ot=Tt.format,Ht=Tt.type;if(!vt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&H>=0&&H<=w.height-N&&I.readPixels(U,H,V,N,Gt.convert(Ot),Gt.convert(Ht),ot)}finally{let Tt=R!==null?_t.get(R).__webglFramebuffer:null;ct.bindFramebuffer(I.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,V,N,ot,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){let Tt=w.texture,Ot=Tt.format,Ht=Tt.type;if(!vt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&H>=0&&H<=w.height-N){ct.bindFramebuffer(I.FRAMEBUFFER,wt);let At=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.bufferData(I.PIXEL_PACK_BUFFER,ot.byteLength,I.STREAM_READ),I.readPixels(U,H,V,N,Gt.convert(Ot),Gt.convert(Ht),0);let Jt=R!==null?_t.get(R).__webglFramebuffer:null;ct.bindFramebuffer(I.FRAMEBUFFER,Jt);let oe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await md(I,oe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ot),I.deleteBuffer(At),I.deleteSync(oe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-H),N=Math.floor(w.image.width*V),ot=Math.floor(w.image.height*V),mt=U!==null?U.x:0,wt=U!==null?U.y:0;A.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,mt,wt,N,ot),ct.unbindTexture()},this.copyTextureToTexture=function(w,U,H=null,V=null,N=0){w.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let ot,mt,wt,Tt,Ot,Ht,At,Jt,oe,le=w.isCompressedTexture?w.mipmaps[N]:w.image;H!==null?(ot=H.max.x-H.min.x,mt=H.max.y-H.min.y,wt=H.isBox3?H.max.z-H.min.z:1,Tt=H.min.x,Ot=H.min.y,Ht=H.isBox3?H.min.z:0):(ot=le.width,mt=le.height,wt=le.depth||1,Tt=0,Ot=0,Ht=0),V!==null?(At=V.x,Jt=V.y,oe=V.z):(At=0,Jt=0,oe=0);let Oe=Gt.convert(U.format),jt=Gt.convert(U.type),Ct;U.isData3DTexture?(A.setTexture3D(U,0),Ct=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Ct=I.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Ct=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let _n=I.getParameter(I.UNPACK_ROW_LENGTH),te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),nn=I.getParameter(I.UNPACK_SKIP_PIXELS),vi=I.getParameter(I.UNPACK_SKIP_ROWS),Be=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Tt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ht);let rs=w.isDataArrayTexture||w.isData3DTexture,ce=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let cn=_t.get(w),os=_t.get(U),Xe=_t.get(cn.__renderTarget),Nn=_t.get(os.__renderTarget);ct.bindFramebuffer(I.READ_FRAMEBUFFER,Xe.__webglFramebuffer),ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<wt;Fn++)rs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(w).__webglTexture,N,Ht+Fn),w.isDepthTexture?(ce&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,N,oe+Fn),I.blitFramebuffer(Tt,Ot,ot,mt,At,Jt,ot,mt,I.DEPTH_BUFFER_BIT,I.NEAREST)):ce?I.copyTexSubImage3D(Ct,N,At,Jt,oe+Fn,Tt,Ot,ot,mt):I.copyTexSubImage2D(Ct,N,At,Jt,oe+Fn,Tt,Ot,ot,mt);ct.bindFramebuffer(I.READ_FRAMEBUFFER,null),ct.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ce?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Ct,N,At,Jt,oe,ot,mt,wt,Oe,jt,le.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ct,N,At,Jt,oe,ot,mt,wt,Oe,le.data):I.texSubImage3D(Ct,N,At,Jt,oe,ot,mt,wt,Oe,jt,le):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,At,Jt,ot,mt,Oe,jt,le.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,At,Jt,le.width,le.height,Oe,le.data):I.texSubImage2D(I.TEXTURE_2D,N,At,Jt,ot,mt,Oe,jt,le);I.pixelStorei(I.UNPACK_ROW_LENGTH,_n),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,nn),I.pixelStorei(I.UNPACK_SKIP_ROWS,vi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Be),N===0&&U.generateMipmaps&&I.generateMipmap(Ct),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,V=null,N=0){return w.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,H,V,N)},this.initRenderTarget=function(w){_t.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,ct.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var kr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$i=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ne,this.environmentIntensity=1,this.environmentRotation=new Ne,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var al=class extends ke{constructor(t=null,e=1,n=1,i,r,o,a,l,c=We,h=We,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Br=class extends Ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ni=new Qt,fh=new Qt,ur=[],ph=new Pn,dg=new Qt,us=new xt,ds=new In,Kn=class extends xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),ph.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(ph)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),ds.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ni),fh.multiplyMatrices(n,Ni),us.matrixWorld=fh,us.raycast(t,ur);for(let o=0,a=ur.length;o<a;o++){let l=ur[o];l.instanceId=r,l.object=this,e.push(l)}ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new al(new Float32Array(i*this.count),i,this.count,Fl,dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Rs=class extends pn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Hr=new P,Vr=new P,mh=new Qt,fs=new Ts,dr=new In,ta=new P,gh=new P,Gr=class extends ge{constructor(t=new fe,e=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Hr.fromBufferAttribute(e,i-1),Vr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Hr.distanceTo(Vr);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;mh.copy(i).invert(),fs.copy(t.ray).applyMatrix4(mh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),M=h.getX(x+1),S=fr(this,t,fs,l,p,M);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=fr(this,t,fs,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=fr(this,t,fs,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=fr(this,t,fs,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fr(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Hr.fromBufferAttribute(o,i),Vr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Vr,ta,gh)>n)return;ta.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ta);if(!(l<t.near||l>t.far))return{distance:l,point:gh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var ll=class extends pn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xh=new Qt,cl=new Ts,pr=new In,mr=new P,Wr=class extends ge{constructor(t=new fe,e=new ll){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;xh.copy(i).invert(),cl.copy(t.ray).applyMatrix4(xh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);mr.fromBufferAttribute(u,m),_h(mr,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)mr.fromBufferAttribute(u,g),_h(mr,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _h(s,t,e,n,i,r,o){let a=cl.distanceSqToPoint(s);if(a<e){let l=new P;cl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Jn=class extends ke{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ze=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new at:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,i=[],r=[],o=[],a=new P,l=new Qt;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Te(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends Ze{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hl=class extends Cs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wl(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var gr=new P,ea=new Wl,na=new Wl,ia=new Wl,ul=class extends Ze{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(gr.subVectors(i[0],i[1]).add(i[0]),c=gr);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(gr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ea.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),na.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),ia.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),na.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ia.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ea.calc(l),na.calc(l),ia.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function fg(s,t){let e=1-s;return e*e*t}function pg(s,t){return 2*(1-s)*s*t}function mg(s,t){return s*s*t}function vs(s,t,e,n){return fg(s,t)+pg(s,e)+mg(s,n)}function gg(s,t){let e=1-s;return e*e*e*t}function xg(s,t){let e=1-s;return 3*e*e*s*t}function _g(s,t){return 3*(1-s)*s*s*t}function yg(s,t){return s*s*s*t}function Ms(s,t,e,n,i){return gg(s,t)+xg(s,e)+_g(s,n)+yg(s,i)}var Xr=class extends Ze{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ms(t,i.x,r.x,o.x,a.x),Ms(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},dl=class extends Ze{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ms(t,i.x,r.x,o.x,a.x),Ms(t,i.y,r.y,o.y,a.y),Ms(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qr=class extends Ze{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fl=class extends Ze{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends Ze{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(vs(t,i.x,r.x,o.x),vs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pl=class extends Ze{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(vs(t,i.x,r.x,o.x),vs(t,i.y,r.y,o.y),vs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(yh(a,l.x,c.x,h.x,u.x),yh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new at().fromArray(i))}return this}},ml=Object.freeze({__proto__:null,ArcCurve:hl,CatmullRomCurve3:ul,CubicBezierCurve:Xr,CubicBezierCurve3:dl,EllipseCurve:Cs,LineCurve:qr,LineCurve3:fl,QuadraticBezierCurve:Yr,QuadraticBezierCurve3:pl,SplineCurve:$r}),gl=class extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ml[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ml[i.type]().fromJSON(i))}return this}},Zr=class extends gl{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qr(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Yr(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Xr(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $r(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Cs(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Kr=class s extends fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Me=class s extends fe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function M(){let _=new P,L=new P,E=0,T=(e-t)/n;for(let R=0;R<=r;R++){let v=[],y=R/r,C=y*(e-t)+t;for(let z=0;z<=i;z++){let F=z/i,k=F*l+a,q=Math.sin(k),G=Math.cos(k);L.x=C*q,L.y=-y*n+m,L.z=C*G,u.push(L.x,L.y,L.z),_.set(q,T,G).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-y),v.push(g++)}x.push(v)}for(let R=0;R<i;R++)for(let v=0;v<r;v++){let y=x[v][R],C=x[v+1][R],z=x[v+1][R+1],F=x[v][R+1];(t>0||v!==0)&&(h.push(y,C,F),E+=3),(e>0||v!==r-1)&&(h.push(C,z,F),E+=3)}c.addGroup(p,E,0),p+=E}function S(_){let L=g,E=new at,T=new P,R=0,v=_===!0?t:e,y=_===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let C=g;for(let z=0;z<=i;z++){let k=z/i*l+a,q=Math.cos(k),G=Math.sin(k);T.x=v*G,T.y=m*y,T.z=v*q,u.push(T.x,T.y,T.z),d.push(0,y,0),E.x=q*.5+.5,E.y=G*.5*y+.5,f.push(E.x,E.y),g++}for(let z=0;z<i;z++){let F=L+z,k=C+z;_===!0?h.push(k,k+1,F):h.push(k+1,k,F),R+=3}c.addGroup(p,R,_===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ps=class s extends fe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new P,_=new P,L=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],_),f(e[E+2],L),l(S,_,L,M)}function l(M,S,_,L){let E=L+1,T=[];for(let R=0;R<=E;R++){T[R]=[];let v=M.clone().lerp(_,R/E),y=S.clone().lerp(_,R/E),C=E-R;for(let z=0;z<=C;z++)z===0&&R===E?T[R][z]=v:T[R][z]=v.clone().lerp(y,z/C)}for(let R=0;R<E;R++)for(let v=0;v<2*(E-R)-1;v++){let y=Math.floor(v/2);v%2===0?(d(T[R][y+1]),d(T[R+1][y]),d(T[R][y])):(d(T[R][y+1]),d(T[R+1][y+1]),d(T[R+1][y]))}}function c(M){let S=new P;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(M),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){let M=new P;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];let _=m(M)/2/Math.PI+.5,L=p(M)/Math.PI+.5;o.push(_,1-L)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let S=o[M+0],_=o[M+2],L=o[M+4],E=Math.max(S,_,L),T=Math.min(S,_,L);E>.9&&T<.1&&(S<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),L<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,S){let _=M*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function g(){let M=new P,S=new P,_=new P,L=new P,E=new at,T=new at,R=new at;for(let v=0,y=0;v<r.length;v+=9,y+=6){M.set(r[v+0],r[v+1],r[v+2]),S.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),E.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),L.copy(M).add(S).add(_).divideScalar(3);let C=m(L);x(E,y+0,M,C),x(T,y+2,S,C),x(R,y+4,_,C)}}function x(M,S,_,L){L<0&&M.x===1&&(o[S]=M.x-1),_.x===0&&_.z===0&&(o[S]=L/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},Jr=class s extends Ps{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Is=class extends Zr{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Zr().fromJSON(i))}return this}},vg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=qh(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=wg(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ls(r,o,e,a,l,f,0),o}};function qh(s,t,e,n,i){let r,o;if(i===Fg(s,t,e,n)>0)for(r=t;r<e;r+=n)o=vh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=vh(r,s[r],s[r+1],o);return o&&co(o,o.next)&&(Us(o),o=o.next),o}function mi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(co(e,e.next)||de(e.prev,e,e.next)===0)){if(Us(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ls(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Pg(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?bg(s,n,i,r):Mg(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Us(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Sg(mi(s),t,e),Ls(s,t,e,n,i,r,2)):o===2&&Eg(s,t,e,n,i,r):Ls(mi(s),t,e,n,i,r,1);break}}}function Mg(s){let t=s.prev,e=s,n=s.next;if(de(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&zi(i,a,r,l,o,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bg(s,t,e,n){let i=s.prev,r=s,o=s.next;if(de(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=xl(f,g,t,e,n),M=xl(x,m,t,e,n),S=s.prevZ,_=s.nextZ;for(;S&&S.z>=p&&_&&_.z<=M;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&zi(a,h,l,u,c,d,S.x,S.y)&&de(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&zi(a,h,l,u,c,d,_.x,_.y)&&de(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&zi(a,h,l,u,c,d,S.x,S.y)&&de(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&zi(a,h,l,u,c,d,_.x,_.y)&&de(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Sg(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!co(i,r)&&Yh(i,n,n.next,r)&&Ds(i,r)&&Ds(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Us(n),Us(n.next),n=s=r),n=n.next}while(n!==s);return mi(n)}function Eg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dg(o,a)){let l=$h(o,a);o=mi(o,o.next),l=mi(l,l.next),Ls(o,t,e,n,i,r,0),Ls(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function wg(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=qh(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Lg(c));for(i.sort(Tg),r=0;r<i.length;r++)e=Ag(i[r],e);return e}function Tg(s,t){return s.x-t.x}function Ag(s,t){let e=Rg(s,t);if(!e)return t;let n=$h(e,s);return mi(n,n.next),mi(e,e.next)}function Rg(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&zi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ds(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Cg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Cg(s,t){return de(s.prev,s,t.prev)<0&&de(t.next,s,s.next)<0}function Pg(s,t,e,n){let i=s;do i.z===0&&(i.z=xl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ig(i)}function Ig(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function xl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Lg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function zi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Dg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Ug(s,t)&&(Ds(s,t)&&Ds(t,s)&&Ng(s,t)&&(de(s.prev,s,t.prev)||de(s,t.prev,t))||co(s,t)&&de(s.prev,s,s.next)>0&&de(t.prev,t,t.next)>0)}function de(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function co(s,t){return s.x===t.x&&s.y===t.y}function Yh(s,t,e,n){let i=_r(de(s,t,e)),r=_r(de(s,t,n)),o=_r(de(e,n,s)),a=_r(de(e,n,t));return!!(i!==r&&o!==a||i===0&&xr(s,e,t)||r===0&&xr(s,n,t)||o===0&&xr(e,s,n)||a===0&&xr(e,t,n))}function xr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function _r(s){return s>0?1:s<0?-1:0}function Ug(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Yh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ds(s,t){return de(s.prev,s,s.next)<0?de(s,t,s.next)>=0&&de(s,s.prev,t)>=0:de(s,t,s.prev)<0||de(s,s.next,t)<0}function Ng(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function $h(s,t){let e=new _l(s.i,s.x,s.y),n=new _l(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vh(s,t,e,n){let i=new _l(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Us(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _l(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fg(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var bs=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Mh(t),bh(n,t);let o=t.length;e.forEach(Mh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,bh(n,e[l]);let a=vg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Mh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function bh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Qr=class s extends fe{constructor(t=new Is([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Xt(i,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Og,S,_=!1,L,E,T,R;p&&(S=p.getSpacedPoints(h),_=!0,d=!1,L=p.computeFrenetFrames(h,!1),E=new P,T=new P,R=new P),d||(m=0,f=0,g=0,x=0);let v=a.extractPoints(c),y=v.shape,C=v.holes;if(!bs.isClockWise(y)){y=y.reverse();for(let K=0,it=C.length;K<it;K++){let I=C[K];bs.isClockWise(I)&&(C[K]=I.reverse())}}let F=bs.triangulateShape(y,C),k=y;for(let K=0,it=C.length;K<it;K++){let I=C[K];y=y.concat(I)}function q(K,it,I){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(it,I)}let G=y.length,Q=F.length;function O(K,it,I){let Rt,et,vt,ct=K.x-it.x,It=K.y-it.y,_t=I.x-K.x,A=I.y-K.y,b=ct*ct+It*It,B=ct*A-It*_t;if(Math.abs(B)>Number.EPSILON){let Y=Math.sqrt(b),J=Math.sqrt(_t*_t+A*A),$=it.x-It/Y,Et=it.y+ct/Y,ut=I.x-A/J,yt=I.y+_t/J,qt=((ut-$)*A-(yt-Et)*_t)/(ct*A-It*_t);Rt=$+ct*qt-K.x,et=Et+It*qt-K.y;let nt=Rt*Rt+et*et;if(nt<=2)return new at(Rt,et);vt=Math.sqrt(nt/2)}else{let Y=!1;ct>Number.EPSILON?_t>Number.EPSILON&&(Y=!0):ct<-Number.EPSILON?_t<-Number.EPSILON&&(Y=!0):Math.sign(It)===Math.sign(A)&&(Y=!0),Y?(Rt=-It,et=ct,vt=Math.sqrt(b)):(Rt=ct,et=It,vt=Math.sqrt(b/2))}return new at(Rt/vt,et/vt)}let tt=[];for(let K=0,it=k.length,I=it-1,Rt=K+1;K<it;K++,I++,Rt++)I===it&&(I=0),Rt===it&&(Rt=0),tt[K]=O(k[K],k[I],k[Rt]);let st=[],ft,Ut=tt.concat();for(let K=0,it=C.length;K<it;K++){let I=C[K];ft=[];for(let Rt=0,et=I.length,vt=et-1,ct=Rt+1;Rt<et;Rt++,vt++,ct++)vt===et&&(vt=0),ct===et&&(ct=0),ft[Rt]=O(I[Rt],I[vt],I[ct]);st.push(ft),Ut=Ut.concat(ft)}for(let K=0;K<m;K++){let it=K/m,I=f*Math.cos(it*Math.PI/2),Rt=g*Math.sin(it*Math.PI/2)+x;for(let et=0,vt=k.length;et<vt;et++){let ct=q(k[et],tt[et],Rt);lt(ct.x,ct.y,-I)}for(let et=0,vt=C.length;et<vt;et++){let ct=C[et];ft=st[et];for(let It=0,_t=ct.length;It<_t;It++){let A=q(ct[It],ft[It],Rt);lt(A.x,A.y,-I)}}}let kt=g+x;for(let K=0;K<G;K++){let it=d?q(y[K],Ut[K],kt):y[K];_?(T.copy(L.normals[0]).multiplyScalar(it.x),E.copy(L.binormals[0]).multiplyScalar(it.y),R.copy(S[0]).add(T).add(E),lt(R.x,R.y,R.z)):lt(it.x,it.y,0)}for(let K=1;K<=h;K++)for(let it=0;it<G;it++){let I=d?q(y[it],Ut[it],kt):y[it];_?(T.copy(L.normals[K]).multiplyScalar(I.x),E.copy(L.binormals[K]).multiplyScalar(I.y),R.copy(S[K]).add(T).add(E),lt(R.x,R.y,R.z)):lt(I.x,I.y,u/h*K)}for(let K=m-1;K>=0;K--){let it=K/m,I=f*Math.cos(it*Math.PI/2),Rt=g*Math.sin(it*Math.PI/2)+x;for(let et=0,vt=k.length;et<vt;et++){let ct=q(k[et],tt[et],Rt);lt(ct.x,ct.y,u+I)}for(let et=0,vt=C.length;et<vt;et++){let ct=C[et];ft=st[et];for(let It=0,_t=ct.length;It<_t;It++){let A=q(ct[It],ft[It],Rt);_?lt(A.x,A.y+S[h-1].y,S[h-1].x+I):lt(A.x,A.y,u+I)}}}X(),rt();function X(){let K=i.length/3;if(d){let it=0,I=G*it;for(let Rt=0;Rt<Q;Rt++){let et=F[Rt];Pt(et[2]+I,et[1]+I,et[0]+I)}it=h+m*2,I=G*it;for(let Rt=0;Rt<Q;Rt++){let et=F[Rt];Pt(et[0]+I,et[1]+I,et[2]+I)}}else{for(let it=0;it<Q;it++){let I=F[it];Pt(I[2],I[1],I[0])}for(let it=0;it<Q;it++){let I=F[it];Pt(I[0]+G*h,I[1]+G*h,I[2]+G*h)}}n.addGroup(K,i.length/3-K,0)}function rt(){let K=i.length/3,it=0;St(k,it),it+=k.length;for(let I=0,Rt=C.length;I<Rt;I++){let et=C[I];St(et,it),it+=et.length}n.addGroup(K,i.length/3-K,1)}function St(K,it){let I=K.length;for(;--I>=0;){let Rt=I,et=I-1;et<0&&(et=K.length-1);for(let vt=0,ct=h+m*2;vt<ct;vt++){let It=G*vt,_t=G*(vt+1),A=it+Rt+It,b=it+et+It,B=it+et+_t,Y=it+Rt+_t;Ft(A,b,B,Y)}}}function lt(K,it,I){l.push(K),l.push(it),l.push(I)}function Pt(K,it,I){Dt(K),Dt(it),Dt(I);let Rt=i.length/3,et=M.generateTopUV(n,i,Rt-3,Rt-2,Rt-1);$t(et[0]),$t(et[1]),$t(et[2])}function Ft(K,it,I,Rt){Dt(K),Dt(it),Dt(Rt),Dt(it),Dt(I),Dt(Rt);let et=i.length/3,vt=M.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);$t(vt[0]),$t(vt[1]),$t(vt[3]),$t(vt[1]),$t(vt[2]),$t(vt[3])}function Dt(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function $t(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return zg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ml[i.type]().fromJSON(i)),new s(n,t.options)}},Og={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new at(r,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-u),new at(d,1-g),new at(x,1-p)]:[new at(a,1-l),new at(h,1-u),new at(f,1-g),new at(m,1-p)]}};function zg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ln=class s extends Ps{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},jr=class s extends Ps{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},to=class s extends fe{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new P,g=new at;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let M=p+m,S=M,_=M+n+1,L=M+n+2,E=M+1;a.push(S,_,E),a.push(_,L,E)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Qn=class s extends fe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],S=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){let E=L/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(E+_,1-S),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let S=h[p][M+1],_=h[p][M],L=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&f.push(S,_,E),(p!==n-1||l<Math.PI)&&f.push(_,L,E)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ns=class s extends fe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(x,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Fs=class extends pn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ae=class extends pn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function yr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function kg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Zi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yl=class extends Zi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case xc:r=t,a=2*e-n;break;case _c:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xc:o=t,l=2*n-e;break;case _c:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+M*o[c+L]+S*o[l+L]+_*o[u+L];return r}},vl=class extends Zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ml=class extends Zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case wr:e=this.InterpolantFactoryMethodDiscrete;break;case Wa:e=this.InterpolantFactoryMethodLinear;break;case Ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&kg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ao,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Wa;var gi=class extends ln{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=wr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends ln{};bl.prototype.ValueTypeName="color";var Sl=class extends ln{};Sl.prototype.ValueTypeName="number";var El=class extends Zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},eo=class extends ln{InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}};eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends ln{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=wr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends ln{};wl.prototype.ValueTypeName="vector";var Tl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Bg=new Tl,Al=class{constructor(t){this.manager=t!==void 0?t:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Al.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki=class extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ji=class extends Ki{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},sa=new Qt,Sh=new P,Eh=new P,no=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var wh=new Qt,ps=new P,ra=new P,Rl=class extends no{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(ps),ra.copy(n.position),ra.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ra),n.updateMatrixWorld(),i.makeTranslation(-ps.x,-ps.y,-ps.z),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}},io=class extends Ki{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Cl=class extends no{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},so=class extends Ki{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Cl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ro=class extends Ki{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xl="\\[\\]\\.:\\/",Hg=new RegExp("["+Xl+"]","g"),ql="[^"+Xl+"]",Vg="[^"+Xl.replace("\\.","")+"]",Gg=/((?:WC+[\/:])*)/.source.replace("WC",ql),Wg=/(WCOD+)?/.source.replace("WCOD",Vg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),Yg=new RegExp("^"+Gg+Wg+Xg+qg+"$"),$g=["material","materials","bones","map"],Pl=class{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hg,"")}static parseTrackName(t){let e=Yg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);$g.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Pl;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ax=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);function yi(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Dn=(s,t,e)=>s<t?t:s>e?e:s,Zg=(s,t,e)=>s+(t-s)*e,Ke=(s,t,e,n)=>Zg(s,t,1-Math.exp(-e*n));function es(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function ns(s,t=!0){let e=new Jn(s);return t&&(e.wrapS=e.wrapT=Ss),e.colorSpace=Se,e.anisotropy=4,e}function zs(s,t,e,n,i,r=.08){for(let o=0;o<n;o++){let a=Math.floor(i()*255);s.fillStyle=`rgba(${a},${a},${a},${r})`;let l=1+i()*3;s.fillRect(i()*t,i()*e,l,l)}}function Zh(s,t=1){let e=yi(t),n=es(256,256),i=n.getContext("2d");if(s==="hub"){i.fillStyle="#5d6670",i.fillRect(0,0,256,256),i.strokeStyle="#4a525b",i.lineWidth=4;for(let r=0;r<=256;r+=128)i.beginPath(),i.moveTo(r,0),i.lineTo(r,256),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(256,r),i.stroke();i.fillStyle="#6c7680",i.fillRect(6,6,116,116),i.fillRect(134,134,116,116),zs(i,256,256,3e3,e,.06)}else if(s==="bay"){i.fillStyle="#6b6457",i.fillRect(0,0,256,256),zs(i,256,256,6e3,e,.08),i.fillStyle="rgba(40,36,30,0.09)";for(let r=0;r<4;r++)i.beginPath(),i.arc(e()*256,e()*256,10+e()*30,0,7),i.fill();i.strokeStyle="#4b463d",i.lineWidth=3,i.strokeRect(0,0,256,256)}else if(s==="office"){i.fillStyle="#3e4a5c",i.fillRect(0,0,256,256);for(let r=0;r<256;r+=4)for(let o=0;o<256;o+=4){let a=e()*20|0;i.fillStyle=`rgba(${a},${a+10},${a+25},0.25)`,i.fillRect(o,r,4,4)}i.strokeStyle="rgba(20,25,35,0.6)",i.lineWidth=2,i.strokeRect(0,0,128,128),i.strokeRect(128,128,128,128)}else if(s==="green"){i.fillStyle="#41584a",i.fillRect(0,0,256,256),i.strokeStyle="#2c3d33",i.lineWidth=3;for(let r=0;r<=256;r+=64)i.beginPath(),i.moveTo(r,0),i.lineTo(r,256),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(256,r),i.stroke();zs(i,256,256,4e3,e,.07)}else{i.fillStyle="#2a2b30",i.fillRect(0,0,256,256),i.fillStyle="#3a3c43";for(let r=0;r<256;r+=16)for(let o=0;o<256;o+=16)i.fillRect(o+2,r+2,12,12);i.fillStyle="#16171a";for(let r=0;r<256;r+=16)for(let o=0;o<256;o+=16)i.fillRect(o+5,r+5,6,6);i.strokeStyle="#c26a1c",i.lineWidth=6,i.strokeRect(3,3,250,250),zs(i,256,256,2e3,e,.08)}return ns(n)}function Kh(s,t=2){let e=yi(t),n=es(256,256),i=n.getContext("2d"),r={hub:"#7a8590",bay:"#857a63",office:"#a3a093",green:"#6c8a74",reactor:"#4a4c55"}[s]||"#777";if(i.fillStyle=r,i.fillRect(0,0,256,256),zs(i,256,256,3e3,e,.07),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3,i.strokeRect(2,2,252,252),i.beginPath(),i.moveTo(0,128),i.lineTo(256,128),i.stroke(),i.fillStyle="rgba(0,0,0,0.3)",i.fillRect(0,220,256,36),s==="bay"||s==="reactor")for(let o=-40;o<256;o+=40)i.fillStyle="#d6a21c",i.beginPath(),i.moveTo(o,256),i.lineTo(o+20,256),i.lineTo(o+40,222),i.lineTo(o+20,222),i.fill();i.fillStyle="rgba(255,255,255,0.15)";for(let[o,a]of[[12,12],[244,12],[12,116],[244,116],[12,140],[244,140]])i.beginPath(),i.arc(o,a,3,0,7),i.fill();return ns(n)}function Jh(s,t){let e=yi(t),n=es(128,128),i=n.getContext("2d"),[r,o,a]=s;for(let c=0;c<26;c++){let h=e()*Math.PI*2,u=e()*34,d=64+Math.cos(h)*u,f=64+Math.sin(h)*u,g=8+e()*22,x=i.createRadialGradient(d,f,0,d,f,g);x.addColorStop(0,`rgba(${r},${o},${a},0.9)`),x.addColorStop(1,`rgba(${r},${o},${a},0)`),i.fillStyle=x,i.beginPath(),i.arc(d,f,g,0,7),i.fill()}for(let c=0;c<12;c++)i.fillStyle=`rgba(${r*.6|0},${o*.6|0},${a*.6|0},0.8)`,i.beginPath(),i.arc(64+(e()-.5)*100,64+(e()-.5)*100,1+e()*4,0,7),i.fill();return ns(n,!1)}function jn(s,t={}){let e=t.w||512,n=t.h||256,i=es(e,n),r=i.getContext("2d");r.fillStyle=t.bg||"rgba(10,14,20,0.92)",r.fillRect(0,0,e,n),t.border&&(r.strokeStyle=t.border,r.lineWidth=10,r.strokeRect(5,5,e-10,n-10)),r.textAlign="center",r.textBaseline="middle";let o=s.length;return s.forEach((a,l)=>{let c=a.size||Math.floor(n/(o+1.2));r.font=`${a.bold===!1?"":"bold "}${c}px "Segoe UI", Arial, sans-serif`,r.fillStyle=a.color||"#fff",r.fillText(a.text,e/2,n*(l+1)/(o+1))}),ns(i,!1)}function Qh(s,t,e){let n=es(512,256),i=n.getContext("2d");i.clearRect(0,0,512,256),i.strokeStyle="rgba(230,240,255,0.9)",i.lineWidth=6,i.lineJoin="round",i.shadowColor="#7fd8ff",i.shadowBlur=14,i.beginPath();let r=e==="sniper"||e==="dmr"?420:e==="pistol"?200:340,o=256-r/2,a=100;return i.moveTo(o,a),i.lineTo(o+r*.75,a),i.lineTo(o+r,a+6),i.lineTo(o+r*.75,a+18),i.lineTo(o+r*.42,a+18),i.lineTo(o+r*.36,a+60),i.lineTo(o+r*.28,a+60),i.lineTo(o+r*.3,a+18),i.lineTo(o+r*.12,a+18),i.lineTo(o,a+45),i.lineTo(o-10,a+30),i.closePath(),i.stroke(),(e==="sniper"||e==="dmr")&&i.strokeRect(o+r*.35,a-26,r*.25,18),i.shadowBlur=0,i.fillStyle="#e8f6ff",i.font='bold 34px "Segoe UI", Arial',i.textAlign="center",i.fillText(s.toUpperCase(),256,210),i.fillStyle="#ffd25a",i.font='bold 30px "Segoe UI", Arial',i.fillText(t+" \xA2",256,246),ns(n,!1)}function jh(){let s=yi(77),t=es(128,128),e=t.getContext("2d");e.fillStyle="#2b0b45",e.fillRect(0,0,128,128);for(let n=0;n<40;n++)e.fillStyle=["#7b2cff","#ff2fd0","#22e6ff","#3d0f66"][n%4],e.globalAlpha=.7,e.beginPath(),e.arc(s()*128,s()*128,4+s()*14,0,7),e.fill();return e.globalAlpha=1,ns(t)}var pe={sidearm:{name:"M-9 Sidearm",cls:"pistol",dmg:34,head:2,rate:6.5,auto:!1,mag:12,reserve:84,reload:1.35,spread:.022,ads:.006,pellets:1,zoom:1.15,recoil:.018,cost:0,ammoCost:150,color:2764083,accent:9080729,sound:"pistol",len:.28},cannon:{name:"Hand Cannon",cls:"pistol",dmg:115,head:2.2,rate:2.6,auto:!1,mag:7,reserve:49,reload:1.8,spread:.03,ads:.004,pellets:1,zoom:1.2,recoil:.06,cost:900,ammoCost:450,color:12105912,accent:2236962,sound:"cannon",len:.34,pierce:1},hornet:{name:"Hornet SMG",cls:"smg",dmg:27,head:1.8,rate:13,auto:!0,mag:32,reserve:224,reload:1.9,spread:.035,ads:.012,pellets:1,zoom:1.2,recoil:.011,cost:1200,ammoCost:600,color:3159355,accent:14725152,sound:"smg",len:.46},scatter:{name:"Scattergun",cls:"shotgun",dmg:24,head:1.5,rate:1.5,auto:!1,mag:6,reserve:42,reload:2.4,spread:.075,ads:.055,pellets:9,zoom:1.1,recoil:.07,cost:1500,ammoCost:750,color:4863268,accent:1842204,sound:"shotgun",len:.7},vanguard:{name:"AR-7 Vanguard",cls:"rifle",dmg:42,head:2,rate:9.5,auto:!0,mag:30,reserve:210,reload:2.2,spread:.03,ads:.004,pellets:1,zoom:1.35,recoil:.014,cost:1800,ammoCost:900,color:3883059,accent:1118481,sound:"rifle",len:.72,pierce:1},mauler:{name:"Mauler LMG",cls:"lmg",dmg:48,head:1.8,rate:11,auto:!0,mag:100,reserve:300,reload:4,spread:.045,ads:.012,pellets:1,zoom:1.25,recoil:.012,cost:3e3,ammoCost:1500,color:2501166,accent:7035434,sound:"lmg",len:.85,pierce:1},marksman:{name:"Marksman DMR",cls:"dmr",dmg:95,head:2.5,rate:4.2,auto:!1,mag:15,reserve:105,reload:2.3,spread:.03,ads:0,pellets:1,zoom:3,scope:!0,recoil:.03,cost:2e3,ammoCost:1e3,color:5922640,accent:1118481,sound:"dmr",len:.9,pierce:2},longbow:{name:"Longbow .338",cls:"sniper",dmg:450,head:3,rate:.8,auto:!1,mag:5,reserve:35,reload:3,spread:.12,ads:0,pellets:1,zoom:6,scope:!0,recoil:.11,cost:2500,ammoCost:1250,color:3824186,accent:1381653,sound:"sniper",len:1.05,pierce:4}},ho={sidearm:'M-9 "Mopper"',cannon:"Grime Reaper",hornet:"Swarm Queen",scatter:"Power Washer XL",vanguard:'AR-7 "Sterilizer"',mauler:"The Decontaminator",marksman:"Clean Cut DMR",longbow:"Spotless .338"},Je={combat:{name:"Combat Knife",dmg:100,speed:2.2,range:2.1,cost:0,kind:"combat",color:9212310,handle:2236962,desc:"Standard issue."},bayonet:{name:"Bayonet",dmg:150,speed:2,range:2.4,cost:1e3,kind:"bayonet",color:13226200,handle:3877402,desc:"Long reach, heavy stab."},huntsman:{name:"Huntsman",dmg:180,speed:1.7,range:2.4,cost:1300,kind:"huntsman",color:10134445,handle:1979172,desc:"Serrated. Slow but brutal."},karambit:{name:"Karambit",dmg:125,speed:2.9,range:2,cost:1600,kind:"karambit",color:2981375,handle:1119256,desc:"Lightning fast curved blade."},butterfly:{name:"Butterfly Knife",dmg:150,speed:2.6,range:2.1,cost:2200,kind:"butterfly",color:16734900,handle:3159098,desc:"Fast, deadly, and it flips."}},ks={vacuum:{name:"Hoover-9 Vacuum",cost:0,desc:"Sucks up debris into your tank. Empty the tank at a Disposal Chute for credits."},washer:{name:"Hydro Lance",cost:750,desc:"High-pressure washer. Blasts sludge stains off floors and walls. Refill water at Service Stations.",minPhase:1},torch:{name:"Spore Torch",cost:2e3,desc:"Flamethrower. Burns spore pods and roasts anything nearby. Refill fuel at Service Stations.",minPhase:3}},Qe={tank:{name:"Tank Capacity",desc:"Debris tank size",costs:[600,1200,2400],values:[120,200,300,450],unit:"units"},suction:{name:"Suction Power",desc:"Vacuum speed & range",costs:[700,1500,3e3],values:[1,1.5,2.1,2.8],unit:"x"},pressure:{name:"Lance Pressure",desc:"Washer cleaning speed & spray width",costs:[800,1600,3200],values:[1,1.5,2.1,2.8],unit:"x",needs:"washer"},reservoir:{name:"Reservoirs",desc:"Water & fuel capacity",costs:[500,1e3,2e3],values:[100,160,240,350],unit:"L"},armor:{name:"Hazmat Plating",desc:"Reduces damage taken",costs:[1e3,2200,4e3],values:[0,.15,.28,.4],unit:"%"}},ti={ironhide:{name:"Ironhide Ale",cost:2500,color:13641768,desc:"Max health 100 \u2192 200"},quickhands:{name:"Quickhands Cola",cost:3e3,color:3129162,desc:"Reload & swap 50% faster"},rush:{name:"Rush Tonic",cost:2e3,color:15909400,desc:"Sprint +15%, longer slides"},doubletap:{name:"Double Pump",cost:2e3,color:15890968,desc:"Fire rate +30%"},janitor:{name:"Janitor's Brew",cost:1500,color:2788592,desc:"All tools clean 40% faster"}},Yl={sludger:{name:"Sludger",hp:110,speed:4.3,dmg:22,rate:1,radius:.45,height:1.7,reward:60,color:5208618,eye:16765471},spitter:{name:"Spitter",hp:90,speed:3.6,dmg:14,rate:2.2,radius:.42,height:1.9,reward:80,color:8010380,eye:7274400,ranged:!0},brute:{name:"Brute",hp:650,speed:3,dmg:45,rate:1.5,radius:.8,height:2.5,reward:200,color:6044194,eye:16726559}},we=[null,{zone:"a",title:"Phase 1 \u2014 Loading Bay",brief:"Vacuum the debris and clear the Loading Bay. Empty your tank at a Disposal Chute.",threshold:.8,mix:{sludger:1},maxAlive:8,interval:4.2,hpMul:1,bonus:1e3},{zone:"b",title:"Phase 2 \u2014 Admin Offices",brief:"The offices are caked in sludge. Get a Hydro Lance from the terminal and wash it all away.",threshold:.8,mix:{sludger:.75,spitter:.25},maxAlive:11,interval:3.5,hpMul:1.45,bonus:2e3},{zone:"c",title:"Phase 3 \u2014 Hydroponics",brief:"Spore pods are everywhere. Buy the Spore Torch and burn them out.",threshold:.8,mix:{sludger:.6,spitter:.25,brute:.15},maxAlive:14,interval:2.9,hpMul:2,bonus:3e3},{zone:"d",title:"Phase 4 \u2014 Reactor Core",brief:"Purge the Reactor Core. Something is growing in the middle of it...",threshold:.8,mix:{sludger:.5,spitter:.3,brute:.2},maxAlive:16,interval:2.4,hpMul:2.7,bonus:5e3}],xe={hit:10,kill:60,headKill:100,meleeKill:130,perUnit:4,stain:12,spore:40,refineCost:5e3,crateCost:950,grenadeCost:300},tu=["cannon","hornet","scatter","vanguard","mauler","marksman","longbow","vanguard","hornet","mauler"];var j=2,Fe=4.5,$l=1.1,Zl=2.4,Kg=2.2,je=["h","a","b","c","d"],is={h:{name:"Sanitation HQ",tex:"hub",fog:1777960},a:{name:"Loading Bay",tex:"bay",fog:2236186},b:{name:"Admin Offices",tex:"office",fog:1711396},c:{name:"Hydroponics",tex:"green",fog:1450265},d:{name:"Reactor Core",tex:"reactor",fog:2364943}};function Jg(){let e=[];for(let a=0;a<40;a++)e.push(new Array(48).fill("#"));let n=(a,l,c,h,u)=>{for(let d=l;d<=h;d++)for(let f=a;f<=c;f++)e[d][f]=u},i=(a,l,c)=>{e[l][a]=c};n(1,27,20,38,"h"),n(22,24,46,38,"a"),n(17,12,46,22,"b"),n(1,12,15,25,"c"),n(12,1,35,10,"d"),i(21,31,"1"),i(21,32,"1"),i(33,23,"2"),i(34,23,"2"),i(16,17,"3"),i(16,18,"3"),i(6,26,"3"),i(7,26,"3"),i(23,11,"4"),i(24,11,"4"),i(11,27,"S"),i(16,27,"R"),i(1,29,"M"),i(1,35,"I"),i(20,28,"W"),i(4,38,"P"),i(8,38,"P"),i(12,38,"P"),i(16,38,"P"),i(19,38,"P"),i(14,32,"x"),i(15,32,"x"),i(15,33,"x"),i(15,34,"X");for(let[a,l]of[[25,26],[26,26],[25,27],[30,29],[31,29],[30,30],[38,26],[39,26],[40,26],[36,33],[37,33],[36,34],[43,30],[43,31],[44,31],[28,35],[29,35],[41,36],[42,36]])i(a,l,"x");for(let[a,l]of[[26,27],[31,30],[31,31],[39,27],[37,34],[29,36],[42,37]])i(a,l,"X");i(34,30,"#"),i(34,31,"#"),i(46,24,"I"),i(46,38,"W"),n(20,15,23,15,"#"),n(26,15,29,15,"#"),n(20,19,23,19,"#"),n(26,19,29,19,"#"),n(32,13,32,16,"#"),n(32,19,32,20,"#"),n(37,15,40,15,"#"),n(43,15,44,15,"#");for(let[a,l]of[[21,13],[22,13],[27,13],[28,13],[21,17],[22,17],[27,17],[28,17],[21,21],[22,21],[27,21],[28,21],[36,18],[37,18],[40,18],[41,18],[44,20],[45,20],[38,21]])i(a,l,"x");i(39,18,"X"),i(46,12,"I"),i(17,22,"W"),n(3,14,5,14,"x"),n(9,14,12,14,"x"),n(3,18,6,18,"x"),n(10,18,13,18,"x"),n(3,22,5,22,"x"),n(10,22,13,22,"x"),i(8,16,"#"),i(8,20,"#"),i(1,12,"I"),i(15,25,"W");for(let[a,l]of[[18,3],[29,3],[18,8],[29,8]])i(a,l,"#");for(let[a,l]of[[14,2],[15,2],[14,9],[33,2],[32,9],[33,9],[13,5],[34,6]])i(a,l,"x");return i(13,6,"X"),i(34,5,"X"),i(12,1,"I"),i(35,10,"W"),{W:48,H:40,g:e,wallbuys:[{x:0,y:32,gun:"hornet"},{x:0,y:36,gun:"cannon"},{x:47,y:31,gun:"scatter"},{x:40,y:39,gun:"vanguard"},{x:47,y:17,gun:"marksman"},{x:30,y:11,gun:"longbow"},{x:0,y:20,gun:"mauler"}],perkOrder:["ironhide","quickhands","rush","doubletap","janitor"],start:{x:10,y:33},boss:{x:24,y:6}}}var uo=class{constructor(t){this.scene=t;let e=Jg();this.W=e.W,this.H=e.H,this.chars=e.g,this.wallbuyDefs=e.wallbuys,this.perkOrder=e.perkOrder,this.startCell=e.start,this.bossCell=e.boss;let n=this.W*this.H;this.height=new Float32Array(n),this.type=new Uint8Array(n),this.zone=new Int8Array(n).fill(-1),this.doorPhase=new Int8Array(n),this.doors={},this.objects=[],this.flow=new Float32Array(n),this.flowFrom=-1,this._parse(),this._floodZones(),this.zoneCells={};for(let i of je)this.zoneCells[i]=[];for(let i=0;i<this.H;i++)for(let r=0;r<this.W;r++){let o=this.idx(r,i);this.type[o]===0&&this.zone[o]>=0&&this.zoneCells[je[this.zone[o]]].push(o)}this.group=new ee,t.add(this.group),this._buildMeshes()}idx(t,e){return e*this.W+t}inside(t,e){return t>=0&&e>=0&&t<this.W&&e<this.H}cellOf(t,e){return[Math.floor(t/j),Math.floor(e/j)]}center(t,e){return[t*j+j/2,e*j+j/2]}hAt(t,e){return this.inside(t,e)?this.height[this.idx(t,e)]:99}zoneAtWorld(t,e){let[n,i]=this.cellOf(t,e);if(!this.inside(n,i))return null;let r=this.zone[this.idx(n,i)];return r>=0?je[r]:null}_parse(){var t;for(let e=0;e<this.H;e++)for(let n=0;n<this.W;n++){let i=this.chars[e][n],r=this.idx(n,e),o=je.indexOf(i);if(i==="#")this.type[r]=1,this.height[r]=99;else if(o>=0)this.type[r]=0,this.zone[r]=o;else if(i==="x")this.type[r]=2,this.height[r]=$l;else if(i==="X")this.type[r]=3,this.height[r]=Zl;else if(i>="1"&&i<="4"){let a=+i;this.type[r]=4,this.height[r]=99,this.doorPhase[r]=a,((t=this.doors)[a]||(t[a]={cells:[],open:!1,t:0,meshes:[]})).cells.push(r)}else this.type[r]=5,this.height[r]=Kg,this.objects.push({kind:i,x:n,y:e,i:r})}}_floodZones(){let t=!0;for(;t;){t=!1;for(let e=0;e<this.H;e++)for(let n=0;n<this.W;n++){let i=this.idx(n,e);if(!(this.type[i]===1||this.zone[i]>=0))for(let[r,o]of[[1,0],[-1,0],[0,1],[0,-1]]){let a=n+r,l=e+o;if(!this.inside(a,l))continue;let c=this.zone[this.idx(a,l)];if(c>=0&&this.type[this.idx(a,l)]!==4){this.zone[i]=c,t=!0;break}}}}}_buildMeshes(){let t={},e={};for(let E of je){let T=is[E].tex;t[E]=new ae({map:Zh(T,11+E.charCodeAt(0))}),e[E]=new ae({map:Kh(T,23+E.charCodeAt(0))})}let n={},i={};for(let E of je)n[E]=[],i[E]=[];for(let E=0;E<this.H;E++)for(let T=0;T<this.W;T++){let R=this.idx(T,E);if(this.type[R]===1)for(let[v,y]of[[1,0],[-1,0],[0,1],[0,-1]]){let C=T+v,z=E+y;if(!this.inside(C,z))continue;let F=this.idx(C,z);if(this.type[F]===1)continue;let k=this.zone[F]>=0?je[this.zone[F]]:"h";i[k].push([T,E,v,y])}else{let v=this.zone[R]>=0?je[this.zone[R]]:"h";n[v].push([T,E])}}for(let E of je)n[E].length&&this.group.add(new xt(this._floorGeo(n[E],0,!0),t[E])),i[E].length&&this.group.add(new xt(this._wallGeo(i[E]),e[E]));let r=[];for(let E=0;E<this.H;E++)for(let T=0;T<this.W;T++)this.type[this.idx(T,E)]!==1&&r.push([T,E]);let o=new ae({color:2303531});this.group.add(new xt(this._floorGeo(r,Fe,!1),o));let a=[];for(let E=0;E<this.H;E++)for(let T=0;T<this.W;T++){let R=this.idx(T,E);this.type[R]!==1&&T%3===1&&E%3===1&&a.push([T,E])}let l=new Ie(.9,.05,.32),c=new ue({color:15262416}),h=new Kn(l,c,a.length),u=new Qt;a.forEach(([E,T],R)=>{let[v,y]=this.center(E,T);u.makeTranslation(v,Fe-.03,y),h.setMatrixAt(R,u)}),this.group.add(h);let d=this._crateTexture(),f=new ae({map:d}),g=[],x=[];for(let E=0;E<this.type.length;E++)this.type[E]===2&&g.push(E),this.type[E]===3&&x.push(E);let m=new Ie(j*.98,$l,j*.98),p=new Kn(m,f,g.length);g.forEach((E,T)=>{let R=E%this.W,v=E/this.W|0,[y,C]=this.center(R,v);u.makeTranslation(y,$l/2,C),p.setMatrixAt(T,u)}),this.group.add(p);let M=new Ie(j*.98,Zl,j*.98),S=new ae({map:d,color:10465472}),_=new Kn(M,S,x.length);x.forEach((E,T)=>{let R=E%this.W,v=E/this.W|0,[y,C]=this.center(R,v);u.makeTranslation(y,Zl/2,C),_.setMatrixAt(T,u)}),this.group.add(_);for(let E in this.doors){let T=this.doors[E],R=new ae({map:jn([{text:"LOCKED",color:"#ff5050"},{text:`PHASE ${E}`,color:"#ffd25a"}],{bg:"#2c3038",border:"#c0392b"})}),v=new ae({color:3817288});for(let y of T.cells){let C=y%this.W,z=y/this.W|0,F=this.type[this.idx(C-1,z)]!==1||this.type[this.idx(C+1,z)]!==1,[k,q]=this.center(C,z),G=F?new Ie(.4,Fe,j):new Ie(j,Fe,.4),Q=F?[R,R,v,v,v,v]:[v,v,v,v,R,R],O=new xt(G,Q);O.position.set(k,Fe/2,q),this.group.add(O),T.meshes.push(O)}}this.wallbuys=[];for(let E of this.wallbuyDefs){let T=0,R=0;for(let[G,Q]of[[1,0],[-1,0],[0,1],[0,-1]]){let O=E.x+G,tt=E.y+Q;if(this.inside(O,tt)&&this.type[this.idx(O,tt)]===0){T=G,R=Q;break}}let v=pe[E.gun],y=Qh(v.name,v.cost,v.cls),C=new xt(new $e(2,1),new ue({map:y,transparent:!0})),[z,F]=this.center(E.x,E.y);C.position.set(z+T*(j/2+.02),1.7,F+R*(j/2+.02)),C.rotation.y=Math.atan2(T,R),this.group.add(C);let[k,q]=this.center(E.x+T,E.y+R);this.wallbuys.push({gun:E.gun,x:k,z:q,mesh:C})}let L=0;for(let E of this.objects){let[T,R]=this.center(E.x,E.y);E.cx=T,E.cz=R;let v=[0,1];for(let[C,z]of[[0,1],[0,-1],[1,0],[-1,0]]){let F=E.x+C,k=E.y+z;if(this.inside(F,k)&&this.type[this.idx(F,k)]===0){v=[C,z];break}}E.face=v;let y=new ee;y.position.set(T,0,R),y.rotation.y=Math.atan2(v[0],v[1]),E.kind==="P"&&(E.perk=this.perkOrder[L++]),this._buildObject(E,y),this.group.add(y),E.group=y}}_buildObject(t,e){let n=(r,o,a,l,c=o/2,h=0,u={})=>{let d=new xt(new Ie(r,o,a),new ae({color:l,...u}));return d.position.set(0,c,h),e.add(d),d},i=(r,o,a,l,c)=>{let h=new xt(new $e(o,a),new ue({map:r}));return h.position.set(0,l,c),e.add(h),h};if(t.kind==="S")n(1.6,1.1,1,3159615),n(1.6,1.2,.3,2501427,1.7,-.35),i(jn([{text:"SUPPLY TERMINAL",color:"#6fe3ff"},{text:"Press E",color:"#fff",size:44}],{bg:"#06222c",border:"#1fb6e0"}),1.4,.8,1.7,-.19);else if(t.kind==="R"){n(1.7,1,1.4,2826042);let r=new xt(new Ln(.42,1),new ue({color:12602879}));r.position.y=1.5,e.add(r),t.anim=r,n(.2,1.6,.2,4206677,1.6,-.55),i(jn([{text:"REFINERY",color:"#e09bff"},{text:"5000 \xA2",color:"#ffd25a"}],{bg:"#1a0b26",border:"#c04dff",h:200}),1.2,.47,.6,.71)}else if(t.kind==="M"){n(1.8,.9,1.1,7031338),n(1.85,.12,1.15,3942936,.9);let r=new xt(new $e(1.1,.55),new ue({map:jn([{text:"? SUPPLY CRATE ?",color:"#7fd8ff"},{text:"950 \xA2",color:"#ffd25a"}],{bg:"#0b1a2a",border:"#7fd8ff",h:256})}));r.position.set(0,.5,.56),e.add(r);let o=new xt(new Me(.6,.6,3.5,16,1,!0),new ue({color:5949695,transparent:!0,opacity:.12,side:Ge,depthWrite:!1}));o.position.y=2.6,e.add(o)}else if(t.kind==="I"){n(1.8,1.4,1.6,3882794),n(1.2,.6,.1,328965,1,.8);let r=n(1.4,.15,.12,6750037,1.4,.8,{emissive:3385890});i(jn([{text:"DISPOSAL CHUTE",color:"#8dff6f"},{text:"Empty tank: E",color:"#fff",size:40}],{bg:"#0d1f0a",border:"#55dd33"}),1.4,.7,1.95,0).position.z=0,e.children[e.children.length-1].position.set(0,1.95,.81),r.name="glow"}else if(t.kind==="W"){let r=new ae({color:2781119});for(let a of[-.45,.45]){let l=new xt(new Me(.38,.38,1.7,14),r);l.position.set(a,.85,0),e.add(l)}let o=new xt(new Me(.2,.2,1.3,10),new ae({color:12597547}));o.position.set(0,.65,.35),e.add(o),i(jn([{text:"SERVICE STATION",color:"#7fc8ff"},{text:"Water + Fuel: E",color:"#fff",size:40}],{bg:"#08182a",border:"#2a8cf0"}),1.4,.7,2,.42)}else if(t.kind==="P"){let r=ti[t.perk];n(1.3,2.1,1,r.color),n(1.1,1,.05,1118481,1.1,.5),i(jn([{text:r.name.toUpperCase(),color:"#fff"},{text:r.cost+" \xA2",color:"#ffd25a"}],{bg:"#101010",border:"#"+r.color.toString(16).padStart(6,"0"),h:256}),1,.5,1.6,.53);let o=n(1.32,.1,1.02,16777215,2.12,0,{emissive:r.color});o.material.emissiveIntensity=1}}_crateTexture(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle="#6e5636",e.fillRect(0,0,128,128),e.strokeStyle="#3e2f1b",e.lineWidth=10,e.strokeRect(5,5,118,118),e.lineWidth=8,e.beginPath(),e.moveTo(8,8),e.lineTo(120,120),e.stroke(),e.fillStyle="rgba(0,0,0,0.15)";for(let i=0;i<8;i++)e.fillRect(0,i*16,128,2);let n=new Jn(t);return n.colorSpace=Se,n}_floorGeo(t,e,n){let i=[],r=[],o=[],a=[],l=0;for(let[h,u]of t){let d=h*j,f=u*j,g=d+j,x=f+j;i.push(d,e,f,g,e,f,g,e,x,d,e,x),r.push(0,0,1,0,1,1,0,1);let m=n?1:-1;for(let p=0;p<4;p++)o.push(0,m,0);n?a.push(l,l+2,l+1,l,l+3,l+2):a.push(l,l+1,l+2,l,l+2,l+3),l+=4}let c=new fe;return c.setAttribute("position",new Xt(i,3)),c.setAttribute("uv",new Xt(r,2)),c.setAttribute("normal",new Xt(o,3)),c.setIndex(a),c}_wallGeo(t){let e=[],n=[],i=[],r=[],o=0,a=Math.round(Fe/j*2)/2;for(let[c,h,u,d]of t){let f=c*j+j/2+u*j/2,g=h*j+j/2+d*j/2,x=-d,m=u,p=f-x*j/2,M=g-m*j/2,S=f+x*j/2,_=g+m*j/2;e.push(p,0,M,S,0,_,S,Fe,_,p,Fe,M),n.push(0,0,1,0,1,Fe/j,0,Fe/j);for(let L=0;L<4;L++)i.push(u,0,d);r.push(o,o+2,o+1,o,o+3,o+2),o+=4}let l=new fe;return l.setAttribute("position",new Xt(e,3)),l.setAttribute("uv",new Xt(n,2)),l.setAttribute("normal",new Xt(i,3)),l.setIndex(r),l.computeBoundingSphere(),l}openDoor(t,e=!1){let n=this.doors[t];if(!n||n.open)return!1;n.open=!0,n.t=e?1:0;for(let i of n.cells)this.height[i]=0,this.type[i]=0;if(e)for(let i of n.meshes)i.visible=!1;return this.flowFrom=-1,!0}update(t,e){for(let n in this.doors){let i=this.doors[n];if(i.open&&i.t<1){i.t=Math.min(1,i.t+t/1.6);for(let r of i.meshes)r.position.y=Fe/2+i.t*(Fe-.2),i.t>=1&&(r.visible=!1)}}for(let n of this.objects)n.anim&&(n.anim.rotation.y=e*1.5,n.anim.rotation.x=e*.7,n.anim.position.y=1.5+Math.sin(e*2)*.08)}blockedCircle(t,e,n,i,r=.45){let o=Math.floor((t-n)/j),a=Math.floor((t+n)/j),l=Math.floor((e-n)/j),c=Math.floor((e+n)/j);for(let h=l;h<=c;h++)for(let u=o;u<=a;u++)if(this.hAt(u,h)>i+r){let f=Math.max(u*j,Math.min(t,u*j+j)),g=Math.max(h*j,Math.min(e,h*j+j)),x=t-f,m=e-g;if(x*x+m*m<n*n)return!0}return!1}groundAt(t,e,n,i=99){let r=Math.floor((t-n)/j),o=Math.floor((t+n)/j),a=Math.floor((e-n)/j),l=Math.floor((e+n)/j),c=0;for(let h=a;h<=l;h++)for(let u=r;u<=o;u++){let d=this.hAt(u,h);if(d<50&&d<=i+.46){let f=Math.max(u*j,Math.min(t,u*j+j)),g=Math.max(h*j,Math.min(e,h*j+j)),x=t-f,m=e-g;x*x+m*m<n*n*.9&&d>c&&(c=d)}}return c}moveCircle(t,e,n,i,r,o,a){let l=t+n;this.blockedCircle(l,e,r,o,a)&&(l=t);let c=e+i;return this.blockedCircle(l,c,r,o,a)&&(c=e),[l,c]}raycast(t,e,n,i,r,o,a=200){let l=a,c=[0,0,0];if(r<-1e-6){let _=-e/r;_<l&&(l=_,c=[0,1,0])}if(r>1e-6){let _=(Fe-e)/r;_<l&&(l=_,c=[0,-1,0])}let h=Math.floor(t/j),u=Math.floor(n/j),d=i>0?1:-1,f=o>0?1:-1,g=Math.abs(i)>1e-9?j/Math.abs(i):1e9,x=Math.abs(o)>1e-9?j/Math.abs(o):1e9,m=Math.abs(i)>1e-9?(i>0?(h+1)*j-t:t-h*j)/Math.abs(i):1e9,p=Math.abs(o)>1e-9?(o>0?(u+1)*j-n:n-u*j)/Math.abs(o):1e9,M=0,S=-1;for(let _=0;_<400&&!(M>l);_++){let L=Math.min(m,p);if(!this.inside(h,u)){M<l&&(l=M,c=S===0?[-d,0,0]:[0,0,-f]);break}let E=this.height[this.idx(h,u)];if(E>0){let T=e+r*M,R=e+r*Math.min(L,l);if(T<E&&_>0){M<l&&(l=M,c=S===0?[-d,0,0]:[0,0,-f]);break}if(T>=E&&R<E){let v=M+(T-E)/(T-R)*(Math.min(L,l)-M);v<l&&(l=v,c=[0,1,0]);break}}m<p?(M=m,m+=g,h+=d,S=0):(M=p,p+=x,u+=f,S=1)}return{dist:l,x:t+i*l,y:e+r*l,z:n+o*l,nx:c[0],ny:c[1],nz:c[2]}}lineOfSight(t,e,n,i,r,o){let a=i-t,l=r-e,c=o-n,h=Math.hypot(a,l,c);return h<1e-4?!0:this.raycast(t,e,n,a/h,l/h,c/h,h).dist>=h-.05}passableForEnemy(t){let e=this.type[t];return e===0||e===2}computeFlow(t,e){let[n,i]=this.cellOf(t,e);if(!this.inside(n,i))return;let r=this.idx(n,i);if(r===this.flowFrom)return;this.flowFrom=r;let o=this.flow;o.fill(1e9);let a=new Int32Array(this.W*this.H),l=0,c=0;for(o[r]=0,a[c++]=r;l<c;){let h=a[l++],u=h%this.W,d=h/this.W|0,f=o[h]+1;if(u>0){let g=h-1;o[g]>f&&this.passableForEnemy(g)&&(o[g]=f,a[c++]=g)}if(u<this.W-1){let g=h+1;o[g]>f&&this.passableForEnemy(g)&&(o[g]=f,a[c++]=g)}if(d>0){let g=h-this.W;o[g]>f&&this.passableForEnemy(g)&&(o[g]=f,a[c++]=g)}if(d<this.H-1){let g=h+this.W;o[g]>f&&this.passableForEnemy(g)&&(o[g]=f,a[c++]=g)}}}flowDir(t,e){let[n,i]=this.cellOf(t,e);if(!this.inside(n,i))return null;let r=this.idx(n,i),o=this.flow[r],a=-1,l=-1;for(let g=-1;g<=1;g++)for(let x=-1;x<=1;x++){if(!x&&!g)continue;let m=n+x,p=i+g;if(!this.inside(m,p))continue;let M=this.idx(m,p);if(!this.passableForEnemy(M)||x&&g&&(!this.passableForEnemy(this.idx(n+x,i))||!this.passableForEnemy(this.idx(n,i+g))))continue;let S=this.flow[M]+(x&&g?.41:0);S<o&&(o=S,a=m,l=p)}if(a<0)return null;let[c,h]=this.center(a,l),u=c-t,d=h-e,f=Math.hypot(u,d)||1;return[u/f,d/f]}flowDist(t,e){let[n,i]=this.cellOf(t,e);return this.inside(n,i)?this.flow[this.idx(n,i)]:1e9}};var eu={a:[70,22,10,0],b:[30,55,45,0],c:[35,25,15,42],d:[40,40,25,28]},Qg={a:[[70,60,40],[60,80,30]],b:[[60,90,30],[80,60,35],[50,70,25]],c:[[90,50,110],[60,95,40]],d:[[110,60,20],[100,40,110],[60,90,30]]},Kl=1,Jl=1,Ql=2,fo=class{constructor(t,e){this.scene=t,this.level=e,this.group=new ee,t.add(this.group),this.zones={},this.texCache={},this.chunkGeo=new Jr(.16,0),this.sporeGeo=new Ln(1,1),this.stainGeo=new $e(1,1),this.tmpM=new Qt,this.tmpQ=new fn,this.tmpS=new P,this.tmpP=new P;for(let n of Object.keys(eu))this._genZone(n)}_tex(t,e){let n=Qg[t],i=t+e%(n.length*2);return this.texCache[i]||(this.texCache[i]=Jh(n[e%n.length],1e3+i.charCodeAt(0)*7+e)),this.texCache[i]}_genZone(t){let e=yi(9e3+t.charCodeAt(0)*31),n=this.level,i=n.bossCell.x*j,r=n.bossCell.y*j,o=n.zoneCells[t].filter(_=>{let[L,E]=n.center(_%n.W,_/n.W|0);return Math.hypot(L-i,E-r)>4.6}),[a,l,c,h]=eu[t],u={key:t,piles:[],stains:[],spores:[],total:0,cleaned:0,extraStains:0};this.zones[t]=u;let d=()=>o[e()*o.length|0],f=5,g=new Kn(this.chunkGeo,new ae({color:16777215}),a*f);g.instanceMatrix.setUsage(ji);let x=[7035973,5327163,8022602,4938293,6113850],m=new zt;for(let _=0;_<a;_++){let L=d(),E=L%n.W,T=L/n.W|0,R=E*j+.3+e()*(j-.6),v=T*j+.3+e()*(j-.6),y=6+(e()*7|0),C={id:_,x:R,y:.12,z:v,units:y,max:y,chunks:[],done:!1};for(let z=0;z<f;z++){let F=_*f+z,k=(e()-.5)*.7,q=(e()-.5)*.7,G=.6+e()*.9;C.chunks.push({ci:F,ox:k,oz:q,s:G,rx:e()*6,ry:e()*6}),m.setHex(x[e()*x.length|0]),g.setColorAt(F,m)}u.piles.push(C),u.total+=Kl}u.inst=g,this.group.add(g);for(let _ of u.piles)this._updatePile(u,_);g.instanceColor&&(g.instanceColor.needsUpdate=!0);let p=0;for(let _=0;_<l;_++){let L=d(),E=L%n.W,T=L/n.W|0,R=E*j+.5+e()*(j-1),v=T*j+.5+e()*(j-1),y=1.2+e()*1.6;p=(p+1)%40,this._addStain(u,R,.012+p*7e-4,v,0,1,0,y,e()*6|0,e()*6.28,70+y*30)}let M=[];for(let _ of o){let L=_%n.W,E=_/n.W|0;for(let[T,R]of[[1,0],[-1,0],[0,1],[0,-1]]){let v=L+T,y=E+R;n.inside(v,y)&&n.type[n.idx(v,y)]===1&&M.push([L,E,T,R])}}for(let _=0;_<c&&M.length;_++){let[L,E,T,R]=M[e()*M.length|0],v=1+e()*1.4,y=(e()-.5)*(j-v*.6),C=L*j+j/2+T*(j/2-.015-e()*.004)+(R!==0?y:0),z=E*j+j/2+R*(j/2-.015-e()*.004)+(T!==0?y:0),F=.6+e()*(Fe-1.6);this._addStain(u,C,F,z,-T,0,-R,v,e()*6|0,e()*6.28,70+v*30)}let S=new ae({color:11553488,emissive:5902448});for(let _=0;_<h;_++){let L=d(),E=L%n.W,T=L/n.W|0,R=1+(e()*3|0),v=E*j+.5+e()*(j-1),y=T*j+.5+e()*(j-1),C=new ee;C.position.set(v,0,y);for(let F=0;F<R;F++){let k=new xt(this.sporeGeo,S),q=.22+e()*.22;k.scale.setScalar(q),k.position.set((e()-.5)*.6,q*.8,(e()-.5)*.6),C.add(k)}this.group.add(C);let z={id:_,x:v,y:.35,z:y,hp:60,max:60,mesh:C,done:!1,phase:e()*6.28};u.spores.push(z),u.total+=Ql}}_addStain(t,e,n,i,r,o,a,l,c,h,u,d=!1){let f=new ae({map:this._tex(t.key,c),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),g=new xt(this.stainGeo,f);g.position.set(e,n,i),g.scale.set(l,l,1),o>.5?g.rotation.set(-Math.PI/2,0,h):g.rotation.set(0,Math.atan2(r,a),h),g.renderOrder=1,this.group.add(g);let x={id:t.stains.length,x:e,y:n,z:i,nx:r,ny:o,nz:a,r:l*.45,hp:u,max:u,mesh:g,done:!1,dynamic:d};return t.stains.push(x),t.total+=Jl,x}_updatePile(t,e){let n=e.done?0:Math.max(0,e.units/e.max);for(let i of e.chunks){let r=i.s*(n>0?.35+.65*n:0);this.tmpP.set(e.x+i.ox*(.5+.5*n),.08*r+.02,e.z+i.oz*(.5+.5*n)),this.tmpQ.setFromEuler(new Ne(i.rx,i.ry,0)),this.tmpS.setScalar(r),this.tmpM.compose(this.tmpP,this.tmpQ,this.tmpS),t.inst.setMatrixAt(i.ci,this.tmpM)}t.inst.instanceMatrix.needsUpdate=!0}cleanliness(t){let e=this.zones[t];if(!e)return 1;let n=0;for(let i of e.piles)n+=i.done?Kl:Kl*(1-i.units/i.max)*.5;for(let i of e.stains)n+=i.done?Jl:Jl*(1-i.hp/i.max)*.5;for(let i of e.spores)n+=i.done?Ql:Ql*(1-i.hp/i.max)*.5;return e.total>0?n/e.total:1}remaining(t){let e=this.zones[t];return e?{piles:e.piles.filter(n=>!n.done).length,stains:e.stains.filter(n=>!n.done).length,spores:e.spores.filter(n=>!n.done).length}:{piles:0,stains:0,spores:0}}vacuum(t,e,n,i,r,o,a,l,c,h,u,d,f){let g=0,x=[];for(let m of t){let p=this.zones[m];if(p)for(let M of p.piles){if(M.done)continue;let S=M.x-e,_=M.y-n,L=M.z-i,E=Math.hypot(S,_,L);E>l||E<.01||(S*r+_*o+L*a)/E<c||d.lineOfSight(e,n,i,M.x,M.y+.15,M.z)&&x.push([p,M,E])}}x.sort((m,p)=>m[2]-p[2]);for(let[m,p]of x){if(g>=u)break;let M=Math.min(p.units,h,u-g);p.units-=M,g+=M,p.units<=.001&&(p.units=0,p.done=!0,f&&f(p)),this._updatePile(m,p)}return{collected:g,hits:x}}wash(t,e,n,i,r,o,a){let l=0;for(let c of t){let h=this.zones[c];if(h)for(let u of h.stains){if(u.done)continue;let d=Math.hypot(u.x-e,u.y-n,u.z-i);d>r+u.r||(l++,u.hp-=o*(d<u.r?1:.6),u.mesh.material.opacity=Math.max(0,.15+.85*u.hp/u.max),u.hp<=0&&(u.done=!0,u.mesh.visible=!1,a&&a(u)))}}return l}burn(t,e,n,i,r,o,a,l,c,h,u,d){let f=0;for(let g of t){let x=this.zones[g];if(x)for(let m of x.spores){if(m.done)continue;let p=m.x-e,M=m.y-n,S=m.z-i,_=Math.hypot(p,M,S);_>l||c>-1&&_>.3&&(p*r+M*o+S*a)/_<c||u.lineOfSight(e,n,i,m.x,m.y+.2,m.z)&&(f++,m.hp-=h,m.burning=.3,m.hp<=0&&(m.done=!0,m.mesh.visible=!1,d&&d(m)))}}return f}foam(t,e,n,i,r,o){for(let a of t){let l=this.zones[a];if(l){for(let c of l.stains)!c.done&&Math.hypot(c.x-e,c.z-n)<i&&(c.hp=0,c.done=!0,c.mesh.visible=!1,r(c));for(let c of l.spores)!c.done&&Math.hypot(c.x-e,c.z-n)<i&&(c.hp=0,c.done=!0,c.mesh.visible=!1,o(c))}}}addGooStain(t,e,n,i){let r=this.zones[t];return!r||r.extraStains>25?null:(r.extraStains++,this._addStain(r,e,.03+r.extraStains*9e-4,n,0,1,0,i,Math.random()*6|0,Math.random()*6.28,60,!0))}update(t,e){for(let n in this.zones)for(let i of this.zones[n].spores){if(i.done)continue;let r=1+Math.sin(e*2.5+i.phase)*.06;i.mesh.scale.set(r,1/r,r),i.burning>0&&(i.burning-=t,i.mesh.rotation.y+=t*8)}}forEachRemaining(t,e){let n=this.zones[t];if(n){for(let i of n.piles)i.done||e(i.x,i.z,0);for(let i of n.stains)i.done||e(i.x,i.z,1);for(let i of n.spores)i.done||e(i.x,i.z,2)}}serialize(){let t={};for(let e in this.zones){let n=this.zones[e];t[e]={p:n.piles.map(i=>i.done?-1:Math.round(i.units*10)/10),s:n.stains.filter(i=>!i.dynamic).map(i=>i.done?-1:Math.round(i.hp)),o:n.spores.map(i=>i.done?-1:Math.round(i.hp))}}return t}deserialize(t){if(t)for(let e in t){let n=this.zones[e],i=t[e];!n||!i||((i.p||[]).forEach((r,o)=>{let a=n.piles[o];a&&(r<0?(a.done=!0,a.units=0):a.units=Math.min(a.max,r),this._updatePile(n,a))}),(i.s||[]).forEach((r,o)=>{let a=n.stains[o];a&&(r<0?(a.done=!0,a.hp=0,a.mesh.visible=!1):(a.hp=Math.min(a.max,r),a.mesh.material.opacity=.15+.85*a.hp/a.max))}),(i.o||[]).forEach((r,o)=>{let a=n.spores[o];a&&(r<0?(a.done=!0,a.hp=0,a.mesh.visible=!1):a.hp=Math.min(a.max,r))}))}}};var jg=`
attribute float size;
attribute vec4 pcolor;
varying vec4 vColor;
uniform float scale;
void main(){
  vColor = pcolor;
  vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,tx=`
varying vec4 vColor;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if(d > 0.5) discard;
  float a = smoothstep(0.5, 0.1, d);
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
}`,po=class{constructor(t,e,n){this.max=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.baseSize=new Float32Array(e),this.grow=new Float32Array(e),this.alpha=new Float32Array(e),this.alive=0;let i=new fe;this.posAttr=new Ae(this.pos,3).setUsage(ji),this.colAttr=new Ae(this.col,4).setUsage(ji),this.sizeAttr=new Ae(this.size,1).setUsage(ji),i.setAttribute("position",this.posAttr),i.setAttribute("pcolor",this.colAttr),i.setAttribute("size",this.sizeAttr),i.setDrawRange(0,0),this.mat=new Ye({vertexShader:jg,fragmentShader:tx,transparent:!0,depthWrite:!1,blending:n?$n:Xn,uniforms:{scale:{value:400}}}),this.points=new Wr(i,this.mat),this.points.frustumCulled=!1,this.geo=i,t.add(this.points)}spawn(t,e,n,i,r,o,a,l,c,h,u,d=1,f=0,g=0,x=0){if(this.alive>=this.max)return;let m=this.alive++;this.pos[m*3]=t,this.pos[m*3+1]=e,this.pos[m*3+2]=n,this.vel[m*3]=i,this.vel[m*3+1]=r,this.vel[m*3+2]=o,this.col[m*4]=c,this.col[m*4+1]=h,this.col[m*4+2]=u,this.col[m*4+3]=d,this.alpha[m]=d,this.life[m]=a,this.maxLife[m]=a,this.baseSize[m]=l,this.size[m]=l,this.grav[m]=f,this.drag[m]=g,this.grow[m]=x}update(t){let e=0;for(;e<this.alive;){if(this.life[e]-=t,this.life[e]<=0){this._kill(e);continue}let n=e*3,i=Math.max(0,1-this.drag[e]*t);this.vel[n]*=i,this.vel[n+1]=this.vel[n+1]*i-this.grav[e]*t,this.vel[n+2]*=i,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t,this.pos[n+1]<.02&&(this.pos[n+1]=.02,this.vel[n+1]*=-.3,this.vel[n]*=.6,this.vel[n+2]*=.6);let r=this.life[e]/this.maxLife[e];this.col[e*4+3]=this.alpha[e]*Math.min(1,r*2.5),this.size[e]=this.baseSize[e]*(1+this.grow[e]*(1-r)),e++}this.geo.setDrawRange(0,this.alive),this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0}_kill(t){let e=--this.alive;if(t!==e){for(let n=0;n<3;n++)this.pos[t*3+n]=this.pos[e*3+n],this.vel[t*3+n]=this.vel[e*3+n];for(let n=0;n<4;n++)this.col[t*4+n]=this.col[e*4+n];this.life[t]=this.life[e],this.maxLife[t]=this.maxLife[e],this.size[t]=this.size[e],this.baseSize[t]=this.baseSize[e],this.grav[t]=this.grav[e],this.drag[t]=this.drag[e],this.grow[t]=this.grow[e],this.alpha[t]=this.alpha[e]}}setScale(t){this.mat.uniforms.scale.value=t*.5}},mo=class{constructor(t){this.add=new po(t,2500,!0),this.norm=new po(t,2500,!1)}update(t){this.add.update(t),this.norm.update(t)}setScale(t){this.add.setScale(t),this.norm.setScale(t)}sparks(t,e,n,i,r,o,a=6){for(let l=0;l<a;l++){let c=3+Math.random()*4;this.add.spawn(t,e,n,(i+(Math.random()-.5))*c,(r+Math.random()*.8)*c,(o+(Math.random()-.5))*c,.15+Math.random()*.2,.06,1,.8,.4,1,9,2)}this.norm.spawn(t+i*.05,e+r*.05,n+o*.05,0,.4,0,.6,.25,.4,.4,.4,.5,-.2,1,2)}goo(t,e,n,i,r=10,o=3){let a=(i>>16&255)/255,l=(i>>8&255)/255,c=(i&255)/255;for(let h=0;h<r;h++)this.norm.spawn(t,e,n,(Math.random()-.5)*o,Math.random()*o,(Math.random()-.5)*o,.4+Math.random()*.4,.09+Math.random()*.08,a,l,c,.95,12,1)}water(t,e,n,i,r,o,a){let l=16+Math.random()*6;this.norm.spawn(t,e,n,(i+(Math.random()-.5)*a)*l,(r+(Math.random()-.5)*a)*l,(o+(Math.random()-.5)*a)*l,.3+Math.random()*.15,.05,.7,.85,1,.55,6,1,3)}mist(t,e,n){this.norm.spawn(t,e,n,(Math.random()-.5)*1.5,Math.random()*1.2,(Math.random()-.5)*1.5,.5,.2,.85,.92,1,.35,0,1,3)}flame(t,e,n,i,r,o){let a=7+Math.random()*3,l=Math.random();this.add.spawn(t,e,n,(i+(Math.random()-.5)*.25)*a,(r+(Math.random()-.3)*.25)*a,(o+(Math.random()-.5)*.25)*a,.45+Math.random()*.2,.12,1,.45+l*.4,.1,.9,-2,1.5,4)}suck(t,e,n,i,r,o,a=9075290){let l=(a>>16&255)/255,c=(a>>8&255)/255,h=(a&255)/255,u=.25;this.norm.spawn(t,e,n,(i-t)/u,(r-e)/u,(o-n)/u,u,.07,l,c,h,1,0,0,-.5)}smoke(t,e,n,i=1,r=[.3,.3,.3]){for(let o=0;o<i;o++)this.norm.spawn(t,e,n,(Math.random()-.5)*.8,.6+Math.random(),(Math.random()-.5)*.8,1.2,.35,r[0],r[1],r[2],.4,-.3,.5,3)}burst(t,e,n,i,r=30,o=6,a=.12){let l=(i>>16&255)/255,c=(i>>8&255)/255,h=(i&255)/255;for(let u=0;u<r;u++){let d=Math.random()*Math.PI*2,f=(Math.random()-.3)*Math.PI,g=o*(.4+Math.random()*.6);this.add.spawn(t,e,n,Math.cos(d)*Math.cos(f)*g,Math.sin(f)*g,Math.sin(d)*Math.cos(f)*g,.4+Math.random()*.5,a,l,c,h,1,4,2,1)}}};var go=class{constructor(t){this.scene=t,this.tracers=[],this.holes=[],this.holeGeo=new Kr(.05,8),this.holeMat=new ue({color:1118481,transparent:!0,opacity:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})}tracer(t,e,n){let i=new fe().setFromPoints([t,e]),r=new Rs({color:n,transparent:!0,opacity:.8,blending:$n,depthWrite:!1}),o=new Gr(i,r);this.scene.add(o),this.tracers.push({line:o,t:.07})}bulletHole(t){let e;this.holes.length>=80?e=this.holes.shift():(e=new xt(this.holeGeo,this.holeMat),this.scene.add(e)),e.position.set(t.x+t.nx*.01,t.y+t.ny*.01,t.z+t.nz*.01),e.lookAt(t.x+t.nx,t.y+t.ny,t.z+t.nz),this.holes.push(e)}update(t){for(let e=this.tracers.length-1;e>=0;e--){let n=this.tracers[e];n.t-=t,n.line.material.opacity=Math.max(0,n.t/.07)*.8,n.t<=0&&(this.scene.remove(n.line),n.line.geometry.dispose(),n.line.material.dispose(),this.tracers.splice(e,1))}}};var ex=new P;function xo(s,t,e,n){let i=s.x-e.x,r=s.y-e.y,o=s.z-e.z,a=i*t.x+r*t.y+o*t.z,l=i*i+r*r+o*o-n*n,c=a*a-l;if(c<0)return-1;let h=Math.sqrt(c),u=-a-h;return u>=0?u:-a+h>=0?0:-1}var jl={ammo:{name:"MAX AMMO",color:5635925},double:{name:"DOUBLE CREDITS",color:16765498},insta:{name:"INSTA-CLEAN",color:16726586},purge:{name:"PURGE",color:3856639}},_o=class{constructor(t){this.game=t,this.list=[],this.projectiles=[],this.pickups=[],this.group=new ee,t.scene.add(this.group),this.spawnTimer=3,this.flowTimer=0,this.surgeTimer=100,this.surgeActive=0,this.geo={body:new Qn(1,14,10),eye:new Qn(1,8,6),arm:new Me(.5,.3,1,8),glob:new Qn(.16,8,6),pickup:new jr(.35,0)},this.eyeMats={},this.boss=null}makeMesh(t){var c;let e=Yl[t],n=new ee,i=new ae({color:e.color,emissive:0}),r=(c=this.eyeMats)[t]||(c[t]=new ue({color:e.eye})),o=e.height,a=new xt(this.geo.body,i),l={mat:i};if(t==="brute"){a.scale.set(.85,.95,.7),a.position.y=1.25;let h=new xt(this.geo.body,i);h.scale.set(.35,.3,.35),h.position.set(0,2.25,.25),n.add(h),l.head=h;for(let u of[-1,1]){let d=new xt(this.geo.arm,i);d.scale.set(.55,1.4,.55),d.position.set(u*.95,1.2,.15),d.rotation.z=u*.2,n.add(d),(l.arms||(l.arms=[])).push(d)}for(let u of[-1,1]){let d=new xt(this.geo.eye,r);d.scale.setScalar(.07),d.position.set(u*.13,2.3,.55),n.add(d)}}else if(t==="spitter"){a.scale.set(.4,.75,.4),a.position.y=.95;let h=new xt(this.geo.body,new ae({color:10289002,emissive:3832336}));h.scale.set(.32,.28,.32),h.position.set(0,1.55,-.12),n.add(h),l.sac=h;let u=new xt(this.geo.body,i);u.scale.set(.22,.24,.26),u.position.set(0,1.72,.12),n.add(u),l.head=u;for(let d of[-1,1]){let f=new xt(this.geo.eye,r);f.scale.setScalar(.05),f.position.set(d*.09,1.78,.34),n.add(f)}for(let d of[-1,1]){let f=new xt(this.geo.arm,i);f.scale.set(.15,.8,.15),f.position.set(d*.38,1,.1),f.rotation.z=d*.3,n.add(f),(l.arms||(l.arms=[])).push(f)}}else{a.scale.set(.48,.62,.42),a.position.y=.75;let h=new xt(this.geo.body,i);h.scale.set(.27,.25,.27),h.position.set(0,1.42,.08),n.add(h),l.head=h;for(let u of[-1,1]){let d=new xt(this.geo.eye,r);d.scale.setScalar(.055),d.position.set(u*.1,1.47,.32),n.add(d)}for(let u of[-1,1]){let d=new xt(this.geo.arm,i);d.scale.set(.18,.9,.18),d.position.set(u*.45,.95,.25),d.rotation.x=-1.1,n.add(d),(l.arms||(l.arms=[])).push(d)}for(let u=0;u<3;u++){let d=new xt(this.geo.body,i);d.scale.setScalar(.12+Math.random()*.08),d.position.set((Math.random()-.5)*.6,.3+Math.random()*.7,(Math.random()-.5)*.5),n.add(d)}}return n.add(a),l.body=a,{g:n,parts:l}}spawn(t,e,n,i=!1){let r=this.game,o=Yl[t],a=we[Math.max(1,Math.min(4,r.phase))],{g:l,parts:c}=this.makeMesh(t),h=r.level.groundAt(e,n,o.radius);l.position.set(e,h,n),this.group.add(l);let u=o.hp*a.hpMul*(r.difficulty||1),d={type:t,d:o,mesh:l,parts:c,pos:new P(e,h,n),vel:new P,knock:new P,hp:u,maxHp:u,attackCd:1,windup:0,spawnT:i?0:.9,dying:0,flash:0,burn:0,los:!1,losT:Math.random()*.3,anim:Math.random()*10,lastClose:r.time,bestDist:1e9,charge:0,chargeCd:4+Math.random()*3,strafe:Math.random()<.5?1:-1,lastCreditT:-1,yaw:0,speedMul:.9+Math.random()*.25};return this.list.push(d),i||r.particles.goo(e,.2,n,o.color,16,3),d}pickSpawnPoint(){let t=this.game,e=t.level,n=t.player.pos,i=t.spawnZones();if(!i.length)return null;for(let r=0;r<30;r++){let o=r>18,a=i[Math.random()*i.length|0],l=e.zoneCells[a],c=l[Math.random()*l.length|0],h=c%e.W,u=c/e.W|0,[d,f]=e.center(h,u),g=Math.hypot(d-n.x,f-n.z);if(!(g<13||g>60)&&!(e.flow[c]>1e8)&&!(!o&&e.lineOfSight(n.x,n.y+1.6,n.z,d,1,f)))return[d+(Math.random()-.5)*.8,f+(Math.random()-.5)*.8]}return null}director(t){let e=this.game;if(e.phase<1)return;let n=we[Math.min(4,e.phase)];e.victory||(this.surgeTimer-=t),this.surgeActive>0?(this.surgeActive-=t,this.surgeActive<=0&&e.ui.banner("Surge contained","The bloom quiets down... for now",2.5)):this.surgeTimer<=0&&(this.surgeActive=22,this.surgeTimer=110+Math.random()*30,e.ui.banner("BLOOM SURGE","The sludge is boiling over \u2014 survive!",3,"#ff4a4a"),e.audio.surge());let i=e.grime.cleanliness(n.zone),r=this.surgeActive>0,o=e.victory?6:n.maxAlive+(r?8:0)+(this.boss&&this.boss.active?-4:0),a=n.interval*(.65+.8*i)*(r?.35:1);e.inHub()&&(a*=1.6),this.spawnTimer-=t;let l=this.list.filter(c=>c.dying<=0).length;if(this.spawnTimer<=0&&l<o){this.spawnTimer=a*(.7+Math.random()*.6);let c=this.pickSpawnPoint();if(c){let h=Math.random(),u="sludger";for(let[d,f]of Object.entries(n.mix)){if(h<f){u=d;break}h-=f}this.spawn(u,c[0],c[1])}}}update(t){let e=this.game,n=e.level,i=e.player;this.flowTimer-=t,this.flowTimer<=0&&(this.flowTimer=.2,n.computeFlow(i.pos.x,i.pos.z)),e.state==="playing"&&this.director(t);let r=new P(i.pos.x,i.pos.y+1,i.pos.z);for(let o=this.list.length-1;o>=0;o--){let a=this.list[o];if(a.anim+=t,a.flash>0&&(a.flash-=t,a.parts.mat.emissive.setHex(a.flash>0?8930372:a.burn>0?5579264:0)),a.dying>0){a.dying-=t;let R=1-a.dying/.6;a.mesh.scale.set(1+R*.6,Math.max(.01,1-R),1+R*.6),a.dying<=0&&(this.group.remove(a.mesh),this.list.splice(o,1));continue}if(a.spawnT>0){a.spawnT-=t,a.mesh.position.y=a.pos.y-Math.max(0,a.spawnT)/.9*a.d.height,Math.random()<.3&&e.particles.goo(a.pos.x,.1,a.pos.z,a.d.color,1,2);continue}if(a.burn>0&&(a.burn-=t,this.damage(a,30*t*(1+.4*(e.phase-1)),{kind:"fire",silent:!0}),Math.random()<.4&&e.particles.flame(a.pos.x+(Math.random()-.5)*.4,a.pos.y+.5+Math.random(),a.pos.z+(Math.random()-.5)*.4,0,.3,0),a.burn<=0&&a.parts.mat.emissive.setHex(0),a.dying>0))continue;let l=i.pos.x-a.pos.x,c=i.pos.z-a.pos.z,h=Math.hypot(l,c),u=i.pos.y-a.pos.y;if(a.losT-=t,a.losT<=0&&(a.losT=.25+Math.random()*.1,a.los=n.lineOfSight(a.pos.x,a.pos.y+a.d.height*.8,a.pos.z,r.x,r.y+.5,r.z)),h<a.bestDist-1&&(a.bestDist=h,a.lastClose=e.time),e.time-a.lastClose>14&&!a.los&&h>18){this.group.remove(a.mesh),this.list.splice(o,1);continue}let d=0,f=0,g=a.d.speed*a.speedMul*(1+.06*(e.phase-1));if(a.los&&h<9&&Math.abs(u)<1.5||h<1.2)d=l/(h||1),f=c/(h||1);else{let R=n.flowDir(a.pos.x,a.pos.z);R?(d=R[0],f=R[1]):h>0&&(d=l/h,f=c/h)}if(a.type==="spitter"&&a.los&&h<14){let R=-c/(h||1),v=l/(h||1),y=h>9?1:h<6?-1:0;d=l/h*y+R*a.strafe*.6,f=c/h*y+v*a.strafe*.6,Math.random()<t*.3&&(a.strafe*=-1),a.attackCd-=t,a.attackCd<=0&&(a.attackCd=a.d.rate*(.8+Math.random()*.4),this.spit(a,r))}a.type==="brute"&&(a.chargeCd-=t,a.charge>0?(a.charge-=t,g*=2.6,d=a.cdx,f=a.cdz):a.chargeCd<=0&&a.los&&h<12&&h>3&&(a.charge=1,a.chargeCd=6+Math.random()*3,a.cdx=l/h,a.cdz=c/h,e.audio.growl()));let m=a.d.radius+.95;(a.type!=="spitter"||h<m)&&(a.attackCd-=a.type==="spitter"?0:t,a.windup>0?(a.windup-=t,g*=.35,a.windup<=0&&(h<m+.5&&Math.abs(u)<1.9&&e.state==="playing"&&i.damage(a.d.dmg*(1+.25*(e.phase-1)),a.pos),a.attackCd=a.d.rate)):h<m&&a.attackCd<=0&&Math.abs(u)<1.9&&(a.windup=.32,a.charge>0&&(a.charge=0))),h<a.d.radius+i.radius+.1&&Math.abs(u)<1.8&&(d*=.1,f*=.1);for(let R of this.list){if(R===a||R.dying>0)continue;let v=a.pos.x-R.pos.x,y=a.pos.z-R.pos.z,C=v*v+y*y,z=a.d.radius+R.d.radius;if(C<z*z&&C>1e-6){let F=Math.sqrt(C);d+=v/F*.9,f+=y/F*.9}}let p=Math.hypot(d,f);p>1&&(d/=p,f/=p);let M=a.knock.x,S=a.knock.z;a.knock.multiplyScalar(Math.max(0,1-t*5)),a.vel.x=d*g+M,a.vel.z=f*g+S;let[_,L]=n.moveCircle(a.pos.x,a.pos.z,a.vel.x*t,a.vel.z*t,a.d.radius*.8,a.pos.y,1.25);a.pos.x=_,a.pos.z=L,this.boss&&this.boss.alive&&this.pushFromBoss(a.pos,a.d.radius);let E=n.groundAt(a.pos.x,a.pos.z,a.d.radius*.5,a.pos.y+.9);if(a.pos.y+=(E-a.pos.y)*Math.min(1,t*(E>a.pos.y?8:12)),a.mesh.position.copy(a.pos),p>.05||h<10){let v=(h<10&&a.los?Math.atan2(l,c):Math.atan2(d,f))-a.yaw;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;a.yaw+=Dn(v,-8*t,8*t)}a.mesh.rotation.y=a.yaw;let T=Math.sin(a.anim*(a.charge>0?18:9))*.08;a.parts.body.rotation.z=T,a.parts.arms&&a.parts.arms.forEach((R,v)=>{R.rotation.x=(a.type==="sludger"?-1.1:0)+Math.sin(a.anim*9+v*Math.PI)*.4-(a.windup>0?.9:0)}),a.parts.sac&&a.parts.sac.scale.setScalar(.3+(1-a.attackCd/a.d.rate)*.08),Math.random()<t*.15&&h<20&&e.audio.growl()}this.updateProjectiles(t),this.updatePickups(t),this.boss&&this.updateBoss(t)}spit(t,e){let n=this.game,i=new P(t.pos.x,t.pos.y+1.6,t.pos.z),o=e.clone().add(new P(n.player.vel.x*.3,0,n.player.vel.z*.3)).sub(i),c=Math.hypot(o.x,o.z)/14,h=new P(o.x/c,o.y/c+.5*9*c,o.z/c);this.addProjectile(i,h,t.d.dmg*(1+.25*(n.phase-1)),10289002,9),n.audio.spit()}addProjectile(t,e,n,i,r,o=1){let a=new xt(this.geo.glob,new ue({color:i}));a.scale.setScalar(o),a.position.copy(t),this.group.add(a),this.projectiles.push({mesh:a,vel:e,dmg:n,color:i,grav:r,life:5,size:o})}updateProjectiles(t){let e=this.game,n=e.level,i=e.player;for(let r=this.projectiles.length-1;r>=0;r--){let o=this.projectiles[r];o.life-=t,o.vel.y-=o.grav*t;let a=o.mesh.position;a.addScaledVector(o.vel,t),Math.random()<.5&&e.particles.norm.spawn(a.x,a.y,a.z,0,0,0,.3,.1*o.size,(o.color>>16&255)/255,(o.color>>8&255)/255,(o.color&255)/255,.6,0,0,0);let l=a.x-i.pos.x,c=a.z-i.pos.z,h=a.y-(i.pos.y+.9),u=!1;l*l+c*c<.5*o.size+.2&&Math.abs(h)<1&&(e.state==="playing"&&i.damage(o.dmg,a),u=!0);let[d,f]=n.cellOf(a.x,a.z);(a.y<n.hAt(d,f)||a.y<.05||a.y>4.5||o.life<=0)&&(u=!0),u&&(e.particles.goo(a.x,Math.max(.1,a.y),a.z,o.color,10,3),e.audio.splat(),this.group.remove(o.mesh),o.mesh.material.dispose(),this.projectiles.splice(r,1))}}raycast(t,e,n){let i=[];for(let r of this.list){if(r.dying>0||r.spawnT>.5)continue;let o=r.parts.head,a=ex.set(0,0,0);o.getWorldPosition(a);let l=o.scale.x*1.1,c=xo(t,e,a,l),h=new P(r.pos.x,r.pos.y+r.d.height*.42,r.pos.z),u=r.d.radius*1.05,d=xo(t,e,h,u),f=new P(r.pos.x,r.pos.y+r.d.height*.16,r.pos.z),g=xo(t,e,f,u*.9);(d<0||g>=0&&g<d)&&(d=g);let x=-1,m=!1;c>=0&&(d<0||c<=d+.05)?(x=c,m=!0):d>=0&&(x=d),x>=0&&x<n&&i.push({enemy:r,dist:x,head:m,point:t.clone().addScaledVector(e,x)})}return i.sort((r,o)=>r.dist-o.dist),i}meleeTarget(t,e,n,i){let r=null,o=1e9;for(let a of this.list){if(a.dying>0||a.spawnT>.5)continue;let c=new P(a.pos.x,a.pos.y+a.d.height*.5,a.pos.z).sub(t),h=c.length();h>n+a.d.radius||(c.normalize(),(c.x*e.x+c.z*e.z)/(Math.hypot(c.x,c.z)*Math.hypot(e.x,e.z)||1)<i)||this.game.level.lineOfSight(t.x,t.y,t.z,a.pos.x,a.pos.y+a.d.height*.5,a.pos.z)&&h<o&&(o=h,r=a)}return r}coneDamage(t,e,n,i,r,o){for(let a of this.list){if(a.dying>0||a.spawnT>.5)continue;let l=new P(a.pos.x,a.pos.y+a.d.height*.5,a.pos.z).sub(t),c=l.length();c>n+a.d.radius||c>.5&&l.dot(e)/c<i||this.game.level.lineOfSight(t.x,t.y,t.z,a.pos.x,a.pos.y+1,a.pos.z)&&(a.burn=2.5,this.damage(a,r*(1+.4*(this.game.phase-1)),{kind:o,silent:!0}))}if(this.boss&&this.boss.alive&&this.boss.active){let a=this.boss,l=new P(a.x,2.2,a.z).sub(t),c=l.length();c<n+2.4&&l.dot(e)/c>i-.15&&(this.damageBoss(r*3,null,"fire"),this.washBoss(r*.5,null))}}radiusDamage(t,e,n,i,r){for(let o of this.list){if(o.dying>0)continue;let a=Math.hypot(o.pos.x-t,o.pos.y+.8-e,o.pos.z-n);if(a<i){this.damage(o,r*(1-a/i*.6),{kind:"blast"});let l=(1-a/i)*10;o.knock.x+=(o.pos.x-t)/(a||1)*l,o.knock.z+=(o.pos.z-n)/(a||1)*l}}}damage(t,e,n={}){let i=this.game;t.dying>0||t.hp<=0||(i.powerups.insta>0&&n.kind!=="water"&&(e=t.hp+1),t.hp-=e,n.silent||(t.flash=.08,t.parts.mat.emissive.setHex(8930372),n.point&&i.particles.goo(n.point.x,n.point.y,n.point.z,t.d.color,n.head?10:5,3),i.audio.hit(),n.head&&i.audio.headshot(),n.kind==="bullet"&&i.time-t.lastCreditT>.06&&(t.lastCreditT=i.time,i.addCredits(xe.hit,null,!0))),t.hp<=0?this.kill(t,n):n.silent||i.ui.hitmarker(!!n.head,!1))}kill(t,e){let n=this.game;t.hp=0,t.dying=.6,n.stats.kills++;let i=e.kind==="melee"?xe.meleeKill:e.head?xe.headKill:xe.kill;n.addCredits(i+(t.d.reward-60),null,!1,e.kind==="melee"?"MELEE KILL":e.head?"HEADSHOT":null),n.ui.hitmarker(!!e.head,!0),n.audio.kill(),n.particles.goo(t.pos.x,t.pos.y+t.d.height*.5,t.pos.z,t.d.color,30,5);let r=n.level.zoneAtWorld(t.pos.x,t.pos.z);if(r&&r!=="h"&&Math.random()<.3&&n.grime.addGooStain(r,t.pos.x,t.pos.z,1+t.d.radius),Math.random()<.035&&this.pickups.length<3){let o=Object.keys(jl);this.dropPickup(o[Math.random()*o.length|0],t.pos.x,t.pos.z)}}dropPickup(t,e,n){let i=jl[t],r=new xt(this.geo.pickup,new ue({color:i.color})),o=this.game.level.groundAt(e,n,.3)+.9;r.position.set(e,o,n);let a=new xt(new to(.45,.6,24),new ue({color:i.color,transparent:!0,opacity:.5,side:Ge}));r.add(a),this.group.add(r),this.pickups.push({kind:t,mesh:r,life:25,y:o})}updatePickups(t){let e=this.game,n=e.player;for(let i=this.pickups.length-1;i>=0;i--){let r=this.pickups[i];r.life-=t,r.mesh.rotation.y+=t*2,r.mesh.position.y=r.y+Math.sin(e.time*3)*.12,r.mesh.visible=r.life>5||Math.sin(e.time*20)>0,Math.hypot(r.mesh.position.x-n.pos.x,r.mesh.position.z-n.pos.z)<1.2&&Math.abs(r.y-.9-n.pos.y)<1.5?(e.applyPowerup(r.kind,jl[r.kind].name),this.group.remove(r.mesh),this.pickups.splice(i,1)):r.life<=0&&(this.group.remove(r.mesh),this.pickups.splice(i,1))}}purgeAll(){for(let t of this.list)t.dying<=0&&t.spawnT<=.5&&this.kill(t,{kind:"blast"})}pushPlayer(t){for(let e of this.list){if(e.dying>0||e.spawnT>0)continue;let n=t.pos.x-e.pos.x,i=t.pos.z-e.pos.z,r=t.radius+e.d.radius*.8,o=n*n+i*i;if(o<r*r&&o>1e-6&&Math.abs(t.pos.y-e.pos.y)<1.6){let a=Math.sqrt(o),l=(r-a)*.5,c=t.pos.x+n/a*l,h=t.pos.z+i/a*l;this.game.level.blockedCircle(c,h,t.radius,t.pos.y,.45)||(t.pos.x=c,t.pos.z=h)}}this.boss&&this.boss.alive&&this.pushFromBoss(t.pos,t.radius,!0)}createBoss(){let t=this.game,e=t.level,[n,i]=e.center(e.bossCell.x,e.bossCell.y),r=n-j/2,o=i-j/2,a=new ee;a.position.set(r,0,o);let l=new ae({color:9054826,emissive:3803690}),c=new xt(new Ln(1.8,2),l);c.position.y=2.1,a.add(c);let h=new ae({color:7012154,transparent:!0,opacity:.55,emissive:1726986}),u=new xt(new Ln(2.3,2),h);u.position.y=2.1,a.add(u);let d=[],f=new ae({color:5904970});for(let m=0;m<8;m++){let p=new ee,M=m/8*Math.PI*2;p.position.set(Math.cos(M)*1.5,.6,Math.sin(M)*1.5),p.rotation.y=-M;let S=new xt(new Me(.08,.32,3.2,8),f);S.position.y=1.6,p.add(S),a.add(p),d.push(p)}let g=new xt(new Me(2.6,3.2,.5,20),new ae({color:3807786}));g.position.y=.25,a.add(g);for(let m=0;m<6;m++){let p=new xt(this.geo.eye,new ue({color:16769594})),M=m/6*Math.PI*2;p.scale.setScalar(.18),p.position.set(Math.cos(M)*1.75,2.4+Math.sin(m)*.4,Math.sin(M)*1.75),a.add(p)}t.scene.add(a);let x=9e3*(t.difficulty||1);this.boss={x:r,z:o,grp:a,core:c,shell:u,coreMat:l,shellMat:h,tentacles:d,hp:x,maxHp:x,shield:800,maxShield:800,active:!1,alive:!0,volleyT:4,summonT:10,slamT:3,lastWash:-10,flash:0,r:2.4},a.scale.setScalar(.6)}awakenBoss(){this.boss||this.createBoss(),this.boss.active=!0,this.game.audio.boss()}pushFromBoss(t,e,n=!1){let i=this.boss,r=t.x-i.x,o=t.z-i.z,a=Math.hypot(r,o),l=(i.active?3.1:2)+e;if(a<l&&a>1e-4){let c=i.x+r/a*l,h=i.z+o/a*l;this.game.level.blockedCircle(c,h,e,t.y,.45)||(t.x=c,t.z=h)}}bossRaycast(t,e,n){let i=this.boss;if(!i||!i.alive||!i.active)return null;let r=xo(t,e,new P(i.x,2.1,i.z),i.shield>0?2.3:1.9);return r>=0&&r<n?{dist:r,point:t.clone().addScaledVector(e,r)}:null}damageBoss(t,e,n){let i=this.game,r=this.boss;if(!r||!r.alive||!r.active)return;let o=t;r.shield>0&&n!=="fire"?(o=t*.08,e&&i.particles.goo(e.x,e.y,e.z,7012154,3,2)):e&&i.particles.goo(e.x,e.y,e.z,13650592,6,3),i.powerups.insta>0&&(o*=2),r.hp-=o,r.flash=.06,n==="bullet"&&i.time-(r.lastCredit||0)>.08&&(r.lastCredit=i.time,i.addCredits(xe.hit,null,!0)),i.ui.hitmarker(!1,!1),r.hp<=0&&this.killBoss()}washBoss(t,e,n,i,r,o){let a=this.boss;if(!(!a||!a.alive||!a.active)){if(n!==void 0){Math.hypot(a.x-n,a.z-i)<r+2.3&&(a.shield=Math.max(0,a.shield-o*4),a.lastWash=this.game.time);return}a.shield=Math.max(0,a.shield-t),a.lastWash=this.game.time,e&&Math.random()<.5&&this.game.particles.mist(e.x,e.y,e.z)}}killBoss(){let t=this.game,e=this.boss;e.alive=!1,e.hp=0,t.particles.burst(e.x,2.2,e.z,13650592,200,14,.3),t.particles.goo(e.x,2.2,e.z,7012154,80,10),t.audio.boom(),t.scene.remove(e.grp),this.purgeAll(),t.addCredits(1e4,null,!1,"BLOOM MOTHER DESTROYED"),t.onBossDefeated()}updateBoss(t){let e=this.game,n=this.boss,i=e.player;if(!n.alive)return;let r=e.time,o=n.active?Math.min(1,n.grp.scale.x+t*.5):.6;n.grp.scale.setScalar(o),n.core.rotation.y+=t*.3;let a=1+Math.sin(r*2)*.04;if(n.core.scale.setScalar(a),n.shell.visible=n.shield>0,n.shell.scale.setScalar(a*(.9+.1*n.shield/n.maxShield)),n.shellMat.opacity=.2+.45*n.shield/n.maxShield,n.tentacles.forEach((h,u)=>{h.rotation.z=Math.sin(r*1.5+u)*.5-.3,h.rotation.x=Math.cos(r*1.2+u*2)*.3}),n.flash>0&&(n.flash-=t,n.coreMat.emissive.setHex(n.flash>0?11156090:3803690)),!n.active)return;r-n.lastWash>6&&n.shield<n.maxShield&&(n.shield=Math.min(n.maxShield,n.shield+60*t));let l=Math.hypot(i.pos.x-n.x,i.pos.z-n.z);n.volleyT-=t,n.summonT-=t,n.slamT-=t;let c=1+(1-n.hp/n.maxHp)*.8;if(n.volleyT<=0&&(n.volleyT=3.6/c,e.level.lineOfSight(n.x,3.5,n.z,i.pos.x,i.pos.y+1,i.pos.z))){for(let h=0;h<5;h++){let u=new P(n.x,3.6,n.z),f=new P(i.pos.x+(Math.random()-.5)*3,i.pos.y+.8,i.pos.z+(Math.random()-.5)*3).clone().sub(u),g=Math.hypot(f.x,f.z),x=Math.max(.6,g/11);this.addProjectile(u,new P(f.x/x,f.y/x+.5*9*x,f.z/x),18,13656319,9,1.8)}e.audio.spit()}if(n.summonT<=0&&(n.summonT=13/c,this.list.length<18))for(let h=0;h<3;h++){let u=Math.random()*Math.PI*2,d=n.x+Math.cos(u)*4.5,f=n.z+Math.sin(u)*4.5;e.level.blockedCircle(d,f,.5,0,.45)||this.spawn(Math.random()<.25?"spitter":"sludger",d,f)}if(n.slamT<=0&&l<6.5&&(n.slamT=3.5,e.particles.burst(n.x,.3,n.z,7012154,60,10,.2),e.audio.boom(),e.shake=Math.max(e.shake,.4),i.onGround||i.pos.y<.6)){i.damage(28,{x:n.x,z:n.z});let h=12;i.vel.x+=(i.pos.x-n.x)/(l||1)*h,i.vel.z+=(i.pos.z-n.z)/(l||1)*h,i.vel.y=5,i.onGround=!1}}clearAll(){for(let t of this.list)this.group.remove(t.mesh);for(let t of this.projectiles)this.group.remove(t.mesh);for(let t of this.pickups)this.group.remove(t.mesh);this.list=[],this.projectiles=[],this.pickups=[],this.spawnTimer=4}};var tc=null;function Le(s,t={}){return new Fs({color:s,roughness:.55,metalness:.45,...t})}function Kt(s,t,e,n,i,r,o,a){let l=new xt(new Ie(t,e,n),i);return l.position.set(r,o,a),s.add(l),l}function Un(s,t,e,n,i,r,o,a=10){let l=new xt(new Me(t,t,e,a),n);return l.rotation.x=Math.PI/2,l.position.set(i,r,o),s.add(l),l}function nx(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,220,1)"),e.addColorStop(.3,"rgba(255,190,60,0.9)"),e.addColorStop(1,"rgba(255,120,0,0)"),t.fillStyle=e,t.beginPath();for(let r=0;r<10;r++){let o=r/10*Math.PI*2,a=r%2?12:32;t.lineTo(32+Math.cos(o)*a,32+Math.sin(o)*a)}t.fill();let n=new Jn(s),i=new xt(new $e(.22,.22),new ue({map:n,transparent:!0,blending:$n,depthWrite:!1}));return i.visible=!1,i}function nu(s,t){let e=pe[s];tc||(tc=jh());let n=t?new Fs({map:tc,emissive:3803744,emissiveIntensity:.6,roughness:.3,metalness:.6}):Le(e.color),i=Le(e.accent,{metalness:.7}),r=Le(1381653,{metalness:.6}),o=new ee,a=e.len,l=e.cls;Kt(o,.06,.085,a*.55,n,0,0,-a*.28);let c=a*.5;Un(o,l==="shotgun"?.018:.012,c,r,0,.02,-a*.55-c/2+.05);let h=Kt(o,.045,.11,.05,i,0,-.08,-.02);if(h.rotation.x=-.25,l==="lmg")Kt(o,.1,.09,.1,i,.04,-.07,-a*.3);else if(l!=="shotgun"){let f=Kt(o,.035,l==="pistol"?0:.13,.05,i,0,-.1,-a*.3);f.rotation.x=l==="smg"||l==="rifle"?.2:0,l==="pistol"&&(f.visible=!1)}if(l!=="pistol"&&Kt(o,.045,.07,.22,n,0,-.02,.12),l==="shotgun"&&(o.userData.pump=Kt(o,.05,.05,.16,i,0,-.02,-a*.6)),e.scope?(Un(o,.026,.26,r,0,.085,-a*.3),Un(o,.032,.03,r,0,.085,-a*.3-.14),Un(o,.03,.03,r,0,.085,-a*.3+.14),Kt(o,.02,.04,.02,r,0,.055,-a*.3)):(Kt(o,.01,.025,.01,r,0,.055,-a*.52),Kt(o,.03,.02,.012,r,0,.052,-.04)),l==="sniper"&&(Un(o,.02,.06,r,0,.02,-a*1.03),Kt(o,.012,.012,.05,i,.04,.02,-.06)),(l==="lmg"||l==="rifle")&&Kt(o,.065,.02,a*.3,r,0,.055,-a*.35),t){let f=new xt(new Ie(.062,.01,a*.5),new ue({color:16727536}));f.position.set(0,-.035,-a*.28),o.add(f)}let u=new ge;u.position.set(0,.02,-a*1.05),o.add(u);let d=nx();return d.position.copy(u.position),o.add(d),o.userData.muzzle=u,o.userData.flash=d,o.userData.sightY=e.scope?.085:.06,iu(o,l==="pistol"?"pistol":"rifle",a),o}function iu(s,t,e=.5){let n=Le(3095082,{metalness:.05,roughness:.9}),i=Le(14200874,{metalness:.05,roughness:.85}),r=new ee;r.position.set(.01,-.1,.02),Kt(r,.06,.07,.09,n,0,0,0);let o=Kt(r,.075,.075,.4,i,.02,-.03,.22);if(o.rotation.x=.25,s.add(r),t==="rifle"){let a=new ee;a.position.set(-.01,-.05,-e*.62),Kt(a,.06,.05,.1,n,0,0,0);let l=Kt(a,.075,.075,.45,i,-.12,-.06,.18);l.rotation.y=-.55,l.rotation.x=.2,s.add(a)}else if(t==="pistol"){let a=new ee;a.position.set(-.03,-.1,0),Kt(a,.05,.07,.08,n,0,0,0);let l=Kt(a,.075,.075,.4,i,-.06,-.04,.2);l.rotation.y=-.3,l.rotation.x=.25,s.add(a)}}function Bs(s,t,e=.006){let n=new Qr(s,{depth:e,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:1});return n.translate(0,0,-e/2),new xt(n,t)}function ec(s){let t=Je[s],e=Le(t.color,{metalness:.9,roughness:.25}),n=Le(t.handle,{metalness:.3,roughness:.6}),i=new ee,r=new ee,o=new Is;if(t.kind==="karambit"){o.moveTo(0,0),o.quadraticCurveTo(.09,0,.15,-.07),o.quadraticCurveTo(.12,-.02,.02,.03),o.lineTo(0,.025),r.add(Bs(o,e));let d=new xt(new Ns(.022,.006,6,16),n);d.position.set(-.13,0,0),r.add(d),Kt(r,.11,.028,.018,n,-.06,.012,0)}else if(t.kind==="butterfly"){o.moveTo(0,0),o.lineTo(.13,.004),o.lineTo(.16,.02),o.lineTo(.12,.028),o.lineTo(0,.026),r.add(Bs(o,e));let d=new ee,f=new ee;Kt(d,.12,.012,.016,n,-.06,.006,0),Kt(f,.12,.012,.016,n,-.06,.006,0),d.position.set(0,.022,.01),f.position.set(0,.004,-.01),r.add(d),r.add(f),i.userData.h1=d,i.userData.h2=f}else if(t.kind==="bayonet")o.moveTo(0,0),o.lineTo(.2,.006),o.lineTo(.23,.02),o.lineTo(.19,.032),o.lineTo(0,.032),r.add(Bs(o,e,.007)),Kt(r,.012,.06,.03,n,-.005,.016,0),Kt(r,.12,.03,.024,n,-.07,.016,0);else if(t.kind==="huntsman"){o.moveTo(0,0),o.lineTo(.17,0),o.quadraticCurveTo(.21,.01,.22,.03),o.lineTo(.15,.036);for(let d=.15;d>.02;d-=.02)o.lineTo(d-.01,.046),o.lineTo(d-.02,.038);o.lineTo(0,.038),r.add(Bs(o,e,.008)),Kt(r,.015,.07,.03,Le(7829367,{metalness:.9}),-.005,.018,0),Kt(r,.12,.034,.026,n,-.07,.018,0)}else o.moveTo(0,0),o.lineTo(.15,.004),o.lineTo(.18,.02),o.lineTo(.14,.03),o.lineTo(0,.03),r.add(Bs(o,e)),Kt(r,.012,.05,.026,n,-.005,.015,0),Kt(r,.11,.028,.022,n,-.065,.015,0);r.rotation.y=Math.PI/2,r.rotation.z=0;let a=new ee;a.add(r),a.rotation.x=.5,i.add(a),i.userData.knife=r,i.userData.holder=a;let l=Le(3095082,{metalness:.05,roughness:.9}),c=Le(14200874,{metalness:.05,roughness:.85}),h=Kt(i,.06,.07,.09,l,0,-.01,.07),u=Kt(i,.075,.075,.4,c,.02,-.05,.28);return u.rotation.x=.25,i.userData.sightY=.05,i}function su(s){let t=new ee,e=Le(14725152,{metalness:.2}),n=Le(2237480,{metalness:.6}),i=Le(13421772,{metalness:.95,roughness:.2});if(s==="vacuum"){let r=new xt(new Me(.08,.08,.3,14),e);r.position.set(.05,-.08,.05),r.rotation.x=Math.PI/2,t.add(r);let o=new xt(new Ie(.02,.005,.26),new ue({color:7012186}));o.position.set(.05,-0,.05),t.add(o),t.userData.fill=o,Un(t,.025,.55,n,0,-.02,-.3);let a=new xt(new Me(.035,.07,.12,14,1,!0),i);a.rotation.x=Math.PI/2,a.position.set(0,-.02,-.62),t.add(a);let l=new xt(new Ns(.09,.015,6,12,Math.PI),n);l.position.set(.05,-.06,-.12),l.rotation.y=Math.PI/2,t.add(l);let c=new ge;c.position.set(0,-.02,-.7),t.add(c),t.userData.muzzle=c}else if(s==="washer"){let r=Le(2781119,{metalness:.3});Kt(t,.06,.1,.22,r,0,-.02,0),Un(t,.012,.7,i,0,.02,-.45),Un(t,.02,.06,n,0,.02,-.8);let o=Kt(t,.04,.11,.05,n,0,-.1,0);o.rotation.x=-.2,Kt(t,.04,.03,.18,n,0,-0,-.3);let a=new xt(new Me(.05,.05,.18,12),Le(8374527,{transparent:!0,opacity:.7}));a.position.set(-.07,0,0),a.rotation.x=Math.PI/2,t.add(a),t.userData.fill=a;let l=new ge;l.position.set(0,.02,-.84),t.add(l),t.userData.muzzle=l}else{let r=Le(11545114,{metalness:.3}),o=new xt(new Me(.065,.065,.28,12),r);o.position.set(0,-.1,-.05),o.rotation.x=Math.PI/2,t.add(o),t.userData.fill=o,Kt(t,.06,.07,.25,n,0,0,-.05),Un(t,.022,.4,i,0,.01,-.35);let a=new xt(new Me(.04,.03,.1,12,1,!0),n);a.rotation.x=Math.PI/2,a.position.set(0,.01,-.58),t.add(a);let l=new xt(new Qn(.012,8,8),new ue({color:5614335}));l.position.set(0,-.025,-.6),t.add(l),t.userData.pilot=l;let c=Kt(t,.04,.11,.05,n,0,-.08,.04);c.rotation.x=-.2;let h=new ge;h.position.set(0,.01,-.64),t.add(h),t.userData.muzzle=h}return iu(t,"rifle",.6),t.userData.sightY=.05,t}var yo=["gun0","gun1","knife","vacuum","washer","torch"],vo=class{constructor(t){this.game=t,this.guns=[{id:"sidearm",mag:pe.sidearm.mag,reserve:pe.sidearm.reserve,refined:!1},null],this.knife="combat",this.ownedKnives={combat:!0},this.tools={vacuum:!0,washer:!1,torch:!1},this.grenades=2,this.slot="gun0",this.lastSlot="vacuum",this.tank=0,this.water=100,this.fuel=100,this.cool=0,this.reloadT=0,this.reloading=!1,this.switchT=0,this.switching=!1,this.pendingSlot=null,this.adsT=0,this.ads=!1,this.adsZoomFactor=1,this.lastShot=-10,this.meleeT=0,this.meleeHeavy=!1,this.meleeHitDone=!0,this.quickMelee=!1,this.inspectT=0,this.kick=0,this.kickRot=0,this.sway=new at,this.toolActive=!1,this.grenadesLive=[],this.throwT=0,this.vmScene=new $i,this.vmCam=new Ee(62,1,.01,10),this.vmScene.add(new Ji(14674175,4208688,1.6));let e=new so(16777215,1.8);e.position.set(1,2,1),this.vmScene.add(e),this.vmRoot=new ee,this.vmScene.add(this.vmRoot),this.models={},this.knifeVM=null,this.rebuildModel(),this.grenadeGeo=new Me(.06,.06,.16,10),this.grenadeMat=new ae({color:4177919,emissive:667728})}get current(){let t=this.slot;if(t==="gun0"||t==="gun1"){let e=this.guns[t==="gun0"?0:1];return e?{type:"gun",st:e,def:this.gunStats(e)}:null}return t==="knife"?{type:"knife",def:Je[this.knife]}:{type:"tool",kind:t}}gunStats(t){let e=pe[t.id];return t.refined?{...e,id:t.id,name:ho[t.id],dmg:e.dmg*2.2,mag:Math.round(e.mag*1.5),reserve:Math.round(e.reserve*1.5),rate:e.rate*1.1,ammoCost:e.ammoCost*3,pierce:(e.pierce||0)+1}:{...e,id:t.id}}has(t){return t==="gun0"?!!this.guns[0]:t==="gun1"?!!this.guns[1]:t==="knife"?!0:!!this.tools[t]}tankCap(){return Qe.tank.values[this.game.upg.tank]}resCap(){return Qe.reservoir.values[this.game.upg.reservoir]}cleanMul(){return this.game.perks.janitor?1.4:1}isFiringBlocksSprint(){let t=this.current;if(!t)return!1;let e=this.game;return t.type==="gun"&&e.input.mouse[0]&&t.st.mag>0||t.type==="tool"&&e.input.mouse[0]?!0:e.time-this.lastShot<.2}adsMoveSpeed(){let t=this.current;return t&&t.type==="gun"&&t.def.scope?2.4:3.3}ownsGun(t){return this.guns.some(e=>e&&e.id===t)}giveGun(t){let e=pe[t],n={id:t,mag:e.mag,reserve:e.reserve,refined:!1};if(this.guns.findIndex(o=>o&&o.id===t)>=0)return!1;let r=this.guns[0]?this.guns[1]?this.slot==="gun1"?1:0:1:0;return this.guns[r]=n,this.models["gun"+r]=null,this.forceSwitch("gun"+r),!0}refillAmmo(t){let e=this.guns.find(i=>i&&i.id===t);if(!e)return!1;let n=this.gunStats(e);return e.mag=n.mag,e.reserve=n.reserve,!0}refillAllAmmo(){for(let t of this.guns)if(t){let e=this.gunStats(t);t.mag=e.mag,t.reserve=e.reserve}}refine(){let t=this.current;if(!t||t.type!=="gun"||t.st.refined)return!1;t.st.refined=!0;let e=this.gunStats(t.st);return t.st.mag=e.mag,t.st.reserve=e.reserve,this.models[this.slot]=null,this.forceSwitch(this.slot),!0}setKnife(t){this.knife=t,this.ownedKnives[t]=!0,this.models.knife=null,this.knifeVM=null,this.forceSwitch("knife")}modelFor(t){if(this.models[t])return this.models[t];let e;if(t==="gun0"||t==="gun1"){let i=this.guns[t==="gun0"?0:1];if(!i)return null;e=nu(i.id,i.refined)}else t==="knife"?e=ec(this.knife):e=su(t);let n=t==="knife"?.8:.62;return e.scale.setScalar(n),e.userData.sightY*=n,this.models[t]=e,e}rebuildModel(){this.vmRoot.clear();let t=this.modelFor(this.slot);t&&this.vmRoot.add(t),this.knifeVM||(this.knifeVM=ec(this.knife),this.knifeVM.scale.setScalar(.8))}forceSwitch(t){this.slot=t,this.switching=!0,this.switchT=0,this.pendingSlot=null,this.reloading=!1,this.inspectT=0,this.meleeT=0,this.rebuildModel()}switchTo(t){t===this.slot||!this.has(t)||this.meleeT>0||(this.lastSlot=this.slot,this.slot=t,this.switching=!0,this.switchT=0,this.reloading=!1,this.inspectT=0,this.adsT=0,this.rebuildModel(),this.game.audio.pickup())}onMantle(){this.inspectT=0}update(t,e,n){let i=this.game,r=i.player,o=i.perks.quickhands?.5:1;if(this.switching&&(this.switchT+=t/(.35*o),this.switchT>=1&&(this.switching=!1)),this.cool-=t,n&&(["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6"].forEach((d,f)=>{e.hit(d)&&this.switchTo(yo[f])}),e.hit("KeyQ")&&this.switchTo(this.has(this.lastSlot)?this.lastSlot:"knife"),e.wheel)){let d=yo.filter(g=>this.has(g)),f=d.indexOf(this.slot);f=(f+(e.wheel>0?1:-1)+d.length)%d.length,this.switchTo(d[f])}let a=this.current;if(!a){this.switchTo("knife");return}let l=n&&a.type==="gun"&&e.mouse[2]&&!this.reloading&&!r.sprinting&&!this.switching&&this.meleeT<=0;this.adsT=Dn(this.adsT+(l?t/.2:-t/.15),0,1),this.ads=this.adsT>.5;let c=a.type==="gun"?a.def.zoom:1;if(this.adsZoomFactor=1+(c-1)*this.adsT*this.adsT,this.reloading&&(this.reloadT+=t,this.reloadT>=a.def.reload*o)){let u=a.def.mag-a.st.mag,d=Math.min(u,a.st.reserve);a.st.mag+=d,a.st.reserve-=d,this.reloading=!1}if(this.meleeT>0){let u=this.meleeDur;this.meleeT-=t,!this.meleeHitDone&&this.meleeT<u*.55&&(this.meleeHitDone=!0,this.doMeleeHit()),this.meleeT<=0&&(this.meleeT=0,this.quickMelee=!1)}this.inspectT>0&&(this.inspectT-=t);let h=!1;n&&!this.switching&&(e.hit("KeyV")&&this.meleeT<=0&&this.startMelee(!1,a.type!=="knife"),e.hit("KeyF")&&this.meleeT<=0&&!this.reloading&&(this.inspectT=a.type==="knife"&&this.knife==="butterfly"?2.6:2),e.hit("KeyG")&&this.grenades>0&&this.throwT<=0&&this.throwGrenade(),a.type==="gun"&&this.meleeT<=0?(e.hit("KeyR")&&!this.reloading&&a.st.mag<a.def.mag&&a.st.reserve>0&&this.startReload(),(a.def.auto?e.mouse[0]:e.mousePressed[0])&&!this.reloading&&this.cool<=0&&!r.mantle&&(a.st.mag>0?this.fire(a):a.st.reserve>0?this.startReload():(i.audio.click(),this.cool=.25))):a.type==="knife"&&this.meleeT<=0?e.mouse[0]?this.startMelee(!1,!1):e.mouse[2]&&this.startMelee(!0,!1):a.type==="tool"&&this.meleeT<=0&&!r.mantle&&e.mouse[0]&&(h=this.useTool(a.kind,t))),h!==this.toolActive&&(this.toolActive=h),i.audio.loop("vacuum",h&&a.kind==="vacuum"),i.audio.loop("washer",h&&a.kind==="washer"),i.audio.loop("torch",h&&a.kind==="torch"),h&&(this.inspectT=0),this.throwT-=t,this.updateGrenades(t),this.animate(t,e,a)}startReload(){let t=this.current;this.reloading=!0,this.reloadT=0,this.inspectT=0,this.game.audio.reload()}fire(t){let e=this.game,n=e.player,i=t.def,r=e.perks.doubletap?1.3:1;this.cool=1/(i.rate*r),t.st.mag--,this.lastShot=e.time,this.inspectT=0,e.audio.shot(i.sound);let o=n.eyePos(),a=n.speedH(),l=this.ads?i.ads:i.spread;(!this.ads||!i.scope)&&(l*=1+Math.min(1,a/7)*.8),n.onGround||(l*=1.8),(n.crouching||n.sliding)&&(l*=.8),i.scope&&!this.ads&&(l=Math.max(l,i.spread));let c=n.forward(),h=new P(Math.cos(n.yaw),0,-Math.sin(n.yaw)),u=new P().crossVectors(h,c).normalize(),d=o.clone().addScaledVector(c,.6).addScaledVector(h,this.ads?0:.14).addScaledVector(u,this.ads?-.06:-.12);for(let x=0;x<i.pellets;x++){let m=Math.random()*Math.PI*2,p=Math.sqrt(Math.random())*l,M=c.clone().addScaledVector(h,Math.cos(m)*p).addScaledVector(u,Math.sin(m)*p).normalize();this.hitscan(o,M,i,d)}let f=i.recoil*(this.ads?.6:1)*(n.crouching?.8:1);n.pitch+=f,n.recoilPitch+=f,n.yaw+=(Math.random()-.5)*f*.6,this.kick=Math.min(.12,this.kick+.03+i.recoil*.6),this.kickRot=Math.min(.3,this.kickRot+.05+i.recoil*1.5);let g=this.models[this.slot];g&&g.userData.flash&&(g.userData.flash.visible=!0,g.userData.flash.rotation.z=Math.random()*6,this.flashT=.05),e.ui.crosshairKick()}hitscan(t,e,n,i){let r=this.game,o=r.level.raycast(t.x,t.y,t.z,e.x,e.y,e.z,150),a=r.enemies.raycast(t,e,o.dist),l=(n.pierce||0)+1,c=1,h=o.dist;for(let d of a){if(l<=0)break;let f=n.dmg*c*(d.head?n.head:1);r.enemies.damage(d.enemy,f,{head:d.head,kind:"bullet",point:d.point,dir:e}),l--,c*=.75,l<=0&&(h=d.dist)}if(l>0){let d=r.enemies.bossRaycast(t,e,h);d?(h=d.dist,r.enemies.damageBoss(n.dmg*c,d.point,"bullet")):h===o.dist&&o.dist<150&&(r.particles.sparks(o.x,o.y,o.z,o.nx,o.ny,o.nz,5),r.effects.bulletHole(o))}let u=t.clone().addScaledVector(e,Math.min(h,150));r.effects.tracer(i,u,n.cls==="sniper"?12577023:16769696)}startMelee(t,e){let n=Je[this.knife],i=this.game.perks.quickhands?.85:1;this.meleeHeavy=t,this.quickMelee=e,this.meleeDur=(t?1.6:1)/n.speed*i,this.meleeT=this.meleeDur,this.meleeHitDone=!1,this.inspectT=0,this.reloading=this.reloading&&!e?!1:this.reloading,e&&(this.reloading=!1),this.game.audio.swing()}doMeleeHit(){let t=this.game,e=t.player,n=Je[this.knife],i=e.eyePos(),r=e.forward(),o=n.range*(this.meleeHeavy?1.1:1),a=t.enemies.meleeTarget(i,r,o+1.2,.6);if(a){let l=Math.hypot(a.pos.x-e.pos.x,a.pos.z-e.pos.z);if(l>o*.7){let h=(a.pos.x-e.pos.x)/l,u=(a.pos.z-e.pos.z)/l;e.vel.x=h*9,e.vel.z=u*9}let c=n.dmg*(this.meleeHeavy?1.85:1);t.enemies.damage(a,c,{kind:"melee",point:a.pos.clone().setY(a.pos.y+1.1),dir:r}),t.audio.slash()}else{let l=t.enemies.bossRaycast(i,r,o+.8);if(l)t.enemies.damageBoss(n.dmg*(this.meleeHeavy?1.85:1),l.point,"melee"),t.audio.slash();else{let c=t.level.raycast(i.x,i.y,i.z,r.x,r.y,r.z,o);c.dist<o&&(t.particles.sparks(c.x,c.y,c.z,c.nx,c.ny,c.nz,4),t.audio.hit())}}}useTool(t,e){let n=this.game,i=n.player,r=i.eyePos(),o=i.forward(),a=new P(Math.cos(i.yaw),0,-Math.sin(i.yaw)),l=r.clone().addScaledVector(o,.75).addScaledVector(a,.12).add(new P(0,-.15,0)),c=n.activeGrimeZones();if(t==="vacuum"){let h=this.tankCap();if(this.tank>=h-.01)return n.ui.flash("TANK FULL \u2014 empty it at a Disposal Chute","#ffcf3a"),n.audio.deny(),!1;let u=Qe.suction.values[n.upg.suction],d=4.5+u*1.3,f=16*u*this.cleanMul(),g=n.grime.vacuum(c,r.x,r.y,r.z,o.x,o.y,o.z,d,Math.cos(.42),f*e,h-this.tank,n.level,x=>{n.audio.pickup(),n.stats.piles++});this.tank+=g.collected;for(let[,x]of g.hits.slice(0,6))Math.random()<.7&&n.particles.suck(x.x+(Math.random()-.5)*.5,.15,x.z+(Math.random()-.5)*.5,l.x,l.y,l.z);if(Math.random()<.5){let x=1+Math.random()*2.5,m=l.x+o.x*x+(Math.random()-.5)*x*.6,p=l.y+o.y*x+(Math.random()-.5)*x*.6,M=l.z+o.z*x+(Math.random()-.5)*x*.6;n.particles.norm.spawn(m,p,M,(l.x-m)*4,(l.y-p)*4,(l.z-M)*4,.25,.03,.8,.8,.75,.4,0,0,0)}return!0}if(t==="washer"){if(this.water<=0)return n.ui.flash("OUT OF WATER \u2014 refill at a Service Station","#7fc8ff"),n.audio.deny(),!1;this.water=Math.max(0,this.water-9*e);let h=Qe.pressure.values[n.upg.pressure],u=n.level.raycast(r.x,r.y,r.z,o.x,o.y,o.z,10);for(let g=0;g<4;g++)n.particles.water(l.x,l.y,l.z,o.x,o.y,o.z,.08+h*.02);if(u.dist<10){Math.random()<.6&&n.particles.mist(u.x+u.nx*.1,u.y+u.ny*.1,u.z+u.nz*.1);let g=.55+Math.sqrt(h)*.35;n.grime.wash(c,u.x,u.y,u.z,g,85*h*this.cleanMul()*e,x=>{n.addCredits(xe.stain,null,!0),n.stats.stains++,n.audio.pickup()})}let d=n.enemies.raycast(r,o,Math.min(u.dist,10));if(d.length){let g=d[0].enemy;n.enemies.damage(g,18*h*e,{kind:"water",silent:!0}),g.knock.x+=o.x*14*e,g.knock.z+=o.z*14*e}let f=n.enemies.bossRaycast(r,o,Math.min(u.dist,10));return f&&n.enemies.washBoss(55*h*this.cleanMul()*e,f.point),!0}if(t==="torch"){if(this.fuel<=0)return n.ui.flash("OUT OF FUEL \u2014 refill at a Service Station","#ff8a3a"),n.audio.deny(),!1;this.fuel=Math.max(0,this.fuel-10*e);for(let u=0;u<5;u++)n.particles.flame(l.x,l.y,l.z,o.x,o.y,o.z);let h=6.5;return n.grime.burn(c,r.x,r.y-.2,r.z,o.x,o.y,o.z,h,Math.cos(.35),50*this.cleanMul()*e,n.level,u=>{n.addCredits(xe.spore,null,!0),n.stats.spores++,n.audio.pop(),n.particles.burst(u.x,u.y+.2,u.z,13656319,25,4,.1)}),n.enemies.coneDamage(r,o,h,Math.cos(.35),95*e,"fire"),!0}return!1}throwGrenade(){let t=this.game,e=t.player;this.grenades--,this.throwT=.6;let n=e.forward(),i=e.eyePos(),r=new xt(this.grenadeGeo,this.grenadeMat);r.position.copy(i).addScaledVector(n,.5),t.scene.add(r),this.grenadesLive.push({mesh:r,vel:n.clone().multiplyScalar(14).add(new P(0,3,0)).add(e.vel.clone().multiplyScalar(.5)),t:1.6}),t.audio.swing()}updateGrenades(t){let e=this.game,n=e.level;for(let i=this.grenadesLive.length-1;i>=0;i--){let r=this.grenadesLive[i];r.t-=t,r.vel.y-=18*t;let o=r.mesh.position,a=o.x+r.vel.x*t,l=o.y+r.vel.y*t,c=o.z+r.vel.z*t,[h,u]=n.cellOf(a,c),d=n.hAt(h,u);if(l<d)if(o.y>=d)o.y=d,r.vel.y*=-.35,r.vel.x*=.6,r.vel.z*=.6;else{let[f]=n.cellOf(o.x,o.z);f!==h?r.vel.x*=-.4:r.vel.z*=-.4}else l>4.3?r.vel.y*=-.3:o.set(a,l,c);o.y<.08&&(o.y=.08,r.vel.y*=-.35,r.vel.x*=.7,r.vel.z*=.7),r.mesh.rotation.x+=t*8,r.mesh.rotation.z+=t*5,r.t<=0&&(e.scene.remove(r.mesh),this.grenadesLive.splice(i,1),this.explodeFoam(o.x,Math.max(.3,o.y),o.z))}}explodeFoam(t,e,n){let i=this.game;i.audio.boom(),i.particles.burst(t,e,n,12578815,80,9,.22);for(let o=0;o<40;o++)i.particles.norm.spawn(t+(Math.random()-.5)*3,e,n+(Math.random()-.5)*3,(Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3,1.5,.5,.95,.98,1,.6,.5,1.5,2);i.grime.foam(i.activeGrimeZones(),t,n,4.2,()=>{i.addCredits(xe.stain,null,!0),i.stats.stains++},o=>{i.addCredits(xe.spore,null,!0),i.stats.spores++}),i.enemies.radiusDamage(t,e,n,5,320*(1+.5*(i.phase-1))),i.enemies.washBoss(0,null,t,n,6,40),i.player.pos.distanceTo(new P(t,e,n))<6&&(i.shake=Math.max(i.shake,.3))}animate(t,e,n){let i=this.game,r=i.player,o=this.models[this.slot];this.sway.x=Ke(this.sway.x,Dn(-e.dx*6e-4,-.05,.05),10,t),this.sway.y=Ke(this.sway.y,Dn(e.dy*6e-4,-.05,.05),10,t),this.kick=Ke(this.kick,0,14,t),this.kickRot=Ke(this.kickRot,0,12,t),this.flashT>0&&(this.flashT-=t,this.flashT<=0&&o&&o.userData.flash&&(o.userData.flash.visible=!1));let a=this.adsT,l=o?o.userData.sightY:.05,c=n.type==="knife"?new P(.17,-.17,-.34):n.type==="tool"?new P(.15,-.15,-.3):new P(.13,-.125,-.3),h=new P(0,-l,-.2),u=c.clone().lerp(h,a),d=new Ne(0,0,0),f=r.bobAmt*(1-a*.85);u.x+=Math.cos(r.bob)*.012*f,u.y+=Math.abs(Math.sin(r.bob))*.014*f,u.x+=this.sway.x*(1-a*.7),u.y+=this.sway.y*(1-a*.7),d.y+=this.sway.x*1.5,this.sprintT=Ke(this.sprintT||0,r.sprinting&&this.meleeT<=0&&!this.reloading?1:0,10,t);let g=this.sprintT;if(n.type==="gun"?(u.x+=.04*g,u.y-=.05*g,d.y+=.6*g,d.x-=.2*g,d.z+=.25*g):(u.y-=.04*g,d.x-=.35*g),u.y+=Math.sin(r.bob*2)*.02*g,r.sliding&&(d.z+=.2,u.x-=.03),r.mantle&&(u.y-=.12,d.x-=.4),u.z+=this.kick*(1-a*.5),d.x+=this.kickRot*(1-a*.6),this.reloading){let m=this.reloadT/(n.def.reload*(i.perks.quickhands?.5:1)),p=Math.sin(Math.min(1,m)*Math.PI);u.y-=.08*p,d.x-=.5*p,d.z+=.6*p,o&&o.userData.pump&&(o.userData.pump.position.z=-pe[n.st.id].len*.6+Math.sin(m*Math.PI*6)*.03)}if(o&&o.userData.pump&&!this.reloading){let m=i.time-this.lastShot;o.userData.pump.position.z=-pe[n.st.id].len*.6+(m>.12&&m<.45?Math.sin((m-.12)/.33*Math.PI)*.07:0)}if(this.switching){let m=1-this.switchT;u.y-=m*m*.35,d.x-=m*.6}if(n.type==="tool"&&o){if(this.toolActive&&(u.x+=(Math.random()-.5)*.004,u.y+=(Math.random()-.5)*.004),o.userData.fill)if(n.kind==="vacuum"){let m=this.tank/this.tankCap();o.userData.fill.scale.z=Math.max(.02,m),o.userData.fill.material.color.setHex(m>.95?16730682:7012186)}else n.kind==="washer"&&(o.userData.fill.material.opacity=.25+.6*(this.water/this.resCap()));o.userData.pilot&&o.userData.pilot.scale.setScalar(this.toolActive?2.5:1+Math.sin(i.time*30)*.2)}if(this.inspectT>0){let m=n.type==="knife"&&this.knife==="butterfly"?2.6:2,p=1-this.inspectT/m,M=Math.sin(p*Math.PI);if(n.type==="knife"){let S=Je[this.knife].kind;if(S==="butterfly"){d.z+=M*.8,u.x-=M*.1;let _=p*Math.PI*8;o&&o.userData.h1&&(o.userData.h1.rotation.x=Math.sin(_)*Math.PI,o.userData.h2.rotation.x=-Math.sin(_)*Math.PI),o&&(o.userData.holder.rotation.z=Math.sin(_*.5)*.5)}else S==="karambit"?(o&&(o.userData.holder.rotation.z=p<.7?p/.7*Math.PI*4:0),d.y-=M*.6,u.x-=M*.08):(d.y-=M*1.2,d.z+=M*.9,u.x-=M*.12,u.y+=M*.04,o&&(o.userData.holder.rotation.z=Math.sin(p*Math.PI*2)*.3))}else d.y-=M*.9,d.z+=M*.6,u.x-=M*.1,u.y+=M*.03}else o&&o.userData.holder&&(o.userData.holder.rotation.z=0,o.userData.h1&&(o.userData.h1.rotation.x=0,o.userData.h2.rotation.x=0));let x=!1;if(this.meleeT>0){let m=1-this.meleeT/this.meleeDur;if(this.quickMelee)x=!0;else if(this.meleeHeavy){let p=m<.4?m/.4:1,M=m<.4?0:m<.6?(m-.4)/.2:1-(m-.6)/.4;u.z+=p*.08-M*.25,u.x-=M*.12,d.x+=M*.2-p*.2}else{let p=Math.sin(m*Math.PI),M=this.swingAlt?-1:1;d.z+=M*(m-.5)*2.2,d.y+=p*.9*M,u.x-=p*.18,u.y+=p*.05,u.z-=p*.08}m>.98&&(this.swingAlt=!this.swingAlt)}if(o&&(o.position.copy(u),o.rotation.copy(d),o.visible=!(n.type==="gun"&&n.def.scope&&a>.9)&&!x),this.knifeVM)if(x){this.knifeVM.parent!==this.vmRoot&&this.vmRoot.add(this.knifeVM);let m=1-this.meleeT/this.meleeDur,p=Math.sin(m*Math.PI);this.knifeVM.position.set(.15-p*.2,-.2+p*.06,-.38-p*.1),this.knifeVM.rotation.set(0,p*.9,(m-.5)*2.2),this.knifeVM.visible=!0}else this.knifeVM.parent===this.vmRoot&&this.slot!=="knife"&&this.vmRoot.remove(this.knifeVM)}serialize(){return{guns:this.guns,knife:this.knife,ownedKnives:this.ownedKnives,tools:this.tools,grenades:this.grenades,tank:this.tank,water:this.water,fuel:this.fuel}}deserialize(t){t&&(Array.isArray(t.guns)&&(this.guns=[t.guns[0]&&pe[t.guns[0].id]?t.guns[0]:null,t.guns[1]&&pe[t.guns[1].id]?t.guns[1]:null]),!this.guns[0]&&!this.guns[1]&&(this.guns[0]={id:"sidearm",mag:12,reserve:84,refined:!1}),t.knife&&Je[t.knife]&&(this.knife=t.knife),t.ownedKnives&&(this.ownedKnives={combat:!0,...t.ownedKnives}),t.tools&&(this.tools={vacuum:!0,washer:!!t.tools.washer,torch:!!t.tools.torch}),this.grenades=t.grenades|0,this.tank=+t.tank||0,this.water=+t.water||0,this.fuel=+t.fuel||0,this.models={},this.knifeVM=null,this.slot=this.guns[0]?"gun0":"gun1",this.rebuildModel())}};var gn=.35,ix=19,sx=6.6,nc=1.62,rx=1.05,ox=.78,Mo=class{constructor(t){this.game=t,this.pos=new P,this.vel=new P,this.yaw=0,this.pitch=0,this.onGround=!0,this.crouching=!1,this.sprinting=!1,this.sliding=!1,this.slideT=0,this.slideDir=new at,this.mantle=null,this.eye=nc,this.bob=0,this.bobAmt=0,this.landDip=0,this.tilt=0,this.hp=100,this.maxHp=100,this.lastHurt=-10,this.recoilPitch=0,this.fallStartY=0,this.stepAcc=0,this.radius=gn}spawnAt(t,e,n=0){this.pos.set(t,0,e),this.vel.set(0,0,0),this.yaw=n,this.pitch=0,this.sliding=!1,this.mantle=null,this.crouching=!1,this.onGround=!0}forward(){return new P(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}eyePos(){return new P(this.pos.x,this.pos.y+this.eye,this.pos.z)}speedH(){return Math.hypot(this.vel.x,this.vel.z)}damage(t,e){let n=this.game;if(n.god)return;let i=n.stats.armor||0;this.hp-=t*(1-i),this.lastHurt=n.time,n.ui.hurt(e?Math.atan2(e.x-this.pos.x,e.z-this.pos.z)-Math.atan2(-Math.sin(this.yaw),-Math.cos(this.yaw)):null),n.audio.hurt(),this.hp<=0&&(this.hp=0,n.onPlayerDeath())}update(t,e,n){let i=this.game,r=i.level;if(n){let O=i.settings.sens*.0022*(i.weapons.adsZoomFactor?1/Math.pow(i.weapons.adsZoomFactor,.85):1);this.yaw-=e.dx*O,this.pitch-=e.dy*O*(i.settings.invert?-1:1)}let o=this.recoilPitch*Math.min(1,t*7);if(this.recoilPitch-=o,this.pitch-=o*.75,this.pitch=Dn(this.pitch,-1.5,1.5),this.mantle){let O=this.mantle;O.t+=t/O.dur;let tt=Math.min(1,O.t),st=Math.min(1,tt/.6),ft=Math.max(0,(tt-.35)/.65);this.pos.y=O.y0+(O.y1-O.y0)*(1-Math.pow(1-st,2)),this.pos.x=O.x0+(O.x1-O.x0)*ft,this.pos.z=O.z0+(O.z1-O.z0)*ft,this.eye=Ke(this.eye,nc,10,t),tt>=1&&(this.mantle=null,this.onGround=!0,this.vel.set(O.dx*3,0,O.dz*3));return}let a=e.key("KeyW")?1:0,l=e.key("KeyS")?1:0,c=e.key("KeyA")?1:0,h=e.key("KeyD")?1:0,u=a-l,d=h-c,f=Math.sin(this.yaw),g=Math.cos(this.yaw),x=-f*u+g*d,m=-g*u-f*d,p=Math.hypot(x,m);p>0&&(x/=p,m/=p);let M=e.key("KeyC")||e.key("KeyZ"),S=e.hit("KeyC")||e.hit("KeyZ"),_=i.weapons,L=i.perks.rush?1.15:1,E=e.key("ShiftLeft")||e.key("ShiftRight"),T=_.isFiringBlocksSprint();if(this.sprinting=E&&u>0&&!_.ads&&!T&&!this.crouching&&!this.sliding&&this.onGround,E&&u>0&&!this.onGround&&this.wasSprinting&&(this.sprinting=!0),S&&this.onGround&&!this.sliding&&(this.sprinting||this.speedH()>6.2)){this.sliding=!0,this.slideT=0;let O=Math.max(this.speedH(),7)+3.6*L,tt=p>0?x:-f,st=p>0?m:-g;this.slideDir.set(tt,st),this.vel.x=tt*O,this.vel.z=st*O,i.audio.slide(),this.sprinting=!1}else S&&this.onGround&&!this.sliding&&(this.crouching=!this.crouching);!M&&this.crouchHeldViaHold&&(this.crouching=!1);let R=.85*(i.perks.rush?1.3:1);if(this.sliding){this.slideT+=t;let O=this.speedH(),st=Math.max(0,O-7.5*t);if(O>.001&&(this.vel.x*=st/O,this.vel.z*=st/O),p>0){let ft=Math.atan2(this.vel.x,this.vel.z),kt=Math.atan2(x,m)-ft;for(;kt>Math.PI;)kt-=2*Math.PI;for(;kt<-Math.PI;)kt+=2*Math.PI;let X=ft+Dn(kt,-1.2*t,1.2*t);this.vel.x=Math.sin(X)*st,this.vel.z=Math.cos(X)*st}(this.slideT>R||st<3.2||!this.onGround)&&(this.sliding=!1,this.crouching=M)}let v=e.hit("Space");if((v||e.key("Space")&&!this.onGround||!this.onGround&&u>0)&&this.tryMantle(v))return;v&&this.onGround&&(this.crouching&&!this.sliding?this.crouching=!1:(this.vel.y=sx,this.onGround=!1,this.sliding&&(this.sliding=!1,this.vel.x*=1.06,this.vel.z*=1.06),this.fallStartY=this.pos.y));let y=5;if(this.sprinting&&(y=7.6*L),this.crouching&&(y=2.7),_.ads&&(y=Math.min(y,_.adsMoveSpeed())),_.current&&_.current.type==="knife"&&(y*=1.08),this.onGround&&!this.sliding){let O=p>0?55:40,tt=x*y,st=m*y,ft=tt-this.vel.x,Ut=st-this.vel.z,kt=Math.hypot(ft,Ut),X=Math.min(kt,O*t);kt>0&&(this.vel.x+=ft/kt*X,this.vel.z+=Ut/kt*X)}else if(!this.onGround){let O=this.speedH(),tt=Math.max(O,y);this.vel.x+=x*14*t,this.vel.z+=m*14*t;let st=this.speedH();st>tt&&(this.vel.x*=tt/st,this.vel.z*=tt/st)}let C=this.pos.y,[z,F]=r.moveCircle(this.pos.x,this.pos.z,this.vel.x*t,this.vel.z*t,gn,C,.45);z===this.pos.x&&Math.abs(this.vel.x)>0&&(this.vel.x=0),F===this.pos.z&&Math.abs(this.vel.z)>0&&(this.vel.z=0),this.pos.x=z,this.pos.z=F,i.enemies.pushPlayer(this),this.vel.y-=ix*t,this.pos.y+=this.vel.y*t;let k=r.groundAt(this.pos.x,this.pos.z,gn,C),q=this.onGround;this.pos.y<=k?(!q&&this.vel.y<-4&&(this.landDip=Math.min(.25,-this.vel.y*.025),i.audio.land()),this.pos.y=k,this.vel.y=0,this.onGround=!0):this.pos.y>k+.05&&(q&&this.vel.y<=0&&this.pos.y-k<.5?(this.pos.y=k,this.vel.y=0):this.onGround=!1),this.pos.y<k&&(this.pos.y=k),this.wasSprinting=this.sprinting||this.wasSprinting&&!this.onGround;let G=this.sliding?ox:this.crouching?rx:nc;this.eye=Ke(this.eye,G,12,t);let Q=this.speedH();this.onGround&&!this.sliding&&Q>.5&&(this.bob+=t*Q*(this.sprinting?1.45:1.75),this.stepAcc+=Q*t,this.stepAcc>(this.sprinting?2.3:1.8)&&(this.stepAcc=0,i.audio.step())),this.bobAmt=Ke(this.bobAmt,this.onGround&&!this.sliding?Math.min(1,Q/7):0,8,t),this.landDip=Ke(this.landDip,0,8,t),this.tilt=Ke(this.tilt,this.sliding?.07:-d*.012,8,t),this.maxHp=i.perks.ironhide?200:100,i.time-this.lastHurt>4&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+40*t))}tryMantle(t){let e=this.game.level,n=Math.sin(this.yaw),i=Math.cos(this.yaw),r=-n,o=-i;for(let a of[gn+.25,gn+.6]){let l=this.pos.x+r*a,c=this.pos.z+o*a,[h,u]=e.cellOf(l,c),d=e.hAt(h,u);if(d>50||d<=this.pos.y+.45||d-this.pos.y>1.75||!t&&this.onGround)continue;let g=l+r*(gn+.15),x=c+o*(gn+.15);if(e.blockedCircle(g,x,gn,d,.05))continue;if(e.groundAt(g,x,gn,d)<d-.01){let p=h*j+j/2,M=u*j+j/2;if(e.blockedCircle(p,M,gn,d,.05))continue;return this.startMantle(p,d,M,r,o),!0}return this.startMantle(g,d,x,r,o),!0}return!1}startMantle(t,e,n,i,r){this.mantle={t:0,dur:.38,x0:this.pos.x,y0:this.pos.y,z0:this.pos.z,x1:t,y1:e,z1:n,dx:i,dz:r},this.sliding=!1,this.crouching=!1,this.vel.set(0,0,0),this.game.weapons.onMantle()}applyCamera(t){let e=Math.sin(this.bob*2)*.035*this.bobAmt,n=Math.cos(this.bob)*.025*this.bobAmt;t.position.set(this.pos.x+Math.cos(this.yaw)*n,this.pos.y+this.eye+e-this.landDip,this.pos.z-Math.sin(this.yaw)*n),t.rotation.order="YXZ",t.rotation.set(this.pitch,this.yaw,this.tilt)}};var ru=s=>document.getElementById(s),ss=s=>Math.floor(s).toLocaleString("en-US"),bo=class{constructor(t){this.game=t,this.el={};for(let e of["hud","crosshair","hitmarker","scope","vignette","hurtDir","objTitle","objBrief","cleanFill","cleanText","objCounts","zoneName","minimap","banner","bannerTitle","bannerSub","prompt","flash","powerups","perks","credits","popups","hpFill","hpText","tankFill","tankText","waterFill","waterText","fuelFill","fuelText","waterM","fuelM","slots","weaponName","mag","reserve","grenades","fps","shopBody","shopTabs","shopCredits","statsBody"])this.el[e]=ru(e);this.mm=this.el.minimap.getContext("2d"),this.hitT=0,this.hurtT=0,this.flashT=0,this.bannerT=0,this.spread=0,this.shopTab="weapons",this.lastHud=0,this.mmBase=null,this.mmZoom=4.2}show(t,e=!0){ru(t).classList.toggle("hidden",!e)}hurt(t){this.hurtT=.5,t!=null&&(this.el.hurtDir.style.transform=`rotate(${-t}rad)`,this.el.hurtDir.style.opacity=1,clearTimeout(this._hd),this._hd=setTimeout(()=>{this.el.hurtDir.style.opacity=0},450))}hitmarker(t,e){this.hitT=e?.3:.15,this.el.hitmarker.className=e?"kill":t?"head":""}crosshairKick(){this.spread=Math.min(30,this.spread+6)}flash(t,e="#fff"){(this.el.flash.textContent!==t||this.flashT<.5)&&(this.el.flash.textContent=t,this.el.flash.style.color=e),this.flashT=1.6}banner(t,e="",n=3,i="#fff"){this.el.bannerTitle.textContent=t,this.el.bannerTitle.style.color=i,this.el.bannerSub.textContent=e,this.bannerT=n}popup(t,e=!1){let n=document.createElement("div");for(n.className="popup"+(e?" big":""),n.textContent=t,n.style.left=Math.random()*30+"px",this.popN=((this.popN||0)+1)%5,n.style.bottom=this.popN*20+"px",this.el.popups.appendChild(n),setTimeout(()=>n.remove(),1150);this.el.popups.children.length>8;)this.el.popups.firstChild.remove()}setPrompt(t){this._prompt!==t&&(this._prompt=t,this.el.prompt.innerHTML=t||"")}update(t){let e=this.game,n=e.player,i=e.weapons;this.hitT-=t,this.hurtT-=t,this.flashT-=t,this.bannerT-=t,this.el.hitmarker.style.opacity=this.hitT>0?1:0,this.el.flash.style.opacity=this.flashT>0?1:0,this.el.banner.style.opacity=this.bannerT>0?1:0;let r=1-n.hp/n.maxHp;this.el.vignette.style.opacity=Math.max(this.hurtT>0?.6:0,r>.5?(r-.5)*1.6:0);let o=i.current,a=8;o&&o.type==="gun"&&(a=4+o.def.spread*300*(1+Math.min(1,n.speedH()/7)*.8)*(n.onGround?1:1.8)),this.spread=Math.max(0,this.spread-t*60);let l=(a+this.spread)*(1-i.adsT),c=this.el.crosshair.children;c[0].style.top=-l-9+"px",c[1].style.top=l+"px",c[2].style.left=-l-9+"px",c[3].style.left=l+"px",this.el.crosshair.style.opacity=i.adsT>.6||n.sprinting?0:1;let h=o&&o.type==="gun"&&o.def.scope&&i.adsT>.9;if(this.el.scope.classList.toggle("hidden",!h),this.lastHud-=t,this.lastHud>0)return;this.lastHud=.05,this.el.credits.textContent="\xA2 "+ss(e.credits),this.el.hpFill.style.width=n.hp/n.maxHp*100+"%",this.el.hpText.textContent=Math.ceil(n.hp)+" / "+n.maxHp;let u=i.tankCap(),d=i.resCap();this.el.tankFill.style.width=i.tank/u*100+"%",this.el.tankFill.style.background=i.tank>=u-.01?"#ff4a3a":"",this.el.tankText.textContent=Math.floor(i.tank)+"/"+u,this.el.waterM.style.display=i.tools.washer?"":"none",this.el.fuelM.style.display=i.tools.torch?"":"none",this.el.waterFill.style.width=i.water/d*100+"%",this.el.waterText.textContent=Math.floor(i.water)+"L",this.el.fuelFill.style.width=i.fuel/d*100+"%",this.el.fuelText.textContent=Math.floor(i.fuel)+"L";let f={gun0:"1",gun1:"2",knife:"3 KNIFE",vacuum:"4 VAC",washer:"5 LANCE",torch:"6 TORCH"},g="";for(let _ of yo){if(!i.has(_))continue;let L=f[_];if(_==="gun0"||_==="gun1"){let E=i.guns[_==="gun0"?0:1];L+=" "+(E.refined?ho[E.id]:pe[E.id].name).split(" ")[0].toUpperCase()}g+=`<div class="${i.slot===_?"on":""}">${L}</div>`}this._slots!==g&&(this._slots=g,this.el.slots.innerHTML=g),o&&(o.type==="gun"?(this.el.weaponName.textContent=o.def.name+(i.reloading?"  \u2014 RELOADING":""),this.el.mag.textContent=o.st.mag,this.el.mag.style.color=o.st.mag===0?"#ff4a3a":o.st.mag<=o.def.mag*.25?"#ffb03a":"#fff",this.el.reserve.textContent="/ "+o.st.reserve):o.type==="knife"?(this.el.weaponName.textContent=o.def.name,this.el.mag.textContent="\u221E",this.el.mag.style.color="#fff",this.el.reserve.textContent=""):(this.el.weaponName.textContent=ks[o.kind].name,this.el.mag.style.color="#fff",o.kind==="vacuum"?(this.el.mag.textContent=Math.round(i.tank/u*100)+"%",this.el.reserve.textContent="TANK"):o.kind==="washer"?(this.el.mag.textContent=Math.floor(i.water),this.el.reserve.textContent="L WATER"):(this.el.mag.textContent=Math.floor(i.fuel),this.el.reserve.textContent="L FUEL"))),this.el.grenades.textContent=i.grenades>0?`FOAM GRENADES \xD7${i.grenades}  [G]`:"";let x="";for(let[_,L]of Object.entries(ti))e.perks[_]&&(x+=`<div class="perk" style="background:#${L.color.toString(16).padStart(6,"0")}">${L.name[0]}</div>`);this._perks!==x&&(this._perks=x,this.el.perks.innerHTML=x);let m="";e.powerups.double>0&&(m+=`<div style="color:#ffd23a">DOUBLE CREDITS ${Math.ceil(e.powerups.double)}</div>`),e.powerups.insta>0&&(m+=`<div style="color:#ff5a4a">INSTA-CLEAN ${Math.ceil(e.powerups.insta)}</div>`),this._pu!==m&&(this._pu=m,this.el.powerups.innerHTML=m);let p=e.phase;if(e.victory)this.el.objTitle.textContent="Contract complete",this.el.objBrief.textContent="Free roam \u2014 keep cleaning, keep fighting.";else if(e.bossActive()){let _=e.enemies.boss;this.el.objTitle.textContent="FINAL \u2014 The Bloom Mother",this.el.objBrief.textContent=_.shield>0?"Its slime shield deflects bullets \u2014 WASH it off with the Hydro Lance (or torch / foam), then shoot!":"Shield down! Unload on the core!"}else we[p]&&(this.el.objTitle.textContent=we[p].title,this.el.objBrief.textContent=we[p].brief);let M=e.bossActive()?null:e.currentZoneKey();if(e.bossActive()){let _=e.enemies.boss,L=_.hp/_.maxHp;this.el.cleanFill.style.width=L*100+"%",this.el.cleanFill.style.background="linear-gradient(90deg,#a02a7a,#ff4ad0)",this.el.cleanText.textContent=`BOSS ${Math.ceil(L*100)}%  \xB7  SHIELD ${Math.ceil(_.shield/_.maxShield*100)}%`,this.el.objCounts.textContent=""}else if(M){let _=e.grime.cleanliness(M),L=we[p]?we[p].threshold:1;this.el.cleanFill.style.width=Math.min(100,_*100)+"%",this.el.cleanFill.style.background="",this.el.cleanText.textContent=`${is[M].name}: ${Math.floor(_*100)}% clean  (goal ${Math.round(L*100)}%)`;let E=e.grime.remaining(M),T=[];E.piles&&T.push(`${E.piles} debris`),E.stains&&T.push(`${E.stains} stains`),E.spores&&T.push(`${E.spores} spore pods`),this.el.objCounts.textContent=T.length?"Remaining: "+T.join(" \xB7 "):"Zone spotless!"}let S=e.level.zoneAtWorld(n.pos.x,n.pos.z);this.el.zoneName.textContent=S?"\u{1F4CD} "+is[S].name:"",e.settings.showFps?this.el.fps.textContent=Math.round(e.fps)+" FPS":this.el.fps.textContent="",this.drawMinimap()}buildMinimapBase(){let t=this.game.level,e=6,n=document.createElement("canvas");n.width=t.W*e,n.height=t.H*e;let i=n.getContext("2d"),r={0:"#3a4a58",1:"#5a4f3a",2:"#34425a",3:"#34503c",4:"#4a3428"};for(let o=0;o<t.H;o++)for(let a=0;a<t.W;a++){let l=t.idx(a,o),c=t.type[l];c!==1&&(i.fillStyle=c===4?"#a03030":c===2||c===3?"#6a6a6a":c===5?"#2a9ad0":r[t.zone[l]]||"#333",i.fillRect(a*e,o*e,e,e))}for(let o of t.objects)i.fillStyle={S:"#1fd6ff",I:"#55ff33",W:"#2a8cf0",P:"#ff5aa0",R:"#c04dff",M:"#7fd8ff"}[o.kind]||"#fff",i.fillRect(o.x*e-1,o.y*e-1,e+2,e+2);this.mmBase=n,this.mmScale=e}invalidateMinimap(){this.mmBase=null}drawMinimap(){let t=this.game,e=t.level,n=t.player;this.mmBase||this.buildMinimapBase();let i=this.mm,r=220,o=220,a=this.mmScale/j,l=1.1;i.clearRect(0,0,r,o),i.save(),i.translate(r/2,o/2),i.rotate(n.yaw),i.scale(l*1,l*1),i.translate(-n.pos.x*a,-n.pos.z*a),i.globalAlpha=.9,i.drawImage(this.mmBase,0,0),i.globalAlpha=1;let c=t.currentZoneKey();if(c&&c!=="h"){let d=["#d6a85a","#8bff5a","#d060ff"];t.grime.forEachRemaining(c,(f,g,x)=>{i.fillStyle=d[x],i.fillRect(f*a-1,g*a-1,2.2,2.2)})}i.fillStyle="#ff3a3a";for(let d of t.enemies.list)d.dying<=0&&(i.beginPath(),i.arc(d.pos.x*a,d.pos.z*a,2.4,0,7),i.fill());for(let d of t.enemies.pickups)i.fillStyle="#fff",i.fillRect(d.mesh.position.x*a-2,d.mesh.position.z*a-2,4,4);t.enemies.boss&&t.enemies.boss.alive&&(i.fillStyle=t.enemies.boss.active?"#ff4ad0":"#7a3a6a",i.beginPath(),i.arc(t.enemies.boss.x*a,t.enemies.boss.z*a,7,0,7),i.fill()),i.restore(),i.fillStyle="#ffd25a",i.beginPath(),i.moveTo(r/2,o/2-7),i.lineTo(r/2-5,o/2+5),i.lineTo(r/2+5,o/2+5),i.fill(),i.fillStyle="rgba(255,255,255,0.8)",i.font="bold 11px sans-serif",i.textAlign="center";let h=r/2+Math.sin(n.yaw)*98,u=o/2-Math.cos(n.yaw)*98;i.fillText("N",h,u+4)}renderShop(){let t=this.game,e=t.weapons;this.el.shopCredits.textContent="\xA2 "+ss(t.credits);let n=[["weapons","Weapons"],["knives","Knives"],["tools","Tools"],["upgrades","Upgrades"],["supplies","Supplies"]];this.el.shopTabs.innerHTML=n.map(([o,a])=>`<button data-tab="${o}" class="${this.shopTab===o?"on":""}">${a}</button>`).join("");let i=[],r=(o,a,l,c=!1)=>`<button data-act="${o}" ${c||t.credits<l?"disabled":""}>${a}${l?" \u2014 "+ss(l)+" \xA2":""}</button>`;if(this.shopTab==="weapons"){for(let[o,a]of Object.entries(pe)){o==="sidearm"&&e.ownsGun("sidearm");let l=e.ownsGun(o),c=o==="sidearm"?300:Math.round(a.cost*1.15);i.push(`<div class="card"><h4>${a.name}</h4><p>${a.cls.toUpperCase()}${a.pierce?" \xB7 piercing":""}${a.scope?" \xB7 scoped":""}</p>
          <div class="stats">DMG ${a.dmg}${a.pellets>1?"\xD7"+a.pellets:""} \xB7 RPM ${Math.round(a.rate*60)} \xB7 MAG ${a.mag}</div>
          ${l?r("ammo:"+o,"Refill ammo",e.guns.find(h=>h&&h.id===o).refined?a.ammoCost*3:a.ammoCost):r("gun:"+o,"Buy",c)}</div>`)}i.push('<div class="card"><h4>Note</h4><p>You can carry two guns. Buying a third replaces the one in your hands. Wall-buys around the facility are cheaper (no terminal markup).</p></div>')}else if(this.shopTab==="knives")for(let[o,a]of Object.entries(Je)){let l=e.ownedKnives[o],c=e.knife===o;i.push(`<div class="card"><h4>${a.name}</h4><p>${a.desc}</p><div class="stats">DMG ${a.dmg} \xB7 SPEED ${a.speed}/s \xB7 REACH ${a.range}m</div>
          ${c?'<span class="owned">EQUIPPED</span>':l?r("knife:"+o,"Equip",0):r("knife:"+o,"Buy",a.cost)}</div>`)}else if(this.shopTab==="tools")for(let[o,a]of Object.entries(ks)){let l=e.tools[o],c=a.minPhase&&t.phase<a.minPhase;i.push(`<div class="card"><h4>${a.name}</h4><p>${a.desc}</p>
          ${l?'<span class="owned">OWNED</span>':c?`<span class="owned" style="color:#ff8a5a">Unlocks in Phase ${a.minPhase}</span>`:r("tool:"+o,"Buy",a.cost)}</div>`)}else if(this.shopTab==="upgrades")for(let[o,a]of Object.entries(Qe)){let l=t.upg[o],c=a.costs.length,h='<div class="pips">'+Array.from({length:c},(f,g)=>`<i class="${g<l?"on":""}"></i>`).join("")+"</div>",u=f=>a.unit==="%"?Math.round(f*100)+"%":a.unit==="x"?f+"x":f+" "+a.unit,d=a.needs&&!e.tools[a.needs];i.push(`<div class="card"><h4>${a.name}</h4><p>${a.desc}</p>${h}<div class="stats">${u(a.values[l])}${l<c?" \u2192 "+u(a.values[l+1]):" (MAX)"}</div>
          ${l>=c?'<span class="owned">MAXED</span>':d?'<span class="owned" style="color:#ff8a5a">Requires Hydro Lance</span>':r("upg:"+o,"Upgrade",a.costs[l])}</div>`)}else i.push(`<div class="card"><h4>Foam Grenades \xD72</h4><p>Throw with G. Explodes into cleaning foam: wipes stains & spores in a radius and blasts creatures. Max 6.</p>${r("grenade","Buy",xe.grenadeCost,e.grenades>=6)}</div>`),i.push(`<div class="card"><h4>Full Ammo Restock</h4><p>Refills every gun you're carrying.</p>${r("allammo","Buy",this.allAmmoCost())}</div>`),i.push(`<div class="card"><h4>Medkit</h4><p>Instantly restore full health.</p>${r("heal","Buy",250,t.player.hp>=t.player.maxHp)}</div>`),i.push(`<div class="card"><h4>Remote Tank Purge</h4><p>Empty your vacuum tank from here (pays 75% of chute value).</p>${r("remote","Use",0,e.tank<1)}</div>`);this.el.shopBody.innerHTML=i.join("")}allAmmoCost(){let t=this.game.weapons,e=0;for(let n of t.guns)if(n){let i=t.gunStats(n);e+=Math.round(i.ammoCost*.8)}return e}renderStats(t){let e=this.game,n=e.stats,i=Math.floor(n.time);t.innerHTML=`
      <div>Phase<b>${e.victory?"Complete":e.phase+" / 4"}</b></div>
      <div>Credits<b>\xA2 ${ss(e.credits)}</b></div>
      <div>Total earned<b>\xA2 ${ss(n.earned)}</b></div>
      <div>Creatures killed<b>${n.kills}</b></div>
      <div>Debris piles vacuumed<b>${n.piles}</b></div>
      <div>Stains washed<b>${n.stains}</b></div>
      <div>Spore pods burned<b>${n.spores}</b></div>
      <div>Debris sold<b>${ss(n.units)} units</b></div>
      <div>Deaths<b>${n.deaths}</b></div>
      <div>Time on contract<b>${Math.floor(i/60)}m ${i%60}s</b></div>`}};var So=class{constructor(){this.ctx=null,this.master=null,this.volume=.6,this.loops={},this.lastPlay={}}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*1.5;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1}catch{this.ctx=null}}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_noise(t,e,n,i,r,o=.002,a=0){let l=this.ctx,c=l.currentTime+a,h=l.createBufferSource();h.buffer=this.noise;let u=l.createBiquadFilter();u.type=e,u.frequency.value=n,u.Q.value=i;let d=l.createGain();return d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(r,c+o),d.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(u),u.connect(d),d.connect(this.master),h.start(c,Math.random()*.5),h.stop(c+t+.05),u}_tone(t,e,n,i,r,o=0){let a=this.ctx,l=a.currentTime+o,c=a.createOscillator();c.type=t,c.frequency.setValueAtTime(e,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,n),l+i);let h=a.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(r,l+.005),h.gain.exponentialRampToValueAtTime(1e-4,l+i),c.connect(h),h.connect(this.master),c.start(l),c.stop(l+i+.05)}_ok(t,e=.02){if(!this.ctx)return!1;let n=this.ctx.currentTime;return this.lastPlay[t]&&n-this.lastPlay[t]<e?!1:(this.lastPlay[t]=n,!0)}shot(t){if(!this._ok("shot_"+t,.03))return;let e={pistol:[.12,2400,.5,160,.14],cannon:[.3,1200,.9,90,.3],smg:[.08,3e3,.35,180,.12],shotgun:[.35,900,1,70,.35],rifle:[.14,2e3,.55,120,.16],lmg:[.15,1600,.6,100,.18],dmr:[.22,1500,.75,100,.22],sniper:[.55,800,1,60,.4]}[t]||[.12,2e3,.5,120,.15];this._noise(e[0],"lowpass",e[1],.7,e[2]),this._tone("triangle",e[3]*2,e[3]*.5,e[4],.5),t==="sniper"&&this._noise(.9,"lowpass",400,.5,.25,.01,.05)}click(){this._ok("click",.15)&&this._tone("square",1800,1200,.03,.08)}reload(){this._ok("reload",.2)&&(this._noise(.05,"bandpass",2500,4,.2),this._noise(.06,"bandpass",1800,4,.25,.002,.25))}swing(){this._ok("swing",.08)&&this._noise(.18,"bandpass",1200,1.5,.25,.04)}slash(){this._ok("slash",.05)&&(this._noise(.12,"highpass",3e3,1,.3),this._tone("sine",300,120,.12,.3))}hit(){this._ok("hit",.04)&&this._noise(.07,"bandpass",600,2,.35)}headshot(){this._ok("head",.05)&&this._tone("sine",1600,1500,.12,.2)}kill(){this._ok("kill",.05)&&(this._noise(.3,"lowpass",500,1,.45,.01),this._tone("sine",140,50,.3,.4))}hurt(){this._ok("hurt",.2)&&(this._tone("sawtooth",220,90,.25,.2),this._noise(.2,"lowpass",400,1,.3))}growl(){this._ok("growl",.6)&&(this._tone("sawtooth",90+Math.random()*40,50,.6,.08),this._noise(.5,"bandpass",300,3,.1,.1))}spit(){this._ok("spit",.1)&&this._noise(.2,"bandpass",900,3,.25,.02)}splat(){this._ok("splat",.05)&&this._noise(.15,"lowpass",700,1,.3)}step(){this._ok("step",.12)&&this._noise(.06,"lowpass",300+Math.random()*200,1,.12)}land(){this._ok("land",.15)&&this._noise(.12,"lowpass",220,1,.3)}slide(){this._ok("slide",.3)&&this._noise(.5,"bandpass",700,.8,.18,.03)}cash(){this._ok("cash",.08)&&(this._tone("square",1320,1320,.06,.06),this._tone("square",1760,1760,.12,.06,.07))}deny(){this._ok("deny",.2)&&(this._tone("square",200,160,.15,.1),this._tone("square",150,120,.2,.1,.15))}buy(){this._ok("buy",.1)&&[660,880,1320].forEach((t,e)=>this._tone("triangle",t,t,.12,.15,e*.07))}door(){this._ok("door",.5)&&(this._noise(1.6,"lowpass",300,1,.4,.2),this._tone("sawtooth",60,90,1.5,.12))}phase(){this._ok("phase",1)&&[523,659,784,1046].forEach((t,e)=>this._tone("triangle",t,t,.35,.18,e*.16))}surge(){this._ok("surge",2)&&(this._tone("sawtooth",80,40,2,.2),this._tone("sawtooth",83,41,2,.2))}boom(){this._ok("boom",.1)&&(this._noise(.9,"lowpass",500,.7,.6,.005),this._tone("sine",90,30,.8,.6))}pop(){this._ok("pop",.04)&&(this._tone("sine",500,1200,.08,.15),this._noise(.2,"highpass",2e3,1,.15))}pickup(){this._ok("pickup",.05)&&this._tone("sine",700,1100,.05,.05)}boss(){this._ok("boss",3)&&(this._tone("sawtooth",50,30,3,.3),this._noise(3,"lowpass",200,2,.4,.5))}loop(t,e){if(!this.ctx)return;let n=this.loops[t];if(e&&!n){let i=this.ctx,r=i.createBufferSource();r.buffer=this.noise,r.loop=!0;let o=i.createBiquadFilter(),a=i.createGain();a.gain.value=1e-4,t==="vacuum"?(o.type="bandpass",o.frequency.value=900,o.Q.value=.8):t==="washer"?(o.type="highpass",o.frequency.value=2500,o.Q.value=.5):(o.type="lowpass",o.frequency.value=600,o.Q.value=.7),r.connect(o),o.connect(a),a.connect(this.master),r.start();let l=null;if(t==="vacuum"){l=i.createOscillator(),l.type="sawtooth",l.frequency.value=110;let c=i.createGain();c.gain.value=.03,l.connect(c),c.connect(a),l.start()}n=this.loops[t]={src:r,g:a,osc:l},a.gain.setTargetAtTime(t==="washer"?.18:.3,i.currentTime,.05)}else if(!e&&n){let i=this.ctx;n.g.gain.setTargetAtTime(1e-4,i.currentTime,.05);let r=n.src,o=n.osc;setTimeout(()=>{try{r.stop(),o&&o.stop()}catch{}},300),delete this.loops[t]}}stopLoops(){for(let t of Object.keys(this.loops))this.loop(t,!1)}};var Eo=class{constructor(t){this.canvas=t,this.down=new Set,this.pressed=new Set,this.mouse=[!1,!1,!1],this.mousePressed=[!1,!1,!1],this.dx=0,this.dy=0,this.wheel=0,this.locked=!1,this.forceLocked=!1,this.enabled=!0,window.addEventListener("keydown",e=>{(e.code==="Tab"||e.code==="Space"||e.ctrlKey&&e.code!=="KeyR")&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.down.add(e.code)}),window.addEventListener("keyup",e=>{this.down.delete(e.code)}),window.addEventListener("blur",()=>{this.down.clear(),this.mouse=[!1,!1,!1]}),t.addEventListener("mousedown",e=>{this.mouse[e.button]=!0,this.mousePressed[e.button]=!0}),window.addEventListener("mouseup",e=>{this.mouse[e.button]=!1}),window.addEventListener("mousemove",e=>{this.isLocked()&&(this.dx+=e.movementX||0,this.dy+=e.movementY||0)}),window.addEventListener("wheel",e=>{this.isLocked()&&(this.wheel+=Math.sign(e.deltaY))},{passive:!0}),t.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||(this.mouse=[!1,!1,!1]),this.onLockChange&&this.onLockChange(this.locked)})}isLocked(){return this.locked||this.forceLocked}lock(){try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){document.pointerLockElement&&document.exitPointerLock()}key(t){return this.down.has(t)}hit(t){return this.pressed.has(t)}endFrame(){this.pressed.clear(),this.mousePressed=[!1,!1,!1],this.dx=0,this.dy=0,this.wheel=0}};var Hs="grimeProtocol.save.v1",ou="grimeProtocol.settings.v1",tn={get(s){try{return localStorage.getItem(s)}catch{return null}},set(s,t){try{return localStorage.setItem(s,t),!0}catch{return!1}},del(s){try{localStorage.removeItem(s)}catch{}},sget(s){try{return sessionStorage.getItem(s)}catch{return null}},sset(s,t){try{sessionStorage.setItem(s,t)}catch{}},sdel(s){try{sessionStorage.removeItem(s)}catch{}}},ic=class{constructor(){this.canvas=document.getElementById("game"),this.renderer=new zr({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!window.__TEST__}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.autoClear=!1,this.renderer.outputColorSpace=Se,this.scene=new $i,this.scene.background=new zt(921878),this.scene.fog=new kr(1316894,18,75),this.camera=new Ee(70,1,.05,220),this.settings={sens:1,fov:95,vol:.6,invert:!1,showFps:!1};try{Object.assign(this.settings,JSON.parse(tn.get(ou)||"{}"))}catch{}this.time=0,this.fps=60,this.shake=0,this.state="menu",this.phase=1,this.victory=!1,this.bossAwake=!1,this.credits=500,this.difficulty=1,this.upg={tank:0,suction:0,pressure:0,reservoir:0,armor:0},this.perks={},this.powerups={double:0,insta:0},this.stats={kills:0,piles:0,stains:0,spores:0,units:0,deaths:0,earned:0,time:0,armor:0},this.god=!1,this.audio=new So,this.audio.setVolume(this.settings.vol),this.input=new Eo(this.canvas),this.setupLights(),this.level=new uo(this.scene),this.grime=new fo(this.scene,this.level),this.particles=new mo(this.scene),this.effects=new go(this.scene),this.player=new Mo(this),this.weapons=new vo(this),this.enemies=new _o(this),this.ui=new bo(this),this.buildInteractables();let t=this.level.startCell,[e,n]=this.level.center(t.x,t.y);this.player.spawnAt(e,n,-Math.PI/2),this.level.openDoor(1,!0),window.addEventListener("resize",()=>this.resize()),this.resize(),this.input.onLockChange=i=>{!i&&this.state==="playing"&&!this.input.forceLocked&&this.pause()},this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.input.isLocked()&&this.input.lock()}),window.addEventListener("keydown",i=>this.onKey(i)),window.addEventListener("keyup",i=>{i.code==="Tab"&&this.ui.show("stats",!1)}),this.wireMenus(),this.last=performance.now(),this.autosaveT=30,this.checkT=0}setupLights(){this.scene.add(new Ji(13161702,3814444,1.15));let t=new ro(16777215,.35);this.scene.add(t);let e=[[20,66,16773853],[30,60,14543103],[56,56,16769712],[80,66,16769712],[70,52,16767136],[44,30,14740735],[70,36,14740735],[86,28,13689087],[12,34,13172688],[22,46,13172688],[48,12,16751194],[30,10,16742970],[66,14,16742970]];for(let[n,i,r]of e){let o=new io(r,26,30,1.25);o.position.set(n,3.9,i),this.scene.add(o)}}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.weapons.vmCam.aspect=t/e,this.weapons.vmCam.updateProjectionMatrix(),this.particles.setScale(e*this.renderer.getPixelRatio()),this.updateFov()}baseVFov(){let t=Vl.degToRad(this.settings.fov);return 2*Math.atan(Math.tan(t/2)/Math.max(1,this.camera.aspect*.75))*180/Math.PI}updateFov(){let t=Vl.degToRad(this.baseVFov()),e=this.weapons?this.weapons.adsZoomFactor:1,n=this.player&&this.player.sprinting?1.04:1;this.camera.fov=2*Math.atan(Math.tan(t/2)/e*n)*180/Math.PI,this.camera.updateProjectionMatrix()}currentZoneKey(){return this.phase<=4&&we[this.phase]?we[this.phase].zone:null}unlockedZones(){let t=[];for(let e=1;e<=Math.min(4,this.phase);e++)t.push(we[e].zone);return t}activeGrimeZones(){return this.unlockedZones()}spawnZones(){let t=this.unlockedZones(),e=this.currentZoneKey();return this.victory?t:e?[e,e,e,e,...t]:t}inHub(){return this.level.zoneAtWorld(this.player.pos.x,this.player.pos.z)==="h"}bossActive(){return!!(this.enemies.boss&&this.enemies.boss.alive&&this.enemies.boss.active)}checkProgress(){if(this.victory||this.phase>4)return;let t=we[this.phase];if(this.phase===4&&this.bossAwake)return;this.grime.cleanliness(t.zone)>=t.threshold&&this.completePhase()}completePhase(){let t=this.phase,e=we[t];if(this.addCredits(e.bonus,null,!1,`PHASE ${t} COMPLETE`),this.audio.phase(),t<4){this.phase=t+1,this.level.openDoor(this.phase),this.audio.door(),this.ui.invalidateMinimap();let n=we[this.phase];this.ui.banner(`PHASE ${t} COMPLETE`,`${is[n.zone].name} unlocked \u2014 +${e.bonus} \xA2`,4.5,"#8bff5a"),this.phase===2&&!this.weapons.tools.washer&&setTimeout(()=>this.ui.flash("Tip: buy the Hydro Lance at the Supply Terminal in HQ","#7fc8ff"),4800),this.phase===3&&!this.weapons.tools.torch&&setTimeout(()=>this.ui.flash("Tip: the Spore Torch is now for sale at the Supply Terminal","#ff9a3a"),4800),this.phase===3&&setTimeout(()=>this.ui.flash("The Refinery in HQ is now online \u2014 upgrade your gun!","#e09bff"),9e3),this.phase===4&&this.enemies.createBoss(),this.enemies.surgeTimer=Math.min(this.enemies.surgeTimer,45)}else this.bossAwake=!0,this.enemies.awakenBoss(),this.ui.banner("THE BLOOM MOTHER AWAKENS","Wash off its slime shield, then destroy the core!",5,"#ff4ad0");this.save()}onBossDefeated(){this.victory=!0,this.phase=5,this.save(),this.victoryT=3.5}showVictory(){this.state="victory",this.input.unlock(),this.audio.stopLoops(),this.ui.renderStats(document.getElementById("victoryStats")),this.ui.show("victory",!0)}addCredits(t,e,n=!1,i=null){let r=Math.round(t*(this.powerups.double>0?2:1));this.credits+=r,this.stats.earned+=r,this.ui.popup((i?i+"  ":"")+"+"+r,!n),n||this.audio.cash()}spend(t){return this.credits<t?(this.audio.deny(),this.ui.flash("Not enough credits","#ff5a4a"),!1):(this.credits-=t,this.audio.buy(),!0)}applyPowerup(t,e){this.ui.banner(e,"",2,"#fff"),this.audio.phase(),t==="ammo"?(this.weapons.refillAllAmmo(),this.weapons.grenades=Math.min(6,this.weapons.grenades+1)):t==="double"?this.powerups.double=30:t==="insta"?this.powerups.insta=30:t==="purge"&&(this.enemies.purgeAll(),this.addCredits(400,null,!1,"PURGE"))}buildInteractables(){let t=this.level;this.interactables=[];for(let e of t.objects){let n=e.cx+e.face[0]*j*.9,i=e.cz+e.face[1]*j*.9;this.interactables.push({kind:e.kind,x:n,z:i,ox:e.cx,oz:e.cz,obj:e})}for(let e of t.wallbuys)this.interactables.push({kind:"wallbuy",x:e.x,z:e.z,ox:e.mesh.position.x,oz:e.mesh.position.z,gun:e.gun})}findInteractable(){let t=this.player,e=null,n=1e9,i=-Math.sin(t.yaw),r=-Math.cos(t.yaw);for(let o of this.interactables){let a=Math.hypot(o.x-t.pos.x,o.z-t.pos.z);if(a>1.9)continue;let l=o.ox-t.pos.x,c=o.oz-t.pos.z,h=Math.hypot(l,c)||1;(l*i+c*r)/h<.2||a<n&&(n=a,e=o)}return e}promptFor(t){let e=this.weapons,n="<b>[E]</b>";switch(t.kind){case"S":return`${n} Open Supply Terminal`;case"I":return e.tank>0?`${n} Empty tank \u2014 ${Math.floor(e.tank)} units \u2192 <b>${Math.floor(e.tank*xe.perUnit*(this.powerups.double>0?2:1))} \xA2</b>`:"Disposal Chute \u2014 your tank is empty";case"W":return e.tools.washer||e.tools.torch?`${n} Refill water &amp; fuel`:"Service Station \u2014 refills the Hydro Lance and Spore Torch";case"P":{let i=ti[t.obj.perk];return this.perks[t.obj.perk]?`${i.name} \u2014 owned`:`${n} Buy ${i.name} \u2014 <b>${i.cost} \xA2</b><br><small>${i.desc}</small>`}case"R":{if(this.phase<3)return"Refinery \u2014 offline until Phase 3";let i=e.current;return!i||i.type!=="gun"?"Refinery \u2014 hold a gun to refine it":i.st.refined?"Refinery \u2014 this gun is already refined":`${n} Refine ${i.def.name} \u2014 <b>${xe.refineCost} \xA2</b><br><small>\xD72.2 damage, bigger mags, extra pierce</small>`}case"M":return`${n} Supply Crate \u2014 random weapon \u2014 <b>${xe.crateCost} \xA2</b>`;case"wallbuy":{let i=pe[t.gun];if(e.ownsGun(t.gun)){let r=e.guns.find(o=>o&&o.id===t.gun);return`${n} Buy ammo for ${i.name} \u2014 <b>${r.refined?i.ammoCost*3:i.ammoCost} \xA2</b>`}return`${n} Buy ${i.name} \u2014 <b>${i.cost} \xA2</b>`}}return""}interact(t){let e=this.weapons;switch(t.kind){case"S":this.openShop();break;case"I":{if(e.tank<=0){this.audio.deny();break}let n=Math.floor(e.tank);this.stats.units+=n,this.addCredits(n*xe.perUnit,null,!1,"DEBRIS SOLD"),e.tank=0,this.particles.burst(t.ox,1.6,t.oz,9305967,25,3,.1),this.save();break}case"W":{if(!e.tools.washer&&!e.tools.torch){this.audio.deny();break}e.water=e.resCap(),e.fuel=e.resCap(),this.audio.buy(),this.ui.flash("Water and fuel refilled","#7fc8ff");break}case"P":{let n=t.obj.perk,i=ti[n];if(this.perks[n])break;this.spend(i.cost)&&(this.perks[n]=!0,this.ui.banner(i.name.toUpperCase(),i.desc,2.5,"#"+i.color.toString(16).padStart(6,"0")),n==="ironhide"&&(this.player.hp=200),this.save());break}case"R":{if(this.phase<3){this.audio.deny();break}let n=e.current;if(!n||n.type!=="gun"||n.st.refined){this.audio.deny();break}this.spend(xe.refineCost)&&(e.refine(),this.ui.banner("REFINED",e.current.def.name,2.5,"#e09bff"),this.particles.burst(t.ox,1.5,t.oz,12602879,50,5,.12),this.save());break}case"M":{let n=tu.filter(i=>!e.ownsGun(i));if(!n.length){this.ui.flash("You already own everything in the crate!","#ffd25a");break}if(this.spend(xe.crateCost)){let i=n[Math.random()*n.length|0];e.giveGun(i),this.ui.banner(pe[i].name.toUpperCase(),"from the Supply Crate",2.2,"#7fd8ff"),this.particles.burst(t.ox,1.3,t.oz,8378623,40,5,.1),this.save()}break}case"wallbuy":{let n=pe[t.gun];if(e.ownsGun(t.gun)){let i=e.guns.find(o=>o&&o.id===t.gun),r=e.gunStats(i);if(i.mag>=r.mag&&i.reserve>=r.reserve){this.ui.flash("Ammo already full","#fff");break}this.spend(i.refined?n.ammoCost*3:n.ammoCost)&&e.refillAmmo(t.gun)}else this.spend(n.cost)&&(e.giveGun(t.gun),this.save());break}}}openShop(){this.state="shop",this.audio.stopLoops(),this.input.unlock(),this.ui.renderShop(),this.ui.show("shop",!0)}closeShop(){this.ui.show("shop",!1),this.state="playing",this.input.lock()}shopAction(t){let e=this.weapons,[n,i]=t.split(":");if(n==="gun"){let r=i==="sidearm"?300:Math.round(pe[i].cost*1.15);!e.ownsGun(i)&&this.spend(r)&&e.giveGun(i)}else if(n==="ammo"){let r=e.guns.find(o=>o&&o.id===i);r&&this.spend(r.refined?pe[i].ammoCost*3:pe[i].ammoCost)&&e.refillAmmo(i)}else if(n==="knife")e.ownedKnives[i]?(e.setKnife(i),this.audio.pickup()):this.spend(Je[i].cost)&&e.setKnife(i);else if(n==="tool"){let r=ks[i];!e.tools[i]&&(!r.minPhase||this.phase>=r.minPhase)&&this.spend(r.cost)&&(e.tools[i]=!0,i==="washer"&&(e.water=e.resCap()),i==="torch"&&(e.fuel=e.resCap()),e.switchTo(i))}else if(n==="upg"){let r=Qe[i],o=this.upg[i];o<r.costs.length&&this.spend(r.costs[o])&&(this.upg[i]++,this.stats.armor=Qe.armor.values[this.upg.armor])}else if(n==="grenade")e.grenades<6&&this.spend(xe.grenadeCost)&&(e.grenades=Math.min(6,e.grenades+2));else if(n==="allammo")this.spend(this.ui.allAmmoCost())&&e.refillAllAmmo();else if(n==="heal")this.player.hp<this.player.maxHp&&this.spend(250)&&(this.player.hp=this.player.maxHp);else if(n==="remote"&&e.tank>=1){let r=Math.floor(e.tank);this.stats.units+=r,this.addCredits(Math.floor(r*xe.perUnit*.75),null,!1,"REMOTE PURGE"),e.tank=0}this.save(),this.ui.renderShop()}wireMenus(){let t=o=>document.getElementById(o),e=!!tn.get(Hs);t("btnContinue").classList.toggle("hidden",!e),t("btnNew").onclick=()=>{this.audio.init(),this.newGame()},t("btnContinue").onclick=()=>{this.audio.init(),this.continueGame()};let n=(o,a)=>{this.subFrom=a,this.ui.show(a,!1),this.ui.show(o,!0),o==="settings"&&this.syncSettingsUI()};t("btnControls").onclick=()=>n("controls","menu"),t("btnSettings").onclick=()=>n("settings","menu"),t("btnPControls").onclick=()=>n("controls","pause"),t("btnPSettings").onclick=()=>n("settings","pause"),document.querySelectorAll(".btnBack").forEach(o=>o.onclick=()=>{this.ui.show("controls",!1),this.ui.show("settings",!1),this.ui.show(this.subFrom||"menu",!0)}),t("btnResume").onclick=()=>this.resume(),t("btnSaveQuit").onclick=()=>{this.save(),tn.sdel("gp.autostart"),location.reload()},t("btnRespawn").onclick=()=>this.respawn(),t("btnFreeRoam").onclick=()=>{this.ui.show("victory",!1),this.state="playing",this.input.lock()},t("btnVictoryQuit").onclick=()=>{this.save(),location.reload()},t("shopClose").onclick=()=>this.closeShop(),t("shopTabs").onclick=o=>{let a=o.target.closest("button");a&&a.dataset.tab&&(this.ui.shopTab=a.dataset.tab,this.ui.renderShop())},t("shopBody").onclick=o=>{let a=o.target.closest("button");a&&a.dataset.act&&!a.disabled&&this.shopAction(a.dataset.act)};let i=(o,a,l,c)=>{let h=t(o);h.oninput=()=>{this.settings[a]=h.type==="checkbox"?h.checked:parseFloat(h.value),c&&c(),this.syncSettingsUI(),tn.set(ou,JSON.stringify(this.settings))}};i("sens","sens"),i("fov","fov",null,()=>this.updateFov()),i("vol","vol",null,()=>this.audio.setVolume(this.settings.vol)),i("invert","invert"),i("showFps","showFps"),document.querySelectorAll("input[name=diff]").forEach(o=>o.onchange=()=>{this.difficulty=parseFloat(o.value)})}syncSettingsUI(){let t=n=>document.getElementById(n),e=this.settings;t("sens").value=e.sens,t("sensVal").textContent=e.sens.toFixed(2),t("fov").value=e.fov,t("fovVal").textContent=e.fov,t("vol").value=e.vol,t("volVal").textContent=Math.round(e.vol*100)+"%",t("invert").checked=!!e.invert,t("showFps").checked=!!e.showFps}newGame(){if(this.started){tn.del(Hs),tn.sset("gp.autostart","new:"+this.difficulty),location.reload();return}tn.del(Hs),this.started=!0,this.startPlaying(),this.ui.banner("PHASE 1 \u2014 LOADING BAY","Vacuum the debris (4), sell it at a Disposal Chute. Clean 80% to advance.",6,"#8fe3ff")}continueGame(){if(this.started){tn.sset("gp.autostart","continue"),location.reload();return}if(this.started=!0,!this.load()){this.newGame();return}this.startPlaying(),this.ui.banner("CONTRACT RESUMED",we[Math.min(4,this.phase)]?we[Math.min(4,this.phase)].title:"",3,"#8fe3ff")}startPlaying(){this.ui.show("menu",!1),this.ui.show("loading",!1),this.ui.show("hud",!0),this.state="playing",this.input.lock()}pause(){this.state==="playing"&&(this.state="paused",this.audio.stopLoops(),this.ui.renderStats(document.getElementById("pauseStats")),this.ui.show("pause",!0))}resume(){this.ui.show("pause",!1),this.state="playing",this.input.lock()}onKey(t){if((t.code==="Escape"||t.code==="KeyE")&&this.state==="shop"){t.preventDefault(),this.closeShop();return}if(t.code==="Escape"&&this.state==="paused"&&!document.getElementById("pause").classList.contains("hidden")){this.resume();return}if(t.code==="KeyP"&&this.state==="playing"){this.input.unlock(),this.pause();return}t.code==="Tab"&&this.state==="playing"&&(this.ui.renderStats(document.getElementById("statsBody")),this.ui.show("stats",!0))}onPlayerDeath(){if(this.state!=="playing")return;this.state="dead",this.stats.deaths++,this.audio.stopLoops(),this.input.unlock();let t=Math.floor(this.credits*.1);this.credits-=t;let e=Math.floor(this.weapons.tank);this.weapons.tank=0,document.getElementById("deathText").textContent=`You dropped ${t} \xA2 and ${e} units of debris. Your cleaning progress is safe.`,this.ui.show("death",!0),this.save()}respawn(){this.ui.show("death",!1);let t=this.level.startCell,[e,n]=this.level.center(t.x,t.y);this.player.spawnAt(e,n,-Math.PI/2),this.player.hp=this.player.maxHp,this.enemies.clearAll(),this.weapons.refillAllAmmo(),this.state="playing",this.input.lock()}save(){if(!this.started)return;let t={v:1,phase:this.phase,victory:this.victory,bossAwake:this.bossAwake,credits:this.credits,difficulty:this.difficulty,upg:this.upg,perks:this.perks,stats:this.stats,weapons:this.weapons.serialize(),grime:this.grime.serialize()};tn.set(Hs,JSON.stringify(t))}load(){let t;try{t=JSON.parse(tn.get(Hs)||"null")}catch{t=null}if(!t||t.v!==1)return!1;try{this.phase=Math.max(1,Math.min(5,t.phase|0)),this.victory=!!t.victory,this.bossAwake=!!t.bossAwake&&!this.victory,this.credits=Math.max(0,t.credits|0),this.difficulty=+t.difficulty||1;for(let e in this.upg)this.upg[e]=Math.max(0,Math.min(Qe[e].costs.length,(t.upg&&t.upg[e])|0));this.perks={};for(let e in ti)t.perks&&t.perks[e]&&(this.perks[e]=!0);Object.assign(this.stats,t.stats||{}),this.stats.armor=Qe.armor.values[this.upg.armor],this.weapons.deserialize(t.weapons),this.grime.deserialize(t.grime);for(let e=2;e<=Math.min(4,this.phase);e++)this.level.openDoor(e,!0);return this.phase>=4&&!this.victory&&(this.enemies.createBoss(),this.bossAwake&&this.enemies.awakenBoss()),this.player.hp=this.perks.ironhide?200:100,this.ui.invalidateMinimap(),!0}catch(e){return console.error("Save load failed",e),!1}}step(t){this.time+=t;let e=this.state==="playing",n=e&&this.input.isLocked();if(e){this.stats.time+=t,this.player.update(t,this.input,n),this.weapons.update(t,this.input,n),this.enemies.update(t),this.powerups.double=Math.max(0,this.powerups.double-t),this.powerups.insta=Math.max(0,this.powerups.insta-t);let i=this.findInteractable();this.ui.setPrompt(i?this.promptFor(i):""),i&&n&&this.input.hit("KeyE")&&this.interact(i),this.checkT-=t,this.checkT<=0&&(this.checkT=.5,this.checkProgress()),this.autosaveT-=t,this.autosaveT<=0&&(this.autosaveT=30,this.save()),this.ui.update(t),this.victoryT>0&&(this.victoryT-=t,this.victoryT<=0&&this.showVictory())}this.level.update(t,this.time),this.grime.update(t,this.time),this.particles.update(t),this.effects.update(t),this.input.endFrame()}render(){this.player.applyCamera(this.camera),this.shake>0&&(this.camera.position.x+=(Math.random()-.5)*this.shake*.2,this.camera.position.y+=(Math.random()-.5)*this.shake*.2,this.shake=Math.max(0,this.shake-.02)),this.updateFov();let t=this.renderer;t.clear(),t.render(this.scene,this.camera),this.state!=="menu"&&(t.clearDepth(),t.render(this.weapons.vmScene,this.weapons.vmCam))}frame(t){let e=Math.min(.05,Math.max(0,(t-this.last)/1e3));this.last=t,e>0&&(this.fps=this.fps*.95+1/e*.05),this.step(e),this.render()}run(){let t=e=>{try{this.frame(e)}catch(n){sc(n)}requestAnimationFrame(t)};requestAnimationFrame(t)}};function sc(s){console.error(s);let t=document.getElementById("errorBox");t&&!t.dataset.shown&&(t.dataset.shown="1",t.classList.remove("hidden"),t.textContent="Error: "+(s&&s.stack?s.stack:s))}window.addEventListener("error",s=>sc(s.error||s.message));function au(){let s;try{s=new ic}catch(e){sc(e);return}window.GAME=s,document.getElementById("loading").classList.add("hidden");let t=tn.sget("gp.autostart");if(tn.sdel("gp.autostart"),t){let e=t==="continue"?"btnContinue":"btnNew";t.startsWith("new:")&&(s.difficulty=parseFloat(t.split(":")[1])||1,document.querySelectorAll("input[name=diff]").forEach(n=>{n.checked=parseFloat(n.value)===s.difficulty})),document.getElementById(e).classList.remove("hidden")}s.run()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",au):au();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
