#!/usr/bin/env python3

"""
PROBLEM
Enumerating Gene Orders solved by 10705

Aug. 2, 2012, midnight by Rosalind Team

Topics: Combinatorics, Genome Rearrangements

    Rearrangements Power Large-Scale Genomic Changesclick to collapse
    Figure 1. Similar regions in mouse and human chromosomes. Image credit: U.S. Department of Energy Human Genome Program

    Point mutations can create changes in populations of organisms from the same species, but they lack the power to create and differentiate entire species. This more arduous work is left to larger mutations called genome rearrangements, which move around huge blocks of DNA. Rearrangements cause major genomic change, and most rearrangements are fatal or seriously damaging to the mutated cell and its descendants (many cancers derive from rearrangements). For this reason, rearrangements that come to influence the genome of an entire species are very rare.

    Because rearrangements that affect species evolution occur infrequently, two closely related species will have very similar genomes. Thus, to simplify comparison of two such genomes, researchers first identify similar intervals of DNA from the species, called synteny blocks; over time, rearrangements have created these synteny blocks and heaved them around across the two genomes (often separating blocks onto different chromosomes, see Figure 1.).

    A pair of synteny blocks from two different species are not strictly identical (they are separated by the action of point mutations or very small rearrangements), but for the sake of studying large-scale rearrangements, we consider them to be equivalent. As a result, we can label each synteny block with a positive integer; when comparing two species' genomes/chromosomes, we then only need to specify the order of its numbered synteny blocks.

Problem

A permutation of length n
is an ordering of the positive integers {1,2,…,n}. For example, π=(5,3,2,1,4) is a permutation of length 5

.

Given: A positive integer n≤7

.

Return: The total number of permutations of length n

, followed by a list of all such permutations (in any order).
Sample Dataset

3

Sample Output

6
1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1
"""

import sys
import math
import json
import gentools


def get_initial_elements(r):
    elements = []
    for i in range(r):
        elements.append([i + 1])
    return elements


def additional_dimension(n, elements):
    added = []
    for element in elements:
        for i in range(n):
            added.append(element + [i + 1])
    return added


def get_permutations(r):
    perms = get_initial_elements(r)
    for i in range(r - 1):
        perms = additional_dimension(r, perms)
    distinct_elements = []
    for ea in perms:
        if len(list(set(ea))) == r:
            distinct_elements.append(ea)
    return distinct_elements


def idiomatically(n):
    import itertools

    distinct_elements = []
    for perm in itertools.product([i + 1 for i in range(n)], repeat=n):
        if len(list(set(perm))) == n:
            distinct_elements.append(perm)
    return distinct_elements


def output(outs):
    print(len(outs))
    for out in outs:
        print(out)


def onit():
    ins = int(sys.argv[1])
    outs = 0
    print("\nInput:", ins)
    print("\n  Output:")
    # output(get_permutations(ins))
    output(idiomatically(ins))


onit()
# ./prob018_PERM_0.py 3       # INT: length of permutation,ie. 3 [1,2,3]
