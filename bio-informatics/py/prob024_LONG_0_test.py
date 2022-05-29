#!/usr/bin/env python3

import prob024_LONG_0
import unittest


class Test_prob024_get_full_match(unittest.TestCase):
    def test_index_1(self):
        function_output = prob024_LONG_0.get_full_match(
            ["A", "C", "T", "A", "G", "A", "C", "C", "T", "G"],
            ["C", "C", "T", "G", "C", "C", "G", "G", "A", "A"],
            1,
        )
        self.assertEqual(function_output, [[1, 0, "C"]])

    def test_index_3(self):
        function_output = prob024_LONG_0.get_full_match(
            [
                "A",
                "T",
                "T",
                "A",
                "G",
                "A",
                "C",
                "C",
                "T",
                "G",
                "C",
                "C",
                "G",
                "G",
                "A",
                "A",
            ],
            ["A", "G", "A", "C", "C", "T", "G", "C", "C", "G"],
            3,
        )
        self.assertEqual(
            function_output,
            [
                [3, 0, "A"],
                [3, 1, "G"],
                [3, 2, "A"],
                [3, 3, "C"],
                [3, 4, "C"],
                [3, 5, "T"],
                [3, 6, "G"],
                [3, 7, "C"],
                [3, 8, "C"],
                [3, 9, "G"],
            ],
        )

    def test_index_for_empty(self):
        function_output = prob024_LONG_0.get_full_match(
            ["A", "T", "T", "A", "G", "A", "C", "C", "T", "G"],
            ["C", "C", "T", "G", "C", "C", "G", "G", "A", "A"],
            3,
        )
        self.assertEqual(function_output, [])


class Test_prob024_critical_match(unittest.TestCase):
    def test_unittest_0(self):
        function_output = prob024_LONG_0.critical_match(
            ["A", "T", "T", "A", "G", "A", "C", "C", "T", "G"],
            ["C", "C", "T", "G", "C", "C", "G", "G", "A", "A"],
            [[[6, 0, "C"], [6, 1, "C"], [6, 2, "T"], [6, 3, "G"]], [[7, 0, "C"]]],
        )
        self.assertEqual(
            function_output, [[6, 0, "C"], [6, 1, "C"], [6, 2, "T"], [6, 3, "G"]]
        )

    def test_unittest_1(self):
        function_output = prob024_LONG_0.critical_match(
            [
                "A",
                "T",
                "T",
                "A",
                "G",
                "A",
                "C",
                "C",
                "T",
                "G",
                "C",
                "C",
                "G",
                "G",
                "A",
                "A",
            ],
            ["G", "C", "C", "G", "G", "A", "A", "T", "A", "C"],
            [
                [[4, 0, "G"]],
                [
                    [9, 0, "G"],
                    [9, 1, "C"],
                    [9, 2, "C"],
                    [9, 3, "G"],
                    [9, 4, "G"],
                    [9, 5, "A"],
                    [9, 6, "A"],
                ],
                [[12, 0, "G"]],
                [[13, 0, "G"]],
            ],
        )
        self.assertEqual(
            function_output,
            [
                [9, 0, "G"],
                [9, 1, "C"],
                [9, 2, "C"],
                [9, 3, "G"],
                [9, 4, "G"],
                [9, 5, "A"],
                [9, 6, "A"],
            ],
        )

    def test_unittest_2_encased_example(self):
        function_output = prob024_LONG_0.critical_match(
            [
                "A",
                "T",
                "T",
                "A",
                "G",
                "A",
                "C",
                "C",
                "T",
                "G",
                "C",
                "C",
                "G",
                "G",
                "A",
                "A",
            ],
            ["A", "G", "A", "C", "C", "T", "G", "C", "C", "G"],
            [
                [
                    [3, 0, "A"],
                    [3, 1, "G"],
                    [3, 2, "A"],
                    [3, 3, "C"],
                    [3, 4, "C"],
                    [3, 5, "T"],
                    [3, 6, "G"],
                    [3, 7, "C"],
                    [3, 8, "C"],
                    [3, 9, "G"],
                ],
                [[5, 0, "A"]],
                [[14, 0, "A"]],
                [[15, 0, "A"]],
            ],
        )
        self.assertEqual(
            function_output,
            [
                [3, 0, "A"],
                [3, 1, "G"],
                [3, 2, "A"],
                [3, 3, "C"],
                [3, 4, "C"],
                [3, 5, "T"],
                [3, 6, "G"],
                [3, 7, "C"],
                [3, 8, "C"],
                [3, 9, "G"],
            ],
        )


