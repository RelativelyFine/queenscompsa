import re
import string
file = open("countries.txt", 'r')

filelis = ["- \"{0}\"\n".format(x[:-1]) for x in file.readlines() if len(x) >
           6 and not (" " in x)]
print(filelis)

file2 = open("output.txt", "w")

for x in filelis:
    file2.write(x)
