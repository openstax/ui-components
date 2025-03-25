import{s as i,R as u,a as e,F as g,j as n,W as x}from"./index.c4ccf2f7.js";import{B as C}from"./BodyPortal.c858fa90.js";import{N as v,a as y,b as I}from"./NavBar.f6d0e620.js";import{c as t}from"./theme.702baa9f.js";import"./Dialog.module.ddeedd4d.js";import"./OverlayArrow.module.631996cd.js";import"./context.module.8c7ca040.js";import"./useButton.module.4efb775d.js";import"./Collection.module.e61f4308.js";import"./palette.15e4d008.js";const r={Button:i(v)`
    color: ${t.palette.gray};
    font-size: 1.4rem;
  `,Item:i(y)`
    color: ${t.palette.neutralDarker};
    text-decoration: none;

    :focus-visible {
      outline: 0;
      background: ${t.palette.neutralLighter};
    }
    :hover {
      color: ${t.palette.neutralDarker};
      text-decoration: none;
    }
  `},k=i.div`
  background-color: ${t.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,M=i.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function B({onClick:a,className:o}){return e("div",{className:o,children:e("button",{type:"button",onClick:a,"aria-label":"close form",children:"Back"})})}const $=i(B)`
  border-top: 0.1rem solid ${t.palette.pale};
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${t.palette.neutralBright};
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
    background-color: ${t.palette.white};
    border: 1px solid ${t.palette.pale};
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`,h=n("svg",{role:"img",width:"12",height:"11",viewBox:"0 0 12 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("title",{children:"new tab"}),e("path",{d:"M12 0.832214V3.49855C12 3.94565 11.4592 4.1648 11.1464 3.85211L10.4025 3.10817L5.32915 8.18157C5.13387 8.37684 4.81731 8.37684 4.62204 8.18157L4.15065 7.71017C3.95538 7.5149 3.95538 7.19832 4.15065 7.00307L9.22408 1.92963L8.48027 1.18578C8.16629 0.871798 8.38867 0.332214 8.83383 0.332214H11.5C11.7761 0.332214 12 0.556069 12 0.832214ZM8.47977 5.97376L8.14644 6.30709C8.10001 6.35352 8.06318 6.40864 8.03805 6.46931C8.01293 6.52997 8 6.59499 8 6.66065V9.66555H1.33333V2.99888H6.83333C6.96594 2.99887 7.0931 2.9462 7.18688 2.85244L7.52021 2.51911C7.83519 2.20411 7.6121 1.66555 7.16667 1.66555H1C0.447708 1.66555 0 2.11326 0 2.66555V9.99888C0 10.5512 0.447708 10.9989 1 10.9989H8.33333C8.88562 10.9989 9.33333 10.5512 9.33333 9.99888V6.3273C9.33333 5.88184 8.79475 5.65876 8.47977 5.97376Z",fill:"#6F6F6F"})]}),H=(a=[])=>{const[o,c]=u.useState();function f({contactFormParams:l}){const d=u.useMemo(()=>{const s="https://openstax.org/embedded/contact",m=l.map(({key:p,value:w})=>encodeURIComponent(`${p}=${w}`)).map(p=>`body=${p}`).join("&");return`${s}?${m}`},[l]);return e(g,{children:n(r.Button,{label:"Help","aria-label":"Help menu",children:[a.map((s,m)=>e(r.Item,{onAction:s.callback,children:s.label},m)),e(r.Item,{onAction:()=>c(d),children:"Report an issue"}),n(r.Item,{href:"https://help.openstax.org/s/window-search/assignable",target:"_blank",children:["Support center\xA0",h]}),n(r.Item,{href:"https://openstax.org/accessibility-statement",target:"_blank",children:["Accessibility statement\xA0",h]}),e(r.Item,{onAction:()=>{window.parent.postMessage({type:"TriggerConsentModalMessage"},"*")},children:"Cookie settings"})]})})}function b(){return u.useEffect(()=>{const l=({data:d})=>{d==="CONTACT_FORM_SUBMITTED"&&c(void 0)};return window.addEventListener("message",l,!1),()=>window.removeEventListener("message",l,!1)},[]),o?n(k,{children:[e(M,{title:"Contact form",src:o}),e($,{onClick:()=>c(void 0)})]}):null}return[f,b]},A=x`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,D=()=>{const[a,o]=H([{label:"Test Callback",callback:()=>window.alert("Ran HelpMenu callback function")}]);return n(C.Provider,{value:["nav","root"],children:[e(A,{}),e(I,{logo:!0,children:e(a,{contactFormParams:[{key:"userId",value:"test"}]})}),e(o,{})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default};
