import{a as e,s as f,j as r,W as g}from"./index.44e7dce0.js";import{a as n}from"./BodyPortal.ed3d49bd.js";import{$ as v}from"./Button.module.ec48a869.js";import{a as b,$ as w}from"./Dialog.module.bb79669d.js";import{c as u,d as P}from"./theme.3505e05e.js";import{f as $,b as N,d as l}from"./NavBarMenuButtons.ae97f36f.js";import"./useFocusRing.module.933bdf96.js";import"./context.module.9404bc0d.js";import"./useButton.module.3d03dc55.js";import"./VisuallyHidden.module.38d71624.js";import"./OverlayArrow.module.925b3370.js";import"./Collection.module.c7e0e3c5.js";import"./useTreeState.module.eb632c9b.js";import"./palette.5e342580.js";const A=({className:o})=>e("svg",{className:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor","aria-hidden":"true",children:e("path",{fill:"currentColor",d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"})}),x=f(v)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  line-height: 1.6rem;
  font-size: 1.4rem;
  color: ${u.palette.white};
  background-color: ${u.palette.darkTeal};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
  }

  &[data-focused],
  &[data-focus-visible] {
    ${P}
    outline-offset: 0.2rem;
  }

  svg {
    width: 1.5rem;
  }
`,y=f($)`
  min-width: 10rem;
  margin-top: 0.4rem;
`,t=f(N)`
  color: ${u.palette.neutralDarker};
  text-decoration: none;
`;function C(o){var h,m;const d=((h=o==null?void 0:o.firstName)==null?void 0:h.charAt(0))||"",s=((m=o==null?void 0:o.lastName)==null?void 0:m.charAt(0))||"";return!d&&!s?null:(d+s).toUpperCase()}const i=({user:o,onAction:d,ariaLabel:s="Account actions",children:h,"data-testid":m})=>{const p=C(o);return r(b,{children:[e(x,{"aria-label":s,"data-testid":m,children:p||e(A,{})}),e(y,{placement:"bottom end",children:e(w,{onAction:d,children:h})})]})},a=g`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,c=o=>{window.alert(`Action: ${o}`)},O=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"John",lastName:"Doe"},onAction:c,children:[e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})})]}),T=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{onAction:c,children:[e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})})]}),G=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"Jane",lastName:"Smith"},onAction:c,children:[e(t,{id:"profile",children:"My Account"}),e(t,{id:"logout",children:"Sign Out"})]})})]}),q=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"Jane",lastName:"Smith"},children:[e(t,{href:"/account/profile",children:"Profile"}),e(t,{href:"/account/settings",children:"Settings"}),e(t,{onAction:()=>{window.alert("Logging out...")},children:"Log out"})]})})]}),H=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"Jane",lastName:"Smith"},onAction:c,children:[e(t,{id:"settings",children:"Settings"}),e(t,{id:"preferences",children:"Preferences"}),e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})})]}),K=()=>e("div",{style:{padding:"2rem"},children:r(i,{user:{firstName:"Test",lastName:"User"},onAction:c,children:[e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{K as Standalone,G as WithCustomLabels,H as WithCustomMenuItems,O as WithInitials,q as WithLinks,T as WithUserIconFallback};
