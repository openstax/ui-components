import{a as Je,j as Qe,k as et,$ as tt,b as at,c as ot,d as rt,e as st,i as lt,f as it,g as Z,l as nt,h as ut}from"./SelectionManager.module.5bc94b2e.js";import{b as ct,c as J,$ as M,a as T,s as R,d as dt,j as Q,h as ft,e as pt,f as L,i as j,t as gt}from"./context.module.6c4ad29d.js";import{r as n,R as $}from"./index.2992ac91.js";import{a as bt,b as $t,c as z,d as ht,e as xt,f as yt}from"./Dialog.module.fcfde88f.js";import{$ as mt,a as vt}from"./OverlayArrow.module.669ad689.js";import{e as Pt,d as Dt,b as ee,g as Ct,$ as Kt,a as Bt}from"./useFocusRing.module.e457a829.js";import{a as G}from"./isScrollable.module.f171907c.js";import{o as Mt}from"./focusSafely.module.072663a8.js";import{a as At}from"./Button.module.aabdc13c.js";import{a as Et}from"./FocusScope.module.f62e1cc3.js";let I=new Map;function St(o){let{locale:e}=ct(),t=e+(o?Object.entries(o).sort((a,s)=>a[0]<s[0]?-1:1).join():"");if(I.has(t))return I.get(t);let r=new Intl.Collator(e,o);return I.set(t,r),r}class X{getItemRect(e){let t=this.ref.current,r=e!=null?t.querySelector(`[data-key="${CSS.escape(e.toString())}"]`):null;if(!r)return null;let a=t.getBoundingClientRect(),s=r.getBoundingClientRect();return{x:s.left-a.left+t.scrollLeft,y:s.top-a.top+t.scrollTop,width:s.width,height:s.height}}getContentSize(){let e=this.ref.current;return{width:e.scrollWidth,height:e.scrollHeight}}getVisibleRect(){let e=this.ref.current;return{x:e.scrollLeft,y:e.scrollTop,width:e.offsetWidth,height:e.offsetHeight}}constructor(e){this.ref=e}}class wt{isDisabled(e){var t;return this.disabledBehavior==="all"&&(((t=e.props)===null||t===void 0?void 0:t.isDisabled)||this.disabledKeys.has(e.key))}getNextKey(e){for(e=this.collection.getKeyAfter(e);e!=null;){let t=this.collection.getItem(e);if(t.type==="item"&&!this.isDisabled(t))return e;e=this.collection.getKeyAfter(e)}return null}getPreviousKey(e){for(e=this.collection.getKeyBefore(e);e!=null;){let t=this.collection.getItem(e);if(t.type==="item"&&!this.isDisabled(t))return e;e=this.collection.getKeyBefore(e)}return null}findKey(e,t,r){let a=this.layoutDelegate.getItemRect(e);if(!a)return null;let s=a;do e=t(e),a=this.layoutDelegate.getItemRect(e);while(a&&r(s,a));return e}isSameRow(e,t){return e.y===t.y||e.x!==t.x}isSameColumn(e,t){return e.x===t.x||e.y!==t.y}getKeyBelow(e){return this.layout==="grid"&&this.orientation==="vertical"?this.findKey(e,t=>this.getNextKey(t),this.isSameRow):this.getNextKey(e)}getKeyAbove(e){return this.layout==="grid"&&this.orientation==="vertical"?this.findKey(e,t=>this.getPreviousKey(t),this.isSameRow):this.getPreviousKey(e)}getNextColumn(e,t){return t?this.getPreviousKey(e):this.getNextKey(e)}getKeyRightOf(e){return this.layout==="grid"?this.orientation==="vertical"?this.getNextColumn(e,this.direction==="rtl"):this.findKey(e,t=>this.getNextColumn(t,this.direction==="rtl"),this.isSameColumn):this.orientation==="horizontal"?this.getNextColumn(e,this.direction==="rtl"):null}getKeyLeftOf(e){return this.layout==="grid"?this.orientation==="vertical"?this.getNextColumn(e,this.direction==="ltr"):this.findKey(e,t=>this.getNextColumn(t,this.direction==="ltr"),this.isSameColumn):this.orientation==="horizontal"?this.getNextColumn(e,this.direction==="ltr"):null}getFirstKey(){let e=this.collection.getFirstKey();for(;e!=null;){let t=this.collection.getItem(e);if((t==null?void 0:t.type)==="item"&&!this.isDisabled(t))return e;e=this.collection.getKeyAfter(e)}return null}getLastKey(){let e=this.collection.getLastKey();for(;e!=null;){let t=this.collection.getItem(e);if(t.type==="item"&&!this.isDisabled(t))return e;e=this.collection.getKeyBefore(e)}return null}getKeyPageAbove(e){let t=this.ref.current,r=this.layoutDelegate.getItemRect(e);if(!r)return null;if(!G(t))return this.getFirstKey();if(this.orientation==="horizontal"){let a=Math.max(0,r.x+r.width-this.layoutDelegate.getVisibleRect().width);for(;r&&r.x>a;)e=this.getKeyAbove(e),r=e==null?null:this.layoutDelegate.getItemRect(e)}else{let a=Math.max(0,r.y+r.height-this.layoutDelegate.getVisibleRect().height);for(;r&&r.y>a;)e=this.getKeyAbove(e),r=e==null?null:this.layoutDelegate.getItemRect(e)}return e!=null?e:this.getFirstKey()}getKeyPageBelow(e){let t=this.ref.current,r=this.layoutDelegate.getItemRect(e);if(!r)return null;if(!G(t))return this.getLastKey();if(this.orientation==="horizontal"){let a=Math.min(this.layoutDelegate.getContentSize().width,r.y-r.width+this.layoutDelegate.getVisibleRect().width);for(;r&&r.x<a;)e=this.getKeyBelow(e),r=e==null?null:this.layoutDelegate.getItemRect(e)}else{let a=Math.min(this.layoutDelegate.getContentSize().height,r.y-r.height+this.layoutDelegate.getVisibleRect().height);for(;r&&r.y<a;)e=this.getKeyBelow(e),r=e==null?null:this.layoutDelegate.getItemRect(e)}return e!=null?e:this.getLastKey()}getKeyForSearch(e,t){if(!this.collator)return null;let r=this.collection,a=t||this.getFirstKey();for(;a!=null;){let s=r.getItem(a),l=s.textValue.slice(0,e.length);if(s.textValue&&this.collator.compare(l,e)===0)return a;a=this.getKeyBelow(a)}return null}constructor(...e){if(e.length===1){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.disabledBehavior=t.disabledBehavior||"all",this.orientation=t.orientation||"vertical",this.direction=t.direction,this.layout=t.layout||"stack",this.layoutDelegate=t.layoutDelegate||new X(t.ref)}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout="stack",this.orientation="vertical",this.disabledBehavior="all",this.layoutDelegate=new X(this.ref);this.layout==="stack"&&this.orientation==="vertical"&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}}function Ft(o){let{selectionManager:e,collection:t,disabledKeys:r,ref:a,keyboardDelegate:s,layoutDelegate:l}=o,u=St({usage:"search",sensitivity:"base"}),d=e.disabledBehavior,i=n.exports.useMemo(()=>s||new wt({collection:t,disabledKeys:r,disabledBehavior:d,ref:a,collator:u,layoutDelegate:l}),[s,l,t,r,a,u,d]),{collectionProps:f}=Je({...o,ref:a,selectionManager:e,keyboardDelegate:i});return{listProps:f}}const Y=new WeakMap;function kt(o){let e=Y.get(o);if(e!=null)return e;e=0;let t=r=>{for(let a of r)a.type==="section"?t(Qe(a,o)):e++};return t(o),Y.set(o,e),e}var te={};te={longPressMessage:"\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0644\u0627\u064B \u0623\u0648 \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 Alt + \u0627\u0644\u0633\u0647\u0645 \u0644\u0623\u0633\u0641\u0644 \u0644\u0641\u062A\u062D \u0627\u0644\u0642\u0627\u0626\u0645\u0629"};var ae={};ae={longPressMessage:"\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E \u0438\u043B\u0438 \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 Alt+ \u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043D\u0430\u0434\u043E\u043B\u0443, \u0437\u0430 \u0434\u0430 \u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u044E\u0442\u043E"};var oe={};oe={longPressMessage:"Dlouh\xFDm stiskem nebo stisknut\xEDm kl\xE1ves Alt + \u0161ipka dol\u016F otev\u0159ete nab\xEDdku"};var re={};re={longPressMessage:"Langt tryk eller tryk p\xE5 Alt + pil ned for at \xE5bne menuen"};var se={};se={longPressMessage:"Dr\xFCcken Sie lange oder dr\xFCcken Sie Alt + Nach-unten, um das Men\xFC zu \xF6ffnen"};var le={};le={longPressMessage:"\u03A0\u03B9\u03AD\u03C3\u03C4\u03B5 \u03C0\u03B1\u03C1\u03B1\u03C4\u03B5\u03C4\u03B1\u03BC\u03AD\u03BD\u03B1 \u03AE \u03C0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Alt + \u03BA\u03AC\u03C4\u03C9 \u03B2\u03AD\u03BB\u03BF\u03C2 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B1\u03BD\u03BF\u03AF\u03BE\u03B5\u03C4\u03B5 \u03C4\u03BF \u03BC\u03B5\u03BD\u03BF\u03CD"};var ie={};ie={longPressMessage:"Long press or press Alt + ArrowDown to open menu"};var ne={};ne={longPressMessage:"Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xFA"};var ue={};ue={longPressMessage:"Men\xFC\xFC avamiseks vajutage pikalt v\xF5i vajutage klahve Alt + allanool"};var ce={};ce={longPressMessage:"Avaa valikko painamalla pohjassa tai n\xE4pp\xE4inyhdistelm\xE4ll\xE4 Alt + Alanuoli"};var de={};de={longPressMessage:"Appuyez de mani\xE8re prolong\xE9e ou appuyez sur Alt\xA0+\xA0Fl\xE8che vers le bas pour ouvrir le menu."};var fe={};fe={longPressMessage:"\u05DC\u05D7\u05E5 \u05DC\u05D7\u05D9\u05E6\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4 \u05D0\u05D5 \u05D4\u05E7\u05E9 Alt + ArrowDown \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D4\u05EA\u05E4\u05E8\u05D9\u05D8"};var pe={};pe={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"};var ge={};ge={longPressMessage:"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xEDl gombot a men\xFC megnyit\xE1s\xE1hoz"};var be={};be={longPressMessage:"Premere a lungo o premere Alt + Freccia gi\xF9 per aprire il menu"};var $e={};$e={longPressMessage:"\u9577\u62BC\u3057\u307E\u305F\u306F Alt+\u4E0B\u77E2\u5370\u30AD\u30FC\u3067\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F"};var he={};he={longPressMessage:"\uAE38\uAC8C \uB204\uB974\uAC70\uB098 Alt + \uC544\uB798\uCABD \uD654\uC0B4\uD45C\uB97C \uB20C\uB7EC \uBA54\uB274 \uC5F4\uAE30"};var xe={};xe={longPressMessage:"Nor\u0117dami atidaryti meniu, nuspaud\u0119 palaikykite arba paspauskite \u201EAlt + ArrowDown\u201C."};var ye={};ye={longPressMessage:"Lai atv\u0113rtu izv\u0113lni, turiet nospiestu vai nospiediet tausti\u0146u kombin\u0101ciju Alt + lejupv\u0113rst\u0101 bulti\u0146a"};var me={};me={longPressMessage:"Langt trykk eller trykk Alt + PilNed for \xE5 \xE5pne menyen"};var ve={};ve={longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"};var Pe={};Pe={longPressMessage:"Naci\u015Bnij i przytrzymaj lub naci\u015Bnij klawisze Alt + Strza\u0142ka w d\xF3\u0142, aby otworzy\u0107 menu"};var De={};De={longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"};var Ce={};Ce={longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"};var Ke={};Ke={longPressMessage:"Ap\u0103sa\u021Bi lung sau ap\u0103sa\u021Bi pe Alt + s\u0103geat\u0103 \xEEn jos pentru a deschide meniul"};var Be={};Be={longPressMessage:"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Alt + \u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043D\u0438\u0437, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"};var Me={};Me={longPressMessage:"Ponuku otvor\xEDte dlh\xFDm stla\u010Den\xEDm alebo stla\u010Den\xEDm kl\xE1vesu Alt + kl\xE1vesu so \u0161\xEDpkou nadol"};var Ae={};Ae={longPressMessage:"Za odprtje menija pritisnite in dr\u017Eite gumb ali pritisnite Alt+pu\u0161\u010Dica navzdol"};var Ee={};Ee={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"};var Se={};Se={longPressMessage:"H\xE5ll nedtryckt eller tryck p\xE5 Alt + pil ned\xE5t f\xF6r att \xF6ppna menyn"};var we={};we={longPressMessage:"Men\xFCy\xFC a\xE7mak i\xE7in uzun bas\u0131n veya Alt + A\u015Fa\u011F\u0131 Ok tu\u015Funa bas\u0131n"};var Fe={};Fe={longPressMessage:"\u0414\u043E\u0432\u0433\u043E \u0430\u0431\u043E \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043E\u043C\u0431\u0456\u043D\u0430\u0446\u0456\u044E \u043A\u043B\u0430\u0432\u0456\u0448 Alt \u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430 \u0432\u043D\u0438\u0437, \u0449\u043E\u0431 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E"};var ke={};ke={longPressMessage:"\u957F\u6309\u6216\u6309 Alt + \u5411\u4E0B\u65B9\u5411\u952E\u4EE5\u6253\u5F00\u83DC\u5355"};var Re={};Re={longPressMessage:"\u9577\u6309\u6216\u6309 Alt+\u5411\u4E0B\u9375\u4EE5\u958B\u555F\u529F\u80FD\u8868"};var Ie={};Ie={"ar-AE":te,"bg-BG":ae,"cs-CZ":oe,"da-DK":re,"de-DE":se,"el-GR":le,"en-US":ie,"es-ES":ne,"et-EE":ue,"fi-FI":ce,"fr-FR":de,"he-IL":fe,"hr-HR":pe,"hu-HU":ge,"it-IT":be,"ja-JP":$e,"ko-KR":he,"lt-LT":xe,"lv-LV":ye,"nb-NO":me,"nl-NL":ve,"pl-PL":Pe,"pt-BR":De,"pt-PT":Ce,"ro-RO":Ke,"ru-RU":Be,"sk-SK":Me,"sl-SI":Ae,"sr-SP":Ee,"sv-SE":Se,"tr-TR":we,"uk-UA":Fe,"zh-CN":ke,"zh-TW":Re};function Rt(o){return o&&o.__esModule?o.default:o}function It(o,e,t){let{type:r="menu",isDisabled:a,trigger:s="press"}=o,l=J(),{triggerProps:u,overlayProps:d}=bt({type:r},e,t),i=c=>{if(!a&&!(s==="longPress"&&!c.altKey)&&t&&t.current)switch(c.key){case"Enter":case" ":if(s==="longPress")return;case"ArrowDown":"continuePropagation"in c||c.stopPropagation(),c.preventDefault(),e.toggle("first");break;case"ArrowUp":"continuePropagation"in c||c.stopPropagation(),c.preventDefault(),e.toggle("last");break;default:"continuePropagation"in c&&c.continuePropagation()}},f=$t(Rt(Ie),"@react-aria/menu"),{longPressProps:g}=et({isDisabled:a||s!=="longPress",accessibilityDescription:f.format("longPressMessage"),onLongPressStart(){e.close()},onLongPress(){e.open("first")}}),b={onPressStart(c){c.pointerType!=="touch"&&c.pointerType!=="keyboard"&&!a&&e.open(c.pointerType==="virtual"?"first":null)},onPress(c){c.pointerType==="touch"&&!a&&e.toggle()}};return delete u.onPress,{menuTriggerProps:{...u,...s==="press"?b:g,id:l,onKeyDown:i},menuProps:{...d,"aria-labelledby":l,autoFocus:e.focusStrategy||!0,onClose:e.close}}}const ze=new WeakMap;function zt(o,e,t){let{shouldFocusWrap:r=!0,onKeyDown:a,onKeyUp:s,...l}=o;!o["aria-label"]&&!o["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let u=M(o,{labelable:!0}),{listProps:d}=Ft({...l,ref:t,selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,shouldFocusWrap:r,linkBehavior:"override"});return ze.set(e,{onClose:o.onClose,onAction:o.onAction}),{menuProps:T(u,{onKeyDown:a,onKeyUp:s},{role:"menu",...d,onKeyDown:i=>{i.key!=="Escape"&&d.onKeyDown(i)}})}}function Nt(o,e,t){let{id:r,key:a,closeOnSelect:s,isVirtualized:l,"aria-haspopup":u,onPressStart:d,onPressUp:i,onPress:f,onPressChange:g,onPressEnd:b,onHoverStart:c,onHoverChange:P,onHoverEnd:D,onKeyDown:x,onKeyUp:C,onFocus:A,onFocusChange:Le,onBlur:je}=o,y=!!u;var E;let m=(E=o.isDisabled)!==null&&E!==void 0?E:e.selectionManager.isDisabled(a);var S;let O=(S=o.isSelected)!==null&&S!==void 0?S:e.selectionManager.isSelected(a),w=ze.get(e),h=e.collection.getItem(a),v=o.onClose||w.onClose,_e=Pt(),H=p=>{var k;if(!y){if(!(h==null||(k=h.props)===null||k===void 0)&&k.onAction&&h.props.onAction(),w.onAction){let Ze=w.onAction;Ze(a)}p.target instanceof HTMLAnchorElement&&_e.open(p.target,p,h.props.href,h.props.routerOptions)}},F="menuitem";y||(e.selectionManager.selectionMode==="single"?F="menuitemradio":e.selectionManager.selectionMode==="multiple"&&(F="menuitemcheckbox"));let U=R(),V=R(),W=R(),K={id:r,"aria-disabled":m||void 0,role:F,"aria-label":o["aria-label"],"aria-labelledby":U,"aria-describedby":[V,W].filter(Boolean).join(" ")||void 0,"aria-controls":o["aria-controls"],"aria-haspopup":u,"aria-expanded":o["aria-expanded"]};e.selectionManager.selectionMode!=="none"&&!y&&(K["aria-checked"]=O),l&&(K["aria-posinset"]=h==null?void 0:h.index,K["aria-setsize"]=kt(e.collection));let Oe=p=>{p.pointerType==="keyboard"&&H(p),d==null||d(p)},He=p=>{p.pointerType!=="keyboard"&&(H(p),!y&&v&&(s!=null?s:e.selectionManager.selectionMode!=="multiple"||e.selectionManager.isLink(a))&&v()),i==null||i(p)},{itemProps:B,isFocused:Ue}=tt({selectionManager:e.selectionManager,key:a,ref:t,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none"}),{pressProps:Ve,isPressed:We}=Dt({onPressStart:Oe,onPress:f,onPressUp:He,onPressChange:g,onPressEnd:b,isDisabled:m}),{hoverProps:qe}=ee({isDisabled:m,onHoverStart(p){Mt()||(e.selectionManager.setFocused(!0),e.selectionManager.setFocusedKey(a)),c==null||c(p)},onHoverChange:P,onHoverEnd:D}),{keyboardProps:Ge}=At({onKeyDown:p=>{if(p.repeat){p.continuePropagation();return}switch(p.key){case" ":!m&&e.selectionManager.selectionMode==="none"&&!y&&s!==!1&&v&&v();break;case"Enter":!m&&s!==!1&&!y&&v&&v();break;default:y||p.continuePropagation(),x==null||x(p);break}},onKeyUp:C}),{focusProps:Xe}=Ct({onBlur:je,onFocus:A,onFocusChange:Le}),q=M(h.props);delete q.id;let Ye=Kt(h.props);return{menuItemProps:{...K,...T(q,Ye,y?{onFocus:B.onFocus,"data-key":B["data-key"]}:B,Ve,qe,Ge,Xe),tabIndex:B.tabIndex!=null?-1:void 0},labelProps:{id:U},descriptionProps:{id:V},keyboardShortcutProps:{id:W},isFocused:Ue,isSelected:O,isPressed:We,isDisabled:m}}function Tt(o){let{heading:e,"aria-label":t}=o,r=J();return{itemProps:{role:"presentation"},headingProps:e?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":t,"aria-labelledby":e?r:void 0}}}const Lt=n.exports.createContext({});function jt(o){let e=mt(o),[t,r]=n.exports.useState(null),[a,s]=n.exports.useState([]),l=()=>{s([]),e.close()};return{focusStrategy:t,...e,open(i=null){r(i),e.open()},toggle(i=null){r(i),e.toggle()},close(){l()},expandedKeysStack:a,openSubmenu:(i,f)=>{s(g=>f>g.length?g:[...g.slice(0,f),i])},closeSubmenu:(i,f)=>{s(g=>g[f]===i?g.slice(0,f):g)}}}class _t{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}constructor(e,{expandedKeys:t}={}){this.keyMap=new Map,this.iterable=e,t=t||new Set;let r=l=>{if(this.keyMap.set(l.key,l),l.childNodes&&(l.type==="section"||t.has(l.key)))for(let u of l.childNodes)r(u)};for(let l of e)r(l);let a,s=0;for(let[l,u]of this.keyMap)a?(a.nextKey=l,u.prevKey=a.key):(this.firstKey=l,u.prevKey=void 0),u.type==="item"&&(u.index=s++),a=u,a.nextKey=void 0;this.lastKey=a==null?void 0:a.key}}function Ot(o){let{onExpandedChange:e}=o,[t,r]=dt(o.expandedKeys?new Set(o.expandedKeys):void 0,o.defaultExpandedKeys?new Set(o.defaultExpandedKeys):new Set,e),a=at(o),s=n.exports.useMemo(()=>o.disabledKeys?new Set(o.disabledKeys):new Set,[o.disabledKeys]),l=ot(o,n.exports.useCallback(d=>new _t(d,{expandedKeys:t}),[t]),null);return n.exports.useEffect(()=>{a.focusedKey!=null&&!l.getItem(a.focusedKey)&&a.setFocusedKey(null)},[l,a.focusedKey]),{collection:l,expandedKeys:t,disabledKeys:s,toggleKey:d=>{r(Ht(t,d))},setExpandedKeys:r,selectionManager:new rt(l,a)}}function Ht(o,e){let t=new Set(o);return t.has(e)?t.delete(e):t.add(e),t}const Ut=n.exports.createContext({}),Vt=n.exports.createContext({}),Wt=n.exports.createContext({}),Ne=n.exports.createContext(null),_=n.exports.createContext(null),Te=n.exports.createContext(null);function ia(o){let e=jt(o),t=n.exports.useRef(null),{menuTriggerProps:r,menuProps:a}=It({...o,type:"menu"},e,t),[s,l]=n.exports.useState(null),u=n.exports.useCallback(()=>{t.current&&l(t.current.offsetWidth+"px")},[t]);vt({ref:t,onResize:u});let d=n.exports.useRef(null);return $.createElement(j,{values:[[Ne,{...a,ref:d}],[xt,e],[Te,e],[z,{trigger:"MenuTrigger",triggerRef:t,scrollRef:d,placement:"bottom start",style:{"--trigger-width":s}}]]},$.createElement(yt,{...r,ref:t,isPressed:e.isOpen},o.children))}const qt=n.exports.createContext(null);function Gt(o,e){return[o,e]=Q(o,e,Ne),$.createElement(lt,{content:$.createElement(it,o)},t=>t.size>0&&$.createElement(Xt,{props:o,collection:t,menuRef:e}))}function Xt({props:o,collection:e,menuRef:t}){let r=Ot({...o,collection:e,children:void 0}),[a,s]=n.exports.useState(null),{isVirtualized:l,CollectionRoot:u}=n.exports.useContext(Z),{menuProps:d}=zt({...o,isVirtualized:l},r,t),i=n.exports.useContext(Te),f=n.exports.useContext(z),g=(f==null?void 0:f.trigger)==="SubmenuTrigger";ht({ref:t,onInteractOutside:x=>{i&&!(a!=null&&a.contains(x.target))&&i.close()},isDisabled:g||(i==null?void 0:i.expandedKeysStack.length)===0});let b=n.exports.useRef(null),[c,P]=n.exports.useState({left:0});n.exports.useEffect(()=>{if(a&&b.current!==a&&c.left===0){b.current=a;let{left:x}=a.getBoundingClientRect();P({left:-1*x})}},[c,a]);let D=L({defaultClassName:"react-aria-Menu",className:o.className,style:o.style,values:{}});return $.createElement(Et,null,$.createElement("div",{...M(o),...d,...D,ref:t,slot:o.slot||void 0,onScroll:o.onScroll},$.createElement(j,{values:[[_,r],[Vt,{elementType:"div"}],[z,{UNSTABLE_portalContainer:a||void 0}],[nt,{render:Yt}],[qt,{parentMenuRef:t}],[N,null]]},$.createElement(u,{collection:e,persistedKeys:ut(r.selectionManager.focusedKey),scrollRef:t}))),$.createElement("div",{ref:s,style:{width:"100vw",position:"absolute",top:0,...c}}))}const na=n.exports.forwardRef(Gt);function Yt(o,e,t){var r,a;let s=n.exports.useContext(_),{CollectionBranch:l}=n.exports.useContext(Z),[u,d]=gt();var i;let{headingProps:f,groupProps:g}=Tt({heading:d,"aria-label":(i=t.props["aria-label"])!==null&&i!==void 0?i:void 0}),b=L({defaultClassName:"react-aria-Section",className:(r=t.props)===null||r===void 0?void 0:r.className,style:(a=t.props)===null||a===void 0?void 0:a.style,values:{}});return $.createElement("section",{...M(o),...g,...b,ref:e},$.createElement(Ut.Provider,{value:{...f,ref:u}},$.createElement(l,{collection:s.collection,parent:t})))}const N=n.exports.createContext(null),ua=st("item",function(e,t,r){var a;[e,t]=Q(e,t,N);let s=(a=ft(N))===null||a===void 0?void 0:a.id,l=n.exports.useContext(_),u=pt(t),{menuItemProps:d,labelProps:i,descriptionProps:f,keyboardShortcutProps:g,...b}=Nt({...e,id:s,key:r.key},l,u),{isFocusVisible:c,focusProps:P}=Bt(),{hoverProps:D,isHovered:x}=ee({isDisabled:b.isDisabled}),C=L({...e,id:void 0,children:r.rendered,defaultClassName:"react-aria-MenuItem",values:{...b,isHovered:x,isFocusVisible:c,selectionMode:l.selectionManager.selectionMode,selectionBehavior:l.selectionManager.selectionBehavior,hasSubmenu:!!e["aria-haspopup"],isOpen:e["aria-expanded"]==="true"}}),A=e.href?"a":"div";return $.createElement(A,{...T(d,P,D),...C,ref:u,"data-disabled":b.isDisabled||void 0,"data-hovered":x||void 0,"data-focused":b.isFocused||void 0,"data-focus-visible":c||void 0,"data-pressed":b.isPressed||void 0,"data-selected":b.isSelected||void 0,"data-selection-mode":l.selectionManager.selectionMode==="none"?void 0:l.selectionManager.selectionMode,"data-has-submenu":!!e["aria-haspopup"]||void 0,"data-open":e["aria-expanded"]==="true"||void 0},$.createElement(j,{values:[[Lt,{slots:{label:i,description:f}}],[Wt,g]]},C.children))});export{na as $,ia as a,ua as b};
