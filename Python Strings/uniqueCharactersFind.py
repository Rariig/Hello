def merge_the_tools(string, k):
    substrings = [string[i:i+k] for i in range(0, len(string), k)]
    
    # Remove duplicate characters from each substring and print the result
    for substring in substrings:
        # Remove duplicates by converting to a set and back to a sorted string
        unique_chars = ''.join(sorted(set(substring), key=substring.index))
        print(unique_chars)