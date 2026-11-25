(function(){
  var chips=document.querySelectorAll('.chip');
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.classList.remove('on')});c.classList.add('on');
    var v=c.getAttribute('data-c');
    document.querySelectorAll('#posts .card').forEach(function(k){k.style.display=(!v||k.getAttribute('data-cat')===v)?'':'none'});
  })});
  var f=document.getElementById('cf');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),tr=f.dataset.lang==='tr';
    var t=(tr?'Merhaba, web sitesinden yazıyorum.\n':'Hello, writing from the website.\n')+(tr?'Ad: ':'Name: ')+d.get('n')+'\nE-posta: '+d.get('e')+'\n'+(tr?'Firma: ':'Company: ')+(d.get('f')||'-')+'\n'+(tr?'Bütçe: ':'Budget: ')+d.get('b')+'\n\n'+d.get('m');
    window.open('https://wa.me/905400242107?text='+encodeURIComponent(t),'_blank','noopener');});
})();
