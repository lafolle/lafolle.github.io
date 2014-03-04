import PIL
from PIL import Image
import os
import json

def getwidth(width, height, iheight=400):
	return (width*iheight) / height

dirs = ['/home/lafolle/lafolle.github.io/static/photographs/personal/Jaisalmer',
		'/home/lafolle/lafolle.github.io/static/photographs/personal/Puducherry',
		'/home/lafolle/lafolle.github.io/static/photographs/personal/Beri',
		'/home/lafolle/lafolle.github.io/static/photographs/personal/Ladakh']

exclude = [ '/home/lafolle/lafolle.github.io/static/photographs/personal/Jaisalmer/JAISALMER.docx',
			'/home/lafolle/lafolle.github.io/static/photographs/personal/Ladakh/Pause_to_begin.docx']
			
defaultheight = 400
projectmap = {'personal': {} }
for directory in dirs:
	images = os.listdir(directory)
	project = directory.split('/')[-1]
	projectmap['personal'][project] = {}
	projectmap['personal'][project]['links'] = []
	# print images
	# import sys
	# sys.exit(0)
	import traceback
	for image in images:
		if os.path.join(directory ,image) in exclude: continue
		d = {'name': image}
		w=0
		try:
			print os.path.join(directory ,image)
			im = Image.open(os.path.join(directory ,image))
			w = getwidth(im.size[0], im.size[1], iheight=defaultheight)
			d['width'] = w
			d['height'] = 400
			print '[SUCCESS] Resizing image: %s to (%s, %s)' % (image, str(w), str(defaultheight))
			img = im.resize((w, defaultheight), PIL.Image.ANTIALIAS)
			img.save(os.path.join(directory ,image))
			projectmap['personal'][project]['links'].append(d)
		except :
			traceback.print_exc()
			print '[FAIL] Resizing image: %s to (%s, %s)' % (image, str(w), str(defaultheight))

with open('projectmap.json', 'w') as outfile:
  json.dump(projectmap, outfile)

