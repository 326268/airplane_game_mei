// 按A鍵
input.onButtonPressed(Button.A, function () {
    // 主角向左移一格
    character.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    // 始創建【子彈】角色
    bullet = game.createSprite(character.get(LedSpriteProperty.X), character.get(LedSpriteProperty.Y))
    // 重複四次(移動四格)
    for (let index = 0; index < 4; index++) {
        // 子彈向上移動1格
        bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    // 跑到最上方，將【子彈】角色刪除
    bullet.delete()
})
// 按B鍵
input.onButtonPressed(Button.B, function () {
    // 主角向右移一格
    character.change(LedSpriteProperty.X, 1)
})
let bullet: game.LedSprite = null
let character: game.LedSprite = null
// 分數歸0
game.setScore(0)
// 角色定位
character = game.createSprite(2, 4)
// 角色定位
let airplane = game.createSprite(0, 0)
basic.forever(function () {
    basic.pause(500)
    // 飛機向右移
    airplane.change(LedSpriteProperty.X, 1)
    if (airplane.get(LedSpriteProperty.X) == 4) {
        basic.pause(500)
        airplane.set(LedSpriteProperty.X, 0)
        airplane.change(LedSpriteProperty.Y, 1)
    }
})
// 如果飛機碰到主角，就GAME OVER
basic.forever(function () {
    if (airplane.isTouching(character)) {
        game.gameOver()
    }
})
// 如果子彈碰到飛機，就得1分，並且飛機回到起始位置
basic.forever(function () {
    // 【子彈】這角色產生後才有作用
    if (bullet) {
        if (bullet.isTouching(airplane)) {
            game.addScore(1)
            airplane.set(LedSpriteProperty.X, 0)
            airplane.set(LedSpriteProperty.Y, 0)
        }
    }
})
