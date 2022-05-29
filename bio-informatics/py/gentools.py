#!/usr/bin/env python3
# to be used as a library


def get_longest_common_substrings_FASTA_dada(FASTA_MAP_1, FASTA_MAP_2):
    longest_common_substrings = {}
    s1 = FASTA_MAP_1["string"]
    s2 = FASTA_MAP_2["string"]
    longest_common_substrings["FASTA_MAP_1"] = FASTA_MAP_1
    longest_common_substrings["FASTA_MAP_2"] = FASTA_MAP_1
    matrix = []
    substrings = {}
    for s1i in range(len(s1)):
        row = []
        for s2i in range(len(s2)):
            if s1[s1i] == s2[s2i]:
                cnt = 1
                for i in range(1, s1i + 1, 1):
                    if s1[s1i - i] != s2[s2i - i]:
                        break
                    cnt += 1
                row.append(cnt)
                if cnt != 1:
                    if cnt not in substrings:
                        substrings[cnt] = []
                    substring = ""
                    for j in range(cnt):
                        substring = s1[(s1i - j)] + substring
                    substring = s1[(s1i - cnt + 1) : s1i + 1]
                    substrings[cnt].append([s1i, s2i, substring])
            else:
                row.append(0)
        matrix.append(row)
    longest_common_substrings["substrings"] = substrings
    longest_common_substrings["matrix"] = matrix

    ### print the dynamic programming matrices
    print("\n ", " ".join(list(s2)))
    for ei, ea in enumerate(matrix):
        print(s1[ei], " ".join([str(n) for n in ea]))

    return longest_common_substrings


def a_choose_b(a, b):
    # calculate binomial coefficients
    #  a! / (N!*(a-N)!)
    # https://en.wikipedia.org/wiki/Combination
    return factorial(a) / (factorial(b) * (factorial(a - b)))


def factorial(n):
    # factorial
    # 5! == 5*4*3*2*1
    # https://en.wikipedia.org/wiki/Factorial
    if n == 0:
        return 1  # breaks recursion
    else:
        return n * factorial(n - 1)


def get_overlap(a, b):
    # return 0 when pair lacks an overlap
    # return len_of_overlap when overlap exists
    overlap = 0
    ml = 0
    ml = len(a["string"])
    if len(b) < ml:
        ml = len(b["string"])
    for chi in range(ml - 1):
        a_ind = (chi + 1) * -1  # a [..<-]
        b_ind = chi + 1  # b [->..]
        # print(a,b)
        if (
            a["string"][a_ind:] == b["string"][:b_ind]
        ):  # compare substrings a[..<-]=?=b[->..]
            overlap = chi + 1
        else:
            break
    return overlap


def get_overlap_digraphs_from_FASTA(fasta_dada):
    overlap_digraphs = []
    for i, ea in enumerate(fasta_dada):
        for j, se in enumerate(fasta_dada):
            if i != j:
                overlap = get_overlap(ea, se)
                if overlap > 0:  # 0 means without overlap
                    overlap_digraphs.append([(ea, se), overlap])
    return overlap_digraphs


def fib(n, multiplier=1):
    if n < 0:
        # print("n must be greater than or equal to 0")
        return 0
    elif n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n - 1, multiplier) * multiplier + (
            fib(n - 2, multiplier) * multiplier
        )


