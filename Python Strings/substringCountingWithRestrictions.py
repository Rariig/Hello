def minion_game(string):
    vowels = set('AEIOU')
    consonant_count = 0
    vowel_count = 0

    length = len(string)

     # Iterate over all possible starting points
    for start in range(length):
        # Determine if the start character is a vowel or consonant
        if string[start] in vowels:
            # Increment vowel count for every substring starting at this point
            vowel_count += length - start
        else:
            # Increment consonant count for every substring starting at this point
            consonant_count += length - start
    if consonant_count > vowel_count:
        print(f"Stuart {consonant_count}")
    elif consonant_count < vowel_count:
        print(f"Kevin {vowel_count}")
    else:
        print("Draw")
    return consonant_count, vowel_count