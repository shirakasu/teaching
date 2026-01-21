// --- セットアップ ---
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // 2D描画コンテキストを取得

// --- 定数の定義 ---
const BLUE = "#0000ff"
const ORANGE = "#ffa500"
const GREEN = "#008000"
const YELLOW = "#ffff00"


// --- 変数の定義 ---

// ボールに関する変数
let x = canvas.width / 2;  // ボールの初期X座標
let y = canvas.height - 30; // ボールの初期Y座標
let dx = 1;  // X方向の移動速度
let dy = -1; // Y方向の移動速度
const ballRadius = 10; // ボールの半径
const ballColor = YELLOW;

// パドル（操作する板）に関する変数
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2; // パドルの初期X座標

// キーボード操作
let rightPressed = false;
let leftPressed = false;

// ブロックに関する変数
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let score = 0;

// ブロックの配列を作成（初期化）
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        // status: 1は表示、0は破壊済み
        bricks[c][r] = { x: 0, y: 0, status: 1 }; 
    }
}

// --- イベントリスナー（キー操作の検知） ---
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

// --- 描画関数群 ---

// ボールを描画する
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

// パドルを描画する
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// ブロックを描画する
function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                // ブロックの座標を計算
                let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

// スコアを表示する
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

// --- ゲームロジック ---

// ボールとブロックの衝突判定
function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if (b.status === 1) {
                // ボールがブロックの内部に入ったら
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy; // ボールのY方向を反転
                    b.status = 0; // ブロックを破壊状態にする
                    score++; // スコア加算

                    // 全ブロック破壊の判定
                    if(score === brickRowCount * brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}


// メインループ（この関数が繰り返し実行される）
function draw() {
    // 画面をクリア（これをしないと前の描画が残ってしまう）
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    collisionDetection();

    // --- 壁との衝突判定 ---
    // 左右の壁
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx; // X方向を反転
    }
    // 上の壁
    if (y + dy < ballRadius) {
        dy = -dy; // Y方向を反転
    } 
    // 下の壁（ゲームオーバー判定 or パドルとの衝突）
    else if (y + dy > canvas.height - ballRadius) {
        // パドルの上にボールがあるか？
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy; // 反転（少し加速させても面白い）
        } else {
            // パドルが受け止められなかった場合
            alert("GAME OVER");
            document.location.reload(); // ページをリロードして再開
            return; // ここで処理を止める
        }
    }

    // --- パドルの移動 ---
    // 右キーが押されていて、かつキャンバスの右端からはみ出さない場合
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    // 左キーが押されていて、かつキャンバスの左端からはみ出さない場合
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    // ボールの座標を更新
    x += dx;
    y += dy;

    // 次の描画フレームをリクエスト（滑らかなアニメーションのため）
    requestAnimationFrame(draw);
}

// ゲーム開始
draw();
