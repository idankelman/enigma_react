

export let ws = null
let messages = []
let last_token
  



export const init_ws = ({ token }) => {
  try {
    if ((ws === null || ws.readyState === 3) && token) {
      last_token = token
      ws = new WebSocket(`wss://ws-api.enigma-x.app/?token=${token}`)
    }

    ws.onopen = () => {
      console.log("connection astablished");
      messages.forEach((message) => {
        ws.send(JSON.stringify(message))
      })
    }

    ws.onmessage = (message) => {
      if (message.data.size !== 0) {
        // console.log(JSON.parse(message.data).content['BTC-USD'].filter.high);
        // console.log(JSON.parse(message.data).content['BTC-USD'].filter.low);
        // console.log("Recived Message\n"+ JSON.stringify(message));
        const response = JSON.parse(message.data);
        postMessage(response);
        
      }
    }
    ws.onclose = () => {
      console.log('closing ws connection')
    }
    ws.onerror = (err) => {
      if (ws.code !== 4000) {
        setTimeout(() => {
          init_ws({ token: last_token })
        }, 2000)
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const send_message = (data) => {
  try {
    console.log('sending message :\n' + JSON.stringify(data));
    if (ws.readyState !== 1) {
      messages.push(data)
    } else {
      ws.send(JSON.stringify(data))
    }
  } catch (error) {
    console.log(error)
  }
}

export const close_ws = () => {
  if (ws?.readyState === 1) {
    ws.send(JSON.stringify({ type: 'close-connection' }))
    ws.close()
    ws = null
  }
}