def fibd(n, d, multiplier=1):
    # fib with death rate of 'd'
    if n < 0:
        return 0
    elif n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        _fibd = 0
        curr_fib = (
            fib(n - 1, multiplier) * multiplier + fib(n - 2, multiplier) * multiplier
        )
        deaths = 0
        if n % d == 0:
            cnt = d
        else:
            cnt = n % d
        # deaths calculated in sets of length d
        #     ind 0  1   2   3   4   5  6 ..
        #     fib 0  1   1   2   3   5  8   13 21 34 55 89
        #    fibd 0  1   1   2   2   3  4   10 13 18 42 76
        #    diff 0  0   0   0   1   2  4    3  8 16 13 13
        #
        # n=8 (duration in months)
        # d=3 (lifespan in months)
        #  (1+(int((n-1)/d)-1)*d)+i
        # ind               7  8
        # fib  1 1 2 3 5 8 13 21
        # ind  1 2 3 4 5 6     ^
        #            ^+^____  _|
        #                   |_|___
        #                     V  V
        #                    21 - (3+5) == 21-8 == 13
        #
        #
        # n=7 (duration in months)
        # d=3 (lifespan in months)
        #  (1+(int((n-1)/d)-1)*d)+i
        # ind                 7
        # fib  1 1 2 3 5 8   13
        # ind  1 2 3 4 5 6    ^
        #            ^_______ |
        #                   |_|___
        #                     V  V
        #                    13 - (3) == 13-3 == 10
        #
        # n=6 (duration in months)
        # d=3 (lifespan in months)
        #  (1+(int((n-1)/d)-1)*d)+i
        # ind        4  5  6
        # fib  1 1 2 3  5  8
        # ind  1 2 3       ^
        #      ^+^+^_   __|
        #            |_|___
        #              V   V
        #              8 - (1+1+2) == 8-4 == 4
        #
        # n=5 (duration in months)
        # d=3 (lifespan in months)
        #  (1+(int((n-1)/d)-1)*d)+i
        # ind        4  5  6
        # fib  1 1 2 3  5  8
        # ind  1 2 3    ^
        #      ^+^____ _|
        #            |_|___
        #              V   V
        #              5 - (1+1) == 5-2 == 3
        for i in range(cnt):
            nu_n = (1 + (int((n - 1) / d) - 1) * d) + i
            nu_deaths = fib(nu_n, multiplier)
            deaths += nu_deaths
        return curr_fib - deaths


def calc_gc_content(dada):
    for string in dada:
        gcnt = 0
        ccnt = 0
        for symbol in string["string"].upper():
            if symbol == "G":
                gcnt += 1
            if symbol == "C":
                ccnt += 1
        total = len(string["string"])
        string["GC"] = ((gcnt + ccnt) / total) * 100
    return dada


def output_highest_GC_content(dada):
    hi = [0, 0]
    for si, string in enumerate(dada):
        if string["GC"] > hi[1]:
            hi[0] = si
            hi[1] = string["GC"]
    print(dada[si]["label"])
    print(dada[si]["GC"])


#  Technically, proteins are assembled after translation of RNA, not DNA.
#   However, because RNA is transcribed from DNA by merely replacing thymine with uracil,
#       we can easily consolidate the two separate processes as one step
#       of coding DNA codons into amino acids.
# http://rosalind.info/glossary/dna-codon-table/
#
# Start Codon
#           The start codon is the RNA string AUG
#    which is transcribed from the DNA string ATG.
#  In the genetic code, the start codon corresponds to the amino acid methionine,
#   which triggers the beginning of translation of a molecule of mRNA into protein.

# http://rosalind.info/glossary/start-codon/


def get_codon_table_plaintext(_na):  # _na : STR : "rna"|"dna"
    if _na == "dna":
        codon_table_plaintext = """
TTT F      CTT L      ATT I      GTT V
TTC F      CTC L      ATC I      GTC V
TTA L      CTA L      ATA I      GTA V
TTG L      CTG L      ATG M      GTG V
TCT S      CCT P      ACT T      GCT A
TCC S      CCC P      ACC T      GCC A
TCA S      CCA P      ACA T      GCA A
TCG S      CCG P      ACG T      GCG A
TAT Y      CAT H      AAT N      GAT D
TAC Y      CAC H      AAC N      GAC D
TAA Stop   CAA Q      AAA K      GAA E
TAG Stop   CAG Q      AAG K      GAG E
TGT C      CGT R      AGT S      GGT G
TGC C      CGC R      AGC S      GGC G
TGA Stop   CGA R      AGA R      GGA G
TGG W      CGG R      AGG R      GGG G
ATG Start
"""
    else:  # "rna"
        codon_table_plaintext = """
UUU F      CUU L      AUU I      GUU V
UUC F      CUC L      AUC I      GUC V
UUA L      CUA L      AUA I      GUA V
UUG L      CUG L      AUG M      GUG V
UCU S      CCU P      ACU T      GCU A
UCC S      CCC P      ACC T      GCC A
UCA S      CCA P      ACA T      GCA A
UCG S      CCG P      ACG T      GCG A
UAU Y      CAU H      AAU N      GAU D
UAC Y      CAC H      AAC N      GAC D
UAA Stop   CAA Q      AAA K      GAA E
UAG Stop   CAG Q      AAG K      GAG E
UGU C      CGU R      AGU S      GGU G
UGC C      CGC R      AGC S      GGC G
UGA Stop   CGA R      AGA R      GGA G
UGG W      CGG R      AGG R      GGG G
AUG Start
"""
    return codon_table_plaintext


