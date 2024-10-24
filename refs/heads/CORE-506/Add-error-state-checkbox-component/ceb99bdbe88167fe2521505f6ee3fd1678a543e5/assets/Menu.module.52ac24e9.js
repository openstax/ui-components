import{k as z,a as br,b as gr,l as mr,m as xr,$ as hr,c as vr,d as yr,e as Pr,f as Er,j as Dr,g as Cr,h as De,n as wr,i as Sr}from"./SelectionManager.module.594c96a7.js";import{u as re,f as Ce,b as D,v as Mr,n as pe,c as we,w as Se,d as H,x as oe,p as Kr,$ as C,s as Br,y as N,r as Ar,h as Me,z as Rr,a as Fr,e as Ir,m as _,A as Lr,B as Or,C as kr,i as W,l as F,D as Tr,k as Nr,g as zr,E as Hr}from"./context.module.d51d1177.js";import{r as d,R as b,$ as _r}from"./index.046bc2d1.js";import{a as Wr,b as jr,c as Ur,d as ae,e as Vr,f as Gr}from"./OverlayArrow.module.e73e75b3.js";import{j as qr,$ as j,i as Yr,o as Zr,c as $e}from"./focusSafely.module.bb377139.js";import{a as Jr,b as Ke}from"./FocusScope.module.72688900.js";d.exports.createContext(null);d.exports.createContext(null);d.exports.createContext(null);d.exports.createContext(null);d.exports.createContext(null);const Xr=d.exports.createContext({});function Be(r,e){let t=r;for(z(t,e)&&(t=t.parentElement);t&&!z(t,e);)t=t.parentElement;return t||document.scrollingElement||document.documentElement}const Ae=b.forwardRef(({children:r,...e},t)=>{let o=d.exports.useRef(!1),n=d.exports.useContext(re);t=Ce(t||(n==null?void 0:n.ref));let a=D(n||{},{...e,ref:t,register(){o.current=!0,n&&n.register()}});return Mr(n,t),d.exports.useEffect(()=>{o.current||(console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."),o.current=!0)},[]),b.createElement(re.Provider,{value:a},r)});function Qr({children:r}){let e=d.exports.useMemo(()=>({register:()=>{}}),[]);return b.createElement(re.Provider,{value:e},r)}function Re(r){let{ref:e,onInteractOutside:t,isDisabled:o,onInteractOutsideStart:n}=r,a=d.exports.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),s=pe(i=>{t&&k(i,e)&&(n&&n(i),a.current.isPointerDown=!0)}),u=pe(i=>{t&&t(i)});d.exports.useEffect(()=>{let i=a.current;if(o)return;const c=e.current,l=qr(c);if(typeof PointerEvent<"u"){let $=f=>{i.isPointerDown&&k(f,e)&&u(f),i.isPointerDown=!1};return l.addEventListener("pointerdown",s,!0),l.addEventListener("pointerup",$,!0),()=>{l.removeEventListener("pointerdown",s,!0),l.removeEventListener("pointerup",$,!0)}}else{let $=p=>{i.ignoreEmulatedMouseEvents?i.ignoreEmulatedMouseEvents=!1:i.isPointerDown&&k(p,e)&&u(p),i.isPointerDown=!1},f=p=>{i.ignoreEmulatedMouseEvents=!0,i.isPointerDown&&k(p,e)&&u(p),i.isPointerDown=!1};return l.addEventListener("mousedown",s,!0),l.addEventListener("mouseup",$,!0),l.addEventListener("touchstart",s,!0),l.addEventListener("touchend",f,!0),()=>{l.removeEventListener("mousedown",s,!0),l.removeEventListener("mouseup",$,!0),l.removeEventListener("touchstart",s,!0),l.removeEventListener("touchend",f,!0)}}},[e,o,s,u])}function k(r,e){if(r.button>0)return!1;if(r.target){const t=r.target.ownerDocument;if(!t||!t.documentElement.contains(r.target)||r.target.closest("[data-react-aria-top-layer]"))return!1}return e.current&&!e.current.contains(r.target)}const eo=Symbol.for("react-aria.i18n.locale"),to=Symbol.for("react-aria.i18n.strings");let M;class U{getStringForLocale(e,t){let n=this.getStringsForLocale(t)[e];if(!n)throw new Error(`Could not find intl message ${e} in ${t} locale`);return n}getStringsForLocale(e){let t=this.strings[e];return t||(t=ro(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){if(typeof window>"u")return null;let t=window[eo];if(M===void 0){let n=window[to];if(!n)return null;M={};for(let a in n)M[a]=new U({[t]:n[a]},t)}let o=M==null?void 0:M[e];if(!o)throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return o}constructor(e,t="en-US"){this.strings=Object.fromEntries(Object.entries(e).filter(([,o])=>o)),this.defaultLocale=t}}function ro(r,e,t="en-US"){if(e[r])return e[r];let o=oo(r);if(e[o])return e[o];for(let n in e)if(n.startsWith(o+"-"))return e[n];return e[t]}function oo(r){return Intl.Locale?new Intl.Locale(r).language:r.split("-")[0]}const be=new Map,ge=new Map;class no{format(e,t){let o=this.strings.getStringForLocale(e,this.locale);return typeof o=="function"?o(t,this):o}plural(e,t,o="cardinal"){let n=t["="+e];if(n)return typeof n=="function"?n():n;let a=this.locale+":"+o,s=be.get(a);s||(s=new Intl.PluralRules(this.locale,{type:o}),be.set(a,s));let u=s.select(e);return n=t[u]||t.other,typeof n=="function"?n():n}number(e){let t=ge.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),ge.set(this.locale,t)),t.format(e)}select(e,t){let o=e[t]||e.other;return typeof o=="function"?o():o}constructor(e,t){this.locale=e,this.strings=t}}const me=new WeakMap;function ao(r){let e=me.get(r);return e||(e=new U(r),me.set(r,e)),e}function so(r,e){return e&&U.getGlobalDictionaryForPackage(e)||ao(r)}function Fe(r,e){let{locale:t}=we(),o=so(r,e);return d.exports.useMemo(()=>new no(t,o),[t,o])}let Q=new Map;function io(r){let{locale:e}=we(),t=e+(r?Object.entries(r).sort((n,a)=>n[0]<a[0]?-1:1).join():"");if(Q.has(t))return Q.get(t);let o=new Intl.Collator(e,r);return Q.set(t,o),o}const y=[];function lo(r,e){let{onClose:t,shouldCloseOnBlur:o,isOpen:n,isDismissable:a=!1,isKeyboardDismissDisabled:s=!1,shouldCloseOnInteractOutside:u}=r;d.exports.useEffect(()=>(n&&y.push(e),()=>{let g=y.indexOf(e);g>=0&&y.splice(g,1)}),[n,e]);let i=()=>{y[y.length-1]===e&&t&&t()},c=g=>{(!u||u(g.target))&&y[y.length-1]===e&&(g.stopPropagation(),g.preventDefault())},l=g=>{(!u||u(g.target))&&(y[y.length-1]===e&&(g.stopPropagation(),g.preventDefault()),i())},$=g=>{g.key==="Escape"&&!s&&!g.nativeEvent.isComposing&&(g.stopPropagation(),g.preventDefault(),i())};Re({ref:e,onInteractOutside:a&&n?l:null,onInteractOutsideStart:c});let{focusWithinProps:f}=Se({isDisabled:!o,onBlurWithin:g=>{!g.relatedTarget||Jr(g.relatedTarget)||(!u||u(g.relatedTarget))&&t()}}),p=g=>{g.target===g.currentTarget&&g.preventDefault()};return{overlayProps:{onKeyDown:$,...f},underlayProps:{onPointerDown:p}}}function Ie(r,e,t){let{type:o}=r,{isOpen:n}=e;d.exports.useEffect(()=>{t&&t.current&&Wr.set(t.current,e.close)});let a;o==="menu"?a=!0:o==="listbox"&&(a="listbox");let s=H();return{triggerProps:{"aria-haspopup":a,"aria-expanded":n,"aria-controls":n?s:null,onPress:e.toggle},overlayProps:{id:s}}}const ee=typeof document<"u"&&window.visualViewport,uo=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let T=0,te;function co(r={}){let{isDisabled:e}=r;j(()=>{if(!e)return T++,T===1&&(Yr()?te=po():te=fo()),()=>{T--,T===0&&te()}},[e])}function fo(){return oe(K(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),K(document.documentElement,"overflow","hidden"))}function po(){let r,e,t=c=>{r=Be(c.target,!0),!(r===document.documentElement&&r===document.body)&&r instanceof HTMLElement&&window.getComputedStyle(r).overscrollBehavior==="auto"&&(e=K(r,"overscrollBehavior","contain"))},o=c=>{if(!r||r===document.documentElement||r===document.body){c.preventDefault();return}r.scrollHeight===r.clientHeight&&r.scrollWidth===r.clientWidth&&c.preventDefault()},n=c=>{let l=c.target;he(l)&&l!==document.activeElement&&(c.preventDefault(),u(),l.style.transform="translateY(-2000px)",l.focus(),requestAnimationFrame(()=>{l.style.transform=""})),e&&e()},a=c=>{let l=c.target;he(l)&&(u(),l.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{l.style.transform="",ee&&(ee.height<window.innerHeight?requestAnimationFrame(()=>{xe(l)}):ee.addEventListener("resize",()=>xe(l),{once:!0}))}))},s=null,u=()=>{if(s)return;let c=()=>{window.scrollTo(0,0)},l=window.pageXOffset,$=window.pageYOffset;s=oe(B(window,"scroll",c),K(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),K(document.documentElement,"overflow","hidden"),K(document.body,"marginTop",`-${$}px`),()=>{window.scrollTo(l,$)}),window.scrollTo(0,0)},i=oe(B(document,"touchstart",t,{passive:!1,capture:!0}),B(document,"touchmove",o,{passive:!1,capture:!0}),B(document,"touchend",n,{passive:!1,capture:!0}),B(document,"focus",a,!0));return()=>{e==null||e(),s==null||s(),i()}}function K(r,e,t){let o=r.style[e];return r.style[e]=t,()=>{r.style[e]=o}}function B(r,e,t,o){return r.addEventListener(e,t,o),()=>{r.removeEventListener(e,t,o)}}function xe(r){let e=document.scrollingElement||document.documentElement;for(;r&&r!==e;){let t=Be(r);if(t!==document.documentElement&&t!==document.body&&t!==r){let o=t.getBoundingClientRect().top,n=r.getBoundingClientRect().top;n>o+r.clientHeight&&(t.scrollTop+=n-o)}r=t.parentElement}}function he(r){return r instanceof HTMLInputElement&&!uo.has(r.type)||r instanceof HTMLTextAreaElement||r instanceof HTMLElement&&r.isContentEditable}var Le={};Le={dismiss:"\u062A\u062C\u0627\u0647\u0644"};var Oe={};Oe={dismiss:"\u041E\u0442\u0445\u0432\u044A\u0440\u043B\u044F\u043D\u0435"};var ke={};ke={dismiss:"Odstranit"};var Te={};Te={dismiss:"Luk"};var Ne={};Ne={dismiss:"Schlie\xDFen"};var ze={};ze={dismiss:"\u0391\u03C0\u03CC\u03C1\u03C1\u03B9\u03C8\u03B7"};var He={};He={dismiss:"Dismiss"};var _e={};_e={dismiss:"Descartar"};var We={};We={dismiss:"L\xF5peta"};var je={};je={dismiss:"Hylk\xE4\xE4"};var Ue={};Ue={dismiss:"Rejeter"};var Ve={};Ve={dismiss:"\u05D4\u05EA\u05E2\u05DC\u05DD"};var Ge={};Ge={dismiss:"Odbaci"};var qe={};qe={dismiss:"Elutas\xEDt\xE1s"};var Ye={};Ye={dismiss:"Ignora"};var Ze={};Ze={dismiss:"\u9589\u3058\u308B"};var Je={};Je={dismiss:"\uBB34\uC2DC"};var Xe={};Xe={dismiss:"Atmesti"};var Qe={};Qe={dismiss:"Ner\u0101d\u012Bt"};var et={};et={dismiss:"Lukk"};var tt={};tt={dismiss:"Negeren"};var rt={};rt={dismiss:"Zignoruj"};var ot={};ot={dismiss:"Descartar"};var nt={};nt={dismiss:"Dispensar"};var at={};at={dismiss:"Revocare"};var st={};st={dismiss:"\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C"};var it={};it={dismiss:"Zru\u0161i\u0165"};var lt={};lt={dismiss:"Opusti"};var ut={};ut={dismiss:"Odbaci"};var ct={};ct={dismiss:"Avvisa"};var dt={};dt={dismiss:"Kapat"};var ft={};ft={dismiss:"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"};var pt={};pt={dismiss:"\u53D6\u6D88"};var $t={};$t={dismiss:"\u95DC\u9589"};var bt={};bt={"ar-AE":Le,"bg-BG":Oe,"cs-CZ":ke,"da-DK":Te,"de-DE":Ne,"el-GR":ze,"en-US":He,"es-ES":_e,"et-EE":We,"fi-FI":je,"fr-FR":Ue,"he-IL":Ve,"hr-HR":Ge,"hu-HU":qe,"it-IT":Ye,"ja-JP":Ze,"ko-KR":Je,"lt-LT":Xe,"lv-LV":Qe,"nb-NO":et,"nl-NL":tt,"pl-PL":rt,"pt-BR":ot,"pt-PT":nt,"ro-RO":at,"ru-RU":st,"sk-SK":it,"sl-SI":lt,"sr-SP":ut,"sv-SE":ct,"tr-TR":dt,"uk-UA":ft,"zh-CN":pt,"zh-TW":$t};const ve={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function $o(r={}){let{style:e,isFocusable:t}=r,[o,n]=d.exports.useState(!1),{focusWithinProps:a}=Se({isDisabled:!t,onFocusWithinChange:u=>n(u)}),s=d.exports.useMemo(()=>o?e:e?{...ve,...e}:ve,[o]);return{visuallyHiddenProps:{...a,style:s}}}function bo(r){let{children:e,elementType:t="div",isFocusable:o,style:n,...a}=r,{visuallyHiddenProps:s}=$o(r);return b.createElement(t,D(a,s),e)}function go(r){return r&&r.__esModule?r.default:r}function ye(r){let{onDismiss:e,...t}=r,o=Fe(go(bt),"@react-aria/overlays"),n=br(t,o.format("dismiss")),a=()=>{e&&e()};return b.createElement(bo,null,b.createElement("button",{...n,tabIndex:-1,onClick:a,style:{width:1,height:1}}))}let A=new WeakMap,x=[];function mo(r,e=document.body){let t=new Set(r),o=new Set,n=i=>{for(let f of i.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))t.add(f);let c=f=>{if(t.has(f)||o.has(f.parentElement)&&f.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let p of t)if(f.contains(p))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:c}),$=c(i);if($===NodeFilter.FILTER_ACCEPT&&a(i),$!==NodeFilter.FILTER_REJECT){let f=l.nextNode();for(;f!=null;)a(f),f=l.nextNode()}},a=i=>{var c;let l=(c=A.get(i))!==null&&c!==void 0?c:0;i.getAttribute("aria-hidden")==="true"&&l===0||(l===0&&i.setAttribute("aria-hidden","true"),o.add(i),A.set(i,l+1))};x.length&&x[x.length-1].disconnect(),n(e);let s=new MutationObserver(i=>{for(let c of i)if(!(c.type!=="childList"||c.addedNodes.length===0)&&![...t,...o].some(l=>l.contains(c.target))){for(let l of c.removedNodes)l instanceof Element&&(t.delete(l),o.delete(l));for(let l of c.addedNodes)(l instanceof HTMLElement||l instanceof SVGElement)&&(l.dataset.liveAnnouncer==="true"||l.dataset.reactAriaTopLayer==="true")?t.add(l):l instanceof Element&&n(l)}});s.observe(e,{childList:!0,subtree:!0});let u={observe(){s.observe(e,{childList:!0,subtree:!0})},disconnect(){s.disconnect()}};return x.push(u),()=>{s.disconnect();for(let i of o){let c=A.get(i);c===1?(i.removeAttribute("aria-hidden"),A.delete(i)):A.set(i,c-1)}u===x[x.length-1]?(x.pop(),x.length&&x[x.length-1].observe()):x.splice(x.indexOf(u),1)}}function xo(r,e){let{triggerRef:t,popoverRef:o,isNonModal:n,isKeyboardDismissDisabled:a,shouldCloseOnInteractOutside:s,...u}=r,{overlayProps:i,underlayProps:c}=lo({isOpen:e.isOpen,onClose:e.close,shouldCloseOnBlur:!0,isDismissable:!n,isKeyboardDismissDisabled:a,shouldCloseOnInteractOutside:s},o),{overlayProps:l,arrowProps:$,placement:f}=jr({...u,targetRef:t,overlayRef:o,isOpen:e.isOpen,onClose:n?e.close:null});return co({isDisabled:n||!e.isOpen}),j(()=>{if(e.isOpen&&!n&&o.current)return mo([o.current])},[n,e.isOpen,o]),{popoverProps:D(i,l),arrowProps:$,underlayProps:c,placement:f}}const ho=d.exports.createContext({});function vo(){var r;return(r=d.exports.useContext(ho))!==null&&r!==void 0?r:{}}const gt=b.createContext(null);function yo(r){let e=Kr(),{portalContainer:t=e?null:document.body,isExiting:o}=r,[n,a]=d.exports.useState(!1),s=d.exports.useMemo(()=>({contain:n,setContain:a}),[n,a]),{getContainer:u}=vo();if(!r.portalContainer&&u&&(t=u()),!t)return null;let i=r.children;return r.disableFocusManagement||(i=b.createElement(Ke,{restoreFocus:!0,contain:n&&!o},i)),i=b.createElement(gt.Provider,{value:s},b.createElement(Qr,null,i)),_r.createPortal(i,t)}function Po(){let r=d.exports.useContext(gt),e=r==null?void 0:r.setContain;j(()=>{e==null||e(!0)},[e])}class Pe{getItemRect(e){let t=this.ref.current,o=e!=null?t.querySelector(`[data-key="${CSS.escape(e.toString())}"]`):null;if(!o)return null;let n=t.getBoundingClientRect(),a=o.getBoundingClientRect();return{x:a.left-n.left+t.scrollLeft,y:a.top-n.top+t.scrollTop,width:a.width,height:a.height}}getContentSize(){let e=this.ref.current;return{width:e.scrollWidth,height:e.scrollHeight}}getVisibleRect(){let e=this.ref.current;return{x:e.scrollLeft,y:e.scrollTop,width:e.offsetWidth,height:e.offsetHeight}}constructor(e){this.ref=e}}class Eo{isDisabled(e){var t;return this.disabledBehavior==="all"&&(((t=e.props)===null||t===void 0?void 0:t.isDisabled)||this.disabledKeys.has(e.key))}getNextKey(e){for(e=this.collection.getKeyAfter(e);e!=null;){let t=this.collection.getItem(e);if(t.type==="item"&&!this.isDisabled(t))return e;e=this.collection.getKeyAfter(e)}return null}getPreviousKey(e){for(e=this.collection.getKeyBefore(e);e!=null;){let t=this.collection.getItem(e);if(t.type==="item"&&!this.isDisabled(t))return e;e=this.collection.getKeyBefore(e)}return null}findKey(e,t,o){let n=this.layoutDelegate.getItemRect(e);if(!n)return null;let a=n;do e=t(e),n=this.layoutDelegate.getItemRect(e);while(n&&o(a,n));return e}isSameRow(e,t){return e.y===t.y||e.x!==t.x}isSameColumn(e,t){return e.x===t.x||e.y!==t.y}getKeyBelow(e){return this.layout==="grid"&&this.orientation==="vertical"?this.findKey(e,t=>this.getNextKey(t),this.isSameRow):this.getNextKey(e)}getKeyAbove(e){return this.layout==="grid"&&this.orientation==="vertical"?this.findKey(e,t=>this.getPreviousKey(t),this.isSameRow):this.getPreviousKey(e)}getNextColumn(e,t){return t?this.getPreviousKey(e):this.getNextKey(e)}getKeyRightOf(e){return this.layout==="grid"?this.orientation==="vertical"?this.getNextColumn(e,this.direction==="rtl"):this.findKey(e,t=>this.getNextColumn(t,this.direction==="rtl"),this.isSameColumn):this.orientation==="horizontal"?this.getNextColumn(e,this.direction==="rtl"):null}getKeyLeftOf(e){return this.layout==="grid"?this.orientation==="vertical"?this.getNextColumn(e,this.direction==="ltr"):this.findKey(e,t=>this.getNextColumn(t,this.direction==="ltr"),this.isSameColumn):this.orientation==="horizontal"?this.getNextColumn(e,this.direction==="ltr"):null}getFirstKey(){let e=this.collection.getFirstKey();for(;e!=null;){let t=this.collection.getItem(e);if((t==null?void 0:t.type)==="item"&&!this.isDisabled(t))return e;e=this.collection.getKeyAfter(e)}return null}getLastKey(){let e=this.collection.getLastKey();for(;e!=null;){let t=this.collection.getItem(e);if(t.type==="item"&&!this.isDisabled(t))return e;e=this.collection.getKeyBefore(e)}return null}getKeyPageAbove(e){let t=this.ref.current,o=this.layoutDelegate.getItemRect(e);if(!o)return null;if(!z(t))return this.getFirstKey();if(this.orientation==="horizontal"){let n=Math.max(0,o.x+o.width-this.layoutDelegate.getVisibleRect().width);for(;o&&o.x>n;)e=this.getKeyAbove(e),o=e==null?null:this.layoutDelegate.getItemRect(e)}else{let n=Math.max(0,o.y+o.height-this.layoutDelegate.getVisibleRect().height);for(;o&&o.y>n;)e=this.getKeyAbove(e),o=e==null?null:this.layoutDelegate.getItemRect(e)}return e!=null?e:this.getFirstKey()}getKeyPageBelow(e){let t=this.ref.current,o=this.layoutDelegate.getItemRect(e);if(!o)return null;if(!z(t))return this.getLastKey();if(this.orientation==="horizontal"){let n=Math.min(this.layoutDelegate.getContentSize().width,o.y-o.width+this.layoutDelegate.getVisibleRect().width);for(;o&&o.x<n;)e=this.getKeyBelow(e),o=e==null?null:this.layoutDelegate.getItemRect(e)}else{let n=Math.min(this.layoutDelegate.getContentSize().height,o.y-o.height+this.layoutDelegate.getVisibleRect().height);for(;o&&o.y<n;)e=this.getKeyBelow(e),o=e==null?null:this.layoutDelegate.getItemRect(e)}return e!=null?e:this.getLastKey()}getKeyForSearch(e,t){if(!this.collator)return null;let o=this.collection,n=t||this.getFirstKey();for(;n!=null;){let a=o.getItem(n),s=a.textValue.slice(0,e.length);if(a.textValue&&this.collator.compare(s,e)===0)return n;n=this.getKeyBelow(n)}return null}constructor(...e){if(e.length===1){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.disabledBehavior=t.disabledBehavior||"all",this.orientation=t.orientation||"vertical",this.direction=t.direction,this.layout=t.layout||"stack",this.layoutDelegate=t.layoutDelegate||new Pe(t.ref)}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout="stack",this.orientation="vertical",this.disabledBehavior="all",this.layoutDelegate=new Pe(this.ref);this.layout==="stack"&&this.orientation==="vertical"&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}}function Do(r){let{selectionManager:e,collection:t,disabledKeys:o,ref:n,keyboardDelegate:a,layoutDelegate:s}=r,u=io({usage:"search",sensitivity:"base"}),i=e.disabledBehavior,c=d.exports.useMemo(()=>a||new Eo({collection:t,disabledKeys:o,disabledBehavior:i,ref:n,collator:u,layoutDelegate:s}),[a,s,t,o,n,u,i]),{collectionProps:l}=gr({...r,ref:n,selectionManager:e,keyboardDelegate:c});return{listProps:l}}const Ee=new WeakMap;function Co(r){let e=Ee.get(r);if(e!=null)return e;e=0;let t=o=>{for(let n of o)n.type==="section"?t(mr(n,r)):e++};return t(r),Ee.set(r,e),e}var mt={};mt={longPressMessage:"\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0644\u0627\u064B \u0623\u0648 \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 Alt + \u0627\u0644\u0633\u0647\u0645 \u0644\u0623\u0633\u0641\u0644 \u0644\u0641\u062A\u062D \u0627\u0644\u0642\u0627\u0626\u0645\u0629"};var xt={};xt={longPressMessage:"\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E \u0438\u043B\u0438 \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 Alt+ \u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043D\u0430\u0434\u043E\u043B\u0443, \u0437\u0430 \u0434\u0430 \u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u044E\u0442\u043E"};var ht={};ht={longPressMessage:"Dlouh\xFDm stiskem nebo stisknut\xEDm kl\xE1ves Alt + \u0161ipka dol\u016F otev\u0159ete nab\xEDdku"};var vt={};vt={longPressMessage:"Langt tryk eller tryk p\xE5 Alt + pil ned for at \xE5bne menuen"};var yt={};yt={longPressMessage:"Dr\xFCcken Sie lange oder dr\xFCcken Sie Alt + Nach-unten, um das Men\xFC zu \xF6ffnen"};var Pt={};Pt={longPressMessage:"\u03A0\u03B9\u03AD\u03C3\u03C4\u03B5 \u03C0\u03B1\u03C1\u03B1\u03C4\u03B5\u03C4\u03B1\u03BC\u03AD\u03BD\u03B1 \u03AE \u03C0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Alt + \u03BA\u03AC\u03C4\u03C9 \u03B2\u03AD\u03BB\u03BF\u03C2 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B1\u03BD\u03BF\u03AF\u03BE\u03B5\u03C4\u03B5 \u03C4\u03BF \u03BC\u03B5\u03BD\u03BF\u03CD"};var Et={};Et={longPressMessage:"Long press or press Alt + ArrowDown to open menu"};var Dt={};Dt={longPressMessage:"Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xFA"};var Ct={};Ct={longPressMessage:"Men\xFC\xFC avamiseks vajutage pikalt v\xF5i vajutage klahve Alt + allanool"};var wt={};wt={longPressMessage:"Avaa valikko painamalla pohjassa tai n\xE4pp\xE4inyhdistelm\xE4ll\xE4 Alt + Alanuoli"};var St={};St={longPressMessage:"Appuyez de mani\xE8re prolong\xE9e ou appuyez sur Alt\xA0+\xA0Fl\xE8che vers le bas pour ouvrir le menu."};var Mt={};Mt={longPressMessage:"\u05DC\u05D7\u05E5 \u05DC\u05D7\u05D9\u05E6\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4 \u05D0\u05D5 \u05D4\u05E7\u05E9 Alt + ArrowDown \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D4\u05EA\u05E4\u05E8\u05D9\u05D8"};var Kt={};Kt={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"};var Bt={};Bt={longPressMessage:"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xEDl gombot a men\xFC megnyit\xE1s\xE1hoz"};var At={};At={longPressMessage:"Premere a lungo o premere Alt + Freccia gi\xF9 per aprire il menu"};var Rt={};Rt={longPressMessage:"\u9577\u62BC\u3057\u307E\u305F\u306F Alt+\u4E0B\u77E2\u5370\u30AD\u30FC\u3067\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F"};var Ft={};Ft={longPressMessage:"\uAE38\uAC8C \uB204\uB974\uAC70\uB098 Alt + \uC544\uB798\uCABD \uD654\uC0B4\uD45C\uB97C \uB20C\uB7EC \uBA54\uB274 \uC5F4\uAE30"};var It={};It={longPressMessage:"Nor\u0117dami atidaryti meniu, nuspaud\u0119 palaikykite arba paspauskite \u201EAlt + ArrowDown\u201C."};var Lt={};Lt={longPressMessage:"Lai atv\u0113rtu izv\u0113lni, turiet nospiestu vai nospiediet tausti\u0146u kombin\u0101ciju Alt + lejupv\u0113rst\u0101 bulti\u0146a"};var Ot={};Ot={longPressMessage:"Langt trykk eller trykk Alt + PilNed for \xE5 \xE5pne menyen"};var kt={};kt={longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"};var Tt={};Tt={longPressMessage:"Naci\u015Bnij i przytrzymaj lub naci\u015Bnij klawisze Alt + Strza\u0142ka w d\xF3\u0142, aby otworzy\u0107 menu"};var Nt={};Nt={longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"};var zt={};zt={longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"};var Ht={};Ht={longPressMessage:"Ap\u0103sa\u021Bi lung sau ap\u0103sa\u021Bi pe Alt + s\u0103geat\u0103 \xEEn jos pentru a deschide meniul"};var _t={};_t={longPressMessage:"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Alt + \u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043D\u0438\u0437, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"};var Wt={};Wt={longPressMessage:"Ponuku otvor\xEDte dlh\xFDm stla\u010Den\xEDm alebo stla\u010Den\xEDm kl\xE1vesu Alt + kl\xE1vesu so \u0161\xEDpkou nadol"};var jt={};jt={longPressMessage:"Za odprtje menija pritisnite in dr\u017Eite gumb ali pritisnite Alt+pu\u0161\u010Dica navzdol"};var Ut={};Ut={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"};var Vt={};Vt={longPressMessage:"H\xE5ll nedtryckt eller tryck p\xE5 Alt + pil ned\xE5t f\xF6r att \xF6ppna menyn"};var Gt={};Gt={longPressMessage:"Men\xFCy\xFC a\xE7mak i\xE7in uzun bas\u0131n veya Alt + A\u015Fa\u011F\u0131 Ok tu\u015Funa bas\u0131n"};var qt={};qt={longPressMessage:"\u0414\u043E\u0432\u0433\u043E \u0430\u0431\u043E \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043E\u043C\u0431\u0456\u043D\u0430\u0446\u0456\u044E \u043A\u043B\u0430\u0432\u0456\u0448 Alt \u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430 \u0432\u043D\u0438\u0437, \u0449\u043E\u0431 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E"};var Yt={};Yt={longPressMessage:"\u957F\u6309\u6216\u6309 Alt + \u5411\u4E0B\u65B9\u5411\u952E\u4EE5\u6253\u5F00\u83DC\u5355"};var Zt={};Zt={longPressMessage:"\u9577\u6309\u6216\u6309 Alt+\u5411\u4E0B\u9375\u4EE5\u958B\u555F\u529F\u80FD\u8868"};var Jt={};Jt={"ar-AE":mt,"bg-BG":xt,"cs-CZ":ht,"da-DK":vt,"de-DE":yt,"el-GR":Pt,"en-US":Et,"es-ES":Dt,"et-EE":Ct,"fi-FI":wt,"fr-FR":St,"he-IL":Mt,"hr-HR":Kt,"hu-HU":Bt,"it-IT":At,"ja-JP":Rt,"ko-KR":Ft,"lt-LT":It,"lv-LV":Lt,"nb-NO":Ot,"nl-NL":kt,"pl-PL":Tt,"pt-BR":Nt,"pt-PT":zt,"ro-RO":Ht,"ru-RU":_t,"sk-SK":Wt,"sl-SI":jt,"sr-SP":Ut,"sv-SE":Vt,"tr-TR":Gt,"uk-UA":qt,"zh-CN":Yt,"zh-TW":Zt};function wo(r){return r&&r.__esModule?r.default:r}function So(r,e,t){let{type:o="menu",isDisabled:n,trigger:a="press"}=r,s=H(),{triggerProps:u,overlayProps:i}=Ie({type:o},e,t),c=p=>{if(!n&&!(a==="longPress"&&!p.altKey)&&t&&t.current)switch(p.key){case"Enter":case" ":if(a==="longPress")return;case"ArrowDown":"continuePropagation"in p||p.stopPropagation(),p.preventDefault(),e.toggle("first");break;case"ArrowUp":"continuePropagation"in p||p.stopPropagation(),p.preventDefault(),e.toggle("last");break;default:"continuePropagation"in p&&p.continuePropagation()}},l=Fe(wo(Jt),"@react-aria/menu"),{longPressProps:$}=xr({isDisabled:n||a!=="longPress",accessibilityDescription:l.format("longPressMessage"),onLongPressStart(){e.close()},onLongPress(){e.open("first")}}),f={onPressStart(p){p.pointerType!=="touch"&&p.pointerType!=="keyboard"&&!n&&e.open(p.pointerType==="virtual"?"first":null)},onPress(p){p.pointerType==="touch"&&!n&&e.toggle()}};return delete u.onPress,{menuTriggerProps:{...u,...a==="press"?f:$,id:s,onKeyDown:c},menuProps:{...i,"aria-labelledby":s,autoFocus:e.focusStrategy||!0,onClose:e.close}}}const Xt=new WeakMap;function Mo(r,e,t){let{shouldFocusWrap:o=!0,onKeyDown:n,onKeyUp:a,...s}=r;!r["aria-label"]&&!r["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let u=C(r,{labelable:!0}),{listProps:i}=Do({...s,ref:t,selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,shouldFocusWrap:o,linkBehavior:"override"});return Xt.set(e,{onClose:r.onClose,onAction:r.onAction}),{menuProps:D(u,{onKeyDown:n,onKeyUp:a},{role:"menu",...i,onKeyDown:c=>{c.key!=="Escape"&&i.onKeyDown(c)}})}}function Ko(r,e,t){let{id:o,key:n,closeOnSelect:a,isVirtualized:s,"aria-haspopup":u,onPressStart:i,onPressUp:c,onPress:l,onPressChange:$,onPressEnd:f,onHoverStart:p,onHoverChange:g,onHoverEnd:E,onKeyDown:v,onKeyUp:I,onFocus:G,onFocusChange:rr,onBlur:or}=r,P=!!u;var q;let w=(q=r.isDisabled)!==null&&q!==void 0?q:e.selectionManager.isDisabled(n);var Y;let ie=(Y=r.isSelected)!==null&&Y!==void 0?Y:e.selectionManager.isSelected(n),Z=Xt.get(e),h=e.collection.getItem(n),S=r.onClose||Z.onClose,nr=Br(),le=m=>{var X;if(!P){if(!(h==null||(X=h.props)===null||X===void 0)&&X.onAction&&h.props.onAction(),Z.onAction){let $r=Z.onAction;$r(n)}m.target instanceof HTMLAnchorElement&&nr.open(m.target,m,h.props.href,h.props.routerOptions)}},J="menuitem";P||(e.selectionManager.selectionMode==="single"?J="menuitemradio":e.selectionManager.selectionMode==="multiple"&&(J="menuitemcheckbox"));let ue=N(),ce=N(),de=N(),L={id:o,"aria-disabled":w||void 0,role:J,"aria-label":r["aria-label"],"aria-labelledby":ue,"aria-describedby":[ce,de].filter(Boolean).join(" ")||void 0,"aria-controls":r["aria-controls"],"aria-haspopup":u,"aria-expanded":r["aria-expanded"]};e.selectionManager.selectionMode!=="none"&&!P&&(L["aria-checked"]=ie),s&&(L["aria-posinset"]=h==null?void 0:h.index,L["aria-setsize"]=Co(e.collection));let ar=m=>{m.pointerType==="keyboard"&&le(m),i==null||i(m)},sr=m=>{m.pointerType!=="keyboard"&&(le(m),!P&&S&&(a!=null?a:e.selectionManager.selectionMode!=="multiple"||e.selectionManager.isLink(n))&&S()),c==null||c(m)},{itemProps:O,isFocused:ir}=hr({selectionManager:e.selectionManager,key:n,ref:t,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none"}),{pressProps:lr,isPressed:ur}=Ar({onPressStart:ar,onPress:l,onPressUp:sr,onPressChange:$,onPressEnd:f,isDisabled:w}),{hoverProps:cr}=Me({isDisabled:w,onHoverStart(m){Zr()||(e.selectionManager.setFocused(!0),e.selectionManager.setFocusedKey(n)),p==null||p(m)},onHoverChange:g,onHoverEnd:E}),{keyboardProps:dr}=Ur({onKeyDown:m=>{if(m.repeat){m.continuePropagation();return}switch(m.key){case" ":!w&&e.selectionManager.selectionMode==="none"&&!P&&a!==!1&&S&&S();break;case"Enter":!w&&a!==!1&&!P&&S&&S();break;default:P||m.continuePropagation(),v==null||v(m);break}},onKeyUp:I}),{focusProps:fr}=Rr({onBlur:or,onFocus:G,onFocusChange:rr}),fe=C(h.props);delete fe.id;let pr=Fr(h.props);return{menuItemProps:{...L,...D(fe,pr,P?{onFocus:O.onFocus,"data-key":O["data-key"]}:O,lr,cr,dr,fr),tabIndex:O.tabIndex!=null?-1:void 0},labelProps:{id:ue},descriptionProps:{id:ce},keyboardShortcutProps:{id:de},isFocused:ir,isSelected:ie,isPressed:ur,isDisabled:w}}function Bo(r){let{heading:e,"aria-label":t}=r,o=H();return{itemProps:{role:"presentation"},headingProps:e?{id:o,role:"presentation"}:{},groupProps:{role:"group","aria-label":t,"aria-labelledby":e?o:void 0}}}function Ao(r,e){let{role:t="dialog"}=r,o=N();o=r["aria-label"]?void 0:o;let n=d.exports.useRef(!1);return d.exports.useEffect(()=>{if(e.current&&!e.current.contains(document.activeElement)){$e(e.current);let a=setTimeout(()=>{document.activeElement===e.current&&(n.current=!0,e.current&&(e.current.blur(),$e(e.current)),n.current=!1)},500);return()=>{clearTimeout(a)}}},[e]),Po(),{dialogProps:{...C(r,{labelable:!0}),role:t,tabIndex:-1,"aria-labelledby":r["aria-labelledby"]||o,onBlur:a=>{n.current&&a.stopPropagation()}},titleProps:{id:o}}}const Ro=d.exports.createContext({});function Fo(r){let e=ae(r),[t,o]=d.exports.useState(null),[n,a]=d.exports.useState([]),s=()=>{a([]),e.close()};return{focusStrategy:t,...e,open(c=null){o(c),e.open()},toggle(c=null){o(c),e.toggle()},close(){s()},expandedKeysStack:n,openSubmenu:(c,l)=>{a($=>l>$.length?$:[...$.slice(0,l),c])},closeSubmenu:(c,l)=>{a($=>$[l]===c?$.slice(0,l):$)}}}class Io{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}constructor(e,{expandedKeys:t}={}){this.keyMap=new Map,this.iterable=e,t=t||new Set;let o=s=>{if(this.keyMap.set(s.key,s),s.childNodes&&(s.type==="section"||t.has(s.key)))for(let u of s.childNodes)o(u)};for(let s of e)o(s);let n,a=0;for(let[s,u]of this.keyMap)n?(n.nextKey=s,u.prevKey=n.key):(this.firstKey=s,u.prevKey=void 0),u.type==="item"&&(u.index=a++),n=u,n.nextKey=void 0;this.lastKey=n==null?void 0:n.key}}function Lo(r){let{onExpandedChange:e}=r,[t,o]=Ir(r.expandedKeys?new Set(r.expandedKeys):void 0,r.defaultExpandedKeys?new Set(r.defaultExpandedKeys):new Set,e),n=vr(r),a=d.exports.useMemo(()=>r.disabledKeys?new Set(r.disabledKeys):new Set,[r.disabledKeys]),s=yr(r,d.exports.useCallback(i=>new Io(i,{expandedKeys:t}),[t]),null);return d.exports.useEffect(()=>{n.focusedKey!=null&&!s.getItem(n.focusedKey)&&n.setFocusedKey(null)},[s,n.focusedKey]),{collection:s,expandedKeys:t,disabledKeys:a,toggleKey:i=>{o(Oo(t,i))},setExpandedKeys:o,selectionManager:new Pr(s,n)}}function Oo(r,e){let t=new Set(r);return t.has(e)?t.delete(e):t.add(e),t}const ko=d.exports.createContext({}),To=d.exports.createContext({}),R=d.exports.createContext(null);function No(r,e){[r,e]=_(r,e,R);let t=d.exports.useContext(V),o=ae(r),n=r.isOpen!=null||r.defaultOpen!=null||!t?o:t,a=Lr(e,n.isOpen)||r.isExiting||!1;if(Or()){let u=r.children;return typeof u=="function"&&(u=u({trigger:r.trigger||null,placement:"bottom",isEntering:!1,isExiting:!1,defaultChildren:null})),b.createElement(b.Fragment,null,u)}return n&&!n.isOpen&&!a?null:b.createElement(zo,{...r,triggerRef:r.triggerRef,state:n,popoverRef:e,isExiting:a})}const Qo=d.exports.forwardRef(No);function zo({state:r,isExiting:e,UNSTABLE_portalContainer:t,...o}){let n=d.exports.useRef(null),[a,s]=d.exports.useState(0);j(()=>{n.current&&r.isOpen&&s(n.current.getBoundingClientRect().width)},[r.isOpen,n]);var u;let{popoverProps:i,underlayProps:c,arrowProps:l,placement:$}=xo({...o,offset:(u=o.offset)!==null&&u!==void 0?u:8,arrowSize:a},r),f=o.popoverRef,p=kr(f,!!$)||o.isEntering||!1,g=W({...o,defaultClassName:"react-aria-Popover",values:{trigger:o.trigger||null,placement:$,isEntering:p,isExiting:e}}),E={...i.style,...g.style};return b.createElement(yo,{isExiting:e,portalContainer:t},!o.isNonModal&&r.isOpen&&b.createElement("div",{"data-testid":"underlay",...c,style:{position:"fixed",inset:0}}),b.createElement("div",{...D(C(o),i),...g,ref:f,slot:o.slot||void 0,style:E,"data-trigger":o.trigger,"data-placement":$,"data-entering":p||void 0,"data-exiting":e||void 0},!o.isNonModal&&b.createElement(ye,{onDismiss:r.close}),b.createElement(Vr.Provider,{value:{...l,placement:$,ref:n}},g.children),b.createElement(ye,{onDismiss:r.close})))}const Qt=d.exports.createContext(null),V=d.exports.createContext(null);function en(r){let e=ae(r),t=d.exports.useRef(null),{triggerProps:o,overlayProps:n}=Ie({type:"dialog"},e,t);return o.id=H(),n["aria-labelledby"]=o.id,b.createElement(F,{values:[[V,e],[Qt,n],[R,{trigger:"DialogTrigger",triggerRef:t}]]},b.createElement(Ae,{...o,ref:t,isPressed:e.isOpen},r.children))}function Ho(r,e){let t=r["aria-labelledby"];[r,e]=_(r,e,Qt);let{dialogProps:o,titleProps:n}=Ao({...r,"aria-labelledby":t},e),a=d.exports.useContext(V),s=r.children;typeof s=="function"&&(s=s({close:(a==null?void 0:a.close)||(()=>{})})),!o["aria-label"]&&!o["aria-labelledby"]&&(r["aria-labelledby"]?o["aria-labelledby"]=r["aria-labelledby"]:console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));var u;return b.createElement("section",{...C(r),...o,ref:e,slot:r.slot||void 0,style:r.style,className:(u=r.className)!==null&&u!==void 0?u:"react-aria-Dialog"},b.createElement(F,{values:[[Xr,{slots:{[Tr]:{},title:{...n,level:2}}}]]},s))}const tn=d.exports.forwardRef(Ho),_o=d.exports.createContext({}),er=d.exports.createContext(null),se=d.exports.createContext(null),tr=d.exports.createContext(null);function rn(r){let e=Fo(r),t=d.exports.useRef(null),{menuTriggerProps:o,menuProps:n}=So({...r,type:"menu"},e,t),[a,s]=d.exports.useState(null),u=d.exports.useCallback(()=>{t.current&&s(t.current.offsetWidth+"px")},[t]);Gr({ref:t,onResize:u});let i=d.exports.useRef(null);return b.createElement(F,{values:[[er,{...n,ref:i}],[V,e],[tr,e],[R,{trigger:"MenuTrigger",triggerRef:t,scrollRef:i,placement:"bottom start",style:{"--trigger-width":a}}]]},b.createElement(Ae,{...o,ref:t,isPressed:e.isOpen},r.children))}const Wo=d.exports.createContext(null);function jo(r,e){return[r,e]=_(r,e,er),b.createElement(Dr,{content:b.createElement(Cr,r)},t=>t.size>0&&b.createElement(Uo,{props:r,collection:t,menuRef:e}))}function Uo({props:r,collection:e,menuRef:t}){let o=Lo({...r,collection:e,children:void 0}),[n,a]=d.exports.useState(null),{isVirtualized:s,CollectionRoot:u}=d.exports.useContext(De),{menuProps:i}=Mo({...r,isVirtualized:s},o,t),c=d.exports.useContext(tr),l=d.exports.useContext(R),$=(l==null?void 0:l.trigger)==="SubmenuTrigger";Re({ref:t,onInteractOutside:v=>{c&&!(n!=null&&n.contains(v.target))&&c.close()},isDisabled:$||(c==null?void 0:c.expandedKeysStack.length)===0});let f=d.exports.useRef(null),[p,g]=d.exports.useState({left:0});d.exports.useEffect(()=>{if(n&&f.current!==n&&p.left===0){f.current=n;let{left:v}=n.getBoundingClientRect();g({left:-1*v})}},[p,n]);let E=W({defaultClassName:"react-aria-Menu",className:r.className,style:r.style,values:{}});return b.createElement(Ke,null,b.createElement("div",{...C(r),...i,...E,ref:t,slot:r.slot||void 0,onScroll:r.onScroll},b.createElement(F,{values:[[se,o],[To,{elementType:"div"}],[R,{UNSTABLE_portalContainer:n||void 0}],[wr,{render:Vo}],[Wo,{parentMenuRef:t}],[ne,null]]},b.createElement(u,{collection:e,persistedKeys:Sr(o.selectionManager.focusedKey),scrollRef:t}))),b.createElement("div",{ref:a,style:{width:"100vw",position:"absolute",top:0,...p}}))}const on=d.exports.forwardRef(jo);function Vo(r,e,t){var o,n;let a=d.exports.useContext(se),{CollectionBranch:s}=d.exports.useContext(De),[u,i]=Hr();var c;let{headingProps:l,groupProps:$}=Bo({heading:i,"aria-label":(c=t.props["aria-label"])!==null&&c!==void 0?c:void 0}),f=W({defaultClassName:"react-aria-Section",className:(o=t.props)===null||o===void 0?void 0:o.className,style:(n=t.props)===null||n===void 0?void 0:n.style,values:{}});return b.createElement("section",{...C(r),...$,...f,ref:e},b.createElement(ko.Provider,{value:{...l,ref:u}},b.createElement(s,{collection:a.collection,parent:t})))}const ne=d.exports.createContext(null),nn=Er("item",function(e,t,o){var n;[e,t]=_(e,t,ne);let a=(n=Nr(ne))===null||n===void 0?void 0:n.id,s=d.exports.useContext(se),u=Ce(t),{menuItemProps:i,labelProps:c,descriptionProps:l,keyboardShortcutProps:$,...f}=Ko({...e,id:a,key:o.key},s,u),{isFocusVisible:p,focusProps:g}=zr(),{hoverProps:E,isHovered:v}=Me({isDisabled:f.isDisabled}),I=W({...e,id:void 0,children:o.rendered,defaultClassName:"react-aria-MenuItem",values:{...f,isHovered:v,isFocusVisible:p,selectionMode:s.selectionManager.selectionMode,selectionBehavior:s.selectionManager.selectionBehavior,hasSubmenu:!!e["aria-haspopup"],isOpen:e["aria-expanded"]==="true"}}),G=e.href?"a":"div";return b.createElement(G,{...D(i,g,E),...I,ref:u,"data-disabled":f.isDisabled||void 0,"data-hovered":v||void 0,"data-focused":f.isFocused||void 0,"data-focus-visible":p||void 0,"data-pressed":f.isPressed||void 0,"data-selected":f.isSelected||void 0,"data-selection-mode":s.selectionManager.selectionMode==="none"?void 0:s.selectionManager.selectionMode,"data-has-submenu":!!e["aria-haspopup"]||void 0,"data-open":e["aria-expanded"]==="true"||void 0},b.createElement(F,{values:[[Ro,{slots:{label:c,description:l}}],[_o,$]]},I.children))});export{on as $,rn as a,Qo as b,nn as c,en as d,tn as e};
