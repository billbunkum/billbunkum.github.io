#function adds 1 to num
def AddingNum(ask):
	y = 0
	for x in range(1, ask+1):
		y += x
	return y

ask = input("gimme a' number ")
if ask != int:
	print "I need a number, yo"
else: 
	AddingNum(ask)
