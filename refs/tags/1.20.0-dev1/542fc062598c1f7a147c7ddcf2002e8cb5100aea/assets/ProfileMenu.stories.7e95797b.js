import{a as e,s as h,j as o,W as b}from"./index.12b7f06d.js";import{a as d}from"./BodyPortal.aeb3ab87.js";import{$ as w}from"./Button.module.23d07276.js";import{a as $,$ as N}from"./Dialog.module.0bf61ff8.js";import{c as f,d as P}from"./theme.0fc322b0.js";import{f as A,b as x,d as m}from"./NavBarMenuButtons.a5b399ab.js";import"./useFocusRing.module.0c0506dc.js";import"./context.module.f77430b2.js";import"./useButton.module.ab5eefe6.js";import"./VisuallyHidden.module.99542961.js";import"./OverlayArrow.module.83406366.js";import"./Collection.module.11253500.js";import"./useTreeState.module.abd4516e.js";import"./palette.5e342580.js";const y=({className:t})=>e("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor","aria-hidden":"true",children:e("path",{fill:"currentColor",d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"})}),C=h(w)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  line-height: 1.6rem;
  font-size: 1.4rem;
  color: ${f.palette.white};
  background-color: ${f.palette.darkTeal};
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
`,I=h(A)`
  min-width: 10rem;
  margin-top: 0.4rem;
`,s=h(x)`
  color: ${f.palette.neutralDarker};
`;function M(t){var l,c;const n=((l=t==null?void 0:t.firstName)==null?void 0:l.charAt(0))||"",a=((c=t==null?void 0:t.lastName)==null?void 0:c.charAt(0))||"";return!n&&!a?null:(n+a).toUpperCase()}const r=({user:t,onAction:n,profileLabel:a="Profile",logoutLabel:l="Log out",ariaLabel:c="Account actions",children:p,"data-testid":g})=>{const v=M(t);return o($,{children:[e(C,{"aria-label":c,"data-testid":g,children:v||e(y,{})}),e(I,{placement:"bottom end",children:o(N,{onAction:n,children:[p,e(s,{id:"profile",children:a}),e(s,{id:"logout",children:l})]})})]})},u=b`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,i=t=>{t==="profile"?window.alert("Navigating to profile..."):t==="logout"?window.alert("Logging out..."):window.alert(`Action: ${t}`)},G=()=>o(d.Provider,{value:["nav","root"],children:[e(u,{}),e(m,{logo:!0,children:e(r,{user:{firstName:"John",lastName:"Doe"},onAction:i})})]}),q=()=>o(d.Provider,{value:["nav","root"],children:[e(u,{}),e(m,{logo:!0,children:e(r,{onAction:i})})]}),H=()=>o(d.Provider,{value:["nav","root"],children:[e(u,{}),e(m,{logo:!0,children:e(r,{user:{firstName:"Jane",lastName:"Smith"},onAction:i,profileLabel:"My Account",logoutLabel:"Sign Out"})})]}),K=()=>o(d.Provider,{value:["nav","root"],children:[e(u,{}),e(m,{logo:!0,children:o(r,{user:{firstName:"Jane",lastName:"Smith"},onAction:i,children:[e(s,{id:"settings",children:"Settings"}),e(s,{id:"preferences",children:"Preferences"})]})})]}),Q=()=>e("div",{style:{padding:"2rem"},children:e(r,{user:{firstName:"Test",lastName:"User"},onAction:i})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Q as Standalone,H as WithCustomLabels,K as WithCustomMenuItems,G as WithInitials,q as WithUserIconFallback};
