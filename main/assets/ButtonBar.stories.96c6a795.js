import{s as c,a as e,R as i,j as o}from"./index.db0317c6.js";import{t as u,b as p,a as h,c as b}from"./Tabs.869c31a6.js";import"./theme.11661764.js";import"./palette.15e4d008.js";import"./Collection.module.64824940.js";import"./context.module.340ae0da.js";const S=c.div`
  ${u}
  ${p}

  > * {
    all: unset;
    ${h}
    ${b}
  }
`,l=({size:s="medium",children:n,...r})=>e(S,{size:s,...r,children:n}),C=c.div`
  padding: 2.4rem;
`,y=()=>{const[s,n]=i.useState("medium"),[r,m]=i.useState([0,2,null]),d=(t,a)=>{m([...r.slice(0,t),a,...r.slice(t+1)])};return o(C,{children:[o("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:t=>n(t.currentTarget.value),defaultValue:s,children:["large","medium","small"].map(t=>e("option",{children:t},t))})]}),e("br",{}),e("br",{}),e(l,{size:s,children:["First Item","Second Item"].map((t,a)=>e("a",{"data-selected":r[0]===a,onClick:()=>d(0,a),children:t},a))}),e("br",{}),e("br",{}),e(l,{size:s,children:["First Item","Second Item","Third Item"].map((t,a)=>e("a",{"data-selected":r[1]===a,onClick:()=>d(1,a),children:t},a))}),e("br",{}),e("br",{}),e(l,{size:s,children:["First Item with a really long title","Second Item","Third Item"].map((t,a)=>e("a",{"data-selected":r[2]===a,onClick:()=>d(2,a),children:t},a))})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Examples};
