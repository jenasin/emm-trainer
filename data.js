// EMM – Ekonomicko-matematické metody
// Otázky k rozpravě + 3 možnosti + plná modelová odpověď

const TOPICS = [
  {
    id: 't1',
    title: 'Úvod do EMM, LP, prostor řešení',
    short: 'T1',
    color: '#ffa726',
    questions: [
      {
        q: 'Co je to modelování? Proveďte klasifikaci modelů podle alespoň jednoho hlediska.',
        choices: [
          'Zjednodušené zobrazení reálného systému pro účely jeho analýzy; např. fyzické, verbální, grafické, matematické modely.',
          'Pouze tvorba grafu nebo diagramu daného procesu; modely se dělí jen na 2D a 3D.',
          'Postup řešení lineárních rovnic; modely jsou jednorovnicové a vícerovnicové.'
        ],
        correct: 0,
        a: `Modelování = vědecký postup zjednodušeného zobrazení reálného systému za účelem jeho zkoumání, analýzy nebo predikce.
Klasifikace podle formy: fyzické (model letadla), verbální (slovní popis), grafické (vývojový diagram), matematické (soustava rovnic, LP).
Další hlediska: statické × dynamické, deterministické × stochastické, popisné × normativní (optimalizační).`
      },
      {
        q: 'Co je to systém? Jaký je jeho význam v procesu systémového modelování?',
        choices: [
          'Uspořádaná množina prvků a vazeb mezi nimi tvořící celek; vymezuje hranice modelu, vstupy a výstupy.',
          'Souhrn matematických rovnic popisujících jediný proces; slouží pouze ke kontrolnímu výpočtu.',
          'Posloupnost činností projektu od začátku do konce; ohraničuje pouze časový průběh úlohy.'
        ],
        correct: 0,
        a: `Systém = uspořádaná množina prvků a vazeb mezi nimi, která jako celek plní určitou funkci a interaguje s okolím.
Význam: vymezuje hranice (uvnitř/okolí), definuje vstupy, výstupy a stavové veličiny, určuje, které prvky a vazby model zachytí. Bez korektní systémové analýzy nelze sestavit smysluplný model.`
      },
      {
        q: 'Uveďte podstatu a význam (možnosti aplikace) modelů lineárního programování.',
        choices: [
          'Hledání extrému lineární ÚF při lineárních omezeních a nezápornosti; aplikace: výrobní program, dieta, doprava, řezné plány.',
          'Řešení soustav lineárních rovnic Gaussovou eliminací; využití jen pro plně determinované úlohy.',
          'Optimalizace nelineární konvexní funkce na konvexní množině; nevhodné pro úlohy s celočíselnými proměnnými.'
        ],
        correct: 0,
        a: `Podstata: nalezení extrému lineární účelové funkce při dodržení soustavy lineárních omezení a podmínek nezápornosti.
Význam: jeden z nejpoužívanějších optimalizačních nástrojů, existují efektivní algoritmy (simplex, vnitřní bod).
Aplikace: úloha o výrobním programu, směšovací (dietní) úloha, řezné plány, plánování směn, dopravní úloha, finanční plánování, alokace zdrojů.`
      },
      {
        q: 'Uveďte a stručně popište komponenty modelů lineárního programování.',
        choices: [
          'Rozhodovací proměnné, lineární účelová funkce, soustava lineárních omezení, podmínky nezápornosti.',
          'Vstupní data, simplexový algoritmus, výstupní matice a kontrolní suma řešení.',
          'Cenové vektory, kapacitní matice, podmínky stochasticity a náhodné veličiny.'
        ],
        correct: 0,
        a: `Komponenty LP:
1) Rozhodovací (strukturní) proměnné x_j – co optimalizujeme.
2) Účelová funkce z = Σc_j·x_j → min/max – lineární kritérium.
3) Soustava omezení Σa_ij·x_j ≤/≥/= b_i – kapacity, požadavky, bilance.
4) Podmínky nezápornosti x_j ≥ 0.
5) Parametry modelu: cenové koeficienty c_j, technologické koeficienty a_ij, pravé strany b_i.`
      },
      {
        q: 'Uveďte dva základní způsoby grafického řešení LP a podmínky jejich použitelnosti.',
        choices: [
          'Prostor řešení (pro 2 proměnné, posuv vrstevnice ÚF) a prostor požadavků (pro 2 omezení a libovolný počet proměnných).',
          'Pouze prostor řešení – použitelný pro libovolný počet proměnných; alternativní geometrická metoda neexistuje.',
          'Prostor řešení (pro 2 omezení) a Lagrangeova metoda (pro 2 proměnné).'
        ],
        correct: 0,
        a: `a) Prostor řešení: kreslí se přípustná oblast jako průnik polorovin, hledá se vrchol s extrémní ÚF posuvem vrstevnice. Použitelné pro 2 proměnné.
b) Prostor požadavků: zobrazují se sloupcové vektory matice A a vektor b, hledá se nezáporná lineární kombinace sloupců dávající b s extrémní hodnotou ÚF. Použitelné pro 2 omezení a libovolný počet proměnných.`
      },
      {
        q: 'Uveďte 4 možné výsledky řešení modelu LP v prostoru řešení.',
        choices: [
          'Jediné optimum (vrchol), alternativní optima (hrana), neomezené řešení (otevřená oblast), neexistuje přípustné řešení (prázdný průnik).',
          'Jediné optimum, vícenásobné optimum, cyklické řešení a divergentní řešení.',
          'Pouze optimum nebo neexistence řešení; ostatní varianty v LP nemohou nastat.'
        ],
        correct: 0,
        a: `1) Jediné optimální řešení – vrchol mnohostěnu, vrstevnice ÚF se ho dotýká v jednom bodě.
2) Alternativní optima – vrstevnice ÚF je rovnoběžná s některou stranou přípustné oblasti (nekonečně mnoho řešení).
3) Neomezené řešení – přípustná oblast je otevřená ve směru zlepšování ÚF.
4) Neexistuje přípustné řešení – průnik polorovin je prázdný (rozporná omezení).`
      },
      {
        q: 'Co je účelová funkce v LP modelu a jakou má podobu?',
        choices: [
          'Lineární funkce z = Σc_j·x_j, která se minimalizuje nebo maximalizuje; vyjadřuje optimalizační kritérium.',
          'Nelineární funkce součinu proměnných; vyjadřuje stochastické kritérium úlohy.',
          'Soustava omezujících podmínek; minimalizuje se simplexovým algoritmem.'
        ],
        correct: 0,
        a: `Účelová funkce z = Σ c_j·x_j → min / max je kritérium, podle kterého optimalizujeme.
• Je lineární v rozhodovacích proměnných x_j s pevnými cenovými koeficienty c_j.
• Vyjadřuje ekonomický cíl: max zisku, min nákladů, max produkce, min odpadu atd.
• Vrstevnice ÚF jsou rovnoběžné nadroviny; v simplexu posouváme tuto vrstevnici přes vrcholy mnohostěnu.`
      },
      {
        q: 'Co je konvexní množina a proč je důležitá v LP?',
        choices: [
          'Množina, kde úsečka mezi libovolnými dvěma body leží celá uvnitř. Přípustná množina LP je konvexní – stačí prohledávat vrcholy.',
          'Množina s pravoúhlým ohraničením; pro LP není podstatná.',
          'Množina náhodných bodů; v LP slouží jen ke kontrole rozdělení proměnných.'
        ],
        correct: 0,
        a: `Konvexní množina = pro libovolné dva body x, y z množiny leží celá úsečka λx + (1−λ)y, λ∈[0,1] uvnitř.
Význam pro LP:
• Průnik konečně mnoha polorovin (přípustná množina LP) je vždy konvexní.
• Lineární funkce nad konvexní množinou dosahuje extrému ve vrcholu.
• Lokální optimum = globální optimum.
• Stačí prohledávat konečnou množinu vrcholů → základ simplexu.`
      },
      {
        q: 'Uveďte obecný matematický zápis modelu lineárního programování.',
        choices: [
          'min/max z = c^T·x   za podmínek   A·x ≤/=/≥ b,   x ≥ 0.',
          'min z = A·x   za podmínek   c·x = 1, b libovolné.',
          'min z = Σ x_j²   za podmínek   Σ a_ij·x_j = b_i.'
        ],
        correct: 0,
        a: `Obecný zápis LP modelu:
   min nebo max  z = c^T · x = Σ_j c_j · x_j
   za podmínek:    Σ_j a_ij · x_j  {≤, =, ≥}  b_i,   i = 1..m
                    x_j ≥ 0   (případně volné)
Komponenty: vektor proměnných x ∈ R^n, vektor cen c, matice koeficientů A (m×n), vektor pravých stran b.`
      }
    ]
  },
  {
    id: 't2',
    title: 'Prostor požadavků, bázická řešení',
    short: 'T2',
    color: '#fb8c00',
    questions: [
      {
        q: 'Uveďte základní vlastnosti modelů lineárního programování.',
        choices: [
          'Linearita, aditivita, proporcionalita, dělitelnost, determinismus, konečnost.',
          'Nelinearita ÚF, multiplikativita omezení a stochasticita vstupů.',
          'Diskrétnost proměnných, nezápornost ÚF, konvexnost omezení – jiné vlastnosti LP nemá.'
        ],
        correct: 0,
        a: `• Linearita – ÚF i omezení jsou lineární.
• Aditivita – účinky proměnných se sčítají bez interakce.
• Proporcionalita – výstup se mění úměrně se vstupem.
• Dělitelnost – proměnné mohou nabývat reálných hodnot (jinak ILP).
• Determinismus – parametry c, A, b jsou pevně dané.
• Konečnost – konečný počet proměnných a omezení.`
      },
      {
        q: 'Charakterizujte pojmy přípustné, optimální, alternativní a suboptimální řešení.',
        choices: [
          'Přípustné splňuje omezení; optimální má extrémní ÚF; alternativní = více optim se stejnou ÚF; suboptimální = horší než optimum, ale přípustné.',
          'Přípustné = extrémní; optimální = nejlevnější; alternativní = degenerované; suboptimální = nepřípustné.',
          'Všechny pojmy jsou synonymní, liší se jen formálním označením.'
        ],
        correct: 0,
        a: `• Přípustné řešení – splňuje všechna omezení i nezápornost.
• Optimální řešení – přípustné s extrémní hodnotou ÚF.
• Alternativní optima – více optimálních řešení se stejnou hodnotou ÚF (celá hrana/stěna).
• Suboptimální řešení – přípustné, blízké optimu, ale s horší ÚF; uplatní se např. při dodatečných praktických omezeních.`
      },
      {
        q: 'Co je bázické a nebázické řešení modelu LP? Jak je bázické řešení reprezentováno graficky?',
        choices: [
          'Bázické: n−m proměnných je nula, zbylých m bázických tvoří vrchol mnohostěnu. Nebázické: není vrcholem.',
          'Bázické = všechny proměnné kladné; nebázické = některé proměnné záporné.',
          'Rozdíl existuje pouze v 2D modelech; v obecném LP je nedefinujeme.'
        ],
        correct: 0,
        a: `V kanonickém tvaru (n proměnných, m rovnic):
• Bázické řešení – právě n−m proměnných je nula (nebázické), zbylých m je bázických (sloupce A jsou lineárně nezávislé). Odpovídá vrcholu přípustného mnohostěnu.
• Nebázické řešení – řešení, které není bázické (uvnitř / na hraně, ale ne ve vrcholu).`
      },
      {
        q: 'Co je degenerované řešení LP a jak vypadá graficky?',
        choices: [
          'Bázické řešení, kde alespoň jedna bázická proměnná = 0; graficky vrchol, jímž prochází více omezení než je nutné.',
          'Řešení, kde ÚF nabývá nulové hodnoty; graficky průsečík s osami.',
          'Stochastické řešení s pravděpodobností < 1; graficky se neznázorňuje.'
        ],
        correct: 0,
        a: `Degenerované bázické řešení = bázické řešení, ve kterém alespoň jedna bázická proměnná má hodnotu 0.
Graficky odpovídá vrcholu, jímž prochází více omezení, než je k jeho určení nutné (více než n nadrovin).
Důsledek: může způsobit cyklení simplexu; více tabulek odpovídá stejnému bodu.`
      },
      {
        q: 'K čemu slouží „základní věty LP" a jaké mají důsledky?',
        choices: [
          'Říkají, že přípustná množina je konvexní a existuje-li optimum, existuje i bázické. Důsledek: stačí prohledat vrcholy.',
          'Říkají, že každý LP má jednoznačné řešení; optimum leží uvnitř přípustné oblasti.',
          'Slouží jen k důkazu existence stochastických řešení; pro deterministické LP nemají význam.'
        ],
        correct: 0,
        a: `Základní věty LP:
1) Množina přípustných řešení je konvexní mnohostěn.
2) Existuje-li optimální řešení, existuje i bázické (vrcholové) optimální řešení.
3) Lokální optimum konvexní úlohy je globálním optimem.
Důsledek: stačí prohledat konečnou množinu vrcholů – přesně to dělá simplexová metoda.`
      },
      {
        q: 'Uveďte 4 možné výsledky řešení LP v prostoru požadavků.',
        choices: [
          'Jediné optimum (b v jednom bázovém kuželu), alternativní (b na hranici), neomezené (otevřený kužel), nepřípustné (b mimo kužel).',
          'Optimum, suboptimum, degenerace a cyklus – další výsledky nepřipadají v úvahu.',
          'Pouze tytéž 2 výsledky jako v prostoru řešení – jediné optimum nebo nepřípustné.'
        ],
        correct: 0,
        a: `V prostoru požadavků se hledá vyjádření vektoru b jako nezáporné kombinace sloupců A.
1) Jediné optimum – b leží uvnitř jediného bázového kuželu.
2) Alternativní optima – b na hranici dvou bázových kuželů se stejnou hodnotou ÚF.
3) Neomezené – kužel se otevírá ve směru zlepšení ÚF.
4) Nepřípustné – b mimo kužel nezáporných kombinací sloupců A.`
      },
      {
        q: 'Jak v prostoru požadavků určíte přípustnost a jak vyberete optimum?',
        choices: [
          'Přípustnost: b je nezáporná lineární kombinace sloupců A. Optimum: vybíráme bázi minimalizující (resp. maximalizující) ÚF.',
          'Přípustnost: b leží na osách souřadnic; optimum: největší úhel mezi sloupci A.',
          'Přípustnost: libovolná kombinace sloupců; optimum: největší norma sloupce.'
        ],
        correct: 0,
        a: `Přípustnost: b musí být vyjádřitelné jako nezáporná lineární kombinace m sloupců matice A → b leží v kuželu generovaném těmito sloupci.
Optimum: ze všech bázových kuželů, do kterých b spadá, vybereme ten s nejlepší hodnotou ÚF (pro min nejmenší vážený součet cen sloupců). Graficky: kreslíme aktivity a hledáme bázi obsahující b s extrémní ÚF.`
      },
      {
        q: 'Co je vrchol (extrémní bod) konvexního mnohostěnu?',
        choices: [
          'Bod, který nelze vyjádřit jako konvexní kombinaci dvou různých bodů mnohostěnu; odpovídá bázickému přípustnému řešení.',
          'Libovolný vnitřní bod přípustné množiny.',
          'Geometrický střed mnohostěnu, vždy průměr všech vrcholů.'
        ],
        correct: 0,
        a: `Extrémní bod (vrchol) mnohostěnu = bod x, který nelze zapsat jako x = λu + (1−λ)v pro λ ∈ (0,1) a dva různé body u, v z mnohostěnu.
Význam:
• Každé bázické přípustné řešení LP odpovídá vrcholu přípustného mnohostěnu (a naopak).
• Optimum lineární ÚF nad mnohostěnem se vždy nachází alespoň v jednom vrcholu.
• Počet vrcholů je konečný → simplex prohledává konečnou množinu.`
      },
      {
        q: 'Kolik nejvýše bázických řešení může mít LP s n proměnnými a m omezeními (rovnicemi)?',
        choices: [
          'Maximálně C(n,m) = n! / (m!·(n−m)!) – ne všechna ale musí být přípustná.',
          'Vždy přesně n + m bázických řešení.',
          'Vždy přesně m · n bázických řešení.'
        ],
        correct: 0,
        a: `V kanonickém tvaru s n proměnnými a m rovnicemi tvoří bázi libovolných m sloupců matice A, které jsou lineárně nezávislé.
• Maximální počet bázických řešení = počet kombinací výběru m sloupců z n: C(n,m) = n! / (m!·(n−m)!).
• Ne všechna jsou přípustná (mohou porušit nezápornost) a ne všechna různá (degenerace).
• Simplex prohledává jen přípustná v cíleném pořadí, takže nemusí projít všechna.`
      },
      {
        q: 'Co je konvexní kombinace bodů a jaký má význam v LP?',
        choices: [
          'Vyjádření bodu jako Σλ_i·x_i, kde λ_i ≥ 0 a Σλ_i = 1. Každý bod přípustné množiny LP je konvexní kombinací jejích vrcholů.',
          'Náhodné rozdělení bodů v prostoru s pravděpodobností ≥ 0.',
          'Aritmetický průměr libovolných dvou bodů; nesouvisí s LP.'
        ],
        correct: 0,
        a: `Konvexní kombinace bodů x_1,…,x_k = bod ve tvaru x = Σλ_i·x_i, kde λ_i ≥ 0 a Σλ_i = 1.
Význam pro LP:
• Každý bod konvexního mnohostěnu lze vyjádřit jako konvexní kombinaci jeho vrcholů (Krein-Milmanova věta).
• Alternativní optimum tvoří konvexní kombinaci optimálních vrcholů.
• Geometrická intuice pro důkaz, proč optimum LP vždy leží ve vrcholu.`
      }
    ]
  },
  {
    id: 't3',
    title: 'Simplexový algoritmus',
    short: 'T3',
    color: '#f57c00',
    questions: [
      {
        q: 'Uveďte dvě základní podmínky aplikovatelnosti simplexového algoritmu.',
        choices: [
          'Kanonický tvar (jednotková báze) a nezápornost pravých stran b ≥ 0. Zajišťují výchozí přípustné bázické řešení.',
          'Linearita ÚF a deterministika parametrů – bez nich simplex diverguje.',
          'Stochasticita vstupů a celočíselnost proměnných.'
        ],
        correct: 0,
        a: `1) Model musí být v kanonickém tvaru (rovnicový tvar s jednotkovou submaticí báze).
2) Pravé strany b_i ≥ 0.
Význam: zaručují existenci výchozího bázického přípustného řešení x_B = b, x_N = 0, od kterého simplex iteruje.`
      },
      {
        q: 'Popište postup převodu modelu z nerovnicového do rovnicového tvaru.',
        choices: [
          'Pro ≤ přidat slack s_i; pro ≥ odečíst surplus a přidat umělou; pro = přidat umělou. Simplex pracuje s rovnicemi.',
          'Všechna omezení vynásobit −1 a tím se nerovnice automaticky stanou rovnicemi.',
          'Převést pomocí absolutních hodnot; simplex pak řeší přímo nerovnice.'
        ],
        correct: 0,
        a: `• Omezení ≤: doplníme přídatnou (slack) proměnnou s_i ≥ 0 → Σa_ij·x_j + s_i = b_i.
• Omezení ≥: odečteme přebytkovou s_i a přidáme umělou a_i → Σa_ij·x_j − s_i + a_i = b_i.
• Omezení =: přidáme jen umělou proměnnou.
Proč: simplex pracuje výhradně s rovnicemi.`
      },
      {
        q: 'Popište postup převodu modelu z rovnicového do kanonického tvaru. Proč to děláme?',
        choices: [
          'Zajistit jednotkovou submatici báze (slack u ≤, umělé u ≥ a =), b ≥ 0. Cíl: získat výchozí bázické přípustné řešení.',
          'Diagonalizovat A Gaussovou eliminací; b ponechat. Cíl: zjednodušit výpočet.',
          'Normovat řádky tak, aby b = 1; přeuspořádat sloupce.'
        ],
        correct: 0,
        a: `Kanonický tvar = rovnicový tvar + jednotková submatice báze + b ≥ 0.
Postup: u omezení ≤ slouží přídatné proměnné jako jednotkové sloupce; u omezení ≥ a = doplníme umělé proměnné (s velkou penalizací M nebo dvoufázový simplex).
Proč: získáme výchozí bázické přípustné řešení.`
      },
      {
        q: 'Uveďte typy proměnných v modelech LP a jejich interpretaci.',
        choices: [
          'Strukturní (rozhodnutí), přídatné (slack u ≤), přebytkové (surplus u ≥), umělé (pro získání báze, v ÚF +M).',
          'Závislé a nezávislé; cenové a kapacitní – jiné proměnné v LP neexistují.',
          'Pouze strukturní a umělé; přídatné a přebytkové nemají v LP smysl.'
        ],
        correct: 0,
        a: `• Strukturní (rozhodovací) – vlastní rozhodnutí (kolik vyrobit).
• Přídatné (slack) – u ≤; nevyužitá kapacita zdroje.
• Přebytkové (surplus) – u ≥; o kolik byl požadavek překročen.
• Umělé – pomocné, pro vytvoření výchozí báze; v optimu musí být nulové, jinak je úloha nepřípustná.`
      },
      {
        q: 'Uveďte typy omezujících podmínek v LP a příklady použití.',
        choices: [
          'Kapacitní ≤ (nepřekročit zdroj), požadavkové ≥ (min dieta), bilanční = (přesná rovnost) + nezápornost.',
          'Rovnice, kvadrát a logaritmus – všechny musí platit najednou.',
          'Stochastické, deterministické a smíšené.'
        ],
        correct: 0,
        a: `• Kapacitní (≤) – nepřekročení dostupné kapacity zdroje (stroje, materiál).
• Požadavkové (≥) – minimální splnění poptávky/nutričního požadavku.
• Bilanční (=) – přesná rovnost (množství vyrobené = expedované, směšování).
• Podmínky nezápornosti x_j ≥ 0.`
      },
      {
        q: 'Co obsahuje obecná simplexová tabulka a jaké informace poskytuje?',
        choices: [
          'c_j, c_B, x_B, B⁻¹·a_j, b̄ = B⁻¹·b a kritéria z_j−c_j. Poskytuje řešení, hodnotu ÚF, testy optimality i přípustnosti.',
          'Pouze cenový vektor a vektor pravých stran; ostatní data se ukládají externě.',
          'Tabulka koeficientů původní matice A bez úprav.'
        ],
        correct: 0,
        a: `Hlavička: ceny c_j proměnných.
Levý sloupec: c_B (ceny bázických), x_B (názvy bázických).
Tělo: aktuální koeficienty B⁻¹·a_j, vpravo sloupec b̄ = B⁻¹·b.
Spodní řádek (z_j − c_j) – redukované ceny, v rohu hodnota ÚF.
Poskytuje: aktuální bázické řešení, hodnotu ÚF, testy optimality a přípustnosti, citlivostní informace.`
      },
      {
        q: 'Popište test optimality v simplexové tabulce.',
        choices: [
          'Pro max: pokud všechny z_j−c_j ≥ 0, jsme v optimu; jinak vstupuje proměnná s nejmenším (nejvíce záporným) z_j−c_j.',
          'Pokud všechny b_i ≥ 0, jsme v optimu; jinak vystoupí ta proměnná s nejmenší b_i.',
          'Pokud determinant báze = 1, je v optimu; jinak se mění bázi náhodně.'
        ],
        correct: 0,
        a: `Účel: zjistit, zda lze řešení dále zlepšit.
Princip: zkoumají se redukované ceny c_j − z_j u nebázických proměnných.
Pro maximalizaci (kritérium z_j − c_j): všechny ≥ 0 ⇒ optimum. Jinak vstupuje proměnná s nejnižším (nejvíce záporným) z_j − c_j.
Pro minimalizaci platí opačná podmínka.`
      },
      {
        q: 'Popište test přípustnosti v simplexové tabulce.',
        choices: [
          'Pro vstupující proměnnou min{b̄_i/ā_ik | ā_ik>0} určí vystupující bázickou; zachová nezápornost. Jsou-li všechna ā_ik ≤ 0 → neomezené řešení.',
          'Součet všech b_i; vystoupí proměnná, jejíž součet je menší než průměr.',
          'Maximem c_j/a_ij určíme vystupující; znaménka a_ij se neuvažují.'
        ],
        correct: 0,
        a: `Účel: po výběru vstupující proměnné určit, která bázická opustí bázi tak, aby řešení zůstalo nezáporné.
Princip: poměrové pravidlo – pro řádky s a_ik > 0 spočítáme b̄_i/a_ik a vybereme min. Odpovídající řádek určuje vystupující bázickou.
Pokud jsou všechna a_ik ≤ 0 ⇒ úloha má neomezené řešení.`
      },
      {
        q: 'Co je dvoufázová simplexová metoda?',
        choices: [
          '1. fáze: minimalizujeme součet umělých proměnných (cíl 0) → najdeme přípustnou bázi. 2. fáze: optimalizujeme původní ÚF.',
          'První fáze řeší primár, druhá duál – obě se musí shodovat na stejné hodnotě.',
          'Zdvojnásobuje počet iterací simplexu pro vyšší numerickou přesnost.'
        ],
        correct: 0,
        a: `Dvoufázový simplex se používá, když výchozí báze obsahuje umělé proměnné.
1) Fáze 1: ÚF = Σ a_i (součet umělých proměnných) → min. Cíl: dostat všechny umělé proměnné na 0 → přípustné bázické řešení původního modelu.
   - Skončí-li fáze 1 s ÚF > 0, je úloha nepřípustná.
2) Fáze 2: vyhodíme umělé proměnné a optimalizujeme původní ÚF od přípustné báze získané v 1. fázi.
Alternativa: metoda Big-M (jednofázová, ale numericky citlivá).`
      },
      {
        q: 'Co je Big-M metoda?',
        choices: [
          'Umělé proměnné dostanou v ÚF velký penalizační koeficient ±M, čímž jsou v optimu vytlačeny z báze.',
          'Násobí všechny pravé strany velkou konstantou M pro lepší numerickou stabilitu.',
          'Zvětšuje matici A o M dalších sloupců s nulami.'
        ],
        correct: 0,
        a: `Big-M metoda – jednofázový přístup k modelům s umělými proměnnými.
Princip: každá umělá proměnná a_i dostane v ÚF velmi velký koeficient:
• pro min: +M (penalizujeme jejich kladnou hodnotu),
• pro max: −M.
Simplex je „nucen" vytlačit umělé proměnné z báze (na hodnotu 0). Pokud po optimalizaci umělá proměnná stále zůstane v bázi s kladnou hodnotou ⇒ úloha nepřípustná.
Nevýhoda: numerická citlivost (volba M).`
      },
      {
        q: 'Co je cyklení v simplexu a jak mu lze předejít?',
        choices: [
          'Opakované návraty k téže degenerované tabulce bez zlepšení ÚF; brání mu Blandovo pravidlo (proměnná s nejmenším indexem).',
          'Nekonečné zlepšování ÚF; pomůže ukončit po n iteracích.',
          'Jev výskytu pouze u nelineárních modelů; v LP nehrozí.'
        ],
        correct: 0,
        a: `Cyklení: u degenerovaných tabulek se může stát, že po několika iteracích simplex vrátí k téže bázi bez zlepšení ÚF (nekonečně se zacyklí).
Prevence:
• Blandovo pravidlo – při výběru vstupující i vystupující proměnné volíme tu s nejmenším indexem; cyklení je vyloučeno.
• Lexikografická perturbace.
V praxi je cyklení velmi vzácné; většina implementací používá Blandovo pravidlo jako pojistku.`
      }
    ]
  },
  {
    id: 't4',
    title: 'Interpretace výsledku, dualita',
    short: 'T4',
    color: '#ef6c00',
    questions: [
      {
        q: 'Jak v simplexové tabulce poznáte bázické a nebázické proměnné a jejich hodnoty?',
        choices: [
          'Bázické: sloupec je jednotkový vektor, hodnota = příslušné b̄. Nebázické: ostatní sloupce, hodnota = 0.',
          'Bázické jsou v posledním řádku tabulky; nebázické v prvním sloupci. Hodnoty = velikost koeficientu.',
          'Identifikace z tabulky není možná; nutno vyřešit původní soustavu znovu.'
        ],
        correct: 0,
        a: `• Bázické proměnné: jejich sloupec má tvar jednotkového vektoru (jedna 1, zbytek 0). Hodnota odpovídá příslušné složce sloupce b̄.
• Nebázické proměnné: sloupec nemá tvar jednotkového vektoru; v aktuálním bázickém řešení mají hodnotu 0.`
      },
      {
        q: 'Co je matice báze B a inverzní matice B⁻¹ a k čemu slouží?',
        choices: [
          'B = aktuální bázové sloupce A. B⁻¹ je v tabulce pod původně jednotkovými sloupci. Slouží k přepočtu x_B = B⁻¹·b a sloupců B⁻¹·a_j.',
          'B = celá matice A; B⁻¹ = její transpozice. Slouží jen k validaci dat.',
          'B je vektor cen, B⁻¹ vektor pravých stran; význam pouze teoretický.'
        ],
        correct: 0,
        a: `Matice báze B je tvořena m sloupci A odpovídajícími aktuálním bázickým proměnným. Inverzní B⁻¹ leží v aktuální tabulce ve sloupcích, kde byla původně jednotková matice.
Význam: x_B = B⁻¹·b (aktuální bázické řešení), nové sloupce = B⁻¹·a_j, duální ceny y = c_B · B⁻¹. Klíčové pro postoptimalizační analýzu.`
      },
      {
        q: 'Co jsou duální ceny proměnných? Jak je určíte a co znamenají?',
        choices: [
          'y = c_B·B⁻¹; stínové ceny – o kolik se změní ÚF při jednotkovém zvýšení pravé strany. V tabulce v řádku z_j−c_j ve sloupcích výchozí báze.',
          'y = b·c; udává poměr nákladů a výnosů. Najdeme je v záhlaví tabulky.',
          'y jsou náhodné koeficienty pro stochastické varianty modelu.'
        ],
        correct: 0,
        a: `Duální ceny y_i = řešení duální úlohy = c_B · B⁻¹.
V optimální tabulce jsou v řádku z_j−c_j ve sloupcích, kde byla původně jednotková matice (typicky u přídatných proměnných).
Interpretace (stínové ceny): y_i = o kolik se změní ÚF při zvýšení pravé strany i-tého omezení o jednotku (v intervalu stability báze). Vyjadřují „cenu" zdroje.`
      },
      {
        q: 'Určete obsah vektoru bázického a vektoru obecného řešení.',
        choices: [
          'x_B (rozměr m) – jen bázické proměnné. x (rozměr n) – všechny proměnné včetně nulových nebázických. Např. x_B=(20,5); x=(20,0,0,5,0).',
          'Oba vektory mají stejný rozměr a obsah, rozlišení je čistě formální.',
          'x_B je řešení duální úlohy, x je řešení primáru.'
        ],
        correct: 0,
        a: `• Vektor bázického řešení x_B (rozměr m): pouze hodnoty bázických proměnných, x_B = B⁻¹·b. Příklad: x_B = (x1=20, x4=5).
• Vektor obecného řešení x (rozměr n): obsahuje hodnoty všech proměnných modelu, včetně nulových nebázických. Příklad: x = (20, 0, 0, 5, 0).`
      },
      {
        q: 'Co je to dualita LP a kdy nám zjednodušuje řešení?',
        choices: [
          'Ke každému LP existuje duál; max↔min, omezení↔proměnné. Má-li primár hodně proměnných a málo omezení, snadnější je řešit duál.',
          'Dualita je shoda dvou stejných modelů; výhoda žádná, slouží jen ke kontrole.',
          'Dualita znamená rozdělení modelu na 2 fáze; výhoda – paralelizace výpočtu.'
        ],
        correct: 0,
        a: `Dualita: ke každé primární LP existuje úzce svázaná duální úloha (změna max ↔ min, řádky ↔ sloupce, b ↔ c).
Výhoda: pokud má primár málo proměnných a hodně omezení, je výhodnější řešit duál (menší tabulka, méně iterací).
Navíc poskytuje ekonomickou interpretaci (stínové ceny), je základem postoptimalizační analýzy a teorie LP.`
      },
      {
        q: 'Popište vztahy mezi prvky duálně sdružených úloh.',
        choices: [
          'Řádky ↔ sloupce, c ↔ b, ≤ ↔ y≥0, = ↔ y volné. Matice duálu = transpozice matice primáru.',
          'Vše stejné, jen se prohodí znaménka koeficientů c.',
          'Cenové koeficienty jdou na diagonálu, omezení do mimodiagonálních prvků.'
        ],
        correct: 0,
        a: `Primár (max, ≤): Σa_ij·x_j ≤ b_i, x_j ≥ 0, max Σc_j·x_j.
Duál (min, ≥): Σa_ij·y_i ≥ c_j, y_i ≥ 0, min Σb_i·y_i.
• Každému omezení primáru odpovídá proměnná duálu a naopak.
• Cenové koeficienty primáru = pravé strany duálu.
• Matice A duálu = transpozice A primáru.
• ≤ ↔ y ≥ 0, = ↔ y volné, x volné ↔ omezení =.`
      },
      {
        q: 'Co říká základní věta o dualitě a jaký je její význam?',
        choices: [
          'Má-li primár optimum, má i duál a hodnoty jejich ÚF jsou stejné: z*_P = z*_D. Slouží ke kontrole optimality a postoptimalizaci.',
          'Primár má vždy přípustné řešení i pokud duál ne, a naopak; hodnoty ÚF jsou opačné.',
          'Duál existuje jen pro maximalizační úlohy; věta určuje rychlost konvergence simplexu.'
        ],
        correct: 0,
        a: `Základní věta o dualitě: pokud má primární úloha optimální řešení, má i duální úloha optimální řešení a hodnoty jejich účelových funkcí jsou stejné: z*_P = z*_D.
Důsledky: slabá dualita (c·x ≤ b·y pro přípustná x, y), optimalita ↔ rovnost ÚF + komplementární uvolnění. Poskytuje silnou kontrolu optimality, ekonomickou interpretaci a důkaz konečnosti simplexu.`
      },
      {
        q: 'Co říká věta o komplementárním uvolnění (slackness)?',
        choices: [
          'V optimu platí: x_j > 0 ⇒ příslušné duální omezení v rovnosti; y_i > 0 ⇒ primární omezení v rovnosti.',
          'Primární a duální optimum jsou opačná čísla.',
          'Všechny duální proměnné y_i musí být v optimu nulové.'
        ],
        correct: 0,
        a: `Věta o komplementárním uvolnění (Complementary Slackness):
Pro optimální x*, y* primárně-duálního páru platí pro každou dvojici:
• x*_j · (c_j − a^j · y*) = 0  → pokud x_j > 0, příslušné duální omezení je v rovnosti.
• y*_i · (b_i − a_i · x*) = 0  → pokud y_i > 0, příslušné primární omezení je aktivní.
Interpretace: nenulové proměnné odpovídají aktivním omezením v sdružené úloze. Slouží ke kontrole optimality bez explicitního výpočtu obou úloh.`
      },
      {
        q: 'Jaký je rozdíl mezi slabou a silnou větou o dualitě?',
        choices: [
          'Slabá: pro libovolná přípustná x, y platí c·x ≤ b·y (max). Silná: existují-li optima, platí rovnost z*_P = z*_D.',
          'Slabá platí pro min, silná pro max úlohy.',
          'Slabá je jen pro celočíselné LP, silná pro spojité.'
        ],
        correct: 0,
        a: `Slabá věta o dualitě: pro libovolná přípustná řešení x (primár, max) a y (duál, min) platí c·x ≤ b·y. Hodnoty primáru vždy zdola ohraničují duál a naopak.
Silná věta o dualitě: má-li primár optimum, má i duál a optimální hodnoty se rovnají: z*_P = z*_D.
Důsledky: slabá dualita slouží k odhadu mezí (např. v B&B), silná k důkazu optimality a postoptimalizaci.`
      },
      {
        q: 'Jak interpretovat duální proměnnou y_i v úloze o výrobním programu?',
        choices: [
          'Stínová cena i-tého zdroje – maximální cena, kterou byste zaplatili za další jednotku tohoto zdroje.',
          'Celkový zisk z výroby produktu i.',
          'Počet jednotek výrobku i v optimálním řešení.'
        ],
        correct: 0,
        a: `Duální proměnná y_i odpovídá i-tému omezení (zdroji) a vyjadřuje stínovou cenu:
• Kolik se změní optimální hodnota ÚF, pokud se kapacita zdroje zvýší o jednotku.
• Maximální cena, kterou je výhodné zaplatit za další jednotku zdroje.
Příklad: u zdroje s y_i = 50 Kč/h každá další hodina kapacity zvýší zisk o 50 Kč (v intervalu stability báze). Pro plně využitý zdroj y_i > 0, pro nevyužitý y_i = 0.`
      }
    ]
  },
  {
    id: 't5',
    title: 'Postoptimalizace, aplikace LP',
    short: 'T5–7',
    color: '#e65100',
    questions: [
      {
        q: 'Jak stanovíte nebázické řešení LP a maximální hodnotu nebázické proměnné?',
        choices: [
          'Položíme x_k = θ, x_B = B⁻¹·b − (B⁻¹·a_k)·θ; θ_max = min{b̄_i/ā_ik | ā_ik>0}. Není optimální (pokud byla c̄_k zlepšení), pro c̄_k=0 = alternativní optimum.',
          'Nebázickou proměnnou položíme rovnou kapacitě omezení; vždy zhoršuje ÚF.',
          'Nebázická řešení jsou vždy optimální a jejich hodnoty se odečtou přímo z tabulky.'
        ],
        correct: 0,
        a: `Nebázická proměnná x_k → θ; bázické se přepočítají: x_B = B⁻¹·b − (B⁻¹·a_k)·θ.
Maximální θ_max = min { b̄_i / ā_ik | ā_ik > 0 }; pro ā_ik ≤ 0 omezení neexistuje (otevřený směr).
Optimalita: pokud byla redukovaná cena c̄_k zlepšením (pro max kladná), nebázické řešení není optimální. Pro c̄_k = 0 jde o alternativní optimum.`
      },
      {
        q: 'Bylo rozhodnuto zařadit nový proces (nebázickou strukturní proměnnou). Jaký je postup?',
        choices: [
          'Spočítat c̄_j = c_j − c_B·B⁻¹·a_j. Pokud zlepšuje, provést simplexovou iteraci s ā_j = B⁻¹·a_j; Δz = c̄_j·θ.',
          'Sečíst c_j a a_ij; je-li součet kladný, proces je výhodný.',
          'Nový proces se zařadí vždy a jeho vliv se ignoruje až do konce výpočtu.'
        ],
        correct: 0,
        a: `1) Spočítat redukovanou cenu c̄_j = c_j − c_B · B⁻¹ · a_j.
2) Pro max: c̄_j ≤ 0 ⇒ nový proces nezlepší ÚF (x_j zůstane 0).
3) c̄_j > 0 ⇒ provedeme simplexovou iteraci: ā_j = B⁻¹·a_j, max θ z testu přípustnosti, výměna bázové proměnné.
4) Spočítáme nové hodnoty bázických proměnných, ÚF se zvýší o Δz = c̄_j · θ.`
      },
      {
        q: 'Po optimalizaci došlo ke změně kapacity jednoho zdroje. Jak určíte vliv změny?',
        choices: [
          'x\'_B = B⁻¹·b\'. Pokud je nezáporné, báze platí; nová ÚF z\' = z + y_i·Δb_i. Jinak nutná reoptimalizace (duální simplex).',
          'Nové b se dosadí do původní tabulky, ÚF se nemění.',
          'Změna pravé strany vždy vyžaduje úplné přepočítání simplexu od začátku.'
        ],
        correct: 0,
        a: `1) Nový vektor b' = b + Δb.
2) Spočítej nové bázické hodnoty x'_B = B⁻¹ · b'.
3) Pokud x'_B ≥ 0 → báze zůstává optimální. Nová hodnota ÚF z' = z + y_i · Δb_i (kde y_i je duální cena i-tého omezení).
4) Pokud některá složka záporná → báze ztrácí přípustnost, nutná reoptimalizace duálním simplexem.`
      },
      {
        q: 'K čemu slouží analýza stability báze vzhledem k pravým stranám?',
        choices: [
          'Určuje interval Δb_i, kde B⁻¹·(b+Δb) ≥ 0 (báze stále platí). Uvnitř intervalu se mění jen hodnoty proměnných a ÚF (lineárně).',
          'Určuje rozsah cenového koeficientu, při kterém ÚF zůstane stejná.',
          'Měří počet iterací simplexu před změnou báze.'
        ],
        correct: 0,
        a: `Účel: zjistit interval, ve kterém může pravá strana b_i kolísat, aniž by se změnila optimální báze (řešení zůstane přípustné).
Postup: B⁻¹·(b + e_i·Δb_i) ≥ 0 → řešením nerovností získáme dolní a horní mez ⟨Δb_i^L; Δb_i^U⟩.
Uvnitř intervalu se mění jen hodnoty bázických proměnných a ÚF (lineárně podle y_i), nikoliv struktura báze.`
      },
      {
        q: 'K čemu slouží analýza citlivosti na cenové koeficienty? Postup pro bázické a nebázické proměnné.',
        choices: [
          'Nebázická: stačí, aby zůstala c̄_j ≤ 0 (pro max). Bázická: změna c_j ovlivní celý c_B i redukované ceny ostatních; musí zůstat všechny příznivé.',
          'Pro obě skupiny stejně – zachovat součet c_j konstantní.',
          'Pro bázické změna nemá vliv; pro nebázické vyžaduje úplnou reoptimalizaci.'
        ],
        correct: 0,
        a: `Účel: určit rozsah c_j, ve kterém zůstane optimální řešení nezměněno.
• Nebázická x_j: postačí zachovat c̄_j ≤ 0 (max), tj. c_j ∈ ⟨−∞; z_j⟩.
• Bázická x_j: změna c_j ovlivní vektor c_B a tím všechny redukované ceny. Spočítají se nové c̄_k = c_k − (nový c_B)·B⁻¹·a_k a vyžaduje se, aby všechny zůstaly příznivé (≥ 0 pro max). Z toho dvojstranný interval pro c_j.`
      },
      {
        q: 'Podstata úlohy o výrobním programu a směšovací úlohy.',
        choices: [
          'Výrobní program: max zisk při kapacitních omezeních. Směšovací: min náklady směsi splňující kvalitativní požadavky.',
          'Výrobní program: min počet výrobků; směšovací: max objem směsi bez omezení.',
          'Obě úlohy jsou totožné, liší se jen názvem.'
        ],
        correct: 0,
        a: `Úloha o výrobním programu:
• Cíl max Σc_j·x_j (zisk z výroby), omezení = kapacity strojů, surovin, trhu. Proměnné x_j = množství výrobku j.
Směšovací úloha (dieta, slitiny, krmiva):
• Cíl min Σc_j·x_j (náklady směsi), omezení = minimální/maximální obsah jednotlivých složek, bilance hmotnosti. Proměnné x_j = množství komponenty ve směsi.`
      },
      {
        q: 'Podstata úlohy o řezných plánech a o plánování směn.',
        choices: [
          'Řezné plány: min odpad (počet řezných schémat) při splnění poptávky. Plánování směn: min mzdové náklady při pokrytí poptávky po pracovnících.',
          'Řezné plány: max velikost odpadu; plánování směn: max počet pracovníků na směnu.',
          'Obě úlohy řeší dopravu materiálu mezi stanovišti.'
        ],
        correct: 0,
        a: `Řezné plány:
• Cíl min odpad (resp. min počet řezných schémat / polotovarů) při řezání základního formátu na požadované díly. Proměnné = počet použití každého řezného schématu, omezení = splnit požadavky.
Plánování směn:
• Cíl min mzdové náklady / počet pracovníků. Proměnné = počet pracovníků nastupujících v daném časovém slotu, omezení = pokrýt poptávku po pracovní síle v každé hodině.`
      },
      {
        q: 'Jak postupujeme při přidání nové omezující podmínky po optimalizaci?',
        choices: [
          'Otestujeme stávající optimum. Pokud podmínku splňuje, řešení platí. Jinak ji přidáme do tabulky a reoptimalizujeme duálním simplexem.',
          'Zahájíme simplex od začátku, předchozí výsledky zahodíme.',
          'Novou podmínku ignorujeme – LP je citlivé jen na změnu ÚF.'
        ],
        correct: 0,
        a: `Postup:
1) Dosadíme optimální řešení x* do nové podmínky.
2) Pokud x* splňuje → optimum zůstává.
3) Pokud nesplňuje → přidáme řádek do simplexové tabulky (s vlastní přídatnou nebo umělou proměnnou), spočítáme jeho vyjádření v aktuální bázi a aplikujeme duální simplex.
Duální simplex odstraní nepřípustnost při zachování příznivých redukovaných cen.`
      },
      {
        q: 'Co je celočíselné programování (IP) a jaký má vztah k LP?',
        choices: [
          'Varianta LP s celočíselnými (nebo binárními) proměnnými. Řeší se metodou větvení a omezení (B&B); aplikace: lokace skladů, výběr projektů.',
          'LP a IP jsou totožné, IP je jen formální označení.',
          'IP řeší pouze maximalizační úlohy s reálnými proměnnými.'
        ],
        correct: 0,
        a: `Celočíselné programování (IP – Integer Programming): LP s dodatečnou podmínkou, že některé / všechny proměnné musí být celočíselné. Speciální případ – 0-1 IP (binární).
Vztah k LP:
• LP relaxace IP poskytuje horní / dolní mez optima.
• IP je obecně NP-těžké, nelze řešit přímo simplexem.
• Klasické algoritmy: Branch & Bound, Cutting Planes, Branch & Cut.
Aplikace: výběr investičních projektů, lokace skladů, plánování posádky, řezné plány s celočíselnými počty.`
      },
      {
        q: 'Jak změna technologického koeficientu a_ij ovlivní optimální řešení?',
        choices: [
          'Pro nebázickou proměnnou stačí přepočítat c̄_j; pro bázickou: změna ovlivní inverzní bázi, zpravidla nutná reoptimalizace.',
          'Žádný vliv – technologické koeficienty se po optimalizaci nemění.',
          'Vždy vyžaduje úplné nové sestavení modelu od začátku.'
        ],
        correct: 0,
        a: `Změna a_ij ovlivní jeden sloupec matice A.
• Sloupec nebázické proměnné: stačí přepočítat ā_j = B⁻¹·a_j a novou redukovanou cenu c̄_j. Pokud zůstane nepříznivá → optimum platí; jinak provedeme simplexovou iteraci.
• Sloupec bázické proměnné: změna ovlivní samotnou matici B, tedy i B⁻¹ a všechny sloupce v tabulce. Zpravidla je nutná reoptimalizace (přepočet inverze, kontrola přípustnosti i optimality).`
      }
    ]
  },
  {
    id: 't8',
    title: 'Jednostupňová dopravní úloha I',
    short: 'T8',
    color: '#43a047',
    questions: [
      {
        q: 'Uveďte podstatu a komponenty jednostupňové dopravní úlohy.',
        choices: [
          'm dodavatelů (a_i), n spotřebitelů (b_j), sazby c_ij, proměnné x_ij ≥ 0. ÚF min Σc_ij·x_ij, bilance Σx_ij=a_i a Σx_ij=b_j.',
          'Pouze 1 dodavatel a n spotřebitelů; bilance jen pro spotřebitele.',
          'Síťová úloha bez sazeb; cílem je maximalizovat tok.'
        ],
        correct: 0,
        a: `Dopravní úloha: rozvozový plán mezi m dodavateli a n spotřebiteli při minimálních dopravních nákladech.
Komponenty:
• Kapacity dodavatelů a_i, požadavky spotřebitelů b_j.
• Jednotkové sazby c_ij.
• Proměnné x_ij ≥ 0 (přepravené množství).
• ÚF: min Σ c_ij·x_ij; bilance Σ_j x_ij = a_i, Σ_i x_ij = b_j.`
      },
      {
        q: 'Co je vyváženost dopravní úlohy a jak ji dosáhneme?',
        choices: [
          'Σa_i = Σb_j. Při nerovnováze přidáme fiktivního dodavatele/spotřebitele s nulovými sazbami.',
          'Σa_i ≥ Σb_j vždy; jinak úloha nemá řešení a nelze ji upravit.',
          'Vyváženost znamená, že všechny sazby c_ij jsou stejné.'
        ],
        correct: 0,
        a: `Vyváženost: Σa_i = Σb_j (celková kapacita = celková potřeba).
Pokud Σa_i > Σb_j → přidá se fiktivní spotřebitel s požadavkem rovným přebytku a nulovými sazbami.
Pokud Σa_i < Σb_j → přidá se fiktivní dodavatel s kapacitou rovnou rozdílu a nulovými (případně penalizačními) sazbami.
Bez vyváženosti nelze model řešit dopravním algoritmem (rovnicový tvar bilancí).`
      },
      {
        q: 'Princip metody severozápadního rohu a kvalita jejího výsledku.',
        choices: [
          'Plníme od levého horního rohu x_ij = min(a_i,b_j) a postupujeme dolů/vpravo. Ignoruje sazby – suboptimální výsledek.',
          'Vybíráme buňku s nejvyšší sazbou; dává optimální řešení.',
          'Náhodné plnění tabulky; používá se jen ke kontrole.'
        ],
        correct: 0,
        a: `Princip: začínáme v levém horním rohu, v aktuální buňce naplníme x_ij = min(a_i, b_j), snížíme zbývající kapacitu/požadavek a posuneme se do dalšího řádku/sloupce.
Použití: rychlé sestavení výchozího bázického řešení (m+n−1 obsazených polí).
Kvalita: nezohledňuje sazby c_ij → výsledek zpravidla daleko od optima, ale je extrémně jednoduchý.`
      },
      {
        q: 'Princip indexové metody a kvalita jejího výsledku.',
        choices: [
          'Opakovaně obsadíme buňku s nejnižší sazbou hodnotou min(a_i,b_j). Lepší než severozápadní roh, ale stále suboptimální.',
          'Náhodný výběr buněk podle indexu řádku.',
          'Vychází z duálních cen a vždy dává optimum.'
        ],
        correct: 0,
        a: `Princip: opakovaně vybereme neobsazenou buňku s nejnižší sazbou c_ij, naplníme ji hodnotou min(a_i, b_j); příslušný řádek/sloupec se vyčerpá a postupujeme dál.
Použití: konstrukce výchozího bázického řešení.
Kvalita: lepší než severozápadní roh (využívá sazby), ale stále zpravidla suboptimální.`
      },
      {
        q: 'Princip Vogelovy aproximační metody (VAM) a kvalita výsledku.',
        choices: [
          'Pro každý řádek/sloupec penalta = rozdíl dvou nejmenších sazeb. Obsazujeme nejlevnější buňku v řádku/sloupci s nejvyšší penaltou. Často optimum nebo blízko.',
          'Náhodný výběr buněk; kvalita stejná jako severozápadní roh.',
          'Maximalizace průměrné sazby v řádku; suboptimální.'
        ],
        correct: 0,
        a: `Princip: pro každý řádek a sloupec vypočítáme penaltu = rozdíl dvou nejmenších sazeb v daném řádku/sloupci. Vybereme řádek/sloupec s nejvyšší penaltou (kde nás opomenutí nejvíc bolí), v něm obsadíme buňku s nejnižší sazbou hodnotou min(a_i,b_j) a přepočteme penalty.
Kvalita: nejlepší ze tří metod – často přímo optimum nebo velmi blízko.`
      },
      {
        q: 'Co je to degenerace v dopravní úloze a jak se odstraňuje?',
        choices: [
          'Počet obsazených polí < m+n−1. Vzniká vyčerpáním řádku i sloupce naráz. Odstraní se přidáním nulové dodávky ε do vhodné buňky.',
          'Žádné obsazené pole; vzniká chybou výpočtu a nelze odstranit.',
          'Příliš mnoho obsazených polí; přebytečná se vymažou.'
        ],
        correct: 0,
        a: `Degenerace: počet obsazených (bázických) polí je menší než m+n−1.
Vznik: během konstrukce výchozího řešení se naráz vyčerpá řádek i sloupec (a_i = b_j v dané buňce).
Určení: spočítáme obsazená pole.
Odstranění: do vhodné neobsazené buňky vložíme „nulovou dodávku" (ε ≈ 0) tak, aby vznikla úplná báze (m+n−1 polí) a aby nevzniknul cyklus s obsazenými poli.`
      },
      {
        q: 'Kolik obsazených (bázických) polí má řešení vyvážené dopravní úlohy?',
        choices: [
          'Přesně m + n − 1. Pokud méně, řešení je degenerované.',
          'Vždy m · n – každé pole tabulky musí být obsazené.',
          'Závisí na sazbách c_ij a nelze obecně určit.'
        ],
        correct: 0,
        a: `Vyvážená dopravní úloha o m dodavatelích a n spotřebitelích má m + n bilančních rovnic, ale jsou lineárně závislé (Σa_i = Σb_j), takže nezávislých je m + n − 1.
Důsledek: bázické přípustné řešení má právě m + n − 1 obsazených (bázických) polí, ostatní jsou 0.
• Méně obsazených → degenerace (řešíme ε-dodávkou).
• Více obsazených → není to bázické řešení.`
      },
      {
        q: 'Proč musí být dopravní úloha vyvážená?',
        choices: [
          'Aby bilance měly rovnicový tvar (Σa_i = Σb_j) – podmínka pro řešení dopravním algoritmem.',
          'Aby všechny sazby c_ij byly stejné.',
          'Není to nutné, nevyvážený model lze řešit přímo.'
        ],
        correct: 0,
        a: `Vyváženost Σa_i = Σb_j je nezbytná:
• Bilance Σ_j x_ij = a_i a Σ_i x_ij = b_j musí být současně splnitelné.
• Dopravní algoritmus (MODI, stepping-stone) předpokládá rovnicový tvar.
• Při nerovnováze přidáme fiktivního dodavatele nebo spotřebitele s nulovými sazbami – tím se model vyváží bez ovlivnění optimálních toků mezi reálnými uzly.`
      },
      {
        q: 'Jaký je vztah dopravní úlohy a obecného LP?',
        choices: [
          'DÚ je speciální LP s rovnicovými bilancemi a 0/1 koeficienty (totální unimodularita) – řešení je při celočíselných a, b automaticky celočíselné.',
          'DÚ je nelineární úloha a nelze ji řešit metodami LP.',
          'DÚ a LP nemají žádný společný matematický základ.'
        ],
        correct: 0,
        a: `Dopravní úloha je speciální případ LP s velmi specifickou strukturou matice A:
• Každá proměnná x_ij má v matici jen dvě jedničky – v řádku dodavatele i a v řádku spotřebitele j.
• Totální unimodularita ⇒ při celočíselných a_i, b_j je optimum automaticky celočíselné.
• Lze řešit plným simplexem, ale efektivnější je dopravní algoritmus (MODI) využívající tabulkovou strukturu.
• MODI je v podstatě simplex aplikovaný na tuto speciální reprezentaci.`
      }
    ]
  },
  {
    id: 't9',
    title: 'Jednostupňová dopravní úloha II',
    short: 'T9',
    color: '#388e3c',
    questions: [
      {
        q: 'Princip metody MODI při řešení dopravní úlohy.',
        choices: [
          'Pro obsazená pole u_i+v_j=c_ij (u_1=0). Pro neobsazená δ_ij=c_ij−(u_i+v_j). Všechny δ ≥ 0 ⇒ optimum (pro min).',
          'Hledáme nejvyšší sazbu v tabulce a obsadíme ji.',
          'Spočítá průměr sazeb; pokud je vyšší než počáteční odhad, opakujeme.'
        ],
        correct: 0,
        a: `MODI (modifikovaná distribuční metoda) testuje optimalitu výchozího řešení.
1) Pro obsazená pole nastavíme u_i + v_j = c_ij (m+n neznámých, m+n−1 rovnic, u_1 = 0 dopočítáme zbytek).
2) Pro neobsazená pole vypočítáme δ_ij = c_ij − (u_i + v_j).
3) Všechny δ_ij ≥ 0 (min) → optimum.
4) Jinak vybereme nejzápornější δ_ij a přes Danzigův uzavřený obvod přepočítáme řešení.`
      },
      {
        q: 'Co je Danzigův uzavřený obvod a k čemu slouží?',
        choices: [
          'Cyklus obsazených polí + 1 neobsazené, střídavá znaménka +/−. Slouží k přepočtu při změně báze; θ = min |x| ve vrcholech se znaménkem −.',
          'Otevřená cesta od dodavatele ke spotřebiteli; slouží jen k vizualizaci.',
          'Algoritmus pro nejkratší cestu v dopravní síti; nesouvisí se simplexem.'
        ],
        correct: 0,
        a: `Danzigův uzavřený obvod = uzavřený cyklus tvořený obsazenými poli (s výjimkou jednoho startovacího neobsazeného), kde se v rozích střídá znaménko + a −.
Slouží k přepočtu řešení při zařazení neobsazené buňky do báze: najde se min |x_ij| v rozích se znaménkem „−" (= θ), tato hodnota se přičte ve vrcholech „+" a odečte v „−". Tím se zachová bilance i počet obsazených polí m+n−1.`
      },
      {
        q: 'Co je perspektivita dopravních tras a jak se analyzuje?',
        choices: [
          'Vlastnost neobsazené trasy, jejíž zařazení nezhorší ÚF (δ_ij = 0). Analýza pomocí MODI – perspektivní trasy = alternativní optimum.',
          'Trasa s největší vzdáleností v km; analyzuje se geometricky.',
          'Trasa s nejvyšší sazbou; analyzuje se vyloučením.'
        ],
        correct: 0,
        a: `Perspektivita = vlastnost neobsazené trasy, že její zařazení do řešení nezhorší hodnotu účelové funkce.
Analýza: spočítáme δ_ij metodou MODI pro neobsazené buňky.
• δ_ij = 0 → trasa je perspektivní (alternativní optimum, lze zařadit beze ztráty).
• δ_ij < 0 (pro min) → trasa zlepší řešení (musíme ji zařadit).
• δ_ij > 0 → není perspektivní.`
      },
      {
        q: 'Co je propustnost dopravních tras a jak se určuje?',
        choices: [
          'Max množství převoditelné danou trasou bez porušení kapacit. Určuje se přes Danzigův obvod jako min hodnot ve vrcholech se znaménkem „−".',
          'Maximální rychlost dopravy v jednotkách za hodinu; měří se externě.',
          'Propustnost = počet obsazených polí v tabulce.'
        ],
        correct: 0,
        a: `Propustnost = maximální množství, které lze danou trasou (i,j) převést, aniž bychom porušili kapacity a požadavky a opustili optimální bázi.
Analýza: pro neobsazenou perspektivní trasu sestavíme Danzigův obvod a určíme maximální θ = min hodnot ve vrcholech se znaménkem „−". To je propustnost dané trasy v rámci stávajícího řešení.`
      },
      {
        q: 'Co znamená, když jsou všechna δ_ij ≥ 0 v MODI (pro minimalizaci)?',
        choices: [
          'Aktuální řešení je optimální; δ_ij = 0 značí alternativní optimum.',
          'Úloha je nepřípustná; výpočet musíme ukončit.',
          'Je třeba pokračovat v iteracích donekonečna.'
        ],
        correct: 0,
        a: `δ_ij = c_ij − (u_i + v_j) je redukovaná cena neobsazené trasy.
• Všechna δ_ij ≥ 0 (pro min) → optimum, žádná neobsazená trasa nezlepší ÚF.
• δ_ij = 0 → alternativní optimum (zařazením trasy se ÚF nezmění).
• Existuje δ_ij < 0 → zlepšení možné zařazením této trasy přes Danzigův obvod.
Pro max je orientace opačná (hledáme všechna δ_ij ≤ 0).`
      },
      {
        q: 'Co je stepping-stone metoda v dopravní úloze?',
        choices: [
          'Testuje optimalitu přímo přes Danzigovy obvody – pro každou neobsazenou buňku spočítá změnu nákladů.',
          'Heuristika pro výchozí řešení, ekvivalent severozápadního rohu.',
          'Analýza citlivosti pravých stran, ekvivalent MODI.'
        ],
        correct: 0,
        a: `Stepping-stone metoda testuje optimalitu dopravní úlohy přímo přes Danzigovy obvody.
Postup pro každou neobsazenou buňku (i,j):
1) Najdeme uzavřený obvod obsazených polí.
2) Spočítáme změnu nákladů Δ_ij střídavým + a − koeficienty c po obvodu.
3) Pokud všechna Δ_ij ≥ 0 (pro min) → optimum; jinak vybereme nejvýhodnější buňku a zařadíme ji do báze.
Funkčně ekvivalentní MODI; MODI je výpočetně rychlejší (nemusíme stavět obvod pro každou buňku).`
      },
      {
        q: 'Jaký je obecný postup řešení jednostupňové dopravní úlohy?',
        choices: [
          '1) Vyvážení. 2) Výchozí řešení (SZ roh / index / VAM). 3) MODI test optimality. 4) Při neoptimu Danzigův obvod a výměna báze. 5) Opakovat.',
          '1) Aplikovat simplex. 2) Spočítat duál. 3) Porovnat oba.',
          '1) Náhodné rozložení. 2) Iterativní vyhlazování bez kontroly optimality.'
        ],
        correct: 0,
        a: `Klasický postup:
1) Vyvážení úlohy (Σa = Σb; doplnit fiktivního dodavatele/spotřebitele).
2) Konstrukce výchozího bázického přípustného řešení (severozápadní roh, indexová metoda, VAM).
3) Kontrola počtu obsazených polí (m+n−1; doplnění ε při degeneraci).
4) Test optimality MODI (výpočet u_i, v_j, δ_ij).
5) Je-li optimum → konec. Jinak nejzápornější δ_ij → Danzigův obvod → přepočet hodnot.
6) Opakovat kroky 4–5 do dosažení optima.`
      }
    ]
  },
  {
    id: 't10',
    title: 'Další dopravní modely',
    short: 'T10',
    color: '#2e7d32',
    questions: [
      {
        q: 'Podstata a komponenty přiřazovací úlohy.',
        choices: [
          'Speciální dopravní úloha s m=n, a_i=b_j=1, x_ij∈{0,1}. Cíl: 1:1 přiřazení s min/max součtem ohodnocení.',
          'Síťová úloha s mnoha zdroji a jedním cílem; proměnné jsou spojité.',
          'Maximalizace toku v síti s kapacitami; vždy max množství průchodu.'
        ],
        correct: 0,
        a: `Přiřazovací úloha = speciální dopravní úloha s m = n a a_i = b_j = 1.
Cíl: každému prvku z A přiřadit právě jeden prvek z B (1:1) tak, aby součet ohodnocení c_ij byl minimální (resp. zisků maximální).
Komponenty: matice ohodnocení c_ij, binární proměnné x_ij ∈ {0,1}, omezení Σ_j x_ij = 1 (každý řádek), Σ_i x_ij = 1 (každý sloupec).
Aplikace: přidělení pracovníků k úkolům, strojů k operacím.`
      },
      {
        q: 'K čemu slouží maďarská metoda a jaký je její princip?',
        choices: [
          'Řeší přiřazovací úlohu polynomiálně. Redukce řádků a sloupců, hledání nezávislého systému nul, opakovaná redukce dokud nemáme n nezávislých nul.',
          'Heuristika pro TSP typu nejbližší soused.',
          'Postoptimalizační metoda pro simplex; nesouvisí s přiřazením.'
        ],
        correct: 0,
        a: `Maďarská metoda řeší přiřazovací úlohu polynomiálně.
1) Redukce po řádcích – od každého řádku odečteme jeho minimum.
2) Redukce po sloupcích – obdobně.
3) Pokus o nalezení n nezávislých nul (pokrytí všech nul co nejmenším počtem čar).
4) Není-li n nezávislých nul → další redukce: min z nezakrytých prvků, odečte se od nezakrytých a přičte k dvakrát zakrytým. Opakujeme.
5) Po nalezení n nezávislých nul ⇒ optimální přiřazení.`
      },
      {
        q: 'Podstata a komponenty okružního dopravního problému (TSP).',
        choices: [
          'Navštívit n uzlů přesně jednou a vrátit se. Komponenty: uzly V, vzdálenosti d_ij, x_ij∈{0,1}, eliminace podcyklů.',
          'Doprava materiálu po kruhové trati s konstantní rychlostí, bez optimalizace.',
          'Hledání nejkratší cesty mezi dvěma uzly.'
        ],
        correct: 0,
        a: `TSP (Travelling Salesman Problem): navštívit n uzlů přesně jednou a vrátit se do výchozího uzlu při minimální celkové vzdálenosti.
Komponenty:
• Množina uzlů V, hrany E s ohodnocením d_ij.
• Proměnné x_ij ∈ {0,1} (zda hrana použita).
• Omezení: vstup i výstup do každého uzlu = 1, eliminace podcyklů.
Patří mezi NP-těžké úlohy.`
      },
      {
        q: 'Základní typy okružních dopravních problémů.',
        choices: [
          'Symetrický × asymetrický, otevřený × uzavřený, eukleidovský, mTSP (více cestujících), VRP (s kapacitami vozidel).',
          'Lineární × nelineární, deterministický × stochastický – jiné typy neexistují.',
          'Pouze TSP a jeho zrcadlový obraz.'
        ],
        correct: 0,
        a: `• Symetrický TSP – d_ij = d_ji.
• Asymetrický TSP – d_ij ≠ d_ji (jednosměrky).
• Otevřený × uzavřený – návrat / nenávrat do výchozího uzlu.
• Eukleidovský TSP – splněna trojúhelníková nerovnost.
• mTSP – více obchodních cestujících.
• VRP (Vehicle Routing) – s kapacitami vozidel a poptávkami uzlů.
• Dynamický TSP – uzly/vzdálenosti se v čase mění.`
      },
      {
        q: 'Kde se používá metoda nejbližšího souseda a jaký je její princip?',
        choices: [
          'TSP heuristika; z aktuálního uzlu jdi do nejbližšího nenavštíveného. Rychlá, suboptimální, citlivá na startovní uzel.',
          'Exaktní metoda pro TSP; vždy najde optimum.',
          'Algoritmus na MST; vybírá hrany s nejmenší vahou.'
        ],
        correct: 0,
        a: `Použití: heuristika pro TSP a další okružní problémy.
Princip: začneme v libovolném uzlu; z aktuálního přejdeme do nejbližšího dosud nenavštíveného uzlu. Opakujeme až navštívíme všechny, pak se vrátíme do výchozího.
Vlastnosti: rychlá O(n²), suboptimální (až desítky % nad optimum), citlivá na volbu počátečního uzlu.`
      },
      {
        q: 'Popište modifikaci VAM pro okružní dopravní problémy.',
        choices: [
          'Penalty z řádků/sloupců s blokovanou diagonálou; obsazujeme nejlevnější hranu v řádku/sloupci s nejvyšší penaltou; kontrolujeme nevznik podcyklů.',
          'Stejný postup jako u dopravní úlohy, bez úprav.',
          'Náhodný výběr hran; přijatelná jen pro malé instance.'
        ],
        correct: 0,
        a: `Vstup: matice vzdáleností se zakázanou (zablokovanou) hlavní diagonálou.
1) Pro každý řádek/sloupec spočítáme penaltu = rozdíl dvou nejmenších přípustných hodnot.
2) Vybereme řádek/sloupec s největší penaltou; v něm hranu s nejmenší vzdáleností, zařadíme do trasy.
3) Po každém výběru kontrolujeme, aby nevznikly podcykly (předčasné uzavření kratšího cyklu).
4) Opakujeme do sestavení Hamiltonovské kružnice.
Kvalita: dobrá heuristika, lepší než nejbližší soused.`
      },
      {
        q: 'Kde se používá Mayerova metoda a jaký je její princip?',
        choices: [
          'TSP heuristika typu insertion: začne malou kružnicí, postupně vkládá uzly na pozici s min přírůstkem d_ik+d_kj−d_ij.',
          'Eliminační metoda; odstraňuje uzly s nejvyšší vzdáleností.',
          'Metoda dělení a slučování; vyžaduje předem známé klastry.'
        ],
        correct: 0,
        a: `Mayerova metoda – heuristika pro TSP typu „insertion".
1) Začneme s krátkou výchozí kružnicí (např. ze 3 nejvzdálenějších uzlů nebo z konvexní obálky).
2) Pro každý nenavštívený uzel k najdeme pozici vložení mezi dva sousední i, j v aktuální trase tak, aby přírůstek d_ik + d_kj − d_ij byl minimální.
3) Uzel vložíme a opakujeme, dokud nejsou všechny uzly v trase.
Kvalita: lepší než nejbližší soused, zpravidla dobrá.`
      },
      {
        q: 'Jaký je rozdíl mezi přiřazovací a obecnou dopravní úlohou?',
        choices: [
          'Přiřazovací je speciální dopravní s m = n, a_i = b_j = 1 a binárními x_ij; jeden zdroj se přiřadí přesně jednomu cíli.',
          'Přiřazovací úloha má spojité proměnné a libovolné kapacity.',
          'V přiřazovací úloze se neminimalizují náklady, ale počet kroků.'
        ],
        correct: 0,
        a: `Přiřazovací úloha je speciální dopravní úloha s těmito zjednodušeními:
• m = n (stejně zdrojů jako cílů).
• Všechny kapacity i požadavky = 1.
• Proměnné x_ij ∈ {0, 1} (binární přiřazení 1:1).
Důsledky:
• Řešení je permutace zdrojů na cíle.
• Optimum je vždy celočíselné (totální unimodularita).
• Efektivnější než obecná DÚ je maďarská metoda – O(n³).`
      },
      {
        q: 'Co je metoda Branch and Bound (větvení a omezení) pro TSP?',
        choices: [
          'Exaktní metoda: dělí úlohu na podúlohy, pro každou počítá dolní mez, prořezává podúlohy s horší mezí než dosud nejlepší řešení.',
          'Heuristika pro rychlé suboptimální řešení s nepřesnými mezemi.',
          'Stejná jako maďarská metoda; používá se jen pro přiřazovací úlohu.'
        ],
        correct: 0,
        a: `Branch and Bound (B&B) – exaktní metoda pro NP-těžké úlohy včetně TSP.
Princip:
1) Větvení: úlohu rozdělíme na disjunktní podúlohy (např. „obsahuje hranu (i,j)" vs „neobsahuje").
2) Omezení: pro každou podúlohu spočítáme dolní mez ÚF (LP relaxace nebo přiřazovací úloha).
3) Prořezávání: pokud dolní mez ≥ dosud nejlepší známé řešení → podúlohu zahodíme.
4) Pokračujeme rekurzivně, dokud neproberme všechny větve.
Výsledek: garantované optimum, v nejhorším exponenciální čas.`
      },
      {
        q: 'Uveďte typickou praktickou aplikaci okružního dopravního problému.',
        choices: [
          'Plánování rozvozových tras (kurýrní služby, zásobování), trasa servisního technika, vrtání desek plošných spojů.',
          'Řešení směšovacích úloh ve farmacii.',
          'Plánování směn v call centru.'
        ],
        correct: 0,
        a: `Praktické aplikace TSP a variant:
• Logistika: rozvoz zboží, sběr odpadu, doručování (kurýři).
• Servisní výjezdy: technici navštěvující více klientů během dne.
• Výroba: cesta robota po desce plošných spojů, CNC obrábění více otvorů.
• Genetika: sekvenování DNA.
• VRP (Vehicle Routing) navíc zohledňuje kapacity vozidel a poptávky uzlů – nejbližší k reálné logistice.`
      }
    ]
  },
  {
    id: 't11',
    title: 'Teorie grafů',
    short: 'T11',
    color: '#1e88e5',
    questions: [
      {
        q: 'Co je graf? Jaký je rozdíl mezi orientovaným a neorientovaným grafem?',
        choices: [
          'Graf G=(V,E); V uzly, E hrany. Neorientovaný: hrany {u,v} obousměrné. Orientovaný: oblouky (u,v) se směrem.',
          'Pouze orientované struktury s konstantním ohodnocením hran.',
          'Pouze diagramy se symetrickou maticí sousednosti.'
        ],
        correct: 0,
        a: `Graf G = (V, E), kde V je neprázdná konečná množina uzlů (vrcholů) a E je množina hran spojujících dvojice uzlů.
• Neorientovaný graf – hrany jsou neuspořádané dvojice {u,v}; spojení je obousměrné.
• Orientovaný graf (digraf) – hrany (oblouky) jsou uspořádané dvojice (u,v) s definovaným směrem (jednosměrná silnice, datový tok).
Grafy mohou být ohodnocené (vážené) nebo neohodnocené.`
      },
      {
        q: 'Rozlište pojmy sled, tah, cesta, cyklus.',
        choices: [
          'Sled = libovolná posloupnost. Tah = bez opakovaných hran. Cesta = bez opakovaných uzlů. Cyklus = uzavřená cesta.',
          'Všechny pojmy jsou synonymní, liší se jen délkou.',
          'Sled = orientovaný; tah = neorientovaný; cesta = nejkratší; cyklus = nejdelší.'
        ],
        correct: 0,
        a: `• Sled = posloupnost střídajících se uzlů a hran u_0, e_1, u_1, e_2, … , kde každá hrana spojuje sousedící uzly; hrany i uzly se mohou opakovat.
• Tah = sled, ve kterém se hrany neopakují (uzly ano).
• Cesta = tah, ve kterém se neopakují ani uzly.
• Cyklus = uzavřená cesta (u_0 = u_n a ostatní uzly jsou různé).`
      },
      {
        q: 'Princip neinformovaného prohledávání grafů a vybraná metoda.',
        choices: [
          'Bez heuristiky. BFS (fronta FIFO, po vrstvách), DFS (zásobník/rekurze, do hloubky). Složitost O(|V|+|E|).',
          'Vždy s heuristikou, např. Manhattanova vzdálenost.',
          'Náhodné procházení uzlů; nelze garantovat nalezení cíle.'
        ],
        correct: 0,
        a: `Neinformované prohledávání nepoužívá heuristiku.
BFS (Breadth-First Search):
• Datová struktura: fronta (FIFO).
• Postup: vložíme start, opakovaně vyjmeme uzel, expandujeme sousedy a zařadíme na konec.
• Najde cestu s nejmenším počtem hran. Složitost O(|V|+|E|).
DFS (Depth-First Search):
• Zásobník / rekurze; jde do hloubky před návratem.`
      },
      {
        q: 'Princip informovaného prohledávání grafů a vybraná metoda.',
        choices: [
          'Heuristika h(n). A*: f(n)=g(n)+h(n); optimální při admisibilní h.',
          'Stejné jako BFS, jen v jiném názvosloví.',
          'Algoritmus pro řešení LP; v teorii grafů se nepoužívá.'
        ],
        correct: 0,
        a: `Informované prohledávání využívá heuristickou funkci h(n) – odhad vzdálenosti uzlu n k cíli.
Algoritmus A*:
• f(n) = g(n) + h(n), kde g je skutečná cena cesty z počátku do n, h je odhad zbývající cesty.
• Prioritní fronta uzlů podle f; expanduje uzel s nejmenším f.
• Optimální při admisibilní (a konzistentní) heuristice – nepřeceňuje skutečnou vzdálenost.`
      },
      {
        q: 'Úloha o hledání minimální kostry grafu – princip řešení.',
        choices: [
          'Strom přes všechny uzly s min součtem vah. Kruskal (hrany podle vah + kontrola cyklů), Prim (postupné rozšíření z uzlu).',
          'Cyklus přes všechny uzly s max součtem; algoritmus Dijkstra.',
          'Nejkratší cesta z fixního zdroje; Floyd-Warshall.'
        ],
        correct: 0,
        a: `Minimální kostra (MST): podgraf souvislého neorientovaného váženého grafu, který je stromem obsahujícím všechny uzly s minimálním součtem vah hran.
• Kruskalův algoritmus: hrany seřadíme dle vah vzestupně, postupně přidáváme nejlevnější hrany, pokud nevytvoří cyklus (Union-Find). Skončíme s |V|−1 hranami.
• Primův algoritmus: startujeme z libovolného uzlu, opakovaně přidáme nejlevnější hranu vedoucí ze stromu mimo něj.`
      },
      {
        q: 'Úloha o hledání nejkratší cesty v grafu – princip řešení.',
        choices: [
          'Dijkstra (váhy ≥ 0), Bellman-Ford (i záporné, bez záporných cyklů), Floyd-Warshall (všechny páry).',
          'Pouze BFS; Dijkstra je její speciální případ pro váhy 0.',
          'Hledání MST; nejkratší cesta = součet vah kostry.'
        ],
        correct: 0,
        a: `Cíl: cesta z s do t (nebo do všech) s minimálním součtem vah.
• Dijkstrův algoritmus (váhy ≥ 0): udržuje vzdálenosti d[u], opakovaně označuje uzel s nejmenší d a relaxuje jeho sousedy. Složitost O((V+E) log V) s prioritní frontou.
• Bellman-Ford (lze i záporné váhy, bez záporných cyklů): |V|−1× relaxujeme všechny hrany, detekuje záporné cykly.
• Floyd-Warshall: všechny páry, O(V³).`
      },
      {
        q: 'Úloha o hledání maximálního toku v síti – princip řešení.',
        choices: [
          'Max tok z s do t při kapacitách. Ford-Fulkerson hledá zlepšující cesty v reziduální síti; max-flow = min-cut.',
          'Maximální cesta v grafu bez kapacitních omezení.',
          'Součet vah všech hran v grafu.'
        ],
        correct: 0,
        a: `Síť: orientovaný graf s kapacitami u_ij ≥ 0, zdroj s, ústí t. Cíl: maximální tok z s do t.
Ford-Fulkersonova metoda:
1) Začni nulovým tokem.
2) V reziduální síti najdi zlepšující cestu z s do t (např. BFS = Edmonds-Karp).
3) Najdi minimální reziduální kapacitu po cestě a o tuto hodnotu zvyš tok.
4) Opakuj, dokud existuje zlepšující cesta.
Výsledek odpovídá min řezu (teorém max-flow / min-cut).`
      },
      {
        q: 'Co je strom v teorii grafů?',
        choices: [
          'Souvislý graf bez cyklů; má n−1 hran (pro n uzlů); mezi každými dvěma uzly existuje právě jedna cesta.',
          'Graf s cykly a izolovanými uzly bez společných hran.',
          'Strom má vždy n hran a n+1 uzlů.'
        ],
        correct: 0,
        a: `Strom = souvislý neorientovaný graf bez cyklů.
Vlastnosti:
• n uzlů, právě n − 1 hran.
• Mezi každými dvěma uzly existuje právě jedna cesta.
• Odebrání libovolné hrany ho rozpadne na 2 komponenty.
• Přidání libovolné hrany v něm vytvoří cyklus.
Speciální typy: zakořeněný strom (s vyznačeným kořenem), binární strom, kostra grafu (strom přes všechny uzly grafu, nejmenší kostra je MST).`
      },
      {
        q: 'Co je Eulerův tah a co Hamiltonovský cyklus?',
        choices: [
          'Eulerův tah projde každou hranou právě jednou. Hamiltonovský cyklus navštíví každý uzel právě jednou a vrátí se na začátek.',
          'Oba pojmy jsou synonymní – projdou všechny hrany i uzly.',
          'Eulerův tah je vždy nejkratší cesta; Hamiltonovský cyklus je vždy nejdelší.'
        ],
        correct: 0,
        a: `• Eulerův tah – tah procházející každou hranou grafu právě jednou. Existuje právě tehdy, má-li graf nejvýše 2 uzly lichého stupně.
• Eulerův cyklus – uzavřený Eulerův tah; existuje, pokud jsou všechny uzly sudého stupně.
• Hamiltonovský cyklus – uzavřená kružnice procházející každý uzel právě jednou. Rozhodnutí o jeho existenci je NP-úplné.
Eulerův problém je polynomiální (snadný), Hamiltonovský je NP-úplný. Klasická TSP úloha hledá optimální Hamiltonovský cyklus.`
      },
      {
        q: 'Co je bipartitní graf?',
        choices: [
          'Graf, jehož uzly lze rozdělit do dvou disjunktních množin tak, aby hrany vedly jen mezi nimi. Modeluje přiřazovací úlohu.',
          'Graf se dvěma stejně velkými klastry uzlů spojených uvnitř každého klastru.',
          'Graf, který má dvě komponenty souvislosti.'
        ],
        correct: 0,
        a: `Bipartitní graf G = (U ∪ V, E): množinu uzlů lze rozdělit na dvě disjunktní podmnožiny U, V tak, aby každá hrana spojovala uzel z U s uzlem z V (uvnitř U ani V žádné hrany).
Vlastnosti:
• Graf je bipartitní ⇔ neobsahuje cyklus liché délky.
• Modeluje přiřazovací úlohu (jedna strana = pracovníci, druhá = úkoly).
• Maximální párování v bipartitním grafu se řeší v polynomiálním čase (Hopcroft–Karp, O(E·√V)).`
      }
    ]
  },
  {
    id: 't12',
    title: 'Projektové řízení (CPM)',
    short: 'T12',
    color: '#8e24aa',
    questions: [
      {
        q: 'Co je projekt? Klíčová slova vybrané definice.',
        choices: [
          'Dočasné, jedinečné úsilí pro vytvoření jedinečného produktu/služby. Klíč: dočasný, jedinečný, koordinovaný, s cílem, s omezenými zdroji.',
          'Trvalá rutinní činnost s opakovanými výstupy.',
          'Souhrn libovolných paralelních úkolů bez společného cíle.'
        ],
        correct: 0,
        a: `Definice (ISO 21500 / PMI): „Projekt je dočasné, jedinečné úsilí podnikané za účelem vytvoření jedinečného produktu, služby nebo výsledku."
Klíčová slova:
• Dočasné – definovaný začátek i konec.
• Jedinečné – neopakovatelný výsledek nebo kontext.
• Úsilí / proces – koordinované činnosti.
• Cíl / výstup – jasně definovaný a měřitelný.
• Omezené zdroje – peníze, lidé, čas, materiál.`
      },
      {
        q: 'Pojmy „činnost" a „zdroj" v projektovém řízení – uveďte podstatu a příklady.',
        choices: [
          'Činnost = úkol s dobou trvání (stavba zdi). Zdroj = vstup nutný k realizaci (pracovník, stroj, peníze). Zdroje obnovitelné × neobnovitelné.',
          'Činnost a zdroj jsou totožné pojmy, rozlišení je formální.',
          'Činnost = milník v čase; zdroj = výstupní dokument.'
        ],
        correct: 0,
        a: `• Činnost (aktivita) = ucelený, definovaný úkol projektu s vlastní dobou trvání, vstupy a výstupy; spotřebovává zdroje. Příklady: vykopání základů, naprogramování modulu, školení uživatelů.
• Zdroj = vstup nutný k realizaci činnosti. Druhy: lidské (programátor), materiální (cement), finanční (rozpočet), časové (kalendář), informační (know-how).
Zdroje mohou být obnovitelné (pracovník) i neobnovitelné (rozpočet).`
      },
      {
        q: 'Charakterizujte graf typu síť.',
        choices: [
          'Orientovaný acyklický graf projektu. AOA (hrany = činnosti) nebo AON (uzly = činnosti). Jediný počáteční a koncový uzel.',
          'Neorientovaný graf se silnými cykly; obsahuje smyčky pro opakované činnosti.',
          'Strom všech zdrojů projektu; nezávisí na čase.'
        ],
        correct: 0,
        a: `Síťový graf projektu = orientovaný acyklický graf zobrazující strukturu projektu (logické vazby mezi činnostmi).
Typy reprezentace:
• AOA (Activity-On-Arrow) – hrany = činnosti, uzly = události.
• AON (Activity-On-Node) – uzly = činnosti, hrany = závislosti (běžnější v CPM/PERT).
Vlastnosti: jediný počáteční a koncový uzel, žádné cykly, hrany respektují závislosti předchůdce/následník.`
      },
      {
        q: 'Podstata a vlastnosti metody CPM. Co umožňuje zjistit?',
        choices: [
          'Deterministická síťová analýza s pevnými dobami trvání. Zjišťuje termíny, kritickou cestu, rezervy, min dobu trvání projektu.',
          'Stochastická metoda s pravděpodobnostními dobami trvání – ekvivalent PERT.',
          'Algoritmus pro alokaci zdrojů, který nemá vliv na termíny.'
        ],
        correct: 0,
        a: `CPM (Critical Path Method) – deterministická metoda síťové analýzy s pevnými dobami trvání činností.
Umožňuje zjistit:
• Nejkratší možnou dobu trvání projektu.
• Termíny činností (ZM, KM, ZP, KP).
• Kritickou cestu = posloupnost činností bez rezervy.
• Rezervy nekritických činností (celkovou, volnou, nezávislou, interferenční).
• Vliv prodloužení/zkrácení činnosti na termín projektu.`
      },
      {
        q: 'Popište způsob provedení časové analýzy v metodě CPM.',
        choices: [
          'Dopředný chod: ZM_j=max{KM předchůdců}, KM=ZM+t. Zpětný: KP_i=min{ZP následníků}, ZP=KP−t. Pak rezervy a kritická cesta.',
          'Pouze dopředný chod; ZP a KP se neurčují.',
          'Simulace Monte Carlo; deterministický postup neexistuje.'
        ],
        correct: 0,
        a: `1) Dopředný chod (forward pass): ZM_j = max{KM_i pro předchůdce i}, KM_j = ZM_j + t_j. Získáme nejdříve možné termíny.
2) Zpětný chod (backward pass) od koncového uzlu (KP = KM): KP_i = min{ZP_j pro následníky j}, ZP_i = KP_i − t_i. Získáme nejpozději přípustné termíny.
3) Z porovnání obou chodů spočítáme rezervy a identifikujeme kritickou cestu.`
      },
      {
        q: 'Co je kritická cesta v grafu projektu a jak ji určíte?',
        choices: [
          'Nejdelší cesta sítí; činnosti s RC = 0; její délka = min doba trvání projektu. Zpoždění kritické činnosti zpožďuje projekt.',
          'Nejkratší cesta sítí; činnosti s největší rezervou.',
          'Cesta s nejvyšší cenou činností; nesouvisí s dobou trvání.'
        ],
        correct: 0,
        a: `Kritická cesta = nejdelší cesta z počátečního do koncového uzlu sítě; její celková délka = min doba trvání projektu.
Tvoří ji činnosti s nulovou celkovou rezervou RC = KP − KM = ZP − ZM = 0.
Určení:
1) Provedeme dopředný a zpětný chod.
2) Pro každou činnost spočítáme RC.
3) Činnosti s RC = 0 → kritické. Jejich posloupnost od startu k cíli = kritická cesta. Může jich být víc.`
      },
      {
        q: 'Význam, interpretace a výpočet rezerv činností v CPM.',
        choices: [
          'RC=KP_j−ZM_i−t (celková), RV=ZM_j−ZM_i−t (volná), RN=max(0,ZM_j−ZP_i−t) (nezávislá), RI=RC−RV. RC=0 ⇒ kritická.',
          'Existuje pouze jeden typ rezervy = doba trvání činnosti.',
          'Rezervy mají jen finanční charakter (rozpočtová záloha).'
        ],
        correct: 0,
        a: `Rezerva uzlu R_i = ZP_i − ZM_i (kolik lze posunout událost bez ovlivnění termínu).
Rezervy činnosti (i,j) s dobou t_ij:
• Celková RC = ZP_j − ZM_i − t_ij – o kolik lze činnost posunout/prodloužit bez zpoždění projektu.
• Volná RV = ZM_j − ZM_i − t_ij – posun bez ovlivnění nejdříve možných začátků následníků.
• Nezávislá RN = max(0, ZM_j − ZP_i − t_ij) – posun bez ovlivnění ostatních činností v žádném směru.
• Interferenční RI = RC − RV.
Kritické činnosti: RC = 0. Rezervy slouží k vyrovnání zdrojů a řízení rizika.`
      },
      {
        q: 'Co je metoda PERT a jaký je rozdíl oproti CPM?',
        choices: [
          'PERT je stochastická síťová analýza s pravděpodobnostními dobami (3 odhady). CPM používá pevné deterministické doby.',
          'PERT je rychlejší verze CPM, ale méně přesná.',
          'PERT a CPM jsou totožné, liší se jen názvem.'
        ],
        correct: 0,
        a: `PERT (Program Evaluation and Review Technique) je stochastická verze síťové analýzy.
Rozdíl oproti CPM:
• CPM: pevné, deterministické doby trvání. Vhodné pro opakované projekty (stavebnictví).
• PERT: pro každou činnost 3 odhady (optimistický a, nejpravděpodobnější m, pesimistický b); doba je náhodná veličina (typicky β-rozdělení).
• PERT umožňuje vypočítat pravděpodobnost dokončení projektu k danému termínu.
Postup časové analýzy je obdobný (forward/backward pass) s očekávanými dobami t_e.`
      },
      {
        q: 'Jaký je vzorec pro očekávanou dobu trvání činnosti v metodě PERT?',
        choices: [
          't_e = (a + 4m + b) / 6, kde a = optimistický, m = nejpravděpodobnější, b = pesimistický. Rozptyl σ² = ((b−a)/6)².',
          't_e = (a + b) / 2, jednoduchý průměr extrémů.',
          't_e = m · (b − a), součin nejpravděpodobnější doby a rozsahu.'
        ],
        correct: 0,
        a: `V metodě PERT se očekávaná (střední) doba trvání činnosti počítá jako vážený průměr 3 odhadů:
   t_e = (a + 4m + b) / 6
   σ² = ((b − a) / 6)²,   σ = (b − a) / 6
kde a = optimistický, m = nejpravděpodobnější, b = pesimistický odhad.
Pro celý projekt: očekávaná doba kritické cesty = Σ t_e kritických činností; rozptyl projektu = Σ σ² (předpoklad nezávislosti). Pomocí Centrálního limitního teorému lze odhadnout pravděpodobnost dokončení projektu k danému termínu (normální aproximace).`
      },
      {
        q: 'Co je Ganttův diagram a jakou má roli v projektovém řízení?',
        choices: [
          'Sloupcový graf zobrazující činnosti na časové ose s dobou trvání, návaznostmi a překryvy; vizualizace harmonogramu.',
          'Graf finančních toků projektu v čase.',
          'Speciální typ síťového grafu pro stochastické projekty.'
        ],
        correct: 0,
        a: `Ganttův diagram = horizontální sloupcový graf:
• Osa x = časová osa projektu.
• Osa y = seznam činností.
• Délka sloupce = doba trvání činnosti.
• Pozice sloupce = počátek a konec činnosti.
Funkce:
• Vizualizace harmonogramu a milníků.
• Zobrazení rezerv (mezery / přesahy sloupců).
• Sledování postupu projektu (často plán vs skutečnost ve dvou barvách).
Doplňuje síťový graf: síť ukazuje logické vazby, Gantt časové rozložení.`
      }
    ]
  }
];
