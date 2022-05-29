#!/usr/bin/env python3

# http://rosalind.info/problems/lgis/

"""
Given: A positive integer n≤10000 followed by a permutation π of length n
Return: A longest increasing subsequence of π, followed by a longest decreasing subsequence of π.
Sample Input:
5 1 4 2 3
Sample Output:
1 2 3
5 4 2
"""

"""
algo
    for each number in the sequence
    store both a copy of original every state
        and a copy of original every state appended with current number
        and a new list of only the new number

    inp=[5,1,4,2,3]
    # 5
    every=[[5]]
    # 1
    every=[[5],[5,1],[1]]
    # 4
    every [[5],[5,1],[1],[5,4],[5,1,4],[1,4],[4]]
    ...

    once complete, pass through every
        check for ascending and descending
    sort the asc and dsc lists
        grab last element from each for output
"""


def onit():
    n = 5
    s = "5 1 4 2 3"
    _s = s.split()

    every = []
    asc = []
    dsc = []

    for ch in _s:
        ch = int(ch)
        nu_every = []
        for each in every:
            # og_each
            nu_every.append(each[:])
            # nu_each
            each.append(ch)
            nu_every.append(each[:])
        nu_every.append([ch])
        every = nu_every[:]

    # for each in every:
    #    print(each)

    for each in every:
        q_asc = False  # are values ascending?
        q_dsc = False  # are values descending?
        pre_asc = (
            -10000000000000
        )  # ASSUME, arbitrarily small first value to check subsequent as ascending
        pre_dsc = 100000000000000  # ASSUME, arbitrarily large first value to check subsequent as descending
        for ei, el in enumerate(each):
            # ascending values
            if el > pre_asc:  # el==4 , pre_asc==1,  4>1==True
                pre_asc = el
                q_asc = True
            else:
                q_asc = False
            # descending values
            if el < pre_dsc:  # el==1 , pre_dsc==5,  1<5==True
                pre_dsc = el
                q_dsc = True
            else:
                q_dsc = False
        if q_dsc:
            dsc.append(each)
        if q_asc:
            asc.append(each)

    # print("asc:")
    # for each in sorted(asc,key=len):
    #    print(each)

    # print("dsc:")
    # for each in sorted(dsc,key=len):
    #    print(each)

    print("\nSample Input:", " ".join(_s))
    print("Sample Output:")
    # sorted(_,key=len): sort by sublist length, ie [[3,1,2],[1],[1,2]]=>[[1],[1,2],[3,1,2]]
    print(
        "\t", " ".join([str(n) for n in sorted(asc, key=len)[-1]])
    )  # _[-1] : last always an example of longest
    print(
        "\t", " ".join([str(n) for n in sorted(dsc, key=len)[-1]])
    )  # _[-1] : last always an example of longest


onit()
# ./prob023_LGIS_0.py
