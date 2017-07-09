__author__ = 'Rushil'

import tkinter as tk
import json
from PIL import Image, ImageTk

window = tk.Tk()
window.title('main_soft')
window.geometry("1000x1000")

path = r"C:\NOS\Coding_2\cfgFG\Advanced\Advanced_0.png"
json_dict = json.load(open(r"C:\NOS\Coding_2\cfgFG\Advanced\Advanced_0.json", 'r'))

#window.configure(background = 'black')

im = Image.open(path)
im = im.resize((534, 800))

img = ImageTk.PhotoImage(im)

path = r"C:\NOS\Coding_2\cfgFG\Advanced\Advanced_0.png"
json_dict = json.load(open(r"C:\NOS\Coding_2\cfgFG\Advanced\Advanced_0.json", 'r'))

im = Image.open(path)
im = im.resize((534, 800))


panel = tk.Label(window, image = img)
t1 = tk.Entry(window)
t2 = tk.Entry(window)
t3 = tk.Entry(window)
t4 = tk.Entry(window)
t5 = tk.Entry(window)
t6 = tk.Entry(window, highlightbackground = 'black')

def on_button_1():
    print(t1.get())

def on_button_2():
    print(t2.get())

def on_button_3():
    print(t3.get())

def on_button_4():
    print(t4.get())

def on_button_5():
    print(t5.get())

def on_button_6():
    print(t6.get())

button1 = tk.Button(window, text="Name", command = on_button_1)
button2 = tk.Button(window, text="Age", command = on_button_2)
button3 = tk.Button(window, text="Address 1", command = on_button_3)
button4 = tk.Button(window, text="Address 1", command = on_button_4)
button5 = tk.Button(window, text="City", command = on_button_5)
button6 = tk.Button(window, text="State", command = on_button_6)

panel.grid(row = 0, column = 0, rowspan = 8)

t1.grid(row = 1, column = 1)
t2.grid(row = 2, column = 1)
t3.grid(row = 3, column = 1)
t4.grid(row = 4, column = 1)
t5.grid(row = 5, column = 1)
t6.grid(row = 6, column = 1)

button1.grid(row = 1, column = 3, padx = 100)
button2.grid(row = 2, column = 3, padx = 100)
button3.grid(row = 3, column = 3, padx = 100)
button4.grid(row = 4, column = 3, padx = 100)
button5.grid(row = 5, column = 3, padx = 100)
button6.grid(row = 6, column = 3, padx = 100)

print(window.winfo_pointerx(), window.winfo_pointery())

window.mainloop()





