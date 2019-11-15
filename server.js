const express = require('express');
const app = express();
const port = 8080;
// CORSを有効にする
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});
app.get('/chat', function(req, res) {
  const userInputText = req.query.text;
  const callback = req.query.callback;
  const response = {
    output: []
  };
  const msg = response.output;

  if (userInputText == 'イヌ' || userInputText == '犬' || userInputText == 'いぬ') {
    msg.push({
      type: 'text',
      value: '好きな犬種は？',
      delayMs: 500 //表示ディレイ（ミリ秒）
    });
    //オプションボタンを作る
    const opts = [];
    opts.push({
      label: 'パグ',
      value: 'パグ'
    });
    opts.push({
      label: '柴犬',
      value: '柴犬'
    });
    opts.push({
      label: 'ポメラニアン',
      value: 'ポメラニアン'
    });
    msg.push({
      type: 'option',
      options: opts
    });
  } else if (userInputText == 'ネコ' || userInputText == '猫' || userInputText == 'ねこ') {
    msg.push({
      type: 'text',
      value: '好きなネコの種類は？',
      delayMs: 500
    });
    const opts = [];
    opts.push({
      label: 'スコティッシュフォールド',
      value: 'スコティッシュフォールド'
    });
    opts.push({
      label: 'シャム',
      value: 'シャム'
    });
    opts.push({
      label: 'アメリカンショートヘア',
      value: 'アメリカンショートヘア'
    });
    msg.push({
      type: 'option',
      options: opts
    });
  } else if (userInputText == 'ネズミ' || userInputText == 'ねずみ' || userInputText == '鼠') {
    msg.push({
      type: 'text',
      value: '好きなネズミのは？',
      delayMs: 500
    });
    //  ドブネズミ、クマネズミ、ハツカネズミ
    const opts = [];
    opts.push({
      label: 'ドブネズミ',
      value: 'ドブネズミ'
    });
    opts.push({
      label: 'クマネズミ',
      value: 'クマネズミ'
    });
    opts.push({
      label: 'ハツカネズミ',
      value: 'ハツカネズミ'
    });
    msg.push({
      type: 'option',
      options: opts
    });
  } else {
    msg.push({
      type: 'text',
      value: '「' + userInputText + '」ですね！ ええやん！！'
    });
  }
  if (callback) {
    const responseText = callback + '(' + JSON.stringify(response) + ')';
    res.set('Content-Type', 'application/javascript');
    res.send(responseText);
  } else {
    res.json(response);
  }
});
app.listen(port, () => {
  console.log('チャットサーバーを開始しました ポート番号:' + port);
});
