//ver.4 同時の和音にも対応、ただしアルペジオになる

//canvasのおまじない====================================
var canvas = $("#sequence")[0]; //canvas要素を変数に
var ctx = canvas.getContext("2d"); //書き込み権限を入れる
//====================================================

// ページ読み込み時シンセ生成;
var synth;
var osc = $("#osctype").val();
window.onload = function () {
  //get the current time
  synth = new Tone.Synth({
    oscillator: {
      type: osc,
    },
  }).toMaster();
};
//===================================
//オシレーターの選択で音色を変える
$("#osctype").change(function () {
  var osc = $("#osctype").val();
  if (osc == "square") {
    synth.oscillator.type = "square";
  }
  if (osc == "sine") {
    synth.oscillator.type = "sine";
  }
  if (osc == "triangle") {
    synth.oscillator.type = "triangle";
  }
  if (osc == "sawtooth") {
    synth.oscillator.type = "sawtooth";
  }
});
//===================================

//塗りつぶし色の設定=================
var cid = "";

// Colorを選択するとイベントが実行される;
$("#cid").on("change", function () {
  cid = $(this).val(); //thisは"#cid"と同意
});
//==============================================

//マス目の作成=========================================
//drowGrid関数の定義
var drawGrid = function (w, h) {
  ctx.canvas.width = w;
  ctx.canvas.height = h;
  //縦線をかく(12音分)
  for (x = 0; x <= w; x += 40) {
    ctx.moveTo(x, 0); //始点
    ctx.lineTo(x, h); //終点
  }
  //横線をかく
  for (y = 0; y <= h; y += 40) {
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
  }
  ctx.strokeStyle = "pink";
  ctx.lineWidth = 2;
  ctx.stroke();
};

//実行
drawGrid(800, 480);
//==================================================

//画面読み込み時の定義==========================
function begin() {
  canvas_mousedown_flg = false;
  ctx.fillStyle = "white";
  //   drowGrid(800, 480);
}
//===========================================

//マウスダウンで得た情報をplay時に使うための空配列の用意===
var melody = [];

//マウスダウンイベント==========================
$(canvas).on("mousedown", function (e) {
  canvas_mousedown_flg = true;
  var rect = e.target.getBoundingClientRect(); //rectでcanvasの絶対座標を取得
  mouseX = e.clientX - rect.left; //クリック座標からrectの左側の差分を引く
  mouseY = e.clientY - rect.top;

  var col = Math.floor(mouseX / 40) * 40; //マス内に塗りつぶしを納めるよう調整
  var row = Math.floor(mouseY / 40) * 40;

  //   console.log(col, row); //塗りつぶし座標の確認用

  ctx.fillStyle = cid;
  ctx.fillRect(col, row, 40, 40); //塗りつぶし

  //X軸に応じた音程の発生

  for (var n = 0; n < 12; n++) {
    // console.log(nSound[n]);
    // console.log(cols[n]);
    if (row == n * 40) {
      //get the current time
      synth.triggerAttackRelease(nSound[n], "8n");
      var pitch = nSound[n];
      var time = col / 40 + 1; //１sec単位は遅いので半分にする
      melody.push([pitch, time]);
      console.log(melody);
    }
  }
});

//音の操作用の配列==================================================
var nSound = [
  "B4",
  "A#4",
  "A4",
  "G#4",
  "G4",
  "F#4",
  "F4",
  "E4",
  "D#4",
  "D4",
  "C#4",
  "C4",
];

var cols = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440];
//===============================================================

//再生する================================================

$("#playbtn").on("click", function () {
  //time(x軸の値)に合わせてソート
  var newmelody = melody.sort(function (a, b) {
    return a[1] - b[1];
  });
  console.log(newmelody); //新配列確認

  var melo1 = [];
  var melo2 = [];
  var melo3 = [];
  var melo4 = [];
  var melo5 = [];
  var melo6 = [];
  var melo7 = [];
  var melo8 = [];
  var melo9 = [];
  var melo10 = [];
  var melo11 = [];
  var melo12 = [];
  var melo13 = [];
  var melo14 = [];
  var melo15 = [];
  var melo16 = [];
  var melo17 = [];
  var melo18 = [];
  var melo19 = [];
  var melo20 = [];

  for (var t = 0; t < newmelody.length; t++) {
    if (newmelody[t][1] == 1) {
      melo1.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 2) {
      melo2.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 3) {
      melo3.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 4) {
      melo4.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 5) {
      melo5.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 6) {
      melo6.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 7) {
      melo7.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 8) {
      melo8.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 9) {
      melo9.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 10) {
      melo10.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 11) {
      melo11.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 12) {
      melo12.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 13) {
      melo13.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 14) {
      melo14.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 15) {
      melo15.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 16) {
      melo16.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 17) {
      melo17.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 18) {
      melo18.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 19) {
      melo19.push(newmelody[t][0]);
    } else if (newmelody[t][1] == 20) {
      melo20.push(newmelody[t][0]);
    }
  }

  var onlymelody = [
    melo1,
    melo2,
    melo3,
    melo4,
    melo5,
    melo6,
    melo7,
    melo8,
    melo9,
    melo10,
    melo11,
    melo12,
    melo13,
    melo14,
    melo15,
    melo16,
    melo17,
    melo18,
    melo19,
    melo20,
  ]; //tone.sequenceで再生できるようメロディのみの配列に入れ直す

  //   var onlytime = []; //休符の処理のためtimeだけの配列を用意
  //   for (var z = 0; z < newmelody.length; z++) {
  //     onlytime.push(newmelody[z][1]);
  //   }

  //8分音符で再生
  function setPlay(time, note) {
    synth.triggerAttackRelease(note, "16n", time);
  }

  //メロディをセット
  const melody5 = new Tone.Sequence(setPlay, onlymelody);

  //   メロディ再生;
  melody5.start();
  Tone.Transport.start();

  console.log(onlymelody);
  //   console.log(onlytime);
  //   console.log(missing);
  console.log(melo1);
  console.log(melo2);

  //   var synth2 = new Tone.Synth({
  //     oscillator: {
  //       type: osc,
  //     },
  //   }).toMaster();

  //   for (var a = 0; a < newmelody.length; a++)
  //     synth2.triggerAttackRelease(newmelody[a][0], "8n", newmelody[a][1] + 5); //timeリセットできないので10秒delay
});

//クリアボタン==========================================
$("#clearbtn").on("click", function () {
  location.reload();
});
