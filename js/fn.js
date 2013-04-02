function ce (name, textContent) {
  var e = document.createElement(name);
  e.textContent = textContent;
  return e;
}

function subscribe (ws, name) {
  ws.emit('message', {
    'op': 'mtgox.subscribe',
    'type': name
  });
}

function unsubscribe (ws, name) {
  var channel;
  
  switch (name) {
    case 'trades': channel = 'dbf1dee9-4f2e-4a08-8cb7-748919a71b21'; break;
    case 'ticker': channel = 'd5f06780-30a8-4a48-a2f8-7ed181b4a13f'; break;
    case 'depth' : channel = '24e67e0d-1cad-4cc0-9e7a-f8523ef460fe'; break;
  }
  
  ws.emit('message', {
    'op': 'unsubscribe',
    'channel': channel
  });
}