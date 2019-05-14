#!/usr/bin/python

import os
import time

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
                        devices.append(buffer.split("\n"))
                        buffer = ''
        file.close()

        if len(buffer) > 0:
                devices.append(buffer.split("\n"))
                buffer = ''

        return devices

def get_device_index_from_name(devices, name):
        index = 0
        for device in devices:
                for data in device:
                        beg = data.find('Name="')
                        if beg != -1:
                                device_name = data[beg + len('Name="'):-1]
                                if name == device_name:
                                        return index
                index += 1
        return -1

def get_device_event_file(name):
        devices = list_devices()
        index = get_device_index_from_name(devices, name)

        if index != -1:
                device = devices[index]
                for data in device:
                        beg = data.find('Handlers=')
                        if beg != -1:
                                device_handlers = data[beg + len('Handlers='):].split(' ')
                                for h in device_handlers:
                                        if h.find('event') != -1:
                                                return '/dev/input/' + h
        return ''

def app():
        event_file = ''

        while len(event_file) == 0:
                event_file = get_device_event_file('00:08:2A:F4:53:BD')
                time.sleep(5)

	try:
		button = InputDevice(event_file)
	except:
		print('Error: failed openning {0}'.format(event_file))

	for event in button.read_loop():
		if event.type == ecodes.EV_KEY:
			print(event)
			# os.system('raspistill -t 2 -o photo.jpg')

app()
