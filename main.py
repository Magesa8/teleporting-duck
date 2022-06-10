def on_button_pressed_a():
    basic.clear_screen()
    radio.send_string("DUCK")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    if receivedString == "DUCK":
        basic.show_icon(IconNames.DUCK)
    elif receivedString == "GHOST":
        basic.show_icon(IconNames.GHOST)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    basic.clear_screen()
    radio.send_string("GHOST")
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(23)