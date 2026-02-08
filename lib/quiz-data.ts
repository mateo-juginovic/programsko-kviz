export type QuestionType = 'multiple-choice' | 'true-false' | 'multiple-select';

export interface Question {
	id: number;
	question: string;
	type: QuestionType;
	options: string[];
	correctAnswers: number[]; // indices of correct answers
	explanation?: string;
	category: string;
}

export const quizData: Question[] = [
	// ARHITEKTURA SOFTVERA - Osnove
	{
		id: 1,
		question: 'Što arhitektura softvera uključuje?',
		type: 'multiple-select',
		options: [
			'Cjelokupnu organizaciju sustava',
			'Podjelu softvera na komponente',
			'Organizaciju servera',
			'Tehnologije koje će se koristiti',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Arhitektura softvera uključuje sve navedene aspekte: organizaciju sustava, podjelu na komponente, organizaciju servera i odabir tehnologija.',
		category: 'Osnove arhitekture',
	},
	{
		id: 2,
		question: 'Na što arhitektura softvera ima velik utjecaj?',
		type: 'multiple-choice',
		options: [
			'Samo na performanse',
			'Samo na sigurnost',
			'Na nefunkcionalne zahtjeve sustava (sigurnost, dostupnost, pouzdanost, brzina odziva, održavanje, otpornost, upotrebljivost)',
			'Samo na funkcionalne zahtjeve',
		],
		correctAnswers: [2],
		explanation:
			'Arhitektura ima velik utjecaj na nefunkcionalne zahtjeve sustava: sigurnost, dostupnost, pouzdanost, brzinu odziva, održavanje, otpornost i upotrebljivost.',
		category: 'Osnove arhitekture',
	},
	{
		id: 3,
		question: 'Što je komponenta u arhitekturi softvera?',
		type: 'multiple-choice',
		options: [
			'Samo klasa u programu',
			'Element koji implementira smisleni niz funkcionalnosti; može biti skup jedne ili više usluga',
			'Samo baza podataka',
			'Samo korisnički interface',
		],
		correctAnswers: [1],
		explanation:
			'Komponenta je element koji implementira smisleni niz funkcionalnosti, tj. mogućnosti softvera; može biti i skup jedne ili više usluga koje može koristiti neka druga komponenta.',
		category: 'Osnove arhitekture',
	},

	// DIZAJN ARHITEKTURE
	{
		id: 4,
		question: 'Koje su opće upute za dizajn arhitekture?',
		type: 'multiple-select',
		options: [
			'Razdvajanje problema (1 komponenta 1 problem)',
			'Stabilna sučelja',
			'Implementirati jednom (izbjeći dupliciranje)',
			'Dekompozicija velikih komponenti na manje',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Opće upute za dizajn arhitekture su: razdvajanje problema (1 komponenta 1 problem), stabilna sučelja (da ih ne treba mijenjati), i implementirati jednom (izbjeći dupliciranje). Dekompozicija je dio organizacije komponenti, ali nije u popisu općih uputa.',
		category: 'Dizajn arhitekture',
	},
	{
		id: 5,
		question: 'Što je dekompozicija u dizajnu arhitekture?',
		type: 'multiple-choice',
		options: [
			'Obrisati nepotreban kod',
			'Analiziranje velikih komponenti koje se predstavljaju kao skup malih komponenti',
			'Pisanje dokumentacije',
			'Testiranje komponenti',
		],
		correctAnswers: [1],
		explanation:
			'Dekompozicija uključuje analizu velikih komponenti koje se predstavljaju kao skup malih komponenti.',
		category: 'Dizajn arhitekture',
	},
	{
		id: 6,
		question: 'Kako se smanjuju dijeljene aktivnosti u dizajnu arhitekture?',
		type: 'multiple-choice',
		options: [
			'Povećati broj komponenti',
			'Izbjegavati dijeljenje podataka i koristiti lokalne podatke',
			'Koristiti globalne varijable',
			'Spojiti sve komponente',
		],
		correctAnswers: [1],
		explanation:
			'Treba izbjegavati dijeljenje podataka i koristiti lokalne podatke jer ako komponenta A ovisi o komponenti B, složenost projekta se povećava ukoliko se komponenta B promijeni.',
		category: 'Dizajn arhitekture',
	},

	// SLOJEVITA ARHITEKTURA
	{
		id: 7,
		question: 'Koje su upute za dizajn slojevite arhitekture?',
		type: 'multiple-select',
		options: [
			'1 sloj 1 problem',
			'Koristiti neovisne komponente unutar svakog sloja',
			'Ne preklapati funkcionalnosti slojeva',
			'Omogućiti interakcije između susjednih slojeva',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation: 'Sve navedene upute su važne za dobru slojevitu arhitekturu.',
		category: 'Slojevita arhitektura',
	},
	{
		id: 8,
		question: 'Što su cross-cutting problemi?',
		type: 'multiple-choice',
		options: [
			'Problemi koji utječu samo na jedan sloj',
			'Problemi koji utječu na cijeli sustav (sve slojeve i korisnike)',
			'Problemi u bazi podataka',
			'Samo sigurnosni problemi',
		],
		correctAnswers: [1],
		explanation:
			'Cross-cutting problemi utječu na cijeli sustav (svi slojevi i korisnici) i zbog njih je interakcija između slojeva neizbježna jer ih svaki sloj mora uzeti u obzir.',
		category: 'Slojevita arhitektura',
	},
	{
		id: 9,
		question:
			'Koje su funkcionalnosti slojeva kod web aplikacija (od vrha prema dolje)?',
		type: 'multiple-choice',
		options: [
			'Baza → UI → Logika',
			'UI (mobilno/web sučelje) → Autentifikacija → Aplikacijski sloj → Dijeljene usluge → Baza',
			'Samo UI i baza',
			'Server → Klijent',
		],
		correctAnswers: [1],
		explanation:
			'Slojevi web aplikacija su: mobilno sučelje/sučelje bazirano na pregledniku, provjera autentifikacije + upravljanje korisničkim sučeljem, funkcionalnosti aplikacije, osnovne dijeljene usluge, upravljanje bazom podataka.',
		category: 'Slojevita arhitektura',
	},

	// ARHITEKTURE DISTRIBUCIJE
	{
		id: 10,
		question: 'Kada je klijent-server arhitektura pogodna?',
		type: 'multiple-choice',
		options: [
			'Za sve aplikacije',
			'Za strukturirane podatke koje različiti dijelovi sustava mogu mijenjati',
			'Samo za mobilne aplikacije',
			'Nikad nije pogodna',
		],
		correctAnswers: [1],
		explanation:
			'Klijent-server arhitektura je pogodna za strukturirane podatke koje različiti dijelovi sustava mogu mijenjati (ALI treba osigurati mehanizme za održavanje konzistentnosti što je skupo).',
		category: 'Distribucija sustava',
	},
	{
		id: 11,
		question: 'Kada je servisno orijentirana arhitektura pogodna?',
		type: 'multiple-select',
		options: [
			'Ako će se komponente sustava redovito mijenjati',
			'Ako se sustav namjerava pokrenuti u oblaku',
			'Ako korisnici pristupaju preko interneta',
			'Nikad nije pogodna',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Servisno orijentirana arhitektura je pogodna ako će se komponente redovito mijenjati, ako se sustav pokreće u oblaku, i ako mu korisnici pristupaju preko interneta.',
		category: 'Distribucija sustava',
	},
	{
		id: 12,
		question: 'Što su servisi u servisno orijentiranoj arhitekturi?',
		type: 'multiple-choice',
		options: [
			'Samo baze podataka',
			'Komponente bez stanja koje se mogu replicirati i migrirati između računala',
			'Samo web stranice',
			'Samo API endpointi',
		],
		correctAnswers: [1],
		explanation:
			'Servisi su komponente bez stanja, mogu se replicirati i migrirati između računala, mogu ih pružati različiti poslužitelji.',
		category: 'Distribucija sustava',
	},

	// TEHNOLOGIJE ZA WEB APLIKACIJE
	{
		id: 13,
		question: 'Kada je relacijska baza podataka prikladna?',
		type: 'multiple-choice',
		options: [
			'Za nestrukturirane podatke',
			'Za strukturirane podatke u tablicama i upravljanje transakcijama',
			'Nikad',
			'Samo za male projekte',
		],
		correctAnswers: [1],
		explanation:
			'Relacijske baze (npr. MySQL) su prikladne za podatke u strukturiranim tablicama i upravljanje transakcijama.',
		category: 'Tehnologije',
	},
	{
		id: 14,
		question: 'Kada je NoSQL (nestrukturirana) baza podataka prikladna?',
		type: 'multiple-choice',
		options: [
			'Za upravljanje transakcijama',
			'Za fleksibilnu, korisnički orijentiranu organizaciju podataka i analizu podataka',
			'Nikad',
			'Samo za strukturirane podatke',
		],
		correctAnswers: [1],
		explanation:
			'NoSQL baze su fleksibilnije s korisnički orijentiranom organizacijom podataka i prikladne su za analizu podataka.',
		category: 'Tehnologije',
	},
	{
		id: 15,
		question: 'Koji su problemi mobilne platforme?',
		type: 'multiple-select',
		options: [
			'Prekid mrežne usluge',
			'Snaga procesora',
			'Upravljanje napajanjem (ograničena baterija)',
			'Zaslonska tipkovnica (spora i sklona pogreškama)',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Svi navedeni su problemi mobilne platforme koje treba uzeti u obzir pri dizajnu.',
		category: 'Tehnologije',
	},

	// UML
	{
		id: 16,
		question: 'Što je UML?',
		type: 'multiple-choice',
		options: [
			'Programski jezik',
			'Standardizirani jezik za planiranje razvoja softvera, koristi se za vizualiziranje, specificiranje, konstruiranje i dokumentiranje softverskih komponenti',
			'Baza podataka',
			'Operacijski sustav',
		],
		correctAnswers: [1],
		explanation:
			'UML (Unified Modeling Language) je standardizirani jezik za planiranje razvoja softvera i koristi se za vizualiziranje, specificiranje, konstruiranje i dokumentiranje softverskih komponenti.',
		category: 'UML',
	},
	{
		id: 17,
		question: 'Koji su statički UML dijagrami?',
		type: 'multiple-select',
		options: [
			'Dijagram klasa',
			'Dijagram komponenti',
			'Dijagram primjene (deployment)',
			'Slijedni dijagram',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Statički UML dijagrami su: dijagram klasa, dijagram komponenti i dijagram primjene. Slijedni dijagram je dinamički.',
		category: 'UML',
	},
	{
		id: 18,
		question: 'Što je use case dijagram?',
		type: 'multiple-choice',
		options: [
			'Dijagram koji pokazuje bazu podataka',
			'Ponašanje sustava iz perspektive vanjskog promatrača (što?, a ne kako?)',
			'Dijagram koji pokazuje kod',
			'Dijagram koji pokazuje servere',
		],
		correctAnswers: [1],
		explanation:
			'Use case dijagram prikazuje ponašanje sustava iz perspektive vanjskog promatrača (što?, a ne kako?). Osnovni elementi su: akteri, funkcionalnosti, veze.',
		category: 'UML',
	},
	{
		id: 19,
		question: 'Što prikazuje slijedni (sequence) dijagram?',
		type: 'multiple-choice',
		options: [
			'Bazu podataka',
			'Vremenski slijed interakcije objekata u sustavu - objekte i klase u scenariju + slijed poruka koje oni izmjenjuju',
			'Klase',
			'Servere',
		],
		correctAnswers: [1],
		explanation:
			'Slijedni dijagram prikazuje vremenski slijed interakcije objekata u sustavu, tj. objekte i klase u scenariju + slijed poruka koje oni izmjenjuju. Bitan je redoslijed komunikacije.',
		category: 'UML',
	},
	{
		id: 20,
		question:
			'Koja je razlika između slijednog dijagrama i dijagrama suradnje?',
		type: 'multiple-choice',
		options: [
			'Nemaju nikakvu razliku',
			'Imaju iste informacije, ali dijagram suradnje prikazuje interakciju objekata kroz objekte (četverokuti), veze među njima (linije) i slijed događaja (numerirane strelice s tekstom)',
			'Slijedni dijagram je za baze',
			'Dijagram suradnje je statički',
		],
		correctAnswers: [1],
		explanation:
			'Dijagram suradnje ima iste informacije kao slijedni dijagram, ali prikazuje interakciju objekata drugačije: objekte (četverokuti), veze među njima (linije), slijed događaja (numerirane strelice s tekstom).',
		category: 'UML',
	},

	// KVALITETAN SOFTVER
	{
		id: 21,
		question: 'Što karakterizira kvalitetan softver?',
		type: 'multiple-select',
		options: [
			'Pouzdan',
			'Responzivan',
			'Siguran za korištenje',
			'Jednostavan za održavanje',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Kvalitetan softver je: pouzdan, responzivan, siguran za korištenje, koristan, otporan na greške, dostupan i jednostavan za održavanje.',
		category: 'Kvaliteta softvera',
	},
	{
		id: 22,
		question: 'Koji su uzroci grešaka u softveru?',
		type: 'multiple-select',
		options: [
			'Zadatak - programeri ga ne razumiju dobro',
			'Program - programeri ne shvaćaju kako više komponenti sustava radi zajedno',
			'Tehnologija - programeri ne koriste prikladnu tehnologiju ili je ne razumiju',
			'Sve tri kategorije',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Uzroci grešaka su: zadatak (nerazumijevanje), program (propusti ili nerazumijevanje interakcija komponenti), tehnologija (nerazumijevanje ili neprikladna upotreba).',
		category: 'Kvaliteta softvera',
	},
	{
		id: 23,
		question: 'Kako se postiže pouzdanost softvera?',
		type: 'multiple-select',
		options: [
			'Izbjegavanje grešaka',
			'Provjera validnosti unosa',
			'Upravljanje greškama/padovima',
			'Samo testiranjem',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Pouzdani softver je razvijen uz 3 tehnike: izbjegavanje grešaka, provjera validnosti unosa, i upravljanje greškama/padovima.',
		category: 'Kvaliteta softvera',
	},

	// SLOŽENOST
	{
		id: 24,
		question: 'Što je složenost čitanja?',
		type: 'multiple-choice',
		options: [
			'Broj linija koda',
			'Razumljivost koda',
			'Brzina izvršavanja',
			'Veličina datoteke',
		],
		correctAnswers: [1],
		explanation: 'Složenost čitanja odnosi se na razumljivost koda.',
		category: 'Složenost',
	},
	{
		id: 25,
		question: 'Što je strukturna složenost?',
		type: 'multiple-choice',
		options: [
			'Broj linija koda',
			'Broj i tipovi odnosa (sprege) između struktura u programu',
			'Brzina izvršavanja',
			'Veličina projekta',
		],
		correctAnswers: [1],
		explanation:
			'Strukturna složenost je broj i tipovi odnosa između struktura u programu. Veća spreg = složeniji sustav -> teže održavanje.',
		category: 'Složenost',
	},
	{
		id: 26,
		question: 'Što je složenost podataka?',
		type: 'multiple-choice',
		options: [
			'Veličina baze podataka',
			'Odnosi između elemenata podataka u programu',
			'Brzina pristupa podacima',
			'Broj tablica',
		],
		correctAnswers: [1],
		explanation:
			'Složenost podataka su odnosi između elemenata podataka u programu.',
		category: 'Složenost',
	},
	{
		id: 27,
		question: 'Kako smanjiti strukturnu složenost?',
		type: 'multiple-select',
		options: [
			'Svaka funkcija/klasa zadužena samo za jedno',
			'Minimizirati dubinu hijerarhije nasljeđivanja',
			'Izbjegavati višestruka nasljeđivanja',
			'Izbjegavati niti',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Sve navedene tehnike pomažu u smanjenju strukturne složenosti.',
		category: 'Složenost',
	},

	// OBRASCI DIZAJNA
	{
		id: 28,
		question: 'Što su obrasci dizajna?',
		type: 'multiple-choice',
		options: [
			'Gotova rješenja koja se mogu direktno napisati kao kod',
			'Ideje kako riješiti neki problem (objektno orijentirani)',
			'Programski jezik',
			'Alat za testiranje',
		],
		correctAnswers: [1],
		explanation:
			'Obrasci dizajna daju ideju kako riješiti neki problem, ali nisu gotova rješenja koja se mogu izravno napisati u obliku koda.',
		category: 'Obrasci dizajna',
	},
	{
		id: 29,
		question: 'Koje su vrste obrazaca dizajna?',
		type: 'multiple-select',
		options: [
			'Obrasci stvaranja (npr. factory, prototype)',
			'Strukturni obrasci (npr. adapter, facade)',
			'Obrasci ponašanja (npr. mediator, state)',
			'Obrasci brisanja',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Tri vrste obrazaca dizajna su: obrasci stvaranja, strukturni obrasci i obrasci ponašanja.',
		category: 'Obrasci dizajna',
	},

	// REFAKTORIRANJE
	{
		id: 30,
		question: 'Što je refaktoriranje?',
		type: 'multiple-choice',
		options: [
			'Brisanje koda',
			'Izmjena programa u svrhu smanjenja njegove složenosti bez promjene vanjskog ponašanja',
			'Dodavanje novih funkcionalnosti',
			'Testiranje programa',
		],
		correctAnswers: [1],
		explanation:
			'Refaktoriranje je izmjena programa u svrhu smanjenja njegove složenosti, bez promjene vanjskog ponašanja tog programa. Čini program čitljivijim i razumljivijim.',
		category: 'Refaktoriranje',
	},
	{
		id: 31,
		question: 'Zbog čega je potrebno refaktoriranje koda?',
		type: 'multiple-select',
		options: [
			'Čini program čitljivijim i razumljivijim',
			'Smanjuju se šanse za greške nakon dodavanja nove značajke',
			'Smanjuje se složenost čitanja',
			'Povećava brzinu izvršavanja',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Refaktoriranje čini program čitljivijim, smanjuje šanse za greške i smanjuje složenost čitanja.',
		category: 'Refaktoriranje',
	},
	{
		id: 32,
		question: 'Koje su strategije refaktoriranja?',
		type: 'multiple-select',
		options: [
			'Preimenovati imena varijabli/funkcija/klasa da budu self-explanatory',
			'Duge klase/funkcije razbiti na manje',
			'Primijeniti shemu baze podataka za pojednostavljenje organizacije podataka',
			'Ugniježđene if-then-else izraze zamijeniti zaštitnim klauzulama',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Sve navedene su validne strategije refaktoriranja za različite vrste složenosti.',
		category: 'Refaktoriranje',
	},
	{
		id: 33,
		question: "Što su 'code smells'?",
		type: 'multiple-select',
		options: [
			'Sumnjivi djelovi koda',
			'Velike klase',
			'Duge metode/funkcije',
			'Dupliciran kod',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Code smells su sumnjivi djelovi koda poput velikih klasa, dugih metoda, dupliciranog koda, besmislenih imena i neiskorištenog koda.',
		category: 'Refaktoriranje',
	},

	// PROVJERA ULAZNIH VRIJEDNOSTI
	{
		id: 34,
		question: 'Zašto je važna provjera ulaznih vrijednosti?',
		type: 'multiple-choice',
		options: [
			'Samo za estetiku',
			'Krucijalno za sigurnost i pouzdanost - provjeravaju se format, raspon i greške u unosu',
			'Nije važna',
			'Samo za bazu podataka',
		],
		correctAnswers: [1],
		explanation:
			'Provjera ulaznih vrijednosti je krucijalna za sigurnost i pouzdanost - provjerava se jesu li ulazne vrijednosti u ispravnom formatu i unutar dozvoljenog raspona te ima li grešaka u unosu.',
		category: 'Validacija',
	},
	{
		id: 35,
		question: 'Koje su metode za implementaciju provjere ulaznih vrijednosti?',
		type: 'multiple-select',
		options: [
			'Ugrađene funkcije za provjeru valjanosti',
			'Funkcije za prisilnu pretvorbu tipa (npr. int())',
			'Eksplicitne usporedbe s popisom dopuštenih vrijednosti',
			'Regularni izrazi',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Sve navedene su metode za implementaciju provjere ulaznih vrijednosti.',
		category: 'Validacija',
	},

	// GREŠKE I IZNIMKE
	{
		id: 36,
		question: 'Koje su kategorije grešaka?',
		type: 'multiple-select',
		options: [
			'Greške podataka (netočni rezultati izračuna)',
			'Programske iznimke (events koje ometaju normalan tijek programa)',
			'Vremenska usklađenost (timing)',
			'Sve tri kategorije',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Tri kategorije grešaka su: greške podataka, programske iznimke i vremenska usklađenost.',
		category: 'Greške',
	},
	{
		id: 37,
		question: 'Kako minimizirati utjecaj greške?',
		type: 'multiple-select',
		options: [
			'Trajni podaci ne bi trebali biti izgubljeni ili oštećeni',
			'Korisnik bi trebao moći se vratiti u stanje sustava prije kvara',
			'Softver ne bi trebao ostati u neodređenom stanju ili se srušiti',
			'Uvijek osigurati povjerljive podatke',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Sve navedene mjere su važne za minimiziranje utjecaja greške.',
		category: 'Greške',
	},
	{
		id: 38,
		question: 'Što je auto-save (automatsko spremanje)?',
		type: 'multiple-choice',
		options: [
			'Spremanje svakih 5 sekundi',
			'Automatsko spremanje promijenjenih podataka u zadanim intervalima kako bi se smanjila količina izgubljenih podataka u slučaju kvara',
			'Spremanje u oblak',
			'Backup baze podataka',
		],
		correctAnswers: [1],
		explanation:
			'Auto-save je automatsko spremanje podataka u zadanim intervalima (samo promijenjenih od posljednjeg spremanja) u slučaju kvara količina izgubljenih podataka je smanjena.',
		category: 'Greške',
	},
	{
		id: 39,
		question: 'Što je activity logging (zapisivanje aktivnosti)?',
		type: 'multiple-choice',
		options: [
			'Samo za administratore',
			'Dnevnik svih aktivnosti korisnika koji služi da se rekreira slijed tih aktivnosti',
			'Log greške',
			'Samo za testiranje',
		],
		correctAnswers: [1],
		explanation:
			'Activity logging je dnevnik svih aktivnosti korisnika koji služi da se rekreira slijed tih aktivnosti (nije potrebno čuvati potpuni zapis sesije već samo popis radnji od zadnjeg trajnog spremanja).',
		category: 'Greške',
	},

	// IMPLEMENTACIJA I REUSE
	{
		id: 40,
		question: 'Na kojim nivoima je moguće ponovno korištenje (reuse) softvera?',
		type: 'multiple-select',
		options: [
			'Apstraktni nivo (reusa se znanje u dizajnu sustava)',
			'Objektni nivo (reusaju se objekti iz postojećih biblioteka)',
			'Nivo komponenti (reusaju se komponente uz potencijalnu prilagodbu)',
			'Sistemski nivo (reusa se cijeli aplikacijski sustav)',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Reuse je moguće na 4 nivoa: apstraktni, objektni, komponenti i sistemski.',
		category: 'Implementacija',
	},
	{
		id: 41,
		question: 'Što je host-target razvoj?',
		type: 'multiple-choice',
		options: [
			'Razvoj samo na jednom računalu',
			'Softver se razvija na jednom sustavu (host), a izvršava na drugom (target)',
			'Razvoj u oblaku',
			'Razvoj mobilne aplikacije',
		],
		correctAnswers: [1],
		explanation:
			'Host-target razvoj znači da se softver razvija na jednom sustavu (host), a izvršava na drugom (target).',
		category: 'Implementacija',
	},

	// OPEN SOURCE
	{
		id: 42,
		question: 'Što je softver otvorenog koda (open source)?',
		type: 'multiple-choice',
		options: [
			'Samo besplatan softver',
			'Dostupan besplatno, može se modificirati po želji',
			'Samo Linux',
			'Softver bez licenci',
		],
		correctAnswers: [1],
		explanation:
			'Softver otvorenog koda je dostupan besplatno i može se modificirati po želji.',
		category: 'Open Source',
	},
	{
		id: 43,
		question: 'Koje su prednosti open source softvera?',
		type: 'multiple-choice',
		options: [
			'Samo besplatan',
			'Reusing - smanjuje troškove razvoja i vrijeme izlaska na tržište',
			'Nema prednosti',
			'Samo za hobiste',
		],
		correctAnswers: [1],
		explanation:
			'Prednost open source softvera je reusing koji smanjuje troškove razvoja i vrijeme izlaska na tržište.',
		category: 'Open Source',
	},
	{
		id: 44,
		question: 'Koji su nedostaci open source softvera?',
		type: 'multiple-select',
		options: [
			'Određena ograničenja (od strane onih koji ga licenciraju)',
			'Korisnik nema kontrolu nad njegovom evolucijom',
			'Nema nedostataka',
			'Previše je skup',
		],
		correctAnswers: [0, 1],
		explanation:
			'Nedostaci su: određena ograničenja od strane licenciranja i korisnik nema kontrolu nad evolucijom softvera.',
		category: 'Open Source',
	},

	// TESTIRANJE - Osnove
	{
		id: 45,
		question: 'Što je testiranje softvera?',
		type: 'multiple-choice',
		options: [
			'Samo pronalaženje grešaka',
			'Proces u kojem se program izvršava iz pogleda korisnika, dokazuje se da radi ono što treba raditi i otkrivaju se greške',
			'Samo pisanje dokumentacije',
			'Samo debugiranje',
		],
		correctAnswers: [1],
		explanation:
			'Testiranje softvera je proces u kojem se program izvršava iz pogleda korisnika, dokazuje se da radi ono što treba raditi i otkrivaju se greške. Test otkriva postojanje greške, a ne da je nema.',
		category: 'Testiranje',
	},
	{
		id: 46,
		question: 'Koja su dva cilja testiranja?',
		type: 'multiple-select',
		options: [
			'Demonstrirati razvojnom timu i korisnicima da softver odgovara zahtjevima',
			'Otkriti u kojim se situacijama softver ne ponaša ispravno (testiranje grešaka)',
			'Samo napisati dokumentaciju',
			'Samo mjeriti performanse',
		],
		correctAnswers: [0, 1],
		explanation:
			'Dva cilja testiranja su: demonstrirati da softver odgovara zahtjevima i otkriti situacije u kojima se ne ponaša ispravno.',
		category: 'Testiranje',
	},
	{
		id: 47,
		question:
			'Nabrojiti 4 osnovne vrste testiranja koje se provode nad sustavom:',
		type: 'multiple-select',
		options: [
			'Funkcionalno testiranje',
			'Korisničko testiranje',
			'Testiranje performansi i opterećenja',
			'Sigurnosno testiranje',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Četiri osnovne vrste testiranja su: funkcionalno testiranje, korisničko testiranje, testiranje performansi i opterećenja, i sigurnosno testiranje.',
		category: 'Testiranje',
	},

	// FUNKCIONALNO TESTIRANJE
	{
		id: 48,
		question: 'Što je jedinično testiranje (unit testing)?',
		type: 'multiple-choice',
		options: [
			'Testiranje cijelog sustava',
			'Izolirano testiranje programskih jedinica, provodi programer za vrijeme razvoja',
			'Testiranje baze podataka',
			'Testiranje korisničkog sučelja',
		],
		correctAnswers: [1],
		explanation:
			'Jedinično testiranje je izolirano testiranje programskih jedinica, provodi programer za vrijeme razvoja. Uz razvoj jedinice koda treba odmah razvijati i testove za taj kod.',
		category: 'Testiranje',
	},
	{
		id: 49,
		question: 'Što je black-box testiranje?',
		type: 'multiple-choice',
		options: [
			'Testiranje s poznavanjem koda',
			'Testovi se stvaraju iz specifikacije sustava - testni inženjer ne treba imati nikakvo znanje o tome kako interno sustav radi',
			'Testiranje baze podataka',
			'Samo testiranje vizualnih elemenata',
		],
		correctAnswers: [1],
		explanation:
			'Black-box testiranje znači da se testovi stvaraju iz specifikacije sustava - onaj koji radi testove ne treba imati nikakvo znanje o tome kako interno sustav radi.',
		category: 'Testiranje',
	},
	{
		id: 50,
		question: 'Što je white-box testiranje?',
		type: 'multiple-choice',
		options: [
			'Testiranje bez poznavanja koda',
			'Testovi se stvaraju na osnovu koda sustava',
			'Samo testiranje UI-ja',
			'Samo testiranje API-ja',
		],
		correctAnswers: [1],
		explanation:
			'White-box testiranje znači da se testovi stvaraju na osnovu koda sustava.',
		category: 'Testiranje',
	},
	{
		id: 51,
		question: 'Što je testiranje značajki (feature testing)?',
		type: 'multiple-choice',
		options: [
			'Testiranje baze podataka',
			'Jedinice koda se integriraju u značajke koje se testiraju u nadi da će funkcionalnost biti implementirana prema očekivanjima',
			'Samo testiranje UI-ja',
			'Testiranje performansi',
		],
		correctAnswers: [1],
		explanation:
			'U testiranju značajki jedinice koda se integriraju u značajke koje se testiraju u nadi da će funkcionalnost biti implementirana prema očekivanjima.',
		category: 'Testiranje',
	},
	{
		id: 52,
		question: 'Što je testiranje sustava (system testing)?',
		type: 'multiple-choice',
		options: [
			'Samo testiranje jedinica',
			'Jedinice koda se integriraju u radnu verziju sustava koja se testira (idealno koristeći scenarije koji opisuju moguće upotrebe sustava)',
			'Samo testiranje baze',
			'Samo testiranje performansi',
		],
		correctAnswers: [1],
		explanation:
			'U testiranju sustava jedinice koda se integriraju u radnu verziju sustava koja se testira (idealno koristeći scenarije koji opisuju moguće upotrebe sustava i definiraju niz interakcija).',
		category: 'Testiranje',
	},
	{
		id: 53,
		question: 'Što je testiranje verzije za objavu (release testing)?',
		type: 'multiple-choice',
		options: [
			'Testiranje u testnom okruženju',
			'Testira se finalna verzija sustava u stvarnom operativnom okruženju - cilj je odlučiti je li sustav dovoljno dobar za objavu',
			'Samo testiranje performansi',
			'Testiranje koda',
		],
		correctAnswers: [1],
		explanation:
			'U testiranju verzije za objavu testira se finalna verzija sustava u stvarnom operativnom okruženju (ne u testnom), a cilj je odlučiti je li sustav dovoljno dobar za objavu.',
		category: 'Testiranje',
	},

	// VRSTE TESTIRANJA
	{
		id: 54,
		question: 'Što testira korisničko testiranje?',
		type: 'multiple-choice',
		options: [
			'Samo kod',
			'Je li proizvod koristan i mogu li ga koristiti krajnji korisnici; dokazuje se da značajke pomažu korisnicima',
			'Samo performanse',
			'Samo bazu',
		],
		correctAnswers: [1],
		explanation:
			'Korisničko testiranje testira je li proizvod koristan i mogu li ga koristiti krajnji korisnici; dokazuje se da značajke sustava pomažu korisnicima i da korisnici razumiju kako ih koristiti.',
		category: 'Testiranje',
	},
	{
		id: 55,
		question: 'Što testira testiranje performansi i opterećenja?',
		type: 'multiple-choice',
		options: [
			'Samo sigurnost',
			'Radi li softver dovoljno brzo i može li podnijeti opterećenje (stress testing - preopteretiti sustav da se vidi kako se ponaša)',
			'Samo kod',
			'Samo UI',
		],
		correctAnswers: [1],
		explanation:
			'Testiranje performansi i opterećenja testira radi li softver dovoljno brzo i može li podnijeti opterećenje. Stress testing namjerno preopterećuje sustav da se vidi kako se ponaša u slučaju greške.',
		category: 'Testiranje',
	},
	{
		id: 56,
		question: 'Što testira sigurnosno testiranje?',
		type: 'multiple-choice',
		options: [
			'Samo performanse',
			'Može li zaštititi korisničke podatke u slučaju greške ili napada; traže se ranjivosti i provjerava sigurnost koda',
			'Samo kod',
			'Samo UI',
		],
		correctAnswers: [1],
		explanation:
			'Sigurnosno testiranje provjerava može li sustav zaštititi korisničke podatke u slučaju greške ili napada; teži se pronaći ranjivosti koje bi napadač mogao iskoristiti i pružiti uvjerljive dokaze da je kod siguran.',
		category: 'Testiranje',
	},

	// AUTOMATIZIRANO TESTIRANJE
	{
		id: 57,
		question: 'Od kojih se dijelova sastoji automatizirano testiranje?',
		type: 'multiple-select',
		options: [
			'Organizacije (arrange) - organizira i postavlja sustav za izvođenje testa',
			'Pokretanja (action) - poziva jedinicu s testnim podacima',
			'Tvrdnje (assertion) - gleda se u kakvom su odnosu stvarni i očekivani rezultat',
			'Brisanja (delete)',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Automatizirano testiranje se sastoji od tri dijela: organizacije (arrange), pokretanja (action) i tvrdnje (assertion).',
		category: 'Testiranje',
	},
	{
		id: 58,
		question: 'Što prikazuje piramida testiranja?',
		type: 'multiple-choice',
		options: [
			'Samo broj testova',
			'Raspodjelu automatiziranih testova: 70% jedinični testovi, 20% testovi značajki, 10% testovi sustava',
			'Samo troškove',
			'Samo vrijeme izvršavanja',
		],
		correctAnswers: [1],
		explanation:
			'Piramida testiranja prikazuje raspodjelu automatiziranih testova: 70% jedinični testovi (najbrži i najjeftiniji), 20% testovi značajki, 10% testovi sustava (najsporiji i najskuplji).',
		category: 'Testiranje',
	},
	{
		id: 59,
		question: 'Što je regresijsko testiranje?',
		type: 'multiple-choice',
		options: [
			'Testiranje samo novih stvari',
			'Kad se napravi nova promjena u sustavu, svi prethodni testovi se opet pokreću, što osigurava da promjena ne dovodi do nepredviđenog ponašanja',
			'Samo testiranje performansi',
			'Samo testiranje baze',
		],
		correctAnswers: [1],
		explanation:
			'Regresijsko testiranje znači da kad se napravi nova promjena u sustavu, svi prethodni testovi se opet pokreću, što osigurava da promjena ne dovodi do nepredviđenog ponašanja sustava.',
		category: 'Testiranje',
	},

	// TDD
	{
		id: 60,
		question: 'Što je TDD (Test-Driven Development)?',
		type: 'multiple-choice',
		options: [
			'Pisanje testova nakon koda',
			'Razvoj upravljan testiranjem - ideja da se izvršni test/testovi pišu prije koda',
			'Samo pisanje testova',
			'Samo dokumentiranje',
		],
		correctAnswers: [1],
		explanation:
			'TDD (Test-Driven Development) je razvoj upravljan testiranjem - ideja da se izvršni test/testovi pišu prije koda. Funkcionira najbolje kod razvoja pojedinačnih jedinica.',
		category: 'Testiranje',
	},
	{
		id: 61,
		question: 'Koje su prednosti TDD-a?',
		type: 'multiple-select',
		options: [
			'Testovi 100% pokrivaju kod',
			'Testovi djeluju kao specifikacija za kod',
			'Otklanjanje pogrešaka je lakše',
			'Rezultat je jednostavniji kod',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation: 'Sve navedene su prednosti TDD-a.',
		category: 'Testiranje',
	},
	{
		id: 62,
		question: 'Koji su nedostaci razvoja upravljanog testiranjem (TDD)?',
		type: 'multiple-select',
		options: [
			'Programeri ne mijenjaju program značajno jer znaju da će to izazvati pad velikog broja testova',
			'Programeri (ne)svjesno redefiniraju problem da bi se lakše napisali testovi',
			'Previše fokusa na detalje implementacije umjesto na problem',
			"Teško je pisati 'bad data' testove - nemoguće je predvidjeti sve probleme",
		],
		correctAnswers: [0, 1, 2, 3],
		explanation: 'Sve navedene su mane TDD-a.',
		category: 'Testiranje',
	},

	// RECENZIJE KODA
	{
		id: 63,
		question: 'Što je recenzija koda (code review)?',
		type: 'multiple-choice',
		options: [
			'Samo testiranje',
			'Pregledavanje koda da se ustanovi ima li pogrešaka/anomalija o kojima bi pričali s programerom; dodatak i nadopuna testiranju',
			'Samo dokumentiranje',
			'Samo refaktoriranje',
		],
		correctAnswers: [1],
		explanation:
			'Recenzija koda je pregledavanje koda da se ustanovi ima li pogrešaka/anomalija o kojima bi pričali s programerom; dodatak i nadopuna testiranju.',
		category: 'Testiranje',
	},

	// SOFTVERSKA PODRŠKA
	{
		id: 64,
		question: 'Koja je podjela posla po timovima u softverskoj podršci?',
		type: 'multiple-select',
		options: [
			'Razvojni tim - konačnu verziju softvera prosljeđuje timu za objavu',
			'Tim za objavu - radi verziju za objavu, testira ju, priprema dokumentaciju',
			'Tim za korisničku podršku - održavanje softvera',
			'Svi rade sve',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'U tradicionalnom modelu tri različita tima imaju različite odgovornosti: razvojni tim, tim za objavu i tim za korisničku podršku.',
		category: 'Softverska podrška',
	},

	// DEVOPS
	{
		id: 65,
		question: 'Što je DevOps?',
		type: 'multiple-choice',
		options: [
			'Samo razvoj',
			'Alternativni pristup osmišljen u svrhu ubrzanja procesa objave izvršne verzije programa i podrške (Development + Operation)',
			'Samo testiranje',
			'Samo deployment',
		],
		correctAnswers: [1],
		explanation:
			'DevOps (Development + Operation) je alternativni pristup osmišljen u svrhu ubrzanja procesa objave izvršne verzije programa i podrške.',
		category: 'DevOps',
	},
	{
		id: 66,
		question: 'Koji su osnovni principi DevOps-a?',
		type: 'multiple-select',
		options: [
			'Svatko je odgovoran za sve: razvoj + kreiranje verzije za objavu + održavanje',
			'Sve što se može treba se automatizirati',
			'Prvo mjeri, kasnije promijeni',
			'Samo programer sve radi',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Tri principa DevOps-a su: svatko je odgovoran za sve, sve što se može treba automatizirati, prvo mjeri kasnije promijeni.',
		category: 'DevOps',
	},
	{
		id: 67,
		question: 'Nabroji 4 prednosti DevOps-a:',
		type: 'multiple-select',
		options: [
			'Brza objava softvera',
			'Smanjen rizik',
			'Brzi popravak grešaka',
			'Produktivniji tim',
		],
		correctAnswers: [0, 1, 2, 3],
		explanation:
			'Prednosti DevOps-a su: brza objava softvera (jer je komunikacija među ljudima drastično smanjena), smanjen rizik, brzi popravak grešaka (svi rade na popravku) i produktivniji tim (zbog osjećaja zajedništva).',
		category: 'DevOps',
	},

	// UPRAVLJANJE KODOM
	{
		id: 68,
		question: 'Što je upravljanje kodom?',
		type: 'multiple-choice',
		options: [
			'Samo Git',
			'Skup softverski podržanih praksi za upravljanje čitavim kodom; osigurava da promjene pojedinca ne utječu na rad ostalih',
			'Samo backup',
			'Samo dokumentacija',
		],
		correctAnswers: [1],
		explanation:
			'Upravljanje kodom je skup softverski podržanih praksi koje se koriste za upravljanje čitavim kodom; neophodno je jer osigurava da promjene pojedinca ne utječu na rad ostalih.',
		category: 'DevOps',
	},
	{
		id: 69,
		question: 'Što je grananje (branching) i spajanje (merging)?',
		type: 'multiple-choice',
		options: [
			'Samo brisanje koda',
			'Ako različiti članovi tima rade na istom kodu stvaraju se paralelne razvojne grane koje se naknadno mogu spojiti',
			'Samo kreiranje kopija',
			'Samo backup',
		],
		correctAnswers: [1],
		explanation:
			'Grananje (branching) i spajanje (merging): ako različiti članovi tima rade na istom kodu stvaraju se paralelne razvojne grane koje se naknadno mogu spojiti.',
		category: 'DevOps',
	},
	{
		id: 70,
		question: "Što označava pojam 'breaking the build' i kako ga izbjeći?",
		type: 'multiple-choice',
		options: [
			'Samo brisanje koda',
			'Slanje koda koji će izazvati grešku u glavni repozitorij projekta; izbjegava se lokalnim integriranjem i testiranjem prije slanja',
			'Samo greška u kodu',
			'Build proceso',
		],
		correctAnswers: [1],
		explanation:
			"Breaking the build je slanje koda koji će izazvati grešku u glavni repozitorij projekta. Izbjegava se tako da se prvo lokalno integrira i testira pa zatim šalje u glavni repozitorij ('integriraj dvaput').",
		category: 'DevOps',
	},

	// DEVOPS AUTOMATIZACIJA
	{
		id: 71,
		question: 'Što je kontinuirana integracija?',
		type: 'multiple-choice',
		options: [
			'Samo manual merge',
			'Svaki put kad programer napravi promjenu u glavnoj grani projekta, izrađuje se i testira izvršna verzija sustava (nakon push operacije)',
			'Samo testiranje',
			'Samo deployment',
		],
		correctAnswers: [1],
		explanation:
			'Kontinuirana integracija: svaki put kad programer napravi promjenu u glavnoj grani projekta, izrađuje se i testira izvršna verzija sustava (nakon push operacije).',
		category: 'DevOps',
	},
	{
		id: 72,
		question: 'Što je infrastruktura kao kod?',
		type: 'multiple-choice',
		options: [
			'Samo kod',
			'Umjesto ručnog ažuriranja softvera na poslužiteljima, proces se automatizira korištenjem modela infrastrukture napisanog u jeziku programa',
			'Samo skripte',
			'Samo konfiguracija',
		],
		correctAnswers: [1],
		explanation:
			'Infrastruktura kao kod: umjesto ručnog ažuriranja softvera na poslužiteljima, proces se automatizira korištenjem modela infrastrukture napisanog u jeziku programa.',
		category: 'DevOps',
	},
	{
		id: 73,
		question: 'Koje su prednosti distribuiranog upravljanja kodom?',
		type: 'multiple-select',
		options: [
			'Otpornost - svi imaju svoju kopiju repozitorija',
			'Brzina - slanje promjena se odvija brzo, lokalno bez mreže',
			'Fleksibilnost - može se lokalno eksperimentirati',
			'Nema prednosti',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Prednosti distribuiranog upravljanja kodom su: otpornost (svi imaju kopiju), brzina (lokalno, brzo) i fleksibilnost (lokalno eksperimentiranje).',
		category: 'DevOps',
	},

	// PITANJA IZ KOLOKVIJA - 1
	{
		id: 74,
		question: 'Koja su dva osnovna razloga nastanka grešaka u programu?',
		type: 'multiple-select',
		options: [
			'Programerske greške (slučajno kreiranje grešaka u kodu)',
			'Loše razumijevanje (značajki ili zadatka)',
			'Samo loš računar',
			'Samo loši alati',
		],
		correctAnswers: [0, 1],
		explanation:
			'Dva osnovna razloga nastanka grešaka su: programerske greške (slučajno kreiranje grešaka u kodu) i loše razumijevanje (značajki ili zadatka).',
		category: 'Kolokvij pitanja',
	},
	{
		id: 75,
		question: 'Što se radi u procesu testiranja značajki i tko ga provodi?',
		type: 'multiple-choice',
		options: [
			'Samo jedan programer testira',
			'Jedinice koda se integriraju u značajke i testiraju se; u testiranju bi trebali sudjelovati svi programeri koji su radili na jedinicama koje čine značajku',
			'Samo testiranje UI-ja',
			'Samo end-to-end testiranje',
		],
		correctAnswers: [1],
		explanation:
			'U testiranju značajki jedinice koda se integriraju u značajke koje se testiraju; u testiranju bi trebali sudjelovati svi programeri koji su radili na jedinicama koje čine značajku.',
		category: 'Kolokvij pitanja',
	},
	{
		id: 76,
		question: 'Što su ekvivalentne particije u jediničnom testiranju?',
		type: 'multiple-choice',
		options: [
			'Samo jedan ulaz',
			'Skupovi ulaza koji će se tretirati na isti način u kodu; mogu se kreirati iz specifikacije sustava (black-box) ili koda sustava (white-box)',
			'Samo greške',
			'Samo performanse',
		],
		correctAnswers: [1],
		explanation:
			'Ekvivalentne particije su skupovi ulaza koji će se tretirati na isti način u kodu. Mogu se kreirati iz specifikacije sustava (black-box testiranje) ili koda sustava (white-box testiranje).',
		category: 'Kolokvij pitanja',
	},
	{
		id: 77,
		question: 'Što je kontejner u kontekstu razvoja softvera?',
		type: 'multiple-choice',
		options: [
			'Samo Docker',
			'Samostalna izvršna okolina koja se pokreće iznad operacijskog sustava; olakšava kreiranje identične izvršne okoline',
			'Samo virtualna mašina',
			'Samo oblak',
		],
		correctAnswers: [1],
		explanation:
			'Kontejner je samostalna izvršna okolina koja se pokreće iznad operacijskog sustava i olakšava kreiranje identične izvršne okoline.',
		category: 'Kolokvij pitanja',
	},
	{
		id: 78,
		question:
			'Koja je razlika između testiranja sustava i testiranja verzije za objavu?',
		type: 'multiple-choice',
		options: [
			'Nema razlike',
			'Testiranje sustava se radi u testnom okruženju, a testiranje verzije za objavu testira finalnu verziju sustava u stvarnom operativnom okruženju',
			'Oba se rade u produkciji',
			'Testiranje sustava je samo za bazu',
		],
		correctAnswers: [1],
		explanation:
			'Testiranje sustava se radi u testnom okruženju, dok se testiranje verzije za objavu testira finalna verzija sustava u stvarnom operativnom okruženju. Cilj verzije za objavu je odlučiti je li sustav dovoljno dobar za objavu.',
		category: 'Kolokvij pitanja',
	},
	{
		id: 79,
		question:
			'Zbog čega je smanjivanje složenosti važan cilj dizajna arhitekture?',
		type: 'multiple-choice',
		options: [
			'Samo zbog performansi',
			'Što je sustav složeniji, to ga je teže razumjeti i mijenjati i veća je šansa da će se napraviti greške ili sigurnosni propusti',
			'Samo zbog troškova',
			'Nije važno',
		],
		correctAnswers: [1],
		explanation:
			'Što je sustav složeniji, to ga je teže razumjeti i mijenjati i veća je šansa da će se napraviti greške ili sigurnosni propusti.',
		category: 'Kolokvij pitanja',
	},
	{
		id: 80,
		question:
			'Koja se 3 osnovna pitanja treba postaviti tijekom procesa dizajna arhitekture?',
		type: 'multiple-select',
		options: [
			'Na koji način bi sustav trebao biti organiziran kao niz komponenti?',
			'Kako bi se te komponente trebale biti distribuirane i na koji način međusobno komuniciraju?',
			'Koje tehnologije treba koristiti u izgradnji sustava i koje komponente se može ponovno koristiti?',
			'Samo koji programski jezik koristiti',
		],
		correctAnswers: [0, 1, 2],
		explanation:
			'Tri osnovna pitanja su: kako organizirati sustav kao niz komponenti, kako distribuirati komponente i kako komuniciraju, te koje tehnologije koristiti i što ponovno koristiti.',
		category: 'Kolokvij pitanja',
	},
];
