if __name__ == '__main__':
    N = int(input())
    mylist = []
    for _ in range(N):
        command = input().strip().split()  # Read the command and split it into parts
        if command[0] == "insert":
            mylist.insert(int(command[1]), int(command[2]))  # Insert at index [1], value [2]
        elif command[0] == "append":
            mylist.append(int(command[1]))  # Append value at the end
        elif command[0] == "sort":
            mylist.sort()  # Sort the list
        elif command[0] == "pop":
            mylist.pop()  # Remove the last item
        elif command[0] == "reverse":
            mylist.reverse()  # Reverse the list
        elif command[0] == "remove":
            mylist.remove(int(command[1]))  # Remove the first occurrence of the value
        elif command[0] == "print":
            print(mylist)  # Print the list