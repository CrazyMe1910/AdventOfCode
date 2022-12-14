console.log("Day 14");

const day14Arr = `497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
497,76 -> 497,80 -> 494,80 -> 494,86 -> 508,86 -> 508,80 -> 503,80 -> 503,76
498,13 -> 502,13
525,120 -> 525,122 -> 522,122 -> 522,130 -> 535,130 -> 535,122 -> 531,122 -> 531,120
504,21 -> 508,21
492,17 -> 496,17
534,137 -> 538,137
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
469,37 -> 469,38 -> 487,38 -> 487,37
548,160 -> 548,161 -> 561,161 -> 561,160
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
497,76 -> 497,80 -> 494,80 -> 494,86 -> 508,86 -> 508,80 -> 503,80 -> 503,76
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
525,120 -> 525,122 -> 522,122 -> 522,130 -> 535,130 -> 535,122 -> 531,122 -> 531,120
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
514,110 -> 514,103 -> 514,110 -> 516,110 -> 516,101 -> 516,110 -> 518,110 -> 518,105 -> 518,110
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
469,37 -> 469,38 -> 487,38 -> 487,37
537,139 -> 537,140 -> 548,140 -> 548,139
523,117 -> 527,117
501,15 -> 505,15
514,110 -> 514,103 -> 514,110 -> 516,110 -> 516,101 -> 516,110 -> 518,110 -> 518,105 -> 518,110
497,76 -> 497,80 -> 494,80 -> 494,86 -> 508,86 -> 508,80 -> 503,80 -> 503,76
514,110 -> 514,103 -> 514,110 -> 516,110 -> 516,101 -> 516,110 -> 518,110 -> 518,105 -> 518,110
545,146 -> 545,150 -> 537,150 -> 537,156 -> 551,156 -> 551,150 -> 548,150 -> 548,146
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
492,21 -> 496,21
548,160 -> 548,161 -> 561,161 -> 561,160
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
525,120 -> 525,122 -> 522,122 -> 522,130 -> 535,130 -> 535,122 -> 531,122 -> 531,120
469,37 -> 469,38 -> 487,38 -> 487,37
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
525,120 -> 525,122 -> 522,122 -> 522,130 -> 535,130 -> 535,122 -> 531,122 -> 531,120
481,45 -> 486,45
495,15 -> 499,15
525,120 -> 525,122 -> 522,122 -> 522,130 -> 535,130 -> 535,122 -> 531,122 -> 531,120
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
514,110 -> 514,103 -> 514,110 -> 516,110 -> 516,101 -> 516,110 -> 518,110 -> 518,105 -> 518,110
547,143 -> 552,143
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
545,146 -> 545,150 -> 537,150 -> 537,156 -> 551,156 -> 551,150 -> 548,150 -> 548,146
511,117 -> 515,117
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
484,43 -> 489,43
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
498,17 -> 502,17
489,19 -> 493,19
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
497,76 -> 497,80 -> 494,80 -> 494,86 -> 508,86 -> 508,80 -> 503,80 -> 503,76
525,120 -> 525,122 -> 522,122 -> 522,130 -> 535,130 -> 535,122 -> 531,122 -> 531,120
545,146 -> 545,150 -> 537,150 -> 537,156 -> 551,156 -> 551,150 -> 548,150 -> 548,146
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
537,139 -> 537,140 -> 548,140 -> 548,139
537,139 -> 537,140 -> 548,140 -> 548,139
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
497,76 -> 497,80 -> 494,80 -> 494,86 -> 508,86 -> 508,80 -> 503,80 -> 503,76
498,21 -> 502,21
514,110 -> 514,103 -> 514,110 -> 516,110 -> 516,101 -> 516,110 -> 518,110 -> 518,105 -> 518,110
545,146 -> 545,150 -> 537,150 -> 537,156 -> 551,156 -> 551,150 -> 548,150 -> 548,146
517,113 -> 521,113
534,133 -> 538,133
545,146 -> 545,150 -> 537,150 -> 537,156 -> 551,156 -> 551,150 -> 548,150 -> 548,146
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
507,19 -> 511,19
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
517,117 -> 521,117
504,17 -> 508,17
514,110 -> 514,103 -> 514,110 -> 516,110 -> 516,101 -> 516,110 -> 518,110 -> 518,105 -> 518,110
487,41 -> 492,41
507,89 -> 507,93 -> 499,93 -> 499,97 -> 516,97 -> 516,93 -> 510,93 -> 510,89
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
507,89 -> 507,93 -> 499,93 -> 499,97 -> 516,97 -> 516,93 -> 510,93 -> 510,89
478,47 -> 483,47
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
492,47 -> 497,47
545,146 -> 545,150 -> 537,150 -> 537,156 -> 551,156 -> 551,150 -> 548,150 -> 548,146
488,45 -> 493,45
525,120 -> 525,122 -> 522,122 -> 522,130 -> 535,130 -> 535,122 -> 531,122 -> 531,120
491,43 -> 496,43
514,110 -> 514,103 -> 514,110 -> 516,110 -> 516,101 -> 516,110 -> 518,110 -> 518,105 -> 518,110
507,89 -> 507,93 -> 499,93 -> 499,97 -> 516,97 -> 516,93 -> 510,93 -> 510,89
486,21 -> 490,21
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
537,135 -> 541,135
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
531,135 -> 535,135
497,76 -> 497,80 -> 494,80 -> 494,86 -> 508,86 -> 508,80 -> 503,80 -> 503,76
507,89 -> 507,93 -> 499,93 -> 499,97 -> 516,97 -> 516,93 -> 510,93 -> 510,89
499,47 -> 504,47
507,89 -> 507,93 -> 499,93 -> 499,97 -> 516,97 -> 516,93 -> 510,93 -> 510,89
514,110 -> 514,103 -> 514,110 -> 516,110 -> 516,101 -> 516,110 -> 518,110 -> 518,105 -> 518,110
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
497,76 -> 497,80 -> 494,80 -> 494,86 -> 508,86 -> 508,80 -> 503,80 -> 503,76
501,19 -> 505,19
495,45 -> 500,45
540,137 -> 544,137
520,115 -> 524,115
510,21 -> 514,21
485,47 -> 490,47
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
507,89 -> 507,93 -> 499,93 -> 499,97 -> 516,97 -> 516,93 -> 510,93 -> 510,89
491,73 -> 491,63 -> 491,73 -> 493,73 -> 493,65 -> 493,73 -> 495,73 -> 495,68 -> 495,73 -> 497,73 -> 497,67 -> 497,73 -> 499,73 -> 499,68 -> 499,73
548,160 -> 548,161 -> 561,161 -> 561,160
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
495,19 -> 499,19
514,115 -> 518,115
507,89 -> 507,93 -> 499,93 -> 499,97 -> 516,97 -> 516,93 -> 510,93 -> 510,89
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
479,34 -> 479,32 -> 479,34 -> 481,34 -> 481,30 -> 481,34 -> 483,34 -> 483,26 -> 483,34 -> 485,34 -> 485,25 -> 485,34 -> 487,34 -> 487,26 -> 487,34 -> 489,34 -> 489,32 -> 489,34
497,60 -> 497,59 -> 497,60 -> 499,60 -> 499,55 -> 499,60 -> 501,60 -> 501,54 -> 501,60 -> 503,60 -> 503,53 -> 503,60 -> 505,60 -> 505,53 -> 505,60 -> 507,60 -> 507,52 -> 507,60 -> 509,60 -> 509,53 -> 509,60 -> 511,60 -> 511,58 -> 511,60
528,137 -> 532,137
545,146 -> 545,150 -> 537,150 -> 537,156 -> 551,156 -> 551,150 -> 548,150 -> 548,146`;

