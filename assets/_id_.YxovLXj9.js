import{h as U,r as S,s as j,i as E,j as H,k as P,l as T,m as L,n as N,g as F,q as K,v as $,x,y as I,z as q,A as V,B as W,C as J,u as G,c as Q,a as X,t as Y,o as Z}from"./entry.kgPFr2Uu.js";const z=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function tt(r,n){n?n={...z,...n}:n=z;const s=M(n);return s.dispatch(r),s.toString()}const et=Object.freeze(["prototype","__proto__","constructor"]);function M(r){let n="",s=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let o="";const h=a.length;h<10?o="unknown:["+a+"]":o=a.slice(8,h-1),o=o.toLowerCase();let c=null;if((c=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):r.ignoreUnknown||this.unkown(t,o);else{let i=Object.keys(t);r.unorderedObjects&&(i=i.sort());let d=[];r.respectType!==!1&&!O(t)&&(d=et),r.excludeKeys&&(i=i.filter(u=>!r.excludeKeys(u)),d=d.filter(u=>!r.excludeKeys(u))),e("object:"+(i.length+d.length)+":");const y=u=>{this.dispatch(u),e(":"),r.excludeValues||this.dispatch(t[u]),e(",")};for(const u of i)y(u);for(const u of d)y(u)}},array(t,a){if(a=a===void 0?r.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const c of t)this.dispatch(c);return}const o=new Map,h=t.map(c=>{const i=M(r);i.dispatch(c);for(const[d,y]of i.getContext())o.set(d,y);return i.toString()});return s=o,h.sort(),this.array(h,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),O(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const R="[native code] }",st=R.length;function O(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-st)===R}class w{constructor(n,s){n=this.words=n||[],this.sigBytes=s===void 0?n.length*4:s}toString(n){return(n||rt).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<n.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=n.words[s>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const rt={stringify(r){const n=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},nt={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,a=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,h=t<<16|a<<8|o;for(let c=0;c<4&&e*8+c*6<r.sigBytes*8;c++)s.push(n.charAt(h>>>6*(3-c)&63))}return s.join("")}},at={parse(r){const n=r.length,s=[];for(let e=0;e<n;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new w(s,n)}},it={parse(r){return at.parse(unescape(encodeURIComponent(r)))}};class ot{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=it.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,s){}_process(n){let s,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new w(s,a)}}class ct extends ot{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const A=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ut=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],v=[];class lt extends ct{constructor(){super(...arguments),this._hash=new w([...A])}reset(){super.reset(),this._hash=new w([...A])}_doProcessBlock(n,s){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],h=e[3],c=e[4],i=e[5],d=e[6],y=e[7];for(let u=0;u<64;u++){if(u<16)v[u]=n[s+u]|0;else{const B=v[u-15],m=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,k=v[u-2],_=(k<<15|k>>>17)^(k<<13|k>>>19)^k>>>10;v[u]=m+v[u-7]+_+v[u-16]}const b=c&i^~c&d,f=t&a^t&o^a&o,g=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),l=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),p=y+l+b+ut[u]+v[u],D=g+f;y=d,d=i,i=c,c=h+p|0,h=o,o=a,a=t,t=p+D|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+h|0,e[4]=e[4]+c|0,e[5]=e[5]+i|0,e[6]=e[6]+d|0,e[7]=e[7]+y|0}finalize(n){super.finalize(n);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ft(r){return new lt().finalize(r).toString(nt)}function ht(r,n={}){const s=typeof r=="string"?r:tt(r,n);return ft(s).slice(0,10)}const dt=r=>r==="defer"||r===!1;function pt(...r){var b;const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=L(),o=()=>null,h=()=>a.isHydrating?a.payload.data[s]:a.static.data[s];t.server=t.server??!0,t.default=t.default??o,t.getCachedData=t.getCachedData??h,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??U.deep,t.dedupe=t.dedupe??"cancel";const c=()=>![null,void 0].includes(t.getCachedData(s));if(!a._asyncData[s]||!t.immediate){(b=a.payload._errors)[s]??(b[s]=null);const f=t.deep?S:j;a._asyncData[s]={data:f(t.getCachedData(s)??t.default()),pending:S(!c()),error:E(a.payload._errors,s),status:S("idle")}}const i={...a._asyncData[s]};i.refresh=i.execute=(f={})=>{if(a._asyncDataPromises[s]){if(dt(f.dedupe??t.dedupe))return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((f._initial||a.isHydrating&&f._initial!==!1)&&c())return Promise.resolve(t.getCachedData(s));i.pending.value=!0,i.status.value="pending";const g=new Promise((l,p)=>{try{l(e(a))}catch(D){p(D)}}).then(l=>{if(g.cancelled)return a._asyncDataPromises[s];let p=l;t.transform&&(p=t.transform(l)),t.pick&&(p=yt(p,t.pick)),a.payload.data[s]=p,i.data.value=p,i.error.value=null,i.status.value="success"}).catch(l=>{if(g.cancelled)return a._asyncDataPromises[s];i.error.value=N(l),i.data.value=F(t.default()),i.status.value="error"}).finally(()=>{g.cancelled||(i.pending.value=!1,delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=g,a._asyncDataPromises[s]};const d=()=>i.refresh({_initial:!0}),y=t.server!==!1&&a.payload.serverRendered;{const f=K();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const l=f._nuxtOnBeforeMountCbs;f&&(H(()=>{l.forEach(p=>{p()}),l.splice(0,l.length)}),P(()=>l.splice(0,l.length)))}y&&a.isHydrating&&(i.error.value||c())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):f&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?f._nuxtOnBeforeMountCbs.push(d):t.immediate&&d(),t.watch&&T(t.watch,()=>i.refresh());const g=a.hook("app:data:refresh",async l=>{(!l||l.includes(s))&&await i.refresh()});f&&P(g)}const u=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(u,i),u}function yt(r,n){const s={};for(const e of n)s[e]=r[e];return s}function gt(r,n,s){const[e={},t]=typeof n=="string"?[{},n]:[n,s],a=$(()=>{let _=r;return typeof _=="function"&&(_=_()),x(_)}),o=e.key||ht([t,typeof a.value=="string"?a.value:"",...mt(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const h=o===t?"$f"+o:o;if(!e.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:i,default:d,transform:y,pick:u,watch:b,immediate:f,getCachedData:g,deep:l,...p}=e,D=I({...q,...p,cache:typeof e.cache=="boolean"?void 0:e.cache}),B={server:c,lazy:i,default:d,transform:y,pick:u,immediate:f,getCachedData:g,deep:l,watch:b===!1?[]:[D,a,...b||[]]};let m;return pt(h,()=>{var C;(C=m==null?void 0:m.abort)==null||C.call(m),m=typeof AbortController<"u"?new AbortController:{};const _=x(e.timeout);return _&&setTimeout(()=>m.abort(),_),(e.$fetch||globalThis.$fetch)(a.value,{signal:m.signal,...D})},B)}function mt(r){var s;const n=[((s=x(r.method))==null?void 0:s.toUpperCase())||"GET",x(r.baseURL)];for(const e of[r.params||r.query]){const t=x(e);if(!t)continue;const a={};for(const[o,h]of Object.entries(t))a[x(o)]=x(h);n.push(a)}return n}const bt={__name:"[id]",async setup(r){let n,s;const e=V(),{data:t}=([n,s]=W(()=>gt(`http://www.omdbapi.com/?apikey=b4a16316&i=${e.params.id}`,{pick:["Plot","Title","Error","Poster"],key:`/movies/${e.params.id}`},"$RMfb8nUpTS")),n=await n,s(),n);return t.value.Error==="Incorrect IMDb ID."&&J({statusCode:404,statusMessage:"Page Not Found!"}),G({title:t.value.Title,meta:[{name:"description",content:t.value.Plot},{name:"og:description",content:t.value.Plot},{name:"og:image",content:t.value.Poster},{name:"twitter:card",content:"summary_large_image"}]}),(a,o)=>(Z(),Q("div",null,[X("pre",null,Y(F(t)),1)]))}};export{bt as default};
