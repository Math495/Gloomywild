@namespace
class SpriteKind:
    Treefolk_H3 = SpriteKind.create()
    Elder_Treefolk_H5 = SpriteKind.create()
    M1H2 = SpriteKind.create()
    M1H1 = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    Damage(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Treefolk_H3, on_on_overlap)

def on_up_pressed():
    global Facing
    PC.set_image(img("""
        . . a . . . . . . . . . . . . . 
                . a 6 a . . . . . f f f f f . . 
                a 8 8 6 a . . . f f f f f f f . 
                a 8 8 8 a . . . f f f f f f f . 
                . a e a . . . . f f f f f f f . 
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
    """))
    Facing = 1
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    monsterKilled(sprite2, otherSprite2)
sprites.on_overlap(SpriteKind.M1H1, SpriteKind.projectile, on_on_overlap2)

def monsterKilled(Monster: Sprite, Projectile: Sprite):
    global Killcount
    sprites.destroy(Monster)
    sprites.destroy(Projectile)
    Killcount += 1

def on_on_overlap3(sprite3, otherSprite3):
    Treefolk_Damage(sprite3, otherSprite3)
    sprite3.set_kind(SpriteKind.M1H2)
sprites.on_overlap(SpriteKind.Treefolk_H3,
    SpriteKind.projectile,
    on_on_overlap3)

def on_a_pressed():
    global projectile
    if Facing == 1:
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . . f . . . . 
                            . 6 . f 8 f . . . 
                            . . f 8 6 8 f 6 . 
                            . . f 8 6 8 f . . 
                            6 . f 8 6 8 f . . 
                            . f 8 6 6 6 8 f . 
                            . f 8 6 f 6 8 f 6 
                            . . f f . f f . .
            """),
            PC,
            0,
            -150)
    elif Facing == 2:
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . 6 . . . . 
                            . f f . . . 6 . 
                            f 8 8 f f f . . 
                            f 6 6 8 8 8 f . 
                            . f 6 6 6 6 8 f 
                            f 6 6 8 8 8 f . 
                            f 8 8 f f f . . 
                            . f f . . 6 . . 
                            . 6 . . . . . .
            """),
            PC,
            150,
            0)
    elif Facing == 3:
        projectile = sprites.create_projectile_from_sprite(img("""
                . . f f . f f . . 
                            . f 8 6 f 6 8 f 6 
                            . f 8 6 6 6 8 f . 
                            6 . f 8 6 8 f . . 
                            . . f 8 6 8 f . . 
                            . . f 8 6 8 f 6 . 
                            . 6 . f 8 f . . . 
                            . . . . f . . . .
            """),
            PC,
            0,
            150)
    elif Facing == 4:
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . . 6 . . . 
                            . 6 . . . f f . 
                            . . f f f 8 8 f 
                            . f 8 8 8 6 6 f 
                            f 8 6 6 6 6 f . 
                            . f 8 8 8 6 6 f 
                            . . f f f 8 8 f 
                            . . 6 . . f f . 
                            . . . . . . 6 .
            """),
            PC,
            -150,
            0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_created(sprite4):
    sprite4.follow(PC, 75)
    tiles.place_on_random_tile(sprite4, assets.tile("""
        myTile3
    """))
sprites.on_created(SpriteKind.Elder_Treefolk_H5, on_on_created)

def on_on_created2(sprite5):
    sprite5.follow(PC, 50)
    tiles.place_on_random_tile(sprite5, assets.tile("""
        myTile3
    """))
sprites.on_created(SpriteKind.Treefolk_H3, on_on_created2)

def on_left_pressed():
    global Facing
    PC.set_image(img("""
        . . . a . . . . . . . . . . . . 
                . . a 6 a . . . . f f f . . . . 
                . . a 8 a . . . f f f f f . . . 
                . . . a . . . . d d f f f . . . 
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
    """))
    Facing = 4
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap4(sprite6, otherSprite4):
    Treefolk_Damage(sprite6, otherSprite4)
    sprite6.set_kind(SpriteKind.M1H1)
sprites.on_overlap(SpriteKind.M1H2, SpriteKind.projectile, on_on_overlap4)

def on_right_pressed():
    global Facing
    PC.set_image(img("""
        . . . . . . . . . . . . a . . . 
                . . . . f f f . . . . a 6 a . . 
                . . . f f f f f . . . a 8 a . . 
                . . . f f f d d . . . . a . . . 
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
    """))
    Facing = 2
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    global Facing
    PC.set_image(img("""
        . . . . . . . . . . . . . a . . 
                . . f f f f f . . . . . a 6 a . 
                . f f d d d f f . . . a 6 8 8 a 
                . f 1 6 d 6 1 f . . . a 8 8 8 a 
                . f 1 8 d 8 1 f . . . . a e a . 
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
    """))
    Facing = 3
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap5(sprite7, otherSprite5):
    Damage(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.M1H2, on_on_overlap5)

def Treefolk_Damage(Monster2: Sprite, Projectile2: Sprite):
    sprites.destroy(Projectile2)
    Monster2.set_image(img("""
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
    """))
    
    def on_after():
        Monster2.set_image(img("""
            . . . f . . f f f f . . f . . . 
                        . . f e f f 6 6 6 6 f f e f . . 
                        . . . f f 6 6 6 6 6 6 f f . . . 
                        . . . . f 1 1 6 6 1 1 f . . . . 
                        . . . f 6 1 f 6 6 f 1 6 f . . . 
                        . . . f 6 6 6 6 6 6 6 6 f . . . 
                        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
                        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
                        . . . f 6 6 6 6 6 6 6 6 f . . . 
                        . . f 6 f f f f f f f f 6 f . . 
                        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
                        . . . f 6 6 6 6 6 6 6 6 f . . . 
                        . . . f 6 6 6 6 6 6 6 6 f . . . 
                        . . . . f f f f f f f f . . . . 
                        . . . . . . e e e e . . . . . . 
                        . . . . . . e e e e . . . . . .
        """))
    timer.after(500, on_after)
    
def Damage(Amount: number):
    global Invincible
    if Invincible == 0:
        info.change_life_by(0 - Amount)
        Invincible = 1

def on_on_overlap6(sprite8, otherSprite6):
    Damage(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.M1H1, on_on_overlap6)

Monster3: Sprite = None
Invincible = 0
projectile: Sprite = None
Killcount = 0
Facing = 0
PC: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
"""))
PC = sprites.create(img("""
        . . . . . . . . . . . . . a . . 
            . . f f f f f . . . . . a 6 a . 
            . f f d d d f f . . . a 6 8 8 a 
            . f 1 6 d 6 1 f . . . a 8 8 8 a 
            . f 1 8 d 8 1 f . . . . a e a . 
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
    """),
    SpriteKind.player)
