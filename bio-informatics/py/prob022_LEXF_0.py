#!/usr/bin/env python3

import itertools


def onit():
    sample_dataset = """
A C G T
2
    """
    lines = sample_dataset.split("\n")
    for li, line in enumerate(lines):
        line = line.strip()
        if line != "":
            try:
                l = int(line)
                prod_set = (
                    lines[li - 1].strip().split()
                )  # get previous line for set of symbols in the product
                """
                lines=="
                A C G T
                2"
                when
                    line=="2"
                    l=2
                    prod_set=["A","C","G","T"]
                """
                print("Sample Dataset:")
                print(sample_dataset)
                print("Sample Output::")
                prod = itertools.product(prod_set, repeat=l)
                for ea in prod:
                    print("".join(ea))
            except:
                pass


onit()
# ./prob022_LEXF_0.py
