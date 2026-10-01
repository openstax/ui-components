import{j as e,s as f,a as r,W as g}from"./index-b07cf1ee.js";import{a as n}from"./BodyPortal-477456b6.js";import{$ as v}from"./Button-f6edc5ce.js";import{$ as b,a as w}from"./Dialog-08fb6e04.js";import{c as u,d as P}from"./theme-fb0a1e0b.js";import{e as N,a as $,b as l}from"./NavBar-d2876bf7.js";import"./useFocusRing-191f8b7d.js";import"./Hidden-94d00f79.js";import"./useFocusable-51a5db58.js";import"./useButton-a6b3f5b4.js";import"./VisuallyHidden-0af0323f.js";import"./OverlayArrow-2bb3b8e6.js";import"./context-b89d176e.js";import"./Collection-316fe655.js";import"./FocusScope-0d3114dd.js";import"./useTreeState-e57a0fd9.js";import"./palette-97ed00c9.js";/* empty css              */import"./MenuPopover-a001e714.js";const A=({className:o})=>e("svg",{className:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor","aria-hidden":"true",children:e("path",{fill:"currentColor",d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"})}),x=f(v)`
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
`,y=f(N)`
  min-width: 10rem;
  margin-top: 0.4rem;
`,t=f($)`
  color: ${u.palette.neutralDarker};
  text-decoration: none;
`;function C(o){var m,h;const d=((m=o==null?void 0:o.firstName)==null?void 0:m.charAt(0))||"",s=((h=o==null?void 0:o.lastName)==null?void 0:h.charAt(0))||"";return!d&&!s?null:(d+s).toUpperCase()}const i=({user:o,onAction:d,ariaLabel:s="Account actions",children:m,"data-testid":h})=>{const p=C(o);return r(b,{children:[e(x,{"aria-label":s,"data-testid":h,children:p||e(A,{})}),e(y,{placement:"bottom end",isNonModal:!0,children:e(w,{onAction:d,children:m})})]})},a=g`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,c=o=>{window.alert(`Action: ${o}`)},K=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"John",lastName:"Doe"},onAction:c,children:[e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})})]}),Q=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{onAction:c,children:[e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})})]}),R=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"Jane",lastName:"Smith"},onAction:c,children:[e(t,{id:"profile",children:"My Account"}),e(t,{id:"logout",children:"Sign Out"})]})})]}),V=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"Jane",lastName:"Smith"},children:[e(t,{href:"/account/profile",children:"Profile"}),e(t,{href:"/account/settings",children:"Settings"}),e(t,{onAction:()=>{window.alert("Logging out...")},children:"Log out"})]})})]}),X=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"Jane",lastName:"Smith"},onAction:c,children:[e(t,{id:"settings",children:"Settings"}),e(t,{id:"preferences",children:"Preferences"}),e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})})]}),Y=()=>e("div",{style:{padding:"2rem"},children:r(i,{user:{firstName:"Test",lastName:"User"},onAction:c,children:[e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Y as Standalone,R as WithCustomLabels,X as WithCustomMenuItems,K as WithInitials,V as WithLinks,Q as WithUserIconFallback};
