const PubNub = require('pubnub');

const pubnub = new PubNub({
    publishKey: 'your_pubnub_publish_api_key_here',
    subscribeKey: 'your_pubnub_subscribe_api_key_here'
});

pubnub.subscribe({
    channels: ['my_channel']
});

pubnub.addListener({
    message: (pubnubMessage) => {
        console.log('New Message:', pubnubMessage.message);
    }
});

// Use Control + C to end the program
process.stdin.on('data', (key) => {
    // When the user presses the return key
    if (key.toString() === '\n') {
        pubnub.publish({
            message: 'Hello from client 2!',
            channel: 'my_channel'
        });
    }
});
