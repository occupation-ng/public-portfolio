#!/usr/bin/env python3

# http://rosalind.info/problems/long/

import gentools


def get_full_match(vec_super_string, vec_fasta_string, i):
    di = 0
    full_match = []
    while di < (len(vec_super_string) - i):
        eldi = vec_super_string[(i + di)]
        if di < len(vec_fasta_string):
            eldj = vec_fasta_string[di]
        else:
            eldj = None
        if eldi == eldj:
            full_match.append([i, di, eldi])
            di += 1
        else:
            di = len(vec_super_string)
    return full_match


def critical_match(vec_super_string, vec_fasta_string, all_full_matches):
    critical_matches = []
    for _match in all_full_matches:
        if (len(vec_fasta_string) == len(_match)) or (
            len(vec_super_string) == (1 + (_match[-1][0] + _match[-1][1]))
        ):
            critical_matches.append(_match)
    # sorted() => lohi
    if len(critical_matches) > 0:
        return sorted(
            filter(
                lambda _match: (
                    len(sorted(critical_matches, key=lambda l: (len(l), l))[-1])
                    == len(_match)
                ),
                critical_matches,
            ),
            key=lambda l: l[0][0],
        )[-1]
    else:
        return []


def get_critical_match(vec_super_string, vec_fasta_string):
    # Get the critical match from all matches between super-string and fasta-string
    #   vec-super-string : VEC[STR STR STR ..] : VEC of STR literal characters representing the current superstring
    #   vec-fasta-string : VEC[STR STR STR ..] : VEC of STR literal characters representing the current FASTA string
    #   RETURN : VEC[VEC[INT INT STR] ..] : VEC of VECs of INT, of i, INT of di, STR literal matched character at that position
    all_full_matches = []
    for i in range(len(vec_super_string)):  # walk the superstring
        if vec_super_string[i] == vec_fasta_string[0]:
            all_full_matches.append(
                get_full_match(vec_super_string, vec_fasta_string, i)
            )
    return critical_match(vec_super_string, vec_fasta_string, all_full_matches)


def search_super_string(vec_super_string, other_fasta_maps):
    # Search super-string for matching vecuence with fasta-map string
    # If a match is found, modify super-string and remove other string from other-fasta-maps list
    # If unable to find a match return super-string unchanged and move (first other-fasta-maps) to last position of other-fasta-maps to be searched again   after the others
    #   vec-super-string : VEC[STR STR STR ..] : VEC of STR literal characters representing the current superstring
    #   other-fasta-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs representing FASTA format maps {:label STR :string STR}
    #   RETURN : VEC[VEC[STR STR ..] VEC[MAP{} ..]] : VEC of VECs, first VEC of STR literal characters represents the superstring, second VEC of MAPs       represents any remainding unmatchable strings
    vec_fasta_string = other_fasta_maps[0]["string"]
    full_match = get_critical_match(vec_super_string, vec_fasta_string)
    if 0 < len(
        full_match
    ):  # drop match, else move map to last position of other-maps list to be tried again after checking the others
        nu_vec_super_string = vec_super_string
        nu_other_fasta_maps = other_fasta_maps[1:]
        for nucleobase in vec_fasta_string[len(full_match) :]:
            nu_vec_super_string.append(nucleobase)
        return [nu_vec_super_string, nu_other_fasta_maps]
    else:
        nu_other_fasta_maps = other_fasta_maps[1:] + [
            other_fasta_maps[0]
        ]  # move first to back
        return [vec_super_string, other_fasta_maps]


def proc_fasta_maps(fasta_maps):
    # "Process the fasta-maps into a single super-string, and any remaining unmatchable strings
    #  fasta-maps : VEC[MAP{} MAP{} ..] : VEC of MAPs representing FASTA format maps {:label STR :string STR}
    #  RETURN : VEC[VEC[STR STR ..] VEC[MAP{} ..]] : VEC of VECs, first VEC of STR literal characters represents the superstring, second VEC of MAPs       represents any remainding unmatchable strings
    vec_super_string = list(
        fasta_maps[0]["string"]
    )  # list("hazzah")=>["h","a","z","z","a","h"]
    other_fasta_maps = fasta_maps[
        1:
    ]  # drop first map, being used as the super_string_seed
    tries = 0  # INF loop safeguard, allows a break if some listed string lacks a match, (* 2 (count )) provides for additional shuffling, higher int more shuffling
    while len(other_fasta_maps) > 0 and tries < (2 * len(fasta_maps)):
        loop_search_super_string = search_super_string(
            vec_super_string, other_fasta_maps
        )
        vec_super_string = loop_search_super_string[0]  # overwrite
        other_fasta_maps = loop_search_super_string[1]  # overwrite
        tries += 1
    if tries >= (2 * len(fasta_maps)):
        print(
            "\nTRIES EXIT,", tries, "tries, unmatched strings", str(other_fasta_maps)
        )  # notify loop was broken while unable to match some strings
    return [vec_super_string, other_fasta_maps]


def output(sample_output):
    print("Sample Output:")
    print(sample_output)
    if sample_output[1] != []:
        print("unmatched strings:", sample_output[1])
    print("".join(sample_output[0]))
    print("ATTAGACCTGCCGGAATAC  : Rosalind's Example Output")


def onit():
    sample_dataset = """
>Rosalind_56
ATTAGACCTG
>Rosalind_57
CCTGCCGGAA
>Rosalind_58
AGACCTGCCG
>Rosalind_59
GCCGGAATAC
"""
    fasta_maps = gentools.collect_from_FASTA(sample_dataset)
    sample_output = proc_fasta_maps(fasta_maps)
    output(sample_output)


onit()
# ./prob024_LONG_0.py  # testing: prob024_LONG_0_test.py
