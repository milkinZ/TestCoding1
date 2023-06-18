(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9009)}])},9009:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var a=n(5893),l=n(7294);function r(){let[e,t]=(0,l.useState)(0),[n,r]=(0,l.useState)([]),[s,i]=(0,l.useState)([]),[d,o]=(0,l.useState)(null),[c,m]=(0,l.useState)(!1);return(0,a.jsxs)("div",{className:"w-screen h-screen overflow-y-scroll divide-y-2 divide-dashed divide-gray-400",children:[(0,a.jsx)("header",{className:"bg-gray-700 w-full p-4 flex justify-center",children:(0,a.jsx)("h2",{className:"ml-2 text-xl font-semibold font-serif text-gray-200",children:"Ardha Nur Fajri"})}),(0,a.jsx)("div",{className:"bg-gray-800 h-full flex justify-center items-center",id:"kembali",children:(0,a.jsxs)("div",{className:"bg-gray-700 w-5/6 h-5/6 rounded p-6 flex flex-col",children:[(0,a.jsx)("div",{className:"border-t border-r border-l rounded-t flex justify-center items-center",children:(0,a.jsx)("h2",{className:" text-center text-lg font-semibold font-serif text-gray-200",children:"Tab Pertama"})}),(0,a.jsxs)("div",{className:"bg-gray-600 w-full h-full rounded-b px-6 flex-col flex border justify-center items-center space-y-2",children:[(0,a.jsx)("label",{classname:"block text-md font-normal leading-8 text-gray-100",children:"Masukkan jumlah deretan bilangan"}),(0,a.jsx)("div",{className:"relative rounded-md shadow-lg shadow-gray-800 w-full",children:(0,a.jsx)("input",{disabled:c,onChange:e=>{t(e.target.value)},type:"number",className:"block w-full rounded-md border-0 py-1.5 px-2 text-center text-gray-100 ring-1 ring-inset bg-gray-700 ring-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6",placeholder:"Masukkan angka 1 - 10000"})}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{disabled:c,onClick:()=>{e<1||e>1e4?alert("Masukkan angka 1 - 10000"):(m(!0),document.getElementById("generate").scrollIntoView({behavior:"smooth"}))},className:"rounded-md ring-1 ring-inset ring-gray-900 px-6 py-2 text-center text-white bg-blue-800 hover:text-white hover:ring-gray-200 hover:bg-gray-800  sm:text-sm",children:"Lanjut"})})]})]})}),(0,a.jsx)("div",{className:"bg-gray-800 h-full flex justify-center items-center",id:"generate",children:(0,a.jsxs)("div",{className:"bg-gray-700 w-5/6 h-5/6 rounded pt-8 px-6 pb-10 flex flex-col",children:[(0,a.jsx)("div",{className:"border-t border-r border-l rounded-t flex justify-center items-center",children:(0,a.jsx)("h2",{className:" text-center text-lg font-semibold font-serif text-gray-200",children:"Tab Kedua"})}),(0,a.jsxs)("div",{className:"bg-gray-600 w-full h-full rounded-b px-6 border flex-col flex items-center py-2 space-y-2",children:[(0,a.jsx)("label",{classname:"block text-md font-normal text-gray-50",children:"Klik tombol untuk mengacak bilangan"}),(0,a.jsx)("label",{className:"block text-xs font-normal text-gray-300",children:"Klik tombol hingga menemukan daftar bilangan yang diingkan"}),(0,a.jsx)("button",{id:"myButton",onClick:function(){let t=[];if(e<1||e>1e4)alert("Masukkan angka 1 - 10000"),document.getElementById("kembali").scrollIntoView({behavior:"smooth"});else for(let n=1;n<=e;n++)t.push(Math.floor(2e6*Math.random())+-1e6);r(t)},className:"rounded-md ring-1 ring-inset ring-gray-900 px-6 py-2 text-center text-white bg-blue-800 hover:text-white hover:ring-gray-200 hover:bg-gray-800  sm:text-sm",children:"Generate"}),(0,a.jsx)("div",{className:"border w-full max-h-64 rounded p-4 text-center text-gray-100 overflow-auto",children:(0,a.jsx)("p",{className:"text-normal font-mono",children:n.join(", ")})}),(0,a.jsx)("div",{className:"flex w-full justify-end",children:(0,a.jsx)("button",{id:"myButton2",onClick:()=>{0===n.length?alert("Deretan bilangan masih kosong"):(i(n),document.getElementById("myButton").disabled=!0,document.getElementById("myButton2").disabled=!0,document.getElementById("hasil").scrollIntoView({behavior:"smooth"}))},className:"rounded-md ring-1 ring-inset ring-gray-900 px-6 py-2 text-white bg-blue-800 hover:text-white hover:ring-gray-200 hover:bg-gray-800  sm:text-sm",children:"Simpan"})})]})]})}),(0,a.jsx)("div",{className:"bg-gray-800 h-full flex justify-center items-center",id:"hasil",children:(0,a.jsxs)("div",{className:"bg-gray-700 w-5/6 h-5/6 rounded pt-8 px-6 pb-10 flex flex-col",children:[(0,a.jsx)("div",{className:"border-t border-r border-l rounded-t flex justify-center items-center",children:(0,a.jsx)("h2",{className:" text-center text-lg font-semibold font-serif text-gray-200",children:"Tab Ketiga"})}),(0,a.jsxs)("div",{className:"bg-gray-600 w-full h-full rounded-b px-6 flex-col flex border items-center py-3 space-y-2",children:[(0,a.jsx)("label",{classname:"block text-md font-normal leading-8 text-gray-100",children:"Deretan bilangan"}),(0,a.jsx)("div",{className:"border w-full max-h-64 rounded p-4 text-center text-gray-100 overflow-auto",children:(0,a.jsx)("p",{className:"text-normal font-mono",children:s.join(", ")})}),(0,a.jsxs)("div",{className:"flex flex-col items-center space-y-1",children:[(0,a.jsx)("label",{classname:"block text-md font-normal text-gray-50",children:"Klik tombol di bawah"}),(0,a.jsx)("label",{className:"block text-xs font-normal text-gray-300",children:"Untuk menampilkan bilangan bulat positif terkecil yang tidak ada di deretan bilangan"})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{id:"myButton3",onClick:function(){let e=[];0===s.length?alert("Simpan bilangan pada Tab Kedua"):(n.map(t=>{Math.sign(t)===Math.sign(1)&&e.push(t)}),o(Math.floor(Math.random()*(Math.min(...e)-1))+1),document.getElementById("myButton3").disabled=!0)},className:"rounded-md ring-1 ring-inset ring-gray-900 px-6 py-2 text-right text-white bg-blue-800 hover:text-white hover:ring-gray-200 hover:bg-gray-800  sm:text-sm",children:"Tampilkan"})}),(0,a.jsx)("div",{className:"border w-full max-h-64 rounded p-2 text-center text-gray-100",children:(0,a.jsx)("p",{className:"text-normal font-mono",children:d})})]})]})}),(0,a.jsx)("footer",{className:"bg-gray-700 w-full p-6 flex justify-center",children:(0,a.jsx)("p",{className:"font-mono text-gray-300",children:"16 Juni 2023 - 18 Juni 2023"})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);