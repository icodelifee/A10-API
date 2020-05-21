import { A10 } from "../a10.ts";

export const a10inRE: A10 = {
  name: "inbike",
  body: [
    ";ccCccCccccccccccc+;++ccCCOOOCCCccCOOOOOOCCCcc+cCccccccCOOOOOCcOOCccCcc+cCOGOOOOOOOCCCccc+\n" +
    "+ccc+cccCccc+ccc+++;+;;;ccccOOCCC++COOOCCCcccCCCOOCCcCCCccccCCCCOCCCCCCCCOOOOOOOOOOOOCCOCC\n" +
    "ccC+cCcCc++;;;Cc+++++;;:+CCOOOCccccccccCCCCCCCCCCCCCCCCCccccccCOOOOCCCCCCOOOOOOOCOGOOCCCCC\n" +
    "cCCCC+;+;;+;+C++c++++++:;CCCCcCc++cccCOCCCCCOOOOOCCCOO+;;cCCCCOOCOOCcCCCCCCOOOCcc+cCCCCccc\n" +
    "OOOOC;cc+;;;:::;+ccc++;+c+;++CccccccccccCCCCCOOCCCCOGOOOOOOOOOOCCCCCCcccCCc++++ccCCCCCcccc\n" +
    "OOOOc:CCccc++;;;;++cccCcCOC+;+cCCCOOCc++cCCOCCOCCcCOCcOGOCOOOOOOOOOOOCCccc++cCccCCcc+cc+cc\n" +
    "OOGGCcCcCCCccc;cccccCCccccCC+cccCCccCCcG@@@@M@@G@GOCOOCCOOOOOOOOOC+cOCCCc++++cc++cCcc+++++\n" +
    "cCOGGGGGOCccCc++CCc++cccccccccCCcccccCG@@@G@@@@@@@G@GOCCOCOOOCCOOc+Cc+ccc++ccc+++++cc+cc+c\n" +
    "cOOGGGOGOC+cCcccCOC+++ccccccc++C++++cG@@@c+O@@@@@@@@@@OCCCc+++c+++;;;;+cccccccc+cccccc++cC\n" +
    "COOGGGOCCccccccccCCccccOOC+++ccCCc+cCG@G;:::+C@@@GOO@@@O+++++c+;;;;;;+++c++++++ccccc+++++C\n" +
    "+++OGCcCccccCCCCcCCccccccCcCCCCCCCCcC@MG;;:::;cCOc;;+@@G+;;:;ccc++c+++++;;;::;++++++++++++\n" +
    ":,COGOOc:;ccCCCCCCCcc++cCcccccCCcCcc+G@;:+COC+:;:;:;;@@+;;::,;:::;;;;;+;;++++++;;;+cCc+;++\n" +
    "CCcOCCO;,+c+c+cccCCccCCccccCCCOCcc;:;OG:;C+CGc;G@@OC;G+;;;+::;;;++;;;:,:+;;++++c++;;;;;;;;\n" +
    "+COOCCCOc;:;+ccccCCCccccccCCCOCCCCc++cO:,,,,,:,::;:,;+:::;;:;;;;;+++++;;+c+++++;++;;;;;;;;\n" +
    "cCOOOOC+c+;+cCCCCCCCccCCCcccCOCCCC+;+:+;::;OG+c@C,,::++;++c;::c+;;+;::;;;:;;++;;+;;:;;+;;;\n" +
    "+cc++cccc+++++CccCCcccc++CCcCCc++;;++;++++OG@GG@@c+;;;+++;;++++;;+++;;;+++++;;+;;;;::;;;;;\n" +
    "+;;cc+;;++++c++;;+++;:++;;+ccc++;;;:::,ccc;;+cc+;+cC;+;;+;,,,::;;+c++++;;;::::::::;;;;;;::\n" +
    "++++;++;;;;+;++;+;+;:;+c+;;;cc+++;;++G@CCC+;:+;;+OOCO;:::;:;;:;;;;:;;;;;;;:;;;;;:;;;;;;;:;\n" +
    "+++c++;++;;:;c++;+++;;:;+;;;:::;;+:++C++COOOGGGGGGOCGc;;::;;;:::;;;:::::::;;;;;;::::::::;;\n" +
    "+cC+;++c+;;+;;;;;:::::;;;;:;::;;++++cCcC++cCOGGGCcC+Cc+cC++;::,::::;:::::;::::::::;;;:;;::\n" +
    "++c+;;:;;++;;;::;;;;;;;;:;+++cccc+ccc+:;++++c+ccCc;;McccCCcC+c+++;:::::::::::;;;::;;;;;;::\n" +
    ";;;;;;;;:;;;;;;;;:;;;++++cc+cccccc+c@G@G@;;;::;;;MOOOcCccCcCCccccO+;::::::::::::::::::::::\n" +
    ";;;;;:;++;:;;:;+;;;;;;cOccccCcccccccCCCCOOGc;:;GCCCCCCcCccCCCCCcCcc++:::::::::::::::::::::\n" +
    "+c++:;;;:+;;;;:;;;;:++ccCccCCccccccccccCCCcC;cCCCCCCccc.ccCCOCOCOCccc+:::::::::::::::,,,,,\n" +
    ";:::::::::;:::::;;:+ccccCOCOCcccccccccccccCCCCcCCcccCCccCCCCcCCGccCccc;:::,,,,,,,,,,,,,,,,\n" +
    ":::::::::::;:::::;;+cccccCGOCCCCcccc+cOOCccCCCCCccccccCcCCCCCOOCcccccc+;::,::,,,,,,,,,,,,,\n" +
    ";;;:;::::;;:;;;:::++ccccCCCGOCCCC+OOCcccccCCCCCcCCcCCCCCCCCOCGGCCcccCCc+:,,,,,,,,,,,,,,,,,\n" +
    ";;;;;;;;;:::;:::::c++;cOcOO@OcOOCCCcccCcCCOCCcCCCCCCCCCCCCOOO@OCGCCcccc+C,,,,,,,,,,,,,,,,,\n" +
    ";;;;;;;;:::::::+Cc+cccC+cCCGGCOOCCCCCCCcCOCCCCCCCCCCCCCOCOOOO@OC:....,,,;,,,,,,,,,,,,,,,,,\n" +
    ";;;;;::;;;;;;;:OOCc+cCOOCOO@OGOOOOOOOOCCOOCCCCCCCCCCOOOOOOOOO@G,.....,,:::,,,,,,,,,,,,,,,,\n" +
    ";;;;;::::;:;;;:GOOOCCOOOGOO@GGGGGOOOOGCGOCCCCCCCCOCOCOOGGOOOO@@:,.,.,,,,,::,,cCcCcc,,,,,,,\n" +
    ":::::::::::::::+GOOGGGGG::C@@G@GGOGGOCGOCCCCCCCCCCOOOCOGGGGGGG@G:,,,::,,,:;CCCCCOCCC:,,,,,\n" +
    ";::::::::::::::c;:OG@O;;;c@@@GGOOGGCCGCCCCCCCCCCCCCOOCOOGGGGGG@,,;::+:,,,:cOOOCCOOOGG,,,,,\n" +
    "::::::::::::::;;;:,C:+++CGGGGOOGGCCOOCCCCCCCCCCCCCCCOOCOOGGGGG@,,,+;+:,,,::GGOOOGGGGM,,,,,\n" +
    ":::::::,:,::,,c::;:::+C+,GGGGGGGOCOOCCCCOCCCCCCCCCCCCOOOOOGGGG;.,..c+:,,,,::@M@@@@@;.,,,,,\n" +
    ":,,,,,,,,,,,,,cc++::+CC+,GOGGGGOCOOOOCCCCCCCCCCCCCCOCOOOOOCOG@G,,,,,+;:::::;c,O,,,,,,:,,,,\n" +
    ",,,,,,,,,,.,,..O+.,,,:;.+cOGGGGCOOOOOOOOOCCCOOCOOOOOOOOGG@@@@@G,,,.,,c++,,::C@.,,.....,,,,\n" +
    ",,,,,,,,,,,,,,:::,,:,::...GcCCCOOGOOOOOCCCCCOOOOOOGGGGGGOOOOGGG,,.,,,,C+:cG:;+.,,,..,,,,,,\n" +
    ",,,,.........O,+:::;:;c...CGOOGGGGGGOOCCOOOOOOOCCCCCCOOGGGGOCCC.......,C;,    ,,,.,,,,,,.,\n" +
    ",,,,,,,,,,,..G;;+,+,:cGccC@GGOCCCCCcCOGGGGGGGOOOOOGGGGGGGGG@@G;.,,.,c@..cC::,,O..,,.,,,,,:\n" +
    ",,::::,,,,,..,.CO+OOO@OOCO@GGOOOOOOOOOCOOOCCCCCCCCOOOCOGGOOGGO....,:@...c::;::,,:;,.,,..,,\n" +
    ".........G@C@@@@@G@cCGCOcC+c    OOOOOOOCCCCCOCCOGOOcOOGGOOCGOC.....Cc;cGcCGG::G,:;,,,,,,,.\n" +
    "............,.......c...+CGGOOOOGG@C+CCOCG+CCCc;Gcc;O+GGGG@@GOc,,,c@MGOGG@@@M::M,+;,,,,,,,\n" +
    ".....................C;     ;C+;cOOOGC, +:cc      cGGC  GG@+   +cOGcOG@@GM+,,+:.;;;,,,,,,,\n" +
    ".....................               CcMG, :...... ,c;c+:GG@GG@GGG@@@MCG@GGC@@G@GcG.,,,,,,,\n" +
    ".....................    ,:,:       C;C ,........... ;c@cOccCOc+:....,,,,....,,....@@,...,\n" +
    ",,,...............      ,,,,;;;   cGC+ ,.......,..,.. ,c.@      ;c.......,,.,,,.,,,,,.,,.,\n" +
    ",,,.,,,,,,,.,,,,        ,,;:;:;;cCOOOc,....   .:.  ,.  O.@      :;C;;.....,,..,.,,,,,,,,,,\n" +
    ",,,,,,,,,,.,.,..         c+;,c,. +C+GO: ..,.,,;:.. ..  +@OCCC  :;;:+:+,,,,,,......,,,,,,,,\n" +
    ",,,,,,,,,.,....           ..,+ ;; +GM:+  .            .;GC  .OO+;+;,;C,.,...,..,,,,,,,,,,,\n" +
    ",,,,,,.,......           .,:C ...  OO+;+            . :CMcCCc   +;+:+,,...,,,,,,,,,,,,,,,,\n" +
    ",,,,,,,,,.....          ::+cCc. .++C+;+O: ....   . ..C@;@+c::         .....,,..,,,,,,,,,,,\n" +
    ",,,,,,,,,,,,.        .  .++COO+.::CGGO;;C+c,     ..CGc;;CCc;..         ,,,,,,,,,,,,,,,,,,,\n" +
    ",,,,,,,,,,,        .... .;COGGc.        c@@@@@@@@@M@@@@CMOOc:,,....  . ,,,,,,,,,,,,,,,,,,,\n" +
    ",,,,,,,,::         ..... .+CGGO   ;,,     ;                 ,;:,.  ..  .,,,,,,,,,,,,,,,,,,\n" +
    ":,:,,,,,,:         .,.....:CCOC        .  +      ;;+ ;  +   +,,:::,,.    ,,,,,,,,,,,,,,,,,\n" +
    ",,,,,,,,,,         ...,.,,,+OOCcccc@GG+,..                  Oc+:.,,,,,,.  ,,,,,,,,,,,:::::\n" +
    ":,,::::,:,,. ..     .,,,,,,;+OCcccC;++@c@M@@G@@MMG@M@M@@@:,;CCO++: ...,,,. ,,,,:,;,.,:,,,,\n" +
    ";;+;+;+;::,.;:,,,:,+,,,:,:::;CCcc+;+;:M@;@@@MM@@@@G@Cc;C@C:,:+cCC+;;.    .. ,,,,,:cc+;:,::\n" +
    "+;;:;;;++;;;C    ;:;+CC;:::::CCc+@:c;;M@++@@M@OOO@c@c+;@GG+:,,;+c+;+:,, .... :;:::;:;;++++\n" +
    ";;;:;;+;;;;;c CCCCCC;;:.       cOGcc;;@@cC@MMM@O;@O@+++GCGG+;,::;+cC+:,,,. . ;++++;+++++++\n" +
    "+;;;+;;;;;;;ccCOGGGG@cG@COGGOOGGOOC+;GG@C@@MM@,,;COO++;@    ..,+;:;;;;:,,..,,.+++c+;;++++;\n" +
    ";;;;;;:;;;+;cCCOOGG@@:@MMMMMOOOG:C++c@c;cGGCCOO:GGGcc+:@GOOCCccc;.,:        .;:+++++++c+c+\n" +
    "+;;;+++++;;;ccCOOGG@::OMMMMMMMMOGC;+@c;;OccCCC;@.GCcc;+G@MMMcOc;:+CC+OGGGOOO,, ++++++c++cc\n" +
    ";;;;;:;;+;;++cCOOGG@@MM@@@@MMccOGcc+MC+cc+cc+;;G+:O@c;cM@MM@;+Oc;;:Ccc+cCc+,....:++++c+c++\n" +
    ";c+;;+:;:;+;;cCOGG@c;;@MMMMMM;:cG+cCc;,cc++++cc+@@+MC+;@MMM@++cOc+;,cCc+;cc;+c,,.++cc+;+c+\n" +
    "+++;:;;;;;+++ccOOG.+;;,@@McGGc. GCc@OC:Cc;+ccCCcOO@GO+O@GMMc++++O++;,CcCcc+COc+::c+++;c+++\n" +
    "++;+;;;c+;;++ccCGG ;;;;;;+,:O:  ;  :CccCCccccCCCO;@C@G@@CM@++++++c;+;:;ccCc++;+cc;;+c+;ccc\n" +
    "::++;:;;:;;;;+ccOGccCOGcGc, ;:,O:. ;@MMOGGGG@@@@MMGC  :O+++;c++;;;+O++,,c+;cc;++:;+c+;++++\n" +
    "++;++;;+;;c;+ccCCG@O@GMO@O:++.G@,..+OMMcccCcOCCCMMO:  :O;++++;++++++C++:,+;+;;++:.Cc++cccc\n" +
    "+;;++C;;:+++++cOGGC@Oc,;GC,c.O@G,..GGMM+cccccCcCMM+:  :@cGcc+c+cccc++++++;,;:;;::+:ccc++c+\n" +
    "GGGGGGGGGGGOGGG@@M@G@OOC@@GG@MMOCCCO@M@GGGGGG@GGMMOGCC@@@CMMMMMMMMMGG@@GOOGOCOOOOOOGGGGG@O",
  ],
};
