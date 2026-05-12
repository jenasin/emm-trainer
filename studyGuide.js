// Studijní podklad ke zkoušce – text dodaný uživatelem.
// Pro každou ze 66 originálních zkouškových otázek: detail (text), choices (3 varianty), correct.
// Aplikace tyto choices i detail použije přednostně před původními v data.js.

const STUDY_GUIDE = {
  t1: {
    0: {
      detail: `Modelování je proces zjednodušeného zachycení reálného systému pomocí modelu. Model neobsahuje všechny detaily reality, ale pouze ty podstatné vlastnosti, které jsou důležité pro řešený problém.
Model tedy slouží k tomu, abychom mohli realitu analyzovat, vysvětlovat, předvídat nebo optimalizovat.

Modely lze dělit podle formy vyjádření:

Fyzické modely – hmotné zmenšeniny nebo napodobeniny reálného objektu.
Příklad: model budovy, model mostu, maketa výrobní linky.

Grafické modely – popisují systém pomocí obrázku, grafu, schématu nebo diagramu.
Příklad: síťový graf projektu, graf dopravní sítě, organizační schéma.

Matematické modely – popisují systém pomocí rovnic, nerovnic, proměnných a funkcí.
Příklad: model LP pro maximalizaci zisku, dopravní úloha, plánování směn.

Simulační modely – napodobují chování systému v čase.
Příklad: simulace fronty zákazníků, simulace provozu farmy.`,
      choices: [
        'Proces zjednodušeného zachycení reálného systému pomocí modelu; podle formy fyzické, grafické, matematické a simulační modely.',
        'Detailní matematický popis reality, který musí obsahovat všechny prvky systému; dělí se na ekonomické a fyzické.',
        'Postup řešení nelineárních rovnic v ekonomii; modely se dělí na rovinné a prostorové.'
      ],
      correct: 0
    },
    1: {
      detail: `Systém je soubor prvků, které jsou mezi sebou propojeny vazbami a společně plní určitou funkci.
Systém má: prvky → vazby → vstupy → výstupy → cíl/chování.

Příklad – výrobní podnik: stroje, pracovníci, materiál, zakázky, finance, výrobky.

Význam systému v modelování: nejprve musíme určit, co do systému patří a co je okolí systému. Tím stanovíme hranice modelu. Bez vymezení systému nevíme, co máme modelovat.`,
      choices: [
        'Soubor prvků propojených vazbami, plnících určitou funkci. V modelování musíme vymezit, co do systému patří a co je okolí.',
        'Souhrn matematických rovnic popisujících jediný proces; v modelování slouží ke kontrole výpočtu.',
        'Posloupnost činností projektu od začátku do konce; vymezuje pouze časový průběh úlohy.'
      ],
      correct: 0
    },
    2: {
      detail: `Lineární programování je metoda matematického programování, která hledá nejlepší řešení při omezených zdrojích.
Typicky řeší otázku: Jak rozdělit omezené zdroje tak, aby byl výsledek co nejlepší?
Model LP má lineární účelovou funkci a lineární omezující podmínky.

Použití: maximalizace zisku, minimalizace nákladů, plánování výroby, dopravní úlohy, směšovací úlohy, plánování směn, optimalizace zdrojů.

Příklad: Firma vyrábí dva výrobky. Každý spotřebovává práci a materiál. Cílem je určit, kolik kusů vyrábět, aby byl zisk maximální.`,
      choices: [
        'Metoda matematického programování hledající nejlepší řešení při omezených zdrojích, s lineární účelovou funkcí a lineárními omezeními.',
        'Postup řešení nelineárních úloh s celočíselnými proměnnými; vždy hledá maximum účelové funkce.',
        'Stochastická metoda pro modelování fronty zákazníků; má pravděpodobnostní účelovou funkci.'
      ],
      correct: 0
    },
    3: {
      detail: `Model LP obsahuje:

Rozhodovací proměnné – vyjadřují neznámá rozhodnutí. Příklad: x1 = počet výrobků A.

Účelová funkce – cíl optimalizace (maximalizace nebo minimalizace).
   max z = 5x1 + 3x2

Omezující podmínky – omezené zdroje, technické požadavky nebo kapacity.
   2x1 + x2 ≤ 100
   x1 + 3x2 ≤ 90

Podmínky nezápornosti – x1 ≥ 0, x2 ≥ 0.`,
      choices: [
        'Rozhodovací proměnné, účelová funkce (max/min), omezující podmínky a podmínky nezápornosti.',
        'Vstupní data, simplexový algoritmus, výstupní matice a kontrolní suma řešení.',
        'Cenové vektory, kapacitní matice, podmínky stochasticity a náhodné veličiny.'
      ],
      correct: 0
    },
    4: {
      detail: `Existují dva základní způsoby:

a) Grafické řešení v prostoru proměnných / prostoru řešení
Hlavně tehdy, když model obsahuje 2 rozhodovací proměnné. Na osy zakreslíme x1, x2, omezení, najdeme přípustnou oblast a v ní optimální bod posuvem vrstevnice ÚF.

b) Grafické řešení v prostoru požadavků
Hlavně pro interpretaci simplexové metody a bázických řešení. Pracujeme s omezujícími podmínkami a zdroji; řešení = průsečík vybraných omezení. Pomáhá vysvětlit bázická, nebázická a degenerovaná řešení.`,
      choices: [
        'Grafické řešení v prostoru proměnných (pro 2 proměnné) a grafické řešení v prostoru požadavků (pro interpretaci simplexové metody).',
        'Pouze prostor proměnných – využitelný pro libovolný počet proměnných; alternativa neexistuje.',
        'Prostor řešení (pro 2 omezení) a Lagrangeova metoda (pro 2 proměnné).'
      ],
      correct: 0
    },
    5: {
      detail: `Model LP může mít tyto výsledky:

1) Jedno optimální řešení – přípustná oblast existuje, ÚF dosahuje extrému v jednom vrcholu.

2) Alternativní optimální řešení – optimálních řešení je více; ÚF je rovnoběžná s hranou přípustné oblasti.

3) Neomezené řešení – přípustná oblast není uzavřená ve směru zlepšování ÚF; hodnota může růst donekonečna.

4) Nepřípustné řešení – neexistuje bod splňující všechna omezení.`,
      choices: [
        'Jedno optimální řešení, alternativní optimální řešení, neomezené řešení, nepřípustné řešení.',
        'Jedno optimum, vícenásobné optimum, cyklické řešení a divergentní řešení.',
        'Pouze optimum nebo neexistence řešení – ostatní varianty v LP nemohou nastat.'
      ],
      correct: 0
    }
  },

  t2: {
    0: {
      detail: `Vlastnosti LP:
• Linearita – ÚF i omezení jsou lineární.
• Aditivita – celkový efekt je součtem dílčích (např. celkový zisk = součet zisků jednotlivých výrobků).
• Proporcionalita – spotřeba zdroje nebo zisk je přímo úměrný velikosti proměnné.
• Dělitelnost – proměnné mohou nabývat necelých hodnot (pokud model nevyžaduje celočíselnost).
• Determinističnost – koeficienty modelu jsou známé a pevně dané.
• Nezápornost proměnných – rozhodovací proměnné obvykle nemohou být záporné.`,
      choices: [
        'Linearita, aditivita, proporcionalita, dělitelnost, determinističnost a nezápornost proměnných.',
        'Nelinearita ÚF, multiplikativita omezení, stochasticita vstupů a celočíselnost.',
        'Diskrétnost proměnných, nezápornost ÚF, konvexnost omezení – jiné vlastnosti LP nemá.'
      ],
      correct: 0
    },
    1: {
      detail: `Přípustné řešení – splňuje všechny omezující podmínky a podmínky nezápornosti.

Optimální řešení – nejlepší přípustné řešení z hlediska ÚF (max nejvyšší hodnota, min nejnižší).

Alternativní optimální řešení – existuje více různých přípustných řešení se stejnou optimální hodnotou ÚF.

Suboptimální řešení – přípustné, ale ne nejlepší. Splňuje omezení, ale ÚF by se dala ještě zlepšit.`,
      choices: [
        'Přípustné splňuje omezení; optimální je nejlepší z přípustných; alternativní = více přípustných se stejnou hodnotou ÚF; suboptimální = přípustné, ale ne nejlepší.',
        'Přípustné = extrémní; optimální = nejlevnější; alternativní = degenerované; suboptimální = nepřípustné.',
        'Všechny pojmy jsou synonymní, liší se jen formálním označením v simplexu.'
      ],
      correct: 0
    },
    2: {
      detail: `Bázické řešení vzniká tak, že vybereme určitou množinu proměnných jako bázické a ostatní nastavíme na nulu.

V rovnicovém tvaru:
• počet bázických proměnných = počet rovnic
• počet nebázických proměnných = ostatní proměnné

Nebázické proměnné mají v daném bázickém řešení hodnotu 0. Bázické se dopočítají z rovnic.

Graficky bázické řešení odpovídá obvykle vrcholu přípustné oblasti, tedy průsečíku omezujících přímek.`,
      choices: [
        'Bázické vzniká výběrem množiny proměnných jako bázických (ostatní = 0); graficky odpovídá vrcholu přípustné oblasti.',
        'Bázické = všechny proměnné kladné; nebázické = některé proměnné záporné.',
        'Rozdíl existuje pouze v 2D modelech; v obecném LP se nedefinuje.'
      ],
      correct: 0
    },
    3: {
      detail: `Degenerované bázické řešení je takové, ve kterém má alespoň jedna bázická proměnná hodnotu 0.
Vzniká, když se ve stejném vrcholu protíná více omezení, než je nutné.

Graficky: ve stejném bodě se stýká více hranic omezení.

Degenerace může způsobit problém v simplexu, např. cyklení nebo nulové zlepšení ÚF v jednom kroku.`,
      choices: [
        'Bázické řešení, kde alespoň jedna bázická proměnná má hodnotu 0; graficky se ve stejném bodě stýká více hranic omezení.',
        'Řešení, kde ÚF nabývá nulové hodnoty; graficky průsečík s osami souřadnic.',
        'Stochastické řešení s pravděpodobností < 1; graficky se neznázorňuje.'
      ],
      correct: 0
    },
    4: {
      detail: `Základní věty LP:
1) Pokud má model LP optimální řešení, pak alespoň jedno optimální řešení leží ve vrcholu přípustné oblasti.
2) Vrcholy přípustné oblasti odpovídají bázickým přípustným řešením.
3) Simplexová metoda proto nemusí prohledávat všechny body, ale pouze vrcholy.

Důsledek: optimální řešení hledáme mezi bázickými přípustnými řešeními. To je základ simplexového algoritmu.`,
      choices: [
        'Optimální řešení leží ve vrcholu přípustné oblasti, vrcholy odpovídají bázickým řešením; simplex tedy prohledává jen vrcholy.',
        'Každý LP má jednoznačné řešení; optimum leží vždy uvnitř přípustné oblasti.',
        'Slouží k důkazu existence stochastických řešení; pro deterministické LP nemají význam.'
      ],
      correct: 0
    },
    5: {
      detail: `V prostoru požadavků můžeme dostat:

• Jedno optimální řešení – existuje právě jedno nejlepší bázické přípustné řešení.
• Alternativní optimum – více bázických nebo nebázických řešení má stejnou optimální hodnotu.
• Neomezené řešení – model umožňuje zlepšovat ÚF bez omezení.
• Nepřípustné řešení – neexistuje žádná kombinace proměnných, která by splnila požadavky.

Schematicky:
   jedno optimum:        *
   alternativní optimum: ----
   neomezené řešení:     → ∞
   nepřípustné řešení:   ∅`,
      choices: [
        'Jedno optimální řešení, alternativní optimum, neomezené řešení, nepřípustné řešení.',
        'Optimum, suboptimum, degenerace a cyklus – nic dalšího.',
        'Pouze tytéž 2 výsledky jako v prostoru řešení – optimum nebo nepřípustné.'
      ],
      correct: 0
    },
    6: {
      detail: `V prostoru požadavků určujeme přípustné řešení tak, že sledujeme, zda kombinace proměnných splňuje všechna omezení (zdrojové, technické, nezápornostní).

Optimální řešení vybereme podle hodnoty ÚF: v grafickém řešení posouváme přímku ÚF ve směru zlepšování, dokud se ještě dotýká přípustné oblasti. Poslední bod dotyku = optimum.`,
      choices: [
        'Přípustnost: kombinace proměnných splňuje všechna omezení. Optimum: posouváme přímku ÚF ve směru zlepšování, dokud se dotýká přípustné oblasti.',
        'Přípustnost: b leží na osách souřadnic; optimum: největší úhel mezi sloupci.',
        'Přípustnost: libovolná lineární kombinace sloupců; optimum: největší norma sloupce.'
      ],
      correct: 0
    }
  },

  t3: {
    0: {
      detail: `Simplexový algoritmus lze použít, pokud:

a) Model je ve vhodném lineárním tvaru
ÚF i omezení musí být lineární; simplex pracuje s lineárními rovnicemi a nerovnicemi.

b) Existuje výchozí bázické přípustné řešení
Simplex začíná v jednom vrcholu přípustné oblasti. Pokud nemáme výchozí bázické přípustné řešení, musíme jej najít (pomocné/umělé proměnné).

Význam: simplex postupuje od jednoho bázického přípustného řešení k dalšímu.`,
      choices: [
        'Model je ve vhodném lineárním tvaru a existuje výchozí bázické přípustné řešení (případně přes pomocné proměnné).',
        'Linearita ÚF a deterministika parametrů – bez nich simplex diverguje.',
        'Stochasticita vstupů a celočíselnost proměnných.'
      ],
      correct: 0
    },
    1: {
      detail: `Nerovnice převádíme na rovnice přidáním doplňkových nebo přebytečných proměnných.

Pro omezení typu ≤ přidáme doplňkovou proměnnou:
   2x1 + x2 ≤ 100   →   2x1 + x2 + s1 = 100,   s1 ≥ 0
s1 vyjadřuje nevyužitou kapacitu zdroje.

Pro omezení typu ≥ odečítáme přebytečnou proměnnou:
   2x1 + x2 ≥ 50    →   2x1 + x2 − s1 = 50,    s1 ≥ 0

Krok se provádí, aby model bylo možné zapsat do simplexové tabulky.`,
      choices: [
        'Pro ≤ přidat doplňkovou (slack), pro ≥ odečíst přebytečnou. Cíl: zápis modelu do simplexové tabulky.',
        'Všechna omezení vynásobit −1 a tím se nerovnice automaticky stanou rovnicemi.',
        'Převést pomocí absolutních hodnot; simplex pak řeší přímo nerovnice.'
      ],
      correct: 0
    },
    2: {
      detail: `Kanonický tvar vyžaduje, aby v každé rovnici byla jedna bázická proměnná s koeficientem 1 a v ostatních rovnicích s koeficientem 0.
Typický tvar:   xB = b − A_N · x_N.
Cílem je získat jednotkovou matici u bázických proměnných.

Příklad:
   x1 + 2x2 + s1 = 100
   3x1 +  x2 + s2 = 90
Pokud s1 a s2 tvoří jednotkovou matici, mohou být počáteční bází.

Význam: umožňuje přímo číst hodnoty bázických proměnných.`,
      choices: [
        'Zajistit jednotkovou matici u bázických proměnných (1 na pozici bázické, 0 jinde). Umožňuje přímo číst hodnoty bázických proměnných.',
        'Diagonalizovat matici A Gaussovou eliminací; b ponechat. Cíl: zjednodušit výpočet.',
        'Normovat všechny řádky tak, aby b = 1; přeuspořádat sloupce podle indexů.'
      ],
      correct: 0
    },
    3: {
      detail: `Strukturní proměnné – původní rozhodovací proměnné modelu.
Příklad: x1 = počet výrobků A, x2 = počet výrobků B.

Doplňkové proměnné – přidávají se k omezením typu ≤. Vyjadřují nevyužitou kapacitu.
s1 = nevyužitý počet hodin práce.

Přebytečné proměnné – odečítají se u omezení typu ≥. Vyjadřují překročení minimálního požadavku.

Umělé proměnné – přidávají se tehdy, když nelze jednoduše vytvořit počáteční bázi (metoda velkého M, dvoufázová metoda).`,
      choices: [
        'Strukturní (rozhodovací), doplňkové (slack u ≤), přebytečné (u ≥), umělé (pro vytvoření počáteční báze).',
        'Závislé a nezávislé; cenové a kapacitní – jiné proměnné v LP neexistují.',
        'Pouze strukturní a umělé; doplňkové a přebytečné nemají v LP smysl.'
      ],
      correct: 0
    },
    4: {
      detail: `Omezení typu ≤ – vyjadřuje maximální dostupnou kapacitu.
   2x1 + x2 ≤ 100 (např. maximálně 100 hodin práce).

Omezení typu ≥ – vyjadřuje minimální požadavek.
   x1 + x2 ≥ 50 (je nutné vyrobit alespoň 50 kusů).

Omezení typu = – vyjadřuje přesné splnění požadavku.
   x1 + x2 = 80 (přesně 80 jednotek směsi).

Podmínky nezápornosti:  x1, x2 ≥ 0.`,
      choices: [
        '≤ vyjadřuje maximální kapacitu, ≥ minimální požadavek, = přesné splnění; doplněno podmínkami nezápornosti.',
        'Rovnice, kvadrát a logaritmus – všechny musí platit najednou.',
        'Stochastické, deterministické a smíšené – každé pro jiný typ úlohy.'
      ],
      correct: 0
    },
    5: {
      detail: `Zjednodušená simplexová tabulka:

Báze | cB | b | x1 x2 ... xn
--------------------------------
xB1  | c1 | b1| a11 a12 ... a1n
xB2  | c2 | b2| a21 a22 ... a2n
...
--------------------------------
     |    | z | Δ1 Δ2 ... Δn

Tabulka poskytuje: aktuální bázi, hodnoty bázických proměnných, koeficienty omezení, hodnotu ÚF, kritéria optimality, info, která proměnná má vstoupit/vystoupit z báze.`,
      choices: [
        'Aktuální báze, hodnoty bázických proměnných, koeficienty omezení, hodnota ÚF, kritéria optimality, info, která proměnná vstoupí/vystoupí z báze.',
        'Pouze cenový vektor a vektor pravých stran; ostatní data se ukládají externě.',
        'Tabulka koeficientů původní matice A bez úprav, slouží jen ke zobrazení vstupů.'
      ],
      correct: 0
    },
    6: {
      detail: `Test optimality určuje, zda aktuální bázické přípustné řešení už je optimální.

U maximalizační úlohy se sledují redukované náklady / indexní řádek. Pokud žádná nebázická proměnná nemůže zlepšit ÚF, řešení je optimální.

Typicky pro max: všechny redukované náklady mají správné znaménko.

Pokud existuje proměnná, jejíž vstup do báze zlepší ÚF, vybereme ji jako vstupující.

Princip: najdi nebázickou proměnnou, která nejvíce zlepšuje účelovou funkci.`,
      choices: [
        'Sledují se redukované náklady. Pokud žádná nebázická proměnná nemůže zlepšit ÚF, je optimum; jinak vstupuje ta, která ji nejvíc zlepší.',
        'Pokud všechny b_i ≥ 0, je optimum; jinak vystoupí proměnná s nejmenší b_i.',
        'Pokud determinant báze = 1, je optimum; jinak měníme bázi náhodně.'
      ],
      correct: 0
    },
    7: {
      detail: `Test přípustnosti určuje, která bázická proměnná vystoupí z báze, aby nové řešení zůstalo přípustné.

Používá se podílový test:
   θ = bi / aik,    kde aik > 0.
Vybere se nejmenší nezáporný podíl.

Význam:
• určí maximální možný krok ve směru vstupující proměnné,
• zabrání porušení nezápornosti bázických proměnných.

Proměnná s nejmenším podílem vystupuje z báze.`,
      choices: [
        'Podílový test θ = bi/aik (kde aik > 0). Nejmenší nezáporný podíl určuje vystupující bázickou proměnnou, čímž se zachová nezápornost.',
        'Součet všech b_i; vystoupí proměnná, jejíž součet je menší než průměr.',
        'Maximem c_j/a_ij určíme vystupující; znaménka a_ij se neuvažují.'
      ],
      correct: 0
    }
  },

  t4: {
    0: {
      detail: `Bázické proměnné jsou uvedeny ve sloupci Báze. Jejich hodnoty čteme ze sloupce pravých stran b.
Nebázické proměnné nejsou ve sloupci Báze. Jejich hodnota je v daném bázickém řešení rovna nule.

Příklad:
   Báze | b
   ---------
   x3   | 20
   x1   | 10
   x5   | 0
Pak: x3 = 20, x1 = 10, x5 = 0; ostatní nebázické = 0.

Pokud je bázická proměnná nulová, jde o degenerované řešení.`,
      choices: [
        'Bázické jsou ve sloupci Báze; hodnoty čteme ze sloupce pravých stran b. Nebázické nejsou v Bázi a mají hodnotu 0.',
        'Bázické jsou v posledním řádku tabulky; nebázické v prvním sloupci. Hodnoty = velikost koeficientu.',
        'Identifikace z tabulky není možná; nutno vyřešit původní soustavu znovu.'
      ],
      correct: 0
    },
    1: {
      detail: `Matice báze B je matice složená ze sloupců původní matice omezení, které odpovídají bázickým proměnným.
Má-li model tvar Ax = b, pak báze obsahuje tolik sloupců, kolik je rovnic.

Inverzní matice báze B⁻¹ slouží k výpočtu bázického řešení:
   xB = B⁻¹ · b

Význam: určení hodnot bázických proměnných, výpočet simplexových koeficientů, postoptimalizační analýza, výpočet duálních cen.`,
      choices: [
        'B je matice složená ze sloupců omezení odpovídajících bázickým proměnným. B⁻¹ slouží k výpočtu xB = B⁻¹·b a postoptimalizační analýze.',
        'B = celá matice A; B⁻¹ = její transpozice. Slouží jen k validaci dat.',
        'B je vektor cen, B⁻¹ vektor pravých stran; význam pouze teoretický.'
      ],
      correct: 0
    },
    2: {
      detail: `Duální ceny (stínové ceny) vyjadřují, jak se změní optimální hodnota ÚF při jednotkové změně pravé strany omezení.

Příklad: duální cena práce = 5 znamená, že pokud zvýšíme kapacitu práce o 1 jednotku, optimální zisk se zvýší o 5 jednotek, pokud zůstane zachována původní báze.

Vzorec:   y^T = cB^T · B⁻¹
kde cB = koeficienty ÚF u bázických proměnných, B⁻¹ = inverzní matice báze.`,
      choices: [
        'Stínové ceny – udávají, jak se změní ÚF při jednotkové změně pravé strany; počítají se jako y^T = cB^T · B⁻¹.',
        'y = b · c; udává poměr nákladů a výnosů. Najdeme je v záhlaví tabulky.',
        'Náhodné koeficienty pro stochastické varianty modelu; nesouvisí s ÚF.'
      ],
      correct: 0
    },
    3: {
      detail: `Vektor bázického řešení: xN = 0, xB = B⁻¹ · b.

Příklad: x1 = 10, x2 = 0, x3 = 20, x4 = 0. Bázické proměnné mohou být x1, x3; nebázické x2, x4.

Obecné řešení vyjadřuje bázické proměnné jako funkce nebázických:
   xB = B⁻¹ · b − B⁻¹ · N · xN
Nebázické proměnné mohou nabývat hodnot a bázické se podle nich dopočítají.`,
      choices: [
        'Bázické: xN = 0, xB = B⁻¹·b. Obecné: xB = B⁻¹·b − B⁻¹·N·xN – bázické se dopočítají z nebázických.',
        'Oba vektory mají stejný rozměr i obsah; rozlišení je čistě formální.',
        'Bázický je řešení duálu, obecný je řešení primáru.'
      ],
      correct: 0
    },
    4: {
      detail: `Dualita znamená, že ke každé úloze LP existuje sdružená duální úloha. Původní úloha = primární.

Příklad:
• primární úloha řeší maximalizaci zisku při omezených zdrojích,
• duální úloha řeší ocenění těchto omezených zdrojů.

Dualita zjednodušuje řešení např. tehdy, když má primární mnoho proměnných, ale málo omezení, zatímco duální je menší a jednodušší.`,
      choices: [
        'Ke každé LP existuje sdružená duální úloha. Pokud má primár hodně proměnných a málo omezení, je výhodnější řešit duál.',
        'Dualita je shoda dvou stejných LP modelů; výhoda žádná, slouží jen ke kontrole.',
        'Dualita znamená rozdělení modelu na 2 fáze; výhoda – paralelizace výpočtu.'
      ],
      correct: 0
    },
    5: {
      detail: `Typicky platí:
• primární max úloha ↔ duální min úloha
• proměnné primární úlohy ↔ omezení duální úlohy
• omezení primární úlohy ↔ proměnné duální úlohy
• pravé strany primární úlohy ↔ koeficienty ÚF duální úlohy
• koeficienty ÚF primární úlohy ↔ pravé strany duální úlohy
• matice omezení A ↔ transponovaná matice A^T

Příklad:
Primární:   max z = c^T x,   Ax ≤ b,   x ≥ 0
Duální:     min w = b^T y,   A^T y ≥ c, y ≥ 0`,
      choices: [
        'Primární max ↔ duální min; proměnné ↔ omezení; pravé strany ↔ ceny ÚF; matice A ↔ A^T.',
        'Vše stejné, jen se prohodí znaménka koeficientů c.',
        'Cenové koeficienty jdou na diagonálu, omezení do mimodiagonálních prvků.'
      ],
      correct: 0
    },
    6: {
      detail: `Základní věta o dualitě říká:
Pokud má primární úloha optimální řešení, pak má optimální řešení i duální úloha a hodnoty jejich účelových funkcí jsou stejné.
   z* = w*

Význam:
• můžeme ověřit optimalitu řešení,
• můžeme interpretovat ceny zdrojů,
• můžeme řešit jednodušší z dvojice úloh,
• umožňuje postoptimalizační analýzu.`,
      choices: [
        'Má-li primár optimum, má i duál a jejich optimální hodnoty ÚF jsou stejné (z* = w*). Umožňuje ověření optimality a postoptimalizaci.',
        'Primár má vždy přípustné řešení, i pokud duál ne, a naopak; hodnoty ÚF jsou opačné.',
        'Duál existuje jen pro maximalizační úlohy; věta určuje rychlost konvergence simplexu.'
      ],
      correct: 0
    }
  },

  t5: {
    0: {
      detail: `Nebázické řešení vzniká tak, že některé nebázické proměnné necháme nabývat kladných hodnot a sledujeme změnu bázických.

Obecný vztah:   xB = B⁻¹·b − B⁻¹·N·xN

Pokud zvyšujeme xj, ostatní nebázické ponecháme 0. Maximální hodnota xj se určí tak, aby všechny bázické proměnné zůstaly nezáporné – podílový test:
   xj ≤ xi / aij   pro příslušné kladné koeficienty.

O optimálnosti: nebázická řešení obecně nemusí být optimální, ale pokud se ÚF nezhoršuje, mohou být.`,
      choices: [
        'Necháme nebázickou xj > 0, ostatní zůstanou nulové; max xj určí podílový test, aby všechny bázické zůstaly nezáporné.',
        'Nebázickou proměnnou položíme rovnou kapacitě omezení; vždy zhoršuje ÚF.',
        'Nebázická řešení jsou vždy optimální; jejich hodnoty se odečtou přímo z tabulky.'
      ],
      correct: 0
    },
    1: {
      detail: `Nový proces = přidání nové proměnné do modelu. Postup:

1) Určíme sloupec spotřeby zdrojů nové proměnné: aj.
2) Přepočteme jej vzhledem k aktuální bázi: B⁻¹ · aj.
3) Určíme redukovaný náklad: Δj = cj − y^T · aj,   kde y^T = cB^T · B⁻¹.
4) Pokud nová proměnná zlepšuje ÚF, může vstoupit do báze.
5) Změny bázických proměnných:   xB = B⁻¹·b − (B⁻¹·aj) · xj.
6) Změna ÚF je dána redukovaným nákladem nové proměnné.`,
      choices: [
        'Spočítat aj a B⁻¹·aj; určit redukovaný náklad Δj = cj − y^T·aj. Pokud Δj zlepšuje ÚF, proměnná vstoupí do báze.',
        'Sečíst c_j a a_ij; je-li součet kladný, proces je výhodný.',
        'Nový proces se přidá vždy a jeho vliv se ignoruje až do konce výpočtu.'
      ],
      correct: 0
    },
    2: {
      detail: `Změna kapacity znamená změnu jedné složky vektoru pravých stran b.

Nový vektor:        b' = b + Δb
Nové bázické řešení:  xB' = B⁻¹ · b'
Změna ÚF:           z' = z + y^T · Δb,    kde y jsou duální ceny.

Důležité: ověřit, zda xB' ≥ 0. Pokud ano, báze stabilní; pokud ne, je nutné znovu optimalizovat.`,
      choices: [
        'xB\' = B⁻¹·b\'. Pokud nezáporné, báze stabilní a ÚF se mění o y^T·Δb. Jinak nutná reoptimalizace.',
        'Nové b se prostě dosadí do původní tabulky; ÚF se nemění.',
        'Změna pravé strany vyžaduje vždy úplné přepočítání simplexu od začátku.'
      ],
      correct: 0
    },
    3: {
      detail: `Analýza stability báze určuje, v jakém intervalu se mohou měnit kapacity zdrojů, aniž by se změnila optimální báze.

Vztah:   xB = B⁻¹ · b
Při změně:   xB' = B⁻¹ · (b + Δb)
Podmínka stability:   xB' ≥ 0

Význam: zjistíme, jak moc lze změnit kapacity zdrojů bez nutnosti hledat nové optimum; manažerská interpretace citlivosti řešení.`,
      choices: [
        'Určuje rozsah pravých stran, ve kterém B⁻¹·(b+Δb) ≥ 0 (báze stabilní); manažerská interpretace citlivosti řešení.',
        'Určuje rozsah cenového koeficientu, při kterém ÚF zůstane stejná.',
        'Měří počet iterací simplexu před změnou báze.'
      ],
      correct: 0
    },
    4: {
      detail: `Cílem je zjistit, jak se mohou měnit koeficienty ÚF, aniž by se změnila optimální báze.

Nebázická proměnná
Sledujeme její redukovaný náklad – nesmí se stát, že by vstup proměnné do báze zlepšil ÚF. Redukovaný náklad musí zůstat ve správném znaménku.

Bázická proměnná
Změna jejího cenového koeficientu ovlivňuje duální ceny:   y^T = cB^T · B⁻¹.
Potom je nutné znovu ověřit redukované náklady všech nebázických proměnných.

Význam: zjistíme citlivost řešení na změnu zisku, ceny nebo nákladů.`,
      choices: [
        'U nebázické stačí, aby redukovaný náklad zůstal ve správném znaménku; u bázické změna ovlivní cB i y, nutno ověřit všechny redukované náklady.',
        'Pro obě skupiny stejně – zachovat součet c_j konstantní.',
        'Pro bázické změna nemá vliv; pro nebázické vyžaduje úplnou reoptimalizaci.'
      ],
      correct: 0
    },
    5: {
      detail: `Úloha o výrobním programu
Cíl: kolik vyrábět výrobků, aby byl maximalizován zisk / minimalizovány náklady.
Komponenty: proměnné = množství výrobků; omezení = kapacity zdrojů, práce, materiál, stroje; ÚF = zisk nebo náklady.
Příklad: kolik vyrábět A a B při omezeném materiálu a pracovní době.

Směšovací úloha
Cíl: jak smíchat suroviny, aby směs splňovala požadavky a měla minimální náklady.
Komponenty: proměnné = množství složek; omezení = obsah živin, kvalita, receptura; ÚF = minimalizace nákladů.
Příklad: sestavení krmné směsi s požadovaným obsahem bílkovin při minimální ceně.`,
      choices: [
        'Výrobní program: max zisk při kapacitních omezeních (materiál, práce, stroje). Směšovací: min náklady směsi splňující požadavky na obsah/kvalitu.',
        'Výrobní program: min počet výrobků; směšovací: max objem směsi bez omezení.',
        'Obě úlohy jsou totožné, liší se jen názvem.'
      ],
      correct: 0
    },
    6: {
      detail: `Úloha o řezných plánech
Cíl: jak řezat materiál, aby vznikl požadovaný počet dílů a odpad byl minimální.
Komponenty: proměnné = počet použití jednotlivých řezných plánů; omezení = požadovaný počet dílů; ÚF = min odpad nebo počet kusů materiálu.
Příklad: řezání tyčí, plechů, rolí papíru.

Plánování směn
Cíl: počet pracovníků v jednotlivých směnách, aby byla pokryta potřeba a náklady byly minimální.
Komponenty: proměnné = počet pracovníků začínajících v určité směně; omezení = min počet pracovníků v čase; ÚF = min mzdové náklady.
Příklad: plánování směn v nemocnici, call centru, skladu nebo výrobě.`,
      choices: [
        'Řezné plány: min odpad/počet kusů materiálu při splnění požadovaného počtu dílů. Plánování směn: min mzdové náklady při pokrytí poptávky po pracovní síle.',
        'Řezné plány: max velikost odpadu; plánování směn: max počet pracovníků na směnu.',
        'Obě úlohy řeší dopravu materiálu mezi stanovišti.'
      ],
      correct: 0
    }
  },

  t8: {
    0: {
      detail: `Jednostupňová dopravní úloha řeší přepravu zboží od dodavatelů k odběratelům tak, aby byly splněny kapacity dodavatelů a požadavky odběratelů při minimálních dopravních nákladech.

Komponenty: dodavatelé, odběratelé, kapacity dodavatelů, požadavky odběratelů, jednotkové přepravní náklady, přepravovaná množství.

Rozhodovací proměnná:   xij = množství přepravené od dodavatele i k odběrateli j.
Účelová funkce: minimalizace celkových přepravních nákladů.`,
      choices: [
        'Přeprava od m dodavatelů k n odběratelům při minimálních dopravních nákladech; xij = přepravené množství, min Σ c_ij·x_ij.',
        'Pouze 1 dodavatel a n spotřebitelů; sazby c_j; bilance jen pro spotřebitele.',
        'Síťová úloha bez sazeb; cílem je maximalizovat tok zdrojem.'
      ],
      correct: 0
    },
    1: {
      detail: `Dopravní úloha je vyvážená, pokud celková nabídka dodavatelů se rovná celkové poptávce odběratelů:
   součet kapacit = součet požadavků.

• Pokud nabídka převyšuje poptávku, přidá se fiktivní odběratel.
• Pokud poptávka převyšuje nabídku, přidá se fiktivní dodavatel.

Dopravní náklady k fiktivnímu řádku/sloupci bývají obvykle nulové nebo penalizační podle interpretace.`,
      choices: [
        'Σ kapacit = Σ požadavků. Při převisu nabídky přidáme fiktivního odběratele; při převisu poptávky fiktivního dodavatele (sazby 0 nebo penalizační).',
        'Σa_i ≥ Σb_j vždy; jinak úloha nemá řešení a nelze ji upravit.',
        'Vyváženost znamená, že všechny sazby c_ij jsou stejné.'
      ],
      correct: 0
    },
    2: {
      detail: `Metoda severozápadního rohu slouží k nalezení počátečního přípustného řešení dopravní úlohy.

Postup:
1) Začneme v levém horním rohu tabulky.
2) Přidělíme maximum možné přepravy.
3) Vyčerpáme buď kapacitu řádku, nebo požadavek sloupce.
4) Posuneme se doprava nebo dolů.
5) Pokračujeme, dokud nejsou splněny všechny požadavky a kapacity.

Výhoda: jednoduchá a rychlá.
Nevýhoda: nebere v úvahu náklady; výsledné řešení často nebývá dobré.`,
      choices: [
        'Začínáme v levém horním rohu, přidělíme max možné přepravy, vyčerpáme řádek/sloupec a posuneme se dolů/doprava. Jednoduchá, ale ignoruje sazby.',
        'Vybíráme buňku s nejvyšší sazbou; dává optimální řešení.',
        'Náhodné plnění tabulky; používá se jen ke kontrole.'
      ],
      correct: 0
    },
    3: {
      detail: `Indexová metoda hledá počáteční přípustné řešení a bere v úvahu přepravní náklady.

Princip:
1) Vyhledávají se pole s nejnižšími náklady.
2) Do těchto polí se přiděluje co největší možné množství.
3) Postup se opakuje až do splnění všech kapacit a požadavků.

Výhoda: obvykle lepší výsledek než severozápadní roh.
Nevýhoda: nemusí dát optimální řešení.`,
      choices: [
        'Postupně obsazujeme pole s nejnižšími náklady max možným množstvím. Lepší než severozápadní roh, ale nemusí dát optimum.',
        'Náhodný výběr buněk podle indexu řádku; kvalita je optimální.',
        'Vychází z duálních cen a vždy dává optimum.'
      ],
      correct: 0
    },
    4: {
      detail: `Vogelova metoda hledá počáteční řešení pomocí penalizací.

Postup:
1) Pro každý řádek a sloupec určíme rozdíl mezi dvěma nejnižšími náklady.
2) Vybereme řádek nebo sloupec s nejvyšší penalizací.
3) V něm zvolíme pole s nejnižšími náklady.
4) Přidělíme maximální možné množství.
5) Aktualizujeme tabulku a pokračujeme.

Výhoda: většinou poskytuje velmi dobré počáteční řešení.
Nevýhoda: je pracnější než severozápadní roh, stále nemusí být optimální.`,
      choices: [
        'Pro každý řádek/sloupec penalizace = rozdíl 2 nejnižších nákladů. Obsazujeme nejlevnější buňku v řádku/sloupci s největší penalizací – velmi dobré počáteční řešení.',
        'Náhodný výběr buněk; kvalita stejná jako severozápadní roh.',
        'Maximalizace průměrné sazby v řádku; suboptimální výsledek.'
      ],
      correct: 0
    },
    5: {
      detail: `Degenerace nastává, když počet obsazených polí je menší než m + n − 1, kde m = počet dodavatelů, n = počet odběratelů. Vzniká například při současném vyčerpání řádku i sloupce.

Odstranění degenerace: do vhodného prázdného pole se vloží nulová nebo velmi malá přeprava ε, aby počet obsazených polí byl m + n − 1 a bylo možné pokračovat v optimalizační metodě.`,
      choices: [
        'Počet obsazených polí < m+n−1; vzniká při souběžném vyčerpání řádku i sloupce. Odstraní se vložením nulové (ε) přepravy do vhodného pole.',
        'Žádné obsazené pole; vzniká chybou výpočtu a nelze odstranit.',
        'Příliš mnoho obsazených polí; přebytečná se vymažou.'
      ],
      correct: 0
    }
  },

  t9: {
    0: {
      detail: `Metoda MODI slouží k testování optimality a zlepšování řešení dopravní úlohy.

Princip:
1) Máme počáteční přípustné řešení s m+n−1 obsazenými poli.
2) Pro obsazená pole určujeme potenciály ui a vj:   ui + vj = cij.
3) Pro neobsazená pole vypočítáme:   Δij = cij − ui − vj.
4) Pokud jsou všechny Δij nezáporné u minimalizační úlohy, řešení je optimální.
5) Pokud existuje záporné Δij, vybereme nejvíce záporné pole a zlepšíme řešení pomocí uzavřeného obvodu.`,
      choices: [
        'Pro obsazená pole spočítáme ui, vj (ui+vj=cij); pro neobsazená Δij = cij−ui−vj. Všechna Δij ≥ 0 (min) ⇒ optimum.',
        'Hledá nejvyšší sazbu v tabulce a obsadí ji; jednoduchá heuristika bez testu optimality.',
        'Spočítá průměr sazeb; pokud je vyšší než počáteční odhad, opakuje se výpočet.'
      ],
      correct: 0
    },
    1: {
      detail: `Danzigův uzavřený obvod je uzavřená cesta v dopravní tabulce, která začíná v neobsazeném poli a dále prochází obsazenými poli ve vodorovném a svislém směru. Používá se k úpravě řešení.

Na obvodu se střídají znaménka plus a minus (+, −, +, −). Do plusových polí přidáváme množství, z minusových polí odebíráme. Velikost přesunu je dána nejmenší hodnotou v minusových polích.

Význam: umožňuje změnit dopravní plán a snížit celkové náklady.`,
      choices: [
        'Uzavřená cesta od neobsazeného pole přes obsazená vodorovně/svisle, se střídavými znaménky +/−. Umožňuje upravit plán a snížit náklady.',
        'Otevřená cesta od dodavatele ke spotřebiteli; slouží jen k vizualizaci řešení.',
        'Algoritmus pro nalezení nejkratší cesty v dopravní síti; nesouvisí se simplexem.'
      ],
      correct: 0
    },
    2: {
      detail: `Perspektivita dopravní trasy vyjadřuje, zda by bylo výhodné zařadit nevyužitou trasu do dopravního plánu. V metodě MODI se zjišťuje pomocí hodnot Δij.

U minimalizační úlohy:
• Δij < 0 → trasa je perspektivní, její zařazení sníží náklady,
• Δij = 0 → alternativní optimální řešení,
• Δij > 0 → trasa není perspektivní.

Analýza perspektivity se provádí pro všechna neobsazená pole.`,
      choices: [
        'Δij < 0 → trasa je perspektivní (sníží náklady); Δij = 0 → alternativní optimum; Δij > 0 → není perspektivní.',
        'Trasa s největší vzdáleností v km; analyzuje se geometricky.',
        'Trasa s nejvyšší sazbou v tabulce; analyzuje se vyloučením z báze.'
      ],
      correct: 0
    },
    3: {
      detail: `Propustnost určuje, jaké maximální množství lze přes novou trasu přepravit, aniž by došlo k porušení přípustnosti řešení. Stanovuje se pomocí uzavřeného obvodu.

Postup:
1) Vybereme neobsazenou trasu.
2) Sestavíme Danzigův uzavřený obvod.
3) Označíme plusová a minusová pole.
4) Maximální propustnost je nejmenší hodnota v minusových polích.

   propustnost = min hodnota v minusových polích.`,
      choices: [
        'Maximální množství přes novou trasu bez porušení přípustnosti; určí se z Danzigova obvodu jako min hodnot v minusových polích.',
        'Maximální rychlost dopravy v jednotkách za hodinu; měří se externě.',
        'Propustnost = počet obsazených polí v tabulce.'
      ],
      correct: 0
    }
  },

  t10: {
    0: {
      detail: `Přiřazovací úloha řeší optimální přiřazení objektů k úkolům.
Typicky: pracovníci → úkoly, stroje → zakázky, studenti → témata, vozidla → trasy.

Každý objekt má být přiřazen právě jednomu úkolu a každý úkol obsazen právě jedním objektem.

Komponenty: objekty, úkoly, náklady nebo výnosy přiřazení, rozhodovací proměnné xij.

Proměnná:  xij = 1, pokud objekt i přiřadíme k úkolu j;  xij = 0 jinak.`,
      choices: [
        'Optimální 1:1 přiřazení objektů (pracovníci, stroje, …) k úkolům; xij ∈ {0,1}, každý objekt právě 1 úkol a každý úkol právě 1 objekt.',
        'Síťová úloha s mnoha zdroji a jedním cílem; proměnné jsou spojité.',
        'Maximalizace toku v síti s kapacitami; vždy max množství průchodu.'
      ],
      correct: 0
    },
    1: {
      detail: `Maďarská metoda slouží k řešení přiřazovací úlohy.

Princip pro minimalizaci:
1) V každém řádku odečteme nejmenší prvek.
2) V každém sloupci odečteme nejmenší prvek.
3) Pokusíme se pokrýt všechny nuly minimálním počtem čar.
4) Pokud počet čar odpovídá velikosti matice, lze vytvořit optimální přiřazení.
5) Pokud ne, upravíme matici pomocí nejmenšího nepokrytého prvku.
6) Pokračujeme, dokud nelze najít úplné optimální přiřazení.

Význam: najde optimální přiřazení s minimálními náklady (max efektem).`,
      choices: [
        'Redukce řádků a sloupců, pokrytí nul minimálním počtem čar; pokud nelze, úprava maticí o nejmenší nepokrytý prvek a opakování.',
        'Heuristika pro TSP typu nejbližší soused.',
        'Postoptimalizační metoda pro simplex; nesouvisí s přiřazením.'
      ],
      correct: 0
    },
    2: {
      detail: `Okružní dopravní problém řeší nalezení trasy, která navštíví daná místa a vrátí se zpět do výchozího bodu.

Typický příklad: obchodní cestující, rozvoz zboží, svoz odpadu, servisní trasy.

Komponenty: uzly = místa/zákazníci, hrany = možné cesty, vzdálenosti/náklady, trasa/okruh.

Cíl: minimalizovat celkovou délku nebo náklady trasy.`,
      choices: [
        'Nalezení trasy, která navštíví daná místa a vrátí se do výchozího bodu při min délce/nákladech.',
        'Doprava materiálu po kruhové trati s konstantní rychlostí, bez optimalizace.',
        'Hledání nejkratší cesty mezi dvěma uzly.'
      ],
      correct: 0
    },
    3: {
      detail: `Základní typy okružních úloh:

• Problém obchodního cestujícího – jedno vozidlo navštíví všechna místa právě jednou a vrátí se.
• Rozvozní problém – jedno nebo více vozidel rozváží zboží zákazníkům.
• Svozní problém – vozidlo sbírá materiál z více míst (odpad, mléko).
• Kapacitní okružní problém – vozidla mají omezenou kapacitu.
• Okružní problém s časovými okny – zákazníci musí být obslouženi v daných intervalech.`,
      choices: [
        'Obchodní cestující, rozvozní, svozní, kapacitní okružní problém a okružní problém s časovými okny.',
        'Lineární × nelineární, deterministický × stochastický – jiné typy neexistují.',
        'Pouze TSP a jeho zrcadlový obraz se stejnou matici vzdáleností.'
      ],
      correct: 0
    },
    4: {
      detail: `Metoda nejbližšího souseda se používá pro rychlé nalezení přibližného řešení okružního problému.

Postup:
1) Vybereme výchozí uzel.
2) Přejdeme do nejbližšího dosud nenavštíveného uzlu.
3) Pokračujeme, dokud nejsou navštíveny všechny uzly.
4) Vrátíme se do výchozího bodu.

Výhoda: jednoduchá a rychlá.
Nevýhoda: nemusí dát optimální řešení, může se na konci výrazně zhoršit.`,
      choices: [
        'Z výchozího uzlu jdi do nejbližšího nenavštíveného, opakuj, vrať se domů. Rychlá, ale na konci se může výrazně zhoršit.',
        'Exaktní metoda pro TSP; vždy najde optimum.',
        'Algoritmus na minimální kostru; vybírá hrany s nejmenší vahou.'
      ],
      correct: 0
    },
    5: {
      detail: `Modifikovaná Vogelova metoda se používá jako aproximační metoda pro sestavení okružní trasy.

Princip:
1) Pracujeme s maticí vzdáleností nebo nákladů.
2) Pro řádky a sloupce určujeme penalizace.
3) Vybíráme nejvýhodnější spojení.
4) Hlídáme, aby nevznikl předčasný uzavřený cyklus.
5) Každý uzel musí mít správný počet vstupů a výstupů.
6) Výsledkem je okružní trasa.

Význam: umožňuje získat relativně dobré počáteční řešení okružního problému.`,
      choices: [
        'Penalizace na řádcích/sloupcích, výběr nejvýhodnějšího spojení s hlídáním, aby nevznikl předčasný cyklus a každý uzel měl správné vstupy/výstupy.',
        'Stejný postup jako u dopravní úlohy, bez jakýchkoli úprav.',
        'Náhodná volba hran; přijatelná jen pro malé instance úlohy.'
      ],
      correct: 0
    },
    6: {
      detail: `Mayerova metoda se používá pro řešení okružních dopravních problémů, především jako heuristická metoda pro zkracování nebo zlepšování trasy.

Princip: postupně se vytváří nebo upravuje okružní trasa tak, aby se snížila její celková délka.

Využití: rozvozní trasy, svozové trasy, obchodní cestující, optimalizace pořadí návštěv.

Je to aproximační metoda, tedy nemusí vždy najít přesné optimum, ale poskytuje prakticky použitelné řešení.`,
      choices: [
        'Heuristika, která postupně vytváří nebo upravuje okružní trasu tak, aby se snížila její celková délka. Aproximační – nemusí dát optimum.',
        'Eliminační metoda – odstraňuje uzly s nejvyšší vzdáleností.',
        'Metoda dělení a slučování; vyžaduje předem známé klastry uzlů.'
      ],
      correct: 0
    }
  },

  t11: {
    0: {
      detail: `Graf je matematická struktura složená z uzlů a hran.
   G = (V, E),  V = množina vrcholů/uzlů, E = množina hran.

Neorientovaný graf – hrany nemají směr (A — B).
Příklad: silnice mezi městy, kde lze jet oběma směry.

Orientovaný graf – hrany mají směr (A → B).
Příklad: jednosměrné ulice, tok materiálu, návaznost činností.`,
      choices: [
        'G = (V, E); neorientovaný má hrany bez směru (A — B), orientovaný má hrany se směrem (A → B).',
        'Pouze orientované struktury s konstantním ohodnocením hran.',
        'Pouze diagramy se symetrickou maticí sousednosti.'
      ],
      correct: 0
    },
    1: {
      detail: `Sled – posloupnost vrcholů a hran, kde každá hrana spojuje sousední vrcholy. Hrany i vrcholy se mohou opakovat.
Tah – sled, ve kterém se neopakují hrany. Vrcholy se opakovat mohou.
Cesta – tah, ve kterém se neopakují ani vrcholy.
Cyklus – cesta, která začíná a končí ve stejném vrcholu.

Jednoduše:
   sled   = může opakovat hrany i vrcholy
   tah    = neopakuje hrany
   cesta  = neopakuje vrcholy
   cyklus = uzavřená cesta`,
      choices: [
        'Sled: může opakovat hrany i vrcholy. Tah: neopakuje hrany. Cesta: neopakuje vrcholy. Cyklus: uzavřená cesta.',
        'Všechny pojmy jsou synonymní, liší se jen délkou.',
        'Sled = orientovaný; tah = neorientovaný; cesta = nejkratší; cyklus = nejdelší.'
      ],
      correct: 0
    },
    2: {
      detail: `Neinformované prohledávání nevyužívá žádnou dodatečnou informaci o tom, kde je cíl. Prohledává graf podle obecného pravidla.

Příklad – prohledávání do šířky BFS:
1) Začneme ve výchozím uzlu.
2) Nejprve navštívíme všechny sousedy.
3) Potom sousedy sousedů.
4) Pokračujeme po vrstvách.

Využití: hledání nejkratší cesty v neohodnoceném grafu, procházení stavového prostoru.`,
      choices: [
        'Nepoužívá heuristiku. BFS: začni ve startu, navštiv sousedy, pak sousedy sousedů (po vrstvách).',
        'Vždy s heuristikou, např. Manhattanovou vzdáleností od cíle.',
        'Náhodné procházení uzlů; nelze garantovat nalezení cíle.'
      ],
      correct: 0
    },
    3: {
      detail: `Informované prohledávání používá dodatečnou informaci, tzv. heuristiku, která odhaduje, jak blízko je daný uzel k cíli.

Příklad – algoritmus A*:
   f(n) = g(n) + h(n)
kde g(n) = skutečná cena cesty od startu k uzlu n, h(n) = odhad ceny z uzlu n do cíle.

Význam: hledání cesty v mapách, navigace, plánování pohybu, optimalizace tras.`,
      choices: [
        'Heuristika h(n) odhaduje vzdálenost k cíli; A* používá f(n) = g(n) + h(n) – součet skutečné ceny a odhadu.',
        'Stejné jako BFS, jen v jiném názvosloví.',
        'Algoritmus pro řešení LP; v teorii grafů se nepoužívá.'
      ],
      correct: 0
    },
    4: {
      detail: `Minimální kostra je podgraf, který:
• spojuje všechny vrcholy,
• neobsahuje cyklus,
• má minimální součet délek/cen hran.

Použití: návrh sítí, telekomunikace, vodovody, elektrické rozvody, dopravní propojení.

Metody řešení:
• Kruskalův algoritmus – řadíme hrany podle ceny a postupně přidáváme nejlevnější, pokud nevytvoří cyklus.
• Primův algoritmus – začneme v jednom vrcholu a postupně připojujeme nejlevnější hranu do nového vrcholu.`,
      choices: [
        'Podgraf spojující všechny vrcholy bez cyklu s min součtem cen hran. Algoritmy: Kruskal (hrany dle ceny) a Prim (rozšíření z uzlu).',
        'Cyklus přes všechny uzly s maximálním součtem; algoritmus Dijkstra.',
        'Nejkratší cesta z fixního zdroje; algoritmus Floyd-Warshall.'
      ],
      correct: 0
    },
    5: {
      detail: `Úloha hledá cestu mezi dvěma vrcholy s minimální celkovou délkou nebo cenou.

Použití: navigace, logistika, plánování dopravy, datové sítě.

Typická metoda: Dijkstrův algoritmus.
1) Výchozímu uzlu nastavíme vzdálenost 0.
2) Ostatním uzlům nastavíme nekonečno.
3) Postupně vybíráme nenavštívený uzel s nejmenší vzdáleností.
4) Aktualizujeme vzdálenosti jeho sousedů.
5) Pokračujeme do dosažení cíle.`,
      choices: [
        'Cesta mezi 2 vrcholy s min délkou. Dijkstra: vzdálenost startu = 0, ostatní = ∞; postupně vybírej uzel s min vzdáleností a aktualizuj sousedy.',
        'Pouze BFS; Dijkstrův algoritmus je její speciální případ pro váhy 0.',
        'Hledání minimální kostry grafu; nejkratší cesta = součet vah kostry.'
      ],
      correct: 0
    },
    6: {
      detail: `Úloha maximálního toku hledá, kolik maximálně lze přepravit ze zdroje do cíle v síti s omezenými kapacitami hran.

Komponenty: zdroj, spotřebič/cíl, orientované hrany, kapacity hran, toky.

Podmínky: tok na hraně nesmí překročit kapacitu, v mezilehlých uzlech platí zachování toku.

Metoda – Ford-Fulkersonův algoritmus:
1) Najdeme cestu ze zdroje do cíle s volnou kapacitou.
2) Zvýšíme tok po této cestě.
3) Aktualizujeme zbytkové kapacity.
4) Opakujeme, dokud neexistuje další zlepšující cesta.`,
      choices: [
        'Max množství ze zdroje do cíle při kapacitách hran. Ford-Fulkerson: opakovaně hledá cestu s volnou kapacitou a zvyšuje tok.',
        'Maximální cesta v grafu bez kapacitních omezení.',
        'Součet vah všech hran v grafu.'
      ],
      correct: 0
    }
  },

  t12: {
    0: {
      detail: `Projekt je jedinečný, časově omezený soubor činností, který směřuje k dosažení předem stanoveného cíle.

Klíčová slova:
• Jedinečný – projekt se neopakuje úplně stejně jako běžná rutina.
• Časově omezený – má začátek a konec.
• Cíl – projekt má konkrétní výstup.
• Zdroje – projekt spotřebovává práci, peníze, materiál, technologie.

Příklad: stavba budovy, vývoj aplikace, organizace konference, výzkumný projekt.`,
      choices: [
        'Jedinečný, časově omezený soubor činností směřujících k dosažení cíle; spotřebovává práci, peníze, materiál, technologie.',
        'Trvalá rutinní činnost s opakovanými výstupy.',
        'Souhrn libovolných paralelních úkolů bez společného cíle.'
      ],
      correct: 0
    },
    1: {
      detail: `Činnost je konkrétní práce nebo úkol, který musí být v projektu proveden.
Příklady: návrh systému, nákup materiálu, montáž zařízení, testování aplikace.

Zdroj je prostředek potřebný k provedení činnosti.
Příklady: pracovníci, stroje, peníze, materiál, čas, software.

Činnost spotřebovává zdroje a má určitou dobu trvání.`,
      choices: [
        'Činnost = konkrétní práce/úkol s dobou trvání (návrh, montáž). Zdroj = prostředek nutný k provedení (pracovníci, stroje, peníze, materiál).',
        'Činnost a zdroj jsou totožné pojmy, rozlišení je formální.',
        'Činnost = milník v čase; zdroj = výstupní dokument projektu.'
      ],
      correct: 0
    },
    2: {
      detail: `Síťový graf je grafické znázornění projektu, ve kterém jsou zachyceny činnosti a jejich návaznosti.

Typicky:
• uzly = události nebo činnosti
• hrany = činnosti nebo návaznosti

Příklad:
   Start → A → C → End
        ↘ B ↗

Význam: ukazuje pořadí činností, závislosti, umožňuje časovou analýzu a najít kritickou cestu.`,
      choices: [
        'Grafické znázornění projektu, kde uzly jsou události/činnosti a hrany jsou činnosti/návaznosti. Ukazuje pořadí, závislosti a umožňuje časovou analýzu.',
        'Neorientovaný graf se silnými cykly; obsahuje smyčky pro opakované činnosti.',
        'Strom všech zdrojů projektu; nezávisí na čase.'
      ],
      correct: 0
    },
    3: {
      detail: `CPM (Critical Path Method) = metoda kritické cesty. Používá se pro projekty, kde jsou doby trvání činností známé a deterministické.

CPM umožňuje zjistit:
• nejkratší možnou dobu trvání projektu,
• nejdřívější začátky a konce činností (ES, EF),
• nejpozdější začátky a konce činností (LS, LF),
• časové rezervy,
• kritickou cestu a kritické činnosti.

Kritické činnosti mají nulovou celkovou rezervu. Zpoždění kritické činnosti způsobí zpoždění celého projektu.`,
      choices: [
        'Critical Path Method – pro projekty s deterministickými dobami; zjistí dobu trvání, termíny ES/EF/LS/LF, rezervy a kritickou cestu.',
        'Stochastická metoda s pravděpodobnostními dobami trvání – ekvivalent PERT.',
        'Algoritmus pro alokaci zdrojů, který nemá vliv na termíny činností.'
      ],
      correct: 0
    },
    4: {
      detail: `Časová analýza se provádí ve dvou průchodech sítí.

Dopředný průchod
Počítají se nejdřívější termíny:
   ES = nejdřívější začátek,  EF = nejdřívější konec.
Vzorec:  EF = ES + doba trvání.
U činnosti s více předchůdci bereme maximum z jejich konců.

Zpětný průchod
Počítají se nejpozdější termíny:
   LS = nejpozdější začátek,  LF = nejpozdější konec.
Vzorec:  LS = LF − doba trvání.
U činnosti s více následníky bereme minimum z jejich začátků.`,
      choices: [
        'Dopředný průchod: EF = ES + doba (max z konců předchůdců). Zpětný průchod: LS = LF − doba (min ze začátků následníků).',
        'Pouze dopředný chod; nejpozdější termíny se neurčují.',
        'Simulace Monte Carlo nad dobami činností; deterministický postup neexistuje.'
      ],
      correct: 0
    },
    5: {
      detail: `Kritická cesta je nejdelší cesta v síťovém grafu projektu z počátečního do koncového uzlu. Určuje nejkratší možnou dobu dokončení projektu.

Činnosti na kritické cestě mají celkovou rezervu = 0.

Postup určení:
1) Provedeme dopředný průchod.
2) Provedeme zpětný průchod.
3) Spočítáme rezervy činností.
4) Činnosti s nulovou rezervou tvoří kritickou cestu.

Příklad:  Start → A → C → F → End  (pokud tato cesta trvá nejdéle, je kritická).`,
      choices: [
        'Nejdelší cesta sítí z počátečního do koncového uzlu; činnosti s TF = 0; její délka = nejkratší možná doba projektu.',
        'Nejkratší cesta sítí; činnosti s největší rezervou.',
        'Cesta s nejvyšší cenou činností; nesouvisí s dobou trvání projektu.'
      ],
      correct: 0
    },
    6: {
      detail: `Celková rezerva činnosti (TF) ukazuje, o kolik se může činnost zpozdit, aniž by se zpozdil celý projekt.
   TF = LS − ES = LF − EF

Volná rezerva činnosti (FF) ukazuje zpoždění, které neovlivní nejdřívější začátek následujících činností.
   FF = min(ES následníků) − EF

Nezávislá rezerva ukazuje zpoždění činnosti, které neovlivní předchůdce ani následníky (rozdíl nejdřívějšího začátku následníka a nejpozdějšího konce předchůdce mínus doba činnosti).

Rezerva uzlu:
   R = TL − TE,    TE = nejdřívější čas uzlu,  TL = nejpozdější čas uzlu.

Význam: ukazují časovou pružnost, pomáhají řídit rizika, určit kritické/nekritické činnosti a optimalizovat zdroje.`,
      choices: [
        'TF = LS−ES = LF−EF (celková); FF = min(ES následníků)−EF (volná); nezávislá – mimo dopad na sousedy; rezerva uzlu R = TL−TE.',
        'Existuje pouze jeden typ rezervy = doba trvání činnosti.',
        'Rezervy mají jen finanční charakter (rozpočtová záloha projektu).'
      ],
      correct: 0
    }
  }
};
