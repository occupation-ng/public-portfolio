#!/usr/bin/env python3

#https://rosalind.info/problems/splc/

"""
 (Note: Only one solution will exist for the dataset provided.)
Sample Dataset

>Rosalind_10
ATGGTCTACATAGCTGACAAACAGCACGTAGCAATCGGTCGAATCTCGAGAGGCATATGGTCACATGATCGGTCGAGCGTGTTTCAAAGTTTGCGCCTAG
>Rosalind_12
ATCGGTCGAA
>Rosalind_15
ATCGGTCGAGCGTGT

Sample Output

MVYIADKQHVASREAYGHMFKVCA
"""

import gentools


def onit():
    sample_dataset="""
>Rosalind_10
ATGGTCTACATAGCTGACAAACAGCACGTAGCAATCGGTCGAATCTCGAGAGGCATATGGTCACATGATCGGTCGAGCGTGTTTCAAAGTTTGCGCCTAG
>Rosalind_12
ATCGGTCGAA
>Rosalind_15
ATCGGTCGAGCGTGT
"""
    rosalind_sample_output="MVYIADKQHVASREAYGHMFKVCA"
    fasta_maps=gentools.collect_from_FASTA(sample_dataset)
    dna_string=fasta_maps[0]["string"]
    introns_maps=fasta_maps[1:]
    for intron_map in introns_maps:
        dna_string=dna_string.replace(intron_map["string"],"")
    protein_string=gentools.get_dna_string_as_protein(dna_string)
    print("Sample Dataset:")
    print(sample_dataset)
    print("Output:")
    print(protein_string)
    print("\nRosalind Sample Output:")
    print(rosalind_sample_output)
onit()
#./prob021_SPLC_0.py
