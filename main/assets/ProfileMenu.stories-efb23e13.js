import{j as e,s as f,a as r,W as g}from"./index-0944ceb3.js";import{a as n}from"./BodyPortal-c1ec8092.js";import{$ as v}from"./Button-b0a7b830.js";import{$ as b,b as w}from"./Dialog-1dfe2786.js";import{c as u,d as P}from"./theme-bed77ad0.js";import{e as $,a as N,b as l}from"./NavBar-ce91a75f.js";import"./useFocusRing-a7d93656.js";import"./Hidden-23110ebb.js";import"./useButton-12eee667.js";import"./VisuallyHidden-9758aaa8.js";import"./OverlayArrow-66bf5bbd.js";import"./context-5a208b0c.js";import"./Collection-b7023a7a.js";import"./FocusScope-be314a6c.js";import"./useTreeState-b8dc2fe8.js";import"./palette-12edeb86.js";const A=({className:o})=>e("svg",{className:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor","aria-hidden":"true",children:e("path",{fill:"currentColor",d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"})}),x=f(v)`
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
`;function C(o){var m,h;const d=((m=o==null?void 0:o.firstName)==null?void 0:m.charAt(0))||"",s=((h=o==null?void 0:o.lastName)==null?void 0:h.charAt(0))||"";return!d&&!s?null:(d+s).toUpperCase()}const i=({user:o,onAction:d,ariaLabel:s="Account actions",children:m,"data-testid":h})=>{const p=C(o);return r(b,{children:[e(x,{"aria-label":s,"data-testid":h,children:p||e(A,{})}),e(y,{placement:"bottom end",children:e(w,{onAction:d,children:m})})]})},a=g`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,c=o=>{window.alert(`Action: ${o}`)},G=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"John",lastName:"Doe"},onAction:c,children:[e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})})]}),q=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{onAction:c,children:[e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})})]}),H=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"Jane",lastName:"Smith"},onAction:c,children:[e(t,{id:"profile",children:"My Account"}),e(t,{id:"logout",children:"Sign Out"})]})})]}),K=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"Jane",lastName:"Smith"},children:[e(t,{href:"/account/profile",children:"Profile"}),e(t,{href:"/account/settings",children:"Settings"}),e(t,{onAction:()=>{window.alert("Logging out...")},children:"Log out"})]})})]}),Q=()=>r(n.Provider,{value:["nav","root"],children:[e(a,{}),e(l,{logo:!0,children:r(i,{user:{firstName:"Jane",lastName:"Smith"},onAction:c,children:[e(t,{id:"settings",children:"Settings"}),e(t,{id:"preferences",children:"Preferences"}),e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})})]}),R=()=>e("div",{style:{padding:"2rem"},children:r(i,{user:{firstName:"Test",lastName:"User"},onAction:c,children:[e(t,{id:"profile",children:"Profile"}),e(t,{id:"logout",children:"Log out"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Standalone,H as WithCustomLabels,Q as WithCustomMenuItems,G as WithInitials,K as WithLinks,q as WithUserIconFallback};