class Test_get_critical_match(unittest.TestCase):
    def test_unittest_0(self):
        vec_super_string = ["A", "T", "T", "A", "G", "A", "C", "C", "T", "G"]
        vec_fasta_string = ["C", "C", "T", "G", "C", "C", "G", "G", "A", "A"]
        expected_output = [[6, 0, "C"], [6, 1, "C"], [6, 2, "T"], [6, 3, "G"]]
        function_output = prob024_LONG_0.get_critical_match(
            vec_super_string, vec_fasta_string
        )
        self.assertEqual(function_output, expected_output)

    def test_unittest_1(self):
        vec_super_string = [
            "A",
            "T",
            "T",
            "A",
            "G",
            "A",
            "C",
            "C",
            "T",
            "G",
            "C",
            "C",
            "G",
            "G",
            "A",
            "A",
        ]
        vec_fasta_string = ["G", "C", "C", "G", "G", "A", "A", "T", "A", "C"]
        expected_output = [
            [9, 0, "G"],
            [9, 1, "C"],
            [9, 2, "C"],
            [9, 3, "G"],
            [9, 4, "G"],
            [9, 5, "A"],
            [9, 6, "A"],
        ]
        function_output = prob024_LONG_0.get_critical_match(
            vec_super_string, vec_fasta_string
        )
        self.assertEqual(function_output, expected_output)


class Test_search_super_string(unittest.TestCase):
    def test_unittest_0(self):
        vec_super_string = ["A", "T", "T", "A", "G", "A", "C", "C", "T", "G"]
        other_fasta_maps = [
            {"label": "Rosalind_57", "string": "CCTGCCGGAA"},
            {"label": "Rosalind_58", "string": "AGACCTGCCG"},
            {"label": "Rosalind_59", "string": "GCCGGAATAC"},
        ]
        expected_output = [
            [
                "A",
                "T",
                "T",
                "A",
                "G",
                "A",
                "C",
                "C",
                "T",
                "G",
                "C",
                "C",
                "G",
                "G",
                "A",
                "A",
            ],
            [
                {"label": "Rosalind_58", "string": "AGACCTGCCG"},
                {"label": "Rosalind_59", "string": "GCCGGAATAC"},
            ],
        ]
        function_output = prob024_LONG_0.search_super_string(
            vec_super_string, other_fasta_maps
        )
        self.assertEqual(function_output, expected_output)

    def test_unittest_1(self):
        vec_super_string = [
            "A",
            "T",
            "T",
            "A",
            "G",
            "A",
            "C",
            "C",
            "T",
            "G",
            "C",
            "C",
            "G",
            "G",
            "A",
            "A",
        ]
        other_fasta_maps = [
            {"label": "Rosalind_58", "string": "AGACCTGCCG"},
            {"label": "Rosalind_59", "string": "GCCGGAATAC"},
        ]
        expected_output = [
            [
                "A",
                "T",
                "T",
                "A",
                "G",
                "A",
                "C",
                "C",
                "T",
                "G",
                "C",
                "C",
                "G",
                "G",
                "A",
                "A",
            ],
            [{"label": "Rosalind_59", "string": "GCCGGAATAC"}],
        ]
        function_output = prob024_LONG_0.search_super_string(
            vec_super_string, other_fasta_maps
        )
        self.assertEqual(function_output, expected_output)


class Test_proc_fasta_maps(unittest.TestCase):
    def test_unittest_0(self):
        fasta_maps = [
            {"label": "Rosalind_56", "string": "ATTAGACCTG"},
            {"label": "Rosalind_57", "string": "CCTGCCGGAA"},
            {"label": "Rosalind_58", "string": "AGACCTGCCG"},
            {"label": "Rosalind_59", "string": "GCCGGAATAC"},
        ]
        expected_output = [
            [
                "A",
                "T",
                "T",
                "A",
                "G",
                "A",
                "C",
                "C",
                "T",
                "G",
                "C",
                "C",
                "G",
                "G",
                "A",
                "A",
                "T",
                "A",
                "C",
            ],
            [],
        ]
        function_output = prob024_LONG_0.proc_fasta_maps(fasta_maps)
        self.assertEqual(function_output, expected_output)

    def test_unittest_1(self):
        fasta_maps = [
            {"label": "Rosalind_56", "string": "ATTAGACCTG"},
            {"label": "Rosalind_57", "string": "CCTGCCGGAA"},
            {"label": "Rosalind_58", "string": "AGACCTGCCG"},
            {"label": "Rosalind_59", "string": "GCCGGAATAC"},
            {"label": "Test Unmatchable String", "string": "XYX"},
        ]
        expected_output = [
            [
                "A",
                "T",
                "T",
                "A",
                "G",
                "A",
                "C",
                "C",
                "T",
                "G",
                "C",
                "C",
                "G",
                "G",
                "A",
                "A",
                "T",
                "A",
                "C",
            ],
            [{"label": "Test Unmatchable String", "string": "XYX"}],
        ]
        function_output = prob024_LONG_0.proc_fasta_maps(fasta_maps)
        self.assertEqual(function_output, expected_output)


# class Test_(unittest.TestCase):
#    def test_(self):
#        fn_arg=
#        expected_output=
#        function_output=prob024_LONG_0.
#        self.assertEqual(function_output,expected_output)


if __name__ == "__main__":
    unittest.main()
