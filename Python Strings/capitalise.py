def solve(s):
    parts = s.split(' ')
    capitalized_parts = [part.capitalize() for part in parts]
    return ' '.join(capitalized_parts)
