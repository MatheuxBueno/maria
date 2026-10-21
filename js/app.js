const items = [
["Aparência & estilo","Atração por músculos","Interesse em corpos musculosos."],
["Aparência & estilo","Atração por pelos","Interesse em pelos corporais."],
["Aparência & estilo","Podofilia","Interesse em pés."],
["Aparência & estilo","Atração por mãos","Interesse estético em mãos."],
["Aparência & estilo","Atração por tatuagens","Interesse em tatuagens."],
["Aparência & estilo","Atração por piercings","Interesse em piercings."],
["Aparência & estilo","Uniformes","Interesse em uniformes e seus códigos visuais."],
["Aparência & estilo","Couro","Interesse em roupas ou acessórios de couro."],
["Aparência & estilo","Látex","Interesse em roupas ou materiais de látex."],
["Aparência & estilo","Lingerie","Interesse em lingerie como elemento visual."],
["Aparência & estilo","Saltos altos","Interesse em sapatos de salto."],
["Aparência & estilo","Máscaras","Interesse em máscaras e anonimato estético."],
["Materiais & sensações","Fetiche por seda","Interesse na textura da seda."],
["Materiais & sensações","Veludo","Interesse na textura do veludo."],
["Materiais & sensações","Penas","Interesse em toque leve com penas."],
["Materiais & sensações","Cócegas (knismolagnia)","Interesse em cócegas consensuais."],
["Materiais & sensações","Massagem","Interesse em massagens e toque relaxante."],
["Materiais & sensações","Ceraunofilia","Interesse em tempestades e trovões como atmosfera."],
["Materiais & sensações","Nebulofilia","Interesse estético em neblina."],
["Materiais & sensações","Frio e gelo","Interesse em sensações frias leves e seguras."],
["Materiais & sensações","Calor","Interesse em sensações de calor controladas."],
["Materiais & sensações","Perfumes","Interesse em fragrâncias."],
["Materiais & sensações","Vozes","Interesse em timbres, sussurros ou vozes específicas."],
["Materiais & sensações","Contato visual","Interesse em olhares prolongados."],
["Materiais & sensações","Sussurros","Interesse em falar baixo e perto."],
["Fantasia & personagens","Roleplay","Interesse em interpretar personagens."],
["Fantasia & personagens","Vampiros e criaturas noturnas","Interesse em estética ou fantasia sobrenatural."],
["Fantasia & personagens","Fantasia gótica","Interesse em cenários e estética gótica."],
["Fantasia & personagens","Cosplay","Interesse em figurinos e personagens."],
["Fantasia & personagens","Fantasias de época","Interesse em roupas e cenários históricos."],
["Fantasia & personagens","Personagens fictícios","Interesse em personagens de ficção."],
["Fantasia & personagens","Identidade secreta","Interesse em anonimato ou mistério fictício."],
["Fantasia & personagens","Máscaras e baile","Interesse em bailes mascarados e mistério."],
["Fantasia & personagens","Flerte teatral","Interesse em sedução encenada."],
["Fantasia & personagens","Encontro às cegas","Interesse na expectativa de conhecer alguém."],
["Romance & intimidade","Romance lento","Interesse em construir tensão romântica aos poucos."],
["Romance & intimidade","Cartas românticas","Interesse em mensagens ou cartas pessoais."],
["Romance & intimidade","Elogios","Interesse em receber ou fazer elogios."],
["Romance & intimidade","Adoração","Interesse em demonstrações intensas de admiração."],
["Romance & intimidade","Beijos longos","Preferência por beijos demorados."],
["Romance & intimidade","Abraços","Interesse em contato afetuoso."],
["Romance & intimidade","Carinho no cabelo","Interesse em cafuné ou toque no cabelo."],
["Romance & intimidade","Dormir abraçados","Interesse em proximidade física acolhedora."],
["Romance & intimidade","Provocação verbal","Interesse em brincadeiras e flerte verbal consensual."],
["Romance & intimidade","Sedução elegante","Interesse em gestos e ambiente sofisticados."],
["Romance & intimidade","Ciúme encenado","Interesse em ciúme fictício combinado previamente."],
["Romance & intimidade","Surpresas românticas","Interesse em gestos inesperados e carinhosos."],
["Dinâmicas & poder","Dominação consensual","Interesse em conduzir uma dinâmica previamente combinada."],
["Dinâmicas & poder","Submissão consensual","Interesse em ceder o controle de forma combinada."],
["Dinâmicas & poder","Switch","Interesse em alternar papéis de controle."],
["Dinâmicas & poder","Bondage","Interesse em restrição consensual com segurança."],
["Dinâmicas & poder","Venda nos olhos","Interesse em privação visual leve e combinada."],
["Dinâmicas & poder","Ordens combinadas","Interesse em seguir instruções acordadas."],
["Dinâmicas & poder","Protocolos","Interesse em regras e rituais combinados."],
["Dinâmicas & poder","Serviço","Interesse em atos de cuidado ou serviço dentro de uma dinâmica."],
["Dinâmicas & poder","Adoração aos pés","Interesse em foco simbólico nos pés, com consentimento."],
["Dinâmicas & poder","Spanking consensual","Interesse em palmadas combinadas e seguras."],
["Dinâmicas & poder","Impact play","Interesse em brincadeiras de impacto com limites claros."],
["Dinâmicas & poder","Sensação de cócegas","Interesse em estímulos leves e combinados."],
["Dinâmicas & poder","Provocação e espera","Interesse em antecipação dentro de limites acordados."],
["Dinâmicas & poder","Controle de ritmo","Interesse em combinar ritmo e pausas."],
["Dinâmicas & poder","Palavras de segurança","Interesse em usar sinais claros para pausar ou parar."],
["Dinâmicas & poder","Aftercare","Interesse em cuidado e acolhimento depois de uma dinâmica."],
["Dinâmicas & poder","Pet play entre adultos","Interesse em interpretar animal de estimação de forma lúdica."],
["Dinâmicas & poder","Age play entre adultos","Interesse em papéis etários fictícios entre adultos."],
["Dinâmicas & poder","Praise kink","Interesse em elogios dentro de uma dinâmica."],
["Dinâmicas & poder","Brat play","Interesse em provocação lúdica dentro de uma dinâmica combinada."],
["Dinâmicas & poder","Dominância verbal","Interesse em linguagem firme e combinada."],
["Dinâmicas & poder","Submissão verbal","Interesse em linguagem de submissão combinada."],
["Cenários & situações","Exibicionismo consensual","Interesse em ser visto em contexto privado e consentido."],
["Cenários & situações","Voyeurismo consensual","Interesse em observar pessoas que consentiram."],
["Cenários & situações","Público fictício","Interesse na sensação encenada de estar sendo observado."],
["Cenários & situações","Uniformes profissionais","Interesse em cenários com profissões e uniformes."],
["Cenários & situações","Encontro secreto","Interesse em encontros com clima de segredo fictício."],
["Cenários & situações","Hotel elegante","Interesse em ambientes sofisticados."],
["Cenários & situações","Cenário de chuva","Interesse em encontros com chuva como atmosfera."],
["Cenários & situações","Espelhos","Interesse em espelhos como elemento visual."],
["Cenários & situações","Fotografia consensual","Interesse em posar ou fotografar com acordo explícito."],
["Cenários & situações","Dança lenta","Interesse em proximidade e movimento."],
["Objetos & estética","Agalmatofilia","Interesse em estátuas ou figuras semelhantes a estátuas."],
["Objetos & estética","Mecanofilia","Interesse em máquinas ou mecanismos."],
["Objetos & estética","Joias","Interesse em joias como adorno."],
["Objetos & estética","Luvas","Interesse estético ou tátil em luvas."],
["Objetos & estética","Botas","Interesse em botas."],
["Objetos & estética","Óculos","Interesse em óculos como elemento de estilo."],
["Objetos & estética","Relógios","Interesse em relógios e acessórios."],
["Objetos & estética","Velas e luz baixa","Interesse em iluminação suave e atmosfera."],
["Objetos & estética","Frascos e poções","Interesse em recipientes, alquimia fictícia e estética de poções."],
["Objetos & estética","Cadeiras e mobiliário","Interesse em móveis como parte de um cenário."],
["Fantasia & intensidade","Algolagnia","Termo associado a interesse erótico em dor; práticas exigem consentimento e segurança."],
["Fantasia & intensidade","Sensação de vulnerabilidade encenada","Interesse em vulnerabilidade fictícia com limites claros."],
["Fantasia & intensidade","Perseguição fictícia","Interesse em uma cena de perseguição previamente combinada."],
["Fantasia & intensidade","Captura fictícia","Interesse em cenários encenados de captura, com consentimento e sinal de parada."],
["Fantasia & intensidade","Mistério e suspense","Interesse em suspense e antecipação."],
["Fantasia & intensidade","Fantasias de perigo fictício","Interesse em perigo encenado sem risco real."],
["Fantasia & intensidade","Transformação fantástica","Interesse em fantasias de mudança de forma ou identidade."],
["Fantasia & intensidade","Criaturas sobrenaturais","Interesse em vampiros, lobisomens ou outras criaturas fictícias."],
["Fantasia & intensidade","Horror gótico","Interesse em atmosfera de terror gótico."],
["Fantasia & intensidade","Fantasias de poder","Interesse em personagens com autoridade ou poderes fictícios."],
["Preferências sociais","Flertar em público (sem expor terceiros)","Interesse em flerte discreto respeitando quem está ao redor."],
["Preferências sociais","Segredos compartilhados","Interesse em confidências e cumplicidade."],
["Preferências sociais","Apelidos carinhosos","Interesse em nomes especiais entre parceiros."],
["Preferências sociais","Regras de casal","Interesse em combinados privados e recíprocos."],
["Preferências sociais","Iniciativa do parceiro","Preferência por outra pessoa iniciar o flerte ou carinho."],
["Preferências sociais","Tomar a iniciativa","Preferência por conduzir o primeiro passo."],
["Preferências sociais","Mensagens provocantes não explícitas","Interesse em mensagens sugestivas e consentidas."],
["Preferências sociais","Planejar uma fantasia juntos","Interesse em criar cenários em parceria."]
];
const grid=document.getElementById('jarGrid'), filter=document.getElementById('categoryFilter'), search=document.getElementById('searchBox');
const ratings=new Map(); let currentAccent='#a33b55';
const categories=[...new Set(items.map(x=>x[0]))];
categories.forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;filter.appendChild(o)});
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function render(){
 const q=search.value.trim().toLocaleLowerCase('pt-BR'), cat=filter.value;
 grid.innerHTML='';let last='';
 items.forEach((it,i)=>{
  if(cat!=='all'&&it[0]!==cat)return;
  if(q&&!it.join(' ').toLocaleLowerCase('pt-BR').includes(q))return;
  if(last!==it[0]){last=it[0];const h=document.createElement('div');h.className='category-title';h.textContent='✦ '+last;grid.appendChild(h)}
  const v=ratings.get(i)||0, card=document.createElement('article');card.className='jar'+(v?' selected':'');
  card.innerHTML=`<div class="jar-top"><span class="jar-number">POTE ${String(i+1).padStart(3,'0')}</span><span class="jar-symbol">✧</span></div>
  <div class="jar-visual"><div class="jar-shape"><div class="liquid" style="height:${v*20}%"></div></div></div>
  <div class="jar-name">${esc(it[1])}</div><div class="jar-desc">${esc(it[2])}</div>
  <div class="rating">${[1,2,3,4,5].map(n=>`<button data-i="${i}" data-v="${n}" class="${v===n?'active':''}" aria-label="${esc(it[1])}: nota ${n}" title="Nota ${n}">${n}</button>`).join('')}<button data-i="${i}" data-v="0" class="empty ${v===0?'active':''}">Deixar vazio</button></div>`;
  grid.appendChild(card);
 });
 updateStats();
}
function updateStats(){const n=[...ratings.values()].filter(v=>v>0).length;document.getElementById('stats').textContent=`${n} de ${items.length} preenchidos`}
grid.addEventListener('click',e=>{const b=e.target.closest('button[data-i]');if(!b)return;const i=+b.dataset.i,v=+b.dataset.v;if(v)ratings.set(i,v);else ratings.delete(i);render()});
filter.addEventListener('change',render);search.addEventListener('input',render);
document.getElementById('accentColor').addEventListener('input',e=>{currentAccent=e.target.value;document.documentElement.style.setProperty('--accent',currentAccent);document.documentElement.style.setProperty('--wine',shade(currentAccent,-30));document.documentElement.style.setProperty('--wine2',currentAccent);});
function shade(hex,amt){let n=parseInt(hex.slice(1),16),r=Math.max(0,Math.min(255,(n>>16)+amt)),g=Math.max(0,Math.min(255,((n>>8)&255)+amt)),b=Math.max(0,Math.min(255,(n&255)+amt));return '#'+(1<<24|r<<16|g<<8|b).toString(16).slice(1)}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',2400)}
function data(){return {name:document.getElementById('personName').value,accent:currentAccent,ratings:[...ratings.entries()],savedAt:new Date().toISOString()}}
document.getElementById('saveBtn').onclick=()=>{try{localStorage.setItem('vesper-kink-jars',JSON.stringify(data()));toast('Salvo neste aparelho.')}catch(e){toast('Não foi possível salvar neste navegador.')}};
document.getElementById('loadBtn').onclick=()=>{try{const d=JSON.parse(localStorage.getItem('vesper-kink-jars'));if(!d){toast('Ainda não existe um salvamento.');return}document.getElementById('personName').value=d.name||'';currentAccent=d.accent||'#a33b55';document.getElementById('accentColor').value=currentAccent;document.documentElement.style.setProperty('--accent',currentAccent);document.documentElement.style.setProperty('--wine',shade(currentAccent,-30));ratings.clear();(d.ratings||[]).forEach(([i,v])=>ratings.set(i,v));render();toast('Salvamento carregado.')}catch(e){toast('Não foi possível carregar o salvamento.')}};
document.getElementById('resetBtn').onclick=()=>{if(!confirm('Apagar todas as notas deste preenchimento?'))return;ratings.clear();render();toast('Potes reiniciados.');};
document.getElementById('exportBtn').onclick=()=>{
 const name=document.getElementById('personName').value.trim()||'Visitante';
 const chosen=items.map((it,i)=>({it,i,v:ratings.get(i)||0})).filter(x=>x.v);
 if(!chosen.length){toast('Escolha pelo menos uma nota antes de criar a imagem.');return}
 const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d'),W=1200,pad=70,cols=3,cellW=(W-pad*2)/cols,rowH=104;
 const groups=categories.map(c=>({name:c,items:chosen.filter(x=>x.it[0]===c)})).filter(g=>g.items.length);
 let rows=groups.reduce((sum,g)=>sum+1+g.items.length,0);
 canvas.width=W;canvas.height=310+rows*rowH+120;
 const grad=ctx.createLinearGradient(0,0,W,canvas.height);grad.addColorStop(0,'#100d12');grad.addColorStop(.5,'#261522');grad.addColorStop(1,'#100d12');ctx.fillStyle=grad;ctx.fillRect(0,0,W,canvas.height);
 // decorative moons
 ctx.fillStyle='#d9a7b7';ctx.font='28px Georgia';ctx.textAlign='center';ctx.fillText('☾  ✦  ☽',W/2,58);
 ctx.fillStyle='#f4e9ec';ctx.font='48px Georgia';ctx.fillText('VESPER',W/2,118);
 ctx.fillStyle='#c8aeb9';ctx.font='22px Arial';ctx.fillText('Diário de curiosidades & desejos',W/2,158);
 ctx.strokeStyle=currentAccent;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(pad,190);ctx.lineTo(W-pad,190);ctx.stroke();
 ctx.fillStyle='#f4e9ec';ctx.font='bold 30px Arial';ctx.textAlign='left';ctx.fillText(name, pad,238);
 ctx.fillStyle='#c8aeb9';ctx.font='19px Arial';ctx.fillText(`${chosen.length} preferências avaliadas  •  escala de 1 a 5`,pad,274);
 let y=320;
 groups.forEach(g=>{
  ctx.fillStyle='#e5b4c3';ctx.font='bold 22px Georgia';ctx.fillText(g.name.toUpperCase(),pad,y);y+=20;
  g.items.forEach((x,idx)=>{
   const col=idx%cols,row=Math.floor(idx/cols),xx=pad+col*cellW,yy=y+row*rowH;
   ctx.fillStyle='#241822';roundRect(ctx,xx,yy,cellW-16,82,12);ctx.fill();
   ctx.strokeStyle='#593548';ctx.lineWidth=1;roundRect(ctx,xx,yy,cellW-16,82,12);ctx.stroke();
   ctx.fillStyle='#f4e9ec';ctx.font='bold 17px Arial';wrapText(ctx,x.it[1],xx+14,yy+26,cellW-44,21,2);
   ctx.fillStyle='#c8aeb9';ctx.font='14px Arial';wrapText(ctx,x.it[2],xx+14,yy+52,cellW-44,17,2);
   ctx.fillStyle='#5b253a';roundRect(ctx,xx+cellW-74,yy+12,44,28,8);ctx.fill();
   ctx.fillStyle='#fff';ctx.font='bold 16px Arial';ctx.textAlign='center';ctx.fillText(`${x.v}/5`,xx+cellW-52,yy+31);ctx.textAlign='left';
  });
  y+=Math.ceil(g.items.length/cols)*rowH+22;
 });
 ctx.strokeStyle=currentAccent;ctx.beginPath();ctx.moveTo(pad,canvas.height-76);ctx.lineTo(W-pad,canvas.height-76);ctx.stroke();
 ctx.fillStyle='#bcaab3';ctx.font='16px Arial';ctx.textAlign='center';ctx.fillText('Preferências pessoais não significam consentimento. Respeito, comunicação e limites vêm primeiro.',W/2,canvas.height-43);
 ctx.fillText('Gerado localmente por Vesper',W/2,canvas.height-18);
 canvas.toBlob(blob=>{if(!blob){toast('Não foi possível gerar a imagem.');return}const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='vesper-relatorio.png';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);toast('Relatório em imagem criado.');},'image/png');
};
function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
function wrapText(ctx,text,x,y,maxWidth,lineHeight,maxLines){let words=text.split(' '),line='',lines=0;for(let n=0;n<words.length;n++){const test=line+words[n]+' ';if(ctx.measureText(test).width>maxWidth&&n>0){ctx.fillText(line,x,y);line=words[n]+' ';y+=lineHeight;lines++;if(lines>=maxLines-1)break}else line=test}if(line){if(lines>=maxLines-1&&ctx.measureText(line).width>maxWidth){while(ctx.measureText(line+'…').width>maxWidth&&line.length)line=line.slice(0,-1);line+='…'}ctx.fillText(line,x,y)}}
render();
