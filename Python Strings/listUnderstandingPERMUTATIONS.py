from itertools import product

if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

    permutations = product(range(x+1), range(y+1), range(z+1)) #take into account upper range
    result = [list(perm) for perm in permutations if sum(perm) != n] #tuple to list conversion
   
    print(result)