import{c as u,b as x,a as B,l as k,$ as w,k as M}from"./Dialog.module.f9664fc5.js";import{s as r,j as h,a as t,C as d}from"./index.a21a0fc5.js";import{c as s,t as o}from"./theme.4ed5d70c.js";import{$ as H}from"./Button.module.e94f23ea.js";import{B as y}from"./BodyPortal.7453956e.js";const N=r(({label:e,icon:a,className:n,"aria-label":i,...c})=>h(H,{className:n,"aria-label":i,...c,children:[a&&(typeof a=="string"?t("img",{"aria-hidden":"true",src:a,alt:""}):a),e?t("span",{children:e}):null]}))`
  border: none;
  background: none;
  padding: 0;
  min-height: 4rem;
  min-width: 4rem;
  height: 100%;
  display: inline-flex;
  place-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;

  img {
    max-height: 100%;
  }

  img + *,
  svg + * {
    margin-left: 0.8rem;
  }
`,z=r(u)``,E=r.div`
  padding: 1.6rem;
`,L=r(x)`
  margin-top: -1rem;
  border-top: 0.4rem solid ${s.palette.darkGreen};
  box-shadow: 0 0.4rem 0.4rem 0 #00000033;
  background: #fff;

  ${z} {
    font-size: 1.6rem;
    min-height: 4rem;
    padding: 0 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      background: ${s.palette.neutralLighter};
    }

    &:active {
      font-weight: bold;
    }

    &:not(:last-child) {
      border-bottom: 0.1rem solid ${s.palette.neutralBright};
    }
  }
`,g=({isMenu:e,children:a,popoverProps:n,...i})=>{const c=e?B:k,l=e?w:M;return h(c,{children:[t(N,{...i}),t(L,{...n,children:t(l,{children:a})})]})},F=e=>t(g,{...e,isMenu:!1}),J=e=>t(g,{...e,isMenu:!0}),j=4,C=4,P=2.4,D=2.4,V=r.svg`
  display: block;
  width: auto;
  height: ${D}rem;
  ${o.breakpoints.desktop(d`
    height: ${P}rem;
  `)}
`,I=({alt:e})=>h(V,{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 353.76001 80.973335",height:80.97,width:353.76,children:[t("title",{children:e}),t("path",{d:"M159.99 52.176c5.13 0 8.31-3.86 8.31-8.583 0-4.722-3.18-8.583-8.31-8.583-5.13 0-8.31 3.86-8.31 8.583 0 4.724 3.18 8.583 8.31 8.583zm0-19.616c6.45 0 11.034 4.632 11.034 11.033 0 6.404-4.585 11.036-11.035 11.036s-11.04-4.64-11.04-11.04c0-6.4 4.58-11.04 11.03-11.04m27.75 19.62c5.13 0 8.31-3.86 8.31-8.59 0-4.72-3.18-8.586-8.31-8.586-4.95 0-8.77 3.86-8.77 8.583 0 4.726 3.81 8.585 8.76 8.585zM176.51 33.1h2.723v3.678h.09c1.68-2.907 5.27-4.223 8.4-4.223 6.446 0 11.032 4.632 11.032 11.033 0 6.406-4.588 11.038-11.035 11.038-3.135 0-6.72-1.32-8.4-4.226h-.09v14.033h-2.73v-31.33m44.777 8.717c0-3.725-3.224-6.813-7.264-6.813-5.95 0-7.63 5.72-7.63 6.81zm2.09 8.31c-2.135 3.178-5.36 4.496-9.08 4.496-6.4 0-10.628-4.588-10.628-11.083 0-6.267 4.36-10.988 10.49-10.988 6.45 0 9.85 4.95 9.85 9.81v1.904h-17.6c0 2.27 1.59 7.9 7.944 7.9 2.77 0 5.676-1.45 7.04-3.73l1.998 1.68M230.105 39c0-1.545-.23-4.813-.23-5.9h2.726c.05 1.54.1 3.267.18 3.676h.14c1.09-2.32 3.77-4.226 7.18-4.226 6.54 0 7.99 4.45 7.99 9.037v12.49h-2.72V41.73c0-3.407-.95-6.724-5.26-6.724-4.04 0-7.262 2.817-7.262 8.583v10.49h-2.722V39m36.328-.68c-1.043-1.454-2.404-2.227-4.27-2.227-1.45 0-3.176.684-3.176 2.32 0 3.903 11.76.726 11.76 9.216 0 5.17-4.95 6.99-9.4 6.99-3.36 0-6.265-.87-8.49-3.36l3.63-3.41c1.41 1.54 2.864 2.68 5.18 2.68 1.59 0 3.633-.774 3.633-2.5 0-4.496-11.76-.95-11.76-9.264 0-4.86 4.36-7.04 8.76-7.04 2.91 0 5.998.91 7.768 3.316l-3.636 3.27m5.994-1.41v-4.63h4.496v-6.31h5.45v6.31h5.99v4.632h-5.995v9.533c0 2.18.636 3.543 3.043 3.543.95 0 2.27-.18 2.95-.68v4.59c-1.137.548-3.04.73-4.317.73-5.763 0-7.124-2.59-7.124-7.72v-10h-4.497m33.51 7.407h-1.136c-3 0-8.174.226-8.174 3.36 0 1.997 2.042 2.86 3.814 2.86 3.72 0 5.49-1.954 5.49-4.996zm.32 6.765h-.14c-1.543 2.45-4.084 3.54-6.99 3.54-4.04 0-7.95-2.23-7.95-6.54 0-7.085 8.266-7.587 13.716-7.587h1.364v-.59c0-2.68-2.09-4.085-4.992-4.085-2.27 0-4.36.91-5.815 2.27l-2.86-2.86c2.406-2.45 5.81-3.493 9.26-3.493 9.31 0 9.31 6.723 9.31 9.81v12.54h-4.9v-2.99m16.394-8.718-7.536-10.086h6.63l4.36 6.542 4.72-6.542h6.22L329.6 42.37l8.763 11.713h-6.63l-5.678-7.81-5.722 7.81h-6.448l8.766-11.714",fill:"#585a58"}),t("path",{d:"M129.033 17.833a4.214 4.214 0 0 1-4.414 4.01l-98.45-4.67a4.224 4.224 0 0 1-4.01-4.416l.41-8.737A4.215 4.215 0 0 1 26.99.006l98.445 4.676a4.222 4.222 0 0 1 4.013 4.414l-.415 8.737",fill:"#72a648"}),t("path",{d:"M96.677 49.807a2.528 2.528 0 0 1-2.53 2.53H14.08c-1.4 0-2.53-1.13-2.53-2.53v-12.51a2.53 2.53 0 0 1 2.53-2.53h80.068a2.53 2.53 0 0 1 2.53 2.53v12.51",fill:"#585a58"}),t("path",{d:"M121.304 63.337c.042 1.398-1.015 2.565-2.37 2.61L28.6 68.763c-1.353.04-2.485-1.06-2.528-2.455l-.233-7.434c-.05-1.395 1.01-2.565 2.37-2.605l90.33-2.82c1.35-.05 2.48 1.05 2.52 2.45l.23 7.43",fill:"#eecb3f"}),t("path",{d:"M109.17 78.445c0 1.396-1.065 2.528-2.38 2.528H20.565c-1.316 0-2.38-1.132-2.38-2.528V73.48c0-1.395 1.064-2.53 2.38-2.53h86.225c1.315 0 2.38 1.135 2.38 2.53v4.965",fill:"#222b4f"}),t("path",{d:"M111.387 28.742c0 1.03-1.528 1.867-3.41 1.867H3.41c-1.882 0-3.41-.84-3.41-1.87v-4.05c0-1.03 1.527-1.87 3.41-1.87h104.566c1.883 0 3.41.84 3.41 1.87v4.05",fill:"#e36f4a"}),t("path",{d:"M347.008 32.285h1.568l1.833 4.67 1.83-4.67h1.52v6.147h-.99V33.27h-.03l-2.03 5.162h-.68l-2.025-5.162h-.03v5.162H347zm-4.16.985h-1.94v-.985h4.864v.985h-1.94v5.162h-.985V33.27",fill:"#585a58"})]}),S=r(y)`
  overflow: visible;
  z-index: ${o.zIndex.navbar};
  background: ${o.colors.palette.white};
  position: relative;
  padding: 0 ${o.padding.navbar.mobile}rem;
  box-shadow: 0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);
  ${o.breakpoints.desktop(d`
    padding: 0 ${o.padding.navbar.mobile}rem;
  `)}
  min-width: 0;
`,W=r.div`
  overflow: visible;
  display: flex;
  justify-content: ${e=>e.justifyContent||"space-between"};
  align-items: center;
  height: ${e=>e.navMobileHeight}rem;
  ${e=>e.maxWidth?`max-width: ${e.maxWidth}rem;`:null}
  margin: 0 auto;
  ${e=>o.breakpoints.desktop(d`
    height: ${e.navDesktopHeight}rem;
  `)}
  @media print { display: none; }
`,K=({logo:e=!1,maxWidth:a,navDesktopHeight:n,navMobileHeight:i,justifyContent:c,ariaLabel:l,...m})=>{const v=typeof e=="object",b=v&&"href"in e,{alt:f="OpenStax Logo",...$}=v?e:{},p=e?t(I,{alt:f}):null;return t(S,{tagName:"nav",ariaLabel:l,slot:"nav",...m,children:h(W,{maxWidth:a,navDesktopHeight:n||j,navMobileHeight:i||C,justifyContent:c,children:[b?t("a",{...$,children:p}):p,m.children]})})};export{J as N,E as P,z as a,K as b,N as c,F as d,I as e};
