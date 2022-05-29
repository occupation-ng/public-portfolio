#!/usr/bin/env python3

"""
Given: A collection of at most 5 pairs of permutations, all of which have length 10.

Return: The reversal distance between each permutation pair.
Sample Dataset

1 2 3 4 5 6 7 8 9 10
3 1 5 2 7 4 9 6 10 8

3 10 8 2 5 4 7 1 6 9
5 2 3 1 7 4 10 8 6 9

8 6 7 9 4 1 3 10 2 5
8 2 7 6 9 1 5 3 10 4

3 9 10 4 1 8 6 7 5 2
2 9 8 5 1 7 3 4 6 10

1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10

Sample Output

9 4 5 7 0
"""

"""
NOTES

it appears to be an unsigned question
but in fact it is a signed question

[  1  2    5  4   3   6  7    9 10    8]

[ (1  2) -(5  4   3) (6  7) -(9 10) -(8)]  # last 8 neg?
[   1         -2        3      -5    -4 ]
"""


def get_identity(nvec):
    identity = []
    for i in range(len(nvec)):
        identity.append(i + 1)  # identity is 1-index
    return identity


def get_identity_map(vec):
    identity_map = {}
    for ei, ea in enumerate(vec):
        identity_map[ea] = ei + 1  # identity is 1-indexed index
    return identity_map


def map_to_identity(identity_map, vec):
    normalized_permutation = []
    for ea in vec:
        normalized_permutation.append(identity_map[ea])
    return normalized_permutation


def normalise_to_identity(to_match, to_revrs):
    identity_map = get_identity_map(to_match)
    normalised_permutation = map_to_identity(identity_map, to_revrs)
    return normalised_permutation


def map_from_identity(identity_map, vec):
    from_identity = []
    for el in vec:
        for k in identity_map:
            if identity_map[k] == el:
                from_identity.append(k)
    return from_identity


def get_pairs(sample_dataset):
    lines = sample_dataset.split("\n")
    pairs = []
    pair = []
    for li, line in enumerate(lines):
        line = line.strip()
        if line == "":
            if pair != []:
                pairs.append(pair)
            pair = []
        else:
            pair.append(line)
    return pairs


def reversal(i, j, nvec):
    bef = nvec[:i]
    rev = nvec[i:j]
    rev.reverse()  # can also reverse using [][::-1] : a=[1,2,3,4]  a[::-1]==[4,3,2,1]
    aft = nvec[j:]
    return bef + rev + aft


def critical_segments_from_breakpoints(breakpoints):
    # constructing segments from breakpoints ensures you avoid cutting an existing sequence
    # we can ignore pairs of breakpoints:
    #   that are the same number
    #       a==b, b-a==0 !>1
    #       why? n=[1,2,3,4] reversal(2,2,n)== n[:i]+rev(n[i:j])+n[:j]==[1,2]+rev([])+[3,4]==[1,2]+[]+[3,4]==[1,2,3,4] unchanged
    #   within a distance of 1
    #             b-a==1 !>1
    #       why? n=[1,2,3,4] reversal(2,3,n)==n[:i]+rev(n[i:j])+n[:j]==[1,2]+rev([3])+[4] ==[1,2]+[3]+[4] ==[1,2,3,4] unchanged
    #   where a is greater than b
    #        a>b, b-a<0  !>1
    #       why? n=[1,2,3,4] reversal(3,1,n)==n[:i]+rev(n[i:j])+n[:j]==[1,2,3]+rev([])+[2,3,4] ==[1,2,3,2,3,4] len()>len(n)
    possible_segments = []
    for a in breakpoints:
        for b in breakpoints:
            if (
                b - a > 1
            ):  # b-a>1: ensures b is larger than a, and that b and a are at least 2 apart
                possible_segments.append([a, b])
    return possible_segments


def get_breakpoints(nvec):  # normalised vector
    breakpoints = []
    adjacents = []
    nvec = [0] + nvec + [len(nvec) + 1]  # 1 2 3 4 => 0 1 2 3 4 5
    for i, ea in enumerate(nvec):
        if i < len(nvec) - 1:
            if abs(nvec[i] - nvec[i + 1]) == 1:  # adjacency
                adjacents.append(i)
            else:
                breakpoints.append(i)
    return breakpoints


