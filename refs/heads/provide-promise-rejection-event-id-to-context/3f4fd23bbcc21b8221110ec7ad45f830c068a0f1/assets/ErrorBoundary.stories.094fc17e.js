import{r as K,R as E,a as _,j as v,F as ae}from"./index.763c57a4.js";import{i as Ae,l as u,g as D,a as A,u as fe,t as O,d as U,D as Oe,b as He,c as Pe,G as $e,e as I,h as ee,f as pe,S as Fe,s as Me,j as xe,k as he,m as Le,n as me,w as je,o as ze,p as qe,q as De,E as We}from"./Error.3ee09ddf.js";import"./theme.2edce5fc.js";import"./palette.15e4d008.js";const Ve=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function Xe(n){const e=n.match(Ve);if(!n||!e)return;let t;return e[3]==="1"?t=!0:e[3]==="0"&&(t=!1),{traceId:e[1],parentSampled:t,parentSpanId:e[2]}}const te="baggage",Ie="sentry-",Je=/^sentry-/,Ke=8192;function Qe(n){if(!Ae(n)&&!Array.isArray(n))return;let e={};if(Array.isArray(n))e=n.reduce((i,s)=>{const o=ge(s);return{...i,...o}},{});else{if(!n)return;e=ge(n)}const t=Object.entries(e).reduce((i,[s,o])=>{if(s.match(Je)){const r=s.slice(Ie.length);i[r]=o}return i},{});if(Object.keys(t).length>0)return t}function Be(n){const e=Object.entries(n).reduce((t,[i,s])=>(s&&(t[`${Ie}${i}`]=s),t),{});return Ze(e)}function ge(n){return n.split(",").map(e=>e.split("=").map(t=>decodeURIComponent(t.trim()))).reduce((e,[t,i])=>(e[t]=i,e),{})}function Ze(n){if(Object.keys(n).length!==0)return Object.entries(n).reduce((e,[t,i],s)=>{const o=`${encodeURIComponent(t)}=${encodeURIComponent(i)}`,r=s===0?o:`${e},${o}`;return r.length>Ke?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn(`Not adding key: ${t} with val: ${i} to baggage header due to exceeding baggage size limits.`),e):r},"")}function oe(n){if(typeof __SENTRY_TRACING__=="boolean"&&!__SENTRY_TRACING__)return!1;const e=D().getClient(),t=n||e&&e.getOptions();return!!t&&(t.enableTracing||"tracesSampleRate"in t||"tracesSampler"in t)}function P(n){return(n||D()).getScope().getTransaction()}let Te=!1;function et(){Te||(Te=!0,A("error",ne),A("unhandledrejection",ne))}function ne(){const n=P();if(n){const e="internal_error";(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] Transaction: ${e} -> Global error occured`),n.setStatus(e)}}ne.tag="sentry_tracingErrorCallback";class W{__init(){this.spans=[]}constructor(e=1e3){W.prototype.__init.call(this),this._maxlen=e}add(e){this.spans.length>this._maxlen?e.spanRecorder=void 0:this.spans.push(e)}}class S{__init2(){this.traceId=fe()}__init3(){this.spanId=fe().substring(16)}__init4(){this.startTimestamp=O()}__init5(){this.tags={}}__init6(){this.data={}}__init7(){this.instrumenter="sentry"}constructor(e){if(S.prototype.__init2.call(this),S.prototype.__init3.call(this),S.prototype.__init4.call(this),S.prototype.__init5.call(this),S.prototype.__init6.call(this),S.prototype.__init7.call(this),!e)return this;e.traceId&&(this.traceId=e.traceId),e.spanId&&(this.spanId=e.spanId),e.parentSpanId&&(this.parentSpanId=e.parentSpanId),"sampled"in e&&(this.sampled=e.sampled),e.op&&(this.op=e.op),e.description&&(this.description=e.description),e.data&&(this.data=e.data),e.tags&&(this.tags=e.tags),e.status&&(this.status=e.status),e.startTimestamp&&(this.startTimestamp=e.startTimestamp),e.endTimestamp&&(this.endTimestamp=e.endTimestamp),e.instrumenter&&(this.instrumenter=e.instrumenter)}startChild(e){const t=new S({...e,parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId});if(t.spanRecorder=this.spanRecorder,t.spanRecorder&&t.spanRecorder.add(t),t.transaction=this.transaction,(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&t.transaction){const i=e&&e.op||"< unknown op >",s=t.transaction.name||"< unknown name >",o=t.transaction.spanId,r=`[Tracing] Starting '${i}' span on transaction '${s}' (${o}).`;t.transaction.metadata.spanMetadata[t.spanId]={logMessage:r},u.log(r)}return t}setTag(e,t){return this.tags={...this.tags,[e]:t},this}setData(e,t){return this.data={...this.data,[e]:t},this}setStatus(e){return this.status=e,this}setHttpStatus(e){this.setTag("http.status_code",String(e));const t=tt(e);return t!=="unknown_error"&&this.setStatus(t),this}isSuccess(){return this.status==="ok"}finish(e){if((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&this.transaction&&this.transaction.spanId!==this.spanId){const{logMessage:t}=this.transaction.metadata.spanMetadata[this.spanId];t&&u.log(t.replace("Starting","Finishing"))}this.endTimestamp=typeof e=="number"?e:O()}toTraceparent(){let e="";return this.sampled!==void 0&&(e=this.sampled?"-1":"-0"),`${this.traceId}-${this.spanId}${e}`}toContext(){return U({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})}updateWithContext(e){return this.data=e.data||{},this.description=e.description,this.endTimestamp=e.endTimestamp,this.op=e.op,this.parentSpanId=e.parentSpanId,this.sampled=e.sampled,this.spanId=e.spanId||this.spanId,this.startTimestamp=e.startTimestamp||this.startTimestamp,this.status=e.status,this.tags=e.tags||{},this.traceId=e.traceId||this.traceId,this}getTraceContext(){return U({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})}toJSON(){return U({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})}}function tt(n){if(n<400&&n>=100)return"ok";if(n>=400&&n<500)switch(n){case 401:return"unauthenticated";case 403:return"permission_denied";case 404:return"not_found";case 409:return"already_exists";case 413:return"failed_precondition";case 429:return"resource_exhausted";default:return"invalid_argument"}if(n>=500&&n<600)switch(n){case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline_exceeded";default:return"internal_error"}return"unknown_error"}class k extends S{__init(){this._measurements={}}__init2(){this._contexts={}}__init3(){this._frozenDynamicSamplingContext=void 0}constructor(e,t){super(e),k.prototype.__init.call(this),k.prototype.__init2.call(this),k.prototype.__init3.call(this),this._hub=t||D(),this._name=e.name||"",this.metadata={source:"custom",...e.metadata,spanMetadata:{}},this._trimEnd=e.trimEnd,this.transaction=this;const i=this.metadata.dynamicSamplingContext;i&&(this._frozenDynamicSamplingContext={...i})}get name(){return this._name}set name(e){this.setName(e)}setName(e,t="custom"){this._name=e,this.metadata.source=t}initSpanRecorder(e=1e3){this.spanRecorder||(this.spanRecorder=new W(e)),this.spanRecorder.add(this)}setContext(e,t){t===null?delete this._contexts[e]:this._contexts[e]=t}setMeasurement(e,t,i=""){this._measurements[e]={value:t,unit:i}}setMetadata(e){this.metadata={...this.metadata,...e}}finish(e){if(this.endTimestamp!==void 0)return;this.name||((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),super.finish(e);const t=this._hub.getClient();if(t&&t.emit&&t.emit("finishTransaction",this),this.sampled!==!0){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),t&&t.recordDroppedEvent("sample_rate","transaction");return}const i=this.spanRecorder?this.spanRecorder.spans.filter(a=>a!==this&&a.endTimestamp):[];this._trimEnd&&i.length>0&&(this.endTimestamp=i.reduce((a,c)=>a.endTimestamp&&c.endTimestamp?a.endTimestamp>c.endTimestamp?a:c:a).endTimestamp);const s=this.metadata,o={contexts:{...this._contexts,trace:this.getTraceContext()},spans:i,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:{...s,dynamicSamplingContext:this.getDynamicSamplingContext()},...s.source&&{transaction_info:{source:s.source}}};return Object.keys(this._measurements).length>0&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),o.measurements=this._measurements),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),this._hub.captureEvent(o)}toContext(){const e=super.toContext();return U({...e,name:this.name,trimEnd:this._trimEnd})}updateWithContext(e){return super.updateWithContext(e),this.name=e.name||"",this._trimEnd=e.trimEnd,this}getDynamicSamplingContext(){if(this._frozenDynamicSamplingContext)return this._frozenDynamicSamplingContext;const e=this._hub||D(),t=e&&e.getClient();if(!t)return{};const{environment:i,release:s}=t.getOptions()||{},{publicKey:o}=t.getDsn()||{},r=this.metadata.sampleRate,a=r!==void 0?r.toString():void 0,{segment:c}=e.getScope().getUser()||{},d=this.metadata.source,f=d&&d!=="url"?this.name:void 0,g=U({environment:i||Oe,release:s,transaction:f,user_segment:c,public_key:o,trace_id:this.traceId,sample_rate:a});return t.emit&&t.emit("createDsc",g),g}setHub(e){this._hub=e}}const M={idleTimeout:1e3,finalTimeout:3e4,heartbeatInterval:5e3},nt="finishReason",G=["heartbeatFailed","idleTimeout","documentHidden","finalTimeout","externalFinish","cancelled"];class it extends W{constructor(e,t,i,s){super(s),this._pushActivity=e,this._popActivity=t,this.transactionSpanId=i}add(e){e.spanId!==this.transactionSpanId&&(e.finish=t=>{e.endTimestamp=typeof t=="number"?t:O(),this._popActivity(e.spanId)},e.endTimestamp===void 0&&this._pushActivity(e.spanId)),super.add(e)}}class b extends k{__init(){this.activities={}}__init2(){this._heartbeatCounter=0}__init3(){this._finished=!1}__init4(){this._idleTimeoutCanceledPermanently=!1}__init5(){this._beforeFinishCallbacks=[]}__init6(){this._finishReason=G[4]}constructor(e,t,i=M.idleTimeout,s=M.finalTimeout,o=M.heartbeatInterval,r=!1){super(e,t),this._idleHub=t,this._idleTimeout=i,this._finalTimeout=s,this._heartbeatInterval=o,this._onScope=r,b.prototype.__init.call(this),b.prototype.__init2.call(this),b.prototype.__init3.call(this),b.prototype.__init4.call(this),b.prototype.__init5.call(this),b.prototype.__init6.call(this),r&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),t.configureScope(a=>a.setSpan(this))),this._restartIdleTimeout(),setTimeout(()=>{this._finished||(this.setStatus("deadline_exceeded"),this._finishReason=G[3],this.finish())},this._finalTimeout)}finish(e=O()){if(this._finished=!0,this.activities={},this.op==="ui.action.click"&&this.setTag(nt,this._finishReason),this.spanRecorder){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Tracing] finishing IdleTransaction",new Date(e*1e3).toISOString(),this.op);for(const t of this._beforeFinishCallbacks)t(this,e);this.spanRecorder.spans=this.spanRecorder.spans.filter(t=>{if(t.spanId===this.spanId)return!0;t.endTimestamp||(t.endTimestamp=e,t.setStatus("cancelled"),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(t,void 0,2)));const i=t.startTimestamp<e;return i||(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(t,void 0,2)),i}),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Tracing] flushing IdleTransaction")}else(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Tracing] No active IdleTransaction");if(this._onScope){const t=this._idleHub.getScope();t.getTransaction()===this&&t.setSpan(void 0)}return super.finish(e)}registerBeforeFinishCallback(e){this._beforeFinishCallbacks.push(e)}initSpanRecorder(e){if(!this.spanRecorder){const t=s=>{this._finished||this._pushActivity(s)},i=s=>{this._finished||this._popActivity(s)};this.spanRecorder=new it(t,i,this.spanId,e),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("Starting heartbeat"),this._pingHeartbeat()}this.spanRecorder.add(this)}cancelIdleTimeout(e,{restartOnChildSpanChange:t}={restartOnChildSpanChange:!0}){this._idleTimeoutCanceledPermanently=t===!1,this._idleTimeoutID&&(clearTimeout(this._idleTimeoutID),this._idleTimeoutID=void 0,Object.keys(this.activities).length===0&&this._idleTimeoutCanceledPermanently&&(this._finishReason=G[5],this.finish(e)))}setFinishReason(e){this._finishReason=e}_restartIdleTimeout(e){this.cancelIdleTimeout(),this._idleTimeoutID=setTimeout(()=>{!this._finished&&Object.keys(this.activities).length===0&&(this._finishReason=G[1],this.finish(e))},this._idleTimeout)}_pushActivity(e){this.cancelIdleTimeout(void 0,{restartOnChildSpanChange:!this._idleTimeoutCanceledPermanently}),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] pushActivity: ${e}`),this.activities[e]=!0,(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Tracing] new activities count",Object.keys(this.activities).length)}_popActivity(e){if(this.activities[e]&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] popActivity ${e}`),delete this.activities[e],(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Tracing] new activities count",Object.keys(this.activities).length)),Object.keys(this.activities).length===0){const t=O();this._idleTimeoutCanceledPermanently?(this._finishReason=G[5],this.finish(t)):this._restartIdleTimeout(t+this._idleTimeout/1e3)}}_beat(){if(this._finished)return;const e=Object.keys(this.activities).join("");e===this._prevHeartbeatString?this._heartbeatCounter++:this._heartbeatCounter=1,this._prevHeartbeatString=e,this._heartbeatCounter>=3?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this._finishReason=G[0],this.finish()):this._pingHeartbeat()}_pingHeartbeat(){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),setTimeout(()=>{this._beat()},this._heartbeatInterval)}}function st(){const e=this.getScope().getSpan();return e?{"sentry-trace":e.toTraceparent()}:{}}function Ge(n,e,t){if(!oe(e))return n.sampled=!1,n;if(n.sampled!==void 0)return n.setMetadata({sampleRate:Number(n.sampled)}),n;let i;return typeof e.tracesSampler=="function"?(i=e.tracesSampler(t),n.setMetadata({sampleRate:Number(i)})):t.parentSampled!==void 0?i=t.parentSampled:typeof e.tracesSampleRate<"u"?(i=e.tracesSampleRate,n.setMetadata({sampleRate:Number(i)})):(i=1,n.setMetadata({sampleRate:i})),rt(i)?i?(n.sampled=Math.random()<i,n.sampled?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] starting ${n.op} transaction - ${n.name}`),n):((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`),n)):((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler=="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),n.sampled=!1,n):((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn("[Tracing] Discarding transaction because of invalid sample rate."),n.sampled=!1,n)}function rt(n){return Pe(n)||!(typeof n=="number"||typeof n=="boolean")?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(n)} of type ${JSON.stringify(typeof n)}.`),!1):n<0||n>1?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${n}.`),!1):!0}function at(n,e){const t=this.getClient(),i=t&&t.getOptions()||{},s=i.instrumenter||"sentry",o=n.instrumenter||"sentry";s!==o&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${s}\` instrumenter.
The transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`),n.sampled=!1);let r=new k(n,this);return r=Ge(r,i,{parentSampled:n.parentSampled,transactionContext:n,...e}),r.sampled&&r.initSpanRecorder(i._experiments&&i._experiments.maxSpans),t&&t.emit&&t.emit("startTransaction",r),r}function Ee(n,e,t,i,s,o,r){const a=n.getClient(),c=a&&a.getOptions()||{};let d=new b(e,n,t,i,r,s);return d=Ge(d,c,{parentSampled:e.parentSampled,transactionContext:e,...o}),d.sampled&&d.initSpanRecorder(c._experiments&&c._experiments.maxSpans),a&&a.emit&&a.emit("startTransaction",d),d}function ot(){const n=He();!n.__SENTRY__||(n.__SENTRY__.extensions=n.__SENTRY__.extensions||{},n.__SENTRY__.extensions.startTransaction||(n.__SENTRY__.extensions.startTransaction=at),n.__SENTRY__.extensions.traceHeaders||(n.__SENTRY__.extensions.traceHeaders=st),et())}const l=$e;function ct(){l&&l.document?l.document.addEventListener("visibilitychange",()=>{const n=P();if(l.document.hidden&&n){const e="cancelled";(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n.op}`),n.status||n.setStatus(e),n.setTag("visibilitychange","document.hidden"),n.finish()}}):(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn("[Tracing] Could not set up background tab detection due to lack of global document")}const ce=(n,e,t)=>{let i,s;return o=>{e.value>=0&&(o||t)&&(s=e.value-(i||0),(s||i===void 0)&&(i=e.value,e.delta=s,n(e)))}},dt=()=>`v3-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,ut=()=>{const n=l.performance.timing,e=l.performance.navigation.type,t={entryType:"navigation",startTime:0,type:e==2?"back_forward":e===1?"reload":"navigate"};for(const i in n)i!=="navigationStart"&&i!=="toJSON"&&(t[i]=Math.max(n[i]-n.navigationStart,0));return t},ke=()=>l.__WEB_VITALS_POLYFILL__?l.performance&&(performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]||ut()):l.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],Ye=()=>{const n=ke();return n&&n.activationStart||0},de=(n,e)=>{const t=ke();let i="navigate";return t&&(l.document.prerendering||Ye()>0?i="prerender":i=t.type.replace(/_/g,"-")),{name:n,value:typeof e>"u"?-1:e,rating:"good",delta:0,entries:[],id:dt(),navigationType:i}},$=(n,e,t)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(n)){const i=new PerformanceObserver(s=>{e(s.getEntries())});return i.observe(Object.assign({type:n,buffered:!0},t||{})),i}}catch{}},V=(n,e)=>{const t=i=>{(i.type==="pagehide"||l.document.visibilityState==="hidden")&&(n(i),e&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},_t=n=>{const e=de("CLS",0);let t,i=0,s=[];const o=a=>{a.forEach(c=>{if(!c.hadRecentInput){const d=s[0],f=s[s.length-1];i&&s.length!==0&&c.startTime-f.startTime<1e3&&c.startTime-d.startTime<5e3?(i+=c.value,s.push(c)):(i=c.value,s=[c]),i>e.value&&(e.value=i,e.entries=s,t&&t())}})},r=$("layout-shift",o);if(r){t=ce(n,e);const a=()=>{o(r.takeRecords()),t(!0)};return V(a),a}};let x=-1;const lt=()=>l.document.visibilityState==="hidden"&&!l.document.prerendering?0:1/0,ft=()=>{V(({timeStamp:n})=>{x=n},!0)},ue=()=>(x<0&&(x=lt(),ft()),{get firstHiddenTime(){return x}}),pt=n=>{const e=ue(),t=de("FID");let i;const s=a=>{a.startTime<e.firstHiddenTime&&(t.value=a.processingStart-a.startTime,t.entries.push(a),i(!0))},o=a=>{a.forEach(s)},r=$("first-input",o);i=ce(n,t),r&&V(()=>{o(r.takeRecords()),r.disconnect()},!0)},Se={},ht=n=>{const e=ue(),t=de("LCP");let i;const s=r=>{const a=r[r.length-1];if(a){const c=Math.max(a.startTime-Ye(),0);c<e.firstHiddenTime&&(t.value=c,t.entries=[a],i())}},o=$("largest-contentful-paint",s);if(o){i=ce(n,t);const r=()=>{Se[t.id]||(s(o.takeRecords()),o.disconnect(),Se[t.id]=!0,i(!0))};return["keydown","click"].forEach(a=>{addEventListener(a,r,{once:!0,capture:!0})}),V(r,!0),r}};function Q(n){return typeof n=="number"&&isFinite(n)}function Y(n,{startTimestamp:e,...t}){return e&&n.startTimestamp>e&&(n.startTimestamp=e),n.startChild({startTimestamp:e,...t})}function m(n){return n/1e3}function Ue(){return l&&l.addEventListener&&l.performance}let ye=0,p={},T,w;function mt(){const n=Ue();if(n&&I){n.mark&&l.performance.mark("sentry-tracing-init"),yt();const e=Et(),t=St();return()=>{e&&e(),t&&t()}}return()=>{}}function gt(){$("longtask",e=>{for(const t of e){const i=P();if(!i)return;const s=m(I+t.startTime),o=m(t.duration);i.startChild({description:"Main UI thread blocked",op:"ui.long-task",startTimestamp:s,endTimestamp:s+o})}})}function Tt(){$("event",e=>{for(const t of e){const i=P();if(!i)return;if(t.name==="click"){const s=m(I+t.startTime),o=m(t.duration);i.startChild({description:ee(t.target),op:`ui.interaction.${t.name}`,startTimestamp:s,endTimestamp:s+o})}}},{durationThreshold:0})}function Et(){return _t(n=>{const e=n.entries.pop();!e||((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Measurements] Adding CLS"),p.cls={value:n.value,unit:""},w=e)})}function St(){return ht(n=>{const e=n.entries.pop();!e||((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Measurements] Adding LCP"),p.lcp={value:n.value,unit:"millisecond"},T=e)})}function yt(){pt(n=>{const e=n.entries.pop();if(!e)return;const t=m(I),i=m(e.startTime);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Measurements] Adding FID"),p.fid={value:n.value,unit:"millisecond"},p["mark.fid"]={value:t+i,unit:"second"}})}function Rt(n){const e=Ue();if(!e||!l.performance.getEntries||!I)return;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Tracing] Adding & adjusting spans using Performance API");const t=m(I),i=e.getEntries();let s,o;if(i.slice(ye).forEach(r=>{const a=m(r.startTime),c=m(r.duration);if(!(n.op==="navigation"&&t+a<n.startTimestamp))switch(r.entryType){case"navigation":{vt(n,r,t),s=t+m(r.responseStart),o=t+m(r.requestStart);break}case"mark":case"paint":case"measure":{bt(n,r,a,c,t);const d=ue(),f=r.startTime<d.firstHiddenTime;r.name==="first-paint"&&f&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Measurements] Adding FP"),p.fp={value:r.startTime,unit:"millisecond"}),r.name==="first-contentful-paint"&&f&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Measurements] Adding FCP"),p.fcp={value:r.startTime,unit:"millisecond"});break}case"resource":{const d=r.name.replace(l.location.origin,"");Dt(n,r,d,a,c,t);break}}}),ye=Math.max(i.length-1,0),It(n),n.op==="pageload"){typeof s=="number"&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Measurements] Adding TTFB"),p.ttfb={value:(s-n.startTimestamp)*1e3,unit:"millisecond"},typeof o=="number"&&o<=s&&(p["ttfb.requestTime"]={value:(s-o)*1e3,unit:"millisecond"})),["fcp","fp","lcp"].forEach(a=>{if(!p[a]||t>=n.startTimestamp)return;const c=p[a].value,d=t+m(c),f=Math.abs((d-n.startTimestamp)*1e3),g=f-c;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Measurements] Normalized ${a} from ${c} to ${f} (${g})`),p[a].value=f});const r=p["mark.fid"];r&&p.fid&&(Y(n,{description:"first input delay",endTimestamp:r.value+m(p.fid.value),op:"ui.action",startTimestamp:r.value}),delete p["mark.fid"]),"fcp"in p||delete p.cls,Object.keys(p).forEach(a=>{n.setMeasurement(a,p[a].value,p[a].unit)}),Bt(n)}T=void 0,w=void 0,p={}}function bt(n,e,t,i,s){const o=s+t,r=o+i;return Y(n,{description:e.name,endTimestamp:r,op:e.entryType,startTimestamp:o}),o}function vt(n,e,t){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach(i=>{F(n,e,i,t)}),F(n,e,"secureConnection",t,"TLS/SSL","connectEnd"),F(n,e,"fetch",t,"cache","domainLookupStart"),F(n,e,"domainLookup",t,"DNS"),Nt(n,e,t)}function F(n,e,t,i,s,o){const r=o?e[o]:e[`${t}End`],a=e[`${t}Start`];!a||!r||Y(n,{op:"browser",description:s||t,startTimestamp:i+m(a),endTimestamp:i+m(r)})}function Nt(n,e,t){Y(n,{op:"browser",description:"request",startTimestamp:t+m(e.requestStart),endTimestamp:t+m(e.responseEnd)}),Y(n,{op:"browser",description:"response",startTimestamp:t+m(e.responseStart),endTimestamp:t+m(e.responseEnd)})}function Dt(n,e,t,i,s,o){if(e.initiatorType==="xmlhttprequest"||e.initiatorType==="fetch")return;const r={};"transferSize"in e&&(r["Transfer Size"]=e.transferSize),"encodedBodySize"in e&&(r["Encoded Body Size"]=e.encodedBodySize),"decodedBodySize"in e&&(r["Decoded Body Size"]=e.decodedBodySize),"renderBlockingStatus"in e&&(r["resource.render_blocking_status"]=e.renderBlockingStatus);const a=o+i,c=a+s;Y(n,{description:t,endTimestamp:c,op:e.initiatorType?`resource.${e.initiatorType}`:"resource.other",startTimestamp:a,data:r})}function It(n){const e=l.navigator;if(!e)return;const t=e.connection;t&&(t.effectiveType&&n.setTag("effectiveConnectionType",t.effectiveType),t.type&&n.setTag("connectionType",t.type),Q(t.rtt)&&(p["connection.rtt"]={value:t.rtt,unit:"millisecond"})),Q(e.deviceMemory)&&n.setTag("deviceMemory",`${e.deviceMemory} GB`),Q(e.hardwareConcurrency)&&n.setTag("hardwareConcurrency",String(e.hardwareConcurrency))}function Bt(n){T&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Measurements] Adding LCP Data"),T.element&&n.setTag("lcp.element",ee(T.element)),T.id&&n.setTag("lcp.id",T.id),T.url&&n.setTag("lcp.url",T.url.trim().slice(0,200)),n.setTag("lcp.size",T.size)),w&&w.sources&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log("[Measurements] Adding CLS Data"),w.sources.forEach((e,t)=>n.setTag(`cls.source.${t+1}`,ee(e.node))))}const ie=["localhost",/^\//],se={traceFetch:!0,traceXHR:!0,tracingOrigins:ie,tracePropagationTargets:ie};function Gt(n){const{traceFetch:e,traceXHR:t,tracePropagationTargets:i,tracingOrigins:s,shouldCreateSpanForRequest:o}={traceFetch:se.traceFetch,traceXHR:se.traceXHR,...n},r=typeof o=="function"?o:d=>!0,a=d=>kt(d,i||s),c={};e&&A("fetch",d=>{Yt(d,r,a,c)}),t&&A("xhr",d=>{wt(d,r,a,c)})}function kt(n,e){return Me(n,e||ie)}function Yt(n,e,t,i){if(!oe()||!(n.fetchData&&e(n.fetchData.url)))return;if(n.endTimestamp){const a=n.fetchData.__span;if(!a)return;const c=i[a];c&&(n.response?c.setHttpStatus(n.response.status):n.error&&c.setStatus("internal_error"),c.finish(),delete i[a]);return}const s=D().getScope(),o=s&&s.getSpan(),r=o&&o.transaction;if(o&&r){const a=o.startChild({data:{...n.fetchData,type:"fetch"},description:`${n.fetchData.method} ${n.fetchData.url}`,op:"http.client"});n.fetchData.__span=a.spanId,i[a.spanId]=a;const c=n.args[0];n.args[1]=n.args[1]||{};const d=n.args[1];t(n.fetchData.url)&&(d.headers=Ut(c,r.getDynamicSamplingContext(),a,d))}}function Ut(n,e,t,i){const s=Be(e),o=t.toTraceparent(),r=typeof Request<"u"&&pe(n,Request)?n.headers:i.headers;if(r)if(typeof Headers<"u"&&pe(r,Headers)){const a=new Headers(r);return a.append("sentry-trace",o),s&&a.append(te,s),a}else if(Array.isArray(r)){const a=[...r,["sentry-trace",o]];return s&&a.push([te,s]),a}else{const a="baggage"in r?r.baggage:void 0,c=[];return Array.isArray(a)?c.push(...a):a&&c.push(a),s&&c.push(s),{...r,"sentry-trace":o,baggage:c.length>0?c.join(","):void 0}}else return{"sentry-trace":o,baggage:s}}function wt(n,e,t,i){const s=n.xhr,o=s&&s[Fe];if(!oe()||s&&s.__sentry_own_request__||!(s&&o&&e(o.url)))return;if(n.endTimestamp){const d=s.__sentry_xhr_span_id__;if(!d)return;const f=i[d];f&&(f.setHttpStatus(o.status_code),f.finish(),delete i[d]);return}const r=D().getScope(),a=r&&r.getSpan(),c=a&&a.transaction;if(a&&c){const d=a.startChild({data:{...o.data,type:"xhr",method:o.method,url:o.url},description:`${o.method} ${o.url}`,op:"http.client"});if(s.__sentry_xhr_span_id__=d.spanId,i[s.__sentry_xhr_span_id__]=d,s.setRequestHeader&&t(o.url))try{s.setRequestHeader("sentry-trace",d.toTraceparent());const f=c.getDynamicSamplingContext(),g=Be(f);g&&s.setRequestHeader(te,g)}catch{}}}function Ct(n,e=!0,t=!0){if(!l||!l.location){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn("Could not initialize routing instrumentation due to invalid location");return}let i=l.location.href,s;e&&(s=n({name:l.location.pathname,startTimestamp:I,op:"pageload",metadata:{source:"url"}})),t&&A("history",({to:o,from:r})=>{if(r===void 0&&i&&i.indexOf(o)!==-1){i=void 0;return}r!==o&&(i=void 0,s&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] Finishing current transaction with op: ${s.op}`),s.finish()),s=n({name:l.location.pathname,op:"navigation",metadata:{source:"url"}}))})}const At="BrowserTracing",Ot={...M,markBackgroundTransactions:!0,routingInstrumentation:Ct,startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,enableLongTask:!0,_experiments:{},...se};class _e{__init(){this.name=At}constructor(e){_e.prototype.__init.call(this),ot(),this.options={...Ot,...e},this.options._experiments.enableLongTask!==void 0&&(this.options.enableLongTask=this.options._experiments.enableLongTask),e&&!e.tracePropagationTargets&&e.tracingOrigins&&(this.options.tracePropagationTargets=e.tracingOrigins),this._collectWebVitals=mt(),this.options.enableLongTask&&gt(),this.options._experiments.enableInteractions&&Tt()}setupOnce(e,t){this._getCurrentHub=t;const{routingInstrumentation:i,startTransactionOnLocationChange:s,startTransactionOnPageLoad:o,markBackgroundTransactions:r,traceFetch:a,traceXHR:c,tracePropagationTargets:d,shouldCreateSpanForRequest:f,_experiments:g}=this.options;i(R=>{const h=this._createRouteTransaction(R);return this.options._experiments.onStartRouteTransaction&&this.options._experiments.onStartRouteTransaction(h,R,t),h},o,s),r&&ct(),g.enableInteractions&&this._registerInteractionListener(),Gt({traceFetch:a,traceXHR:c,tracePropagationTargets:d,shouldCreateSpanForRequest:f})}_createRouteTransaction(e){if(!this._getCurrentHub){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`);return}const{beforeNavigate:t,idleTimeout:i,finalTimeout:s,heartbeatInterval:o}=this.options,r=e.op==="pageload",a=r?Re("sentry-trace"):null,c=r?Re("baggage"):null,d=a?Xe(a):void 0,f=c?Qe(c):void 0,g={...e,...d,metadata:{...e.metadata,dynamicSamplingContext:d&&!f?{}:f},trimEnd:!0},R=typeof t=="function"?t(g):g,h=R===void 0?{...g,sampled:!1}:R;h.metadata=h.name!==g.name?{...h.metadata,source:"custom"}:h.metadata,this._latestRouteName=h.name,this._latestRouteSource=h.metadata&&h.metadata.source,h.sampled===!1&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] Will not send ${h.op} transaction because of beforeNavigate.`),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.log(`[Tracing] Starting ${h.op} transaction on scope`);const N=this._getCurrentHub(),{location:B}=l,le=Ee(N,h,i,s,!0,{location:B},o);return le.registerBeforeFinishCallback(Ce=>{this._collectWebVitals(),Rt(Ce)}),le}_registerInteractionListener(){let e;const t=()=>{const{idleTimeout:i,finalTimeout:s,heartbeatInterval:o}=this.options,r="ui.action.click",a=P();if(a&&a.op&&["navigation","pageload"].includes(a.op)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn(`[Tracing] Did not create ${r} transaction because a pageload or navigation transaction is in progress.`);return}if(e&&(e.setFinishReason("interactionInterrupted"),e.finish(),e=void 0),!this._getCurrentHub){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn(`[Tracing] Did not create ${r} transaction because _getCurrentHub is invalid.`);return}if(!this._latestRouteName){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn(`[Tracing] Did not create ${r} transaction because _latestRouteName is missing.`);return}const c=this._getCurrentHub(),{location:d}=l,f={name:this._latestRouteName,op:r,trimEnd:!0,metadata:{source:this._latestRouteSource||"url"}};e=Ee(c,f,i,s,!0,{location:d},o)};["click"].forEach(i=>{addEventListener(i,t,{once:!1,capture:!0})})}}function Re(n){const e=xe(`meta[name=${n}]`);return e?e.getAttribute("content"):null}function Ht(n){n._metadata=n._metadata||{},n._metadata.sdk=n._metadata.sdk||{name:"sentry.javascript.react",packages:[{name:"npm:@sentry/react",version:he}],version:he},Le(n)}function Pt(n){const e=n.match(/^([^.]+)/);return e!==null&&parseInt(e[0])>=17}const be={componentStack:null,error:null,eventId:null};function $t(n,e){const t=new WeakMap;function i(s,o){if(!t.has(s)){if(s.cause)return t.set(s,!0),i(s.cause,o);s.cause=o}}i(n,e)}class C extends K.exports.Component{__init(){this.state=be}__init2(){this._openFallbackReportDialog=!0}constructor(e){super(e),C.prototype.__init.call(this),C.prototype.__init2.call(this),C.prototype.__init3.call(this);const t=D().getClient();t&&t.on&&e.showDialog&&(this._openFallbackReportDialog=!1,t.on("afterSendEvent",i=>{!i.type&&i.event_id===this._lastEventId&&me({...e.dialogOptions,eventId:this._lastEventId})}))}componentDidCatch(e,{componentStack:t}){const{beforeCapture:i,onError:s,showDialog:o,dialogOptions:r}=this.props;je(a=>{if(Pt(K.exports.version)&&ze(e)){const d=new Error(e.message);d.name=`React ErrorBoundary ${d.name}`,d.stack=t,$t(e,d)}i&&i(a,e,t);const c=qe(e,{contexts:{react:{componentStack:t}}});s&&s(e,t,c),o&&(this._lastEventId=c,this._openFallbackReportDialog&&me({...r,eventId:c})),this.setState({error:e,componentStack:t,eventId:c})})}componentDidMount(){const{onMount:e}=this.props;e&&e()}componentWillUnmount(){const{error:e,componentStack:t,eventId:i}=this.state,{onUnmount:s}=this.props;s&&s(e,t,i)}__init3(){this.resetErrorBoundary=()=>{const{onReset:e}=this.props,{error:t,componentStack:i,eventId:s}=this.state;e&&e(t,i,s),this.setState(be)}}render(){const{fallback:e,children:t}=this.props,i=this.state;if(i.error){let s;return typeof e=="function"?s=e({error:i.error,componentStack:i.componentStack,resetError:this.resetErrorBoundary,eventId:i.eventId}):s=e,K.exports.isValidElement(s)?s:(e&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&u.warn("fallback did not produce a valid ReactElement"),null)}return typeof t=="function"?t():t}}const Z=({children:n,...e})=>_(We,{"data-testid":"error-fallback",...e,children:n}),ve={generic:_(Z,{"data-testid":"error-fallback"}),SessionExpiredError:v(Z,{heading:"Your session has expired",children:["Please refresh your browser and try again. If this doesn't solve the problem, visit our ",_("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]}),UnauthorizedError:v(Z,{heading:"Uh-oh, it seems you can't access this page.",children:["You may not have the required permissions or may have been logged out. Try refreshing the page or restarting your browser. If the issue persists, visit our ",_("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]})},Ne=n=>{if(!n)return;const{TYPE:e,name:t}=n.constructor;return e&&typeof e=="string"?e:t},X=({children:n,renderFallback:e,fallback:t=ve.generic,catchUnhandledRejections:i=!0,windowImpl:s=window,sentryDsn:o,sentryInit:r,...a})=>{const[c,d]=E.useState(null),f={...ve,...a.errorFallbacks},g=c!=null&&c.type?f[c.type]:void 0,R=c&&e?g||t:_(ae,{children:n});return E.useEffect(()=>{!o&&!r||Ht(r||{dsn:o,environment:window.location.hostname,integrations:[new _e]})},[]),E.useEffect(()=>{if(!i)return;const h=N=>{var B;d({error:{name:N.type,message:(B=N.reason)==null?void 0:B.toString()},type:Ne(N.reason)})};return s.addEventListener("unhandledrejection",h),()=>s.removeEventListener("unhandledrejection",h)},[]),_(De.Provider,{value:c,children:_(C,{fallback:R,onError:(h,N,B)=>{d({error:h,type:Ne(h),componentStack:N,eventId:B})},...a,onReset:()=>d(null),children:R})})},Ft=({message:n,showEventId:e=!0})=>{const t=E.useContext(De);return v(ae,{children:[n||(t==null?void 0:t.error.message),e?_("div",{children:t==null?void 0:t.eventId}):null]})};var y={};Object.defineProperty(y,"__esModule",{value:!0});var re=y.SessionExpiredError=y.NotFoundError=we=y.UnauthorizedError=y.InvalidRequestError=void 0;const J=({TYPE:n})=>e=>e instanceof Error&&e.constructor.TYPE===n;class L extends Error{}y.InvalidRequestError=L;L.TYPE="InvalidRequestError";L.matches=J(L);class j extends Error{}var we=y.UnauthorizedError=j;j.TYPE="UnauthorizedError";j.matches=J(j);class z extends Error{}y.NotFoundError=z;z.TYPE="NotFoundError";z.matches=J(z);class q extends Error{}re=y.SessionExpiredError=q;q.TYPE="SessionExpiredError";q.matches=J(q);const H=({doThrow:n,setShowError:e,error:t,errorMessage:i})=>(E.useEffect(()=>{if(n)throw e(!1),t instanceof Error?t:new Error(i||"Test Error")},[n]),null),zt=()=>{const[n,e]=E.useState(!1);return v(X,{children:[_(Ft,{}),_(H,{doThrow:n,setShowError:e}),_("button",{onClick:()=>{e(!0)},children:"Throw Error"}),_("button",{onClick:()=>{Promise.reject(Error("Test Error"))},children:"Reject Promise"})]})},qt=()=>{const[n,e]=E.useState(!1);return v(X,{renderFallback:!0,sentryDsn:"https://0@o0.ingest.sentry.io/0",children:[_(H,{doThrow:n,setShowError:e}),_("button",{onClick:()=>{e(!0)},children:"Throw Error"}),_("button",{onClick:()=>{Promise.reject(Error("Test Error"))},children:"Reject Promise"})]})},Wt=()=>{const[n,e]=E.useState(!1);return v(X,{renderFallback:!0,fallback:t=>v(ae,{children:[_("h2",{children:"This is a custom error fallback"}),_("p",{children:t&&t.error.toString()}),t&&t.resetError?_("button",{onClick:t&&t.resetError,children:"Reset"}):null]}),children:[_(H,{doThrow:n,setShowError:e}),_("button",{onClick:()=>{e(!0)},children:"Throw Error"}),_("button",{onClick:()=>{Promise.reject(Error("Test Error"))},children:"Reject Promise"})]})},Vt=()=>{const[n,e]=E.useState(!1),[t,i]=E.useState(!1);return v(X,{renderFallback:!0,children:[_(H,{doThrow:n,setShowError:e,error:new re}),_(H,{doThrow:t,setShowError:i,error:new we}),_("button",{onClick:()=>{e(!0)},children:"Throw SessionExpiredError"}),_("br",{}),_("button",{onClick:async()=>{throw new re},children:"Throw Async SessionExpiredError"}),_("br",{}),_("button",{onClick:()=>{i(!0)},children:"Throw UnauthorizedError"})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Wt as Fallback_GenericError_Custom,qt as Fallback_GenericError_Default,Vt as Fallback_SpecialError,zt as InlineMessages};