namespace SpriteKind {
    export const Treefolk = SpriteKind.create()
    export const Elder_Treefolk = SpriteKind.create()
    export const Health = SpriteKind.create()
    export const Stoneborn = SpriteKind.create()
    export const Spell = SpriteKind.create()
}
function LevelUp () {
    game.splash("Level Up")
    Speed += 25
    MaxHealth += 1
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    PC.setImage(img`
        . . c . . . . . . . . . . . . . 
        . c 6 c . . . . . f f f f f . . 
        c 8 8 6 c . . . f f f f f f f . 
        c 8 8 8 c . . . f f f f f f f . 
        . c e c . . . . f f f f f f f . 
        . . e . . . . . f f f f f f f . 
        . . e . . . . . f f f f f f f . 
        . . e . . . . f f f f f f f f f 
        . . . e . . f f f f f f f f f f 
        . . . e . f f f . f f f f f f f 
        . . . e d f f . . f f f f f f f 
        . . . e d d . . . f f f f f d d 
        . . . e . . . . . f f f f f . . 
        . . . e . . . . . f f f f f . . 
        . . . . e . . . . f f f f f . . 
        . . . . e . . . f f f f f f f . 
        `)
    Facing = 1
})
function monsterKilled (Monster: Sprite, Projectile: Sprite) {
    if (Math.percentChance(20)) {
        Heart = sprites.create(img`
            . . . . . . . . . . 
            . . 3 3 . . 3 3 . . 
            . 3 2 2 3 3 2 2 3 . 
            3 2 2 2 2 2 2 2 2 3 
            3 2 2 2 2 2 2 2 2 3 
            . 3 2 2 2 2 2 2 3 . 
            . 3 2 2 2 2 2 2 3 . 
            . . 3 2 2 2 2 3 . . 
            . . . 3 2 2 3 . . . 
            . . . . 3 3 . . . . 
            `, SpriteKind.Health)
        tiles.placeOnTile(Heart, Monster.tilemapLocation())
    }
    sprites.destroy(Monster)
    sprites.destroy(Projectile)
    Killcount += 1
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataNumber(PC, "Spell2") == 1) {
        if (Facing == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . f . . . . 
                . 6 . f 8 f . . . 
                . . f 8 6 8 f 6 . 
                . . f 8 6 8 f . . 
                6 . f 8 6 8 f . . 
                . f 8 6 6 6 8 f . 
                . f 8 6 f 6 8 f 6 
                . . f f . f f . . 
                `, PC, 0, -150)
        } else if (Facing == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . 6 . . . . 
                . f f . . . 6 . 
                f 8 8 f f f . . 
                f 6 6 8 8 8 f . 
                . f 6 6 6 6 8 f 
                f 6 6 8 8 8 f . 
                f 8 8 f f f . . 
                . f f . . 6 . . 
                . 6 . . . . . . 
                `, PC, 150, 0)
        } else if (Facing == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . f f . f f . . 
                . f 8 6 f 6 8 f 6 
                . f 8 6 6 6 8 f . 
                6 . f 8 6 8 f . . 
                . . f 8 6 8 f . . 
                . . f 8 6 8 f 6 . 
                . 6 . f 8 f . . . 
                . . . . f . . . . 
                `, PC, 0, 150)
        } else if (Facing == 4) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . 6 . . . 
                . 6 . . . f f . 
                . . f f f 8 8 f 
                . f 8 8 8 6 6 f 
                f 8 6 6 6 6 f . 
                . f 8 8 8 6 6 f 
                . . f f f 8 8 f 
                . . 6 . . f f . 
                . . . . . . 6 . 
                `, PC, -150, 0)
        }
    } else if (sprites.readDataNumber(PC, "Spell2") == 2) {
        if (Facing == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                4 . . . 5 5 . . . 
                . . . 5 5 . . . . 
                . . 5 5 . . . . 4 
                . . 5 5 5 5 . . . 
                . . . 5 5 5 5 . . 
                . . . . 5 5 . . . 
                4 . . 5 5 . . 4 . 
                . . 5 5 . . . . . 
                `, PC, 0, -250)
        } else if (Facing == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . 4 . . . . . 
                . . . . . . 4 . 
                . . . . 5 . . . 
                5 . . 5 5 5 . . 
                5 5 . 5 5 5 5 . 
                . 5 5 5 5 . 5 5 
                . . 5 5 . . . 5 
                . . . . . . . . 
                4 . . . . . 4 . 
                `, PC, 250, 0)
        } else if (Facing == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . 5 5 . . 
                . 4 . . 5 5 . . 4 
                . . . 5 5 . . . . 
                . . 5 5 5 5 . . . 
                . . . 5 5 5 5 . . 
                4 . . . . 5 5 . . 
                . . . . 5 5 . . . 
                . . . 5 5 . . . 4 
                `, PC, 0, 250)
        } else if (Facing == 4) {
            projectile = sprites.createProjectileFromSprite(img`
                . 4 . . . . . 4 
                . . . . . . . . 
                5 . . . 5 5 . . 
                5 5 . 5 5 5 5 . 
                . 5 5 5 5 . 5 5 
                . . 5 5 5 . . 5 
                . . . 5 . . . . 
                . 4 . . . . . . 
                . . . . . 4 . . 
                `, PC, -250, 0)
        }
        projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Stoneborn, function (sprite, otherSprite) {
    Damage(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataNumber(PC, "Spell1") == 1) {
        if (Facing == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . f . . . . 
                . 6 . f 8 f . . . 
                . . f 8 6 8 f 6 . 
                . . f 8 6 8 f . . 
                6 . f 8 6 8 f . . 
                . f 8 6 6 6 8 f . 
                . f 8 6 f 6 8 f 6 
                . . f f . f f . . 
                `, PC, 0, -150)
        } else if (Facing == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . 6 . . . . 
                . f f . . . 6 . 
                f 8 8 f f f . . 
                f 6 6 8 8 8 f . 
                . f 6 6 6 6 8 f 
                f 6 6 8 8 8 f . 
                f 8 8 f f f . . 
                . f f . . 6 . . 
                . 6 . . . . . . 
                `, PC, 150, 0)
        } else if (Facing == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . f f . f f . . 
                . f 8 6 f 6 8 f 6 
                . f 8 6 6 6 8 f . 
                6 . f 8 6 8 f . . 
                . . f 8 6 8 f . . 
                . . f 8 6 8 f 6 . 
                . 6 . f 8 f . . . 
                . . . . f . . . . 
                `, PC, 0, 150)
        } else if (Facing == 4) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . 6 . . . 
                . 6 . . . f f . 
                . . f f f 8 8 f 
                . f 8 8 8 6 6 f 
                f 8 6 6 6 6 f . 
                . f 8 8 8 6 6 f 
                . . f f f 8 8 f 
                . . 6 . . f f . 
                . . . . . . 6 . 
                `, PC, -150, 0)
        }
    } else if (sprites.readDataNumber(PC, "Spell1") == 2) {
        if (Facing == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                4 . . . 5 5 . . . 
                . . . 5 5 . . . . 
                . . 5 5 . . . . 4 
                . . 5 5 5 5 . . . 
                . . . 5 5 5 5 . . 
                . . . . 5 5 . . . 
                4 . . 5 5 . . 4 . 
                . . 5 5 . . . . . 
                `, PC, 0, -250)
        } else if (Facing == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . 4 . . . . . 
                . . . . . . 4 . 
                . . . . 5 . . . 
                5 . . 5 5 5 . . 
                5 5 . 5 5 5 5 . 
                . 5 5 5 5 . 5 5 
                . . 5 5 . . . 5 
                . . . . . . . . 
                4 . . . . . 4 . 
                `, PC, 250, 0)
        } else if (Facing == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . 5 5 . . 
                . 4 . . 5 5 . . 4 
                . . . 5 5 . . . . 
                . . 5 5 5 5 . . . 
                . . . 5 5 5 5 . . 
                4 . . . . 5 5 . . 
                . . . . 5 5 . . . 
                . . . 5 5 . . . 4 
                `, PC, 0, 250)
        } else if (Facing == 4) {
            projectile = sprites.createProjectileFromSprite(img`
                . 4 . . . . . 4 
                . . . . . . . . 
                5 . . . 5 5 . . 
                5 5 . 5 5 5 5 . 
                . 5 5 5 5 . 5 5 
                . . 5 5 5 . . 5 
                . . . 5 . . . . 
                . 4 . . . . . . 
                . . . . . 4 . . 
                `, PC, -250, 0)
        }
        projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Elder_Treefolk, function (sprite, otherSprite) {
    Damage(2)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    PC.setImage(img`
        . . . c . . . . . . . . . . . . 
        . . c 6 c . . . . f f f . . . . 
        . . c 8 c . . . f f f f f . . . 
        . . . c . . . . d d f f f . . . 
        . . . e . . . . 6 1 d f f . . . 
        . . . e . . . . 8 1 d f f . . . 
        . . . . e . . . d d d f f . . . 
        . . . . e . . . f f f f f . . . 
        . . . . e f f f f f f f f . . . 
        . . . . e f f f f f f f f . . . 
        . . . . e . . . f f f f f . . . 
        . . . . . e . . f f f f f . . . 
        . . . . . e . . f f f f f . . . 
        . . . . . . e . f f f f f f . . 
        . . . . . . e . f f f f f f . . 
        . . . . . . e . f f f f f f f f 
        `)
    Facing = 4
})
sprites.onCreated(SpriteKind.Stoneborn, function (sprite) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile12`)
    sprites.setDataNumber(Monster, "Health", 4)
    timer.after(500, function () {
        sprite.follow(PC, 25)
    })
})
function StonebornDmg (Monster: Sprite, Projectile: Sprite) {
    sprites.destroy(Projectile)
    Monster.setImage(img`
        . . f f f f f f f f f . . . 
        . f f f f f f f f f f . . . 
        . f f f f f f f f f f f f . 
        . f f f f f f f f f f f f . 
        . f f f f f f f f f f f f . 
        . . f f f f f f f f f f . . 
        . f f f f f f f f f f f f . 
        f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f 
        . f f f f f . . f f f f f . 
        . . f f f f . . f f f f . . 
        . f f f f . . . . f f f f . 
        . f f f f . . . . f f f f . 
        . . f f . . . . . . f f . . 
        `)
    timer.after(500, function () {
        Monster.setImage(img`
            . . f f f f f f f f f . . . 
            . f b b b b b b b b f . . . 
            . f b b b f b b f b b f f . 
            . f b b b f b b f b b b f . 
            . f b b b b b b b b b b f . 
            . . f b b b b b b b b f . . 
            . f f f f b b b b f f f f . 
            f a a f b f f f f b f a a f 
            f a a f b b f f b b f a a f 
            . f f b b f . . f b b f f . 
            . . f b b f . . f b b f . . 
            . f b b f . . . . f b b f . 
            . f b b f . . . . f b b f . 
            . . f f . . . . . . f f . . 
            `)
    })
}
sprites.onCreated(SpriteKind.Elder_Treefolk, function (sprite) {
    sprite.follow(PC, 75)
    tiles.placeOnRandomTile(sprite, assets.tile`myTile3`)
})
sprites.onCreated(SpriteKind.Treefolk, function (sprite) {
    sprite.follow(PC, 50)
    tiles.placeOnRandomTile(sprite, assets.tile`myTile3`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spell, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Scroll = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 1 f f . . . . . . . 
            . . . . f 1 1 1 1 f f . . . . . 
            . . . f 1 1 5 1 1 1 1 f f . . . 
            . . f 1 1 5 1 1 5 1 1 1 1 f . . 
            . . . f 1 1 1 5 1 1 5 1 1 1 f . 
            . . . . f f 1 1 1 5 1 1 1 f . . 
            . . . . . . f f 1 1 1 1 f . . . 
            . . . . . . . . f f 1 f . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Spell)
        sprites.setDataNumber(Scroll, "SpellKind", sprites.readDataNumber(sprite, "Spell1"))
        sprites.setDataNumber(PC, "Spell1", sprites.readDataNumber(otherSprite, "SpellKind"))
    } else if (controller.B.isPressed()) {
        Scroll = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 1 f f . . . . . . . 
            . . . . f 1 1 1 1 f f . . . . . 
            . . . f 1 1 5 1 1 1 1 f f . . . 
            . . f 1 1 5 1 1 5 1 1 1 1 f . . 
            . . . f 1 1 1 5 1 1 5 1 1 1 f . 
            . . . . f f 1 1 1 5 1 1 1 f . . 
            . . . . . . f f 1 1 1 1 f . . . 
            . . . . . . . . f f 1 f . . . . 
            . . . . . . . . . . f . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Spell)
        sprites.setDataNumber(Scroll, "SpellKind", sprites.readDataNumber(sprite, "Spell2"))
        sprites.setDataNumber(PC, "Spell2", sprites.readDataNumber(otherSprite, "SpellKind"))
    }
})
sprites.onOverlap(SpriteKind.Stoneborn, SpriteKind.Projectile, function (sprite, otherSprite) {
    StonebornDmg(sprite, otherSprite)
    sprites.changeDataNumberBy(sprite, "Health", -1)
    if (sprites.readDataNumber(sprite, "Health") == 0) {
        monsterKilled(sprite, otherSprite)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PC.setImage(img`
        . . . . . . . . . . . . c . . . 
        . . . . f f f . . . . c 6 c . . 
        . . . f f f f f . . . c 8 c . . 
        . . . f f f d d . . . . c . . . 
        . . . f f d 1 6 . . . . e . . . 
        . . . f f d 1 8 . . . . e . . . 
        . . . f f d d d . . . e . . . . 
        . . . f f f f f . . . e . . . . 
        . . . f f f f f f f f e . . . . 
        . . . f f f f f f f f e . . . . 
        . . . f f f f f . . . e . . . . 
        . . . f f f f f . . e . . . . . 
        . . . f f f f f . . e . . . . . 
        . . f f f f f f . e . . . . . . 
        . . f f f f f f . e . . . . . . 
        f f f f f f f f . e . . . . . . 
        `)
    Facing = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Health, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
    if (info.life() > MaxHealth) {
        info.setLife(3)
    }
})
sprites.onOverlap(SpriteKind.Treefolk, SpriteKind.Projectile, function (sprite, otherSprite) {
    Treefolk_Damage(sprite, otherSprite)
    sprites.changeDataNumberBy(sprite, "Health", -1)
    if (sprites.readDataNumber(sprite, "Health") == 0) {
        monsterKilled(sprite, otherSprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treefolk, function (sprite, otherSprite) {
    Damage(1)
})
function Elder_Treefolk_Damage (Monster: Sprite, Projectile: Sprite) {
    sprites.destroy(Projectile)
    Monster.setImage(img`
        ..f..........f..
        .fff...ff...fff.
        .fff..ffff..fff.
        .ffffffffffffff.
        .ffffffffffffff.
        ..ffffffffffff..
        ...ffffffffff...
        ...ffffffffff...
        ...ffffffffff...
        ..ffffffffffff..
        ..ffffffffffff..
        ..ffffffffffff..
        ..ffffffffffff..
        .ffffffffffffff.
        .ffffffffffffff.
        .ffffffffffffff.
        .ffffffffffffff.
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        .ffffffffffffff.
        ffffffffffffffff
        ffffffffffffffff
        ffffffffffffffff
        .ffffffffffffff.
        .ffffffffffffff.
        ..ffffffffffff..
        ...ffffffffff...
        .....ffffff.....
        .....ffffff.....
        .....ffffff.....
        `)
    timer.after(500, function () {
        Monster.setImage(img`
            ..f..........f..
            .fef...ff...fef.
            .fef..f86f..fef.
            .fefff8886fffef.
            .feef888886feef.
            ..ff8f8888f6ff..
            ...f88f88f86f...
            ...f11888811f...
            ...f11188111f...
            ..f8812882186f..
            ..f8888888886f..
            ..f8888888886f..
            ..f8888888886f..
            .f888888888886f.
            .f888888888886f.
            .f888888888886f.
            .f888888888886f.
            f88888888888886f
            f88888888888886f
            f88888888888886f
            f88888888888886f
            .f888888888888f.
            f8ff88888888ff6f
            f888fff88fff886f
            f888888ff888886f
            .f888888888886f.
            .f888888888886f.
            ..f8888888886f..
            ...ffffffffff...
            .....feeeef.....
            .....feeeef.....
            .....ffffff.....
            `)
    })
}
sprites.onOverlap(SpriteKind.Elder_Treefolk, SpriteKind.Projectile, function (sprite, otherSprite) {
    Elder_Treefolk_Damage(sprite, otherSprite)
    sprites.changeDataNumberBy(sprite, "Health", -1)
    if (sprites.readDataNumber(sprite, "Health") == 0) {
        tiles.setTileAt(sprite.tilemapLocation(), assets.tile`myTile2`)
        game.splash("A gateway has opened.")
        LevelUp()
        monsterKilled(sprite, otherSprite)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    PC.setImage(img`
        . . . . . . . . . . . . . c . . 
        . . f f f f f . . . . . c 6 c . 
        . f f d d d f f . . . c 6 8 8 c 
        . f 1 6 d 6 1 f . . . c 8 8 8 c 
        . f 1 8 d 8 1 f . . . . c e c . 
        . f d d d d d f . . . . . e . . 
        . f d d d d d f . . . . . e . . 
        f f f f f f f f f . . . . e . . 
        f f f f f f f f f f . . e . . . 
        f f f f f f f . f f f . e . . . 
        f f f f f f f . . f d d e . . . 
        d d f f f f f . . . d d e . . . 
        . . f f f f f . . . . . e . . . 
        . . f f f f f . . . . . e . . . 
        . . f f f f f . . . . e . . . . 
        . f f f f f f f . . . e . . . . 
        `)
    Facing = 3
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    Area = 2
    sprites.destroyAllSpritesOfKind(SpriteKind.Treefolk)
    sprites.destroyAllSpritesOfKind(SpriteKind.Elder_Treefolk)
    tiles.setCurrentTilemap(tilemap`The_Old_Caverns`)
    tiles.placeOnTile(PC, tiles.getTileLocation(11, 31))
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    PC.sayText("" + Killcount + " Kill(s)", 1000, true)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "" + Killcount + " Kill(s)")
    console.log(Killcount)
    game.gameOver(false)
})
function Treefolk_Damage (Monster: Sprite, Projectile: Sprite) {
    sprites.destroy(Projectile)
    Monster.setImage(img`
        . . . f . . f f f f . . f . . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        `)
    timer.after(500, function () {
        Monster.setImage(img`
            . . . f . . f f f f . . f . . . 
            . . f e f f 8 8 8 6 f f e f . . 
            . . . f f 8 8 8 8 8 6 f f . . . 
            . . . . f 1 1 8 8 1 1 f . . . . 
            . . . f 8 1 f 8 8 f 1 6 f . . . 
            . . . f 8 8 8 8 8 8 8 6 f . . . 
            . . f 8 8 8 8 8 8 8 8 8 6 f . . 
            . . f 8 8 8 8 8 8 8 8 8 6 f . . 
            . . . f 8 8 8 8 8 8 8 8 f . . . 
            . . f 8 f f f f f f f f 6 f . . 
            . . f 8 8 8 8 8 8 8 8 8 6 f . . 
            . . . f 8 8 8 8 8 8 8 6 f . . . 
            . . . f 8 8 8 8 8 8 8 6 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            `)
    })
}
function Damage (Amount: number) {
    if (Invincible == 0) {
        info.changeLifeBy(0 - Amount)
        Invincible = 1
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile4`)
    Scroll = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f 1 f f . . . . . . . 
        . . . . f 1 1 1 1 f f . . . . . 
        . . . f 1 1 5 1 1 1 1 f f . . . 
        . . f 1 1 5 1 1 5 1 1 1 1 f . . 
        . . . f 1 1 1 5 1 1 5 1 1 1 f . 
        . . . . f f 1 1 1 5 1 1 1 f . . 
        . . . . . . f f 1 1 1 1 f . . . 
        . . . . . . . . f f 1 f . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Spell)
    tiles.placeOnTile(Scroll, location)
    sprites.setDataNumber(Scroll, "SpellKind", 2)
})
let Invincible = 0
let Scroll: Sprite = null
let Monster: Sprite = null
let projectile: Sprite = null
let Killcount = 0
let Heart: Sprite = null
let Area = 0
let MaxHealth = 0
let Facing = 0
let PC: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
PC = sprites.create(img`
    . . . . . . . . . . . . . c . . 
    . . f f f f f . . . . . c 6 c . 
    . f f d d d f f . . . c 6 8 8 c 
    . f 1 6 d 6 1 f . . . c 8 8 8 c 
    . f 1 8 d 8 1 f . . . . c e c . 
    . f d d d d d f . . . . . e . . 
    . f d d d d d f . . . . . e . . 
    f f f f f f f f f . . . . e . . 
    f f f f f f f f f f . . e . . . 
    f f f f f f f . f f f . e . . . 
    f f f f f f f . . f d d e . . . 
    d d f f f f f . . . d d e . . . 
    . . f f f f f . . . . . e . . . 
    . . f f f f f . . . . . e . . . 
    . . f f f f f . . . . e . . . . 
    . f f f f f f f . . . e . . . . 
    `, SpriteKind.Player)
