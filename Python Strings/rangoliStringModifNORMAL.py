def print_rangoli(size):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    lines = []

    # Build the top half of the rangoli (including the middle line)
    for i in range(size):
        # Create the left part of the pattern
        left_part = alphabet[size-1:size-i-1:-1]
        # Create the right part of the pattern
        right_part = alphabet[size-i-1:size]
        # Join left and right parts with '-'
        line = '-'.join(left_part + right_part)
        # Center the line and add to the lines list
        lines.append(line.center(4*size - 3, '-'))

    # Print the rangoli pattern: top half + bottom half (excluding middle line)
    print('\n'.join(lines + lines[-2::-1]))