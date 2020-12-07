namespace SpriteKind {
    export const goal = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    music.baDing.play()
    tiles.setTileAt(location, myTiles.transparency16)
})
let grinsj: Sprite = null
game.splash("Hjelp nissen å hente alle gavene!")
let ring = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f . . . . . . . f . . . . 
    . . f . f f f f f f f . f . . . 
    . f . f . . . . . . . f . f . . 
    . f . f . . . . . . . f . f . . 
    . f . f . . . . . . . f . f . . 
    . f . f . . . . . . . f . f . . 
    . f . f . . . . . . . f . f . . 
    . f . f . . . . . . . f . f . . 
    . f . f . . . . . . . f . f . . 
    . . f . f f f f f f f . f . . . 
    . . . f . . . . . . . f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.goal)
ring.setPosition(22, 21)
let nisse = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . 2 2 2 d d d d d 2 . . . . . 
    . 2 2 . 2 d f d f d 2 . . . . . 
    . 2 2 . 6 d d d d d 6 . . . . . 
    . . . . 6 d d d d d 6 . . . . . 
    . . . . 6 6 6 f 6 6 6 . . . . . 
    . . . f f 6 6 6 6 6 f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . f f f . . . f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(nisse, 100, 100)
scene.cameraFollowSprite(nisse)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000000010100000000000200000001010100000101000200000000000000010001000001010000000000000000000100010002010100000002000000020001000100000101000000000101000000000001000001010002000001010000010100010002010100000101010100010100020100000101000001010201000100000001000001010000000100010001000200010003010100020001000100010100000101010101000000010001000000000000000001010000000000010101010000000200010103000002000000000000000000030101010101010101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . 2 2 2 . . 2 
    2 . . . . . . . . . 2 . 2 . . 2 
    2 . . . . . . . . . 2 . 2 . . 2 
    2 . . . . . . . . . 2 . 2 . . 2 
    2 . . . . 2 2 . . . . . 2 . . 2 
    2 . . . . 2 2 . . 2 2 . 2 . . 2 
    2 . . 2 2 2 2 . 2 2 . . 2 . . 2 
    2 . . 2 2 . 2 . 2 . . . 2 . . 2 
    2 . . . 2 . 2 . 2 . . . 2 . . 2 
    2 . . . 2 . 2 . 2 2 . . 2 2 2 2 
    2 . . . 2 . 2 . . . . . . . . 2 
    2 . . . . . 2 2 2 2 . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.floorLight0,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
game.onUpdateInterval(5000, function () {
    grinsj = sprites.create(img`
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 f 7 f 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 f 7 7 7 . . . . . 
        . 7 7 . . . 7 7 7 7 . . . 7 7 . 
        . . 7 7 . . 7 7 7 . . 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . . . 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 . . 7 7 . . . . 
        . . . . . 7 7 7 . . 7 7 7 . . . 
        . . . . 7 7 7 . . . . 7 7 7 . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(grinsj, myTiles.tile2)
    grinsj.follow(ring, 10)
})
