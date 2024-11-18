if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    if name == query_name:
        finalScore =0
        for score in scores:
            finalScore += score
        percentage = f"{finalScore / 3:.2f}"
        print(percentage)