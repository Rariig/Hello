if __name__ == '__main__':
    s = input()
    alnum = False
    alpha = False
    digit =False
    lower= False
    upper= False
    for i in range(len(s)):
        if s[i].isalnum():
            alnum = True
        if s[i].isalpha():
            alpha = True
        if s[i].isdigit():
            digit = True
        if s[i].islower():
            lower = True
        if s[i].isupper():
            upper = True
        else:
            pass         
    print(f"{alnum}\n{alpha}\n{digit}\n{lower}\n{upper}")