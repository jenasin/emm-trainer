// Studijní podklad ke zkoušce – textace dodaná uživatelem.
// Klíče = id tématu + index otázky v TOPICS.
// Aplikace zobrazí tento text v sekci "Detailní vysvětlení" přednostně před původním a:.

const STUDY_GUIDE = {
  t1: {
    0: `Modelování je proces zjednodušeného zachycení reálného systému pomocí modelu. Model neobsahuje všechny detaily reality, ale pouze ty podstatné vlastnosti, které jsou důležité pro řešený problém.
Model tedy slouží k tomu, abychom mohli realitu analyzovat, vysvětlovat, předvídat nebo optimalizovat.

Modely lze dělit například podle formy vyjádření:

Fyzické modely – hmotné zmenšeniny nebo napodobeniny reálného objektu.
Příklad: model budovy, model mostu, maketa výrobní linky.

Grafické modely – popisují systém pomocí obrázku, grafu, schématu nebo diagramu.
Příklad: síťový graf projektu, graf dopravní sítě, organizační schéma.

Matematické modely – popisují systém pomocí rovnic, nerovnic, proměnných a funkcí.
Příklad: model lineárního programování pro maximalizaci zisku, dopravní úloha, model plánování směn.

Simulační modely – napodobují chování systému v čase.
Příklad: simulace fronty zákazníků, simulace provozu farmy, simulace výrobního procesu.`,

    1: `Systém je soubor prvků, které jsou mezi sebou propojeny vazbami a společně plní určitou funkci.
Systém má: prvky → vazby → vstupy → výstupy → cíl/chování.

Příklad systému – výrobní podnik: stroje, pracovníci, materiál, zakázky, finance, výrobky.

Význam systému v modelování spočívá v tom, že nejprve musíme určit, co do systému patří a co je už okolí systému. Tím stanovíme hranice modelu. Bez vymezení systému nevíme, co máme modelovat.`,

    2: `Lineární programování je metoda matematického programování, která hledá nejlepší řešení při omezených zdrojích.
Typicky řeší otázku: Jak rozdělit omezené zdroje tak, aby byl výsledek co nejlepší?
Model LP má lineární účelovou funkci a lineární omezující podmínky.

Použití:
• maximalizace zisku
• minimalizace nákladů
• plánování výroby
• dopravní úlohy
• směšovací úlohy
• plánování směn
• optimalizace zdrojů

Příklad: Firma vyrábí dva výrobky. Každý spotřebovává práci a materiál. Cílem je určit, kolik kusů každého výrobku vyrábět, aby byl zisk maximální.`,

    3: `Model LP obsahuje tyto základní části:

Rozhodovací proměnné – vyjadřují neznámá rozhodnutí.
Příklad: x1 = počet výrobků A, x2 = počet výrobků B.

Účelová funkce – vyjadřuje cíl optimalizace (maximalizace nebo minimalizace).
max z = 5x1 + 3x2

Omezující podmínky – vyjadřují omezené zdroje, technické požadavky nebo kapacity.
2x1 + x2 ≤ 100
x1 + 3x2 ≤ 90

Podmínky nezápornosti – většinou požadujeme, aby proměnné nebyly záporné.
x1 ≥ 0, x2 ≥ 0`,

    4: `Existují dva základní způsoby grafického řešení:

a) Grafické řešení v prostoru proměnných / prostoru řešení
Používá se hlavně tehdy, když model obsahuje dvě rozhodovací proměnné.
Na osy zakreslíme: osa x → x1, osa y → x2.
Potom zakreslíme omezující podmínky, najdeme přípustnou oblast a v ní optimální bod.
Použití: model má 2 proměnné, omezující podmínky jsou lineární.

b) Grafické řešení v prostoru požadavků
Používá se hlavně pro interpretaci simplexové metody a bázických řešení. Pracujeme zde spíše s omezujícími podmínkami, zdroji a jejich kombinacemi.
Graficky se řešení chápe jako průsečík vybraných omezení. Pomáhá vysvětlit bázická, nebázická a degenerovaná řešení.
Použití: analýza vazby mezi proměnnými a omezeními, interpretace báze, vysvětlení simplexového postupu.`,

    5: `Model LP může mít tyto výsledky:

1) Jedno optimální řešení
Přípustná oblast existuje a účelová funkce dosahuje maxima nebo minima v jednom vrcholu.

2) Alternativní optimální řešení
Optimálních řešení je více. Účelová funkce je rovnoběžná s hranou přípustné oblasti.

3) Neomezené řešení
Přípustná oblast není uzavřená ve směru zlepšování účelové funkce. Hodnota účelové funkce může růst donekonečna.

4) Nepřípustné řešení
Neexistuje žádný bod, který by splňoval všechny omezující podmínky.`
  },

  t2: {
    0: `Modely lineárního programování mají tyto základní vlastnosti:

Linearita – účelová funkce i omezující podmínky jsou lineární.
Aditivita – celkový efekt je součtem dílčích efektů. Například celkový zisk je součet zisků z jednotlivých výrobků.
Proporcionalita – spotřeba zdroje nebo zisk je přímo úměrný velikosti proměnné.
Dělitelnost – proměnné mohou nabývat i necelých hodnot, pokud model nevyžaduje celočíselnost.
Determinističnost – koeficienty modelu jsou známé a pevně dané.
Nezápornost proměnných – rozhodovací proměnné obvykle nemohou být záporné.`,

    1: `Přípustné řešení – takové řešení, které splňuje všechny omezující podmínky a podmínky nezápornosti.

Optimální řešení – nejlepší přípustné řešení z hlediska účelové funkce. U maximalizace má nejvyšší hodnotu, u minimalizace nejnižší hodnotu.

Alternativní optimální řešení – nastává, když existuje více různých přípustných řešení se stejnou optimální hodnotou účelové funkce.

Suboptimální řešení – přípustné řešení, ale není nejlepší. Splňuje omezení, ale účelová funkce by se dala ještě zlepšit.`,

    2: `Bázické řešení vzniká tak, že vybereme určitou množinu proměnných jako bázické a ostatní nastavíme na nulu.
V rovnicovém tvaru modelu platí:
• počet bázických proměnných = počet rovnic
• počet nebázických proměnných = ostatní proměnné

Nebázické proměnné mají v daném bázickém řešení hodnotu 0. Bázické proměnné se dopočítají z rovnic modelu.

Graficky bázické řešení odpovídá obvykle vrcholu přípustné oblasti, tedy průsečíku omezujících přímek.`,

    3: `Degenerované bázické řešení je takové bázické řešení, ve kterém má alespoň jedna bázická proměnná hodnotu 0.
Vzniká například tehdy, když se ve stejném vrcholu protíná více omezení, než je nutné.

Graficky: ve stejném bodě se stýká více hranic omezení.

Degenerace může způsobit problém v simplexové metodě, například cyklení nebo nulové zlepšení účelové funkce v jednom kroku.`,

    4: `Základní věty LP říkají zejména:

1) Pokud má model LP optimální řešení, potom alespoň jedno optimální řešení leží ve vrcholu přípustné oblasti.
2) Vrcholy přípustné oblasti odpovídají bázickým přípustným řešením.
3) Simplexová metoda proto nemusí prohledávat všechny body, ale pouze vrcholy.

Důsledek: optimální řešení hledáme mezi bázickými přípustnými řešeními. To je základ simplexového algoritmu.`,

    5: `V prostoru požadavků můžeme opět dostat:

• Jedno optimální řešení – existuje právě jedno nejlepší bázické přípustné řešení.
• Alternativní optimum – více bázických nebo nebázických přípustných řešení má stejnou optimální hodnotu.
• Neomezené řešení – model umožňuje zlepšovat účelovou funkci bez omezení.
• Nepřípustné řešení – neexistuje žádná kombinace proměnných, která by splnila požadavky.

Schematicky:
   jedno optimum:        *
   alternativní optimum: ----
   neomezené řešení:     → ∞
   nepřípustné řešení:   ∅`,

    6: `V prostoru požadavků určujeme přípustné řešení tak, že sledujeme, zda kombinace proměnných splňuje všechna omezení.

Přípustné řešení splňuje všechny zdrojové, technické a nezápornostní podmínky.

Optimální řešení vybereme podle hodnoty účelové funkce. V grafickém řešení posouváme přímku účelové funkce ve směru zlepšování, dokud se ještě dotýká přípustné oblasti. Poslední bod dotyku = optimum.`
  },

  t3: {
    0: `Simplexový algoritmus lze použít, pokud:

a) Model je ve vhodném lineárním tvaru
Účelová funkce i omezení musí být lineární. Simplexový algoritmus pracuje s lineárními rovnicemi a nerovnicemi.

b) Existuje výchozí bázické přípustné řešení
Simplexová metoda začíná v jednom vrcholu přípustné oblasti. Pokud nemáme výchozí bázické přípustné řešení, musíme jej najít například pomocí pomocných proměnných.

Význam: simplex postupuje od jednoho bázického přípustného řešení k dalšímu.`,

    1: `Nerovnice převádíme na rovnice přidáním doplňkových nebo přebytečných proměnných.

Pro omezení typu ≤ přidáme doplňkovou proměnnou:
   2x1 + x2 ≤ 100   →   2x1 + x2 + s1 = 100,   s1 ≥ 0
Proměnná s1 vyjadřuje nevyužitou kapacitu zdroje.

Pro omezení typu ≥ odečítáme přebytečnou proměnnou:
   2x1 + x2 ≥ 50    →   2x1 + x2 − s1 = 50,    s1 ≥ 0

Tento krok se provádí proto, aby model bylo možné zapsat do simplexové tabulky.`,

    2: `Kanonický tvar vyžaduje, aby v každé rovnici byla jedna bázická proměnná s koeficientem 1 a v ostatních rovnicích s koeficientem 0.
Typický tvar: xB = b − A_N · x_N.
Cílem je získat jednotkovou matici u bázických proměnných.

Příklad:
   x1 + 2x2 + s1 = 100
   3x1 + x2 + s2 = 90
Pokud s1 a s2 tvoří jednotkovou matici, mohou být počáteční bází.

Význam: kanonický tvar umožňuje přímo číst hodnoty bázických proměnných.`,

    3: `Strukturní proměnné – původní rozhodovací proměnné modelu.
Příklad: x1 = počet výrobků A, x2 = počet výrobků B.

Doplňkové proměnné – přidávají se k omezením typu ≤. Vyjadřují nevyužitou kapacitu.
s1 = nevyužitý počet hodin práce.

Přebytečné proměnné – odečítají se u omezení typu ≥. Vyjadřují překročení minimálního požadavku.
s2 = množství nad minimální požadavek.

Umělé proměnné – přidávají se tehdy, když nelze jednoduše vytvořit počáteční bázi. Používají se například v metodě velkého M nebo dvoufázové metodě.
a1 = pomocná proměnná pro nalezení počátečního řešení.`,

    4: `Omezení typu ≤ – vyjadřuje maximální dostupnou kapacitu.
2x1 + x2 ≤ 100 (např. maximálně 100 hodin práce).

Omezení typu ≥ – vyjadřuje minimální požadavek.
x1 + x2 ≥ 50 (např. je nutné vyrobit alespoň 50 kusů).

Omezení typu = – vyjadřuje přesné splnění požadavku.
x1 + x2 = 80 (např. přesně 80 jednotek směsi).

Podmínky nezápornosti – x1, x2 ≥ 0. Vyjadřují, že počet výrobků nebo množství zdroje nemůže být záporné.`,

    5: `Zjednodušená simplexová tabulka:

Báze | cB | b | x1 x2 ... xn
--------------------------------
xB1  | c1 | b1| a11 a12 ... a1n
xB2  | c2 | b2| a21 a22 ... a2n
...
--------------------------------
     |    | z | Δ1 Δ2 ... Δn

Tabulka poskytuje:
• aktuální bázi,
• hodnoty bázických proměnných,
• koeficienty omezení,
• hodnotu účelové funkce,
• kritéria optimality,
• informaci, která proměnná má vstoupit a vystoupit z báze.`,

    6: `Test optimality určuje, zda aktuální bázické přípustné řešení už je optimální.

U maximalizační úlohy se obvykle sledují redukované náklady / indexní řádek. Pokud žádná nebázická proměnná nemůže zlepšit účelovou funkci, řešení je optimální.

Typicky pro max: všechny redukované náklady mají správné znaménko.

Jestliže existuje proměnná, jejíž vstup do báze zlepší účelovou funkci, vybereme ji jako vstupující proměnnou.

Princip: najdi nebázickou proměnnou, která nejvíce zlepšuje účelovou funkci.`,

    7: `Test přípustnosti určuje, která bázická proměnná vystoupí z báze, aby nové řešení zůstalo přípustné.

Používá se podílový test:
   θ = bi / aik,    kde aik > 0.
Vybere se nejmenší nezáporný podíl.

Význam:
• určí maximální možný krok ve směru vstupující proměnné,
• zabrání porušení nezápornosti bázických proměnných.

Proměnná s nejmenším podílem vystupuje z báze.`
  },

  t4: {
    0: `Bázické proměnné jsou uvedeny ve sloupci Báze. Jejich hodnoty čteme ze sloupce pravých stran b.
Nebázické proměnné nejsou ve sloupci Báze. Jejich hodnota je v daném bázickém řešení rovna nule.

Příklad:
   Báze | b
   ---------
   x3   | 20
   x1   | 10
   x5   | 0
Pak: x3 = 20, x1 = 10, x5 = 0; ostatní nebázické proměnné = 0.

Pokud je bázická proměnná nulová, jde o degenerované řešení.`,

    1: `Matice báze B je matice složená ze sloupců původní matice omezení, které odpovídají bázickým proměnným.
Má-li model tvar Ax = b, pak báze obsahuje tolik sloupců, kolik je rovnic.

Inverzní matice báze B⁻¹ slouží k výpočtu bázického řešení:
   xB = B⁻¹ · b

Význam:
• určení hodnot bázických proměnných,
• výpočet simplexových koeficientů,
• postoptimalizační analýza,
• výpočet duálních cen.`,

    2: `Duální ceny, často také stínové ceny, vyjadřují, jak se změní optimální hodnota účelové funkce při jednotkové změně pravé strany omezení.

Například: duální cena práce = 5 znamená, že pokud zvýšíme kapacitu práce o 1 jednotku, optimální zisk se zvýší o 5 jednotek, pokud zůstane zachována původní báze.

V simplexové teorii se duální ceny počítají jako:
   y^T = cB^T · B⁻¹
kde cB = koeficienty účelové funkce u bázických proměnných, B⁻¹ = inverzní matice báze.`,

    3: `Vektor bázického řešení obsahuje hodnoty bázických proměnných při nulových hodnotách nebázických proměnných.

Obecně:
   xN = 0
   xB = B⁻¹ · b

Příklad: x1 = 10, x2 = 0, x3 = 20, x4 = 0. Bázické proměnné mohou být x1, x3; nebázické x2, x4.

Obecné řešení vyjadřuje bázické proměnné jako funkce nebázických:
   xB = B⁻¹·b − B⁻¹·N · xN
Nebázické proměnné mohou nabývat hodnot a bázické se podle nich dopočítají.`,

    4: `Dualita znamená, že ke každé úloze lineárního programování existuje sdružená úloha, tzv. duální úloha.
Původní úloha se nazývá primární úloha.

Příklad:
• primární úloha řeší maximalizaci zisku při omezených zdrojích,
• duální úloha řeší ocenění těchto omezených zdrojů.

Dualita zjednodušuje řešení například tehdy, když má primární úloha mnoho proměnných, ale málo omezení, zatímco duální úloha je menší a jednodušší.`,

    5: `Typicky platí:

• primární max úloha ↔ duální min úloha
• proměnné primární úlohy ↔ omezení duální úlohy
• omezení primární úlohy ↔ proměnné duální úlohy
• pravé strany primární úlohy ↔ koeficienty účelové funkce duální úlohy
• koeficienty účelové funkce primární úlohy ↔ pravé strany duální úlohy
• matice omezení A ↔ transponovaná matice A^T

Příklad:
Primární úloha:    max z = c^T x,   A x ≤ b,   x ≥ 0
Duální úloha:      min w = b^T y,   A^T y ≥ c, y ≥ 0`,

    6: `Základní věta o dualitě říká:
Pokud má primární úloha optimální řešení, pak má optimální řešení i duální úloha a hodnoty jejich účelových funkcí jsou stejné.
   z* = w*

Význam:
• můžeme ověřit optimalitu řešení,
• můžeme interpretovat ceny zdrojů,
• můžeme řešit jednodušší z dvojice úloh,
• umožňuje postoptimalizační analýzu.`
  },

  t5: {
    0: `Nebázické řešení vzniká tak, že některé nebázické proměnné necháme nabývat kladných hodnot a sledujeme, jak se změní bázické proměnné.

Obecný vztah:
   xB = B⁻¹·b − B⁻¹·N · xN

Pokud chceme zvýšit jednu nebázickou proměnnou xj, ostatní nebázické proměnné ponecháme nulové. Maximální hodnota xj se určí tak, aby všechny bázické proměnné zůstaly nezáporné. Použije se podílový test:
   xj ≤ xi / aij   pro příslušné kladné koeficienty.

O optimálnosti nebázických řešení platí:
• nebázická řešení obecně nemusí být optimální,
• pokud se účelová funkce nezhoršuje, mohou být také optimální,
• u alternativního optima může existovat optimální nebázické řešení na hraně.`,

    1: `Nový proces znamená přidání nové proměnné do modelu. Postup:

1) Určíme sloupec spotřeby zdrojů nové proměnné: aj.
2) Přepočteme jej vzhledem k aktuální bázi: B⁻¹ · aj.
3) Určíme redukovaný náklad / čistý efekt nové proměnné:
      Δj = cj − y^T · aj,   kde y^T = cB^T · B⁻¹.
4) Pokud nová proměnná zlepšuje účelovou funkci, může vstoupit do báze.
5) Změny bázických proměnných se určí ze vztahu:
      xB = B⁻¹·b − (B⁻¹·aj) · xj.
6) Změna účelové funkce je dána redukovaným nákladem nové proměnné.`,

    2: `Změna kapacity znamená změnu jedné složky vektoru pravých stran b.

Nový vektor:   b' = b + Δb
Nové bázické řešení:   xB' = B⁻¹ · b'
Změna účelové funkce:   z' = z + y^T · Δb,   kde y jsou duální ceny.

Důležité je ověřit, zda nové bázické řešení zůstává přípustné: xB' ≥ 0.
Pokud ano, báze zůstává stabilní. Pokud ne, je nutné znovu optimalizovat.`,

    3: `Analýza stability báze určuje, v jakém intervalu se mohou měnit kapacity zdrojů, aniž by se změnila optimální báze.

Používá se vztah: xB = B⁻¹·b.
Při změně pravé strany: xB' = B⁻¹·(b + Δb).
Podmínka stability: xB' ≥ 0.

Význam:
• zjistíme, jak moc lze změnit kapacity zdrojů bez nutnosti hledat nové optimum,
• umožňuje manažerskou interpretaci citlivosti řešení.`,

    4: `Cílem je zjistit, jak se mohou měnit koeficienty účelové funkce, aniž by se změnila optimální báze.

Nebázická proměnná
U nebázické proměnné sledujeme její redukovaný náklad. Pro zachování optimálnosti se nesmí stát, že by vstup proměnné do báze zlepšil účelovou funkci. Redukovaný náklad musí zůstat ve správném znaménku.

Bázická proměnná
U bázické proměnné změna jejího cenového koeficientu ovlivňuje duální ceny:
   y^T = cB^T · B⁻¹.
Potom je nutné znovu ověřit redukované náklady všech nebázických proměnných.

Význam: zjistíme, jak citlivé je řešení na změnu zisku, ceny nebo nákladů.`,

    5: `Úloha o výrobním programu
Cílem je určit, kolik vyrábět jednotlivých výrobků, aby byl maximalizován zisk nebo minimalizovány náklady.
Komponenty:
• proměnné = množství výrobků,
• omezení = kapacity zdrojů, práce, materiál, stroje,
• účelová funkce = zisk nebo náklady.
Příklad: kolik vyrábět výrobku A a B při omezeném materiálu a pracovní době.

Směšovací úloha
Cílem je určit, jak smíchat vstupní suroviny, aby výsledná směs splňovala požadavky a měla minimální náklady.
Komponenty:
• proměnné = množství jednotlivých složek směsi,
• omezení = obsah živin, kvalita, receptura,
• účelová funkce = minimalizace nákladů.
Příklad: sestavení krmné směsi s požadovaným obsahem bílkovin při minimální ceně.`,

    6: `Úloha o řezných plánech
Cílem je určit, jak řezat materiál, aby vznikl požadovaný počet dílů a odpad byl minimální.
Komponenty:
• proměnné = počet použití jednotlivých řezných plánů,
• omezení = požadovaný počet dílů,
• účelová funkce = minimalizace odpadu nebo počtu kusů materiálu.
Příklad: řezání tyčí, plechů, rolí papíru.

Plánování směn
Cílem je určit počet pracovníků v jednotlivých směnách tak, aby byla pokryta potřeba pracovní síly a náklady byly minimální.
Komponenty:
• proměnné = počet pracovníků začínajících v určité směně,
• omezení = minimální počet pracovníků v čase,
• účelová funkce = minimalizace mzdových nákladů.
Příklad: plánování směn v nemocnici, call centru, skladu nebo výrobě.`
  },

  t8: {
    0: `Jednostupňová dopravní úloha řeší přepravu zboží od dodavatelů k odběratelům tak, aby byly splněny kapacity dodavatelů a požadavky odběratelů při minimálních dopravních nákladech.

Komponenty:
• dodavatelé,
• odběratelé,
• kapacity dodavatelů,
• požadavky odběratelů,
• jednotkové přepravní náklady,
• přepravovaná množství.

Rozhodovací proměnná:   xij = množství přepravené od dodavatele i k odběrateli j.
Účelová funkce: minimalizace celkových přepravních nákladů.`,

    1: `Dopravní úloha je vyvážená, pokud celková nabídka dodavatelů se rovná celkové poptávce odběratelů:
   součet kapacit = součet požadavků.

• Pokud nabídka převyšuje poptávku, přidá se fiktivní odběratel.
• Pokud poptávka převyšuje nabídku, přidá se fiktivní dodavatel.

Dopravní náklady k fiktivnímu řádku/sloupci bývají obvykle nulové nebo penalizační podle interpretace.`,

    2: `Metoda severozápadního rohu slouží k nalezení počátečního přípustného řešení dopravní úlohy.

Postup:
1) Začneme v levém horním rohu tabulky.
2) Přidělíme maximum možné přepravy.
3) Vyčerpáme buď kapacitu řádku, nebo požadavek sloupce.
4) Posuneme se doprava nebo dolů.
5) Pokračujeme, dokud nejsou splněny všechny požadavky a kapacity.

Výhoda: jednoduchá a rychlá.
Nevýhoda: nebere v úvahu náklady; výsledné řešení často nebývá dobré.`,

    3: `Indexová metoda také hledá počáteční přípustné řešení, ale bere v úvahu přepravní náklady.

Princip:
1) Vyhledávají se pole s nejnižšími náklady.
2) Do těchto polí se přiděluje co největší možné množství.
3) Postup se opakuje až do splnění všech kapacit a požadavků.

Výhoda: obvykle lepší výsledek než severozápadní roh.
Nevýhoda: nemusí dát optimální řešení.`,

    4: `Vogelova metoda hledá počáteční řešení pomocí tzv. penalizací.

Postup:
1) Pro každý řádek a sloupec určíme rozdíl mezi dvěma nejnižšími náklady.
2) Vybereme řádek nebo sloupec s nejvyšší penalizací.
3) V něm zvolíme pole s nejnižšími náklady.
4) Přidělíme maximální možné množství.
5) Aktualizujeme tabulku a pokračujeme.

Výhoda: většinou poskytuje velmi dobré počáteční řešení.
Nevýhoda: je pracnější než severozápadní roh, stále nemusí být optimální.`,

    5: `Degenerace nastává, když počet obsazených polí je menší než:
   m + n − 1,
kde m = počet dodavatelů, n = počet odběratelů.
Vzniká například při současném vyčerpání řádku i sloupce.

Odstranění degenerace: do vhodného prázdného pole se vloží nulová nebo velmi malá přeprava ε, aby počet obsazených polí byl m + n − 1 a bylo možné pokračovat v optimalizační metodě.`
  },

  t9: {
    0: `Metoda MODI slouží k testování optimality a zlepšování řešení dopravní úlohy.

Princip:
1) Máme počáteční přípustné řešení s m + n − 1 obsazenými poli.
2) Pro obsazená pole určujeme potenciály ui a vj:
      ui + vj = cij.
3) Pro neobsazená pole vypočítáme hodnoty:
      Δij = cij − ui − vj.
4) Pokud jsou všechny Δij nezáporné u minimalizační úlohy, řešení je optimální.
5) Pokud existuje záporné Δij, vybereme nejvíce záporné pole a zlepšíme řešení pomocí uzavřeného obvodu.`,

    1: `Danzigův uzavřený obvod je uzavřená cesta v dopravní tabulce, která začíná v neobsazeném poli a dále prochází obsazenými poli ve vodorovném a svislém směru. Používá se k úpravě řešení.

Postup: na obvodu se střídají znaménka plus a minus (+, −, +, −). Do plusových polí přidáváme množství, z minusových polí odebíráme. Velikost přesunu je dána nejmenší hodnotou v minusových polích.

Význam: umožňuje změnit dopravní plán a snížit celkové náklady.`,

    2: `Perspektivita dopravní trasy vyjadřuje, zda by bylo výhodné zařadit nevyužitou trasu do dopravního plánu.

V metodě MODI se zjišťuje pomocí hodnot Δij.
U minimalizační úlohy:
• Δij < 0 → trasa je perspektivní, její zařazení sníží náklady,
• Δij = 0 → alternativní optimální řešení,
• Δij > 0 → trasa není perspektivní.

Analýza perspektivity se provádí pro všechna neobsazená pole.`,

    3: `Propustnost určuje, jaké maximální množství lze přes novou trasu přepravit, aniž by došlo k porušení přípustnosti řešení. Stanovuje se pomocí uzavřeného obvodu.

Postup:
1) Vybereme neobsazenou trasu.
2) Sestavíme Danzigův uzavřený obvod.
3) Označíme plusová a minusová pole.
4) Maximální propustnost je nejmenší hodnota v minusových polích.

   propustnost = min hodnota v minusových polích.`
  },

  t10: {
    0: `Přiřazovací úloha řeší optimální přiřazení objektů k úkolům.

Typicky:
• pracovníci → úkoly,
• stroje → zakázky,
• studenti → témata,
• vozidla → trasy.

Každý objekt má být přiřazen právě jednomu úkolu a každý úkol má být obsazen právě jedním objektem.

Komponenty: objekty, úkoly, náklady nebo výnosy přiřazení, rozhodovací proměnné xij.

Proměnná:   xij = 1, pokud objekt i přiřadíme k úkolu j; xij = 0 jinak.`,

    1: `Maďarská metoda slouží k řešení přiřazovací úlohy.

Princip pro minimalizaci:
1) V každém řádku odečteme nejmenší prvek.
2) V každém sloupci odečteme nejmenší prvek.
3) Pokusíme se pokrýt všechny nuly minimálním počtem čar.
4) Pokud počet čar odpovídá velikosti matice, lze vytvořit optimální přiřazení.
5) Pokud ne, upravíme matici pomocí nejmenšího nepokrytého prvku.
6) Pokračujeme, dokud nelze najít úplné optimální přiřazení.

Význam: najde optimální přiřazení s minimálními náklady nebo maximálním efektem.`,

    2: `Okružní dopravní problém řeší nalezení trasy, která navštíví daná místa a vrátí se zpět do výchozího bodu.

Typický příklad: obchodní cestující, rozvoz zboží, svoz odpadu, servisní trasy.

Komponenty:
• uzly = místa/zákazníci,
• hrany = možné cesty,
• vzdálenosti/náklady,
• trasa/okruh.

Cíl: minimalizovat celkovou délku nebo náklady trasy.`,

    3: `Problém obchodního cestujícího – jedno vozidlo navštíví všechna místa právě jednou a vrátí se zpět.

Rozvozní problém – jedno nebo více vozidel rozváží zboží zákazníkům.

Svozní problém – vozidlo sbírá materiál z více míst, například odpad nebo mléko.

Kapacitní okružní problém – vozidla mají omezenou kapacitu.

Okružní problém s časovými okny – zákazníci musí být obslouženi v daných časových intervalech.`,

    4: `Metoda nejbližšího souseda se používá pro rychlé nalezení přibližného řešení okružního problému.

Postup:
1) Vybereme výchozí uzel.
2) Přejdeme do nejbližšího dosud nenavštíveného uzlu.
3) Pokračujeme, dokud nejsou navštíveny všechny uzly.
4) Vrátíme se do výchozího bodu.

Výhoda: jednoduchá a rychlá.
Nevýhoda: nemusí dát optimální řešení; může se na konci výrazně zhoršit.`,

    5: `Modifikovaná Vogelova metoda se používá jako aproximační metoda pro sestavení okružní trasy.

Princip je podobný jako u dopravní úlohy:
1) Pracujeme s maticí vzdáleností nebo nákladů.
2) Pro řádky a sloupce určujeme penalizace.
3) Vybíráme nejvýhodnější spojení.
4) Zároveň hlídáme, aby nevznikl předčasný uzavřený cyklus.
5) Každý uzel musí mít správný počet vstupů a výstupů.
6) Výsledkem je okružní trasa.

Význam: umožňuje získat relativně dobré počáteční řešení okružního problému.`,

    6: `Mayerova metoda se používá pro řešení okružních dopravních problémů, především jako heuristická metoda pro zkracování nebo zlepšování trasy.

Princip: postupně se vytváří nebo upravuje okružní trasa tak, aby se snížila její celková délka.

Využití: rozvozní trasy, svozové trasy, obchodní cestující, optimalizace pořadí návštěv.

Je to aproximační metoda, tedy nemusí vždy najít přesné optimum, ale poskytuje prakticky použitelné řešení.`
  },

  t11: {
    0: `Graf je matematická struktura složená z uzlů a hran.
   G = (V, E),   kde V = množina vrcholů/uzlů, E = množina hran.

Neorientovaný graf – hrany nemají směr (A — B).
Příklad: silnice mezi městy, kde lze jet oběma směry.

Orientovaný graf – hrany mají směr (A → B).
Příklad: jednosměrné ulice, tok materiálu, návaznost činností.`,

    1: `Sled – posloupnost vrcholů a hran, kde každá hrana spojuje sousední vrcholy. Hrany a vrcholy se mohou opakovat.

Tah – sled, ve kterém se neopakují hrany. Vrcholy se opakovat mohou.

Cesta – tah, ve kterém se neopakují ani vrcholy.

Cyklus – cesta, která začíná a končí ve stejném vrcholu.

Jednoduše:
   sled   = může opakovat hrany i vrcholy
   tah    = neopakuje hrany
   cesta  = neopakuje vrcholy
   cyklus = uzavřená cesta`,

    2: `Neinformované prohledávání nevyužívá žádnou dodatečnou informaci o tom, kde je cíl. Prohledává graf podle obecného pravidla.

Příklad: prohledávání do šířky BFS.

Princip BFS:
1) Začneme ve výchozím uzlu.
2) Nejprve navštívíme všechny sousedy.
3) Potom sousedy sousedů.
4) Pokračujeme po vrstvách.

Využití: hledání nejkratší cesty v neohodnoceném grafu, procházení stavového prostoru.`,

    3: `Informované prohledávání používá dodatečnou informaci, tzv. heuristiku, která odhaduje, jak blízko je daný uzel k cíli.

Příklad: algoritmus A*.
A* používá hodnotu:
   f(n) = g(n) + h(n),
kde g(n) = skutečná cena cesty od startu k uzlu n, h(n) = odhad ceny z uzlu n do cíle.

Význam: hledání cesty v mapách, navigace, plánování pohybu, optimalizace tras.`,

    4: `Minimální kostra je podgraf, který:
• spojuje všechny vrcholy,
• neobsahuje cyklus,
• má minimální součet délek/cen hran.

Použití: návrh sítí, telekomunikace, vodovody, elektrické rozvody, dopravní propojení.

Metody řešení:
• Kruskalův algoritmus – řadíme hrany podle ceny a postupně přidáváme nejlevnější hrany, pokud nevytvoří cyklus.
• Primův algoritmus – začneme v jednom vrcholu a postupně připojujeme nejlevnější hranu do nového vrcholu.`,

    5: `Úloha hledá cestu mezi dvěma vrcholy s minimální celkovou délkou nebo cenou.

Použití: navigace, logistika, plánování dopravy, datové sítě.

Typická metoda: Dijkstrův algoritmus.

Princip:
1) Výchozímu uzlu nastavíme vzdálenost 0.
2) Ostatním uzlům nastavíme nekonečno.
3) Postupně vybíráme dosud nenavštívený uzel s nejmenší vzdáleností.
4) Aktualizujeme vzdálenosti jeho sousedů.
5) Pokračujeme do dosažení cíle.`,

    6: `Úloha maximálního toku hledá, kolik maximálně lze přepravit ze zdroje do cíle v síti s omezenými kapacitami hran.

Komponenty: zdroj, spotřebič/cíl, orientované hrany, kapacity hran, toky.

Podmínky:
• tok na hraně nesmí překročit kapacitu,
• v mezilehlých uzlech platí zachování toku.

Metoda: Ford-Fulkersonův algoritmus.
Princip:
1) Najdeme cestu ze zdroje do cíle s volnou kapacitou.
2) Zvýšíme tok po této cestě.
3) Aktualizujeme zbytkové kapacity.
4) Opakujeme, dokud neexistuje další zlepšující cesta.`
  },

  t12: {
    0: `Projekt je jedinečný, časově omezený soubor činností, který směřuje k dosažení předem stanoveného cíle.

Klíčová slova:
• Jedinečný – projekt se neopakuje úplně stejně jako běžná rutina.
• Časově omezený – má začátek a konec.
• Cíl – projekt má konkrétní výstup.
• Zdroje – projekt spotřebovává práci, peníze, materiál, technologie.

Příklad: stavba budovy, vývoj aplikace, organizace konference, výzkumný projekt.`,

    1: `Činnost je konkrétní práce nebo úkol, který musí být v projektu proveden.
Příklad: návrh systému, nákup materiálu, montáž zařízení, testování aplikace.

Zdroj je prostředek potřebný k provedení činnosti.
Příklad: pracovníci, stroje, peníze, materiál, čas, software.

Činnost spotřebovává zdroje a má určitou dobu trvání.`,

    2: `Síťový graf je grafické znázornění projektu, ve kterém jsou zachyceny činnosti a jejich návaznosti.

Typicky:
• uzly = události nebo činnosti,
• hrany = činnosti nebo návaznosti.

Příklad:
   Start → A → C → End
        ↘ B ↗

Význam:
• ukazuje pořadí činností,
• ukazuje závislosti,
• umožňuje časovou analýzu,
• umožňuje najít kritickou cestu.`,

    3: `CPM znamená Critical Path Method, tedy metoda kritické cesty. Používá se pro projekty, kde jsou doby trvání činností známé a deterministické.

CPM umožňuje zjistit:
• nejkratší možnou dobu trvání projektu,
• nejdřívější začátky a konce činností,
• nejpozdější začátky a konce činností,
• časové rezervy,
• kritickou cestu,
• kritické činnosti.

Kritické činnosti mají nulovou celkovou rezervu. Zpoždění kritické činnosti způsobí zpoždění celého projektu.`,

    4: `Časová analýza se provádí ve dvou průchodech sítí:

Dopředný průchod
Počítají se nejdřívější termíny:
   ES = nejdřívější začátek
   EF = nejdřívější konec
Vzorec:   EF = ES + doba trvání.
U činnosti s více předchůdci bereme maximum z jejich konců.

Zpětný průchod
Počítají se nejpozdější termíny:
   LS = nejpozdější začátek
   LF = nejpozdější konec
Vzorec:   LS = LF − doba trvání.
U činnosti s více následníky bereme minimum z jejich začátků.`,

    5: `Kritická cesta je nejdelší cesta v síťovém grafu projektu z počátečního do koncového uzlu. Určuje nejkratší možnou dobu dokončení projektu.

Činnosti na kritické cestě mají celkovou rezervu = 0.

Postup určení:
1) Provedeme dopředný průchod.
2) Provedeme zpětný průchod.
3) Spočítáme rezervy činností.
4) Činnosti s nulovou rezervou tvoří kritickou cestu.

Příklad: Start → A → C → F → End. Pokud tato cesta trvá nejdéle, je kritická.`,

    6: `Celková rezerva činnosti
Ukazuje, o kolik se může činnost zpozdit, aniž by se zpozdil celý projekt.
   TF = LS − ES = LF − EF.

Volná rezerva činnosti
Ukazuje, o kolik se může činnost zpozdit, aniž by ovlivnila nejdřívější začátek následujících činností.
   FF = min(ES následníků) − EF.

Nezávislá rezerva
Ukazuje zpoždění činnosti, které neovlivní předchůdce ani následníky.
Obecně se počítá jako rozdíl mezi nejdřívějším začátkem následníka a nejpozdějším koncem předchůdce po odečtení doby činnosti.

Rezerva uzlu
U uzlů se často počítá rozdíl mezi nejpozdějším a nejdřívějším časem uzlu:
   R = TL − TE,   kde TE = nejdřívější čas uzlu, TL = nejpozdější čas uzlu.

Význam rezerv:
• ukazují časovou pružnost projektu,
• pomáhají řídit rizika,
• pomáhají určit kritické a nekritické činnosti,
• umožňují optimalizovat využití zdrojů.`
  }
};