def proc_critical_segment(i, j, nvec, min_breakpoints, new_branch):
    perm_nvec = reversal(i, j, nvec)
    perm_breakpoints = get_breakpoints(perm_nvec)
    if len(perm_breakpoints) == 0:
        min_breakpoints = 0  # updated
        new_branch = new_branch  # unchanged
    elif len(perm_breakpoints) < min_breakpoints:
        min_breakpoints = len(perm_breakpoints)  # updated
        new_branch = [perm_nvec]  # updated
    elif len(perm_breakpoints) == min_breakpoints:
        min_breakpoints = min_breakpoints  # unchanged
        new_branch.append(perm_nvec)  # updated
    else:
        min_breakpoints = min_breakpoints  # unchanged
        new_branch = new_branch  # unchanged
    return [min_breakpoints, new_branch]


def proc_criticals(nvec, new_branch, min_breakpoints):
    breakpoints = get_breakpoints(nvec)
    for i, j in critical_segments_from_breakpoints(breakpoints):
        pc = proc_critical_segment(i, j, nvec, min_breakpoints, new_branch)
        min_breakpoints = pc[0]
        if min_breakpoints == 0:
            break
        new_branch = pc[1]
    return [min_breakpoints, new_branch]


def proc_branch(branch, min_breakpoints):
    new_branch = []
    for bi, nvec in enumerate(branch):
        chks = proc_criticals(nvec, new_branch, min_breakpoints)
        min_breakpoints = chks[0]  # update min_breakpints
        new_branch = chks[1]  # update new branch
        if min_breakpoints == 0:
            break
    return [min_breakpoints, new_branch]


def critical_segment_search(nvec):
    min_breakpoints = len(
        get_breakpoints(nvec)
    )  # first perm always has most breakpoints
    previous_min = min_breakpoints
    reversal_distance = 0  # ignore initial nvec for reversal distance
    found = False
    branch = [nvec]
    while min_breakpoints != 0:  # while nvec!=identity
        min_breakpoints = min_breakpoints
        pb = proc_branch(branch, min_breakpoints)
        min_breakpoints = pb[0]
        new_branch = pb[1]
        branch = new_branch
        if previous_min > min_breakpoints:
            previous_min = min_breakpoints
            reversal_distance += 1
    return reversal_distance


def get_reversal_distance(nvec):
    return critical_segment_search(nvec)


def onit():
    sample_dataset = """
1 2 3 4 5 6 7 8 9 10
3 1 5 2 7 4 9 6 10 8

3 10 8 2 5 4 7 1 6 9
5 2 3 1 7 4 10 8 6 9

8 6 7 9 4 1 3 10 2 5
8 2 7 6 9 1 5 3 10 4

3 9 10 4 1 8 6 7 5 2
2 9 8 5 1 7 3 4 6 10

1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9 10
"""
    pairs = get_pairs(sample_dataset)
    intervals = []
    all_distances = []
    for pair in pairs:
        pair_intervals = []
        to_match = pair[0].split()
        to_revrs = pair[1].split()

        normalised_permutation = normalise_to_identity(to_match, to_revrs)
        im = get_identity_map(to_match)
        chk = map_from_identity(im, normalised_permutation)
        a_reversal_distance = get_reversal_distance(normalised_permutation)

        normalised_permutation = normalise_to_identity(to_revrs, to_match)
        im = get_identity_map(to_match)
        chk = map_from_identity(im, normalised_permutation)
        b_reversal_distance = get_reversal_distance(normalised_permutation)

        if a_reversal_distance <= b_reversal_distance:
            all_distances.append(a_reversal_distance)
        else:
            all_distances.append(b_reversal_distance)

    ins = sample_dataset
    outs = all_distances
    print("\nInput:", ins)
    print("\n  Output:\n\t ", " ".join([str(ea) for ea in outs]))


onit()
# ./prob041_REAR_0.py
