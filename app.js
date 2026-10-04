const demoSignals=[
 {symbol:'EURUSD',direction:'BUY',score:82,trend:'Bullish',rsi:62,vol:'Medium'},
 {symbol:'GBPUSD',direction:'BUY',score:76,trend:'Bullish',rsi:58,vol:'Medium'},
 {symbol:'USDJPY',direction:'SELL',score:79,trend:'Bearish',rsi:41,vol:'High'},
 {symbol:'XAUUSD',direction:'WAIT',score:63,trend:'Mixed',rsi:51,vol:'High'},
 {symbol:'AUDUSD',direction:'BUY',score:74,trend:'Bullish',rsi:56,vol:'Low'},
 {symbol:'USDCAD',direction:'SELL',score:71,trend:'Bearish',rsi:44,vol:'Medium'}
];
const demoTrades=[
 {symbol:'EURUSD',side:'BUY',entry:'1.17420',sl:'1.17180',tp:'1.17900',pl:'+82.40'},
 {symbol:'USDJPY',side:'SELL',entry:'149.220',sl:'149.580',tp:'148.500',pl:'+60.10'}
];

const pages=document.querySelectorAll('.page');
function showPage(id){
 pages.forEach(p=>p.classList.toggle('active',p.id===id));
 document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.page===id));
 const title={dashboard:'Dashboard',scanner:'Market Scanner',trades:'Trades',controls:'Bot Controls',settings:'Settings & License'}[id];
 document.getElementById('pageTitle').textContent=title;
}
document.querySelectorAll('.nav,[data-page]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));

function renderScanner(){
 document.getElementById('scannerRows').innerHTML=demoSignals.map(s=>`
 <tr><td><b>${s.symbol}</b></td><td class="${s.direction.toLowerCase()}">${s.direction}</td><td><b>${s.score}</b>/100</td><td>${s.trend}</td><td>${s.rsi}</td><td>${s.vol}</td></tr>`).join('');
}
function renderTop(){
 document.getElementById('topSignals').innerHTML=demoSignals.slice(0,4).map(s=>`
 <div class="signal"><div><b>${s.symbol}</b><small>${s.trend} · RSI ${s.rsi}</small></div><b class="${s.direction.toLowerCase()}">${s.direction} ${s.score}</b></div>`).join('');
}
function renderTrades(){
 document.getElementById('tradeRows').innerHTML=demoTrades.map(t=>`
 <tr><td><b>${t.symbol}</b></td><td class="${t.side.toLowerCase()}">${t.side}</td><td>${t.entry}</td><td>${t.sl}</td><td>${t.tp}</td><td class="profit">${t.pl}</td></tr>`).join('');
}
renderScanner();renderTop();renderTrades();

document.getElementById('refresh').onclick=()=>{
 document.getElementById('subtitle').textContent='Last refresh: '+new Date().toLocaleTimeString();
};
const risk=document.getElementById('risk');
risk.oninput=()=>document.getElementById('riskValue').textContent=risk.value+'%';
document.getElementById('saveControls').onclick=()=>{
 document.getElementById('saveMsg').textContent='Demo settings saved locally. Connect the API to control MT5.';
};
document.getElementById('activate').onclick=()=>{
 const key=document.getElementById('licenseKey').value.trim();
 const msg=document.getElementById('activationMsg');
 if(!key){msg.textContent='Enter a license key.';return}
 msg.textContent='Demo UI: license API is not connected yet.';
 document.getElementById('licenseStatus').textContent='API NOT CONNECTED';
};
