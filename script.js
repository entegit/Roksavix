const $=s=>document.querySelector(s);
const P={
server:'<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
flow:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 8.5v7M8.5 6c5 0 7 2 7.5 4M8.5 18c5 0 7-2 7.5-4"/>',
net:'<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M11 7.3L6 15.7M13 7.3l5 8.4M7.5 18h9"/>',
wrench:'<path d="M14.5 6.5a4 4 0 005 5L20 12l-8 8a2.1 2.1 0 01-3-3l8-8z"/><path d="M16 4.5l2 2"/>',
lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
check:'<path d="M4 12l5 5L20 6"/>',
grow:'<path d="M4 20V10M10 20V6M16 20v-8M22 20H2"/>',
eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
code:'<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
pin:'<path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
cloud:'<path d="M7 18a4 4 0 01-.5-8A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/>',
db:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
mon:'<path d="M3 12h4l3-7 4 14 3-7h4"/>',
term:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 10l3 2-3 2M13 15h4"/>'};
const ico=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;
const ic=n=>`<span class="ic">${ico(n)}</span>`;
document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=ico(e.dataset.i));

// hero nodes
[['cloud','Cloud',250,80],['server','Server',395,165],['db','Database',395,335],['mon','Monitoring',250,420],['net','Network',105,335],['term','Terminal',105,165]].forEach(([n,l,x,y])=>{
 $('#nodes').insertAdjacentHTML('beforeend',`<g transform="translate(${x} ${y})"><circle r="30" fill="#0B1828" stroke="#1687FF" stroke-opacity=".55"/><g transform="translate(-12 -12)" fill="none" stroke="#00D9FF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${P[n]}</g><text y="${y<250?-42:48}" fill="#94A8BF">${l}</text></g>`);
});

const D=(id,html)=>$(id).innerHTML=html;
D('#strip',[['lock','Security First','Infrastructure designed with security in mind.'],['check','Reliable Systems','Stable and maintainable IT environments.'],['grow','Scalable Architecture','Technology designed to grow with the business.'],['eye','Proactive Support','Monitoring, troubleshooting, and technical assistance.']].map(([i,t,d])=>`<div>${ic(i)}<div><h3>${t}</h3><p>${d}</p></div></div>`).join(''));

D('#svc',[
['server','Server & Systems Administration','Design, deployment, administration, monitoring, and maintenance of reliable Windows and Linux environments.','Windows • Linux • Virtualization • Monitoring'],
['shield','Cyber Security','Security-focused infrastructure and tools designed to protect systems, networks, identities, and business data.','Security Tools • Hardening • Monitoring • Threat Protection'],
['globe','Domain & DNS Management','Professional domain, DNS, SSL, and related infrastructure management to keep your online presence reliable and secure.','Domains • DNS • SSL • Records'],
['flow','DevOps & Automation','Automation and deployment practices that make infrastructure and application delivery faster, repeatable, and reliable.','CI/CD • Automation • Containers • Deployment'],
['net','Networking Solutions','Design, configuration, troubleshooting, and optimization of secure and reliable network environments.','Routing • Switching • Firewall • VPN'],
['wrench','IT Support & Infrastructure',"Practical technical support and infrastructure management to keep your organization's technology operating smoothly.",'Troubleshooting • Maintenance • Monitoring • Support']
].map(([i,t,d,g],n)=>`<article class="card sv rv"><span class="num" aria-hidden="true">0${n+1}</span>${ic(i)}<h3>${t.replace('&','&amp;')}</h3><p>${d}</p><div class="tags">${g.split(' • ').map(x=>`<span>${x}</span>`).join('')}</div></article>`).join(''));

D('#why4',[['lock','Security First','Security considerations integrated into infrastructure and operational processes.'],['eye','Proactive Support','Identify and address infrastructure issues before they become major disruptions.'],['grow','Scalable Solutions','Build technology environments that can evolve with business requirements.'],['code','Engineering Mindset','Practical, structured, automation-focused technical solutions.']].map(([i,t,d])=>`<div class="card wy rv">${ic(i)}<h3>${t}</h3><p>${d}</p></div>`).join(''));

