'use strict'

var Units = {

    'main': [
        // Example 1
        {
            'title': 'asdf jkl;',

            'subunits': {
                // Example 1 - Basic
                'Basic':
                'asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj ' +
                'fdsa jkl; fdsa jkl; fdsa jkl; fdsa jkl; fdsa jkl; ' +
                'asdf fdsa ;lkj jkl; asdf fdsa ;lkj jkl; ' +
                'asdf jkl; ;lkj fdsa asdf jkl; ;lkj fdsa ' +
                'ksl; jak; fk;s asl; jas; ;sl; fjas fjk; ' +
                'askl kjf; asdj ;fal dfla ;;ls ;ja; l;ds',

                // Example 1 - Words
                'Words':
                'a a a; as as as; all all all; fall fall fall; ' +
                'lad lad lad; dad dad dad; fad fad fad; ass ass ass; ' +
                'salad salad salad; alfalfa alfalfa alfalfa; sa sa sa; ' +
                'add add add;',

               
                // Example 1 - Sentences
                'Sentences':
                'ask sall; ask sall; ask sall; ' +
                'a lad asks sall; a lad asks sall; a lad asks sall; ' +
                'ask dad; ask dad; ask dad; ' +
                'all lads fall; all lads fall; all lads fall;',

                // Example 1 - Test
                'Test':
                'as all alfalfa; lad salad lad all dad; lad sall a ask; ' +
                'sall salad alfalfa; ask dad fad lad; all as a; dad fad ' +
                'alfalfa ass salad all as a dad; a lad asks sall; ' +
                'ask sall; ask dad; all lads fall;'
            }
        },

        // Example 2
        {
            'title': 'ru',

           
            'subunits': {
                // Example 2 - Basic
                'Basic':
                'frfr juju frfr juju frfr juju; ' +
                'rfrf ujuj rfrf ujuj rfrf ujuj; ' +
                'jrjr fufu jrjr fufu jrjr fufu; ' +
                'rjrj ufuf rjrj ufuf rjrj ufuf; ' +
                'asdfr ;lkju asdfr ;lkju asdfr ;lkju ' +
                'rfdsa ujkl; rfdsa ujkl; rfdsa ujkl; ' +
                'asdfr ujkl; asdfr ujkl; asdfr ujkl; ' +
                'asdfr rfdsa ;lkju ujkl; asdfr rfdsa ' +
                'asdfr ujkl; ;lkju rfdsa asdfr ujkl; ' +
                'urfu ujku rfur luru rjur arru ursr druj drur arsufr ' +
                'frrur jurru urrsu uusrr drlursu uslru frsusl arfu jfru',

                // Example 2 - Words
                'Words':
                'far far far; fur fur fur; rar rar rar; lark lark lark; ' +
                'radar radar radar; surf surf surf; dull dull dull; ' +
                'urdu urdu urdu; full full full; rural rural rural; ' +
                'us us us; usual usual usual; laura laura laura; ' +
                'russ russ russ;',


                // Example 2 - Sentences
                'Sentences':
                'laura surfs as usual; laura surfs as usual; ' +
                'laura surfs as usual; ask russ; ask russ; ask russ;',

                // Example 2 - Test
                'Test':
                'radar rural laura russ fur lark rar surf; ' +
                'far usual russ full lark laura dull; ' +
                'laura surfs as usual; ask russ;'
            }
        },

        // Example 3
        {
            'title': 'vm',

           
            'subunits': {
                // Example 3 - Basic
                'Basic':
                'fvfv jmjm fvfv jmjm fvfv jmjm; ' +
                'vfvf mjmj vfvf mjmj vfvf mjmj; ' +
                'jvjv fmfm jvjv fmfm jvjv fmfm; ' +
                'vjvj mfmf vjvj mfmf vjvj mfmf; ' +
                'fvrm jmuv fvrm jmuv fvrm jmuv; ' +
                'asdfv ;lkjm asdfrv ;lkjum asdfvr ;lkjmu ' +
                'avrm mvum mmvm mvlv vvmuv vrmv vmrlm svmvmk avsm ' +
                'rvasm svlmr svmvr dvmkv kmvlv rvlmv amvvm vvma mvmm',

                // Example 3 - Words
                'Words':
                'madam madam madam; lava lava lava; malva malva malva; ' +
                'slam slam slam; mars mars mars; mask mask mask; ' +
                'uv uv uv; murmur murmur murmur; slum slum slum; ' +
                'mark mark mark; vasu vasu vasu; larva larva larva; ' +
                'dam dam dam; sam sam sam; vum vum vum; ' +
                'arm arm arm; mall mall mall; alarm alarm alarm;',

                // Example 3 - Control
                'Control':
                'm ma mad mada madam; l la lav lava; m ma mas mask; ' +
                'm mu mur mur murm murmu murmur; v va vas vasu; ' +
                'l la lar larv larva; d da dam; v vu vum; u uv; ' +
                'm ma mar mars; s sl sla slam; a al ala alar alarm;',

                // Example 3 - Sentences
                'Sentences':
                'madam murmurs; madam murmurs; madam murmurs; ' +
                'a mad vassal murmurs; a mad vassal murmurs; ' +
                'a mad vassal murmurs; ' +
                'mark all vassals; mark all vassals; mark all vassals;',

                // Example 3 - Test
                'Test':
                'madam lava slum slam mask vasu sam alarm vum uv; ' +
                'mall alarm arm larva adam malva vum vasu mask; ' +
                'madam murmurs; a mad vassal murmurs; mark all vassals;'
            }
        },

        // Example 4
        {
            'title': 'ei',

            'subunits': {
                // Example 4 - Basic
                'Basic':
                'dede kiki dede kiki dede kiki; ' +
                'eded ikik eded ikik eded ikik; ' +
                'fefe jiji fefe jiji fefe jiji; ' +
                'efef ijij efef ijij efef ijij; ' +
                'deki iked deki iked deki iked; ' +
                'ekid dike ekid dike ekid dike; ' +
                'idek kedi idek kedi idek iked; ' +
                'aeds fers iukj iuea ediu edil; ' +
                'aeiru iuerr juiee ireel aerij afeei iieei eeeii eieie; ' +
                'iesdi sdiei aidef lijue iuefr ifese eikis iaser uieie;',

                // Example 4 - Words
                'Words':
                'fire fire fire; field field field; are are are; ' +
                'riddle riddle riddle; killer killer killer; is is is; ' +
                'file file file; rise rise rise; side side side; ' +
                'read seed feed leave veal seal visa veer smear; ' +
                'lime slime dime vide save vase live vile ride free; ' +
                'smile simile familiar similar mere merrier',

                // Example 4 - Control
                'Control':
                'r ri rid ridd riddl riddle; k ki kil kill kille killer; ' +
                's si sim simi simil simile; f fi fie fiel field; ' +
                'f fa fam fami famil famili familia familiar; ' +
                'v vi vil vile; l li liv live; s sm sme smea smear; ' +
                'l li lime lime; s sm smi smil smile; i is; a ar are;',

                // Example 4 - Sentences
                'Sentences':
                'mike is a serial killer; mike is a serial killer; ' +
                'mike is a serial killer; dave is a skilled riddler; ' +
                'dave is a skilled riddler; dave is a skilled riddler; ' +
                'sam served a meal; see a fire drill; jim feeds a deer;',

                // Example 4 - Test
                'Test':
                'fire field are riddle killer is file rise side read; ' +
                'rise side visa live dime vide ride vile smile familiar; ' +
                'slime skilled similar drill simile serial is see are; ' +
                'mike is a serial killer; dave is a skilled riddler; ' +
                'sam served a meal; see a fire drill; jim feeds a deer;',
            }
        },

        // Example 5
        {
            'title': 'c,',

           

            'subunits': {
                // Example 5 - Basic
                'Basic':
                'dcdc k,k, dcdc k,k, dcdc k,k, ' +
                'cdcd ,k,k cdcd ,k,k cdcd ,k,k ' +
                'fcfc j,j, fcfc j,j, fcfc j,j, ' +
                'cfcf ,j,j cfcf ,j,j cfcf ,j,j ' +
                'dck, ,kcd dck, ,kcd dck, ,kcd ' +
                'ck,d d,kc ck,d d,kc ck,d d,kc ' +
                ',dck kcd, ,dck kcd, ,dck ,kcd ' +
                ',,cc cc,, c,c, ,c,c ,ic, c,ac, c,r;c ac;,; s,c;fd a,cd, ' +
                ';,,cv vc,a; cv,sk; ;l,vdj vcm, ,mdc cvi, ;i,c m,fc ec;,',

                // Example 5 - Words
                'Words':
                'receive, circus, circle, maverick, class, mice; ice; ' +
                'fulcrum, care, cure, cafe, face, lace, race, claim; ' +
                'card, lack, service, car, camera, recursive, recess; ' +
                'cease, civil, camel, cave, cake, case, decade, crack;',

                // Example 5 - Control
                'Control':
                'm ma mav mave maver maveri maveric maverick, ' +
                'f fu ful fulc fulcr fulcru fulcrum, m mi mic mice, ' +
                'r re rec rece recei receiv receive, c ca cas case, ' +
                'c ci cir circ circu circus, r re rec rece reces recess, ' +
                'c ce cea ceas cease, c ca cam came camer camera, ' +
                'r re rec recu recur recurs recursi recursiv recursive',

                // Example 5 - Sentences
                'Sentences':
                'cecilia received a mail, carr likes camels, ' +
                'use a camera, calla kills mice, use a fulcrum, ' +
                'callula cured carlie',

                // Example 5 - Test
                'Test':
                'maverick, fulcrum, cecilia, camera, recursive, camels, ' +
                'mice, lace, race, case, face, cave, civil, care, lace, ' +
                'claim, decade, cecilia received a mail, use a camera, ' +
                'calla kills mice, use a fulcrum, carr likes camels'
            }
        },

        // Example 6
        {
            'title': 'gh',

          

            'subunits': {
                // Example 6 - Basic
                'Basic':
                'fgfg jhjh fgfg jhjh fgfg jhjh; ' +
                'gfgf hjhj gfgf hjhj gfgf hjhj; ' +
                'fhfh gjgj fhfh gjgj fhfh gjgj; ' +
                'hfhf jgjg hfhf jgjg hfhf jgjg; ' +
                'asdfg ;lkjh asdfg ;lkjh asdfg ;lkjh asdfg ;lkh;' +
                'gfdsa hjkl; gfdsa hjkl; gfdsa hjkl; gfdsa hjkl; ' +
                'arhg, igdh, ikhvg, lcvhg, mgcfm, ehcgm, lhsgh, uhrgh; ' +
                'igghs, ghmvh, hchga, guehg, lchhg, ghcih, gilgh;',

                // Example 6 - Words
                'Words':
                'hacker, cage, hair, jaguar, his, her, he, she, hire, ' +
                'shag, girl, egg, guru, greek, hum, ham, gum, drug, ' +
                'hug, giggle, hush, garage, aggressive, high, sigh, ' +
                'grave, glacier, heal, him, hide, guide, has, had, ' +
                'have, hear, here, flag, give, glad, shell, march',

                // Example 6 - Control
                'Control':
                'g gi gig gigg giggl giggle, h hu hus hush, e eg egg, ' +
                'a ag agg aggr aggre aggre aggres aggress aggressi ' +
                'aggressiv aggressive, g gu gui guid guide, s sh she, ' +
                'h hi hig high, s si sig sigh, s sh sha shag, h he, ' +
                's sh she, g gi giv give, g ga gar gara garag garage',

                // Example 6 - Sentences
                'Sentences':
                'she cracked five eggs, he likes half egg, she used drugs, ' +
                'gerard is a hacker, she has a hammer, he is aggressive, ' +
                'he hid himself here, guide him, he sighed, ' +
                'give me a high five',

                // Example 6 - Test
                'Test':
                'hacker, jaguar, hire, shag, guru, garage, aggressive, ' +
                'he, she, his, her, him, hide, guide, egg, shell, sigh, ' +
                'high, she cracked five eggs, he likes half egg, ' +
                'he sighed, she has a hammer, he is aggressive, ' +
                'give me a high five'
            }
        },

        // Example 7
        {
            'title': 'ty',


            'subunits': {
                // Example 7 - Basic
                'Basic':
                'ftft jyjy ftft jyjy ftft jyjy; ' +
                'tftf yjyj tftf yjyj tftf yjyj; ' +
                'fyfy tjtj fyfy tjtj fyfy tjtj; ' +
                'yfyf jtjt yfyf jtjt yfyf jtjt; ' +
                'ertyui iuytre ertyui iuytre ertyui iuytre; ' +
                'asdft ;lkjy asdfy ;lkjt aedtf ;ikyj adert ;kiuy ' +
                'afty ;jyt tety yjkt lyjt gyht athy sytg lhyg shdt svtm ' +
                'ctym vtyy, ,gytyv crttys sctyt l;tiy, kyhat sytay sytty ' +
                'lttys yytym mtyty syght ymtsy yctvy lytvy ;mtcvy sytaty',

                // Example 7 - Words
                'Words':
                'harry, tight, light, very, merry, dry, height, try; ' +
                'sight, might, fry, cry, family, sally, mathematics; ' +
                'chemistry, fight, tyre, yell, the, there, this, them; ' +
                'jury, hay, heavy, lyre, tram, yacht, tuesday; ' +
                'thursday, friday, saturday, target, hit, fit, tackle; ' +
                'sky, year, thirsty, yet, may, july, august',

                // Example 7 - Control
                'Control':
                't th thi thir thirs thirst thirsty, ' +
                'c ch che chem chemi chemis chemist chemistr chemistry, ' +
                't tu tue tues tuesd tuesda tuesday, t th thi this, ' +
                't th the ther there, t th the them, t ty tyr tyre, ' +
                'm ma mat math mathe mathem mathema mathemat mathemati ' +
                'mathematic mathematics',

                // Example 7 - Sentences
                'Sentences':
                'harry studied mathematics yesterday, this is the tyre, ' +
                'sally likes chemistry, he hit them, let us fit it, ' +
                'hit the target accurately, let us catch the tram, ' +
                'matt has a yacht, she yelled at him, ' +
                'the teachers met everyday, this is my yacht',

                // Example 7 - Test
                'Test':
                'harry, tight, light, merry, try, chemistry, tyre, yacht; ' +
                'tuesday, thursday, saturday, thirsty, year, hay, yet; ' +
                'the, this, there, them, thus; this is the tyre, ' +
                'harry studied mathematics yesterday, he hit them, ' +
                'this is my yacht, the teachers met everyday'
            }
        },

        // Example 8
        {
            'title': 'bn',

            'subunits': {
                // Example 8 - Basic
                'Basic':
                'fbfb jnjn fbfb jnjn fbfb jnjn; ' +
                'bfbf njnj bfbf njnj bfbf njnj; ' +
                'fnfn bjbj fnfn bjbj fnfn bjbj; ' +
                'nfnf jbjb nfnf jbjb nfnf jbjb; ' +
                'cvbnm, ,mnbvc cvbnm, ,mnbvc cvbnm, ,mnbvc; ' +
                'asdfb ;lkjn asdfn ;lkjb aedbf ;iknj aderb ;kiun ' +
                'afbn ;jnb bebn njkb lnjb gnhb abhn snbg lhng shdb svbm ' +
                'mhnb ,ibmn senbm nbmvn tnvnm dvln; lsvnm avnsm lsvne',

                // Example 8 - Words
                'Words':
                'bean, bin, night, nifty, nibble, scrabble, be, best; ' +
                'banana, january, february, june, band, land, bind; ' +
                'december, sunday, blind, bend, abundance, benign; ' +
                'minimal, begin, bank, savant, urban, nebula, science',

                // Example 8 - Control
                'Control':
                'a ab abu abun abund abunda abundan abundanc abundance, ' +
                'n ne neb nebu nebul nebula, b ba ban bana banan banana, ' +
                'b bl bli blin blind, b be beg begi begin, b bi bin, ' +
                'b be ben beni benig benign, b be ben bend',

                // Example 8 - Sentences
                'Sentences':
                'nine blind men sat beside the bank, bill ate a banana, ' +
                'this city receives abundant rainfall in january, ' +
                'let us see a diffused nebula at night, ' +
                'crab nebula can be seen in tauras at night',

                // Example 8 - Test
                'Test':
                'nine, men, nebula, remarkable, saturn, blind, benign, ' +
                'banana, bill, minimal, bank, night, bend, bean, bin, ' +
                'nine blind men sat beside the bank, ' +
                'crab nebula can be seen in tauras at night, ' +
                'this city receives abundant rainfall in january'
            }
        },

        // Example 9
        {
            'title': 'wo',

            'subunits': {
                // Example 9 - Basic
                'Basic':
                'swsw lolo swsw lolo swsw lolo; ' +
                'wsws olol wsws olol wsws olol; ' +
                'fwfw jojo fwfw jojo fwfw jojo; ' +
                'wfwf ojoj wfwf ojoj wfwf ojoj; ' +
                'swlo olws swlo olws swlo olws; ' +
                'wlos solw wlos solw wlos solw; ' +
                'oswl lwso oswl lwso oswl olws; ' +
                'awss fwrs oulj ouwa wsou wsol;',

                // Example 9 - Words
                'Words':
                'what who why when which whom, wheel wind, good moot, ' +
                'sworn sow saw soot loot, war won welcome office will, ' +
                'world worse vow word, biology economics sociology, ' +
                'would whole sword wolf worm, now how orwelian work, ' +
                'owe onus new dew stew too to, weblog wobble womble, ' +
                'you we, monday wednesday, october november, wonder',

                // Example 9 - Control
                'Control':
                'w we wel welc welco welcom welcome, w wo wor work, ' +
                'o or orw orwe orwel orweli orwelia orwelian, h ho how, ' +
                'w wh who whol whole, w we web webl weblo weblog, ' +
                's so soc soci socio sociol sociolo sociolog sociology, ' +
                's sw swo swor sword, w wh who whom',

                // Example 9 - Sentences
                'Sentences':
                'do not introduce orwellian notions into this work, ' +
                'work for the good of the world, will you come to office ' +
                'tomorrow, how many swords do you have, ' +
                'do you know the new seven wonders of the world',

                // Example 9 - Test
                'Test':
                'who how word world wonder would whole sword wolf worm, ' +
                'orwellian work owe weblog wobble womble wonder tomorrow, ' +
                'shower mower lower, will you come to office tomorrow, ' +
                'use the lawn mower, work for the good of the world, ' +
                'how many swords do you have'
            }
        },

        // Example 10
        {
            'title': 'x.',

            'subunits': {
                // Example 10 - Basic
                'Basic':
                'sxsx l.l. sxsx l.l. sxsx l.l.; ' +
                'xsxs .l.l xsxs .l.l xsxs .l.l; ' +
                'fxfx j.j. fxfx j.j. fxfx j.j.; ' +
                'xfxf .j.j xfxf .j.j xfxf .j.j; ' +
                'sxl. .lxs sxl. .lxs sxl. .lxs; ' +
                'xl.s s.lx xl.s s.lx xl.s s.lx; ' +
                '.sxl lxs. .sxl lxs. .sxl .lxs; ' +
                'axss fxrs .ulj .uxa xs.u xs.l;',

                // Example 10 - Words
                'Words':
                'axe axiom. latex maximum. axial exile. axion borax; ' +
                'codex excel. six. mix xenon. toxin tax. linux unix; ' +
                'hoax fax. fox reflex. wax extra. xerox fedex. ox text; ' +
                'exist exit. exert helix. galaxy hexadecimal. maxim tex; ' +
                'next relax. texas exam. exclude lexical;',


                // Example 10 - Control
                'Control':
                'a ax axi axio axiom. x xe xen xeno xenon. s si six. ' +
                'e ex ext extr extra. g ga gal gala galax galaxy. ' +
                'h he hex hexa hexad hexade hexadec hexadeci hexadecim ' +
                'hexadecima hexadecimal. t te tex texa texas. b bo box. ' +
                'f fe fed fede fedex. t ta tax.',

                // Example 10 - Sentences
                'Sentences':
                'there is a lexical analysis examination tomorrow. ' +
                'each dot is written as six hexadecimal digits. ' +
                'alex has six axes and sixteen oxen. ' +
                'the next exam is on number theory axioms.',

                // Example 10 - Test
                'Test':
                'axe axiom exam exclude text next ox linux fedex alex. ' +
                'tax relax fedex texas exclude lexical maximum linux. ' +
                'there is a lexical analysis examination tomorrow. ' +
                'each dot is written as six hexadecimal digits.'
            }
        },

        // Example 11
        {
            'title': 'qp',

     
            'subunits': {
                // Example 11 - Basic
                'Basic':
                'aqaq opop aqaq opop aqaq opop. ' +
                'qaqa popo qaqa popo qaqa popo, ' +
                'fqfq jpjp fqfq jpjp fqfq jpjp; ' +
                'qfqf pjpj qfqf pjpj qfqf pjpj. ' +
                'aqop poqa aqop poqa aqop poqa, ' +
                'qopa apoq qopa apoq qopa apoq; ' +
                'paqo oqap paqo oqap paqo poqa. ' +
                'aqaa fqra puoj puqa qapu qapo.',

                // Example 11 - Words
                'Words':
                'quick qwerty qualm qualify play phone people pupil. ' +
                'queen equip equiprobable quakeproof quilt pique qed. ' +
                'period quasi quantum queue lap paint expert equator. ' +
                'pen pencil pin quote quadruple paddle quirky prince. ' +
                'pint quart prime september quit whip plate piano page.',

                // Example 11 - Control
                'Control':
                'q qu qui quic quick, p pe peri perio period, q qe qed. ' +
                'q qu qua quak quake quakep quakep quakepr quakepro ' +
                'quakeproo quakeproof, p pi piq piqu pique, p pe pen. ' +
                'q qu qua quad quadr quadru quadrup quadrupl quadruple, ' +
                'e eq equ equi equip.',

                // Example 11 - Sentences
                'Sentences':
                'both events are equally probable. peter is a professor. ' +
                'procure the appropriate equipment. it is quakeproof. ' +
                'richard p. feynman is an expert in quantum physics. ' +
                'there are two cups in a pint and two pints in a quart. ' +
                'do not ask personal questions.',

                // Example 11 - Test
                'Test':
                'qualify quality quantity plaque plate pique equip qed. ' +
                'both events are equally probable. it is quakeproof. ' +
                'there are two cups in a pint and two pints in a quart. ' +
                'procure the appropriate equipment.'
            }
        },

        // Example 12
        {
            'title': 'z/',


            'subunits': {
                // Example 12 - Basic
                'Basic':
                'azaz o/o/ azaz o/o/ azaz o/o/. ' +
                'zaza /o/o zaza /o/o zaza /o/o, ' +
                'fzfz j/j/ fzfz j/j/ fzfz j/j/; ' +
                'zfzf /j/j zfzf /j/j zfzf /j/j. ' +
                'azo/ /oza azo/ /oza azo/ /oza, ' +
                'zo/a a/oz zo/a a/oz zo/a a/oz; ' +
                '/azo oza/ /azo oza/ /azo /oza. ' +
                'azaa fzra /uoj /uza za/u za/o.',

                // Example 12 - Words
                'Words':
                'jazz wizard lazy / ooze zeal quiz / ablaze bazar buzz / ' +
                'czar cozy dozen / dazzle enzyme gaze / maze size zeta / ' +
                'zigzag zoo zinc / zoom fizz puzzle / nozzle pizza zip / ' +
                'zero zioty zit / zone seize doze / ozone frieze frizz / ' +
                'maximize minimize organize / realize prize quantize /',

                // Example 12 - Control
                'Control':
                'z zi zig zigz zigza zigzag / p pi piz pizz pizza / ' +
                'n no noz nozz nozzl nozzle / o oz ozo ozon ozone / ' +
                'm ma max maxi maxim maximi maximiz maximize / ' +
                'o or org orga organ organi organiz organize / ' +
                'c cz cza czar / z zi zin zinc / f fi fiz fizz',

                // Example 12 - Sentences
                'Sentences':
                'a zephyr client called tzc is available for gnu/linux / ' +
                'we should minimize pollution to save the ozone layer / ' +
                'pizzeria is a shop where pizzas are made and sold / ' +
                'we have ordered a dozen pizzas for the quiz participants',

                // Example 12 - Test
                'Test':
                'zigzag, nozzle, minimize, maximize, fizz, zinc, czar, ' +
                'pizza, zoo, boy/girl, single/married, m/f, gnu/linux, ' +
                'we should minimize pollution to save the ozone layer, ' +
                'we have ordered a dozen pizzas for the quiz participants'
            }
        },

        // Example 13
        {
            'title': "'",

            'subunits': {
                // Example 13 - Basic
                'Basic':
                "'cla 'mai 'lsi 'kji 'mne 'uyz 'oxb 'gar 'vmn 'xzl 'ovc " +
                "js'a pa'u do'a uy'b si'n ym'l pj's yn's wv'u ug'x tn'p " +
                "ymo' aqo' wqp' pws' wip' yts' irm' ika' lkw' lrx' oip' " +
                "fj'a mi's n'hs la'i w'by si'b 'ivk 'd'p '//' ''p/ ap/' " +
                "'pa/ 'ox/ /aq' 'ixr ;';' ';p/ a';q rpx' g;x' b'y; e/d'",

                // Example 13 - Words
                'Words':
                "we're you're, he's, she's, it's, they're; isn't wasn't; " +
                "we'd, you'd, he'd, she'd, they'd; can't couldn't; " +
                "you'll, he'll, she'll, they'll; here's there's; " +
                "aren't, weren't; what's where's; don't, didn't;",

                // Example 13 - Control
                'Control':
                "w we we' we'r we're, y yo you you' you'r you're, " +
                "y yo you you' you'l you'll, s sh she she' she'l she'll, " +
                "i is isn isn' isn't, h he he' he'l he'll",

                // Example 13 - Sentences
                'Sentences':
                "it's raining. i don't read jack's blogs. he'll come now. " +
                "mumbai isn't the capital of india. don't shout here. " +
                "that's the book we need to learn bernoulli's principle. " +
                "hilbert's paradox of the grand hotel deals with infinity.",

                // Example 13 - Test
                'Test':
                "we're you're she'll he'll isn't don't didn't can't " +
                "i don't read jack's blogs. don't shout here. " +
                "that's the book we need to learn bernoulli's principle. " +
                "hilbert's paradox of the grand hotel deals with infinity."
            }
        },

        // Example 14
        {
            'title': 'shift',



            'subunits': {
                // Example 14 - Basic
                'Basic':
                'aAbB cCdD eEfF gGhH aAbB cCdD eEfF gGhH; ' +
                'iIjJ kKlL mMnN oOpP iIjJ kKlL mMnN oOpP; ' +
                'qQrR sStT uUvV wWxX qQrR sStT uUvV wWxX; ' +
                'yYzZ yYzZ QWERT YUIOP; ASDFG LKJH; ZXCVB MN; ' +
                'ABCD EFGH ABCD EFGH IJKL MNOP IJKL MNOP; ' +
                'QRST UVWX QRST UVWX YZ YZ; UxWm YwnF VpAs BiKv CoGl ' +
                'DbJc QeZr HkXy LpOq EuzT MfNg RhjS tIBd',

                // Example 14 - Words
                'Words':
                'January February March April May June July August ' +
                'September October November December, USA UAE India UK ' +
                'Sri Lanka Egypt, New Delhi New York Moscow Brisbane ' +
                'Donald E. Knuth, Dennis M. Ritchie, S. Ramanujan',

                // Example 14 - Control
                'Control':
                'U US USA, U UA UAE, U UK, M Ma Mar Marc Marc March, ' +
                'D Do Don Dona Donal Donald Donald, I In Ind Indi India, ' +
                'O Oc Oct Octo Octob Octobe October, E Eg Egy Egyp Egypt, ' +
                'M Mo Mos Mosc Mosco Moscow',

                // Example 14 - Sentences
                'Sentences':
                'New Delhi is the capital of India. I am intelligent. ' +
                'You should finish the work by June. I love music. ' +
                'Dennis M. Ritchie developed the C programming language. ' +
                'TeX was developed by Donald E. Knuth.' +
                'GNU/Linux is a free and open source operating system.',

                // Example 14 - Test
                'Test':
                'USA UK UAE March India ZIP PIN SSL SSN PAN GNU/Linux ' +
                'Donald E. Knuth, Dennis M. Ritchie, Richard Stallman, ' +
                'I love music. New Delhi is the capital of India. ' +
                'Dennis M. Ritchie developed the C programming language. ' +
                'TeX was developed by Donald E. Knuth.'
            }
        },


        // Example 16
        {
            'title': '58',


            'subunits': {
                // Example 16 - Basic
                'Basic':
                'f5f5 j8j8 f5f5 j8j8 f5f5 j8j8; ' +
                '5f5f 8j8j 5f5f 8j8j 5f5f 8j8j; ' +
                'j5j5 f8f8 j5j5 f8f8 j5j5 f8f8; ' +
                '5j5j 8f8f 5j5j 8f8f 5j5j 8f8f; ' +
                'f5r8 j8u5 f5r8 j8u5 f5r8 j8u5; ' +
                'asdf5 ;lkj8 asdfr5 ;lkju8 asdf5r ;lkj8u ' +
                'a5r8 85u8 8858 85l5 558u5 5r85 58rl8 s5858k a5s8 ' +
                'r5as8 s5l8r s585r d58k5 k85l5 r5l85 a8558 558a 8588',

                // Example 16 - Words
                'Words':
                '5 books, 8 sentences, 58 words, 5858 students, 85 cars, ' +
                '88 constellations, 55 journals, 5 laptops, 58 bottles, ' +
                '85 cities, 855 buildings, 588 pens, 858 trains, ' +
                '585 buses',

                // Example 16 - Control
                'Control':
                '5 58 585 5858 58585 585858 8 88 885 8855 88558 885585 ' +
                '8 85 858 8585 85858 858585 5 55 558 5588 55885 558858',

                // Example 16 - Sentences
                'Sentences':
                'John has about 55 science books. There are 8 planets. ' +
                'There are 88 constellations. Area code 585 is a state ' +
                'of New York area code. 58 candidates will be selected.',

                // Example 16 - Test
                'Test':
                '5 58 585 85 85 58 85 85 58 588 588 855 8558 588 588 85; ' +
                '5 books, 8 sentences, 58 words, 5858 students, 85 cars; ' +
                'There are 88 constellations. John has about 55 science ' +
                'books.'
            }
        },

        // Example 17
        {
            'title': '49',

        

            'subunits': {
                // Example 17 - Basic
                'Basic':
                'd4d4 k9k9 d4d4 k9k9 d4d4 k9k9; ' +
                '4d4d 9k9k 4d4d 9k9k 4d4d 9k9k; ' +
                'k4k4 d9d9 k4k4 d9d9 k4k4 d9d9; ' +
                '4k4k 9d9d 4k4k 9d9d 4k4k 9d9d; ' +
                'd4r9 k9u4 d4r9 k9u4 d4r9 k9u4; ' +
                'd4r8 k9u4 d4r8 k9u4 d8r9 k9u4; ' +
                'a8dd4 8akk9 as5dr4 5akku9 5s8d4r 8a5k9u ' +
                'a4r9 94u8 9549 94s4 489u4 4r95 49rd5 s4549k a4s98 ' +
                'r4as9 s4a98 s594r d49k5 k98a4 r5a94 a9849 849a 949598',

                // Example 17 - Words
                'Words':
                '4 pens, 9 pencils, 49 buses, 5945 items, 99 words, ' +
                '44 hens, 45 tests, 94 samples, 9454 roads, 94 sticks, ' +
                '545 villages, 954 seats, 598 labels, 549 calls',

                // Example 17 - Control
                'Control':
                '4 44 449 4499 44998 449985 9 94 948 9488 94885 948859 ' +
                '9 98 984 9844 98445 984459 4 48 489 4899 48994 489945',

                // Example 17 - Sentences
                'Sentences':
                'The sum of 44 and 55 is 99. 44 is one less than 45. ' +
                '89 is one more than 99. 45 is a multiple of 9.',

                // Example 17 - Test
                'Test':
                '4 49 94 9445 9844 9845 4589 9845 4458 4459 449 984 995; ' +
                '4 pens, 45 tests, 5945 items, 99 words, 94 samples; ' +
                'The sum of 44 and 55 is 99. 44 is one less than 45.'
            }
        },

        // Example 18
        {
            'title': '67',

            'subunits': {
                // Example 18 - Basic
                'Basic':
                'f6f6 j7j7 f6f6 j7j7 f6f6 j7j7; ' +
                '6f6f 7j7j 6f6f 7j7j 6f6f 7j7j; ' +
                'j6j6 f7f7 j6j6 f7f7 j6j6 f7f7; ' +
                '6j6j 7f7f 6j6j 7f7f 6j6j 7f7f; ' +
                'f6r7 j7u6 f6r7 j7u6 f6r7 j7u6; ' +
                'asff6 ;ljj7 asffr6 ;ljju7 asff6r ;ljj7u ' +
                'a6r7 76u7 7767 76l6 667u6 6r76 67rl7 s6767j a6s7 ' +
                'r6as7 s6l7r s676r f67j6 j76l6 r6l76 a7667 667a 7677',

                // Example 18 - Words
                'Words':
                '6 horses, 7 days, 77 elephants, 67 pipes, 76 stones, ' +
                '776 eggs, 765 pages, 46 chapters, 78 questions, ' +
                '56 answers, 664 schools, 779 tricks, 68 pins, 687 bins',

                // Example 18 - Control
                'Control':
                '6 66 667 6677 66774 667745 7 76 768 7688 76885 768857 ' +
                '7 78 786 7896 78965 789657 6 68 687 6877 68776 687769',

                // Example 18 - Sentences
                'Sentences':
                "67 is a prime number but 76 isn't. 679 is a multiple of" +
                '97. 676 is one less than 677. 767 is a multiple of 59.',

                // Example 18 - Test
                'Test':
                '66 76 77 78 677 769 976 975 9756 568 485 9478 4588 465; ' +
                '6 horses, 7 days, 664 schools, 779 tricks, 56 answers; ' +
                "67 is a prime number but 76 isn't. 676 is one less than 677."
            }
        },

        // Example 19
        {
            'title': '30',

         
            'subunits': {
                // Example 19 - Basic
                'Basic':
                's3s3 l0l0 s3s3 l0l0 s3s3 l0l0; ' +
                '3s3s 0l0l 3s3s 0l0l 3s3s 0l0l; ' +
                'l3l3 s0s0 l3l3 s0s0 l3l3 s0s0; ' +
                '3l3l 0s0s 3l3l 0s0s 3l3l 0s0s; ' +
                's3r0 l0u3 s3r0 l0u3 s3r0 l0u3; ' +
                'asss3 ;lll0 asssr3 ;lllu0 asss3r ;lll0u ' +
                'a3r0 03u0 0030 03l3 330u3 3r03 30rl0 s3030l a3s0 ' +
                'q3ks0 s3l0n s303o w30l3 o03l3 m3l03 a0330 330a 0300',

                // Example 19 - Words
                'Words':
                '30 days, 300 lions, 303 buses, 367 numbers, 70 years, ' +
                '73 goals, 40 names, 83 bytes, 50 tables, 80 tables, ' +
                '35 cars, 307 sets, 360 mails, 630 books, 305 diaries',

                // Example 19 - Control
                'Control':
                '3 34 340 3400 34003 340035 0 03 038 0387 03870 038703 ' +
                '0 07 076 0763 07633 076330 3 30 309 3093 30930 309303',

                // Example 19 - Sentences
                'Sentences':
                'April has 30 days. There are 365 days in a year. ' +
                '390 is a multiple of 3. 37 is a prime number.',

                // Example 19 - Test
                'Test':
                '34 30 365 70 30 90 53 80 73 50 3580 3470 9074 7030 7037; ' +
                '30 days, 630 books, 80 tables, 83 bytes, 307 sets, ' +
                '35 cars; April has 30 days. There are 365 days in a year.'
            }
        },

        // Example 20
        {
            'title': '12',

            'subunits': {
                // Example 20 - Basic
                'Basic':
                'a1a1 q2q2 a1a1 q2q2 a1a1 q2q2; ' +
                '1a1a 2q2q 1a1a 2q2q 1a1a 2q2q; ' +
                'q1q1 a2a2 q1q1 a2a2 q1q1 a2a2; ' +
                '1q1q 2a2a 1q1q 2a2a 1q1q 2a2a; ' +
                'a1z2 p2q1 a1p2 p2u1 a1z2 q2p1; ' +
                'aaaa1 ;qqq2 aaaar1 ;p1qu2 a2ap1r ;1pq2u ' +
                'a1p2 21z2 2212 21q1 112u1 1r21 12rq2 a1212q a1a2 ' +
                'q1ka2 a1q2n a121o j12q1 o21q1 m1q21 a2112 112a 2122',

                // Example 20 - Words
                'Words':
                '12 months, 21 days, 52 weeks, 11 books, 22 notes, 2 pens, ' +
                '121 points, 132 trials, 82 tosses, 192 attempts, 21 pins, ' +
                '14 stories, 511 passengers, 122 bottles, 811 buildings',

                // Example 20 - Control
                'Control':
                '1 12 121 1218 12182 121822 2 27 271 2719 27192 271922 ' +
                '2 24 241 2415 24158 241581 1 18 182 1821 18211 182112',

                // Example 20 - Sentences
                'Sentences':
                'There are 12 months and 52 weeks in a year. Square of 11 ' +
                'is 121. 22 is one more than 21. 211 is a prime number.',

                // Example 20 - Test
                'Test':
                '12 21 52 11 22 2 121 132 82 192 21 14 511 122 811 917; ' +
                '12 months, 52 weeks, 121 points, 82 tosses, 192 attempts; ' +
                'There are 12 months and 52 weeks in a year. ' + 
                '211 is a prime number. Square of 11 is 121.'
            }
        },
        // Example 21
        {
            'title': 'passages',


            'subunits': {
                // Example 21 - Relativity
                'Paragraph 1':
                'Lightning has struck the rails on our railway embankment ' +
                'at two places A and B far distant from each other. I ' +
                'make the additional assertion that these two lightning ' +
                'flashes occurred simultaneously. If I ask you whether ' +
                'there is sense in this statement, you will answer my ' +
                'question with a decided "Yes." But if I now approach ' +
                'you with the request to explain to me the sense of the ' +
                'statement more precisely, you find after some ' +
                'consideration that the answer to this question is not ' +
                'so easy as it appears at first sight.',

                // Example 21 - Mathematical Mysteries
                'Paragraph 2':
                'The instructor was incredulous that this new student ' +
                'could add 100 terms so quickly and he assumed that answer ' +
                'would be wrong. However, when all the other students ' +
                'had finally finished their work and placed their ' +
                "slates upon the table, the instructor turned Gauss' " +
                'slate over and read the correct answer: 5050. How had ' +
                'Gauss done it? Gauss noticed that the first term, 1, ' +
                'and the last term, 100, added together to be 101. Then ' +
                'he realized that the second term, 2, and the next-to-last ' +
                'term, 99, also added together to be 101. In fact, if he ' +
                'kept adding pairs of terms in this manner, he would get ' +
                '50 pairs of sums, each sum equal to 101. Fifty multiplied ' +
                'by 101 is 5050!',

                // Example 21 - The Code Book
                'Paragraph 3':
                'The next morning, Rivest handed the paper to Adleman, ' +
                'who went through his usual process of trying to tear ' +
                'it apart, but this time he could find no faults. His ' +
                'only criticism was with the list of authors. "I told ' +
                'Ron to take my name off this paper," recalls Adleman. ' +
                '"I told him that it was his invention, not mine. But ' +
                'Ron refused and we got into a discussion about it. We ' +
                'agreed that I would go home and contemplate it for one ' +
                'night, and consider what I wanted to do. I went back the ' +
                'next day and suggested Ron that I be the third author. I ' +
                'recall thinking that this paper would be the least ' +
                'interesting paper that I will ever be on." Adleman could ' +
                'not have been more wrong. The system, dubbed RSA ' +
                '(Rivest, Shamir, Adleman) as opposed to ARS, went on to ' +
                'become the most influential cipher in modern cryptography.'
            }
        }
    ],

    // Label to be used to identify the main units
    'mainLabel': '6-7 split',

    'mainConfirmMessage':
        '',

    // The message to be displayed to the user to make sure he really
    // wants to move to the main units
    'alternateConfirmMessage':
        '',

    // Label to be used to identify the alternate units
    'alternateLabel': '5-6 split',

    // Example number where the alternate Example begins
    'alternateStart': 16,

    // 5-6 split style (6 with right hand)
    'alternate': [
    ]
}
