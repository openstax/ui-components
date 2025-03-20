import{s as i,R as u,a as e,F as g,j as r,W as C}from"./index.f09d4694.js";import{B as x}from"./BodyPortal.a7e76a6d.js";import{N as v,a as y,b as I}from"./NavBar.4440c688.js";import{c as s}from"./theme.e36af20f.js";import"./Dialog.module.337fe274.js";import"./OverlayArrow.module.1c35a28b.js";import"./context.module.98926726.js";import"./useButton.module.bc2a963e.js";import"./Collection.module.e75541ed.js";import"./palette.15e4d008.js";const o={Button:i(v)`
    color: ${s.palette.gray};
    font-size: 1.4rem;
  `,Item:i(y)`
    color: ${s.palette.neutralDarker};
    text-decoration: none;

    :focus-visible {
      outline: 0;
      background: ${s.palette.neutralLighter};
    }
    :hover {
      color: ${s.palette.neutralDarker};
      text-decoration: none;
    }
  `},k=i.div`
  background-color: #F5F5F5;
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,F=i.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function M({onClick:n,className:t}){return e("div",{className:t,children:e("button",{type:"button",onClick:n,"aria-label":"close form",children:"Back"})})}const B=i(M)`
  border-top: 0.1rem solid #D5D5D5;
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: #F5F5F5;
  padding-left: 1.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;

  @media(min-width: 56em) {
    padding: 0 calc(50vw - 43rem);
  }

  button {
    height: 3rem;
    background-color: white;
    border: 1px solid #D5D5D5;
    box-shadow: 0px 2px 4px 0px #00000033;
    width: 9rem;
    border-radius: 0.5rem;
  }
`,h=r("svg",{role:"img",width:"12",height:"11",viewBox:"0 0 12 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("title",{children:"new tab"}),e("path",{d:"M12 0.832214V3.49855C12 3.94565 11.4592 4.1648 11.1464 3.85211L10.4025 3.10817L5.32915 8.18157C5.13387 8.37684 4.81731 8.37684 4.62204 8.18157L4.15065 7.71017C3.95538 7.5149 3.95538 7.19832 4.15065 7.00307L9.22408 1.92963L8.48027 1.18578C8.16629 0.871798 8.38867 0.332214 8.83383 0.332214H11.5C11.7761 0.332214 12 0.556069 12 0.832214ZM8.47977 5.97376L8.14644 6.30709C8.10001 6.35352 8.06318 6.40864 8.03805 6.46931C8.01293 6.52997 8 6.59499 8 6.66065V9.66555H1.33333V2.99888H6.83333C6.96594 2.99887 7.0931 2.9462 7.18688 2.85244L7.52021 2.51911C7.83519 2.20411 7.6121 1.66555 7.16667 1.66555H1C0.447708 1.66555 0 2.11326 0 2.66555V9.99888C0 10.5512 0.447708 10.9989 1 10.9989H8.33333C8.88562 10.9989 9.33333 10.5512 9.33333 9.99888V6.3273C9.33333 5.88184 8.79475 5.65876 8.47977 5.97376Z",fill:"#6F6F6F"})]}),H=(n=[])=>{const[t,c]=u.useState();function b({contactFormParams:a}){const d=u.useMemo(()=>{const l="https://openstax.org/embedded/contact",m=a.map(({key:p,value:w})=>encodeURIComponent(`${p}=${w}`)).map(p=>`body=${p}`).join("&");return`${l}?${m}`},[a]);return e(g,{children:r(o.Button,{label:"Help","aria-label":"Help menu",children:[n.map((l,m)=>e(o.Item,{onAction:l.callback,children:l.label},m)),e(o.Item,{onAction:()=>c(d),children:"Report an issue"}),r(o.Item,{href:"https://help.openstax.org/s/window-search/assignable",target:"_blank",children:["Support center\xA0",h]}),r(o.Item,{href:"https://openstax.org/accessibility-statement",target:"_blank",children:["Accessibility statement\xA0",h]}),e(o.Item,{onAction:()=>{window.parent.postMessage({type:"TriggerConsentModalMessage"},"*")},children:"Cookie settings"})]})})}function f(){return u.useEffect(()=>{const a=({data:d})=>{d==="CONTACT_FORM_SUBMITTED"&&c(void 0)};return window.addEventListener("message",a,!1),()=>window.removeEventListener("message",a,!1)},[]),t?r(k,{children:[e(F,{title:"Contact form",src:t}),e(B,{onClick:()=>c(void 0)})]}):null}return[b,f]},A=C`
  #ladle-root {
    position: absolute;
    right: 0;
  }
`,j=()=>{const[n,t]=H([{label:"Test Callback",callback:()=>window.alert("Ran HelpMenu callback function")}]);return r(x.Provider,{value:["nav","root"],children:[e(A,{}),e(I,{logo:!0,children:e(n,{contactFormParams:[{key:"userId",value:"test"}]})}),e(t,{})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{j as Default};
