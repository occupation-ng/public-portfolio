#!/usr/bin/env python3

"""
PROBLEM

Open Reading Frames solved by 6110

July 2, 2012, midnight by Rosalind Team

Topics: Combinatorics

    ←
    →

    Transcription May Begin Anywhereclick to collapse
    Figure 1. Schematic image of the particular ORF with start and stop codons shown.

    In “Transcribing DNA into RNA”, we discussed the transcription of DNA into RNA, and in “Translating RNA into Protein”, we examined the translation of RNA into a chain of amino acids for the construction of proteins. We can view these two processes as a single step in which we directly translate a DNA string into a protein string, thus calling for a DNA codon table.

    However, three immediate wrinkles of complexity arise when we try to pass directly from DNA to proteins. First, not all DNA will be transcribed into RNA: so-called junk DNA appears to have no practical purpose for cellular function. Second, we can begin translation at any position along a strand of RNA, meaning that any substring of a DNA string can serve as a template for translation, as long as it begins with a start codon, ends with a stop codon, and has no other stop codons in the middle. See Figure 1. As a result, the same RNA string can actually be translated in three different ways, depending on how we group triplets of symbols into codons. For example, ...AUGCUGAC... can be translated as ...AUGCUG..., ...UGCUGA..., and ...GCUGAC..., which will typically produce wildly different protein strings.

Problem

Either strand of a DNA double helix can serve as the coding strand for RNA transcription. Hence, a given DNA string implies six total reading frames, or ways in which the same region of DNA can be translated into amino acids: three reading frames result from reading the string itself, whereas three more result from reading its reverse complement.

An open reading frame (ORF) is one which starts from the start codon and ends by stop codon, without any other stop codons in between. Thus, a candidate protein string is derived by translating an open reading frame into amino acids until a stop codon is reached.

Given: A DNA string s

of length at most 1 kbp in FASTA format.

Return: Every distinct candidate protein string that can be translated from ORFs of s

. Strings can be returned in any order.
Sample Dataset

>Rosalind_99
AGCCATGTAGCTAACTCAGGTTACATGGGGATGACCCCGCGACTTGGATTAGAGTCTCTTTTGGAATAAGCCTGAATGATCCGAGTAGCATCTCAG

Sample Output

MLLGSFRLIPKETLIQVAGSSPCNLS
M
MGMTPRLGLESLLE
MTPRLGLESLLE
"""

"""
NOTES

# S: Start, s:Stop
#            1         2         3         4         5         6         7         8
#  0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567980123456"
s="AGCCATGTAGCTAACTCAGGTTACATGGGGATGACCCCGCGACTTGGATTAGAGTCTCTTTTGGAATAAGCCTGAATGATCCGAGTAGCATCTCAG"
#S     ATG                 ATG   ATG
#S     S0_                 S1_   S2_
#s        s0_                                                        s12
#s        TAG                                                        TAA
#r=reverse_complement(s)
#            1         2         3         4         5         6         7         8
#  0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567980123456"
r="CTGAGATGCTACTCGGATCATTCAGGCTTATTCCAAAAGAGACTCTAATCCAAGTCGCGGGGTCATCCCCATGTAACCTGAGTTAGCTACATGGCT
#S      ATG                                                              ATG
#S      S0_                                                              S1_
#s                                                                          s1_       s0_
#s                                                                          TTA       TTA

    pairs of Start and Stop codons across all(6) reference frames
        3 from the input string         # S0_,s0_:[4,7], S1_,s1_:[24,66], S2_,s2_:[30,66]
            sRF0 [[24, 66], [30, 66]]
            sRF1 [[4, 7]]
            sRF2 []
        3 from the reverse complement   # S0_,s0_:[5,83], S1_,s1_:[70,73]
            rRF0 []
            rRF1 [[70, 73]]
            rRF2 [[5, 83]]

"""


import sys
import math
import json
import gentools


