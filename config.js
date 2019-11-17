const googleAPIKey = "AIzaSyDeFMOZC8QoCqAJF_xlxNguqDiTFzl0gGI"
const port = process.env.PORT || 8088
const origin = 'https://scg-test-fe.herokuapp.com'
const lineConfig = {
    channelAccessToken: 'PqUy1xjYG7Q0NUS7HEqK7+4KgfgonKDanoVa5tbjMEk0PiTTEYqjbzkXrXCv4svqd4KwVjE0o7r7nElQKSTPTd05kx8J44ETYYyqvZPGmxJbd1JwLPvPDEnfs/40LAp9TGIxUuYc9PCfUuNNGjUjagdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'ee0f16e7de175d3087409b2d67ec7abd',
    url: 'https://api.line.me/v2/bot/message/reply'
}
module.exports = {
    googleAPIKey: googleAPIKey,
    port: port,
    origin: origin,
    lineConfig: lineConfig
}