Facing = 3
tiles.placeOnTile(PC, tiles.getTileLocation(22, 22))
let Speed = 100
controller.moveSprite(PC, Speed, Speed)
scene.cameraFollowSprite(PC)
info.setLife(3)
MaxHealth = 3
Area = 1
sprites.setDataNumber(PC, "Spell1", 1)
sprites.setDataNumber(PC, "Spell2", 0)
game.onUpdateInterval(5000, function () {
    if (Area == 2) {
        Monster = sprites.create(img`
            . . f f f f f f f f f . . . 
            . f b b b b b b b b f . . . 
            . f b b b f b b f b b f f . 
            . f b b b f b b f b b b f . 
            . f b b b b b b b b b b f . 
            . . f b b b b b b b b f . . 
            . f f f f b b b b f f f f . 
            f a a f b f f f f b f a a f 
            f a a f b b f f b b f a a f 
            . f f b b f . . f b b f f . 
            . . f b b f . . f b b f . . 
            . f b b f . . . . f b b f . 
            . f b b f . . . . f b b f . 
            . . f f . . . . . . f f . . 
            `, SpriteKind.Stoneborn)
    }
})
game.onUpdateInterval(1000, function () {
    if (Area == 1 && Math.percentChance(20)) {
        if (Math.percentChance(80)) {
            Monster = sprites.create(img`
                . . . f . . f f f f . . f . . . 
                . . f e f f 8 8 8 6 f f e f . . 
                . . . f f 8 8 8 8 8 6 f f . . . 
                . . . . f 1 1 8 8 1 1 f . . . . 
                . . . f 8 1 f 8 8 f 1 6 f . . . 
                . . . f 8 8 8 8 8 8 8 6 f . . . 
                . . f 8 8 8 8 8 8 8 8 8 6 f . . 
                . . f 8 8 8 8 8 8 8 8 8 6 f . . 
                . . . f 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 f f f f f f f f 6 f . . 
                . . f 8 8 8 8 8 8 8 8 8 6 f . . 
                . . . f 8 8 8 8 8 8 8 6 f . . . 
                . . . f 8 8 8 8 8 8 8 6 f . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . e e e e . . . . . . 
                `, SpriteKind.Treefolk)
            sprites.setDataNumber(Monster, "Health", 3)
        } else {
            Monster = sprites.create(img`
                ..f..........f..
                .fef...ff...fef.
                .fef..f86f..fef.
                .fefff8886fffef.
                .feef888886feef.
                ..ff8f8888f6ff..
                ...f88f88f86f...
                ...f11888811f...
                ...f11188111f...
                ..f8812882186f..
                ..f8888888886f..
                ..f8888888886f..
                ..f8888888886f..
                .f888888888886f.
                .f888888888886f.
                .f888888888886f.
                .f888888888886f.
                f88888888888886f
                f88888888888886f
                f88888888888886f
                f88888888888886f
                .f888888888888f.
                f8ff88888888ff6f
                f888fff88fff886f
                f888888ff888886f
                .f888888888886f.
                .f888888888886f.
                ..f8888888886f..
                ...ffffffffff...
                .....feeeef.....
                .....feeeef.....
                .....ffffff.....
                `, SpriteKind.Elder_Treefolk)
            sprites.setDataNumber(Monster, "Health", 5)
        }
    }
})
game.onUpdateInterval(10, function () {
    if (Invincible == 1) {
        timer.after(500, function () {
            Invincible = 0
        })
    }
})
