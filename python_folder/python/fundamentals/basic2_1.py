# def big(a):
#     for x in range (0,len(a),1):
#         if a[x]>0:
#             a[x]="big"
#     return(a)
# print(big([2,4,-1,-5,5]))


# def positive(a):
#     sum=0
#     for x in range(len(a)):
#         if a[x]>0:
#             sum = sum +1
#      a[len(a)-1]=sum
#     return(a)
# print(positive([1,6,-4,-2,-7,-2]))





# def suum(a):
#     sum=0
#     for x in range(len(a)):
#         sum = sum + a[x]
#     return(sum)
# print(suum([1,2,3,4]))




# def avg(a):
#     average=0
#     for x in range(len(a)):
#         average=average+a[x]
#     average=average/len(a)
#     return(average)
# print(avg([1,2,3,4]))




# def length(a):
#     return(len(a))
# print(length([37,2,1,-9]))




# def minimunandmaximum(a):
#     if len(a) == 0:
#         return("false")
#     miin=a[0]
#     maax=a[0]
#     for x in range(len(a)):

#         if a[x]<miin:
#             miin = a[x]
#         if a[x]>maax:
#             maax = a[x]
        
#     return(miin,maax)
# print(minimunandmaximum([37,2,1,-9]))
# print(minimunandmaximum([]))



# def analysis(a):
    
#     miin=a[0]
#     maax=a[0]
#     avg=0
#     length=0
#     suum=0
#     for x in range(len(a)):
#         suum=suum+a[x]
#         if a[x]<miin:
#             miin = a[x]
#         if a[x]>maax:
#             maax = a[x]
#     avg=suum/len(a)
#     length=len(a)
        
#     return({'sumTotal':suum, 'Average': avg, 'minimum': miin, 'maximum': maax, 'length':length})
# print(analysis([37,2,1,-9]))





def reverse(a):
    for x in range(int(len(a)/2)):
        temp=a[x]
        a[x]=a[len(a)-1-x]
        a[len(a)-1-x]=temp
    return(a)
print(reverse([1,2,3,4,5,6]))



