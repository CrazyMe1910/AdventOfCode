console.log("Day 05");

const day05Arr = `510,771 -> 510,322
753,99 -> 753,280
160,330 -> 33,330
700,793 -> 700,892
327,168 -> 327,690
264,203 -> 264,839
135,134 -> 314,134
209,759 -> 41,759
474,514 -> 491,531
977,988 -> 42,53
924,245 -> 278,891
466,952 -> 466,135
381,560 -> 822,119
339,828 -> 339,730
114,775 -> 114,508
472,44 -> 472,32
815,512 -> 188,512
516,579 -> 987,108
219,386 -> 219,838
456,592 -> 456,496
778,300 -> 355,300
277,27 -> 69,27
889,217 -> 307,799
470,471 -> 249,471
655,867 -> 20,232
845,623 -> 675,623
278,281 -> 278,47
121,396 -> 541,816
61,965 -> 978,48
32,689 -> 115,689
654,162 -> 654,947
355,244 -> 355,796
272,805 -> 705,372
377,589 -> 500,589
505,625 -> 163,625
845,851 -> 63,69
411,734 -> 411,942
545,143 -> 126,562
265,799 -> 734,330
750,618 -> 750,559
987,25 -> 628,25
73,931 -> 906,98
652,433 -> 652,954
612,747 -> 612,621
448,915 -> 195,915
565,174 -> 565,138
218,235 -> 576,593
955,732 -> 287,64
225,112 -> 969,112
773,795 -> 773,718
446,150 -> 446,490
14,914 -> 437,491
950,987 -> 46,83
312,818 -> 312,108
42,791 -> 165,791
448,592 -> 16,592
225,389 -> 245,389
351,772 -> 651,772
531,685 -> 485,731
797,773 -> 168,144
247,196 -> 28,196
273,961 -> 158,961
961,877 -> 961,691
267,397 -> 267,214
553,140 -> 26,667
963,71 -> 245,789
878,128 -> 749,128
33,973 -> 971,35
950,152 -> 733,152
33,71 -> 811,71
757,556 -> 792,556
863,617 -> 335,617
763,781 -> 11,29
592,572 -> 504,660
498,899 -> 498,867
73,39 -> 569,535
179,242 -> 179,734
951,128 -> 108,971
86,535 -> 758,535
886,230 -> 801,230
28,39 -> 749,760
521,797 -> 551,797
870,641 -> 329,100
479,650 -> 479,406
373,791 -> 923,791
294,390 -> 294,623
905,759 -> 905,622
82,88 -> 928,934
171,15 -> 171,560
342,61 -> 453,61
30,103 -> 777,850
899,316 -> 899,818
746,493 -> 417,164
547,279 -> 557,279
330,663 -> 330,882
75,696 -> 740,31
368,828 -> 912,284
816,758 -> 744,758
484,753 -> 922,753
216,382 -> 216,189
835,563 -> 835,827
37,955 -> 980,12
730,704 -> 836,704
647,325 -> 529,325
627,647 -> 978,296
950,628 -> 455,133
349,382 -> 915,382
144,530 -> 144,721
675,736 -> 675,646
55,784 -> 55,829
63,724 -> 309,970
957,863 -> 51,863
86,732 -> 86,959
331,223 -> 415,223
65,906 -> 65,362
877,296 -> 805,224
360,85 -> 93,85
697,479 -> 697,117
965,55 -> 49,971
825,188 -> 36,977
107,522 -> 129,522
171,55 -> 879,763
23,615 -> 748,615
45,34 -> 972,961
241,750 -> 241,251
980,184 -> 429,735
859,419 -> 859,695
474,283 -> 474,204
135,100 -> 616,100
338,653 -> 450,653
304,294 -> 304,285
416,602 -> 308,602
517,172 -> 978,633
872,878 -> 143,149
487,314 -> 394,314
954,807 -> 453,306
701,933 -> 701,655
614,70 -> 614,356
246,744 -> 61,559
444,858 -> 108,858
981,954 -> 110,83
428,622 -> 56,250
813,747 -> 383,317
344,295 -> 344,476
870,36 -> 870,638
76,584 -> 76,934
931,802 -> 931,486
496,83 -> 521,83
341,319 -> 700,678
231,722 -> 312,722
967,966 -> 103,102
78,948 -> 975,51
167,146 -> 817,796
16,579 -> 189,579
68,242 -> 686,860
965,182 -> 206,182
226,565 -> 226,30
128,242 -> 128,136
75,395 -> 75,644
208,687 -> 24,687
46,867 -> 46,765
366,802 -> 366,439
410,657 -> 698,945
158,719 -> 158,11
357,462 -> 647,462
587,909 -> 305,909
927,694 -> 235,694
846,243 -> 942,243
781,169 -> 30,169
329,497 -> 97,497
139,120 -> 963,944
237,373 -> 95,515
512,316 -> 890,316
450,975 -> 450,231
906,326 -> 554,326
21,706 -> 12,706
698,384 -> 448,634
49,917 -> 676,917
790,752 -> 790,36
167,610 -> 72,610
571,347 -> 313,347
830,203 -> 64,969
842,731 -> 490,731
948,412 -> 841,305
259,110 -> 319,110
970,277 -> 911,277
619,424 -> 326,424
877,400 -> 877,303
437,612 -> 854,195
217,121 -> 217,574
734,109 -> 734,235
207,406 -> 230,383
111,914 -> 981,44
673,239 -> 343,239
567,258 -> 522,258
183,541 -> 562,541
834,143 -> 834,545
142,220 -> 142,434
739,942 -> 312,515
155,358 -> 857,358
610,709 -> 466,709
640,544 -> 65,544
211,14 -> 88,14
441,524 -> 524,524
278,322 -> 259,322
365,167 -> 886,688
706,971 -> 706,60
773,791 -> 773,529
833,752 -> 532,451
250,913 -> 250,696
660,50 -> 360,350
235,443 -> 380,443
853,56 -> 369,540
939,595 -> 377,33
935,957 -> 740,957
547,87 -> 184,450
53,955 -> 974,34
957,165 -> 957,524
392,956 -> 392,166
552,666 -> 171,666
949,728 -> 103,728
816,85 -> 792,61
968,108 -> 103,973
88,183 -> 888,983
804,788 -> 66,788
526,506 -> 417,615
822,670 -> 634,482
949,143 -> 949,867
302,820 -> 302,877
107,512 -> 551,68
23,123 -> 23,101
882,886 -> 16,20
216,977 -> 216,522
581,420 -> 424,577
84,41 -> 113,41
157,717 -> 679,195
907,270 -> 907,259
275,769 -> 275,701
389,88 -> 44,433
246,190 -> 643,190
212,730 -> 235,707
976,122 -> 934,122
860,179 -> 860,797
953,672 -> 592,672
680,101 -> 680,714
293,424 -> 576,424
139,107 -> 55,23
885,56 -> 34,907
87,74 -> 911,898
79,686 -> 79,883
936,139 -> 936,937
238,585 -> 31,378
742,120 -> 883,120
203,129 -> 203,338
571,665 -> 421,515
654,642 -> 51,642
797,313 -> 797,850
472,25 -> 806,25
956,21 -> 13,964
334,856 -> 334,932
199,904 -> 165,870
179,439 -> 179,397
657,805 -> 319,467
903,38 -> 168,773
672,487 -> 326,833
727,868 -> 747,868
467,637 -> 984,637
933,81 -> 293,81
786,211 -> 690,115
120,276 -> 120,455
101,86 -> 975,960
579,124 -> 685,124
679,346 -> 679,986
911,206 -> 911,846
401,497 -> 401,375
417,101 -> 234,284
61,885 -> 315,885
744,175 -> 744,814
97,496 -> 539,938
98,325 -> 98,887
14,277 -> 709,972
648,456 -> 648,287
16,13 -> 988,985
69,794 -> 69,343
753,148 -> 272,629
178,251 -> 366,439
431,241 -> 431,32
54,235 -> 684,865
964,68 -> 91,941
406,142 -> 20,142
373,490 -> 373,88
468,987 -> 612,843
981,31 -> 127,885
934,382 -> 934,415
936,881 -> 936,56
891,74 -> 891,886
490,346 -> 490,769
458,89 -> 110,89
754,171 -> 236,689
856,539 -> 856,782
312,498 -> 312,370
986,56 -> 148,894
591,777 -> 591,613
265,107 -> 493,335
916,775 -> 916,193
809,535 -> 809,523
584,231 -> 61,754
926,818 -> 248,140
764,443 -> 324,443
925,956 -> 90,121
536,378 -> 715,557
590,125 -> 61,654
108,630 -> 535,203
585,260 -> 748,260
243,86 -> 672,86
869,864 -> 245,864
332,188 -> 332,709
932,457 -> 897,457
713,247 -> 460,500
741,865 -> 412,865
927,742 -> 927,96
42,586 -> 662,586
577,431 -> 577,273
878,415 -> 878,22
433,913 -> 742,604
710,619 -> 240,619
761,317 -> 133,317
483,747 -> 929,747
83,513 -> 700,513
954,818 -> 954,848
22,12 -> 620,610
514,978 -> 520,978
638,582 -> 133,582
264,306 -> 515,557
416,662 -> 971,662
341,540 -> 610,540
847,837 -> 294,284
555,322 -> 555,893
965,981 -> 12,28
23,56 -> 797,830
712,285 -> 712,856
618,137 -> 221,534
268,286 -> 268,732
732,238 -> 732,121
125,452 -> 987,452
662,390 -> 390,390
485,651 -> 485,922
578,433 -> 122,433
471,904 -> 471,176
285,622 -> 138,769
270,889 -> 270,912
593,847 -> 593,21
749,350 -> 857,350
125,532 -> 403,532
357,73 -> 807,73
671,485 -> 671,933
216,501 -> 624,501
64,915 -> 969,10
801,246 -> 801,870
445,904 -> 445,40
300,525 -> 540,525
142,772 -> 142,810
914,711 -> 217,711
786,163 -> 102,847
715,615 -> 715,169
261,474 -> 450,474
726,434 -> 726,559
783,40 -> 414,409
673,171 -> 393,171
268,584 -> 186,584
189,562 -> 480,562
816,34 -> 165,34
645,443 -> 645,118
508,313 -> 253,58
550,164 -> 206,508
606,502 -> 209,502
345,696 -> 232,809
325,936 -> 325,715
505,479 -> 537,479
362,13 -> 943,13
169,507 -> 375,507
27,12 -> 985,970
980,768 -> 98,768
738,793 -> 76,793
877,935 -> 886,935
321,157 -> 805,157
800,595 -> 171,595
606,981 -> 716,981
57,31 -> 57,158
800,97 -> 11,886
455,164 -> 455,476
137,259 -> 30,259
111,495 -> 482,124
47,248 -> 747,248
299,268 -> 225,268
973,52 -> 124,901
498,821 -> 498,653
272,419 -> 121,570
394,48 -> 703,48
574,466 -> 574,421
918,256 -> 361,256
360,583 -> 279,583
164,611 -> 406,611
453,890 -> 453,838
433,562 -> 25,154
89,177 -> 89,729
138,910 -> 138,674
966,711 -> 636,711
139,830 -> 139,760
76,493 -> 973,493
228,910 -> 878,260
349,939 -> 141,939
742,624 -> 742,472
70,714 -> 950,714
377,935 -> 621,691
363,584 -> 556,584
452,517 -> 452,544
43,400 -> 496,400
608,926 -> 740,794
443,787 -> 261,969
670,703 -> 326,703
59,39 -> 975,955
748,96 -> 721,96
984,182 -> 243,923
780,342 -> 780,801
124,134 -> 950,960
555,979 -> 777,979
68,570 -> 287,570
399,977 -> 613,977
755,793 -> 380,793
88,167 -> 88,132
698,571 -> 138,11
631,227 -> 842,227
254,541 -> 378,541
636,238 -> 594,238
734,249 -> 899,249
524,520 -> 680,520
943,98 -> 117,924
53,37 -> 121,37
67,940 -> 974,33
962,157 -> 139,980
650,349 -> 650,926
77,111 -> 569,111
306,812 -> 924,812
362,579 -> 756,579
462,368 -> 462,618
267,803 -> 80,803
276,682 -> 276,123
599,96 -> 42,96
306,818 -> 306,523
729,254 -> 82,901
65,235 -> 65,927
573,774 -> 237,774
413,376 -> 522,376
103,52 -> 81,52
24,722 -> 530,216
341,395 -> 467,395
937,510 -> 937,435
292,385 -> 518,385
394,588 -> 572,588
561,20 -> 275,20
710,862 -> 355,507
104,530 -> 916,530
160,116 -> 687,116
22,952 -> 940,34
222,752 -> 45,752
873,784 -> 873,475
90,235 -> 503,235
655,543 -> 580,543
169,900 -> 169,326
969,724 -> 634,389
317,826 -> 920,223
705,71 -> 705,970
777,239 -> 777,118
614,746 -> 614,635
910,861 -> 910,733
12,23 -> 972,983
960,128 -> 347,128
821,612 -> 503,294
770,705 -> 770,985
382,977 -> 726,977
730,639 -> 491,639
706,333 -> 492,547
344,596 -> 344,762
729,599 -> 729,630
218,469 -> 204,483
630,586 -> 630,686
98,148 -> 138,148
939,110 -> 433,616
54,42 -> 988,976
987,948 -> 83,44
62,625 -> 671,625
165,64 -> 950,849
245,62 -> 453,270
695,244 -> 60,244
296,505 -> 117,505
522,692 -> 741,692
335,407 -> 335,123
717,37 -> 600,37
772,178 -> 772,889`;

