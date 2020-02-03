# alist=[]
# def countdown(i):
#     for i in range ( i,0 , -1):
#         alist.append(i)
#     return alist

# print(countdown(5))



# def printandreturn(a,b):
#     print(a)
#     return(b)

# print(printandreturn(2,5))



# blist=[1,2,3,4,5]
# firstplus=0
# def firstpluslength():
#     firstplus = blist[0]+len(blist)
#     return(firstplus)
# print(firstpluslength())



# I do not know how to get length from array function?

# def newarr(a):
#     newlist=[]
#     sumofarr=0
#     for x in range (0,len(a),1):
#         if a[x]>a[1]:
#             newlist.append(a[x])
#             sumofarr = sumofarr +1
        
#         if len(a)<3:
#             return("False")
#     print(sumofarr)
#     return(newlist)
# print(newarr([5,2,3,4,6,1]))
# print(newarr([2,3]))



#How to multiply array.append?



def value(a,b):
    array=[]
    for x in range(0,a,1):
        array.append(b)
    return(array)
print(value(4,7))
print(value(6,2))
