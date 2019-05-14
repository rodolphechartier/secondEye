#!/usr/bin/python

import os

from evdev import InputDevice, categorize, ecodes

def list_devices():
        file = open('/proc/bus/input/devices', 'r')
        devices = []
        buffer = ''

        for line in file:
                line = line.rstrip()
                if len(line) > 0:
                        buffer += line + "\n"
                elif len(buffer) > 0:
                        devices.append(buffer)
                        buffer = ''

        if len(buffer) > 0:
                devices.append(buffer)
                buffer = ''

        file.close()

        i = 0
        while i < len(devices):
                print('device n.{0}'.format(i))
                print(devices[i])
                i += 1

def app():
	try:
		button = InputDevice('/dev/input/event3')
	except:
		print('Error: failed openning /dev/input/event3')

	for event in button.read_loop():
		if event.type == ecodes.EV_KEY:
			print(event)
			os.system('raspistill -t 2 -o photo.jpg')

list_devices()
