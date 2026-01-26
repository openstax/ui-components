import{a as e,s as f,j as o,W as b}from"./index.32774466.js";import{a as d}from"./BodyPortal.043578c6.js";import{$ as w}from"./Button.module.deb7379c.js";import{a as $,$ as N}from"./Dialog.module.681a190a.js";import{c as h,d as P}from"./theme.c99223a2.js";import{f as A,b as x,d as m}from"./NavBarMenuButtons.4f4a9130.js";import"./useFocusRing.module.cf862bf4.js";import"./context.module.c8cee43f.js";import"./useButton.module.ea2cf59e.js";import"./VisuallyHidden.module.7af997a3.js";import"./OverlayArrow.module.fb4ac2cb.js";import"./Collection.module.f1ec8c81.js";import"./useTreeState.module.1e78d99d.js";import"./palette.15e4d008.js";const y=({className:t})=>e("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor","aria-hidden":"true",children:e("path",{fill:"currentColor",d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"})}),C=f(w)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  line-height: 1.6rem;
  font-size: 1.4rem;
  color: ${h.palette.white};
  background-color: #007297;
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
`,I=f(A)`
  min-width: 10rem;
  margin-top: 0.4rem;
`,s=f(x)`
  color: ${h.palette.neutralDarker};
`;function M(t){var l,c;const n=((l=t==null?void 0:t.firstName)==null?void 0:l.charAt(0))||"",a=((c=t==null?void 0:t.lastName)==null?void 0:c.charAt(0))||"";return!n&&!a?null:(n+a).toUpperCase()}const r=({user:t,onAction:n,profileLabel:a="Profile",logoutLabel:l="Log out",ariaLabel:c="Account actions",children:p,"data-testid":g})=>{const v=M(t);return o($,{children:[e(C,{"aria-label":c,"data-testid":g,children:v||e(y,{})}),e(I,{placement:"bottom end",children:o(N,{onAction:n,children:[p,e(s,{id:"profile",children:a}),e(s,{id:"logout",children:l})]})})]})},u=b`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,i=t=>{t==="profile"?window.alert("Navigating to profile..."):t==="logout"?window.alert("Logging out..."):window.alert(`Action: ${t}`)},T=()=>o(d.Provider,{value:["nav","root"],children:[e(u,{}),e(m,{logo:!0,children:e(r,{user:{firstName:"John",lastName:"Doe"},onAction:i})})]}),q=()=>o(d.Provider,{value:["nav","root"],children:[e(u,{}),e(m,{logo:!0,children:e(r,{onAction:i})})]}),H=()=>o(d.Provider,{value:["nav","root"],children:[e(u,{}),e(m,{logo:!0,children:e(r,{user:{firstName:"Jane",lastName:"Smith"},onAction:i,profileLabel:"My Account",logoutLabel:"Sign Out"})})]}),K=()=>o(d.Provider,{value:["nav","root"],children:[e(u,{}),e(m,{logo:!0,children:o(r,{user:{firstName:"Jane",lastName:"Smith"},onAction:i,children:[e(s,{id:"settings",children:"Settings"}),e(s,{id:"preferences",children:"Preferences"})]})})]}),Q=()=>e("div",{style:{padding:"2rem"},children:e(r,{user:{firstName:"Test",lastName:"User"},onAction:i})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Q as Standalone,H as WithCustomLabels,K as WithCustomMenuItems,T as WithInitials,q as WithUserIconFallback};
