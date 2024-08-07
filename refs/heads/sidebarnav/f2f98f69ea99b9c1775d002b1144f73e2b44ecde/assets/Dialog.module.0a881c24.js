import{C as L,f as Ne,b as C,D as Ae,l as M,x as ke,c as We,I as j,d as V,$ as D,w as He,E as T,n as Be,J as _e,q as N,a as F,k as z,L as Ke,M as Ue,N as je,g as Ve,j as G,O as ze}from"./context.module.fcd29e30.js";import{r as u,R as b,$ as Ge}from"./index.8b248e8d.js";import{b as qe,c as Je,$ as q,d as Ye}from"./OverlayArrow.module.05873ece.js";import{b as A,d as Ze,a as Xe,c as Qe}from"./FocusScope.module.36e35b21.js";u.exports.createContext(null);u.exports.createContext(null);u.exports.createContext(null);u.exports.createContext(null);u.exports.createContext(null);const et=u.exports.createContext({});function J(t,e){let r=t;for(A(r,e)&&(r=r.parentElement);r&&!A(r,e);)r=r.parentElement;return r||document.scrollingElement||document.documentElement}const tt=b.forwardRef(({children:t,...e},r)=>{let n=u.exports.useRef(!1),o=u.exports.useContext(L);r=Ne(r||(o==null?void 0:o.ref));let s=C(o||{},{...e,ref:r,register(){n.current=!0,o&&o.register()}});return Ae(o,r),u.exports.useEffect(()=>{n.current||(console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."),n.current=!0)},[]),b.createElement(L.Provider,{value:s},t)});function rt({children:t}){let e=u.exports.useMemo(()=>({register:()=>{}}),[]);return b.createElement(L.Provider,{value:e},t)}function nt(t){let{ref:e,onInteractOutside:r,isDisabled:n,onInteractOutsideStart:o}=t,s=u.exports.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),l=M(i=>{r&&w(i,e)&&(o&&o(i),s.current.isPointerDown=!0)}),d=M(i=>{r&&r(i)});u.exports.useEffect(()=>{let i=s.current;if(n)return;const c=e.current,a=ke(c);if(typeof PointerEvent<"u"){let p=$=>{i.isPointerDown&&w($,e)&&d($),i.isPointerDown=!1};return a.addEventListener("pointerdown",l,!0),a.addEventListener("pointerup",p,!0),()=>{a.removeEventListener("pointerdown",l,!0),a.removeEventListener("pointerup",p,!0)}}else{let p=m=>{i.ignoreEmulatedMouseEvents?i.ignoreEmulatedMouseEvents=!1:i.isPointerDown&&w(m,e)&&d(m),i.isPointerDown=!1},$=m=>{i.ignoreEmulatedMouseEvents=!0,i.isPointerDown&&w(m,e)&&d(m),i.isPointerDown=!1};return a.addEventListener("mousedown",l,!0),a.addEventListener("mouseup",p,!0),a.addEventListener("touchstart",l,!0),a.addEventListener("touchend",$,!0),()=>{a.removeEventListener("mousedown",l,!0),a.removeEventListener("mouseup",p,!0),a.removeEventListener("touchstart",l,!0),a.removeEventListener("touchend",$,!0)}}},[e,n,l,d])}function w(t,e){if(t.button>0)return!1;if(t.target){const r=t.target.ownerDocument;if(!r||!r.documentElement.contains(t.target)||t.target.closest("[data-react-aria-top-layer]"))return!1}return e.current&&!e.current.contains(t.target)}const ot=Symbol.for("react-aria.i18n.locale"),at=Symbol.for("react-aria.i18n.strings");let g;class S{getStringForLocale(e,r){let o=this.getStringsForLocale(r)[e];if(!o)throw new Error(`Could not find intl message ${e} in ${r} locale`);return o}getStringsForLocale(e){let r=this.strings[e];return r||(r=it(e,this.strings,this.defaultLocale),this.strings[e]=r),r}static getGlobalDictionaryForPackage(e){if(typeof window>"u")return null;let r=window[ot];if(g===void 0){let o=window[at];if(!o)return null;g={};for(let s in o)g[s]=new S({[r]:o[s]},r)}let n=g==null?void 0:g[e];if(!n)throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return n}constructor(e,r="en-US"){this.strings=Object.fromEntries(Object.entries(e).filter(([,n])=>n)),this.defaultLocale=r}}function it(t,e,r="en-US"){if(e[t])return e[t];let n=st(t);if(e[n])return e[n];for(let o in e)if(o.startsWith(n+"-"))return e[o];return e[r]}function st(t){return Intl.Locale?new Intl.Locale(t).language:t.split("-")[0]}const k=new Map,W=new Map;class lt{format(e,r){let n=this.strings.getStringForLocale(e,this.locale);return typeof n=="function"?n(r,this):n}plural(e,r,n="cardinal"){let o=r["="+e];if(o)return typeof o=="function"?o():o;let s=this.locale+":"+n,l=k.get(s);l||(l=new Intl.PluralRules(this.locale,{type:n}),k.set(s,l));let d=l.select(e);return o=r[d]||r.other,typeof o=="function"?o():o}number(e){let r=W.get(this.locale);return r||(r=new Intl.NumberFormat(this.locale),W.set(this.locale,r)),r.format(e)}select(e,r){let n=e[r]||e.other;return typeof n=="function"?n():n}constructor(e,r){this.locale=e,this.strings=r}}const H=new WeakMap;function dt(t){let e=H.get(t);return e||(e=new S(t),H.set(t,e)),e}function ct(t,e){return e&&S.getGlobalDictionaryForPackage(e)||dt(t)}function ut(t,e){let{locale:r}=We(),n=ct(t,e);return u.exports.useMemo(()=>new lt(r,n),[r,n])}const x=[];function ft(t,e){let{onClose:r,shouldCloseOnBlur:n,isOpen:o,isDismissable:s=!1,isKeyboardDismissDisabled:l=!1,shouldCloseOnInteractOutside:d}=t;u.exports.useEffect(()=>(o&&x.push(e),()=>{let f=x.indexOf(e);f>=0&&x.splice(f,1)}),[o,e]);let i=()=>{x[x.length-1]===e&&r&&r()},c=f=>{(!d||d(f.target))&&x[x.length-1]===e&&(f.stopPropagation(),f.preventDefault())},a=f=>{(!d||d(f.target))&&(x[x.length-1]===e&&(f.stopPropagation(),f.preventDefault()),i())},p=f=>{f.key==="Escape"&&!l&&!f.nativeEvent.isComposing&&(f.stopPropagation(),f.preventDefault(),i())};nt({ref:e,onInteractOutside:s&&o?a:null,onInteractOutsideStart:c});let{focusWithinProps:$}=j({isDisabled:!n,onBlurWithin:f=>{!f.relatedTarget||Ze(f.relatedTarget)||(!d||d(f.relatedTarget))&&r()}}),m=f=>{f.target===f.currentTarget&&f.preventDefault()};return{overlayProps:{onKeyDown:p,...$},underlayProps:{onPointerDown:m}}}function $t(t,e,r){let{type:n}=t,{isOpen:o}=e;u.exports.useEffect(()=>{r&&r.current&&qe.set(r.current,e.close)});let s;n==="menu"?s=!0:n==="listbox"&&(s="listbox");let l=V();return{triggerProps:{"aria-haspopup":s,"aria-expanded":o,"aria-controls":o?l:null,onPress:e.toggle},overlayProps:{id:l}}}const O=typeof document<"u"&&window.visualViewport,bt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let P=0,R;function pt(t={}){let{isDisabled:e}=t;D(()=>{if(!e)return P++,P===1&&(He()?R=vt():R=mt()),()=>{P--,P===0&&R()}},[e])}function mt(){return T(h(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),h(document.documentElement,"overflow","hidden"))}function vt(){let t,e,r=c=>{t=J(c.target,!0),!(t===document.documentElement&&t===document.body)&&t instanceof HTMLElement&&window.getComputedStyle(t).overscrollBehavior==="auto"&&(e=h(t,"overscrollBehavior","contain"))},n=c=>{if(!t||t===document.documentElement||t===document.body){c.preventDefault();return}t.scrollHeight===t.clientHeight&&t.scrollWidth===t.clientWidth&&c.preventDefault()},o=c=>{let a=c.target;_(a)&&a!==document.activeElement&&(c.preventDefault(),d(),a.style.transform="translateY(-2000px)",a.focus(),requestAnimationFrame(()=>{a.style.transform=""})),e&&e()},s=c=>{let a=c.target;_(a)&&(d(),a.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{a.style.transform="",O&&(O.height<window.innerHeight?requestAnimationFrame(()=>{B(a)}):O.addEventListener("resize",()=>B(a),{once:!0}))}))},l=null,d=()=>{if(l)return;let c=()=>{window.scrollTo(0,0)},a=window.pageXOffset,p=window.pageYOffset;l=T(E(window,"scroll",c),h(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),h(document.documentElement,"overflow","hidden"),h(document.body,"marginTop",`-${p}px`),()=>{window.scrollTo(a,p)}),window.scrollTo(0,0)},i=T(E(document,"touchstart",r,{passive:!1,capture:!0}),E(document,"touchmove",n,{passive:!1,capture:!0}),E(document,"touchend",o,{passive:!1,capture:!0}),E(document,"focus",s,!0));return()=>{e==null||e(),l==null||l(),i()}}function h(t,e,r){let n=t.style[e];return t.style[e]=r,()=>{t.style[e]=n}}function E(t,e,r,n){return t.addEventListener(e,r,n),()=>{t.removeEventListener(e,r,n)}}function B(t){let e=document.scrollingElement||document.documentElement;for(;t&&t!==e;){let r=J(t);if(r!==document.documentElement&&r!==document.body&&r!==t){let n=r.getBoundingClientRect().top,o=t.getBoundingClientRect().top;o>n+t.clientHeight&&(r.scrollTop+=o-n)}t=r.parentElement}}function _(t){return t instanceof HTMLInputElement&&!bt.has(t.type)||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}var Y={};Y={dismiss:"\u062A\u062C\u0627\u0647\u0644"};var Z={};Z={dismiss:"\u041E\u0442\u0445\u0432\u044A\u0440\u043B\u044F\u043D\u0435"};var X={};X={dismiss:"Odstranit"};var Q={};Q={dismiss:"Luk"};var ee={};ee={dismiss:"Schlie\xDFen"};var te={};te={dismiss:"\u0391\u03C0\u03CC\u03C1\u03C1\u03B9\u03C8\u03B7"};var re={};re={dismiss:"Dismiss"};var ne={};ne={dismiss:"Descartar"};var oe={};oe={dismiss:"L\xF5peta"};var ae={};ae={dismiss:"Hylk\xE4\xE4"};var ie={};ie={dismiss:"Rejeter"};var se={};se={dismiss:"\u05D4\u05EA\u05E2\u05DC\u05DD"};var le={};le={dismiss:"Odbaci"};var de={};de={dismiss:"Elutas\xEDt\xE1s"};var ce={};ce={dismiss:"Ignora"};var ue={};ue={dismiss:"\u9589\u3058\u308B"};var fe={};fe={dismiss:"\uBB34\uC2DC"};var $e={};$e={dismiss:"Atmesti"};var be={};be={dismiss:"Ner\u0101d\u012Bt"};var pe={};pe={dismiss:"Lukk"};var me={};me={dismiss:"Negeren"};var ve={};ve={dismiss:"Zignoruj"};var xe={};xe={dismiss:"Descartar"};var ge={};ge={dismiss:"Dispensar"};var he={};he={dismiss:"Revocare"};var Ee={};Ee={dismiss:"\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C"};var ye={};ye={dismiss:"Zru\u0161i\u0165"};var we={};we={dismiss:"Opusti"};var Pe={};Pe={dismiss:"Odbaci"};var Ce={};Ce={dismiss:"Avvisa"};var De={};De={dismiss:"Kapat"};var Se={};Se={dismiss:"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"};var Oe={};Oe={dismiss:"\u53D6\u6D88"};var Re={};Re={dismiss:"\u95DC\u9589"};var Le={};Le={"ar-AE":Y,"bg-BG":Z,"cs-CZ":X,"da-DK":Q,"de-DE":ee,"el-GR":te,"en-US":re,"es-ES":ne,"et-EE":oe,"fi-FI":ae,"fr-FR":ie,"he-IL":se,"hr-HR":le,"hu-HU":de,"it-IT":ce,"ja-JP":ue,"ko-KR":fe,"lt-LT":$e,"lv-LV":be,"nb-NO":pe,"nl-NL":me,"pl-PL":ve,"pt-BR":xe,"pt-PT":ge,"ro-RO":he,"ru-RU":Ee,"sk-SK":ye,"sl-SI":we,"sr-SP":Pe,"sv-SE":Ce,"tr-TR":De,"uk-UA":Se,"zh-CN":Oe,"zh-TW":Re};const K={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function xt(t={}){let{style:e,isFocusable:r}=t,[n,o]=u.exports.useState(!1),{focusWithinProps:s}=j({isDisabled:!r,onFocusWithinChange:d=>o(d)}),l=u.exports.useMemo(()=>n?e:e?{...K,...e}:K,[n]);return{visuallyHiddenProps:{...s,style:l}}}function gt(t){let{children:e,elementType:r="div",isFocusable:n,style:o,...s}=t,{visuallyHiddenProps:l}=xt(t);return b.createElement(r,C(s,l),e)}function ht(t){return t&&t.__esModule?t.default:t}function U(t){let{onDismiss:e,...r}=t,n=ut(ht(Le),"@react-aria/overlays"),o=Xe(r,n.format("dismiss")),s=()=>{e&&e()};return b.createElement(gt,null,b.createElement("button",{...o,tabIndex:-1,onClick:s,style:{width:1,height:1}}))}let y=new WeakMap,v=[];function Et(t,e=document.body){let r=new Set(t),n=new Set,o=i=>{for(let $ of i.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))r.add($);let c=$=>{if(r.has($)||n.has($.parentElement)&&$.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let m of r)if($.contains(m))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},a=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:c}),p=c(i);if(p===NodeFilter.FILTER_ACCEPT&&s(i),p!==NodeFilter.FILTER_REJECT){let $=a.nextNode();for(;$!=null;)s($),$=a.nextNode()}},s=i=>{var c;let a=(c=y.get(i))!==null&&c!==void 0?c:0;i.getAttribute("aria-hidden")==="true"&&a===0||(a===0&&i.setAttribute("aria-hidden","true"),n.add(i),y.set(i,a+1))};v.length&&v[v.length-1].disconnect(),o(e);let l=new MutationObserver(i=>{for(let c of i)if(!(c.type!=="childList"||c.addedNodes.length===0)&&![...r,...n].some(a=>a.contains(c.target))){for(let a of c.removedNodes)a instanceof Element&&(r.delete(a),n.delete(a));for(let a of c.addedNodes)(a instanceof HTMLElement||a instanceof SVGElement)&&(a.dataset.liveAnnouncer==="true"||a.dataset.reactAriaTopLayer==="true")?r.add(a):a instanceof Element&&o(a)}});l.observe(e,{childList:!0,subtree:!0});let d={observe(){l.observe(e,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return v.push(d),()=>{l.disconnect();for(let i of n){let c=y.get(i);c===1?(i.removeAttribute("aria-hidden"),y.delete(i)):y.set(i,c-1)}d===v[v.length-1]?(v.pop(),v.length&&v[v.length-1].observe()):v.splice(v.indexOf(d),1)}}function yt(t,e){let{triggerRef:r,popoverRef:n,isNonModal:o,isKeyboardDismissDisabled:s,shouldCloseOnInteractOutside:l,...d}=t,{overlayProps:i,underlayProps:c}=ft({isOpen:e.isOpen,onClose:e.close,shouldCloseOnBlur:!0,isDismissable:!o,isKeyboardDismissDisabled:s,shouldCloseOnInteractOutside:l},n),{overlayProps:a,arrowProps:p,placement:$}=Je({...d,targetRef:r,overlayRef:n,isOpen:e.isOpen,onClose:o?e.close:null});return pt({isDisabled:o||!e.isOpen}),D(()=>{if(e.isOpen&&!o&&n.current)return Et([n.current])},[o,e.isOpen,n]),{popoverProps:C(i,a),arrowProps:p,underlayProps:c,placement:$}}const wt=u.exports.createContext({});function Pt(){var t;return(t=u.exports.useContext(wt))!==null&&t!==void 0?t:{}}const Te=b.createContext(null);function Ct(t){let e=Be(),{portalContainer:r=e?null:document.body,isExiting:n}=t,[o,s]=u.exports.useState(!1),l=u.exports.useMemo(()=>({contain:o,setContain:s}),[o,s]),{getContainer:d}=Pt();if(!t.portalContainer&&d&&(r=d()),!r)return null;let i=t.children;return t.disableFocusManagement||(i=b.createElement(Qe,{restoreFocus:!0,contain:o&&!n},i)),i=b.createElement(Te.Provider,{value:l},b.createElement(rt,null,i)),Ge.createPortal(i,r)}function Dt(){let t=u.exports.useContext(Te),e=t==null?void 0:t.setContain;D(()=>{e==null||e(!0)},[e])}function St(t,e){let{role:r="dialog"}=t,n=_e();n=t["aria-label"]?void 0:n;let o=u.exports.useRef(!1);return u.exports.useEffect(()=>{if(e.current&&!e.current.contains(document.activeElement)){N(e.current);let s=setTimeout(()=>{document.activeElement===e.current&&(o.current=!0,e.current&&(e.current.blur(),N(e.current)),o.current=!1)},500);return()=>{clearTimeout(s)}}},[e]),Dt(),{dialogProps:{...F(t,{labelable:!0}),role:r,tabIndex:-1,"aria-labelledby":t["aria-labelledby"]||n,onBlur:s=>{o.current&&s.stopPropagation()}},titleProps:{id:n}}}const Fe=u.exports.createContext(null);function Ot(t,e){[t,e]=z(t,e,Fe);let r=u.exports.useContext(I),n=q(t),o=t.isOpen!=null||t.defaultOpen!=null||!r?n:r,s=Ke(e,o.isOpen)||t.isExiting||!1;if(Ue()){let d=t.children;return typeof d=="function"&&(d=d({trigger:t.trigger||null,placement:"bottom",isEntering:!1,isExiting:!1,defaultChildren:null})),b.createElement(b.Fragment,null,d)}return o&&!o.isOpen&&!s?null:b.createElement(Rt,{...t,triggerRef:t.triggerRef,state:o,popoverRef:e,isExiting:s})}const Nt=u.exports.forwardRef(Ot);function Rt({state:t,isExiting:e,UNSTABLE_portalContainer:r,...n}){let o=u.exports.useRef(null),[s,l]=u.exports.useState(0);D(()=>{o.current&&t.isOpen&&l(o.current.getBoundingClientRect().width)},[t.isOpen,o]);var d;let{popoverProps:i,underlayProps:c,arrowProps:a,placement:p}=yt({...n,offset:(d=n.offset)!==null&&d!==void 0?d:8,arrowSize:s},t),$=n.popoverRef,m=je($,!!p)||n.isEntering||!1,f=Ve({...n,defaultClassName:"react-aria-Popover",values:{trigger:n.trigger||null,placement:p,isEntering:m,isExiting:e}}),Me={...i.style,...f.style};return b.createElement(Ct,{isExiting:e,portalContainer:r},!n.isNonModal&&t.isOpen&&b.createElement("div",{"data-testid":"underlay",...c,style:{position:"fixed",inset:0}}),b.createElement("div",{...C(F(n),i),...f,ref:$,slot:n.slot||void 0,style:Me,"data-trigger":n.trigger,"data-placement":p,"data-entering":m||void 0,"data-exiting":e||void 0},!n.isNonModal&&b.createElement(U,{onDismiss:t.close}),b.createElement(Ye.Provider,{value:{...a,placement:p,ref:o}},f.children),b.createElement(U,{onDismiss:t.close})))}const Ie=u.exports.createContext(null),I=u.exports.createContext(null);function At(t){let e=q(t),r=u.exports.useRef(null),{triggerProps:n,overlayProps:o}=$t({type:"dialog"},e,r);return n.id=V(),o["aria-labelledby"]=n.id,b.createElement(G,{values:[[I,e],[Ie,o],[Fe,{trigger:"DialogTrigger",triggerRef:r}]]},b.createElement(tt,{...n,ref:r,isPressed:e.isOpen},t.children))}function Lt(t,e){let r=t["aria-labelledby"];[t,e]=z(t,e,Ie);let{dialogProps:n,titleProps:o}=St({...t,"aria-labelledby":r},e),s=u.exports.useContext(I),l=t.children;typeof l=="function"&&(l=l({close:(s==null?void 0:s.close)||(()=>{})})),!n["aria-label"]&&!n["aria-labelledby"]&&(t["aria-labelledby"]?n["aria-labelledby"]=t["aria-labelledby"]:console.warn('If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'));var d;return b.createElement("section",{...F(t),...n,ref:e,slot:t.slot||void 0,style:t.style,className:(d=t.className)!==null&&d!==void 0?d:"react-aria-Dialog"},b.createElement(G,{values:[[et,{slots:{[ze]:{},title:{...o,level:2}}}]]},l))}const kt=u.exports.forwardRef(Lt);export{Nt as $,$t as a,ut as b,Fe as c,nt as d,I as e,tt as f,At as g,kt as h,ft as i,pt as j,Dt as k,Et as l,U as m,Ct as n};
