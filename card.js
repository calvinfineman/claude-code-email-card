// Draft card for Calvin's email system. Built by `emailsys.py card-js` from templates/card.html and
// templates/card-shell.html; edit those, not this file.
(function(){
if(!document.getElementById('dc-css')){const s=document.createElement('style');s.id='dc-css';s.textContent=".dc{background:var(--surface-2);border-radius:12px;border:0.5px solid var(--border);padding:1rem 1.25rem;margin:0 0 1rem}\n.dc .lbl{font-size:13px;color:var(--text-secondary);margin:0 0 4px}\n.dc input{width:100%;box-sizing:border-box}\n.dc .tb{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px}\n.dc .tb button{height:30px;padding:0 9px}\n.dc .ed{min-height:160px;padding:12px 14px;border:0.5px solid var(--border-strong);border-radius:var(--radius);font-size:15px;line-height:1.6;outline:none;background:var(--surface-2)}\n.dc .ed:focus{box-shadow:0 0 0 2px var(--border-accent)}\n.dc .ed ol,.dc .ed ul{margin:8px 0;padding-left:24px}\n.dc .ed a{color:var(--text-accent)}\n.dc .ed table{margin:2px 0;max-width:100%}\n.dc .ed td:focus-within{outline:2px solid var(--border-accent);outline-offset:-2px}\n.dc .seg button{height:28px;font-size:12px;padding:0 10px}\n.dc .seg button.on{background:var(--bg-accent);color:var(--text-accent);border-color:var(--border-accent)}\n.dc .pill{font-size:12px;padding:3px 10px;border-radius:var(--radius)}\n.dc .pill{background:var(--surface-1);color:var(--text-secondary)}\n.dc .pill.pa{background:var(--bg-accent);color:var(--text-accent)}\n.dc .hd{display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap}\n.dc .hd .ti{font-size:18px;color:var(--text-secondary)}\n.dc .hd b{font-size:14px;font-weight:500}\n.dc .edited{margin-left:auto;font-size:12px;color:var(--text-muted)}\n.dc .ctx{font-size:13px;color:var(--text-secondary);margin:0 0 12px}\n.dc .g2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px;margin-bottom:12px}\n.dc .mb{margin-bottom:12px}\n.dc .ed{overflow-x:auto;overflow-wrap:break-word}\n.dc .sigbox{overflow-x:auto}\n.dc .sigbox img{max-width:100%;height:auto}\n.dc .lr{flex-wrap:wrap}\n.dc .lr .url{min-width:0}\n@media (max-width:560px){\n.dc{padding:.75rem;border-radius:10px}\n.dc .g2{grid-template-columns:minmax(0,1fr);gap:8px}\n.dc input,.dc .ed{font-size:16px}\n.dc input{min-height:40px}\n.dc .tb button{height:40px;min-width:36px;padding:0 6px}\n.dc .ed{padding:10px 12px;min-height:200px}\n.dc .seg button{height:36px;font-size:13px}\n.dc .acts button{flex:1 1 100%;min-height:44px}\n.dc .acts .reset{flex:none;margin:0 auto}\n}\n";document.head.appendChild(s)}
const TB="<div class=\"tb\" role=\"toolbar\" aria-label=\"Formatting\"><button data-cmd=\"bold\" aria-label=\"Bold\"><i class=\"ti ti-bold\" style=\"font-size:16px\"></i></button><button data-cmd=\"italic\" aria-label=\"Italic\"><i class=\"ti ti-italic\" style=\"font-size:16px\"></i></button><button data-cmd=\"insertUnorderedList\" aria-label=\"Bulleted list\"><i class=\"ti ti-list\" style=\"font-size:16px\"></i></button><button data-cmd=\"insertOrderedList\" aria-label=\"Numbered list\"><i class=\"ti ti-list-numbers\" style=\"font-size:16px\"></i></button><button class=\"linkbtn\" aria-label=\"Add link\"><i class=\"ti ti-link\" style=\"font-size:16px\"></i></button><button data-cmd=\"removeFormat\" aria-label=\"Clear formatting\"><i class=\"ti ti-clear-formatting\" style=\"font-size:16px\"></i></button><button class=\"shade\" aria-label=\"Shade the key cell\" title=\"Shade the key cell\"><i class=\"ti ti-highlight\" style=\"font-size:16px\"></i></button><button class=\"shade\" data-row=\"1\" aria-label=\"Shade the key row\" title=\"Shade the key row\"><i class=\"ti ti-layout-rows\" style=\"font-size:16px\"></i></button></div><div class=\"lr\" style=\"display:flex;gap:8px;margin-bottom:8px\"><input class=\"url\" placeholder=\"https://calendly.com/calvin-fine\" style=\"flex:1\" /><button class=\"applylink\" style=\"flex:none\">Add link</button></div>",FOOT="<div style=\"display:flex;align-items:center;gap:8px;margin:14px 0 6px;flex-wrap:wrap\"><p class=\"lbl\" style=\"margin:0\">Signature, added when the email is drafted or sent</p><div class=\"seg\" style=\"display:flex;gap:4px;margin-left:auto\"><button data-mode=\"new-email\">New email</button><button data-mode=\"reply\">Reply</button></div></div><div class=\"sigbox\" style=\"background:#ffffff;border:0.5px solid var(--border);border-radius:var(--radius);padding:12px 14px;min-height:24px\"></div><p class=\"lbl\" style=\"margin-top:14px\">Note for Claude (optional)</p><input class=\"note\" placeholder=\"Make it shorter and less formal\" /><p class=\"err\" style=\"font-size:13px;color:var(--text-danger);margin:8px 0 0\"></p><div class=\"acts\" style=\"display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;align-items:center\"><button class=\"approve\" style=\"background:var(--fill-accent);color:var(--on-accent);border:none\">Approve for Gmail \u2197</button><button class=\"send\"><i class=\"ti ti-send\" style=\"font-size:16px;vertical-align:-2px;margin-right:4px\" aria-hidden=\"true\"></i>Send now \u2197</button><button class=\"revise\">Send back for revision \u2197</button><button class=\"reset\" style=\"border:none;color:var(--text-secondary)\"><i class=\"ti ti-refresh\" style=\"font-size:16px;vertical-align:-2px;margin-right:4px\" aria-hidden=\"true\"></i>Reset</button></div>";
document.querySelectorAll('.dc').forEach(r=>{const ed=r.querySelector('.ed');if(ed&&!r.querySelector('.tb')){ed.insertAdjacentHTML('beforebegin',TB);ed.insertAdjacentHTML('afterend',FOOT)}});
const NAVY='#25374E',KEY='#E5EFD9',KEYBAR='#7CAD41';
function wrap(s,m){const x=s.match(/^(\s*)([\s\S]*?)(\s*)$/);return x[2]?x[1]+m+x[2]+m+x[3]:s}
function kids(n){let o='';for(const c of n.childNodes){const s=conv(c);if(c.nodeType===1&&/^(DIV|P|UL|OL|H[1-6]|TABLE)$/.test(c.tagName)&&o&&!o.endsWith('\n'))o+='\n';o+=s}return o}
function cellMd(c){return conv(c).replace(/\s*\n\s*/g,' ').trim().replace(/\|/g,'\\|')}
function tableMd(tb){
  const rows=Array.from(tb.rows);if(!rows.length)return '';
  const hd=Array.from(rows[0].cells),md=[hd.map(c=>cellMd(c)+(c.dataset.bar?' {bar}':'')),hd.map(c=>({right:'---:',center:':---:'})[c.dataset.align]||'---')];
  rows.slice(1).forEach(r=>md.push(Array.from(r.cells).filter(c=>!c.dataset.bar).map(c=>{const s=cellMd(c);return c.dataset.key&&s?'=='+s+'==':s})));
  return md.map(r=>'| '+r.join(' | ')+' |').join('\n')+'\n';
}
function num(s){const m=(s||'').replace(/,/g,'').match(/-?\d*\.?\d+/);return m?Math.abs(parseFloat(m[0])):0}
function bars(ed){ed.querySelectorAll('table[data-md="chart"]').forEach(tb=>{
  const rows=Array.from(tb.rows).slice(1).map(r=>{const cs=Array.from(r.cells),b=cs.find(c=>c.dataset.bar);return b&&{b,v:b.nextElementSibling}}).filter(Boolean);
  const vals=rows.map(x=>num(x.v&&x.v.textContent)),top=Math.max(0,...vals);
  rows.forEach((x,i)=>{const p=top&&vals[i]?Math.max(1,Math.round(vals[i]/top*100)):0,key=!!(x.v&&x.v.dataset.key),t=x.b.querySelector('table'),c=t&&t.querySelector('td');
    x.b.style.background=key?KEY:'';if(key)x.b.setAttribute('bgcolor',KEY);else x.b.removeAttribute('bgcolor');
    if(t){t.style.width=p+'%';t.setAttribute('width',p+'%');t.style.display=p?'':'none';c.style.background=key?KEYBAR:NAVY;c.setAttribute('bgcolor',key?KEYBAR:NAVY)}});
})}
function conv(n){
  if(n.nodeType===3)return n.nodeValue.replace(/\u00a0/g,' ');
  if(n.nodeType!==1)return '';
  const t=n.tagName;
  if(t==='BR')return '\n';
  if(t==='TEMPLATE'||t==='STYLE'||t==='SCRIPT')return '';
  if(t==='TABLE')return tableMd(n);
  if(t==='B'||t==='STRONG')return wrap(kids(n),'**');
  if(t==='I'||t==='EM')return wrap(kids(n),'*');
  if(t==='A'){const s=kids(n),h=n.getAttribute('href')||'';return h?'['+s+']('+h+')':s}
  if(t==='UL'||t==='OL'){let k=0;return '\n'+Array.from(n.children).filter(c=>c.tagName==='LI').map(li=>(t==='OL'?(++k)+'. ':'- ')+conv(li).trim().replace(/\s*\n\s*/g,' ')).join('\n')+'\n\n'}
  if(/^(DIV|P|H[1-6])$/.test(t)){const s=kids(n);return s.endsWith('\n')?s:s+'\n'}
  return kids(n);
}
function toMd(el){return conv(el).replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim()}
document.querySelectorAll('.dc').forEach(root=>{
  const q=s=>root.querySelector(s),ed=q('.ed'),lr=q('.lr'),url=q('.url'),err=q('.err'),badge=q('.edited'),sig=q('.sigbox'),note=q('.note');
  const fs={to:q('.f-to'),cc:q('.f-cc'),subject:q('.f-subject')};
  const orig={html:ed.innerHTML,to:fs.to.value,cc:fs.cc.value,subject:fs.subject.value};
  const origMd=toMd(ed);
  let mode=root.dataset.sig,saved=null;
  lr.style.display='none';
  const sb=q('.send'),sbHtml=sb.innerHTML;let armed=null;
  const disarm=()=>{if(armed===null)return;clearTimeout(armed);armed=null;sb.innerHTML=sbHtml;sb.style.color='';sb.style.borderColor=''};
  const edited=()=>toMd(ed)!==origMd||['to','cc','subject'].some(k=>fs[k].value!==orig[k]);
  const refresh=()=>{disarm();const e=edited();badge.textContent=e?'Edited by you':'Unedited';badge.style.color=e?'var(--text-success)':'var(--text-muted)';err.textContent=''};
  const setMode=m=>{disarm();mode=m;sig.innerHTML=document.getElementById('sig-'+m).innerHTML;root.querySelectorAll('.seg button').forEach(b=>b.classList.toggle('on',b.dataset.mode===m))};
  setMode(mode);
  let sel=null;
  document.addEventListener('selectionchange',()=>{const s=getSelection();if(s.rangeCount&&ed.contains(s.anchorNode))sel=s.getRangeAt(0).cloneRange()});
  const restore=()=>{ed.focus();if(!sel)return;const s=getSelection();if(s.rangeCount&&ed.contains(s.anchorNode)&&s.getRangeAt(0).compareBoundaryPoints(Range.START_TO_START,sel)===0&&s.getRangeAt(0).compareBoundaryPoints(Range.END_TO_END,sel)===0)return;s.removeAllRanges();s.addRange(sel)};
  Object.values(fs).forEach(i=>i.addEventListener('input',refresh));
  note.addEventListener('input',()=>{err.textContent='';disarm()});
  ed.addEventListener('input',()=>{bars(ed);refresh()});
  root.querySelectorAll('[data-cmd]').forEach(b=>{b.addEventListener('mousedown',e=>e.preventDefault());b.addEventListener('click',()=>{restore();document.execCommand(b.dataset.cmd,false,null);refresh()})});
  const cellAt=()=>{const s=getSelection();let n=s.rangeCount&&ed.contains(s.anchorNode)?s.anchorNode:(sel&&sel.startContainer);if(n&&n.nodeType===3)n=n.parentNode;const c=n&&n.closest?n.closest('td'):null;return c&&ed.contains(c)&&!c.dataset.bar?c:null};
  const setKey=(c,on)=>{if(on){c.dataset.key='1';c.style.background=KEY;c.style.color='#222222';c.setAttribute('bgcolor',KEY)}else{delete c.dataset.key;c.style.background='';c.style.color='';c.removeAttribute('bgcolor')}};
  root.querySelectorAll('.shade').forEach(b=>{
    b.style.display=ed.querySelector('table')?'':'none';
    b.addEventListener('mousedown',e=>e.preventDefault());
    b.addEventListener('click',()=>{const c=cellAt();if(!c){err.textContent='Click into a table cell first';return}
      const tb=c.closest('table'),cells=b.dataset.row?Array.from(c.parentNode.cells).filter(x=>!x.dataset.bar):[c],on=!cells.every(x=>x.dataset.key);
      Array.from(tb.rows).slice(1).forEach(r=>Array.from(r.cells).forEach(x=>{if(!x.dataset.bar)setKey(x,false)}));
      if(on)cells.forEach(x=>setKey(x,true));bars(ed);refresh()});
  });
  const lb=q('.linkbtn');
  lb.addEventListener('mousedown',e=>e.preventDefault());
  lb.addEventListener('click',()=>{const s=getSelection();saved=(s.rangeCount&&ed.contains(s.anchorNode))?s.getRangeAt(0).cloneRange():(sel&&sel.cloneRange());lr.style.display='flex';url.focus()});
  const apply=()=>{let u=url.value.trim();if(!u){err.textContent='Enter a link address first';return}if(!/^(https?:|mailto:|tel:)/i.test(u))u='https://'+u;ed.focus();const s=getSelection();s.removeAllRanges();if(saved)s.addRange(saved);else{const r=document.createRange();r.selectNodeContents(ed);r.collapse(false);s.addRange(r)}if(s.toString())document.execCommand('createLink',false,u);else{const a=document.createElement('a');a.href=u;a.textContent=u;s.getRangeAt(0).insertNode(a)}url.value='';lr.style.display='none';refresh()};
  q('.applylink').addEventListener('click',apply);
  url.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();apply()}});
  root.querySelectorAll('.seg button').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));
  const msg=a=>{const body=toMd(ed),n=note.value.trim();if(!body){err.textContent='Add some body text first';return null}if(a==='revise'&&!n&&!edited()){err.textContent='Edit the draft or add a note first';return null}if(a==='send'&&n){err.textContent='Clear the note first, or send it back for revision';return null}if(a==='send'&&!fs.to.value.trim()){err.textContent='Add a recipient first';return null}return '[Draft '+root.dataset.id+' · '+root.dataset.version+' · '+a+']\nEdited inline: '+(edited()?'yes':'no')+'\nNote: '+(n||'none')+'\nSignature: '+mode+'\nTo: '+fs.to.value+'\nCc: '+fs.cc.value+'\nSubject: '+fs.subject.value+'\n---\n'+body};
  q('.approve').addEventListener('click',()=>{const m=msg('approve');if(m)sendPrompt(m)});
  q('.revise').addEventListener('click',()=>{const m=msg('revise');if(m)sendPrompt(m)});
  sb.addEventListener('click',()=>{const m=msg('send');if(!m){disarm();return}
    if(armed===null){sb.textContent='Confirm: send to '+fs.to.value.trim()+(fs.cc.value.trim()?', cc '+fs.cc.value.trim():'')+' ↗';sb.style.color='var(--text-danger)';sb.style.borderColor='var(--text-danger)';armed=setTimeout(disarm,8000);return}
    disarm();root.querySelectorAll('.approve,.send,.revise').forEach(b=>b.disabled=true);sb.textContent='Sending…';sendPrompt(m)});
  q('.reset').addEventListener('click',()=>{ed.innerHTML=orig.html;fs.to.value=orig.to;fs.cc.value=orig.cc;fs.subject.value=orig.subject;note.value='';refresh()});
});
})();