function day14(input, partTwo) {
    input = input.split('\n').map(x => x.split(' -> ').map(y => y.split(',').map(z => Number(z))));

    let maxDepth = [];
    let rocks = [];
    let sands = [];
    const sandFrom = [500, 0];
    let isFallingSand = true;

    for (let a = 0; a < input.length; a++) {
        for (let b = 1; b < input[a].length; b++) {
            let from = input[a][b - 1];
            let to = input[a][b];

            if (from[0] == to[0]) {
                let [start, end] = (from[1] < to[1]) ? [from[1], to[1]] : [to[1], from[1]];
                for (let c = start; c <= end; c++) {
                    rocks.push([from[0], c]);
                }
            } else if (from[1] == to[1]) {
                let [start, end] = (from[0] < to[0]) ? [from[0], to[0]] : [to[0], from[0]];
                for (let c = start; c <= end; c++) {
                    rocks.push([c, from[1]]);
                }
            } else {
                console.log('l23: from -> to ERROR');
            }
        }
    }

    rocks = Array.from(new Set(rocks.map(JSON.stringify)), JSON.parse);
    for (let d = 0; d < rocks.length; d++) {
        maxDepth.push(rocks[d][1]);
    }
    maxDepth = Math.max(...maxDepth) + 1;

    // console.log(rocks);
    // console.log(maxDepth);
    
    while (isFallingSand) {
        let sandPos = [...sandFrom];
        let isGoing = true;

        while (isGoing) {
            if (!isInArr(rocks, [sandPos[0], sandPos[1] + 1]) && !isInArr(sands, [sandPos[0], sandPos[1] + 1])) {
                // console.log('down');
                sandPos = [sandPos[0], sandPos[1] + 1];
            } else if (!isInArr(rocks, [sandPos[0] - 1, sandPos[1] + 1]) && !isInArr(sands, [sandPos[0] - 1, sandPos[1] + 1])) {
                // console.log('down-left');
                sandPos = [sandPos[0] - 1, sandPos[1] + 1];
            } else if (!isInArr(rocks, [sandPos[0] + 1, sandPos[1] + 1]) && !isInArr(sands, [sandPos[0] + 1, sandPos[1] + 1])) {
                // console.log('down-right');
                sandPos = [sandPos[0] + 1, sandPos[1] + 1];
            } else {
                sands.push([sandPos[0], sandPos[1]]);
                isGoing = false;
                if (partTwo && sandPos[0] == sandFrom[0] && sandPos[1] == sandFrom[1]) {
                    isFallingSand = false;
                }
            }
            if (partTwo) {
                if (sandPos[1] == maxDepth) {
                    sands.push([sandPos[0], sandPos[1]]);
                    isGoing = false;
                }
            } else if (sandPos[1] == maxDepth) {
                isGoing = false;
                isFallingSand = false;
            }
        }
    }

    return sands.length;
}

function isInArr(arr, check) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == check[0] && arr[i][1] == check[1]) {
            return true;
        }
    }
    return false;
}

// console.log(`Part one's answer is: ${day14(day14Arr)}`);
// console.log(`Part two's answer is: ${day14(day14Arr, true)}`);

console.log(`Part one's answer is: 873`);
console.log(`Part two's answer is: 24813`); 