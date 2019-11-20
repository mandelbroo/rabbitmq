const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, connection) => {
  if (err) throw err

  connection.createChannel((err, channel) => {
    if (err) throw err

    const queue = 'hello'
    const msg = 'Hello World!'

    channel.assertQueue(queue, {
      durable: false
    })
    channel.sendToQueue(queue, Buffer.from(msg))

    console.log('>>>>>> sent %s', msg)
  })

  // setTimeout(() => {
  //   connection.close()
  //   process.exit(0)
  // }, 500)
})