D('#ex',[['Infrastructure','Linux|Windows Server|Virtualization|Storage|Monitoring'],['Networking','Routing|Switching|Firewalls|VPN|DNS'],['Cybersecurity','Endpoint Security|Network Security|Monitoring|Hardening'],['DevOps','Git|CI/CD|Containers|Automation|Infrastructure as Code'],['Cloud','Cloud Infrastructure|Identity|Monitoring|Deployment']].map(([t,l])=>`<div class="card ex rv"><h3>${t}</h3><ul>${l.split('|').map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join(''));

D('#tl',[['Understand','Understand the business, existing infrastructure, requirements, and technical challenges.'],['Design','Develop a practical, secure, and scalable technical approach.'],['Implement','Deploy, configure, automate, integrate, and test the solution.'],['Support','Monitor, maintain, optimize, and continuously improve the environment.']].map(([t,d],n)=>`<div class="st rv"><i>0${n+1}</i><h3>${t}</h3><p>${d}</p></div>`).join(''));

// nav
const nav=$('#nav'),links=$('#links'),bb=$('#bg-btn');
const sc=()=>nav.classList.toggle('s',scrollY>24);sc();addEventListener('scroll',sc,{passive:true});
bb.onclick=()=>{const o=links.classList.toggle('o');bb.setAttribute('aria-expanded',o)};
links.querySelectorAll('a').forEach(a=>a.onclick=()=>{links.classList.remove('o');bb.setAttribute('aria-expanded',false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){links.classList.remove('o');bb.setAttribute('aria-expanded',false)}});

// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));

// particles
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!rm){const c=$('#cv'),x=c.getContext('2d');let w,h,ps=[];
 const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight;ps=Array.from({length:Math.min(46,Math.floor(w*h/32000))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18}))};
 rs();addEventListener('resize',rs);
 (function f(){x.clearRect(0,0,w,h);ps.forEach((p,i)=>{p.x=(p.x+p.vx+w)%w;p.y=(p.y+p.vy+h)%h;x.fillStyle='rgba(0,217,255,.7)';x.fillRect(p.x,p.y,1.6,1.6);
  for(let j=i+1;j<ps.length;j++){const q=ps[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<140){x.strokeStyle=`rgba(22,135,255,${.22*(1-d/140)})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});
  requestAnimationFrame(f)})();}

// form (client-side validation only; no fake submit)
const form=$('#form'),note=$('#note');
const rules={name:v=>v.trim().length>=2||'Enter your full name.',email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)||'Enter a valid email address.',phone:v=>!v||/^[+\d][\d\s()-]{6,}$/.test(v)||'Enter a valid phone number.',service:v=>!!v||'Select a service.',message:v=>v.trim().length>=10||'Write at least 10 characters.'};
function chk(el){const r=rules[el.name];if(!r)return true;const ok=r(el.value),e=el.parentNode.querySelector('.err');el.classList.toggle('bad',ok!==true);el.setAttribute('aria-invalid',ok!==true);e.textContent=ok===true?'':ok;return ok===true}
form.querySelectorAll('input,select,textarea').forEach(el=>{el.addEventListener('blur',()=>chk(el));el.addEventListener('input',()=>el.classList.contains('bad')&&chk(el))});
form.addEventListener('submit',async ev=>{ev.preventDefault();note.textContent='';
 const bad=[...form.elements].filter(el=>el.name&&!chk(el));
 if(bad.length){bad[0].focus();return}
 const data=Object.fromEntries(new FormData(form)),ep=form.dataset.endpoint;
 if(!ep){note.textContent='Your details look good, but this form is not connected to a mail service yet. Please email Roksavix@gmail.com or call +91 8156935124.';return}
 try{const r=await fetch(ep,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)});
  if(!r.ok)throw 0;form.reset();note.textContent='Thank you. Your message has been sent.'}
 catch{note.textContent='Message could not be sent. Please email Roksavix@gmail.com.'}});