function day05(input) {
    input = input.split('\n').map(str => str.split(' -> ').map(str => str.split(',')));

    let coorArr = [];

    for (let i = 0; i < input.length; i++) {
        let start = [];
        let end = [];

        if (input[i][0][0] == input[i][1][0] || input[i][0][1] == input[i][1][1]) {
            if (input[i][0][0] < input[i][1][0] || input[i][0][1] < input[i][1][1]) {
                start = input[i][0];
                end = input[i][1];
            } else {
                start = input[i][1];
                end = input[i][0];
            }

            if (start[0] == end[0]) {
                for (let a = start[1]; a <= end[1]; a++) {
                    coorArr.push(`${Number(start[0])},${Number(a)}`)
                }
            } else if (start[1] == end[1]) {
                for (let b = start[0]; b <= end[0]; b++) {
                    coorArr.push(`${Number(b)},${Number(start[1])}`)
                }
            }
        }
    }

    function getNotUnique(array) {
        let map = new Map();
        array.forEach(a => map.set(a, (map.get(a) || 0) + 1));
        array = array.filter(a => map.get(a) > 1);
        return new Set(array).size;
    }

    return getNotUnique(coorArr);
}

console.log(`Part one's answer is: ${day05(day05Arr)} *wrong*`);
// console.log(`Part two's answer is: ${day05()}`);