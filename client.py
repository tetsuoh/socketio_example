from socketIO_client import SocketIO

socketIO = SocketIO('localhost', 8000)

socketIO.emit('eventMessage', {'messageKey': 'messageValue'})

socketIO.emit('addComp', {'name': 'hoge',
                          'width': 100,
                          'height': 100})

socketIO.emit('addFolder', {'name': 'hoge'})
