import{s as o,R as c,j as n,F as f,a as e,W as b}from"./index.73d4fe07.js";import{B as w,a as g}from"./BodyPortal.b1fb2ffc.js";import{N as v,a as x,b as y}from"./NavBar.db16e06c.js";import{c as t}from"./theme.492f6a78.js";import"./Dialog.module.b99d1c61.js";import"./Button.module.3f0cc27b.js";import"./useFocusRing.module.aa02cab0.js";import"./context.module.e9becb0e.js";import"./useButton.module.8a0b42f3.js";import"./VisuallyHidden.module.e29ae76d.js";import"./OverlayArrow.module.6b3727d6.js";import"./Collection.module.f0bab75e.js";import"./useTreeState.module.6cb84fde.js";import"./palette.15e4d008.js";const $=o(v)`
  color: ${t.palette.gray};
  font-size: 1.4rem;
`,p=o(x)`
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
`,B=o(w)`
  background-color: ${t.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,k=o.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function I({onClick:r,className:i}){return e("div",{className:i,children:e("button",{type:"button",onClick:r,"aria-label":"close form",children:"Back"})})}const M=o(I)`
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
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`,C=({contactFormParams:r,children:i})=>{const[m,l]=c.useState(),u=c.useMemo(()=>{const a="https://openstax.org/embedded/contact",d=r.map(({key:s,value:h})=>encodeURIComponent(`${s}=${h}`)).map(s=>`body=${s}`).join("&");return`${a}?${d}`},[r]);return c.useEffect(()=>{const a=({data:d})=>{d==="CONTACT_FORM_SUBMITTED"&&l(void 0)};return window.addEventListener("message",a,!1),()=>window.removeEventListener("message",a,!1)},[]),n(f,{children:[n($,{label:"Help","aria-label":"Help menu",children:[e(p,{onAction:()=>l(u),children:"Report an issue"}),i]}),m&&n(B,{children:[e(k,{title:"Contact form",src:m}),e(M,{onClick:()=>l(void 0)})]})]})},A=b`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,O=()=>n(g.Provider,{value:["nav","root"],children:[e(A,{}),e(y,{logo:!0,children:e(C,{contactFormParams:[{key:"userId",value:"test"}],children:e(p,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{O as Default};
