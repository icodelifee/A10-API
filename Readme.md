# A10 API - Deno
Every Framework Needs a A10 API

## Usage
Quite similarily to the [npm package](https://www.npmjs.com/package/cat-me) [It basically a kang of [CatYou](https://deno.land/x/cat_you)], A10 API generates A10 images either by random, or by passing in a particular name as a parameter.

```javascript
import { getA10 } from "./getA10.ts";

console.log(getA10("chullan"))
/*
@@@@@@@@@@@@@GGGGGGG@GGGGGG@OO@@GccCOG@@@MM@@@@@@@@@@@@@@@@@@@@@@@@@@@C@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@GGGGGGGG@@GGGGGGOc@@CcccccCOG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@GGGGGGGGGGGG@GGGGGG@GcccccccccCO@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@GGGGGGGGGG@@@GG@OG@Occccccc++cccOG@@@@@@@@@G@@@@@@@@@@@@@@@@@@@@GG@@@@@@@@@@@@@@@@@@@@
@@@@@@GGGGGGGGGGGGGGGGOOOOOOO+OCccCccccccc+++ccCOO@@@@@GGGGOGG@@@@@@@GG@@@@GGG@@@@@@@@@@@@@@GGOOOO
;;;;;;::::;::::::::::,,,,,,,,:Occccccccccc+++++++ccccCCOCOOOOG@@@@@GOGG@@@@GGG@@@@@@@@@@@GGOCCCCCC
,,,,....,,,,,................;ccccccccc+++++++++++++++c+cc+ccOGGGGGO+cOG@@GGGG@@@@@@@@@GGOOOOOOGGG
..........,,,................C+CCOOOCcc++++++++++++++++++++++CGGGO+;;;+CGGGGGGGGG@@@@@@GGGGGGG@@@@
..........,,,,..............,ccCCCCOGGGOCcc++c++++c+ccc++++++CGO;;c::;+cGGGGGGGGG@@@@@@GGGGGGGGGGG
,,.......,,,,,,,............+;++ccOCGGcOGGOccCCCOGGOOOCCc+;;+cCcc++::;+OGGGGGGGGG@@@@@@GGGGGGOCCCC
,,,,,,,,,,,,,,,,,,,,,,,,,,,,+c++++cCcCCCCOc++CCOC+GOOC+;;;;;+ccC;++++cCOGGGGGGGGGG@@@@GGGGGGOCCCCC
;;;;;;;;;;+++;;;;;++++++++++cCccc++++cccCc+++c+ccCCc+++++;;;++Cc+cCCCOOOGGGGGGGGGGGGGGGGGGGOOOOOOO
OOOOOOOOOCCCCCCCCCCCCCCCCCCccCccc+++++ccc+;++++++++;;;;+++;+++cc;CccCCOOOGGGGGGGGGGGGGGGGOOCCCOOOO
OOOOOc+;::;;;::::::::::;++;;OCCccc+++cC+c+;++cOc+++++;;;;;;+++c+cCCcCCCOOOOGGGGGGGGGGGGOGGOOOOOOOO
GGGGGc;:,,,,,..........,:;:,+OCCccccCCOcc++;+++Oc++;;;;;;;++cCC+ ccccCCOOOOOOOOOOOGGGGGGGGGGGGGGOO
GGGGO+;:,,.............,::,,,OGCCCCGGOOGGcccOOccOc++;;;;+ccCCCC,..ccccCCOOOOOOOOOOOGGGGGGCccOG@GGG
GGGGO+:,,,,,...........,::, .OOOOG@@@@@@GG@GG@GGOGc+;;;;cCOOOC;.      +cCCCCOOOOOOOOGGGG+;:;cG@@@@
GGGGO+:,,,,,,..........., .,,;OGG@@@@@G@@GGG@@@@@GGCc+cCOOGGC;.          cCCOOOOOOOOC++:,,:+CG@@@@
GGGGO+:,..,,,,,.......  ,,,,,:CCOOGGG@GOOCCCCOGGG@@GOOOOGGGG,.. ..          cCCOOC+;:::,,,;cGGGGGG
GGGGGc;:,,,,,,,      ,  ,,,,,:CCOOGOG@@@GGGGGGCOGOGGCOGGGG+...                ,cc+;;;;;:,:;cOGGOOO
GGGGGOc;;::,         , ,,,,,,::+OGGGOOOOOOOC::+OOGOOOGGG@:,....,:::::,                 ,::+cOGGOOO
GGGGOOOOC      .     ,,. .,:,::;:,:C:,:;OGC;;;;;+OGCGGC,:+,.:;;+++;:.                     +COOOGOO
OOOOOOOO   ......     ..,,,,,::;++;:;+;+;+GOccCC++,,,,:;:.:;+++c,........          ........ cOOOGG
OOOOOO; ...,,...      .   ,:;;:;Cccc+cccCc+cOCCCcc:,.  .;+ccccc,,.......         .       .....OOGG
OOOCC....,,,...         .:,;cc+:CCCCc;+CCcc++::Cccc+,..:+ccccc,,,,,,..,...       ........   ...COG
OOCC ...,,.....  .. ....,::,cCc+;cCCcc++ccccc;;cCCCccc+;ccccc,,,,,,,,,,,..........             .OG
CCC ..,,:......... ...,.,:::,cCcc::CCCCCCCCCcccCCCCCCccccCCc:,,,,,,,,,,,..,,..                   G
CC..,,::,...............,::;;,CCCCccCCCCCOCCCcCCCCCCCCcccCC,,,:,,,,,,,,..,..................     +
CC.:::::....... ...,,,.,:::;;;:cCCCCOCCCCCOCCCCCCCCCcccCCC:,,:,,,,,::,,,......    ........,,,.... 
*/

// Options: chullan, stephen, inbike, withgun

```


## Credits
This Module is simply an improvised version of the cat-me package by [coleww](https://github.com/coleww) and  [CatYou](https://deno.land/x/cat_you) but for A10
