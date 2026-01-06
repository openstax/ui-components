import{r as x,s as E,a,j as f,F,R as y}from"./index.2111f8e4.js";import{p}from"./palette.15e4d008.js";function v(t,i){return i<t?[]:Array.from({length:i-t}).map((n,e)=>e+t)}function S(t){const{currentPage:i,totalPages:n,showFromEnd:e,showFromCurrent:s}=t,o=[Math.max(1,Math.min(i-s,n+1)),Math.min(n,i+s)+1],l=[1,Math.min(o[0],e+1)],r=[Math.max(1,o[1],n-e+1),n+1];return{startRange:l,middleRange:o,endRange:r}}function k(t){return Math.max(0,t[1]-t[0])}function j(t,i,n){const e=k(t),s=k(i),o=k(n),l=t[1]===i[0]?0:1,r=i[1]===n[0]?0:1;return e+s+o+l+r}function z(t,i,n){const{startRange:e,middleRange:s,endRange:o}=t,l=j(e,s,o);if(l>=n)return t;let r=n-l;const c=Math.floor(r/2),P=s[0]-e[1],g=o[0]-s[1],u=Math.min(P,g===0?r:g<r-c?r-g+1:c);r-=u;const R=Math.min(g,r),m=[Math.max(1,s[0]-u),Math.min(i+1,s[1]+R)],C=[e[0],Math.min(m[0],e[1])],b=[Math.max(m[1],o[0]),o[1]];return{startRange:C,middleRange:m,endRange:b}}function $(t){const{totalPages:i,showFromEnd:n,showFromCurrent:e}=t,s=n*2+e*2+1+2;let o=S(t);o=z(o,i,s);const{startRange:l,middleRange:r,endRange:c}=o;return{startRange:l,middleRange:r,endRange:c,showFirstEllipsis:l[1]!==r[0],showSecondEllipsis:r[1]!==c[0]}}function I({currentPage:t,totalPages:i,showFromEnd:n,showFromCurrent:e}){return x.exports.useMemo(()=>$({currentPage:t,totalPages:i,showFromEnd:n,showFromCurrent:e}),[t,i,n,e])}const d=E(({page:t,current:i,href:n,onClick:e,className:s})=>{const o=i?"page":void 0;return a("a",{className:s,"aria-label":`Page ${t}`,"aria-current":o,href:n||"#",onClick:e,children:t})})`
`,M=()=>a("li",{className:"disabled",children:a("span",{children:"..."})}),w=({pageRange:t,currentPage:i,Page:n})=>a(F,{children:v(...t).map(e=>a("li",{className:i===e?"active":void 0,children:a(n,{page:e,current:i===e})},e))}),L=({currentPage:t,pageSize:i,totalItems:n})=>f("div",{className:"pagination-info",children:[(t-1)*i+1,"-",Math.min(t*i,n)," of ",n]}),h=E(t=>{const{showFromEnd:i=3,showFromCurrent:n=2,pageSize:e,totalItems:s,className:o,currentPage:l,totalPages:r,Page:c}=t;if(r===0||r===1)return null;const{startRange:P,middleRange:g,endRange:u,showFirstEllipsis:R,showSecondEllipsis:m}=I({currentPage:l,totalPages:r,showFromEnd:i,showFromCurrent:n});return f("div",{className:o,children:[a("nav",{"aria-label":"pagination links",children:f("ul",{children:[a(w,{pageRange:P,currentPage:l,Page:c}),R&&a(M,{}),a(w,{pageRange:g,currentPage:l,Page:c}),m&&a(M,{}),a(w,{pageRange:u,currentPage:l,Page:c})]})}),e&&s&&a(L,{currentPage:l,pageSize:e,totalItems:s})]})})`
  text-align: center;

  > nav > ul {
    list-style: none;
    padding: 0;
    border: thin solid ${p.neutralLight};
    border-radius: 0.5rem;
    display: inline-block;
    margin: 0 auto;

    > li {
      margin: 0;
      min-width: 4rem;
      text-align: center;
      display: inline-block;

      &:not(:last-child) {
        border-right: thin solid ${p.neutralLight};
      }

      &.active,
      &:focus-within:not(.disabled),
      &:hover:not(.disabled) {
        background-color: ${p.neutralLighter};
      }

      > ${d},span {
        padding: 1rem;
        display: block;
        text-decoration: none;
        font-size: 1.6rem;
        line-height: 1.3rem;
        margin: 0;
        color: inherit;
      }
    }
  }

  .pagination-info {
    margin-top: 0.5rem;
    font-size: 1.6rem;
  }
`,G=()=>{const[t,i]=y.useState(1);return f("div",{children:[a("h2",{children:"Default settings"}),a(h,{currentPage:t,totalPages:10,Page:({page:n,current:e})=>a(d,{page:n,current:e,onClick:()=>i(n),href:"#"})}),a("h2",{children:"Showing only one link from the end"}),a(h,{currentPage:t,totalPages:10,showFromEnd:1,Page:({page:n,current:e})=>a(d,{page:n,current:e,onClick:()=>i(n),href:"#"})}),a("h2",{children:"Showing zero links from the end"}),a(h,{currentPage:t,totalPages:10,showFromEnd:0,Page:({page:n,current:e})=>a(d,{page:n,current:e,onClick:()=>i(n),href:"#"})}),a("h2",{children:"Showing only one link from the end and current"}),a(h,{currentPage:t,totalPages:10,showFromEnd:1,showFromCurrent:1,Page:({page:n,current:e})=>a(d,{page:n,current:e,onClick:()=>i(n),href:"#"})}),a("h2",{children:"less links"}),a(h,{currentPage:t,totalPages:2,Page:({page:n,current:e})=>a(d,{page:n,current:e,onClick:()=>i(n),href:"#"})}),a("h2",{children:"more links and summary"}),a(h,{currentPage:t,totalPages:40,totalItems:395,pageSize:10,Page:({page:n,current:e})=>a(d,{page:n,current:e,onClick:()=>i(n),href:"#"})}),a("h2",{children:"zero links"}),a(h,{currentPage:t,totalPages:0,Page:({page:n,current:e})=>a(d,{page:n,current:e,onClick:()=>i(n),href:"#"})}),a("h2",{children:"one link"}),a(h,{currentPage:t,totalPages:1,Page:({page:n,current:e})=>a(d,{page:n,current:e,onClick:()=>i(n),href:"#"})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{G as Examples};
