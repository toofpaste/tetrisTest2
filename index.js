
const PubNub = require('pubnub');
pubnub = new PubNub({
  publishKey : "pub-c-d99d7542-4d07-43c0-a3e1-2aee03cf4db8",
  subscribeKey : "sub-c-c3e9d46a-96af-11e9-ab0f-d62d90a110cf"
});

let publishConfig = {
  channel : "pubnub_onboarding_channel",
  message : "Hello From JavaScript SDK"
}

pubnub.publish(publishConfig, function(status, response) {
  console.log(status, response);
});
