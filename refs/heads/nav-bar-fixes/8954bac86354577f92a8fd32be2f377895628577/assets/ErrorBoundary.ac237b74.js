import{r as M,R as Z,a as y,j as ee,F as Re}from"./index.255519ef.js";import{i as be,l as _,g as R,b as Y,u as te,t as U,d as I,D as ve,e as Ne,f as De,G as Ie,h as b,j as P,k as ne,S as Be,s as Ge,m as Ye,n as ie,o as Ue,p as se,w as ke,q as Ae,c as Ce,a as we,E as Oe}from"./Error.ee14c172.js";const He=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function $e(n){const e=n.match(He);if(!n||!e)return;let t;return e[3]==="1"?t=!0:e[3]==="0"&&(t=!1),{traceId:e[1],parentSampled:t,parentSpanId:e[2]}}const x="baggage",pe="sentry-",Me=/^sentry-/,Le=8192;function Fe(n){if(!be(n)&&!Array.isArray(n))return;let e={};if(Array.isArray(n))e=n.reduce((i,s)=>{const o=ae(s);return{...i,...o}},{});else{if(!n)return;e=ae(n)}const t=Object.entries(e).reduce((i,[s,o])=>{if(s.match(Me)){const a=s.slice(pe.length);i[a]=o}return i},{});if(Object.keys(t).length>0)return t}function fe(n){const e=Object.entries(n).reduce((t,[i,s])=>(s&&(t[`${pe}${i}`]=s),t),{});return Pe(e)}function ae(n){return n.split(",").map(e=>e.split("=").map(t=>decodeURIComponent(t.trim()))).reduce((e,[t,i])=>(e[t]=i,e),{})}function Pe(n){if(Object.keys(n).length!==0)return Object.entries(n).reduce((e,[t,i],s)=>{const o=`${encodeURIComponent(t)}=${encodeURIComponent(i)}`,a=s===0?o:`${e},${o}`;return a.length>Le?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn(`Not adding key: ${t} with val: ${i} to baggage header due to exceeding baggage size limits.`),e):a},"")}function W(n){if(typeof __SENTRY_TRACING__=="boolean"&&!__SENTRY_TRACING__)return!1;const e=R().getClient(),t=n||e&&e.getOptions();return!!t&&(t.enableTracing||"tracesSampleRate"in t||"tracesSampler"in t)}function k(n){return(n||R()).getScope().getTransaction()}let re=!1;function xe(){re||(re=!0,Y("error",j),Y("unhandledrejection",j))}function j(){const n=k();if(n){const e="internal_error";(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] Transaction: ${e} -> Global error occured`),n.setStatus(e)}}j.tag="sentry_tracingErrorCallback";class H{__init(){this.spans=[]}constructor(e=1e3){H.prototype.__init.call(this),this._maxlen=e}add(e){this.spans.length>this._maxlen?e.spanRecorder=void 0:this.spans.push(e)}}class T{__init2(){this.traceId=te()}__init3(){this.spanId=te().substring(16)}__init4(){this.startTimestamp=U()}__init5(){this.tags={}}__init6(){this.data={}}__init7(){this.instrumenter="sentry"}constructor(e){if(T.prototype.__init2.call(this),T.prototype.__init3.call(this),T.prototype.__init4.call(this),T.prototype.__init5.call(this),T.prototype.__init6.call(this),T.prototype.__init7.call(this),!e)return this;e.traceId&&(this.traceId=e.traceId),e.spanId&&(this.spanId=e.spanId),e.parentSpanId&&(this.parentSpanId=e.parentSpanId),"sampled"in e&&(this.sampled=e.sampled),e.op&&(this.op=e.op),e.description&&(this.description=e.description),e.data&&(this.data=e.data),e.tags&&(this.tags=e.tags),e.status&&(this.status=e.status),e.startTimestamp&&(this.startTimestamp=e.startTimestamp),e.endTimestamp&&(this.endTimestamp=e.endTimestamp),e.instrumenter&&(this.instrumenter=e.instrumenter)}startChild(e){const t=new T({...e,parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId});if(t.spanRecorder=this.spanRecorder,t.spanRecorder&&t.spanRecorder.add(t),t.transaction=this.transaction,(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&t.transaction){const i=e&&e.op||"< unknown op >",s=t.transaction.name||"< unknown name >",o=t.transaction.spanId,a=`[Tracing] Starting '${i}' span on transaction '${s}' (${o}).`;t.transaction.metadata.spanMetadata[t.spanId]={logMessage:a},_.log(a)}return t}setTag(e,t){return this.tags={...this.tags,[e]:t},this}setData(e,t){return this.data={...this.data,[e]:t},this}setStatus(e){return this.status=e,this}setHttpStatus(e){this.setTag("http.status_code",String(e));const t=je(e);return t!=="unknown_error"&&this.setStatus(t),this}isSuccess(){return this.status==="ok"}finish(e){if((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&this.transaction&&this.transaction.spanId!==this.spanId){const{logMessage:t}=this.transaction.metadata.spanMetadata[this.spanId];t&&_.log(t.replace("Starting","Finishing"))}this.endTimestamp=typeof e=="number"?e:U()}toTraceparent(){let e="";return this.sampled!==void 0&&(e=this.sampled?"-1":"-0"),`${this.traceId}-${this.spanId}${e}`}toContext(){return I({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})}updateWithContext(e){return this.data=e.data||{},this.description=e.description,this.endTimestamp=e.endTimestamp,this.op=e.op,this.parentSpanId=e.parentSpanId,this.sampled=e.sampled,this.spanId=e.spanId||this.spanId,this.startTimestamp=e.startTimestamp||this.startTimestamp,this.status=e.status,this.tags=e.tags||{},this.traceId=e.traceId||this.traceId,this}getTraceContext(){return I({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})}toJSON(){return I({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})}}function je(n){if(n<400&&n>=100)return"ok";if(n>=400&&n<500)switch(n){case 401:return"unauthenticated";case 403:return"permission_denied";case 404:return"not_found";case 409:return"already_exists";case 413:return"failed_precondition";case 429:return"resource_exhausted";default:return"invalid_argument"}if(n>=500&&n<600)switch(n){case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline_exceeded";default:return"internal_error"}return"unknown_error"}class N extends T{__init(){this._measurements={}}__init2(){this._contexts={}}__init3(){this._frozenDynamicSamplingContext=void 0}constructor(e,t){super(e),N.prototype.__init.call(this),N.prototype.__init2.call(this),N.prototype.__init3.call(this),this._hub=t||R(),this._name=e.name||"",this.metadata={source:"custom",...e.metadata,spanMetadata:{}},this._trimEnd=e.trimEnd,this.transaction=this;const i=this.metadata.dynamicSamplingContext;i&&(this._frozenDynamicSamplingContext={...i})}get name(){return this._name}set name(e){this.setName(e)}setName(e,t="custom"){this._name=e,this.metadata.source=t}initSpanRecorder(e=1e3){this.spanRecorder||(this.spanRecorder=new H(e)),this.spanRecorder.add(this)}setContext(e,t){t===null?delete this._contexts[e]:this._contexts[e]=t}setMeasurement(e,t,i=""){this._measurements[e]={value:t,unit:i}}setMetadata(e){this.metadata={...this.metadata,...e}}finish(e){if(this.endTimestamp!==void 0)return;this.name||((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),super.finish(e);const t=this._hub.getClient();if(t&&t.emit&&t.emit("finishTransaction",this),this.sampled!==!0){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),t&&t.recordDroppedEvent("sample_rate","transaction");return}const i=this.spanRecorder?this.spanRecorder.spans.filter(r=>r!==this&&r.endTimestamp):[];this._trimEnd&&i.length>0&&(this.endTimestamp=i.reduce((r,c)=>r.endTimestamp&&c.endTimestamp?r.endTimestamp>c.endTimestamp?r:c:r).endTimestamp);const s=this.metadata,o={contexts:{...this._contexts,trace:this.getTraceContext()},spans:i,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:{...s,dynamicSamplingContext:this.getDynamicSamplingContext()},...s.source&&{transaction_info:{source:s.source}}};return Object.keys(this._measurements).length>0&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),o.measurements=this._measurements),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),this._hub.captureEvent(o)}toContext(){const e=super.toContext();return I({...e,name:this.name,trimEnd:this._trimEnd})}updateWithContext(e){return super.updateWithContext(e),this.name=e.name||"",this._trimEnd=e.trimEnd,this}getDynamicSamplingContext(){if(this._frozenDynamicSamplingContext)return this._frozenDynamicSamplingContext;const e=this._hub||R(),t=e&&e.getClient();if(!t)return{};const{environment:i,release:s}=t.getOptions()||{},{publicKey:o}=t.getDsn()||{},a=this.metadata.sampleRate,r=a!==void 0?a.toString():void 0,{segment:c}=e.getScope().getUser()||{},d=this.metadata.source,u=d&&d!=="url"?this.name:void 0,h=I({environment:i||ve,release:s,transaction:u,user_segment:c,public_key:o,trace_id:this.traceId,sample_rate:r});return t.emit&&t.emit("createDsc",h),h}setHub(e){this._hub=e}}const w={idleTimeout:1e3,finalTimeout:3e4,heartbeatInterval:5e3},qe="finishReason",v=["heartbeatFailed","idleTimeout","documentHidden","finalTimeout","externalFinish","cancelled"];class ze extends H{constructor(e,t,i,s){super(s),this._pushActivity=e,this._popActivity=t,this.transactionSpanId=i}add(e){e.spanId!==this.transactionSpanId&&(e.finish=t=>{e.endTimestamp=typeof t=="number"?t:U(),this._popActivity(e.spanId)},e.endTimestamp===void 0&&this._pushActivity(e.spanId)),super.add(e)}}class E extends N{__init(){this.activities={}}__init2(){this._heartbeatCounter=0}__init3(){this._finished=!1}__init4(){this._idleTimeoutCanceledPermanently=!1}__init5(){this._beforeFinishCallbacks=[]}__init6(){this._finishReason=v[4]}constructor(e,t,i=w.idleTimeout,s=w.finalTimeout,o=w.heartbeatInterval,a=!1){super(e,t),this._idleHub=t,this._idleTimeout=i,this._finalTimeout=s,this._heartbeatInterval=o,this._onScope=a,E.prototype.__init.call(this),E.prototype.__init2.call(this),E.prototype.__init3.call(this),E.prototype.__init4.call(this),E.prototype.__init5.call(this),E.prototype.__init6.call(this),a&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),t.configureScope(r=>r.setSpan(this))),this._restartIdleTimeout(),setTimeout(()=>{this._finished||(this.setStatus("deadline_exceeded"),this._finishReason=v[3],this.finish())},this._finalTimeout)}finish(e=U()){if(this._finished=!0,this.activities={},this.op==="ui.action.click"&&this.setTag(qe,this._finishReason),this.spanRecorder){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Tracing] finishing IdleTransaction",new Date(e*1e3).toISOString(),this.op);for(const t of this._beforeFinishCallbacks)t(this,e);this.spanRecorder.spans=this.spanRecorder.spans.filter(t=>{if(t.spanId===this.spanId)return!0;t.endTimestamp||(t.endTimestamp=e,t.setStatus("cancelled"),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(t,void 0,2)));const i=t.startTimestamp<e;return i||(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(t,void 0,2)),i}),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Tracing] flushing IdleTransaction")}else(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Tracing] No active IdleTransaction");if(this._onScope){const t=this._idleHub.getScope();t.getTransaction()===this&&t.setSpan(void 0)}return super.finish(e)}registerBeforeFinishCallback(e){this._beforeFinishCallbacks.push(e)}initSpanRecorder(e){if(!this.spanRecorder){const t=s=>{this._finished||this._pushActivity(s)},i=s=>{this._finished||this._popActivity(s)};this.spanRecorder=new ze(t,i,this.spanId,e),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("Starting heartbeat"),this._pingHeartbeat()}this.spanRecorder.add(this)}cancelIdleTimeout(e,{restartOnChildSpanChange:t}={restartOnChildSpanChange:!0}){this._idleTimeoutCanceledPermanently=t===!1,this._idleTimeoutID&&(clearTimeout(this._idleTimeoutID),this._idleTimeoutID=void 0,Object.keys(this.activities).length===0&&this._idleTimeoutCanceledPermanently&&(this._finishReason=v[5],this.finish(e)))}setFinishReason(e){this._finishReason=e}_restartIdleTimeout(e){this.cancelIdleTimeout(),this._idleTimeoutID=setTimeout(()=>{!this._finished&&Object.keys(this.activities).length===0&&(this._finishReason=v[1],this.finish(e))},this._idleTimeout)}_pushActivity(e){this.cancelIdleTimeout(void 0,{restartOnChildSpanChange:!this._idleTimeoutCanceledPermanently}),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] pushActivity: ${e}`),this.activities[e]=!0,(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Tracing] new activities count",Object.keys(this.activities).length)}_popActivity(e){if(this.activities[e]&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] popActivity ${e}`),delete this.activities[e],(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Tracing] new activities count",Object.keys(this.activities).length)),Object.keys(this.activities).length===0){const t=U();this._idleTimeoutCanceledPermanently?(this._finishReason=v[5],this.finish(t)):this._restartIdleTimeout(t+this._idleTimeout/1e3)}}_beat(){if(this._finished)return;const e=Object.keys(this.activities).join("");e===this._prevHeartbeatString?this._heartbeatCounter++:this._heartbeatCounter=1,this._prevHeartbeatString=e,this._heartbeatCounter>=3?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this._finishReason=v[0],this.finish()):this._pingHeartbeat()}_pingHeartbeat(){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),setTimeout(()=>{this._beat()},this._heartbeatInterval)}}function We(){const e=this.getScope().getSpan();return e?{"sentry-trace":e.toTraceparent()}:{}}function he(n,e,t){if(!W(e))return n.sampled=!1,n;if(n.sampled!==void 0)return n.setMetadata({sampleRate:Number(n.sampled)}),n;let i;return typeof e.tracesSampler=="function"?(i=e.tracesSampler(t),n.setMetadata({sampleRate:Number(i)})):t.parentSampled!==void 0?i=t.parentSampled:typeof e.tracesSampleRate<"u"?(i=e.tracesSampleRate,n.setMetadata({sampleRate:Number(i)})):(i=1,n.setMetadata({sampleRate:i})),Ve(i)?i?(n.sampled=Math.random()<i,n.sampled?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] starting ${n.op} transaction - ${n.name}`),n):((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`),n)):((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler=="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),n.sampled=!1,n):((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn("[Tracing] Discarding transaction because of invalid sample rate."),n.sampled=!1,n)}function Ve(n){return De(n)||!(typeof n=="number"||typeof n=="boolean")?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(n)} of type ${JSON.stringify(typeof n)}.`),!1):n<0||n>1?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${n}.`),!1):!0}function Xe(n,e){const t=this.getClient(),i=t&&t.getOptions()||{},s=i.instrumenter||"sentry",o=n.instrumenter||"sentry";s!==o&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${s}\` instrumenter.
The transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`),n.sampled=!1);let a=new N(n,this);return a=he(a,i,{parentSampled:n.parentSampled,transactionContext:n,...e}),a.sampled&&a.initSpanRecorder(i._experiments&&i._experiments.maxSpans),t&&t.emit&&t.emit("startTransaction",a),a}function oe(n,e,t,i,s,o,a){const r=n.getClient(),c=r&&r.getOptions()||{};let d=new E(e,n,t,i,a,s);return d=he(d,c,{parentSampled:e.parentSampled,transactionContext:e,...o}),d.sampled&&d.initSpanRecorder(c._experiments&&c._experiments.maxSpans),r&&r.emit&&r.emit("startTransaction",d),d}function Je(){const n=Ne();!n.__SENTRY__||(n.__SENTRY__.extensions=n.__SENTRY__.extensions||{},n.__SENTRY__.extensions.startTransaction||(n.__SENTRY__.extensions.startTransaction=Xe),n.__SENTRY__.extensions.traceHeaders||(n.__SENTRY__.extensions.traceHeaders=We),xe())}const l=Ie;function Ke(){l&&l.document?l.document.addEventListener("visibilitychange",()=>{const n=k();if(l.document.hidden&&n){const e="cancelled";(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n.op}`),n.status||n.setStatus(e),n.setTag("visibilitychange","document.hidden"),n.finish()}}):(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn("[Tracing] Could not set up background tab detection due to lack of window document")}const V=(n,e,t)=>{let i,s;return o=>{e.value>=0&&(o||t)&&(s=e.value-(i||0),(s||i===void 0)&&(i=e.value,e.delta=s,n(e)))}},Qe=()=>`v3-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,Ze=()=>{const n=l.performance.timing,e=l.performance.navigation.type,t={entryType:"navigation",startTime:0,type:e==2?"back_forward":e===1?"reload":"navigate"};for(const i in n)i!=="navigationStart"&&i!=="toJSON"&&(t[i]=Math.max(n[i]-n.navigationStart,0));return t},me=()=>l.__WEB_VITALS_POLYFILL__?l.performance&&(performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]||Ze()):l.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],ge=()=>{const n=me();return n&&n.activationStart||0},X=(n,e)=>{const t=me();let i="navigate";return t&&(l.document.prerendering||ge()>0?i="prerender":i=t.type.replace(/_/g,"-")),{name:n,value:typeof e>"u"?-1:e,rating:"good",delta:0,entries:[],id:Qe(),navigationType:i}},A=(n,e,t)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(n)){const i=new PerformanceObserver(s=>{e(s.getEntries())});return i.observe(Object.assign({type:n,buffered:!0},t||{})),i}}catch{}},$=(n,e)=>{const t=i=>{(i.type==="pagehide"||l.document.visibilityState==="hidden")&&(n(i),e&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},et=n=>{const e=X("CLS",0);let t,i=0,s=[];const o=r=>{r.forEach(c=>{if(!c.hadRecentInput){const d=s[0],u=s[s.length-1];i&&s.length!==0&&c.startTime-u.startTime<1e3&&c.startTime-d.startTime<5e3?(i+=c.value,s.push(c)):(i=c.value,s=[c]),i>e.value&&(e.value=i,e.entries=s,t&&t())}})},a=A("layout-shift",o);if(a){t=V(n,e);const r=()=>{o(a.takeRecords()),t(!0)};return $(r),r}};let O=-1;const tt=()=>l.document.visibilityState==="hidden"&&!l.document.prerendering?0:1/0,nt=()=>{$(({timeStamp:n})=>{O=n},!0)},J=()=>(O<0&&(O=tt(),nt()),{get firstHiddenTime(){return O}}),it=n=>{const e=J(),t=X("FID");let i;const s=r=>{r.startTime<e.firstHiddenTime&&(t.value=r.processingStart-r.startTime,t.entries.push(r),i(!0))},o=r=>{r.forEach(s)},a=A("first-input",o);i=V(n,t),a&&$(()=>{o(a.takeRecords()),a.disconnect()},!0)},ce={},st=n=>{const e=J(),t=X("LCP");let i;const s=a=>{const r=a[a.length-1];if(r){const c=Math.max(r.startTime-ge(),0);c<e.firstHiddenTime&&(t.value=c,t.entries=[r],i())}},o=A("largest-contentful-paint",s);if(o){i=V(n,t);const a=()=>{ce[t.id]||(s(o.takeRecords()),o.disconnect(),ce[t.id]=!0,i(!0))};return["keydown","click"].forEach(r=>{addEventListener(r,a,{once:!0,capture:!0})}),$(a,!0),a}};function L(n){return typeof n=="number"&&isFinite(n)}function D(n,{startTimestamp:e,...t}){return e&&n.startTimestamp>e&&(n.startTimestamp=e),n.startChild({startTimestamp:e,...t})}function f(n){return n/1e3}function Te(){return l&&l.addEventListener&&l.performance}let de=0,p={},g,B;function at(){const n=Te();if(n&&b){n.mark&&l.performance.mark("sentry-tracing-init"),_t();const e=ct(),t=dt();return()=>{e&&e(),t&&t()}}return()=>{}}function rt(){A("longtask",e=>{for(const t of e){const i=k();if(!i)return;const s=f(b+t.startTime),o=f(t.duration);i.startChild({description:"Main UI thread blocked",op:"ui.long-task",startTimestamp:s,endTimestamp:s+o})}})}function ot(){A("event",e=>{for(const t of e){const i=k();if(!i)return;if(t.name==="click"){const s=f(b+t.startTime),o=f(t.duration);i.startChild({description:P(t.target),op:`ui.interaction.${t.name}`,startTimestamp:s,endTimestamp:s+o})}}},{durationThreshold:0})}function ct(){return et(n=>{const e=n.entries.pop();!e||((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Measurements] Adding CLS"),p.cls={value:n.value,unit:""},B=e)})}function dt(){return st(n=>{const e=n.entries.pop();!e||((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Measurements] Adding LCP"),p.lcp={value:n.value,unit:"millisecond"},g=e)})}function _t(){it(n=>{const e=n.entries.pop();if(!e)return;const t=f(b),i=f(e.startTime);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Measurements] Adding FID"),p.fid={value:n.value,unit:"millisecond"},p["mark.fid"]={value:t+i,unit:"second"}})}function ut(n){const e=Te();if(!e||!l.performance.getEntries||!b)return;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Tracing] Adding & adjusting spans using Performance API");const t=f(b),i=e.getEntries();let s,o;if(i.slice(de).forEach(a=>{const r=f(a.startTime),c=f(a.duration);if(!(n.op==="navigation"&&t+r<n.startTimestamp))switch(a.entryType){case"navigation":{pt(n,a,t),s=t+f(a.responseStart),o=t+f(a.requestStart);break}case"mark":case"paint":case"measure":{lt(n,a,r,c,t);const d=J(),u=a.startTime<d.firstHiddenTime;a.name==="first-paint"&&u&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Measurements] Adding FP"),p.fp={value:a.startTime,unit:"millisecond"}),a.name==="first-contentful-paint"&&u&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Measurements] Adding FCP"),p.fcp={value:a.startTime,unit:"millisecond"});break}case"resource":{const d=a.name.replace(l.location.origin,"");ht(n,a,d,r,c,t);break}}}),de=Math.max(i.length-1,0),mt(n),n.op==="pageload"){typeof s=="number"&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Measurements] Adding TTFB"),p.ttfb={value:(s-n.startTimestamp)*1e3,unit:"millisecond"},typeof o=="number"&&o<=s&&(p["ttfb.requestTime"]={value:(s-o)*1e3,unit:"millisecond"})),["fcp","fp","lcp"].forEach(r=>{if(!p[r]||t>=n.startTimestamp)return;const c=p[r].value,d=t+f(c),u=Math.abs((d-n.startTimestamp)*1e3),h=u-c;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Measurements] Normalized ${r} from ${c} to ${u} (${h})`),p[r].value=u});const a=p["mark.fid"];a&&p.fid&&(D(n,{description:"first input delay",endTimestamp:a.value+f(p.fid.value),op:"ui.action",startTimestamp:a.value}),delete p["mark.fid"]),"fcp"in p||delete p.cls,Object.keys(p).forEach(r=>{n.setMeasurement(r,p[r].value,p[r].unit)}),gt(n)}g=void 0,B=void 0,p={}}function lt(n,e,t,i,s){const o=s+t,a=o+i;return D(n,{description:e.name,endTimestamp:a,op:e.entryType,startTimestamp:o}),o}function pt(n,e,t){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach(i=>{C(n,e,i,t)}),C(n,e,"secureConnection",t,"TLS/SSL","connectEnd"),C(n,e,"fetch",t,"cache","domainLookupStart"),C(n,e,"domainLookup",t,"DNS"),ft(n,e,t)}function C(n,e,t,i,s,o){const a=o?e[o]:e[`${t}End`],r=e[`${t}Start`];!r||!a||D(n,{op:"browser",description:s||t,startTimestamp:i+f(r),endTimestamp:i+f(a)})}function ft(n,e,t){D(n,{op:"browser",description:"request",startTimestamp:t+f(e.requestStart),endTimestamp:t+f(e.responseEnd)}),D(n,{op:"browser",description:"response",startTimestamp:t+f(e.responseStart),endTimestamp:t+f(e.responseEnd)})}function ht(n,e,t,i,s,o){if(e.initiatorType==="xmlhttprequest"||e.initiatorType==="fetch")return;const a={};"transferSize"in e&&(a["Transfer Size"]=e.transferSize),"encodedBodySize"in e&&(a["Encoded Body Size"]=e.encodedBodySize),"decodedBodySize"in e&&(a["Decoded Body Size"]=e.decodedBodySize),"renderBlockingStatus"in e&&(a["resource.render_blocking_status"]=e.renderBlockingStatus);const r=o+i,c=r+s;D(n,{description:t,endTimestamp:c,op:e.initiatorType?`resource.${e.initiatorType}`:"resource.other",startTimestamp:r,data:a})}function mt(n){const e=l.navigator;if(!e)return;const t=e.connection;t&&(t.effectiveType&&n.setTag("effectiveConnectionType",t.effectiveType),t.type&&n.setTag("connectionType",t.type),L(t.rtt)&&(p["connection.rtt"]={value:t.rtt,unit:"millisecond"})),L(e.deviceMemory)&&n.setTag("deviceMemory",`${e.deviceMemory} GB`),L(e.hardwareConcurrency)&&n.setTag("hardwareConcurrency",String(e.hardwareConcurrency))}function gt(n){g&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Measurements] Adding LCP Data"),g.element&&n.setTag("lcp.element",P(g.element)),g.id&&n.setTag("lcp.id",g.id),g.url&&n.setTag("lcp.url",g.url.trim().slice(0,200)),n.setTag("lcp.size",g.size)),B&&B.sources&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log("[Measurements] Adding CLS Data"),B.sources.forEach((e,t)=>n.setTag(`cls.source.${t+1}`,P(e.node))))}const q=["localhost",/^\//],z={traceFetch:!0,traceXHR:!0,tracingOrigins:q,tracePropagationTargets:q};function Tt(n){const{traceFetch:e,traceXHR:t,tracePropagationTargets:i,tracingOrigins:s,shouldCreateSpanForRequest:o}={traceFetch:z.traceFetch,traceXHR:z.traceXHR,...n},a=typeof o=="function"?o:d=>!0,r=d=>Et(d,i||s),c={};e&&Y("fetch",d=>{St(d,a,r,c)}),t&&Y("xhr",d=>{Rt(d,a,r,c)})}function Et(n,e){return Ge(n,e||q)}function St(n,e,t,i){if(!W()||!(n.fetchData&&e(n.fetchData.url)))return;if(n.endTimestamp){const r=n.fetchData.__span;if(!r)return;const c=i[r];c&&(n.response?c.setHttpStatus(n.response.status):n.error&&c.setStatus("internal_error"),c.finish(),delete i[r]);return}const s=R().getScope(),o=s&&s.getSpan(),a=o&&o.transaction;if(o&&a){const r=o.startChild({data:{...n.fetchData,type:"fetch"},description:`${n.fetchData.method} ${n.fetchData.url}`,op:"http.client"});n.fetchData.__span=r.spanId,i[r.spanId]=r;const c=n.args[0];n.args[1]=n.args[1]||{};const d=n.args[1];t(n.fetchData.url)&&(d.headers=yt(c,a.getDynamicSamplingContext(),r,d))}}function yt(n,e,t,i){const s=fe(e),o=t.toTraceparent(),a=typeof Request<"u"&&ne(n,Request)?n.headers:i.headers;if(a)if(typeof Headers<"u"&&ne(a,Headers)){const r=new Headers(a);return r.append("sentry-trace",o),s&&r.append(x,s),r}else if(Array.isArray(a)){const r=[...a,["sentry-trace",o]];return s&&r.push([x,s]),r}else{const r="baggage"in a?a.baggage:void 0,c=[];return Array.isArray(r)?c.push(...r):r&&c.push(r),s&&c.push(s),{...a,"sentry-trace":o,baggage:c.length>0?c.join(","):void 0}}else return{"sentry-trace":o,baggage:s}}function Rt(n,e,t,i){const s=n.xhr,o=s&&s[Be];if(!W()||s&&s.__sentry_own_request__||!(s&&o&&e(o.url)))return;if(n.endTimestamp){const d=s.__sentry_xhr_span_id__;if(!d)return;const u=i[d];u&&(u.setHttpStatus(o.status_code),u.finish(),delete i[d]);return}const a=R().getScope(),r=a&&a.getSpan(),c=r&&r.transaction;if(r&&c){const d=r.startChild({data:{...o.data,type:"xhr",method:o.method,url:o.url},description:`${o.method} ${o.url}`,op:"http.client"});if(s.__sentry_xhr_span_id__=d.spanId,i[s.__sentry_xhr_span_id__]=d,s.setRequestHeader&&t(o.url))try{s.setRequestHeader("sentry-trace",d.toTraceparent());const u=c.getDynamicSamplingContext(),h=fe(u);h&&s.setRequestHeader(x,h)}catch{}}}function bt(n,e=!0,t=!0){if(!l||!l.location){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn("Could not initialize routing instrumentation due to invalid location");return}let i=l.location.href,s;e&&(s=n({name:l.location.pathname,startTimestamp:b,op:"pageload",metadata:{source:"url"}})),t&&Y("history",({to:o,from:a})=>{if(a===void 0&&i&&i.indexOf(o)!==-1){i=void 0;return}a!==o&&(i=void 0,s&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] Finishing current transaction with op: ${s.op}`),s.finish()),s=n({name:l.location.pathname,op:"navigation",metadata:{source:"url"}}))})}const vt="BrowserTracing",Nt={...w,markBackgroundTransactions:!0,routingInstrumentation:bt,startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,enableLongTask:!0,_experiments:{},...z};class K{__init(){this.name=vt}constructor(e){K.prototype.__init.call(this),Je(),this.options={...Nt,...e},this.options._experiments.enableLongTask!==void 0&&(this.options.enableLongTask=this.options._experiments.enableLongTask),e&&!e.tracePropagationTargets&&e.tracingOrigins&&(this.options.tracePropagationTargets=e.tracingOrigins),this._collectWebVitals=at(),this.options.enableLongTask&&rt(),this.options._experiments.enableInteractions&&ot()}setupOnce(e,t){this._getCurrentHub=t;const{routingInstrumentation:i,startTransactionOnLocationChange:s,startTransactionOnPageLoad:o,markBackgroundTransactions:a,traceFetch:r,traceXHR:c,tracePropagationTargets:d,shouldCreateSpanForRequest:u,_experiments:h}=this.options;i(S=>{const m=this._createRouteTransaction(S);return this.options._experiments.onStartRouteTransaction&&this.options._experiments.onStartRouteTransaction(m,S,t),m},o,s),a&&Ke(),h.enableInteractions&&this._registerInteractionListener(),Tt({traceFetch:r,traceXHR:c,tracePropagationTargets:d,shouldCreateSpanForRequest:u})}_createRouteTransaction(e){if(!this._getCurrentHub){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`);return}const{beforeNavigate:t,idleTimeout:i,finalTimeout:s,heartbeatInterval:o}=this.options,a=e.op==="pageload",r=a?_e("sentry-trace"):null,c=a?_e("baggage"):null,d=r?$e(r):void 0,u=c?Fe(c):void 0,h={...e,...d,metadata:{...e.metadata,dynamicSamplingContext:d&&!u?{}:u},trimEnd:!0},S=typeof t=="function"?t(h):h,m=S===void 0?{...h,sampled:!1}:S;m.metadata=m.name!==h.name?{...m.metadata,source:"custom"}:m.metadata,this._latestRouteName=m.name,this._latestRouteSource=m.metadata&&m.metadata.source,m.sampled===!1&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] Will not send ${m.op} transaction because of beforeNavigate.`),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.log(`[Tracing] Starting ${m.op} transaction on scope`);const Ee=this._getCurrentHub(),{location:Se}=l,Q=oe(Ee,m,i,s,!0,{location:Se},o);return Q.registerBeforeFinishCallback(ye=>{this._collectWebVitals(),ut(ye)}),Q}_registerInteractionListener(){let e;const t=()=>{const{idleTimeout:i,finalTimeout:s,heartbeatInterval:o}=this.options,a="ui.action.click",r=k();if(r&&r.op&&["navigation","pageload"].includes(r.op)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn(`[Tracing] Did not create ${a} transaction because a pageload or navigation transaction is in progress.`);return}if(e&&(e.setFinishReason("interactionInterrupted"),e.finish(),e=void 0),!this._getCurrentHub){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn(`[Tracing] Did not create ${a} transaction because _getCurrentHub is invalid.`);return}if(!this._latestRouteName){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn(`[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`);return}const c=this._getCurrentHub(),{location:d}=l,u={name:this._latestRouteName,op:a,trimEnd:!0,metadata:{source:this._latestRouteSource||"url"}};e=oe(c,u,i,s,!0,{location:d},o)};["click"].forEach(i=>{addEventListener(i,t,{once:!1,capture:!0})})}}function _e(n){const e=Ye(`meta[name=${n}]`);return e?e.getAttribute("content"):null}function Dt(n){n._metadata=n._metadata||{},n._metadata.sdk=n._metadata.sdk||{name:"sentry.javascript.react",packages:[{name:"npm:@sentry/react",version:ie}],version:ie},Ue(n)}function It(n){const e=n.match(/^([^.]+)/);return e!==null&&parseInt(e[0])>=17}const ue={componentStack:null,error:null,eventId:null};function Bt(n,e){const t=new WeakMap;function i(s,o){if(!t.has(s)){if(s.cause)return t.set(s,!0),i(s.cause,o);s.cause=o}}i(n,e)}class G extends M.exports.Component{__init(){this.state=ue}__init2(){this._openFallbackReportDialog=!0}constructor(e){super(e),G.prototype.__init.call(this),G.prototype.__init2.call(this),G.prototype.__init3.call(this);const t=R().getClient();t&&t.on&&e.showDialog&&(this._openFallbackReportDialog=!1,t.on("afterSendEvent",i=>{!i.type&&i.event_id===this._lastEventId&&se({...e.dialogOptions,eventId:this._lastEventId})}))}componentDidCatch(e,{componentStack:t}){const{beforeCapture:i,onError:s,showDialog:o,dialogOptions:a}=this.props;ke(r=>{if(It(M.exports.version)&&Ae(e)){const d=new Error(e.message);d.name=`React ErrorBoundary ${d.name}`,d.stack=t,Bt(e,d)}i&&i(r,e,t);const c=Ce(e,{contexts:{react:{componentStack:t}}});s&&s(e,t,c),o&&(this._lastEventId=c,this._openFallbackReportDialog&&se({...a,eventId:c})),this.setState({error:e,componentStack:t,eventId:c})})}componentDidMount(){const{onMount:e}=this.props;e&&e()}componentWillUnmount(){const{error:e,componentStack:t,eventId:i}=this.state,{onUnmount:s}=this.props;s&&s(e,t,i)}__init3(){this.resetErrorBoundary=()=>{const{onReset:e}=this.props,{error:t,componentStack:i,eventId:s}=this.state;e&&e(t,i,s),this.setState(ue)}}render(){const{fallback:e,children:t}=this.props,i=this.state;if(i.error){let s;return typeof e=="function"?s=e({error:i.error,componentStack:i.componentStack,resetError:this.resetErrorBoundary,eventId:i.eventId}):s=e,M.exports.isValidElement(s)?s:(e&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&_.warn("fallback did not produce a valid ReactElement"),null)}return typeof t=="function"?t():t}}const Gt=n=>{if(!n)return;const{TYPE:e,name:t}=n.constructor;return e&&typeof e=="string"?e:t},F=({children:n,...e})=>y(Oe,{"data-testid":"error-fallback",...e,children:n}),le={generic:y(F,{"data-testid":"error-fallback"}),SessionExpiredError:ee(F,{heading:"Your session has expired",children:["Please refresh your browser and try again. If this doesn't solve the problem, visit our ",y("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]}),UnauthorizedError:ee(F,{heading:"Uh-oh, it seems you can't access this page.",children:["You may not have the required permissions or may have been logged out. Try refreshing the page or restarting your browser. If the issue persists, visit our ",y("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]})},kt=({children:n,renderFallback:e,fallback:t=le.generic,sentryDsn:i,sentryInit:s,...o})=>{const[a,r]=Z.useState(null),c={...le,...o.errorFallbacks},d=a!=null&&a.type?c[a.type]:void 0,u=a&&e?d||t:y(Re,{children:n});return Z.useEffect(()=>{!i&&!s||Dt(s||{dsn:i,environment:window.location.hostname,integrations:[new K]})},[]),y(we.Provider,{value:{error:a,setError:r},children:y(G,{fallback:u,onError:(h,S,m)=>{r({error:h,type:Gt(h),componentStack:S,eventId:m})},...o,onReset:()=>r(null),children:u})})};export{kt as E,Gt as g};
