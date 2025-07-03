import re

code = open("code.txt")
linePointer = 0
colPointer = 0
print("running")

for line in code.readlines():
    print(re.match(r"(^.*?)(\s*\/\/.*)", line).group(1)+".")
    line = re.split(r"[\s]", re.match(r"(^.*?)(\s*\/\/.*)", line).group(1))
    print(line)

code.close()
