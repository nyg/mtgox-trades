var startButton = document.getElementById('start'),
    mtgoxWS = io.connect('https://socketio.mtgox.com/mtgox');

unsubscribe(mtgoxWS, 'trades');
unsubscribe(mtgoxWS, 'ticker');
unsubscribe(mtgoxWS, 'depth');

startButton.onclick = function (e) {
  if (startButton.value == 'Start') {
    subscribe(mtgoxWS, 'trades');
    startButton.value = 'Stop';
  }
  else {
    unsubscribe(mtgoxWS, 'trades');
    startButton.value = 'Start';
  }
}


mtgoxWS.on('message', function(d) {
  console.log(d);
  if (d.op = 'private' && d.private == 'trade') {
    var tr = document.createElement('tr');
    
    tr.appendChild(ce('td', d.trade.trade_type + ', ' + d.trade.properties.replace(/,/g, ', ')));
    tr.appendChild(ce('td', d.trade.amount));
    tr.appendChild(ce('td', d.trade.item));
    tr.appendChild(ce('td', d.trade.price));
    tr.appendChild(ce('td', d.trade.price_currency));
    
    document.getElementById('trades').appendChild(tr);
  }
});
