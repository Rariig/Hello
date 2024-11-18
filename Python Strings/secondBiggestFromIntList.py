if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    biggestnumber = -100
    secondbiggest = -100
    for variable in arr:
        if variable > secondbiggest and variable != biggestnumber:
            secondbiggest = variable
            if secondbiggest > biggestnumber:
                var = biggestnumber
                biggestnumber = secondbiggest
                secondbiggest = var
    print (secondbiggest)