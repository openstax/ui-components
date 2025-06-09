import{s as c,a as e,R as l,j as o}from"./index.6a46d10b.js";import{t as p,b as u,a as h,c as b}from"./Tabs.66b9bdd5.js";import"./theme.6118982a.js";import"./palette.15e4d008.js";import"./Collection.module.36daaf65.js";import"./useFocusRing.module.ec264aa1.js";import"./context.module.49c9b943.js";const S=c.div`
  ${p}
  ${u}

  > * {
    all: unset;
    ${h}
    ${b}
  }
`,i=({size:s="medium",children:n,...r})=>e(S,{size:s,...r,children:n}),C=c.div`
  padding: 2.4rem;
`,j=()=>{const[s,n]=l.useState("medium"),[r,m]=l.useState([0,2,null]),d=(t,a)=>{m([...r.slice(0,t),a,...r.slice(t+1)])};return o(C,{children:[o("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:t=>n(t.currentTarget.value),defaultValue:s,children:["large","medium","small"].map(t=>e("option",{children:t},t))})]}),e("br",{}),e("br",{}),e(i,{size:s,children:["First Item","Second Item"].map((t,a)=>e("a",{"data-selected":r[0]===a,onClick:()=>d(0,a),children:t},a))}),e("br",{}),e("br",{}),e(i,{size:s,children:["First Item","Second Item","Third Item"].map((t,a)=>e("a",{"data-selected":r[1]===a,onClick:()=>d(1,a),children:t},a))}),e("br",{}),e("br",{}),e(i,{size:s,children:["First Item with a really long title","Second Item","Third Item"].map((t,a)=>e("a",{"data-selected":r[2]===a,onClick:()=>d(2,a),children:t},a))})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{j as Examples};
