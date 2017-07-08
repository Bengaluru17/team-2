__author__ = 'Rushil'

from PIL import ImageFont, ImageDraw, Image

def write_over(image_dest, font_dest, size, X, Y, write_string):

    im = Image.open(image_dest)
    draw = ImageDraw.Draw(im)
    font = ImageFont.truetype(font_dest, size)
    draw.text(X, Y, write_string, font=font)

    im.close()