/* eslint-disable no-console */
var config = require('./config');
var twilio = require('twilio')(config.twilio.accountSid, config.twilio.authToken);

twilio.messages.create({
  body: 'Ut qui consequat flank. Ball tip dolor drumstick salami filet mignon brisket pig pancetta. Tri-tip consequat bacon jowl bresaola. Spare ribs officia biltong excepteur ut occaecat. Leberkas cow sirloin short ribs, in ham hock doner in.',
  to: config.myPhone,
  from: config.twilio.from,
  // mediaUrl: 'http://www.placecage.com/200/300'
}, function createCb(err, data) {
  if (err) return console.log('error sending message!', err);
  return console.log('sent message', data);
});
