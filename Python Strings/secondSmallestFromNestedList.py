if __name__ == '__main__':
    smallestnumber = float('inf')
    secondsmallest = float('inf')
    my_list = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        my_list.append([name, score])
        if score < smallestnumber:
            secondsmallest = smallestnumber
            smallestnumber = score
        elif score < secondsmallest and score > smallestnumber:
            secondsmallest = score
    sorted_list = sorted(my_list, key=lambda x: x[0])     
    for value in sorted_list:
        if value[1]==secondsmallest:
            print(value[0])