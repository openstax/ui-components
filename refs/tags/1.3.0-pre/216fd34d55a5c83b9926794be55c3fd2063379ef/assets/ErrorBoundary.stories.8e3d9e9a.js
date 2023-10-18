import{R as k,j as G,F as _e,a as h}from"./index.eef77f37.js";import{i as ye,l as d,g as N,a as Y,u as te,t as U,d as B,D as Re,b as be,c as Ne,F as ve,I as Ie,G as Be,T as De,B as Ge,L as Ye,H as Ue,e as ke,f as Ce,h as y,j as L,k as ne,s as we,m as Ae,W as x,S as ie,n as Oe,o as He,p as q}from"./Error.23a6c8d2.js";import"./theme.9d8e9adf.js";import"./palette.15e4d008.js";const $e=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function Me(t){const e=t.match($e);if(!t||!e)return;let n;return e[3]==="1"?n=!0:e[3]==="0"&&(n=!1),{traceId:e[1],parentSampled:n,parentSpanId:e[2]}}const F="baggage",ue="sentry-",xe=/^sentry-/,Pe=8192;function Le(t){if(!ye(t)&&!Array.isArray(t))return;let e={};if(Array.isArray(t))e=t.reduce((i,s)=>{const o=se(s);return{...i,...o}},{});else{if(!t)return;e=se(t)}const n=Object.entries(e).reduce((i,[s,o])=>{if(s.match(xe)){const r=s.slice(ue.length);i[r]=o}return i},{});if(Object.keys(n).length>0)return n}function le(t){const e=Object.entries(t).reduce((n,[i,s])=>(s&&(n[`${ue}${i}`]=s),n),{});return Fe(e)}function se(t){return t.split(",").map(e=>e.split("=").map(n=>decodeURIComponent(n.trim()))).reduce((e,[n,i])=>(e[n]=i,e),{})}function Fe(t){if(Object.keys(t).length!==0)return Object.entries(t).reduce((e,[n,i],s)=>{const o=`${encodeURIComponent(n)}=${encodeURIComponent(i)}`,r=s===0?o:`${e},${o}`;return r.length>Pe?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn(`Not adding key: ${n} with val: ${i} to baggage header due to exceeding baggage size limits.`),e):r},"")}function V(t){if(typeof __SENTRY_TRACING__=="boolean"&&!__SENTRY_TRACING__)return!1;const e=N().getClient(),n=t||e&&e.getOptions();return!!n&&(n.enableTracing||"tracesSampleRate"in n||"tracesSampler"in n)}function C(t){return(t||N()).getScope().getTransaction()}let re=!1;function je(){re||(re=!0,Y("error",j),Y("unhandledrejection",j))}function j(){const t=C();if(t){const e="internal_error";(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] Transaction: ${e} -> Global error occured`),t.setStatus(e)}}j.tag="sentry_tracingErrorCallback";class ${__init(){this.spans=[]}constructor(e=1e3){$.prototype.__init.call(this),this._maxlen=e}add(e){this.spans.length>this._maxlen?e.spanRecorder=void 0:this.spans.push(e)}}class E{__init2(){this.traceId=te()}__init3(){this.spanId=te().substring(16)}__init4(){this.startTimestamp=U()}__init5(){this.tags={}}__init6(){this.data={}}__init7(){this.instrumenter="sentry"}constructor(e){if(E.prototype.__init2.call(this),E.prototype.__init3.call(this),E.prototype.__init4.call(this),E.prototype.__init5.call(this),E.prototype.__init6.call(this),E.prototype.__init7.call(this),!e)return this;e.traceId&&(this.traceId=e.traceId),e.spanId&&(this.spanId=e.spanId),e.parentSpanId&&(this.parentSpanId=e.parentSpanId),"sampled"in e&&(this.sampled=e.sampled),e.op&&(this.op=e.op),e.description&&(this.description=e.description),e.data&&(this.data=e.data),e.tags&&(this.tags=e.tags),e.status&&(this.status=e.status),e.startTimestamp&&(this.startTimestamp=e.startTimestamp),e.endTimestamp&&(this.endTimestamp=e.endTimestamp),e.instrumenter&&(this.instrumenter=e.instrumenter)}startChild(e){const n=new E({...e,parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId});if(n.spanRecorder=this.spanRecorder,n.spanRecorder&&n.spanRecorder.add(n),n.transaction=this.transaction,(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&n.transaction){const i=e&&e.op||"< unknown op >",s=n.transaction.name||"< unknown name >",o=n.transaction.spanId,r=`[Tracing] Starting '${i}' span on transaction '${s}' (${o}).`;n.transaction.metadata.spanMetadata[n.spanId]={logMessage:r},d.log(r)}return n}setTag(e,n){return this.tags={...this.tags,[e]:n},this}setData(e,n){return this.data={...this.data,[e]:n},this}setStatus(e){return this.status=e,this}setHttpStatus(e){this.setTag("http.status_code",String(e));const n=ze(e);return n!=="unknown_error"&&this.setStatus(n),this}isSuccess(){return this.status==="ok"}finish(e){if((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&this.transaction&&this.transaction.spanId!==this.spanId){const{logMessage:n}=this.transaction.metadata.spanMetadata[this.spanId];n&&d.log(n.replace("Starting","Finishing"))}this.endTimestamp=typeof e=="number"?e:U()}toTraceparent(){let e="";return this.sampled!==void 0&&(e=this.sampled?"-1":"-0"),`${this.traceId}-${this.spanId}${e}`}toContext(){return B({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})}updateWithContext(e){return this.data=e.data||{},this.description=e.description,this.endTimestamp=e.endTimestamp,this.op=e.op,this.parentSpanId=e.parentSpanId,this.sampled=e.sampled,this.spanId=e.spanId||this.spanId,this.startTimestamp=e.startTimestamp||this.startTimestamp,this.status=e.status,this.tags=e.tags||{},this.traceId=e.traceId||this.traceId,this}getTraceContext(){return B({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})}toJSON(){return B({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})}}function ze(t){if(t<400&&t>=100)return"ok";if(t>=400&&t<500)switch(t){case 401:return"unauthenticated";case 403:return"permission_denied";case 404:return"not_found";case 409:return"already_exists";case 413:return"failed_precondition";case 429:return"resource_exhausted";default:return"invalid_argument"}if(t>=500&&t<600)switch(t){case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline_exceeded";default:return"internal_error"}return"unknown_error"}class b extends E{__init(){this._measurements={}}__init2(){this._contexts={}}__init3(){this._frozenDynamicSamplingContext=void 0}constructor(e,n){super(e),b.prototype.__init.call(this),b.prototype.__init2.call(this),b.prototype.__init3.call(this),this._hub=n||N(),this._name=e.name||"",this.metadata={source:"custom",...e.metadata,spanMetadata:{}},this._trimEnd=e.trimEnd,this.transaction=this;const i=this.metadata.dynamicSamplingContext;i&&(this._frozenDynamicSamplingContext={...i})}get name(){return this._name}set name(e){this.setName(e)}setName(e,n="custom"){this._name=e,this.metadata.source=n}initSpanRecorder(e=1e3){this.spanRecorder||(this.spanRecorder=new $(e)),this.spanRecorder.add(this)}setContext(e,n){n===null?delete this._contexts[e]:this._contexts[e]=n}setMeasurement(e,n,i=""){this._measurements[e]={value:n,unit:i}}setMetadata(e){this.metadata={...this.metadata,...e}}finish(e){if(this.endTimestamp!==void 0)return;this.name||((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),super.finish(e);const n=this._hub.getClient();if(n&&n.emit&&n.emit("finishTransaction",this),this.sampled!==!0){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),n&&n.recordDroppedEvent("sample_rate","transaction");return}const i=this.spanRecorder?this.spanRecorder.spans.filter(a=>a!==this&&a.endTimestamp):[];this._trimEnd&&i.length>0&&(this.endTimestamp=i.reduce((a,c)=>a.endTimestamp&&c.endTimestamp?a.endTimestamp>c.endTimestamp?a:c:a).endTimestamp);const s=this.metadata,o={contexts:{...this._contexts,trace:this.getTraceContext()},spans:i,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:{...s,dynamicSamplingContext:this.getDynamicSamplingContext()},...s.source&&{transaction_info:{source:s.source}}};return Object.keys(this._measurements).length>0&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),o.measurements=this._measurements),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),this._hub.captureEvent(o)}toContext(){const e=super.toContext();return B({...e,name:this.name,trimEnd:this._trimEnd})}updateWithContext(e){return super.updateWithContext(e),this.name=e.name||"",this._trimEnd=e.trimEnd,this}getDynamicSamplingContext(){if(this._frozenDynamicSamplingContext)return this._frozenDynamicSamplingContext;const e=this._hub||N(),n=e&&e.getClient();if(!n)return{};const{environment:i,release:s}=n.getOptions()||{},{publicKey:o}=n.getDsn()||{},r=this.metadata.sampleRate,a=r!==void 0?r.toString():void 0,{segment:c}=e.getScope().getUser()||{},_=this.metadata.source,f=_&&_!=="url"?this.name:void 0,g=B({environment:i||Re,release:s,transaction:f,user_segment:c,public_key:o,trace_id:this.traceId,sample_rate:a});return n.emit&&n.emit("createDsc",g),g}setHub(e){this._hub=e}}const O={idleTimeout:1e3,finalTimeout:3e4,heartbeatInterval:5e3},We="finishReason",R=["heartbeatFailed","idleTimeout","documentHidden","finalTimeout","externalFinish","cancelled"];class qe extends ${constructor(e,n,i,s){super(s),this._pushActivity=e,this._popActivity=n,this.transactionSpanId=i}add(e){e.spanId!==this.transactionSpanId&&(e.finish=n=>{e.endTimestamp=typeof n=="number"?n:U(),this._popActivity(e.spanId)},e.endTimestamp===void 0&&this._pushActivity(e.spanId)),super.add(e)}}class S extends b{__init(){this.activities={}}__init2(){this._heartbeatCounter=0}__init3(){this._finished=!1}__init4(){this._idleTimeoutCanceledPermanently=!1}__init5(){this._beforeFinishCallbacks=[]}__init6(){this._finishReason=R[4]}constructor(e,n,i=O.idleTimeout,s=O.finalTimeout,o=O.heartbeatInterval,r=!1){super(e,n),this._idleHub=n,this._idleTimeout=i,this._finalTimeout=s,this._heartbeatInterval=o,this._onScope=r,S.prototype.__init.call(this),S.prototype.__init2.call(this),S.prototype.__init3.call(this),S.prototype.__init4.call(this),S.prototype.__init5.call(this),S.prototype.__init6.call(this),r&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),n.configureScope(a=>a.setSpan(this))),this._restartIdleTimeout(),setTimeout(()=>{this._finished||(this.setStatus("deadline_exceeded"),this._finishReason=R[3],this.finish())},this._finalTimeout)}finish(e=U()){if(this._finished=!0,this.activities={},this.op==="ui.action.click"&&this.setTag(We,this._finishReason),this.spanRecorder){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Tracing] finishing IdleTransaction",new Date(e*1e3).toISOString(),this.op);for(const n of this._beforeFinishCallbacks)n(this,e);this.spanRecorder.spans=this.spanRecorder.spans.filter(n=>{if(n.spanId===this.spanId)return!0;n.endTimestamp||(n.endTimestamp=e,n.setStatus("cancelled"),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(n,void 0,2)));const i=n.startTimestamp<e;return i||(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(n,void 0,2)),i}),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Tracing] flushing IdleTransaction")}else(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Tracing] No active IdleTransaction");if(this._onScope){const n=this._idleHub.getScope();n.getTransaction()===this&&n.setSpan(void 0)}return super.finish(e)}registerBeforeFinishCallback(e){this._beforeFinishCallbacks.push(e)}initSpanRecorder(e){if(!this.spanRecorder){const n=s=>{this._finished||this._pushActivity(s)},i=s=>{this._finished||this._popActivity(s)};this.spanRecorder=new qe(n,i,this.spanId,e),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("Starting heartbeat"),this._pingHeartbeat()}this.spanRecorder.add(this)}cancelIdleTimeout(e,{restartOnChildSpanChange:n}={restartOnChildSpanChange:!0}){this._idleTimeoutCanceledPermanently=n===!1,this._idleTimeoutID&&(clearTimeout(this._idleTimeoutID),this._idleTimeoutID=void 0,Object.keys(this.activities).length===0&&this._idleTimeoutCanceledPermanently&&(this._finishReason=R[5],this.finish(e)))}setFinishReason(e){this._finishReason=e}_restartIdleTimeout(e){this.cancelIdleTimeout(),this._idleTimeoutID=setTimeout(()=>{!this._finished&&Object.keys(this.activities).length===0&&(this._finishReason=R[1],this.finish(e))},this._idleTimeout)}_pushActivity(e){this.cancelIdleTimeout(void 0,{restartOnChildSpanChange:!this._idleTimeoutCanceledPermanently}),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] pushActivity: ${e}`),this.activities[e]=!0,(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Tracing] new activities count",Object.keys(this.activities).length)}_popActivity(e){if(this.activities[e]&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] popActivity ${e}`),delete this.activities[e],(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Tracing] new activities count",Object.keys(this.activities).length)),Object.keys(this.activities).length===0){const n=U();this._idleTimeoutCanceledPermanently?(this._finishReason=R[5],this.finish(n)):this._restartIdleTimeout(n+this._idleTimeout/1e3)}}_beat(){if(this._finished)return;const e=Object.keys(this.activities).join("");e===this._prevHeartbeatString?this._heartbeatCounter++:this._heartbeatCounter=1,this._prevHeartbeatString=e,this._heartbeatCounter>=3?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this._finishReason=R[0],this.finish()):this._pingHeartbeat()}_pingHeartbeat(){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),setTimeout(()=>{this._beat()},this._heartbeatInterval)}}function Ve(){const e=this.getScope().getSpan();return e?{"sentry-trace":e.toTraceparent()}:{}}function fe(t,e,n){if(!V(e))return t.sampled=!1,t;if(t.sampled!==void 0)return t.setMetadata({sampleRate:Number(t.sampled)}),t;let i;return typeof e.tracesSampler=="function"?(i=e.tracesSampler(n),t.setMetadata({sampleRate:Number(i)})):n.parentSampled!==void 0?i=n.parentSampled:typeof e.tracesSampleRate<"u"?(i=e.tracesSampleRate,t.setMetadata({sampleRate:Number(i)})):(i=1,t.setMetadata({sampleRate:i})),Xe(i)?i?(t.sampled=Math.random()<i,t.sampled?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] starting ${t.op} transaction - ${t.name}`),t):((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`),t)):((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler=="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),t.sampled=!1,t):((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)}function Xe(t){return Ne(t)||!(typeof t=="number"||typeof t=="boolean")?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`),!1):t<0||t>1?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`),!1):!0}function Je(t,e){const n=this.getClient(),i=n&&n.getOptions()||{},s=i.instrumenter||"sentry",o=t.instrumenter||"sentry";s!==o&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${s}\` instrumenter.
The transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`),t.sampled=!1);let r=new b(t,this);return r=fe(r,i,{parentSampled:t.parentSampled,transactionContext:t,...e}),r.sampled&&r.initSpanRecorder(i._experiments&&i._experiments.maxSpans),n&&n.emit&&n.emit("startTransaction",r),r}function ae(t,e,n,i,s,o,r){const a=t.getClient(),c=a&&a.getOptions()||{};let _=new S(e,t,n,i,r,s);return _=fe(_,c,{parentSampled:e.parentSampled,transactionContext:e,...o}),_.sampled&&_.initSpanRecorder(c._experiments&&c._experiments.maxSpans),a&&a.emit&&a.emit("startTransaction",_),_}function Ke(){const t=be();!t.__SENTRY__||(t.__SENTRY__.extensions=t.__SENTRY__.extensions||{},t.__SENTRY__.extensions.startTransaction||(t.__SENTRY__.extensions.startTransaction=Je),t.__SENTRY__.extensions.traceHeaders||(t.__SENTRY__.extensions.traceHeaders=Ve),je())}const Qe=Object.freeze(Object.defineProperty({__proto__:null,FunctionToString:ve,InboundFilters:Ie},Symbol.toStringTag,{value:"Module"})),Ze=Object.freeze(Object.defineProperty({__proto__:null,GlobalHandlers:Be,TryCatch:De,Breadcrumbs:Ge,LinkedErrors:Ye,HttpContext:Ue,Dedupe:ke},Symbol.toStringTag,{value:"Module"})),u=Ce;function et(){u&&u.document?u.document.addEventListener("visibilitychange",()=>{const t=C();if(u.document.hidden&&t){const e="cancelled";(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`),t.status||t.setStatus(e),t.setTag("visibilitychange","document.hidden"),t.finish()}}):(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn("[Tracing] Could not set up background tab detection due to lack of global document")}const X=(t,e,n)=>{let i,s;return o=>{e.value>=0&&(o||n)&&(s=e.value-(i||0),(s||i===void 0)&&(i=e.value,e.delta=s,t(e)))}},tt=()=>`v3-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,nt=()=>{const t=u.performance.timing,e=u.performance.navigation.type,n={entryType:"navigation",startTime:0,type:e==2?"back_forward":e===1?"reload":"navigate"};for(const i in t)i!=="navigationStart"&&i!=="toJSON"&&(n[i]=Math.max(t[i]-t.navigationStart,0));return n},pe=()=>u.__WEB_VITALS_POLYFILL__?u.performance&&(performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]||nt()):u.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],me=()=>{const t=pe();return t&&t.activationStart||0},J=(t,e)=>{const n=pe();let i="navigate";return n&&(u.document.prerendering||me()>0?i="prerender":i=n.type.replace(/_/g,"-")),{name:t,value:typeof e>"u"?-1:e,rating:"good",delta:0,entries:[],id:tt(),navigationType:i}},w=(t,e,n)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(t)){const i=new PerformanceObserver(s=>{e(s.getEntries())});return i.observe(Object.assign({type:t,buffered:!0},n||{})),i}}catch{}},M=(t,e)=>{const n=i=>{(i.type==="pagehide"||u.document.visibilityState==="hidden")&&(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},it=t=>{const e=J("CLS",0);let n,i=0,s=[];const o=a=>{a.forEach(c=>{if(!c.hadRecentInput){const _=s[0],f=s[s.length-1];i&&s.length!==0&&c.startTime-f.startTime<1e3&&c.startTime-_.startTime<5e3?(i+=c.value,s.push(c)):(i=c.value,s=[c]),i>e.value&&(e.value=i,e.entries=s,n&&n())}})},r=w("layout-shift",o);if(r){n=X(t,e);const a=()=>{o(r.takeRecords()),n(!0)};return M(a),a}};let H=-1;const st=()=>u.document.visibilityState==="hidden"&&!u.document.prerendering?0:1/0,rt=()=>{M(({timeStamp:t})=>{H=t},!0)},K=()=>(H<0&&(H=st(),rt()),{get firstHiddenTime(){return H}}),at=t=>{const e=K(),n=J("FID");let i;const s=a=>{a.startTime<e.firstHiddenTime&&(n.value=a.processingStart-a.startTime,n.entries.push(a),i(!0))},o=a=>{a.forEach(s)},r=w("first-input",o);i=X(t,n),r&&M(()=>{o(r.takeRecords()),r.disconnect()},!0)},oe={},ot=t=>{const e=K(),n=J("LCP");let i;const s=r=>{const a=r[r.length-1];if(a){const c=Math.max(a.startTime-me(),0);c<e.firstHiddenTime&&(n.value=c,n.entries=[a],i())}},o=w("largest-contentful-paint",s);if(o){i=X(t,n);const r=()=>{oe[n.id]||(s(o.takeRecords()),o.disconnect(),oe[n.id]=!0,i(!0))};return["keydown","click"].forEach(a=>{addEventListener(a,r,{once:!0,capture:!0})}),M(r,!0),r}};function P(t){return typeof t=="number"&&isFinite(t)}function v(t,{startTimestamp:e,...n}){return e&&t.startTimestamp>e&&(t.startTimestamp=e),t.startChild({startTimestamp:e,...n})}function p(t){return t/1e3}function he(){return u&&u.addEventListener&&u.performance}let ce=0,l={},T,D;function ct(){const t=he();if(t&&y){t.mark&&u.performance.mark("sentry-tracing-init"),ft();const e=ut(),n=lt();return()=>{e&&e(),n&&n()}}return()=>{}}function dt(){w("longtask",e=>{for(const n of e){const i=C();if(!i)return;const s=p(y+n.startTime),o=p(n.duration);i.startChild({description:"Main UI thread blocked",op:"ui.long-task",startTimestamp:s,endTimestamp:s+o})}})}function _t(){w("event",e=>{for(const n of e){const i=C();if(!i)return;if(n.name==="click"){const s=p(y+n.startTime),o=p(n.duration);i.startChild({description:L(n.target),op:`ui.interaction.${n.name}`,startTimestamp:s,endTimestamp:s+o})}}},{durationThreshold:0})}function ut(){return it(t=>{const e=t.entries.pop();!e||((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Measurements] Adding CLS"),l.cls={value:t.value,unit:""},D=e)})}function lt(){return ot(t=>{const e=t.entries.pop();!e||((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Measurements] Adding LCP"),l.lcp={value:t.value,unit:"millisecond"},T=e)})}function ft(){at(t=>{const e=t.entries.pop();if(!e)return;const n=p(y),i=p(e.startTime);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Measurements] Adding FID"),l.fid={value:t.value,unit:"millisecond"},l["mark.fid"]={value:n+i,unit:"second"}})}function pt(t){const e=he();if(!e||!u.performance.getEntries||!y)return;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Tracing] Adding & adjusting spans using Performance API");const n=p(y),i=e.getEntries();let s,o;if(i.slice(ce).forEach(r=>{const a=p(r.startTime),c=p(r.duration);if(!(t.op==="navigation"&&n+a<t.startTimestamp))switch(r.entryType){case"navigation":{ht(t,r,n),s=n+p(r.responseStart),o=n+p(r.requestStart);break}case"mark":case"paint":case"measure":{mt(t,r,a,c,n);const _=K(),f=r.startTime<_.firstHiddenTime;r.name==="first-paint"&&f&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Measurements] Adding FP"),l.fp={value:r.startTime,unit:"millisecond"}),r.name==="first-contentful-paint"&&f&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Measurements] Adding FCP"),l.fcp={value:r.startTime,unit:"millisecond"});break}case"resource":{const _=r.name.replace(u.location.origin,"");Tt(t,r,_,a,c,n);break}}}),ce=Math.max(i.length-1,0),Et(t),t.op==="pageload"){typeof s=="number"&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Measurements] Adding TTFB"),l.ttfb={value:(s-t.startTimestamp)*1e3,unit:"millisecond"},typeof o=="number"&&o<=s&&(l["ttfb.requestTime"]={value:(s-o)*1e3,unit:"millisecond"})),["fcp","fp","lcp"].forEach(a=>{if(!l[a]||n>=t.startTimestamp)return;const c=l[a].value,_=n+p(c),f=Math.abs((_-t.startTimestamp)*1e3),g=f-c;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Measurements] Normalized ${a} from ${c} to ${f} (${g})`),l[a].value=f});const r=l["mark.fid"];r&&l.fid&&(v(t,{description:"first input delay",endTimestamp:r.value+p(l.fid.value),op:"ui.action",startTimestamp:r.value}),delete l["mark.fid"]),"fcp"in l||delete l.cls,Object.keys(l).forEach(a=>{t.setMeasurement(a,l[a].value,l[a].unit)}),St(t)}T=void 0,D=void 0,l={}}function mt(t,e,n,i,s){const o=s+n,r=o+i;return v(t,{description:e.name,endTimestamp:r,op:e.entryType,startTimestamp:o}),o}function ht(t,e,n){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach(i=>{A(t,e,i,n)}),A(t,e,"secureConnection",n,"TLS/SSL","connectEnd"),A(t,e,"fetch",n,"cache","domainLookupStart"),A(t,e,"domainLookup",n,"DNS"),gt(t,e,n)}function A(t,e,n,i,s,o){const r=o?e[o]:e[`${n}End`],a=e[`${n}Start`];!a||!r||v(t,{op:"browser",description:s||n,startTimestamp:i+p(a),endTimestamp:i+p(r)})}function gt(t,e,n){v(t,{op:"browser",description:"request",startTimestamp:n+p(e.requestStart),endTimestamp:n+p(e.responseEnd)}),v(t,{op:"browser",description:"response",startTimestamp:n+p(e.responseStart),endTimestamp:n+p(e.responseEnd)})}function Tt(t,e,n,i,s,o){if(e.initiatorType==="xmlhttprequest"||e.initiatorType==="fetch")return;const r={};"transferSize"in e&&(r["Transfer Size"]=e.transferSize),"encodedBodySize"in e&&(r["Encoded Body Size"]=e.encodedBodySize),"decodedBodySize"in e&&(r["Decoded Body Size"]=e.decodedBodySize),"renderBlockingStatus"in e&&(r["resource.render_blocking_status"]=e.renderBlockingStatus);const a=o+i,c=a+s;v(t,{description:n,endTimestamp:c,op:e.initiatorType?`resource.${e.initiatorType}`:"resource.other",startTimestamp:a,data:r})}function Et(t){const e=u.navigator;if(!e)return;const n=e.connection;n&&(n.effectiveType&&t.setTag("effectiveConnectionType",n.effectiveType),n.type&&t.setTag("connectionType",n.type),P(n.rtt)&&(l["connection.rtt"]={value:n.rtt,unit:"millisecond"})),P(e.deviceMemory)&&t.setTag("deviceMemory",`${e.deviceMemory} GB`),P(e.hardwareConcurrency)&&t.setTag("hardwareConcurrency",String(e.hardwareConcurrency))}function St(t){T&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Measurements] Adding LCP Data"),T.element&&t.setTag("lcp.element",L(T.element)),T.id&&t.setTag("lcp.id",T.id),T.url&&t.setTag("lcp.url",T.url.trim().slice(0,200)),t.setTag("lcp.size",T.size)),D&&D.sources&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log("[Measurements] Adding CLS Data"),D.sources.forEach((e,n)=>t.setTag(`cls.source.${n+1}`,L(e.node))))}const z=["localhost",/^\//],W={traceFetch:!0,traceXHR:!0,tracingOrigins:z,tracePropagationTargets:z};function yt(t){const{traceFetch:e,traceXHR:n,tracePropagationTargets:i,tracingOrigins:s,shouldCreateSpanForRequest:o}={traceFetch:W.traceFetch,traceXHR:W.traceXHR,...t},r=typeof o=="function"?o:_=>!0,a=_=>Rt(_,i||s),c={};e&&Y("fetch",_=>{bt(_,r,a,c)}),n&&Y("xhr",_=>{vt(_,r,a,c)})}function Rt(t,e){return we(t,e||z)}function bt(t,e,n,i){if(!V()||!(t.fetchData&&e(t.fetchData.url)))return;if(t.endTimestamp){const a=t.fetchData.__span;if(!a)return;const c=i[a];c&&(t.response?c.setHttpStatus(t.response.status):t.error&&c.setStatus("internal_error"),c.finish(),delete i[a]);return}const s=N().getScope(),o=s&&s.getSpan(),r=o&&o.transaction;if(o&&r){const a=o.startChild({data:{...t.fetchData,type:"fetch"},description:`${t.fetchData.method} ${t.fetchData.url}`,op:"http.client"});t.fetchData.__span=a.spanId,i[a.spanId]=a;const c=t.args[0];t.args[1]=t.args[1]||{};const _=t.args[1];n(t.fetchData.url)&&(_.headers=Nt(c,r.getDynamicSamplingContext(),a,_))}}function Nt(t,e,n,i){const s=le(e),o=n.toTraceparent(),r=typeof Request<"u"&&ne(t,Request)?t.headers:i.headers;if(r)if(typeof Headers<"u"&&ne(r,Headers)){const a=new Headers(r);return a.append("sentry-trace",o),s&&a.append(F,s),a}else if(Array.isArray(r)){const a=[...r,["sentry-trace",o]];return s&&a.push([F,s]),a}else{const a="baggage"in r?r.baggage:void 0,c=[];return Array.isArray(a)?c.push(...a):a&&c.push(a),s&&c.push(s),{...r,"sentry-trace":o,baggage:c.length>0?c.join(","):void 0}}else return{"sentry-trace":o,baggage:s}}function vt(t,e,n,i){if(!V()||t.xhr&&t.xhr.__sentry_own_request__||!(t.xhr&&t.xhr.__sentry_xhr__&&e(t.xhr.__sentry_xhr__.url)))return;const s=t.xhr.__sentry_xhr__;if(t.endTimestamp){const c=t.xhr.__sentry_xhr_span_id__;if(!c)return;const _=i[c];_&&(_.setHttpStatus(s.status_code),_.finish(),delete i[c]);return}const o=N().getScope(),r=o&&o.getSpan(),a=r&&r.transaction;if(r&&a){const c=r.startChild({data:{...s.data,type:"xhr",method:s.method,url:s.url},description:`${s.method} ${s.url}`,op:"http.client"});if(t.xhr.__sentry_xhr_span_id__=c.spanId,i[t.xhr.__sentry_xhr_span_id__]=c,t.xhr.setRequestHeader&&n(t.xhr.__sentry_xhr__.url))try{t.xhr.setRequestHeader("sentry-trace",c.toTraceparent());const _=a.getDynamicSamplingContext(),f=le(_);f&&t.xhr.setRequestHeader(F,f)}catch{}}}function It(t,e=!0,n=!0){if(!u||!u.location){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn("Could not initialize routing instrumentation due to invalid location");return}let i=u.location.href,s;e&&(s=t({name:u.location.pathname,startTimestamp:y,op:"pageload",metadata:{source:"url"}})),n&&Y("history",({to:o,from:r})=>{if(r===void 0&&i&&i.indexOf(o)!==-1){i=void 0;return}r!==o&&(i=void 0,s&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] Finishing current transaction with op: ${s.op}`),s.finish()),s=t({name:u.location.pathname,op:"navigation",metadata:{source:"url"}}))})}const Bt="BrowserTracing",Dt={...O,markBackgroundTransactions:!0,routingInstrumentation:It,startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,enableLongTask:!0,_experiments:{},...W};class Q{__init(){this.name=Bt}constructor(e){Q.prototype.__init.call(this),Ke(),this.options={...Dt,...e},this.options._experiments.enableLongTask!==void 0&&(this.options.enableLongTask=this.options._experiments.enableLongTask),e&&!e.tracePropagationTargets&&e.tracingOrigins&&(this.options.tracePropagationTargets=e.tracingOrigins),this._collectWebVitals=ct(),this.options.enableLongTask&&dt(),this.options._experiments.enableInteractions&&_t()}setupOnce(e,n){this._getCurrentHub=n;const{routingInstrumentation:i,startTransactionOnLocationChange:s,startTransactionOnPageLoad:o,markBackgroundTransactions:r,traceFetch:a,traceXHR:c,tracePropagationTargets:_,shouldCreateSpanForRequest:f,_experiments:g}=this.options;i(I=>{const m=this._createRouteTransaction(I);return this.options._experiments.onStartRouteTransaction&&this.options._experiments.onStartRouteTransaction(m,I,n),m},o,s),r&&et(),g.enableInteractions&&this._registerInteractionListener(),yt({traceFetch:a,traceXHR:c,tracePropagationTargets:_,shouldCreateSpanForRequest:f})}_createRouteTransaction(e){if(!this._getCurrentHub){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`);return}const{beforeNavigate:n,idleTimeout:i,finalTimeout:s,heartbeatInterval:o}=this.options,r=e.op==="pageload",a=r?de("sentry-trace"):null,c=r?de("baggage"):null,_=a?Me(a):void 0,f=c?Le(c):void 0,g={...e,..._,metadata:{...e.metadata,dynamicSamplingContext:_&&!f?{}:f},trimEnd:!0},I=typeof n=="function"?n(g):g,m=I===void 0?{...g,sampled:!1}:I;m.metadata=m.name!==g.name?{...m.metadata,source:"custom"}:m.metadata,this._latestRouteName=m.name,this._latestRouteSource=m.metadata&&m.metadata.source,m.sampled===!1&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] Will not send ${m.op} transaction because of beforeNavigate.`),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.log(`[Tracing] Starting ${m.op} transaction on scope`);const Te=this._getCurrentHub(),{location:Ee}=u,ee=ae(Te,m,i,s,!0,{location:Ee},o);return ee.registerBeforeFinishCallback(Se=>{this._collectWebVitals(),pt(Se)}),ee}_registerInteractionListener(){let e;const n=()=>{const{idleTimeout:i,finalTimeout:s,heartbeatInterval:o}=this.options,r="ui.action.click",a=C();if(a&&a.op&&["navigation","pageload"].includes(a.op)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn(`[Tracing] Did not create ${r} transaction because a pageload or navigation transaction is in progress.`);return}if(e&&(e.setFinishReason("interactionInterrupted"),e.finish(),e=void 0),!this._getCurrentHub){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn(`[Tracing] Did not create ${r} transaction because _getCurrentHub is invalid.`);return}if(!this._latestRouteName){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&d.warn(`[Tracing] Did not create ${r} transaction because _latestRouteName is missing.`);return}const c=this._getCurrentHub(),{location:_}=u,f={name:this._latestRouteName,op:r,trimEnd:!0,metadata:{source:this._latestRouteSource||"url"}};e=ae(c,f,i,s,!0,{location:_},o)};["click"].forEach(i=>{addEventListener(i,n,{once:!1,capture:!0})})}}function de(t){const e=Ae(`meta[name=${t}]`);return e?e.getAttribute("content"):null}let ge={};x.Sentry&&x.Sentry.Integrations&&(ge=x.Sentry.Integrations);const Gt={...ge,...Qe,...Ze};function Yt(t){t._metadata=t._metadata||{},t._metadata.sdk=t._metadata.sdk||{name:"sentry.javascript.react",packages:[{name:"npm:@sentry/react",version:ie}],version:ie},Oe(t)}const Ut=({message:t,showEventId:e=!0})=>{const n=k.useContext(He);return G(_e,{children:[t||(n==null?void 0:n.error.message),e?h("div",{children:n==null?void 0:n.eventId}):null]})};Yt({integrations:[new Q,new Gt.GlobalHandlers({onerror:!0,onunhandledrejection:!0})]});const Z=({doThrow:t,setShowError:e})=>(k.useEffect(()=>{if(t)throw e(!1),new Error("Test Error")},[t]),null),Ot=()=>{const[t,e]=k.useState(!1);return G(q,{children:[h(Ut,{}),h(Z,{doThrow:t,setShowError:e}),h("button",{onClick:()=>{e(!0)},children:"Throw Error"}),h("button",{onClick:()=>{Promise.reject(Error("Test Error"))},children:"Reject Promise"})]})},Ht=()=>{const[t,e]=k.useState(!1);return G(q,{renderFallback:!0,children:[h(Z,{doThrow:t,setShowError:e}),h("button",{onClick:()=>{e(!0)},children:"Throw Error"}),h("button",{onClick:()=>{Promise.reject(Error("Test Error"))},children:"Reject Promise"})]})},$t=()=>{const[t,e]=k.useState(!1);return G(q,{renderFallback:!0,fallback:n=>G(_e,{children:[h("h2",{children:"This is a custom error fallback"}),h("p",{children:n&&n.error.toString()}),n&&n.resetError?h("button",{onClick:n&&n.resetError,children:"Reset"}):null]}),children:[h(Z,{doThrow:t,setShowError:e}),h("button",{onClick:()=>{e(!0)},children:"Throw Error"}),h("button",{onClick:()=>{Promise.reject(Error("Test Error"))},children:"Reject Promise"})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{$t as FallbackComponent_Custom,Ht as FallbackComponent_Default,Ot as InlineMessages};