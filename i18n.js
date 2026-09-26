(function(){
  "use strict";

  var LANGS = ["ja","en","zh-cn","zh-tw","ko","fr","es"];
  var LANG_NAMES = {
    ja:"日本語", en:"English", "zh-cn":"简体中文", "zh-tw":"繁體中文",
    ko:"한국어", fr:"Français", es:"Español"
  };
  var HTML_LANG = {
    ja:"ja", en:"en", "zh-cn":"zh-Hans", "zh-tw":"zh-Hant",
    ko:"ko", fr:"fr", es:"es"
  };
  var STORAGE_KEY = "doradora_lang";

  var T = {
    "aria.brandHome": {
      ja:"doradora トップへ", en:"To doradora home", "zh-cn":"前往 doradora 首页", "zh-tw":"前往 doradora 首頁",
      ko:"doradora 홈으로", fr:"Vers l'accueil doradora", es:"Ir al inicio de doradora"
    },
    "aria.menuOpen": {
      ja:"メニューを開く", en:"Open menu", "zh-cn":"打开菜单", "zh-tw":"開啟選單",
      ko:"메뉴 열기", fr:"Ouvrir le menu", es:"Abrir menú"
    },
    "nav.business": {
      ja:"事業内容", en:"Business", "zh-cn":"业务内容", "zh-tw":"業務內容",
      ko:"사업 내용", fr:"Activités", es:"Actividades"
    },
    "nav.strengths": {
      ja:"選ばれる理由", en:"Why doradora", "zh-cn":"选择理由", "zh-tw":"選擇理由",
      ko:"선택받는 이유", fr:"Pourquoi nous", es:"Por qué elegirnos"
    },
    "nav.roadmap": {
      ja:"歩み", en:"Our Journey", "zh-cn":"发展历程", "zh-tw":"發展歷程",
      ko:"발자취", fr:"Notre parcours", es:"Nuestra trayectoria"
    },
    "nav.vision": {
      ja:"私たちの想い", en:"Our Vision", "zh-cn":"我们的理念", "zh-tw":"我們的理念",
      ko:"우리의 다짐", fr:"Notre vision", es:"Nuestra visión"
    },
    "nav.company": {
      ja:"会社概要", en:"Company", "zh-cn":"公司概况", "zh-tw":"公司概況",
      ko:"회사 개요", fr:"L'entreprise", es:"La empresa"
    },
    "nav.contact": {
      ja:"お問い合わせ", en:"Contact", "zh-cn":"联系我们", "zh-tw":"聯絡我們",
      ko:"문의하기", fr:"Contact", es:"Contacto"
    },

    "index.meta.title": {
      ja:"doradora | 株式会社doradora(設立準備中)公式サイト",
      en:"doradora | Official Site of doradora Co., Ltd. (in preparation)",
      "zh-cn":"doradora | doradora股份有限公司(筹备中)官方网站",
      "zh-tw":"doradora | doradora股份有限公司(籌備中)官方網站",
      ko:"doradora | 주식회사 doradora(설립 준비 중) 공식 사이트",
      fr:"doradora | Site officiel de doradora Co., Ltd. (en préparation)",
      es:"doradora | Sitio oficial de doradora Co., Ltd. (en preparación)"
    },
    "index.meta.description": {
      ja:"doradoraは、杵つき製法と体験価値にこだわる和菓子(餅)ブランドです。会社設立準備中の歩みと事業内容、お取引・お問い合わせ先をご案内します。",
      en:"doradora is a wagashi (mochi) brand devoted to traditional pestle-pounding craftsmanship and experiential value. Here we introduce our progress toward incorporation, our business, and contact details.",
      "zh-cn":"doradora是一个坚持杵捣工艺与体验价值的和果子(年糕)品牌。本页介绍公司筹备进展、业务内容及合作咨询方式。",
      "zh-tw":"doradora是一個堅持杵搗工藝與體驗價值的和菓子(年糕)品牌。本頁介紹公司籌備進展、業務內容及合作洽詢方式。",
      ko:"doradora는 절구 공이로 떡을 치는 전통 제법과 체험 가치를 소중히 여기는 화과자(떡) 브랜드입니다. 회사 설립 준비 현황과 사업 내용, 문의처를 안내합니다.",
      fr:"doradora est une marque de wagashi (mochi) attachée au savoir-faire traditionnel du pilon et à la valeur de l'expérience. Nous présentons ici l'avancement de notre création d'entreprise, nos activités et nos coordonnées.",
      es:"doradora es una marca de wagashi (mochi) fiel a la elaboración tradicional a mazo y al valor de la experiencia. Presentamos el avance de la constitución de la empresa, nuestras actividades y datos de contacto."
    },
    "index.meta.ogTitle": {
      ja:"doradora | 株式会社doradora 公式サイト",
      en:"doradora | Official Site of doradora Co., Ltd.",
      "zh-cn":"doradora | doradora股份有限公司官方网站",
      "zh-tw":"doradora | doradora股份有限公司官方網站",
      ko:"doradora | 주식회사 doradora 공식 사이트",
      fr:"doradora | Site officiel de doradora Co., Ltd.",
      es:"doradora | Sitio oficial de doradora Co., Ltd."
    },
    "index.meta.ogDescription": {
      ja:"ドラを鳴らす、心を鳴らす。杵つき製法と体験価値にこだわる和菓子ブランド doradora の公式サイトです。",
      en:"Strike the gong, stir the heart. The official site of doradora, a wagashi brand devoted to traditional craftsmanship and experiential value.",
      "zh-cn":"敲响铜锣，敲动人心。这是坚持杵捣工艺与体验价值的和果子品牌doradora官方网站。",
      "zh-tw":"敲響銅鑼，敲動人心。這是堅持杵搗工藝與體驗價值的和菓子品牌doradora官方網站。",
      ko:"징을 울리고, 마음을 울리다. 전통 제법과 체험 가치를 소중히 여기는 화과자 브랜드 doradora의 공식 사이트입니다.",
      fr:"Faire résonner le gong, faire vibrer le cœur. Site officiel de doradora, marque de wagashi fidèle au savoir-faire traditionnel et à l'expérience.",
      es:"Que suene el gong, que vibre el corazón. Sitio oficial de doradora, marca de wagashi fiel a la elaboración tradicional y a la experiencia."
    },

    "hero.eyebrow": {
      ja:"Coming Soon — 株式会社doradora(設立準備中)",
      en:"Coming Soon — doradora Co., Ltd. (in preparation)",
      "zh-cn":"即将推出 — doradora股份有限公司(筹备中)",
      "zh-tw":"即將推出 — doradora股份有限公司(籌備中)",
      ko:"Coming Soon — 주식회사 doradora(설립 준비 중)",
      fr:"Bientôt disponible — doradora Co., Ltd. (en préparation)",
      es:"Próximamente — doradora Co., Ltd. (en preparación)"
    },
    "hero.headline": {
      ja:"ドラを鳴らす、<br>心を鳴らす。",
      en:"Strike the gong,<br>stir the heart.",
      "zh-cn":"敲响铜锣，<br>敲动人心。",
      "zh-tw":"敲響銅鑼，<br>敲動人心。",
      ko:"징을 울리고,<br>마음을 울리다.",
      fr:"Faire résonner le gong,<br>faire vibrer le cœur.",
      es:"Que suene el gong,<br>que vibre el corazón."
    },
    "hero.lead": {
      ja:"杵の音に鼓動を重ね、<br>餅づくりという日本の伝統を、<br>品質と体験価値の両立でもう一度主役に。<br>doradoraは、これから始まる和菓子ブランドです。",
      en:"Layering heartbeats over the sound of the pestle,<br>we bring the Japanese tradition of mochi-making<br>back to center stage — through quality and experience alike.<br>doradora is a wagashi brand about to begin.",
      "zh-cn":"让杵声与心跳重叠，<br>把捣年糕这项日本传统，<br>以品质与体验并重的方式重新推向舞台中央。<br>doradora，是一个即将启程的和果子品牌。",
      "zh-tw":"讓杵聲與心跳重疊，<br>把搗年糕這項日本傳統，<br>以品質與體驗並重的方式重新推向舞台中央。<br>doradora，是一個即將啟程的和菓子品牌。",
      ko:"절굿공이 소리에 심장 박동을 포개어,<br>떡메치기라는 일본의 전통을,<br>품질과 체험 가치를 모두 살려 다시 주인공으로.<br>doradora는 이제 막 시작하는 화과자 브랜드입니다.",
      fr:"Superposant les battements du cœur au son du pilon,<br>nous redonnons à la tradition japonaise du mochi<br>sa place centrale, entre qualité et expérience.<br>doradora est une marque de wagashi qui s'apprête à naître.",
      es:"Superponiendo los latidos del corazón al sonido del mazo,<br>devolvemos el protagonismo a la tradición japonesa del mochi,<br>combinando calidad y experiencia.<br>doradora es una marca de wagashi a punto de comenzar."
    },
    "hero.metaBusinessLabel": {
      ja:"事業", en:"Business", "zh-cn":"业务", "zh-tw":"業務",
      ko:"사업", fr:"Activité", es:"Actividad"
    },
    "hero.metaBusinessValue": {
      ja:"餅の製造・販売、体験型店舗の企画運営",
      en:"Manufacturing and sales of mochi; planning and operation of experiential stores",
      "zh-cn":"年糕的制造与销售、体验型店铺的策划运营",
      "zh-tw":"年糕的製造與銷售、體驗型店鋪的企劃營運",
      ko:"떡 제조·판매, 체험형 매장 기획 및 운영",
      fr:"Fabrication et vente de mochi, conception et exploitation de boutiques expérientielles",
      es:"Fabricación y venta de mochi; planificación y gestión de tiendas experienciales"
    },
    "hero.metaStatusLabel": {
      ja:"現在地", en:"Current stage", "zh-cn":"当前阶段", "zh-tw":"目前階段",
      ko:"현재 단계", fr:"Étape actuelle", es:"Etapa actual"
    },
    "hero.metaStatusValue": {
      ja:"会社設立準備中", en:"Company in preparation", "zh-cn":"公司筹备中", "zh-tw":"公司籌備中",
      ko:"회사 설립 준비 중", fr:"Société en cours de création", es:"Empresa en fase de constitución"
    },

    "business.title": {
      ja:"事業内容", en:"Business", "zh-cn":"业务内容", "zh-tw":"業務內容",
      ko:"사업 내용", fr:"Nos activités", es:"Nuestro negocio"
    },
    "business.lead": {
      ja:"doradoraが大切にする3つの軸。<br>餅という素材の可能性を、<br>製法・体験・文化の3方向から広げていきます。",
      en:"Three pillars doradora holds dear.<br>We expand the potential of mochi<br>through craft, experience, and culture.",
      "zh-cn":"doradora珍视的三大支柱。<br>我们从制法、体验、文化三个方向，<br>拓展年糕这一食材的可能性。",
      "zh-tw":"doradora珍視的三大支柱。<br>我們從製法、體驗、文化三個方向，<br>拓展年糕這一食材的可能性。",
      ko:"doradora가 소중히 여기는 세 가지 축.<br>떡이라는 소재의 가능성을,<br>제법·체험·문화 세 방향으로 넓혀갑니다.",
      fr:"Trois piliers chers à doradora.<br>Nous élargissons le potentiel du mochi<br>par le savoir-faire, l'expérience et la culture.",
      es:"Tres pilares que atesora doradora.<br>Ampliamos el potencial del mochi<br>a través de la elaboración, la experiencia y la cultura."
    },
    "business.card1.title": {
      ja:"匠の製法", en:"Master Craftsmanship", "zh-cn":"匠心制法", "zh-tw":"匠心製法",
      ko:"장인의 제법", fr:"Savoir-faire artisanal", es:"Elaboración artesanal"
    },
    "business.card1.desc": {
      ja:"厳選した餅米と、杵つきによる昔ながらの製法にこだわります。効率より、味と食感を優先します。",
      en:"We use carefully selected glutinous rice and the traditional pestle-pounding method, prioritizing taste and texture over efficiency.",
      "zh-cn":"坚持选用优质糯米，并沿用杵捣的传统制法。比起效率，我们更重视口感与风味。",
      "zh-tw":"堅持選用優質糯米，並沿用杵搗的傳統製法。比起效率，我們更重視口感與風味。",
      ko:"엄선한 찹쌀과 절굿공이로 치는 옛 방식을 고집합니다. 효율보다 맛과 식감을 우선합니다.",
      fr:"Nous utilisons du riz gluant soigneusement sélectionné et la méthode traditionnelle au pilon, privilégiant le goût et la texture à l'efficacité.",
      es:"Utilizamos arroz glutinoso cuidadosamente seleccionado y el método tradicional a mazo, priorizando el sabor y la textura sobre la eficiencia."
    },
    "business.card2.title": {
      ja:"体験価値", en:"Experiential Value", "zh-cn":"体验价值", "zh-tw":"體驗價值",
      ko:"체험 가치", fr:"Valeur de l'expérience", es:"Valor experiencial"
    },
    "business.card2.desc": {
      ja:"見て、聞いて、味わう。餅つきの躍動感そのものを、店頭や催事でお客様に届けます。",
      en:"See it, hear it, taste it. We bring the raw energy of mochi-pounding directly to customers at our shops and events.",
      "zh-cn":"用眼看、用耳听、用口尝。我们把捣年糕的鲜活律动，直接带到店头与活动现场。",
      "zh-tw":"用眼看、用耳聽、用口嚐。我們把搗年糕的鮮活律動，直接帶到店頭與活動現場。",
      ko:"보고, 듣고, 맛보다. 떡메치기의 생동감 그 자체를 매장과 행사 현장에서 고객에게 전합니다.",
      fr:"Voir, entendre, goûter. Nous offrons à nos clients l'énergie brute du pilage du mochi, en boutique comme lors d'événements.",
      es:"Ver, oír, saborear. Llevamos la energía viva del mochi recién machacado directamente a nuestros clientes en tiendas y eventos."
    },
    "business.card3.title": {
      ja:"文化の継承", en:"Cultural Heritage", "zh-cn":"文化传承", "zh-tw":"文化傳承",
      ko:"문화의 계승", fr:"Transmission culturelle", es:"Legado cultural"
    },
    "business.card3.desc": {
      ja:"一過性の流行で終わらせず、餅つきという日本の伝統を次の世代へつないでいきます。",
      en:"Rather than a passing trend, we carry the Japanese tradition of mochi-pounding forward to the next generation.",
      "zh-cn":"我们不希望这只是一时的流行，而是要把捣年糕这项日本传统，传递给下一代。",
      "zh-tw":"我們不希望這只是一時的流行，而是要把搗年糕這項日本傳統，傳遞給下一代。",
      ko:"한때의 유행으로 끝내지 않고, 떡메치기라는 일본의 전통을 다음 세대로 이어갑니다.",
      fr:"Plutôt qu'une mode passagère, nous transmettons la tradition japonaise du pilage du mochi aux générations futures.",
      es:"Más que una moda pasajera, transmitimos la tradición japonesa de machacar mochi a la siguiente generación."
    },

    "strengths.title": {
      ja:"選ばれる理由", en:"Why doradora", "zh-cn":"选择理由", "zh-tw":"選擇理由",
      ko:"선택받는 이유", fr:"Pourquoi choisir doradora", es:"Por qué elegir doradora"
    },
    "strengths.lead": {
      ja:"設立準備段階だからこそ、<br>はっきりお伝えできることがあります。<br>お取引先として doradora を選ぶ理由です。",
      en:"Precisely because we are still in preparation,<br>there are things we can state clearly.<br>Here is why to choose doradora as a business partner.",
      "zh-cn":"正因为还处于筹备阶段，<br>才有些事能明确地告诉您。<br>这是选择doradora作为合作伙伴的理由。",
      "zh-tw":"正因為還處於籌備階段，<br>才有些事能明確地告訴您。<br>這是選擇doradora作為合作夥伴的理由。",
      ko:"설립 준비 단계이기에<br>분명하게 말씀드릴 수 있는 것이 있습니다.<br>거래처로서 doradora를 선택하는 이유입니다.",
      fr:"C'est justement parce que nous en sommes aux préparatifs<br>que nous pouvons vous parler clairement.<br>Voici pourquoi choisir doradora comme partenaire.",
      es:"Precisamente por estar en fase de preparación,<br>hay cosas que podemos afirmar con claridad.<br>Estas son las razones para elegir a doradora como socio."
    },
    "strengths.1.title": {
      ja:"素材への一貫したこだわり", en:"Unwavering Commitment to Ingredients", "zh-cn":"对食材的一贯坚持", "zh-tw":"對食材的一貫堅持",
      ko:"재료에 대한 변함없는 고집", fr:"Une exigence constante sur les ingrédients", es:"Compromiso constante con los ingredientes"
    },
    "strengths.1.desc": {
      ja:"米の選定から製法まで、効率より味と食感を優先する方針を創業前から明文化しています。",
      en:"From rice selection to method, our policy of prioritizing taste and texture over efficiency has been documented since before founding.",
      "zh-cn":"从选米到制法，我们早在创业前就明文规定：味道与口感优先于效率。",
      "zh-tw":"從選米到製法，我們早在創業前就明文規定：味道與口感優先於效率。",
      ko:"쌀 선정부터 제법까지, 효율보다 맛과 식감을 우선한다는 방침을 창업 전부터 명문화했습니다.",
      fr:"De la sélection du riz à la méthode, notre politique privilégiant le goût et la texture à l'efficacité est formalisée depuis avant la création.",
      es:"Desde la selección del arroz hasta el método, nuestra política de priorizar el sabor y la textura sobre la eficiencia está documentada desde antes de la fundación."
    },
    "strengths.2.title": {
      ja:"一貫したブランド世界観", en:"A Consistent Brand World", "zh-cn":"一贯的品牌世界观", "zh-tw":"一貫的品牌世界觀",
      ko:"일관된 브랜드 세계관", fr:"Un univers de marque cohérent", es:"Una identidad de marca coherente"
    },
    "strengths.2.desc": {
      ja:"ロゴ・配色・言葉づかいまで、このサイト自体が doradora の世界観づくりの一例です。",
      en:"From the logo and colors to the wording, this very site is one example of how doradora builds its world.",
      "zh-cn":"从标志、配色到用语，这个网站本身，就是doradora塑造世界观的一个范例。",
      "zh-tw":"從標誌、配色到用語，這個網站本身，就是doradora塑造世界觀的一個範例。",
      ko:"로고·배색·문구까지, 이 사이트 자체가 doradora의 세계관을 만드는 하나의 사례입니다.",
      fr:"Du logo aux couleurs en passant par le ton, ce site est lui-même un exemple de l'univers que doradora construit.",
      es:"Desde el logotipo y los colores hasta el lenguaje, este mismo sitio es un ejemplo de cómo doradora construye su identidad."
    },
    "strengths.3.title": {
      ja:"設立準備段階ならではの機動力", en:"Agility Unique to a Startup Stage", "zh-cn":"筹备阶段独有的机动力", "zh-tw":"籌備階段獨有的機動力",
      ko:"설립 준비 단계이기에 가능한 기동력", fr:"L'agilité propre à une entreprise naissante", es:"La agilidad propia de una empresa en formación"
    },
    "strengths.3.desc": {
      ja:"組織が小さい今だからこそ、お取引先のご要望に合わせた意思決定を素早く行えます。",
      en:"Because our organization is still small, we can make decisions quickly to match each partner's needs.",
      "zh-cn":"正因组织规模尚小，才能根据合作方的需求，快速做出决策。",
      "zh-tw":"正因組織規模尚小，才能根據合作方的需求，快速做出決策。",
      ko:"조직이 작은 지금이기에, 거래처의 요청에 맞춘 의사결정을 빠르게 내릴 수 있습니다.",
      fr:"Parce que notre organisation est encore petite, nous prenons rapidement des décisions adaptées aux besoins de chaque partenaire.",
      es:"Precisamente porque nuestra organización aún es pequeña, podemos tomar decisiones con rapidez según las necesidades de cada socio."
    },
    "strengths.4.title": {
      ja:"一つひとつに向き合う姿勢", en:"A Commitment to Every Single One", "zh-cn":"用心对待每一件事的态度", "zh-tw":"用心對待每一件事的態度",
      ko:"하나하나 정성껏 마주하는 자세", fr:"Une attention portée à chaque détail", es:"Una atención dedicada a cada detalle"
    },
    "strengths.4.desc": {
      ja:"大量生産のスケールよりも、目の前の一臼・一件のお取引を丁寧に扱うことを大切にします。",
      en:"Rather than the scale of mass production, we value carefully handling each mortar of mochi and each transaction in front of us.",
      "zh-cn":"比起大量生产的规模，我们更重视认真对待眼前的每一臼、每一笔交易。",
      "zh-tw":"比起大量生產的規模，我們更重視認真對待眼前的每一臼、每一筆交易。",
      ko:"대량생산의 규모보다, 눈앞의 절구 하나, 거래 하나를 정성스럽게 다루는 것을 소중히 여깁니다.",
      fr:"Plutôt que la production de masse, nous privilégions le soin apporté à chaque mortier de mochi et à chaque transaction.",
      es:"Más que la escala de la producción masiva, valoramos tratar con esmero cada tanda de mochi y cada transacción."
    },

    "roadmap.title": {
      ja:"会社設立に向けた歩み", en:"Our Journey to Incorporation", "zh-cn":"迈向公司成立的历程", "zh-tw":"邁向公司成立的歷程",
      ko:"회사 설립을 향한 발자취", fr:"Notre parcours vers la création", es:"Nuestro camino hacia la constitución"
    },
    "roadmap.lead": {
      ja:"餅づくりの工程になぞらえて、<br>doradora が今どの段階にいるかをお伝えします。",
      en:"Using the mochi-making process as a metaphor,<br>we show where doradora stands today.",
      "zh-cn":"以捣年糕的工序作比喻，<br>向您展示doradora目前所处的阶段。",
      "zh-tw":"以搗年糕的工序作比喻，<br>向您展示doradora目前所處的階段。",
      ko:"떡을 만드는 공정에 빗대어,<br>doradora가 지금 어느 단계에 있는지 전해드립니다.",
      fr:"À l'image des étapes de fabrication du mochi,<br>voici où en est doradora aujourd'hui.",
      es:"A modo de las etapas de elaboración del mochi,<br>mostramos en qué punto se encuentra doradora hoy."
    },
    "roadmap.step1.process": { ja:"蒸す", en:"Steam", "zh-cn":"蒸", "zh-tw":"蒸", ko:"찌다", fr:"Cuire à la vapeur", es:"Cocer al vapor" },
    "roadmap.step1.title": {
      ja:"ブランドコンセプト設計", en:"Brand Concept Design", "zh-cn":"品牌理念设计", "zh-tw":"品牌理念設計",
      ko:"브랜드 콘셉트 설계", fr:"Conception du concept de marque", es:"Diseño del concepto de marca"
    },
    "roadmap.step2.process": { ja:"つく", en:"Pound", "zh-cn":"捣", "zh-tw":"搗", ko:"치다", fr:"Piler", es:"Machacar" },
    "roadmap.step2.title": {
      ja:"レシピ・製法の試作", en:"Recipe & Method Prototyping", "zh-cn":"配方与制法的试制", "zh-tw":"配方與製法的試製",
      ko:"레시피·제법 시험 제작", fr:"Prototypage de la recette et de la méthode", es:"Prototipado de recetas y métodos"
    },
    "roadmap.step3.process": { ja:"こねる", en:"Knead", "zh-cn":"揉", "zh-tw":"揉", ko:"반죽하다", fr:"Pétrir", es:"Amasar" },
    "roadmap.step3.title": {
      ja:"会社設立の手続き", en:"Incorporation Procedures", "zh-cn":"公司设立手续", "zh-tw":"公司設立手續",
      ko:"회사 설립 절차", fr:"Formalités de création d'entreprise", es:"Trámites de constitución"
    },
    "roadmap.step4.process": { ja:"丸める", en:"Shape", "zh-cn":"塑形", "zh-tw":"塑形", ko:"빚다", fr:"Façonner", es:"Formar" },
    "roadmap.step4.title": {
      ja:"製造・販売拠点づくり", en:"Building Production & Sales Bases", "zh-cn":"建立生产与销售据点", "zh-tw":"建立生產與銷售據點",
      ko:"제조·판매 거점 구축", fr:"Mise en place des sites de production et de vente", es:"Creación de bases de producción y venta"
    },
    "roadmap.step5.process": { ja:"供する", en:"Serve", "zh-cn":"供奉", "zh-tw":"供奉", ko:"내놓다", fr:"Servir", es:"Servir" },
    "roadmap.step5.title": {
      ja:"本格始動・お披露目", en:"Full Launch & Debut", "zh-cn":"正式启动・亮相", "zh-tw":"正式啟動・亮相",
      ko:"본격 시작・공개", fr:"Lancement officiel", es:"Lanzamiento oficial"
    },
    "roadmap.tag.done": { ja:"完了", en:"Done", "zh-cn":"已完成", "zh-tw":"已完成", ko:"완료", fr:"Terminé", es:"Completado" },
    "roadmap.tag.inProgress": { ja:"進行中", en:"In Progress", "zh-cn":"进行中", "zh-tw":"進行中", ko:"진행 중", fr:"En cours", es:"En curso" },
    "roadmap.tag.preparing": { ja:"準備中", en:"Preparing", "zh-cn":"筹备中", "zh-tw":"籌備中", ko:"준비 중", fr:"En préparation", es:"En preparación" },
    "roadmap.tag.considering": { ja:"検討中", en:"Under Consideration", "zh-cn":"筹划中", "zh-tw":"籌劃中", ko:"검토 중", fr:"À l'étude", es:"En estudio" },

    "vision.pull": {
      ja:"「もう一度、<br>餅を主役に。」",
      en:"“Once again,<br>let mochi take center stage.”",
      "zh-cn":"「再一次，<br>让年糕成为主角。」",
      "zh-tw":"「再一次，<br>讓年糕成為主角。」",
      ko:"“다시 한번,<br>떡을 주인공으로.”",
      fr:"« Redonner,<br>une fois encore, le premier rôle au mochi. »",
      es:"«Una vez más,<br>que el mochi sea protagonista.»"
    },
    "vision.p1": {
      ja:"餅は、日本の暮らしの節目に寄り添ってきた食べものです。お正月、お祝いの席、ちょっとした差し入れ。doradoraは、その当たり前にあった存在を、あらためて主役に据えることから始めます。",
      en:"Mochi has long accompanied life's milestones in Japan — New Year's, celebrations, a small gift between friends. doradora begins by placing this everyday presence back at the center.",
      "zh-cn":"年糕，是陪伴日本人生活中每个重要节点的食物——新年、喜庆场合、小小的心意馈赠。doradora，正是从让这份理所当然的存在重新成为主角开始的。",
      "zh-tw":"年糕，是陪伴日本人生活中每個重要節點的食物——新年、喜慶場合、小小的心意餽贈。doradora，正是從讓這份理所當然的存在重新成為主角開始的。",
      ko:"떡은 일본인의 삶의 마디마디에 함께해 온 음식입니다. 설날, 축하 자리, 작은 선물까지. doradora는 그렇게 당연하게 존재해 온 것을, 다시 한번 주인공으로 세우는 것에서 시작합니다.",
      fr:"Le mochi accompagne depuis toujours les grands moments de la vie japonaise — le Nouvel An, les célébrations, un petit cadeau offert. doradora commence par redonner à cette présence familière toute sa place centrale.",
      es:"El mochi ha acompañado desde siempre los momentos importantes de la vida en Japón: el Año Nuevo, las celebraciones, un pequeño obsequio. doradora comienza devolviendo a esa presencia cotidiana su lugar protagonista."
    },
    "vision.p2": {
      ja:"効率化が進む時代だからこそ、杵と臼が生む音・湯気・手触りには価値があると考えています。品質へのこだわりと、体験としての楽しさ。その両方を欠かさずに事業を育てていきます。",
      en:"Precisely because efficiency defines this era, we believe there is value in the sound, steam, and touch created by pestle and mortar. We grow our business without ever sacrificing quality or the joy of experience.",
      "zh-cn":"正因身处一个追求效率的时代，我们才更加相信，杵臼所生出的声响、蒸汽与触感自有其价值。对品质的坚持，与作为体验的乐趣——我们将两者兼顾，稳步发展事业。",
      "zh-tw":"正因身處一個追求效率的時代，我們才更加相信，杵臼所生出的聲響、蒸氣與觸感自有其價值。對品質的堅持，與作為體驗的樂趣——我們將兩者兼顧，穩步發展事業。",
      ko:"효율화가 진행되는 시대이기에 더욱, 절굿공이와 절구가 만들어내는 소리・김・손끝의 감촉에 가치가 있다고 생각합니다. 품질에 대한 고집과 체험으로서의 즐거움. 그 두 가지를 놓치지 않고 사업을 키워가겠습니다.",
      fr:"C'est précisément parce que notre époque privilégie l'efficacité que nous croyons à la valeur du son, de la vapeur et du toucher que produisent le pilon et le mortier. Nous développons notre activité sans jamais sacrifier ni la qualité ni le plaisir de l'expérience.",
      es:"Precisamente porque vivimos en una era de eficiencia, creemos en el valor del sonido, el vapor y el tacto que genera el mazo y el mortero. Hacemos crecer nuestro negocio sin renunciar nunca a la calidad ni al disfrute de la experiencia."
    },

    "company.title": {
      ja:"会社概要", en:"Company", "zh-cn":"公司概况", "zh-tw":"公司概況",
      ko:"회사 개요", fr:"L'entreprise", es:"La empresa"
    },
    "company.th1": { ja:"商号", en:"Company Name", "zh-cn":"公司名称", "zh-tw":"公司名稱", ko:"상호", fr:"Raison sociale", es:"Razón social" },
    "company.th2": { ja:"事業内容", en:"Business", "zh-cn":"业务内容", "zh-tw":"業務內容", ko:"사업 내용", fr:"Activités", es:"Actividad" },
    "company.th3": { ja:"設立", en:"Founded", "zh-cn":"成立", "zh-tw":"成立", ko:"설립", fr:"Création", es:"Constitución" },
    "company.th4": { ja:"所在地", en:"Location", "zh-cn":"所在地", "zh-tw":"所在地", ko:"소재지", fr:"Adresse", es:"Ubicación" },
    "company.td2": {
      ja:"和菓子(餅)の製造・販売、体験型店舗の企画・運営",
      en:"Manufacturing and sales of wagashi (mochi); planning and operation of experiential stores",
      "zh-cn":"和果子(年糕)的制造与销售、体验型店铺的策划与营运",
      "zh-tw":"和菓子(年糕)的製造與銷售、體驗型店鋪的企劃與營運",
      ko:"화과자(떡) 제조・판매, 체험형 매장 기획・운영",
      fr:"Fabrication et vente de wagashi (mochi), conception et exploitation de boutiques expérientielles",
      es:"Fabricación y venta de wagashi (mochi); planificación y gestión de tiendas experienciales"
    },
    "company.tagPreparing": {
      ja:"設立準備中", en:"In preparation", "zh-cn":"筹备中", "zh-tw":"籌備中",
      ko:"설립 준비 중", fr:"En préparation", es:"En preparación"
    },
    "company.preparing": {
      ja:"準備中", en:"To be announced", "zh-cn":"筹备中", "zh-tw":"籌備中",
      ko:"준비 중", fr:"À préciser", es:"Por determinar"
    },

    "contact.title": {
      ja:"ご依頼・お問い合わせ", en:"Bookings & Inquiries", "zh-cn":"委托与咨询", "zh-tw":"委託與洽詢",
      ko:"의뢰 및 문의", fr:"Réservations et contact", es:"Reservas y contacto"
    },
    "contact.lead": {
      ja:"出張餅つき・イベントのご依頼は専用フォームから、事業提携やお取引に関するお問い合わせはメールでご連絡ください。",
      en:"For mochi-pounding events and bookings, please use our request form. For business partnerships or trade inquiries, please contact us by email.",
      "zh-cn":"上门捣年糕及活动委托请通过专用表单提交；业务合作或交易相关咨询请通过邮件与我们联系。",
      "zh-tw":"到府搗年糕及活動委託請透過專用表單提交；業務合作或交易相關洽詢請透過電子郵件與我們聯繫。",
      ko:"출장 떡메치기·이벤트 의뢰는 전용 폼으로, 사업 제휴나 거래 관련 문의는 이메일로 연락해 주세요.",
      fr:"Pour les animations de pilage de mochi et les événements, utilisez notre formulaire. Pour les partenariats ou demandes commerciales, contactez-nous par e-mail.",
      es:"Para eventos y reservas de machacado de mochi, use nuestro formulario. Para asociaciones o consultas comerciales, contáctenos por correo electrónico."
    },
    "contact.formBtn": {
      ja:"出張餅つき・イベントのご依頼", en:"Book a Mochi Event", "zh-cn":"预约捣年糕活动", "zh-tw":"預約搗年糕活動",
      ko:"떡메치기 이벤트 의뢰", fr:"Réserver un événement mochi", es:"Reservar un evento de mochi"
    },
    "contact.btn": {
      ja:"お問い合わせはこちら", en:"Contact Us", "zh-cn":"点击联系我们", "zh-tw":"點擊聯繫我們",
      ko:"문의하기", fr:"Nous contacter", es:"Contáctenos"
    },

    "footer.copyrightSuffix": {
      ja:"(設立準備中)", en:"(in preparation)", "zh-cn":"(筹备中)", "zh-tw":"(籌備中)",
      ko:"(설립 준비 중)", fr:"(en préparation)", es:"(en preparación)"
    },
    "footer.note": {
      ja:"本サイトは設立準備段階の情報を掲載しています。",
      en:"This site presents information for a company currently in preparation.",
      "zh-cn":"本网站刊载的是公司筹备阶段的信息。",
      "zh-tw":"本網站刊載的是公司籌備階段的資訊。",
      ko:"본 사이트는 회사 설립 준비 단계의 정보를 게재하고 있습니다.",
      fr:"Ce site présente des informations relatives à une société en cours de création.",
      es:"Este sitio presenta información de una empresa en fase de constitución."
    },

    "sns.meta.title": {
      ja:"doradora | SNS", en:"doradora | Social Media", "zh-cn":"doradora | 社交媒体", "zh-tw":"doradora | 社群媒體",
      ko:"doradora | SNS", fr:"doradora | Réseaux sociaux", es:"doradora | Redes sociales"
    },
    "sns.meta.description": {
      ja:"doradoraの公式SNSアカウント(TikTok・Instagram・lit.link)のご案内ページです。",
      en:"This page introduces doradora's official social media accounts (TikTok, Instagram, lit.link).",
      "zh-cn":"本页介绍doradora官方社交媒体账号(TikTok・Instagram・lit.link)。",
      "zh-tw":"本頁介紹doradora官方社群媒體帳號(TikTok・Instagram・lit.link)。",
      ko:"doradora의 공식 SNS 계정(TikTok・Instagram・lit.link)을 안내하는 페이지입니다.",
      fr:"Cette page présente les comptes officiels de doradora sur les réseaux sociaux (TikTok, Instagram, lit.link).",
      es:"Esta página presenta las cuentas oficiales de doradora en redes sociales (TikTok, Instagram, lit.link)."
    },
    "sns.meta.ogDescription": {
      ja:"doradoraのTikTok・Instagram・lit.linkはこちらから。",
      en:"Find doradora's TikTok, Instagram, and lit.link here.",
      "zh-cn":"doradora的TikTok・Instagram・lit.link由此进入。",
      "zh-tw":"doradora的TikTok・Instagram・lit.link由此進入。",
      ko:"doradora의 TikTok・Instagram・lit.link는 이곳에서 확인하세요.",
      fr:"Retrouvez ici le TikTok, l'Instagram et le lit.link de doradora.",
      es:"Encuentra aquí el TikTok, Instagram y lit.link de doradora."
    },
    "sns.lead": {
      ja:"doradoraの日々の発信はTikTok・Instagramで。<br>餅づくりの様子や、<br>これからの歩みをお届けします。",
      en:"Follow doradora's daily updates on TikTok and Instagram.<br>We share glimpses of mochi-making<br>and our journey ahead.",
      "zh-cn":"doradora的日常动态发布于TikTok・Instagram。<br>为您带来捣年糕的现场，<br>以及我们今后的成长历程。",
      "zh-tw":"doradora的日常動態發布於TikTok・Instagram。<br>為您帶來搗年糕的現場，<br>以及我們今後的成長歷程。",
      ko:"doradora의 일상 소식은 TikTok・Instagram에서.<br>떡을 만드는 모습과,<br>앞으로의 발걸음을 전해드립니다.",
      fr:"Suivez le quotidien de doradora sur TikTok et Instagram.<br>Nous y partageons la fabrication du mochi<br>et notre parcours à venir.",
      es:"Sigue el día a día de doradora en TikTok e Instagram.<br>Compartimos la elaboración del mochi<br>y nuestro camino por venir."
    },
    "sns.tiktok.note": {
      ja:"ショート動画での発信はこちら。フォローして最新の投稿をチェックしてください。",
      en:"Short-form videos, right here. Follow us to catch the latest posts.",
      "zh-cn":"短视频动态在这里。欢迎关注，查看最新发布内容。",
      "zh-tw":"短影音動態在這裡。歡迎追蹤，查看最新發布內容。",
      ko:"짧은 영상으로 소식을 전합니다. 팔로우하고 최신 게시물을 확인하세요.",
      fr:"Nos vidéos courtes sont ici. Suivez-nous pour ne rien manquer.",
      es:"Aquí nuestros videos cortos. Síguenos para ver las novedades."
    },
    "sns.instagram.note": {
      ja:"写真・お知らせの発信はこちら。フォローして最新の投稿をチェックしてください。",
      en:"Photos and announcements, right here. Follow us to catch the latest posts.",
      "zh-cn":"照片与最新消息在这里。欢迎关注，查看最新发布内容。",
      "zh-tw":"照片與最新消息在這裡。歡迎追蹤，查看最新發布內容。",
      ko:"사진과 소식을 전합니다. 팔로우하고 최신 게시물을 확인하세요.",
      fr:"Photos et actualités sont ici. Suivez-nous pour ne rien manquer.",
      es:"Fotos y novedades, aquí mismo. Síguenos para ver las últimas publicaciones."
    },
    "sns.instagram.statPosts": {
      ja:"投稿0", en:"Posts: 0", "zh-cn":"帖子0", "zh-tw":"貼文0",
      ko:"게시물 0", fr:"Publications : 0", es:"Publicaciones: 0"
    },
    "sns.instagram.statFollowers": {
      ja:"フォロワー0", en:"Followers: 0", "zh-cn":"粉丝0", "zh-tw":"粉絲0",
      ko:"팔로워 0", fr:"Abonnés : 0", es:"Seguidores: 0"
    },
    "sns.instagram.statFollowing": {
      ja:"フォロー中0", en:"Following: 0", "zh-cn":"关注0", "zh-tw":"追蹤0",
      ko:"팔로잉 0", fr:"Abonnements : 0", es:"Siguiendo: 0"
    },
    "sns.instagram.openBtn": {
      ja:"Instagramを開く", en:"Open Instagram", "zh-cn":"打开Instagram", "zh-tw":"開啟Instagram",
      ko:"Instagram 열기", fr:"Ouvrir Instagram", es:"Abrir Instagram"
    },
    "sns.link.kicker": {
      ja:"Link", en:"Link", "zh-cn":"链接", "zh-tw":"連結", ko:"링크", fr:"Lien", es:"Enlace"
    },
    "sns.link.title": {
      ja:"まとめリンク", en:"All Links", "zh-cn":"链接合集", "zh-tw":"連結合集",
      ko:"모음 링크", fr:"Tous nos liens", es:"Todos los enlaces"
    },
    "sns.link.note": {
      ja:"お店・餅つき体験・お問い合わせなど、各種リンクをまとめています。",
      en:"Shop, mochi-pounding experiences, contact, and more — all in one place.",
      "zh-cn":"店铺、捣年糕体验、联系方式等各类链接，一站汇总。",
      "zh-tw":"店鋪、搗年糕體驗、聯繫方式等各類連結，一站彙整。",
      ko:"매장, 떡메치기 체험, 문의 등 다양한 링크를 모아두었습니다.",
      fr:"Boutique, expériences de pilage du mochi, contact et plus encore, réunis ici.",
      es:"Tienda, experiencias de mochi, contacto y más, todo reunido aquí."
    },
    "sns.link.bio": {
      ja:"お品書きや餅つき体験のご案内、各SNSへのリンクをひとまとめにしたページです。",
      en:"A single page gathering our menu, mochi-pounding experience info, and links to every social account.",
      "zh-cn":"这是一个汇总菜单、捣年糕体验说明以及各社交媒体链接的页面。",
      "zh-tw":"這是一個彙整菜單、搗年糕體驗說明以及各社群媒體連結的頁面。",
      ko:"메뉴와 떡메치기 체험 안내, 각 SNS 링크를 한데 모은 페이지입니다.",
      fr:"Une page réunissant notre carte, nos expériences de pilage et les liens vers tous nos réseaux sociaux.",
      es:"Una página que reúne nuestro menú, la experiencia de machacar mochi y los enlaces a todas nuestras redes."
    },
    "sns.link.openBtn": {
      ja:"lit.linkを開く", en:"Open lit.link", "zh-cn":"打开lit.link", "zh-tw":"開啟lit.link",
      ko:"lit.link 열기", fr:"Ouvrir lit.link", es:"Abrir lit.link"
    },
    "sns.youtube.note": {
      ja:"餅つきの様子などを動画でお届けします。チャンネル登録してお待ちください。",
      en:"Watch mochi-pounding and more on video. Subscribe and stay tuned.",
      "zh-cn":"以视频形式呈现捣年糕等精彩瞬间。欢迎订阅，敬请期待。",
      "zh-tw":"以影片形式呈現搗年糕等精彩瞬間。歡迎訂閱，敬請期待。",
      ko:"떡메치기 모습 등을 영상으로 전해드립니다. 채널 구독하고 기다려 주세요.",
      fr:"Le pilage du mochi et bien plus, en vidéo. Abonnez-vous et restez à l'écoute.",
      es:"Mira el machacado del mochi y más en video. Suscríbete y mantente al tanto."
    },
    "sns.youtube.bio": {
      ja:"これから動画を公開予定です。餅つき体験や制作の裏側をお届けします。",
      en:"Videos are coming soon — behind-the-scenes looks at our craft and mochi-pounding experiences.",
      "zh-cn":"视频即将上线，为您呈现捣年糕体验与制作幕后。",
      "zh-tw":"影片即將上線，為您呈現搗年糕體驗與製作幕後。",
      ko:"곧 영상을 공개할 예정입니다. 떡메치기 체험과 제작 뒷이야기를 전해드립니다.",
      fr:"Des vidéos arrivent bientôt : les coulisses de notre savoir-faire et nos expériences de pilage.",
      es:"Pronto llegarán videos: detrás de escena de nuestra elaboración y experiencias de mochi."
    },
    "sns.youtube.openBtn": {
      ja:"YouTubeを開く", en:"Open YouTube", "zh-cn":"打开YouTube", "zh-tw":"開啟YouTube",
      ko:"YouTube 열기", fr:"Ouvrir YouTube", es:"Abrir YouTube"
    }
  };

  var DEFAULT_LANG = "en";

  function getSavedLang(){
    try{
      var v = localStorage.getItem(STORAGE_KEY);
      if(v && LANGS.indexOf(v) !== -1) return v;
    }catch(e){}
    return DEFAULT_LANG;
  }

  function setSavedLang(lang){
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
  }

  function translate(key, lang){
    var entry = T[key];
    if(!entry) return null;
    return entry[lang] || entry.ja || null;
  }

  function applyLang(lang){
    if(LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG;
    document.documentElement.lang = HTML_LANG[lang] || lang;

    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var val = translate(el.getAttribute("data-i18n"), lang);
      if(val !== null) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function(el){
      var val = translate(el.getAttribute("data-i18n-html"), lang);
      if(val !== null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function(el){
      var val = translate(el.getAttribute("data-i18n-aria"), lang);
      if(val !== null) el.setAttribute("aria-label", val);
    });

    var titleKey = document.body.getAttribute("data-i18n-page-title");
    if(titleKey){
      var t = translate(titleKey, lang);
      if(t) document.title = t;
    }
    var descKey = document.body.getAttribute("data-i18n-page-desc");
    if(descKey){
      var d = translate(descKey, lang);
      if(d){
        var descMeta = document.querySelector('meta[name="description"]');
        if(descMeta) descMeta.setAttribute("content", d);
      }
    }
    var ogTitleKey = document.body.getAttribute("data-i18n-og-title");
    if(ogTitleKey){
      var ot = translate(ogTitleKey, lang);
      if(ot){
        var ogTitleMeta = document.querySelector('meta[property="og:title"]');
        if(ogTitleMeta) ogTitleMeta.setAttribute("content", ot);
      }
    }
    var ogDescKey = document.body.getAttribute("data-i18n-og-desc");
    if(ogDescKey){
      var od = translate(ogDescKey, lang);
      if(od){
        var ogDescMeta = document.querySelector('meta[property="og:description"]');
        if(ogDescMeta) ogDescMeta.setAttribute("content", od);
      }
    }

    document.querySelectorAll(".lang-switch").forEach(function(sw){
      sw.querySelectorAll("[data-lang]").forEach(function(btn){
        var isActive = btn.getAttribute("data-lang") === lang;
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
        btn.classList.toggle("is-active", isActive);
      });
      var currentLabel = sw.querySelector(".lang-switch-current");
      if(currentLabel) currentLabel.textContent = lang.toUpperCase();
    });

    setSavedLang(lang);
  }

  function buildSwitcher(container){
    var current = document.createElement("button");
    current.type = "button";
    current.className = "lang-switch-toggle";
    current.setAttribute("aria-haspopup", "true");
    current.setAttribute("aria-expanded", "false");
    current.insertAdjacentHTML("beforeend", '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9.2" stroke="currentColor" stroke-width="1.5"/><path d="M2.8 12h18.4M12 2.8c2.6 2.6 4 5.8 4 9.2s-1.4 6.6-4 9.2c-2.6-2.6-4-5.8-4-9.2s1.4-6.6 4-9.2Z" stroke="currentColor" stroke-width="1.5"/></svg>');
    var currentLabel = document.createElement("span");
    currentLabel.className = "lang-switch-current";
    current.appendChild(currentLabel);
    current.insertAdjacentHTML("beforeend", '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M1.5 3.5 5 7l3.5-3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>');

    var menu = document.createElement("div");
    menu.className = "lang-switch-menu";
    LANGS.forEach(function(lang){
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("data-lang", lang);
      btn.textContent = LANG_NAMES[lang];
      btn.addEventListener("click", function(){
        applyLang(lang);
        menu.classList.remove("is-open");
        current.setAttribute("aria-expanded", "false");
      });
      menu.appendChild(btn);
    });

    current.addEventListener("click", function(){
      var open = menu.classList.toggle("is-open");
      current.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function(e){
      if(!container.contains(e.target)){
        menu.classList.remove("is-open");
        current.setAttribute("aria-expanded", "false");
      }
    });

    container.appendChild(current);
    container.appendChild(menu);
  }

  function init(){
    document.querySelectorAll(".lang-switch").forEach(buildSwitcher);
    applyLang(getSavedLang());
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  }else{
    init();
  }
})();
