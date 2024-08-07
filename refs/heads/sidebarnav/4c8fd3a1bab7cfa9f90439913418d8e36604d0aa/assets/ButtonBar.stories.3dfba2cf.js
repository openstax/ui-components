import{s as c,a as e,R as l,j as o}from"./index.f30ca328.js";import{t as p,b as u,a as h,c as b}from"./Tabs.923a2c0f.js";import"./theme.41a5e6b1.js";import"./palette.15e4d008.js";import"./SelectionManager.module.d723b790.js";import"./context.module.6724ca8c.js";import"./FocusScope.module.8697978f.js";import"./useFocusRing.module.6e2f22d0.js";const S=c.div`
  ${p}
  ${u}

  > * {
    all: unset;
    ${h}
    ${b}
  }
`,d=({size:s="medium",children:n,...r})=>e(S,{size:s,...r,children:n}),C=c.div`
  padding: 2.4rem;
`,k=()=>{const[s,n]=l.useState("medium"),[r,m]=l.useState([0,2,null]),i=(t,a)=>{m([...r.slice(0,t),a,...r.slice(t+1)])};return o(C,{children:[o("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:t=>n(t.currentTarget.value),defaultValue:s,children:["large","medium","small"].map(t=>e("option",{children:t},t))})]}),e("br",{}),e("br",{}),e(d,{size:s,children:["First Item","Second Item"].map((t,a)=>e("a",{"data-selected":r[0]===a,onClick:()=>i(0,a),children:t}))}),e("br",{}),e("br",{}),e(d,{size:s,children:["First Item","Second Item","Third Item"].map((t,a)=>e("a",{"data-selected":r[1]===a,onClick:()=>i(1,a),children:t}))}),e("br",{}),e("br",{}),e(d,{size:s,children:["First Item with a really long title","Second Item","Third Item"].map((t,a)=>e("a",{"data-selected":r[2]===a,onClick:()=>i(2,a),children:t}))})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{k as Examples};
