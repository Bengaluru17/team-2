__author__ = 'Rushil'

import pandas as pd
import cv2
import numpy as np
import string
import os
import glob
import random

RESIZE_X = 28
RESIZE_Y = 28

def gen_handy_string(alphs, position, save):

    """
    1. Load a grayscale image
    2. Resize image through INTER_AREA interpolation given a size
    3. Bitwise Not to Invert colors
    4. Concatenate Arrays on axis = 1
    5. Use imshow to display
    """

    letter_list = list(alphs)
    BASE_DIR = ''
    buff = None

    for index, i in enumerate(letter_list):

        """Finding Corresponding Directory"""

        if i in string.ascii_lowercase:
            BASE_DIR = r'C:\NOS\Coding_2\cfgFG\Images\Lower'

        elif i in string.ascii_uppercase:
            BASE_DIR = r'C:\NOS\Coding_2\cfgFG\Images\Upper'

        final_char_path = os.path.join(BASE_DIR, i)

        """Loading Random Grayscale"""

        final_selected_image = os.path.join(final_char_path, random.choice(os.listdir(final_char_path)))

        img = cv2.imread(final_selected_image, cv2.IMREAD_GRAYSCALE)

        """Resizing and BitWiseNot"""
        img = cv2.resize(img, (RESIZE_X, RESIZE_Y))
        #img = cv2.bitwise_not(img)

        if index == 0:
            buff = img

        if index != 0:
            buff = np.c_[buff, img]

        return buff

    cv2.imshow('Final', buff)

gen_handy_string('hello', 'ds', 'ds')
