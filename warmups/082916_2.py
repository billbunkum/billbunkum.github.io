def stringy(size):
    count = size
    measure = 0
    stringL = ["1"]
    while count > 1:
        if measure % 2 == 0:
            stringL.append("0")
        else:
            stringL.append("1")
        count -= 1
        measure += 1
    string = "".join(stringL)
    return string