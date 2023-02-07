def on_button_pressed_a():
    basic.show_string("start!")
    pixel_array.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    pixel_array.set_pixel_color(1, neopixel.colors(NeoPixelColors.ORANGE))
    pixel_array.set_pixel_color(2, neopixel.colors(NeoPixelColors.YELLOW))
    pixel_array.set_pixel_color(3, neopixel.colors(NeoPixelColors.GREEN))
    pixel_array.set_pixel_color(4, neopixel.colors(NeoPixelColors.BLUE))
    pixel_array.show()
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . # . .
    """)
    kitronik_servo_lite.turn_left(180)
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                . . # . .
                . # . # .
    """)
    kitronik_servo_lite.turn_right(180)
    kitronik_servo_lite.set_distance_per_second(10)
    kitronik_servo_lite.drive_backwards(10)
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . # . .
    """)
    kitronik_servo_lite.drive_forwards(10)
    pixel_array.clear()
    pixel_array.show()
    basic.show_string("Finish!")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

pixel_array: neopixel.Strip = None
pixel_array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)

def on_every_interval():
    pass
loops.every_interval(60000, on_every_interval)
