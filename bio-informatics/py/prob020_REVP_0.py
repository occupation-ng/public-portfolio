#!/usr/bin/env python3

# https://rosalind.info/problems/revp/


def revc(s):
    _s = ""
    for ch in s:
        if ch == "A":
            _s += "T"
        if ch == "T":
            _s += "A"
        if ch == "G":
            _s += "C"
        if ch == "C":
            _s += "G"
    return _s


def onit():
    sample_dataset = """
    >Rosalind_24
    TCAATGCATGCGGGTCTATATGCAT
    """
    for line in sample_dataset.split("\n"):
        line = line.strip()
        if line != "" and line[0] != ">":
            ins = line
            # ins="TCAATGCATGCGGGTCTATATGCAT"
            rev = revc(ins)
            reverse_palindromes = []
            for start in range(len(ins)):
                for l in range(4, 13, 1):
                    sub = ins[start : start + l]
                    if len(sub) == l:
                        lrev = list(revc(sub))
                        lrev.reverse()
                        rev = "".join(lrev)
                        if sub == rev:
                            reverse_palindromes.append(
                                [str(start + 1), str(l)]
                            )  # +1 for 1-index

            print("Sample Dataset:")
            print(sample_dataset)
            print("Sample Output:")
            for ea in reverse_palindromes:
                print(" ".join(ea))


onit()
# ./prob020_REVP_0.py
