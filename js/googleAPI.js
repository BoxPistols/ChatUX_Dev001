function doGet(e) {
  var userInputText = e.parameter.text;
  var callback = e.parameter.callback;
  var response = {
    output: []
  };
  var msg = response.output;
  var opts = [];

  if (userInputText == 'イヌ' || userInputText == '犬' || userInputText == 'いぬ') {
    msg.push({
      type: 'text',
      value: '好きな犬種は？',
      delayMs: 500 //表示ディレイ（ミリ秒）
    });
    //オプションボタンを作る
    var opts = [];
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
    var opts = [];
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
      value: '好きなネズミの種類は？',
      delayMs: 500
    });
    //  ドブネズミ、クマネズミ、ハツカネズミ
    var opts = [];
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

  var responseText = '';
  if (callback) {
    //JSONP
    responseText = callback + '(' + JSON.stringify(response) + ')';
    return send(ContentService.MimeType.JAVASCRIPT, responseText);
  } else {
    //JSON
    return sendJson(response);
  }

}

function send(mimeType, responseText) {
  var textOut = ContentService.createTextOutput();
  textOut.setMimeType(mimeType);
  textOut.setContent(responseText);
  return textOut;
}

function sendJson(response) {
  var textOut = ContentService.createTextOutput();
  var responseText = JSON.stringify(response);
  textOut.setMimeType(ContentService.MimeType.JSON);
  textOut.setContent(responseText);
  return textOut;
}