def get_map_codon_to_protein(_na):  # _na : STR : "rna"|"dna"
    codon_table_plaintext = get_codon_table_plaintext(_na)
    codons = {}
    for line in codon_table_plaintext.split("\n"):
        lst = line.split()
        for ei in range(0, len(lst), 2):
            codon = lst[ei]
            protein = lst[ei + 1]
            codons[
                codon
            ] = protein  # codon to protein  {..,"TGG":"W", "TAC":"Y", "TAA":"Stop",..}
    return codons


def get_map_protein_to_codon(_na):  # _na : STR : "rna"|"dna"
    codon_table_plaintext = get_codon_table_plaintext(_na)
    codons = {}
    for line in codon_table_plaintext.split("\n"):
        lst = line.split()
        for ei in range(0, len(lst), 2):
            codon = lst[ei]
            protein = lst[ei + 1]
            if protein not in codons:
                codons[protein] = []
            codons[protein].append(
                codon
            )  # protein to codon  {..,"W":["TGG"], "Y":["TAC",..], "Stop":["TAA",..],..}
    return codons

def get_protein_from_codon(codon):
    map_codon_to_protein=get_map_codon_to_protein("rna")
    return map_codon_to_protein[codon]

def get_dna_string_as_protein(dna_string):
    outs=""
    for i in range(0,len(dna_string)-1,3):
        codon=dna_string[i:i+3].replace("T","U")
        outs+=get_protein_from_codon(codon)
    outs=outs.replace("Start","M")
    outs=outs.replace("Stop","")
    return outs

def get_reverse_complement(ins):
    rev = list(ins)[:]  # make string into list
    rev.reverse()  # wonky python list reverse
    rev = "".join(rev)  # list back to string
    reverse_complement = ""
    for nucleobase in rev:  # ch in str
        # complements   A<>T
        if nucleobase.lower() == "a":
            reverse_complement += "T"
        elif nucleobase.lower() == "t":
            reverse_complement += "A"
        # complements   C<>G
        elif nucleobase.lower() == "c":
            reverse_complement += "G"
        elif nucleobase.lower() == "g":
            reverse_complement += "C"
    return reverse_complement


def collect_from_FASTA(plaintext):
    dada = []
    curr_string = {}
    for line in plaintext.split("\n"):
        line = line.strip()
        if line != "":
            if line[0] == ">":
                if curr_string != {}:
                    dada.append(curr_string)
                curr_string = {}
                curr_string["label"] = line.split(">")[1]
                curr_string["string"] = ""
            else:
                curr_string["string"] += line
    dada.append(curr_string)
    return dada


def calc_profile(dada):
    string_len = len(dada["strings"][0]["string"])
    dada["profile"] = {}
    dada["profile"]["A"] = [0] * string_len  # zeroes
    dada["profile"]["C"] = [0] * string_len  # zeroes
    dada["profile"]["G"] = [0] * string_len  # zeroes
    dada["profile"]["T"] = [0] * string_len  # zeroes
    for i in range(string_len):
        for ea in dada["strings"]:
            nucleobase = ea["string"][i]
            dada["profile"][nucleobase][i] += 1
    return dada


def calc_consensus(dada):
    dada["consensus"] = []
    string_len = len(dada["strings"][0]["string"])
    for i in range(string_len):
        nuc_max = ["", 0]
        for nucleotide in dada["profile"]:
            if dada["profile"][nucleotide][i] > nuc_max[1]:
                nuc_max = [nucleotide, dada["profile"][nucleotide][i]]
        dada["consensus"].append(nuc_max[0])
    return dada