Facing = 3
tiles.place_on_tile(PC, tiles.get_tile_location(22, 22))
controller.move_sprite(PC)
scene.camera_follow_sprite(PC)
info.set_life(3)

def on_update_interval():
    global Monster3
    if Math.percent_chance(10):
        if Math.percent_chance(95):
            Monster3 = sprites.create(img("""
                    . . . f . . f f f f . . f . . . 
                                    . . f e f f 8 6 6 6 f f e f . . 
                                    . . . f f 8 6 6 6 6 6 f f . . . 
                                    . . . . f 1 1 6 6 1 1 f . . . . 
                                    . . . f 8 1 f 6 6 f 1 6 f . . . 
                                    . . . f 8 6 6 6 6 6 6 6 f . . . 
                                    . . f 8 6 6 6 6 6 6 6 6 6 f . . 
                                    . . f 8 6 6 6 6 6 6 6 6 6 f . . 
                                    . . . f 6 6 6 6 6 6 6 6 f . . . 
                                    . . f 8 f f f f f f f f 6 f . . 
                                    . . f 8 6 6 6 6 6 6 6 6 6 f . . 
                                    . . . f 8 6 6 6 6 6 6 6 f . . . 
                                    . . . f 8 6 6 6 6 6 6 6 f . . . 
                                    . . . . f f f f f f f f . . . . 
                                    . . . . . . e e e e . . . . . . 
                                    . . . . . . e e e e . . . . . .
                """),
                SpriteKind.Treefolk_H3)
        else:
            Monster3 = sprites.create(img("""
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
                """),
                SpriteKind.Elder_Treefolk_H5)
game.on_update_interval(1000, on_update_interval)

def on_update_interval2():
    if Invincible == 1:
        
        def on_after2():
            global Invincible
            Invincible = 0
        timer.after(500, on_after2)
        
game.on_update_interval(10, on_update_interval2)
