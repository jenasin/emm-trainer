// EMM - Ekonomicko-matematické metody
// Otázky k rozpravě + modelové odpovědi (česky)

const TOPICS = [
  {
    id: 't1',
    title: 'Úvod do EMM, LP, prostor řešení',
    short: 'T1',
    color: '#ffa726',
    questions: [
      {
        q: 'Co je to modelování? Proveďte klasifikaci modelů podle alespoň jednoho hlediska. Ke každému typu modelů uveďte příklad.',
        a: `Modelování = vědecký postup zjednodušeného zobrazení reálného systému za účelem jeho zkoumání, analýzy nebo predikce.
Klasifikace podle formy:
• Fyzické (materiální) – zmenšený model letadla v aerodynamickém tunelu.
• Verbální (slovní) – textový popis fungování skladu.
• Grafické – schéma technologického procesu, vývojový diagram.
• Matematické – soustava rovnic / nerovnic (např. LP model výroby).
Další hlediska: statické × dynamické, deterministické × stochastické, popisné × normativní (optimalizační).`
      },
      {
        q: 'Co je to systém? Jaký je jeho význam v procesu systémového modelování?',
        a: `Systém = uspořádaná množina prvků a vazeb mezi nimi, která jako celek plní určitou funkci a interaguje se svým okolím.
Význam pro modelování:
• Vymezuje hranice (co je uvnitř, co je okolí).
• Definuje vstupy, výstupy a stavové veličiny.
• Určuje, které prvky a vazby je nutné v modelu zachytit a které lze zanedbat.
• Bez korektní systémové analýzy nelze sestavit smysluplný model – odtud "systémové modelování".`
      },
      {
        q: 'Uveďte podstatu a význam (možnosti aplikace) modelů lineárního programování.',
        a: `Podstata: nalezení extrému lineární účelové funkce při dodržení soustavy lineárních omezení a podmínek nezápornosti proměnných.
Význam: jeden z nejpoužívanějších optimalizačních nástrojů – existují efektivní algoritmy (simplex, vnitřní bod) a software (Solver, GAMS, LINDO).
Aplikace: úloha o výrobním programu, směšovací úloha, řezné plány, plánování směn, dopravní úloha, finanční plánování, dietní úloha, alokace zdrojů.`
      },
      {
        q: 'Uveďte a stručně popište komponenty modelů lineárního programování.',
        a: `1) Rozhodovací (strukturní) proměnné x_j – co optimalizujeme (objem výroby, převoz atd.).
2) Účelová funkce z = Σ c_j·x_j → min / max – kritérium optimality, lineární.
3) Soustava omezujících podmínek Σ a_ij·x_j ≤ / ≥ / = b_i – kapacity, požadavky, bilance.
4) Podmínky nezápornosti x_j ≥ 0 (případně proměnné volné).
5) Parametry modelu: cenové koeficienty c_j, technologické koeficienty a_ij, pravé strany b_i.`
      },
      {
        q: 'Uveďte a stručně charakterizujte dva základní způsoby grafického řešení modelů lineárního programování. Za jakých podmínek je možné je použít?',
        a: `a) Grafické řešení v prostoru řešení (přípustných hodnot proměnných):
   - kreslí se přípustná oblast jako průnik polorovin daných omezeními,
   - hledá se vrchol s extrémní hodnotou účelové funkce posuvem její vrstevnice.
   - Použitelné pro modely o 2 proměnných.
b) Grafické řešení v prostoru požadavků:
   - zobrazují se vektorové sloupce matice A a vektor pravých stran b,
   - hledá se nezáporná lineární kombinace sloupců, která dává b a extrémní hodnotu ÚF.
   - Použitelné pro 2 omezení (m=2) a libovolný počet proměnných.`
      },
      {
        q: 'Uveďte 4 možné výsledky řešení modelů lineárního programování a znázorněte je graficky v prostoru řešení.',
        a: `1) Jediné optimální řešení – vrchol přípustného mnohostěnu, vrstevnice ÚF se ho dotýká v jednom bodě.
2) Alternativní (nekonečně mnoho) optimálních řešení – vrstevnice ÚF je rovnoběžná s některou stranou přípustné oblasti.
3) Neomezené řešení – přípustná oblast je otevřená ve směru zlepšování ÚF, ÚF roste/klesá donekonečna.
4) Neexistuje přípustné řešení – průnik polorovin je prázdný (rozporná omezení).`
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
        q: 'Uveďte a stručně komentujte základní vlastnosti modelů lineárního programování.',
        a: `• Linearita – ÚF i omezení jsou lineární funkce proměnných.
• Aditivita – účinky proměnných se sčítají bez interakce.
• Proporcionalita – výstup se mění úměrně se vstupem.
• Dělitelnost – proměnné mohou nabývat libovolných reálných (≥0) hodnot (jinak jde o ILP).
• Determinismus – všechny parametry (c, A, b) jsou pevně dané.
• Konečnost – konečný počet proměnných i omezení.`
      },
      {
        q: 'Charakterizujte pojmy „přípustné řešení", „optimální řešení", „alternativní řešení", „suboptimální řešení".',
        a: `• Přípustné řešení – splňuje všechna omezení i podmínky nezápornosti.
• Optimální řešení – přípustné řešení s extrémní (nejlepší možnou) hodnotou účelové funkce.
• Alternativní optima – existuje více optimálních řešení se stejnou hodnotou ÚF (typicky celá hrana/stěna).
• Suboptimální řešení – přípustné řešení blízké optimu, ale s horší hodnotou ÚF; využívá se např. při dodatečných omezeních z praxe.`
      },
      {
        q: 'Co je to bázické a nebázické řešení modelu LP? Jak se bázické řešení reprezentuje graficky?',
        a: `V kanonickém tvaru má model n proměnných a m omezení (rovnic).
• Bázické řešení = řešení, kde právě n−m proměnných je nulových (nebázické) a zbývajících m proměnných tvoří bázi (sloupce A jsou lineárně nezávislé).
• Nebázické řešení = některá z proměnných, jež jsme prohlásili za "mimo bázi", má kladnou hodnotu – tj. nejde o vrchol.
Graficky: každé přípustné bázické řešení odpovídá vrcholu přípustného mnohostěnu.`
      },
      {
        q: 'Co je to degenerované řešení modelu LP? Jak se degenerované řešení reprezentuje graficky?',
        a: `Degenerované bázické řešení = bázické řešení, ve kterém alespoň jedna bázická proměnná má hodnotu 0.
Graficky odpovídá vrcholu, kterým prochází více omezení, než je nutné k jeho určení (více než n nadrovin).
Důsledky: může způsobit cyklení simplexu, více tabulek odpovídá stejnému bodu.`
      },
      {
        q: 'K čemu slouží „základní věty lineárního programování"? Jaké mají důsledky pro hledání optimálního řešení?',
        a: `Základní věty LP:
1) Množina přípustných řešení je konvexní mnohostěn.
2) Existuje-li optimální řešení, existuje i bázické (vrcholové) optimální řešení.
3) Lokální optimum konvexní úlohy je zároveň globálním optimem.
Důsledek: postačuje prohledat konečnou množinu vrcholů – přesně to dělá simplexová metoda.`
      },
      {
        q: 'Uveďte 4 možné výsledky řešení modelu LP a znázorněte je graficky v prostoru požadavků.',
        a: `V prostoru požadavků se hledá vyjádření vektoru b jako nezáporné kombinace sloupců A.
1) Jediné optimum – b leží uvnitř kuželu generovaného právě jedním bázickým výběrem sloupců.
2) Alternativní optima – b leží na hranici dvou bázových kuželů se stejnou hodnotou ÚF.
3) Neomezené – kužel sloupců se otevírá ve směru zlepšení ÚF bez hranice.
4) Nepřípustné – b leží mimo kužel generovaný nezápornými kombinacemi sloupců.`
      },
      {
        q: 'Jak v prostoru požadavků určíte přípustné řešení a jak vyberete optimální? Doložte graficky.',
        a: `Přípustnost: b musí být vyjádřitelné jako nezáporná lineární kombinace dvou (m=2) sloupců matice A → b leží uvnitř kuželu těchto sloupců.
Optimum: ze všech bázových kuželů, do nichž b spadá, se vybere ten, který dává nejlepší hodnotu ÚF (pro min: nejmenší vážený součet cen sloupců dávajících b).
Graficky: kreslíme sloupcové vektory aktivit a hledáme bázi, jejíž kužel obsahuje b s nejnižším/nejvyšším hodnocením ÚF.`
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
        q: 'Uveďte dvě základní podmínky pro aplikovatelnost simplexového algoritmu. Jaký je jejich význam?',
        a: `1) Model musí být v kanonickém tvaru – tj. v rovnicovém tvaru s jednotkovou submaticí (výchozí bází).
2) Pravé strany b_i ≥ 0.
Význam: tyto podmínky zaručují existenci výchozího přípustného bázického řešení (x_B = b, x_N = 0), od kterého simplex startuje.`
      },
      {
        q: 'Popište postup převodu modelu z nerovnicového do rovnicového tvaru. Proč to děláme?',
        a: `• Omezení typu ≤: doplníme přídatnou proměnnou s_i ≥ 0 → Σa_ij·x_j + s_i = b_i.
• Omezení typu ≥: odečteme přebytkovou proměnnou s_i ≥ 0 a zpravidla přidáme umělou proměnnou a_i → Σa_ij·x_j − s_i + a_i = b_i.
• Omezení typu =: pouze přidáme umělou proměnnou.
Proč: simplexový algoritmus pracuje výhradně s rovnicovou soustavou; nezápornost si vyžaduje úprava pravých stran.`
      },
      {
        q: 'Popište postup převodu modelu z rovnicového do kanonického tvaru. Proč to děláme?',
        a: `Kanonický tvar = rovnicový tvar + existence jednotkové submatice (báze) + b ≥ 0.
Postup:
• U omezení ≤ slouží přídatné proměnné samy jako sloupce jednotkové matice.
• U omezení ≥ a = doplníme umělé proměnné a_i (které tvoří bázi); v ÚF se penalizují velkým M (Big-M) nebo se použije dvoufázový simplex.
Proč: získáme výchozí bázické přípustné řešení, od kterého simplex iteruje.`
      },
      {
        q: 'Uveďte a popište typy proměnných v modelech LP. Ke každému uveďte příklad interpretace.',
        a: `• Strukturní (rozhodovací) – reprezentují vlastní rozhodnutí (kolik výrobků A vyrobit).
• Přídatné (slack) – u omezení ≤; ukazují nevyužitou kapacitu zdroje.
• Přebytkové (surplus) – u omezení ≥; ukazují, o kolik byl požadavek překročen.
• Umělé (artificial) – pomocné, slouží pouze k vytvoření výchozí báze; v optimálním řešení musejí být nulové, jinak je úloha nepřípustná.`
      },
      {
        q: 'Uveďte a popište typy omezujících podmínek v LP. Ke každému uveďte příklad použití.',
        a: `• Kapacitní (≤) – nepřekročení dostupné kapacity zdroje (např. stroje, materiálu).
• Požadavkové (≥) – minimální splnění poptávky/nutričního požadavku (např. dietní úloha).
• Bilanční (=) – přesná rovnost (např. množství vyrobeného = množství expedovaného, bilance ve směšovací úloze).
• Podmínky nezápornosti x_j ≥ 0 (jsou samozřejmou součástí modelu).`
      },
      {
        q: 'Prezentujte obecnou simplexovou tabulku. Jaké informace poskytuje?',
        a: `Hlavička: ceny c_j proměnných.
Levý sloupec: c_B (ceny bázických proměnných), x_B (názvy bázických).
Tělo tabulky: aktuální koeficienty A (sloupec proměnné j = B⁻¹·a_j), vpravo sloupec b̄ = B⁻¹·b (hodnoty bázických proměnných).
Spodní řádek (z_j − c_j nebo c_j − z_j) – kritéria optimality (redukované ceny). V rohu hodnota ÚF.
Informace: aktuální bázické řešení, hodnota ÚF, redukované ceny, info pro test optimality i přípustnosti.`
      },
      {
        q: 'Popište účel, princip a postup testu optimality v simplexové tabulce.',
        a: `Účel: zjistit, zda lze řešení dále zlepšit.
Princip: zkoumají se redukované ceny c_j − z_j (resp. z_j − c_j) u nebázických proměnných.
Postup (pro maximalizaci, kritérium z_j − c_j):
• Jsou-li všechna z_j − c_j ≥ 0, je řešení optimální.
• Jinak vstupuje do báze proměnná s nejnižším (nejvíce záporným) z_j − c_j.
Pro minimalizaci platí opačné podmínky.`
      },
      {
        q: 'Popište účel, princip a postup testu přípustnosti v simplexové tabulce.',
        a: `Účel: po výběru vstupující proměnné určit, která bázická proměnná opustí bázi tak, aby nové řešení zůstalo přípustné (nezáporné).
Princip: poměrové pravidlo – pro každý řádek, kde je koeficient a_ik vstupující proměnné kladný, se počítá b̄_i / a_ik.
Postup: vybere se minimální poměr; odpovídající řádek určuje vystupující bázickou proměnnou. Pokud jsou všechna a_ik ≤ 0 → úloha má neomezené řešení.`
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
        q: 'Jak v simplexové tabulce identifikujete bázické a nebázické proměnné? Jak určíte jejich hodnoty?',
        a: `• Bázické proměnné: jejich sloupec v aktuální tabulce má tvar jednotkového vektoru (jedna jednička, zbytek nuly). Jejich hodnota je rovna příslušné složce sloupce b̄ (pravých stran v dané tabulce).
• Nebázické proměnné: jejich sloupec nemá tvar jednotkového vektoru; v aktuálním bázickém řešení nabývají hodnoty 0.`
      },
      {
        q: 'Co je to matice báze a inverzní matice báze? Jak je určíme a jaký je jejich význam?',
        a: `Matice báze B = matice tvořená m sloupci původní matice A odpovídajícími aktuálním bázickým proměnným.
Inverzní matice B⁻¹ se v simplexové tabulce nachází ve sloupcích původně jednotkových (u přídatných/umělých proměnných výchozí báze).
Význam: x_B = B⁻¹·b; aktuální sloupec libovolné proměnné j v tabulce = B⁻¹·a_j. Slouží k postoptimalizační analýze a k výpočtu duálních cen y = c_B·B⁻¹.`
      },
      {
        q: 'Co jsou to duální ceny proměnných? Jak je určíme a interpretujeme?',
        a: `Duální ceny y_i = řešení duální úlohy = c_B · B⁻¹.
V optimální simplexové tabulce je najdeme v řádku z_j − c_j (resp. c_j − z_j) ve sloupcích, kde byla původně jednotková matice.
Interpretace (stínové ceny): y_i udává, o kolik se změní hodnota účelové funkce při zvýšení pravé strany i-tého omezení o jednotku (v intervalu stability báze). Vyjadřuje "cenu" zdroje.`
      },
      {
        q: 'Určete obsah vektoru bázického řešení a vektoru obecného řešení. Uveďte příklady.',
        a: `• Vektor bázického řešení x_B (rozměr m) – obsahuje pouze hodnoty bázických proměnných: x_B = B⁻¹·b.
  Příklad: x_B = (x1=20, x4=5)ᵀ.
• Vektor obecného řešení x (rozměr n) – obsahuje hodnoty všech proměnných modelu včetně nulových nebázických.
  Příklad: x = (x1=20, x2=0, x3=0, x4=5, x5=0)ᵀ.`
      },
      {
        q: 'Co je to dualita modelů LP? Uveďte příklad výhody.',
        a: `Dualita: ke každé primární LP úloze existuje úzce svázaná duální úloha. Změna max ↔ min, řádky ↔ sloupce, pravé strany ↔ cenové koeficienty, omezení ↔ proměnné.
Výhoda: pokud má primární úloha málo proměnných a hodně omezení, je výhodnější řešit duál (méně iterací). Dualita rovněž poskytuje ekonomickou interpretaci (stínové ceny zdrojů) a je teoretickým základem postoptimalizace.`
      },
      {
        q: 'Popište vztahy mezi prvky duálně sdružených úloh.',
        a: `Primární (max, ≤): Σa_ij·x_j ≤ b_i, x_j ≥ 0, ÚF = Σc_j·x_j.
Duální (min, ≥): Σa_ij·y_i ≥ c_j, y_i ≥ 0, ÚF = Σb_i·y_i.
Vztahy:
• Každému omezení primáru odpovídá proměnná duálu (a naopak).
• Cenovým koeficientům primáru odpovídají pravé strany duálu (a naopak).
• Matice A duálu = transpozice matice A primáru.
• Typ omezení a typ proměnné: ≤ ↔ y ≥ 0, = ↔ y volné, x volné ↔ omezení =.`
      },
      {
        q: 'Co říká základní věta o dualitě? Jaký je její význam?',
        a: `Základní věta o dualitě: má-li primární úloha optimální řešení, má i duál optimální řešení a hodnoty jejich účelových funkcí jsou stejné: z*_P = z*_D.
Důsledky:
• Slabá dualita: pro libovolná přípustná x a y platí c·x ≤ b·y (pro max).
• Optimalita ↔ rovnost ÚF + komplementární uvolnění.
Význam: poskytuje silnou kontrolu optimality, ekonomickou interpretaci, citlivostní analýzu a důkaz konečnosti simplexové metody.`
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
        q: 'Postup stanovení nebázického řešení modelu LP. Maximální hodnota nebázické proměnné? Jsou nebázická řešení optimální?',
        a: `Nebázické řešení získáme tak, že nebázické proměnné x_k přiřadíme kladnou hodnotu θ a přepočteme bázické: x_B = B⁻¹·b − (B⁻¹·a_k)·θ.
Maximální θ_max = min { b̄_i / ā_ik | ā_ik > 0 }; pro ā_ik ≤ 0 omezení neexistuje (otevřený směr).
Optimálnost: pokud byla redukovaná cena této proměnné kladná (pro max), zařazení zhorší ÚF → nebázické řešení není optimální. Je-li redukovaná cena = 0, jde o alternativní optimum.`
      },
      {
        q: 'Bylo rozhodnuto zařadit nový proces (nebázickou strukturní proměnnou). Popište postup určení vlivu.',
        a: `1) Vypočti redukovanou cenu nové proměnné: c̄_j = c_j − c_B · B⁻¹ · a_j.
2) Je-li (pro max) c̄_j ≤ 0 → zařazení nezlepší ÚF, ponecháváme x_j = 0.
3) Je-li c̄_j > 0 → provedeme simplexovou iteraci: vypočítáme nový sloupec ā_j = B⁻¹·a_j, určíme maximální θ z testu přípustnosti, nahradíme vystupující proměnnou.
4) Spočítáme nové bázické hodnoty a novou hodnotu ÚF Δz = c̄_j · θ.`
      },
      {
        q: 'Po optimalizaci došlo ke změně kapacity jednoho zdroje. Popište postup určení vlivu.',
        a: `1) Nový vektor pravých stran b' = b + Δb (Δb je nenulové jen v i-té složce).
2) Spočítej nové hodnoty bázických proměnných: x'_B = B⁻¹·b'.
3) Je-li x'_B ≥ 0 → báze zůstává optimální. Nová hodnota ÚF: z' = z + y_i · Δb_i.
4) Je-li některá složka záporná → báze není přípustná; nutno reoptimalizovat (typicky duálním simplexem).`
      },
      {
        q: 'K čemu slouží analýza stability báze vzhledem k pravým stranám? Popište rámcově způsob.',
        a: `Účel: zjistit, v jakém intervalu Δb_i může pravá strana kolísat, aniž by se změnila optimální báze (tj. řešení zůstane přípustné).
Postup: spočítáme B⁻¹·(b + e_i·Δb_i) a požadujeme nezápornost všech složek. Tím získáme dolní a horní mez pro Δb_i. Interval ⟨Δb_i^L; Δb_i^U⟩ je oblast stability báze.
Důsledek: uvnitř intervalu se mění jen hodnoty bázických proměnných a ÚF (lineárně), ne struktura báze.`
      },
      {
        q: 'K čemu slouží analýza citlivosti řešení na cenové koeficienty? Postup pro bázické a nebázické proměnné.',
        a: `Účel: určit, jak se může cenový koeficient c_j měnit, aniž se změní optimální řešení.
• Pro nebázickou proměnnou: stačí, aby zůstala c̄_j ≤ 0 (max). Tj. interval c_j ∈ ⟨−∞ ; z_j⟩.
• Pro bázickou proměnnou: změna c_j ovlivní celý vektor c_B i kritéria z_j−c_j všech ostatních proměnných. Spočítají se nové redukované ceny a požaduje se, aby všechny zůstaly příznivé (≥ 0 pro max). Z toho plyne dvojstranný interval pro c_j.`
      },
      {
        q: 'Podstata úlohy o výrobním programu a směšovací úlohy jako aplikací LP.',
        a: `Úloha o výrobním programu:
• Cíl: max zisk (Σc_j·x_j) z výroby produktů, omezení = kapacity strojů, surovin, trhu.
• Proměnné: vyrobené množství produktu j.
Směšovací úloha (např. dieta, slitina, krmivo):
• Cíl: min náklady na směs (Σc_j·x_j), omezení = minimální/maximální obsah jednotlivých složek (živin), bilance.
• Proměnné: množství komponenty j ve směsi.`
      },
      {
        q: 'Podstata úlohy o řezných plánech a plánování směn jako aplikací LP.',
        a: `Řezné plány:
• Cíl: min odpad nebo min počet polotovarů při řezání základního formátu na požadované díly.
• Proměnné: počet použití každého řezného schématu.
• Omezení: splnit požadavky na počet dílů.
Plánování směn:
• Cíl: min mzdové náklady nebo min počet pracovníků.
• Proměnné: počet pracovníků nastupujících v daném čase (každý pracuje fixní směnu).
• Omezení: pokrýt poptávku po pracovní síle v každé hodině/úseku.`
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
        q: 'Podstata a komponenty jednostupňové dopravní úlohy.',
        a: `Podstata: rozvozový plán mezi m dodavateli a n spotřebiteli tak, aby celkové náklady (km, čas) byly minimální.
Komponenty:
• Kapacity dodavatelů a_i (i=1..m).
• Požadavky spotřebitelů b_j (j=1..n).
• Sazby (jednotkové náklady) c_ij mezi dodavatelem i a spotřebitelem j.
• Proměnné x_ij ≥ 0 = množství dopravené z i do j.
• ÚF: min Σ c_ij · x_ij; bilance: Σ_j x_ij = a_i, Σ_i x_ij = b_j.`
      },
      {
        q: 'Co je to vyváženost modelu jednostupňové dopravní úlohy? Jak se provádí?',
        a: `Vyváženost: Σa_i = Σb_j (celková kapacita = celková potřeba).
Pokud Σa_i > Σb_j → přebytek; přidá se fiktivní spotřebitel s požadavkem rovným přebytku a nulovými sazbami.
Pokud Σa_i < Σb_j → nedostatek; přidá se fiktivní dodavatel s kapacitou rovnou rozdílu a nulovými (nebo penalizačními) sazbami.
Vyváženost je nutná pro správnou aplikaci dopravního algoritmu (rovnicový tvar bilancí).`
      },
      {
        q: 'Princip metody severozápadního rohu. K čemu se používá, jak dobré výsledky dává?',
        a: `Princip: začínáme v levém horním rohu tabulky a postupujeme dolů a doprava. V aktuální buňce naplníme x_ij = min(a_i, b_j), snížíme zbývající kapacitu/požadavek a posuneme se do dalšího řádku/sloupce.
Použití: rychlé sestavení výchozího bázického řešení (m+n−1 obsazených polí).
Kvalita: nevyužívá informaci o sazbách → zpravidla daleko od optima, ale je extrémně jednoduchá.`
      },
      {
        q: 'Princip indexové metody. K čemu se používá, jak dobré výsledky dává?',
        a: `Princip: opakovaně se vybere neobsazená buňka s nejnižší sazbou c_ij, naplní se hodnotou min(a_i, b_j); příslušný řádek/sloupec se vyčerpá a postupuje se dál.
Použití: konstrukce výchozího bázického řešení dopravní úlohy.
Kvalita: lepší než severozápadní roh (využívá sazby), ale stále suboptimální.`
      },
      {
        q: 'Princip Vogelovy aproximační metody (VAM). K čemu se používá, jak dobré výsledky dává?',
        a: `Princip: pro každý řádek a sloupec spočítáme „penaltu" = rozdíl dvou nejmenších sazeb v daném řádku/sloupci. Vybereme řádek/sloupec s nejvyšší penaltou (kde nás opomenutí nejvíc bolí), v něm obsadíme buňku s nejnižší sazbou hodnotou min(a_i,b_j) a přepočítáme penalty.
Použití: výchozí bázické řešení.
Kvalita: nejlepší ze tří metod – často přímo optimum nebo velmi blízko, používá se i jako finální heuristika v praxi.`
      },
      {
        q: 'Co je to degenerace v jednostupňové dopravní úloze? Vznik, určení, odstranění.',
        a: `Degenerace: počet obsazených (bázických) polí je menší než m+n−1.
Vznik: během konstrukce výchozího řešení se najednou vyčerpá řádek i sloupec (a_i = b_j v dané buňce).
Určení: spočítáme obsazená pole; je-li jich méně než m+n−1, je řešení degenerované.
Odstranění: přidá se „nulová dodávka" (ε ≈ 0) do vhodné neobsazené buňky tak, aby vznikla úplná báze (m+n−1 polí) a aby nevzniknul cyklus s obsazenými poli.`
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
        a: `MODI (modifikovaná distribuční metoda) testuje optimalitu výchozího řešení.
1) Pro obsazená pole nastavíme u_i + v_j = c_ij (m+n neznámých, m+n−1 rovnic) – jednu hodnotu zvolíme (např. u_1 = 0), zbytek dopočítáme.
2) Pro neobsazená pole vypočítáme δ_ij = c_ij − (u_i + v_j).
3) Je-li všechny δ_ij ≥ 0 (min) → řešení optimální.
4) Jinak vybereme buňku s nejzápornějším δ_ij a přes Danzigův uzavřený obvod přepočítáme nové řešení. Opakujeme.`
      },
      {
        q: 'Co je to Danzigův uzavřený obvod? K čemu slouží?',
        a: `Danzigův uzavřený obvod = uzavřený cyklus tvořený výhradně obsazenými poli (s výjimkou jednoho startovacího neobsazeného), kde se v rozích střídá znaménko + a −.
Slouží k:
• Přepočtu řešení při zařazení nové buňky do báze – nalezne minimum |x_ij| v rozích se znaménkem „−"; tato hodnota se připočte/odečte ve vrcholech cyklu (vstupující buňka získá toto θ, vystupující se vynuluje).
• Zachování bilancí (řádkových i sloupcových) a počtu obsazených polí m+n−1.`
      },
      {
        q: 'Co je to perspektivita dopravních tras? Jak se analýza perspektivity provádí?',
        a: `Perspektivita = vlastnost neobsazené trasy, že její zařazení do řešení nezhorší hodnotu účelové funkce.
Analýza: pomocí MODI spočítáme δ_ij pro neobsazené buňky. Je-li δ_ij = 0, je trasa perspektivní (alternativní optimum – lze ji zařadit beze ztráty). Je-li δ_ij < 0 (pro min), trasa zlepší řešení; je-li δ_ij > 0, není perspektivní.`
      },
      {
        q: 'Co je to propustnost dopravních tras? Jak se analýza propustnosti provádí?',
        a: `Propustnost = maximální množství, které lze danou trasou (i,j) převést, aniž bychom porušili kapacity a požadavky a opustili optimální bázi.
Analýza: pro neobsazenou perspektivní trasu (δ_ij ≤ 0) se sestaví Danzigův obvod a určí se maximální θ = min hodnot ve vrcholech se znaménkem „−". To je propustnost dané trasy v rámci stávajícího řešení.`
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
        a: `Přiřazovací úloha = speciální dopravní úloha s m = n, kde a_i = b_j = 1.
Cíl: přiřadit každému prvku z množiny A právě jeden prvek z B (1:1) tak, aby součet ohodnocení (nákladů) byl minimální (resp. zisků maximální).
Komponenty: matice ohodnocení c_ij, binární proměnné x_ij ∈ {0,1}, omezení Σ_j x_ij = 1 (každý řádek), Σ_i x_ij = 1 (každý sloupec).
Aplikace: přidělení pracovníků k úkolům, strojů k operacím.`
      },
      {
        q: 'K čemu slouží maďarská metoda? Stručný princip.',
        a: `Maďarská metoda řeší přiřazovací úlohu efektivně v polynomiálním čase.
Princip:
1) Redukce matice po řádcích – od každého řádku odečteme jeho minimum.
2) Redukce po sloupcích – obdobně od každého sloupce.
3) Pokus o nalezení nezávislého systému nul (max párování pomocí pokrytí nul co nejmenším počtem čar).
4) Není-li nalezeno n nezávislých nul → další redukce: minimum z nezakrytých prvků, odečte se od nezakrytých a přičte k dvakrát zakrytým. Opakujeme.
5) Po nalezení n nezávislých nul ⇒ optimální přiřazení.`
      },
      {
        q: 'Podstata a komponenty okružního dopravního problému (TSP).',
        a: `Okružní dopravní problém / TSP: navštívit n uzlů (zákazníků, měst) přesně jednou a vrátit se do výchozího uzlu při minimální celkové vzdálenosti / nákladech.
Komponenty:
• Množina uzlů V, hrany E s ohodnocením d_ij.
• Proměnné x_ij ∈ {0,1} (zda použita hrana).
• Omezení: každý uzel právě jednou navštíven (vstup i výstup = 1), eliminace podcyklů.
Patří mezi NP-těžké úlohy.`
      },
      {
        q: 'Základní typy okružních dopravních problémů.',
        a: `• Symetrický TSP – d_ij = d_ji.
• Asymetrický TSP – d_ij ≠ d_ji (např. jednosměrky).
• Otevřený / uzavřený TSP – návrat do výchozího uzlu (uzavřený) vs. konec v cíli (otevřený).
• Eukleidovský TSP – vzdálenosti splňují trojúhelníkovou nerovnost.
• mTSP (Multiple TSP) – více obchodních cestujících.
• VRP (Vehicle Routing) – navíc kapacity vozidel a poptávky uzlů.
• Dynamický TSP – uzly/vzdálenosti se v čase mění.`
      },
      {
        q: 'Kde a k čemu se používá metoda nejbližšího souseda? Stručný princip.',
        a: `Použití: heuristika pro úlohu obchodního cestujícího (TSP) a jiné okružní problémy – velmi rychlé sestavení trasy.
Princip: začneme v libovolném uzlu. Z aktuálního uzlu přejdeme do nejbližšího dosud nenavštíveného uzlu. Opakujeme, dokud nenavštívíme všechny uzly, pak se vrátíme do výchozího.
Vlastnosti: jednoduchá, ale suboptimální (může dát trasy až o desítky % horší než optimum), citlivá na volbu počátečního uzlu.`
      },
      {
        q: 'Popište modifikaci Vogelovy aproximační metody pro okružní dopravní problémy.',
        a: `Vstup: matice vzdáleností s blokovanou (zakázanou) hlavní diagonálou (nelze cestovat sám do sebe).
Postup:
1) Pro každý řádek a sloupec spočítáme penaltu = rozdíl dvou nejmenších přípustných hodnot.
2) Vybereme řádek/sloupec s největší penaltou, v něm hranu s nejmenší vzdáleností, zařadíme do trasy.
3) Po výběru zablokujeme uzly tak, aby nevznikly podcykly (kontrola toho, že žádný kratší cyklus se neuzavírá předčasně).
4) Opakujeme do sestavení úplné Hamiltonovské kružnice.
Kvalita: dobrá heuristika, lepší než nejbližší soused.`
      },
      {
        q: 'Kde a k čemu se používá Mayerova metoda? Stručný princip.',
        a: `Použití: heuristika pro úlohu obchodního cestujícího (TSP) – sestavení trasy postupným vkládáním (insertion heuristic).
Princip:
1) Začneme s krátkou výchozí kružnicí (např. ze tří uzlů – často tří nejvzdálenějších nebo z konvexní obálky).
2) V každém kroku vybereme nenavštívený uzel k a najdeme pro něj místo vložení (mezi dva sousední uzly i, j v aktuální trase), pro které je přírůstek d_ik + d_kj − d_ij minimální.
3) Uzel vložíme a opakujeme, dokud nejsou všechny uzly v trase.
Kvalita: zpravidla velmi dobrá, lepší než nejbližší soused.`
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
        q: 'Co je graf? Rozdíl mezi orientovaným a neorientovaným grafem.',
        a: `Graf G = (V, E), kde V je neprázdná konečná množina uzlů (vrcholů) a E je množina hran spojujících dvojice uzlů.
• Neorientovaný graf – hrany jsou neuspořádané dvojice {u,v}; spojení je obousměrné.
• Orientovaný graf (digraf) – hrany (oblouky) jsou uspořádané dvojice (u,v) s definovaným směrem (např. silnice s jednosměrkami, datový tok).
Hrany mohou být ohodnocené (vážený graf) i neohodnocené.`
      },
      {
        q: 'Charakterizujte pojmy „sled", „tah", „cesta", „cyklus".',
        a: `• Sled = libovolná posloupnost střídajících se uzlů a hran u_0, e_1, u_1, e_2, …, kde každá hrana spojuje sousedící uzly. Hrany i uzly se mohou opakovat.
• Tah = sled, ve kterém se hrany neopakují (uzly ano).
• Cesta = tah, ve kterém se neopakují ani uzly (jednoduchá cesta).
• Cyklus (kružnice) = uzavřená cesta, ve které u_0 = u_n a všechny ostatní uzly jsou různé.`
      },
      {
        q: 'Princip neinformovaného prohledávání grafů. Vybraná metoda.',
        a: `Neinformované prohledávání nepoužívá žádné znalosti o cíli (heuristiku); rozdíl je pouze v pořadí, v jakém se uzly expandují.
Příklad – BFS (Breadth-First Search):
• Datová struktura: fronta (FIFO).
• Postup: do fronty vložíme startovní uzel; opakovaně z fronty vyjmeme uzel, expandujeme jeho sousedy, ty zařadíme na konec fronty (pokud nebyli navštíveni).
• Vlastnosti: prohledává po vrstvách, najde cestu s nejmenším počtem hran; složitost O(|V|+|E|).
Alternativa – DFS s zásobníkem / rekurzí (do hloubky).`
      },
      {
        q: 'Princip informovaného prohledávání grafů. Vybraná metoda.',
        a: `Informované prohledávání využívá heuristickou funkci h(n) – odhad vzdálenosti uzlu n od cíle.
Příklad – algoritmus A*:
• f(n) = g(n) + h(n), kde g(n) je skutečná cena cesty z počátku do n, h(n) odhad zbývající cesty do cíle.
• Postup: udržuje se prioritní fronta (open list) uzlů, expanduje se uzel s nejmenším f. Sousedé se vkládají s aktualizovanou cenou.
• Optimalita: A* nalezne optimální řešení, je-li h admisibilní (nepřeceňuje skutečnou vzdálenost) a konzistentní.`
      },
      {
        q: 'Úloha o hledání minimální kostry grafu – princip řešení.',
        a: `Minimální kostra (MST) souvislého neorientovaného váženého grafu = strom obsahující všechny uzly s minimálním součtem vah hran.
Algoritmy:
• Kruskalův: hrany seřadíme dle vah vzestupně; postupně přidáváme tu nejlevnější, pokud nevytvoří cyklus (kontrola pomocí Union-Find). Skončíme s |V|−1 hranami.
• Primův: startujeme z libovolného uzlu, opakovaně přidáme nejlevnější hranu vycházející z dosud připojeného stromu do nepřipojeného uzlu.
Aplikace: rozvody sítí, telekomunikace, klastrování.`
      },
      {
        q: 'Úloha o hledání nejkratší cesty v grafu – princip řešení.',
        a: `Cíl: najít cestu z uzlu s do uzlu t (nebo do všech ostatních) s minimálním součtem vah hran.
• Dijkstrův algoritmus (váhy ≥ 0): udržuje vzdálenosti d[u] a postupně „označuje" uzel s nejmenší zatím známou vzdáleností; relaxuje sousední hrany. Složitost O((V+E) log V) s prioritní frontou.
• Bellman-Ford (lze i záporné váhy, bez záporných cyklů): |V|−1× relaxujeme všechny hrany; detekuje záporné cykly.
• Floyd-Warshall – všechny páry.`
      },
      {
        q: 'Úloha o hledání maximálního toku v síti – princip řešení.',
        a: `Síť: orientovaný graf s kapacitami u_ij ≥ 0, zdroj s, ústí t. Cíl: max tok z s do t při dodržení kapacit a Kirchhoffových bilancí (zachování toku v ostatních uzlech).
Ford-Fulkersonova metoda:
1) Začni nulovým tokem.
2) Najdi v reziduální síti zlepšující cestu z s do t (např. BFS = Edmonds-Karp).
3) Najdi minimální reziduální kapacitu po této cestě a o tuto hodnotu zvyš tok.
4) Opakuj, dokud existuje zlepšující cesta.
Výsledek odpovídá min řezu (max-flow min-cut teorém).`
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
        q: 'Co je projekt? Vybraná definice a rozbor klíčových slov.',
        a: `Definice (ISO 21500 / PMI): „Projekt je dočasné, jedinečné úsilí podnikané za účelem vytvoření jedinečného produktu, služby nebo výsledku."
Klíčová slova:
• Dočasné – má definovaný začátek a konec (není to rutinní činnost).
• Jedinečné – neopakovatelný výsledek (nebo aspoň jeho kontext).
• Úsilí / proces – koordinované činnosti, lidská práce, řízení.
• Cíl / výstup – jasně definovaný a měřitelný (čas, rozpočet, kvalita).
• Omezené zdroje – peníze, lidé, čas, materiál.`
      },
      {
        q: 'Pojmy „činnost" a „zdroj" v projektovém řízení. Příklady.',
        a: `• Činnost (aktivita) = ucelený, definovaný úkol projektu s vlastní dobou trvání, vstupy a výstupy. Spotřebovává zdroje. Příklady: vykopání základů, naprogramování modulu, školení uživatelů.
• Zdroj = vstup nutný k realizaci činnosti. Druhy:
  - Lidské (programátor, zedník),
  - Materiální (cement, server),
  - Finanční (rozpočet),
  - Časové (kalendář, termín),
  - Informační (know-how).
Zdroje mohou být obnovitelné (pracovník) i neobnovitelné (rozpočet).`
      },
      {
        q: 'Charakterizujte graf typu síť, graficky.',
        a: `Síťový graf projektu = konečný orientovaný acyklický graf zobrazující strukturu projektu (logické vazby mezi činnostmi a jejich časové uspořádání).
Typy reprezentace:
• AOA (Activity-On-Arrow) – hrany = činnosti, uzly = události (uzlový diagram).
• AON (Activity-On-Node) – uzly = činnosti, hrany = závislosti (běžnější, CPM/PERT).
Vlastnosti: jediný počáteční uzel, jediný koncový uzel, žádné cykly, hrany respektují závislosti předchůdce/následník.`
      },
      {
        q: 'Podstata a vlastnosti metody CPM. Jaké informace umožňuje zjistit?',
        a: `CPM (Critical Path Method) – deterministická metoda síťové analýzy s pevnými dobami trvání činností.
Vlastnosti: orientovaný acyklický graf, lineární operace dopředného a zpětného chodu.
Umožňuje zjistit:
• Nejkratší možnou dobu trvání projektu.
• Termíny činností (nejdříve možné a nejpozději přípustné začátky/konce).
• Kritickou cestu = posloupnost činností bez rezervy.
• Rezervy nekritických činností (celkovou, volnou, nezávislou, interferenční).
• Vliv prodloužení/zkrácení činností na termín projektu.`
      },
      {
        q: 'Popište způsob provedení časové analýzy v metodě CPM.',
        a: `1) Dopředný chod (forward pass) – od počátečního uzlu:
   ZM_j = max{ KM_i pro všechny předchůdce i }, KM_j = ZM_j + t_j.
   Vede k získání ZM (zahájení nejdříve možné) a KM (konec nejdříve možný) všech činností.
2) Zpětný chod (backward pass) – od koncového uzlu, kde KP = KM:
   KP_i = min{ ZP_j pro všechny následníky j }, ZP_i = KP_i − t_i.
   Získáme nejpozději přípustné termíny.
3) Spočítáme rezervy a identifikujeme kritickou cestu.`
      },
      {
        q: 'Co je kritická cesta v grafu projektu? Jak ji určíte?',
        a: `Kritická cesta = nejdelší cesta z počátečního do koncového uzlu sítě; její celková délka = minimální doba trvání projektu.
Tvoří ji činnosti s nulovou celkovou rezervou RC = KP − KM = ZP − ZM = 0.
Určení:
1) Provedeme dopředný a zpětný chod.
2) Pro každou činnost spočítáme RC.
3) Činnosti s RC = 0 → kritické. Posloupnost kritických činností od startu k cíli = kritická cesta.
Kritická cesta nemusí být jediná. Jakékoliv zpoždění kritické činnosti zpožďuje celý projekt.`
      },
      {
        q: 'Význam, interpretace a výpočet rezerv činností a uzlů v CPM.',
        a: `Rezerva uzlu R_i = ZP_i − ZM_i (kolik lze posunout událost bez ovlivnění termínu).
Rezervy činnosti (i,j) s dobou t_ij:
• Celková rezerva RC = ZP_j − ZM_i − t_ij – o kolik lze činnost odsunout/prodloužit, aniž se prodlouží celý projekt.
• Volná rezerva RV = ZM_j − ZM_i − t_ij – posun bez ovlivnění nejdříve možných začátků následníků.
• Nezávislá rezerva RN = max(0, ZM_j − ZP_i − t_ij) – posun bez ovlivnění ostatních činností v žádném směru.
• Interferenční rezerva RI = RC − RV.
Kritické činnosti: RC = 0. Rezervy slouží k vyrovnání zdrojů a řízení rizika.`
      }
    ]
  }
];