# >>> a="01234567890"
# >>> for i in range(0,len(a),3):
# ...     if (i+2)<len(a):  # ignore incomplete triplets
# ...       a[i]+a[i+1]+a[i+2]
# ...
#     '012
#     '345'
#     '678'
# >>>
def get_all_protein_indices(
    s, _na, protein
):  # s: DNA|RNA string, _na: "rna"|"dna", protein: "Start"|"Stop"|"Y"|..
    all_of_protein = []
    codons = gentools.get_map_codon_to_protein(_na)
    for i in range(0, len(s), 3):
        if (i + 2) < len(s):
            possible_codon = s[i] + s[i + 1] + s[i + 2]
            if possible_codon in codons:
                if (
                    codons[possible_codon] == protein
                ):  # protein=="Start"|"Stop"|"Y"|"M"|..
                    all_of_protein.append(i)
    return all_of_protein


def get_open_reading_frame_pairs(s):
    starts = get_all_protein_indices(s, "dna", "Start")
    stops = get_all_protein_indices(s, "dna", "Stop")
    pairs = []
    for start in starts:
        for stop in stops:
            if stop > start + 2:  #
                pair = [start, stop]
                pairs.append(pair)
                break
    # print("\n    RF",s)
    # print("STARTS",starts)
    # print(" STOPS",stops)
    # print(" PAIRS",pairs)
    return pairs


def get_protein_string(s):
    s_cut = ""
    if len(s) % 3 != 0:
        cut = len(s) % 3
        s_cut = "-" + s[-cut:]  # "0123456"[-2:]=="56"
        s = s[:-cut]  # "0123456"[:-2]=="01234"
    protein_string = ""
    codons = gentools.get_map_codon_to_protein("dna")
    for i in range(0, len(s) - 2, 3):
        codon = s[i] + s[i + 1] + s[i + 2]
        protein = codons[codon]
        if protein == "Start":
            protein = "M"
        if protein == "Stop":
            protein = "?"
        protein_string += protein
    return protein_string + s_cut


def get_reading_frames(s):
    reading_frames = []
    for i in range(3):
        reading_frame = s[i:]
        pairs = get_open_reading_frame_pairs(reading_frame)
        pairs = [[p[0] + i, p[1] + i] for p in pairs]  # add the reading frame offset
        reading_frames.append(pairs)
    return reading_frames


def get_open_reading_frames(s):
    all_open_reading_frames = []
    reading_frames = get_reading_frames(s)
    for reading_frame in reading_frames:
        for pair in reading_frame:
            all_open_reading_frames.append(get_protein_string(s[pair[0] : pair[1]]))
    rcomp = gentools.get_reverse_complement(s)
    rcomp_reading_frames = get_reading_frames(rcomp)
    for reading_frame in rcomp_reading_frames:
        for pair in reading_frame:
            all_open_reading_frames.append(get_protein_string(rcomp[pair[0] : pair[1]]))
    # list(set(lst)): Every distinct candidate protein, DISTINCT, list(set([1,1,2,4,3]))==[1,2,4,3]
    return list(set(all_open_reading_frames))


def onit():
    sample_dataset = """>Rosalind_99
AGCCATGTAGCTAACTCAGGTTACATGGGGATGACCCCGCGACTTGGATTAGAGTCTCTTTTGGAATAAGCCTGAATGATCCGAGTAGCATCTCAG"""
    fasta_data = gentools.collect_from_FASTA(sample_dataset)
    all_fasta_reading_frames = []
    for fasta in fasta_data:
        # f_label=fasta["label"] # unused
        fstring = fasta["string"]
        open_reading_frames = get_open_reading_frames(fstring)
        all_fasta_reading_frames.append(open_reading_frames)
    print("\nInput:", sample_dataset)
    print("\n  Output:")
    for open_reading_frames in all_fasta_reading_frames:
        for ea in open_reading_frames:
            print(ea)


onit()
# ./prob017_ORF_0.py
