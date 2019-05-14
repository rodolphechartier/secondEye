import os

from evdev import InputDevice, categorize, ecodes

# /dev/input/event0 => mouse
# /dev/input/event1 => keyboard
# /dev/input/event2 => broken keyboard 
# /dev/input/event3 => middle headset button

def app():
	try:
		button = InputDevice('/dev/input/event3')
	except:
		print('Error: failed openning /dev/input/event3')

	for event in button.read_loop():
		if event.type == ecodes.EV_KEY:
			print(event)
			os.system('raspistill -t 2 -o photo.jpg')

app()
