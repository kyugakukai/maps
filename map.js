var map;
var initLatlng;
var currentInfoWindow;
var latLng = [];
var marker = [];
var infoWindow = [];
var infoWnd;
var restaurantName = [
    "天國",
    "上方風ぎょうざ　扇里",
    "あみたあぱ",
    "スナックボルサリーノ２１",
    "石松茶屋",
    "センターリバー",
    "小皿逆螺子",
    "BUNZO",
    "レストバー☆スターライト",
    "瑞恵",
    "炭火焼かくや",
    "喫茶　ビギン",
    "川尻蔵前うどん・ぬま田",
    "和食　仲むら",
    "和久田",
    "鮨屋 時藏",
    "GALLERIA RESTAURO",
    "クラブ ラトゥール",
    "食酔家 三崎亭",
    "〇□家（まるかく）",
    "スイス",
    "紅蘭亭",
    "ジャン・ジャン・ゴー",
    "SNACK  浪漫",
    "アットホームバー ブロードウェイ",
    "BAR RUN",
    "居酒屋　毘沙門",
    "スナック　シュール",
    "和食 満潮",
    "フランス食堂 MARIE",
    "素材工房　塩",
    "炭火 にし原",
    "オープンハート",
    "焼とり鳥兆",
    "城見櫓",
    "洋食屋 出田",
    "茶茶",
    "ドラゴンキッチン",
    "Amoshi",
    "チアーズ",
    "BAR Queen's B",
    "コノハ（chamgrillge konoha）",
    "簾",
    "RACE",
    "採食宴満 潤和",
    "隠れ家 潤和",
    "二代目　天國",
    "善 ",
    "國枝鮮魚店",
    "ビアンコ",
    "キャンドル",
    "ささの",
    "恵み家",
    "宴こつこつ",
    "トラットリア　ココ",
    "めしや 和",
    "梵蔵",
    "焼肉みなみ",
    "TANPOPO",
    "寿司・日本料理　葵",
    "酒肴や 慎家　",
    "スリーパーズ",
    "手打百藝　中の森",
    "蓮台寺飯店",
    "居酒屋 遊家 未ら来る",
    "から王の唐揚げ（九品寺店）",
    "焼肉　園田",
    "eighteen",
    "而今（じこん）に生きる",
    "らーめん・白川",
    "魚よし",
    "Donburi Cafeteria MIXTURE",
    "うなぎ日本料理とくなが",
    "ふくチャンネル",
    "tutti",
    "クイーナ",
    "ブカ・ラピ",
    "Jelly fish",
    "カレー屋 あちょ！",
    "侍ＪＥＴ　",
    "むつ五郎",
    "食処　花樹",
    "ボンボリ",
    "スナック　ル・レ―ヴ",
    "セトル",
    "パイ専門店feal",
    "パイラボfeal",
    "すやむら（新市街）",
    "すや村(合志市）",
    "厳選熊本果実房TENTE",
    "木香里",
    "バー　ヘリンボーン",
    "リヒト コーヒー＆ケークス",
    "グラック コーヒー スポット",
    "グリル クドウ",
    "LIB　CAFÉ",
    "美酒食彩 GANAR（ガナール）",
    "居酒屋　たぬき茶屋",
    "魚屋まさき",
    "鳥生",
    "チャイニーズカフェ&バー リンシャン",
    "あしたの城",
    "RIGOLETTO",
    "スナック ボッチ",
    "Sky Terrace",
    "ROXY",
    "BAR SFIDA",
    "大盛堂"
];
var Name = [
    "S9  前田 繁俊",
    "S16 前田勝美",
    "S18 三村勲",
    "S20 井田博文",
    "S20 熊本有祥",
    "S21 中川晶雄",
    "S23 北園雄一",
    "S26 緒方和彦",
    "S27 栄田修士",
    "S27 横山佳之",
    "S28 竹中大士郎",
    "S28 松本正明",
    "J26 沼田茂雄",
    "S29 中村康宏",
    "S29 和久田貴之",
    "S30 堀 富紀三",
    "S30 髙村玲二",
    "S31 江藤卓哉",
    "S31 宮原利和",
    "S31 石抜明夫",
    "S31 葉山祐司",
    "S32 葉山耕司",
    "S32 葉山耕司",
    "S32 小田正博",
    "S32 松尾太聖",
    "S32 矢野幸彦",
    "S33 豊田峰鷹",
    "S33 清水克宏",
    "S33 前田倫明",
    "S33 笠　亮",
    "S33 塩本隆",
    "S33 毛利健一",
    "S34 出田由起則",
    "S34 財津一夫",
    "S34 林 祥増",
    "S34 出田正彦",
    "S34 藏野圭一",
    "S35 林 騰芳",
    "S35 島本博文",
    "S35 小竹誠",
    "S35 西野博之",
    "S36 井上卓也",
    "S37 八代 毅",
    "S37 藤村照彦",
    "S38 宇佐美和男",
    "S38 宇佐美和男",
    "S38 前田 強",
    "S39 木下善成",
    "S39 國枝政裕",
    "S39 藤井宏昭",
    "S39 藤井宏昭",
    "S39 山村英一",
    "S39 遠山英樹",
    "S40 川島忠明",
    "S40 牧 英彦",
    "S40 緒方一隆",
    "S40 甲斐宏幸",
    "S41 宮崎照国",
    "S41 森正之",
    "S41 渕田仁志",
    "S41 正角慎弥",
    "S43 木村聖二",
    "S43 中ノ森 丈博",
    "S43 原之薗 浩",
    "S43 沼津幸光",
    "S44 高尾真也",
    "S44 園田 宏",
    "S44 廣岡新次朗",
    "S44 守田達也",
    "J42 市原功一朗",
    "S45 岡崎嘉人",
    "S45 梶原亨介",
    "S45 徳永恭成",
    "S45 福山伸司",
    "S46 中村龍也",
    "S46 宮本大輔",
    "S46 山本英貴",
    "S47 松永正行",
    "S47 蛎原昭生",
    "S48 菊池公宏",
    "S48 小山公輔",
    "S48 花田浩樹",
    "S48 中野正彦",
    "S48 佐藤天平",
    "S48 佐藤天平",
    "S48 松本俊宏",
    "S48 松本俊宏",
    "S48 石川大介",
    "S48 石川大介",
    "S48 牛嶋大吾",
    "S48 松永寛仁",
    "S48 寺田 聡",
    "S48 寺田 聡",
    "S48 寺田 聡",
    "S49 工藤正俊",
    "S49 緒方公一",
    "S51 成瀬輝高",
    "S52 吉田竜介",
    "S53 正木敏之",
    "S53 吉川知則",
    "S54 寺本圭助",
    "S56 城 祐一郎",
    "S57 緒方侑加",
    "S57 関幸一郎",
    "S59 日高幸太",
    "J62 木下鈴菜",
    "S67 内山未来",
    "S18 堤 公一"
];
var lat = [
    32.78450005,
    32.80121079,
    32.80097355,
    32.80053,
    32.80198701,
    32.799524,
    32.80143949,
    32.80160578,
    32.801989,
    32.801594,
    32.879615,
    32.80227435,
    32.73728707,
    32.79783314,
    32.79701805,
    32.80660849,
    32.801102,
    32.799838,
    32.802131,
    32.80776611,
    32.8019634,
    32.80167591,
    32.8007546,
    32.79604977,
    32.80159596,
    32.8012353,
    32.69499238,
    32.80175784,
    32.78894489,
    32.80362071,
    32.799805,
    32.80329251,
    32.7961222,
    32.80182135,
    32.803055,
    32.79731566,
    32.80183868,
    32.79883085,
    32.79774,
    32.80212655,
    32.80035466,
    32.80169477,
    32.791265,
    32.79998776,
    32.81118114,
    32.81333624,
    32.80007673,
    32.801239,
    32.802903,
    32.799565,
    32.79966014,
    32.79892642,
    32.80096775,
    32.80031124,
    32.806646,
    32.78902774,
    32.80941591,
    32.8009609,
    32.76818533,
    32.50324325,
    32.78954898,
    32.801334,
    32.79717523,
    32.775077,
    32.801344,
    32.79583821,
    32.8006349,
    32.80150535,
    32.80232136,
    32.797561,
    32.79526318,
    32.805981,
    32.751193,
    32.80833,
    32.80177788,
    32.801494,
    32.80308,
    32.801716,
    32.800204,
    32.80035006,
    32.80084536,
    32.79950161,
    32.80132345,
    32.80038026,
    32.79934906,
    32.80077947,
    32.78500971,
    32.79973048,
    32.86457984,
    32.80373581,
    32.62146396,
    32.79998186,
    32.78848793,
    32.80592666,
    32.80097514,
    32.79959792,
    32.787344,
    32.78163243,
    32.80056379,
    32.80122543,
    32.80113,
    32.800133,
    32.80121811,
    32.79997075,
    32.80103914,
    32.80133046,
    32.80107212,
    32.85615175
];
var lng = [
    130.6915597,
    130.7097481,
    130.7063885,
    130.70633,
    130.7075745,
    130.70768,
    130.7076575,
    130.7106969,
    130.709823,
    130.710392,
    130.869865,
    130.7078328,
    130.6835133,
    130.7034651,
    130.6956979,
    130.7127656,
    130.706131,
    130.707387,
    130.706996,
    130.7118911,
    130.7090295,
    130.7091337,
    130.7066152,
    130.7426983,
    130.7082258,
    130.7094133,
    130.6686622,
    130.7072818,
    130.7441925,
    130.7123241,
    130.707242,
    130.8942593,
    130.6942353,
    130.7069823,
    130.706111,
    130.7022059,
    130.7073162,
    130.7816689,
    130.70733,
    130.7072797,
    130.7065537,
    130.7065684,
    130.712791,
    130.707696,
    130.7830253,
    130.7902324,
    130.7073944,
    130.706747,
    130.713473,
    130.706247,
    130.7062677,
    130.6965783,
    130.7080554,
    130.7090408,
    130.712717,
    130.7158808,
    130.7136011,
    130.7080546,
    130.7586335,
    130.6047345,
    130.7526753,
    130.710198,
    130.7310124,
    130.681273,
    130.709609,
    130.7137168,
    130.7069383,
    130.708208,
    130.7081989,
    130.714309,
    130.696373,
    130.711324,
    130.737715,
    130.690086,
    130.7102391,
    130.710196,
    130.708578,
    130.706965,
    130.70634,
    130.7061646,
    130.7060113,
    130.7086095,
    130.7100493,
    130.7089062,
    130.7085249,
    130.704051,
    130.6805043,
    130.7057757,
    130.734585,
    130.7037591,
    130.8667687,
    130.7065133,
    130.690172,
    130.7109476,
    130.7151317,
    130.7072212,
    130.689146,
    130.6836004,
    130.7098564,
    130.7073457,
    130.70614,
    130.7065459,
    130.7077501,
    130.7077756,
    130.7150465,
    130.7065866,
    130.7099618,
    130.7273741
];
var tel = [
    "096-326-4522",
    "096-326-7213",
    "096-324-1968",
    "096-322-0021",
    "096-356-4266",
    "096-378-9191",
    "N/A",
    "096-353-8186",
    "096-325-9337",
    "096-322-6973",
    "096-293-2393",
    "096-324-7543",
    "096-223-8366",
    "096-351-0535",
    "096-312-0888",
    "096-326-7771",
    "096-356-5200",
    "096-355-9040",
    "080-5289-2232",
    "096-227-6129",
    "096-352-1251",
    "096-352-7177",
    "096-323-1121",
    "096-384-9212",
    "096-325-8925",
    "080-3999-8800",
    "0964-53-9458",
    "096-354-0032",
    "096-381-1221",
    "096-327-2277",
    "096-355-4125",
    "090-4775-2971",
    "096-354-4943",
    "096-351-6478",
    "096-356-1146",
    "096-352-1874",
    "096-325-8823",
    "096-360-5851",
    "096-354-0678",
    "096-327-0038",
    "096-273-7768",
    "096-355-2070",
    "096-366-3777",
    "096-354-9577",
    "096-331-3353",
    "096-331-3363",
    "096-323-1059",
    "096-277-1780",
    "096-353-5313",
    "096-353-5511",
    "096-353-1133",
    "096-355-9554",
    "096-324-7802",
    "096-326-6639",
    "096-326-3733",
    "N/A",
    "096-374-7077",
    "096-355-7190",
    "096-335-8886",
    "0965-32-4418",
    "096-367-6679",
    "096-351-1107",
    "096-387-6340",
    "096-328-3637",
    "096-312-3799",
    "080-7983-6754",
    "096-325-3344",
    "096-355-0180",
    "096-355-1533",
    "096-373-6188",
    "096-352-4062",
    "096-297-2681",
    "096-237-0011",
    "096-295-6403",
    "096-323-6068",
    "096-312-6333",
    "096-352-5008",
    "090-4351-1182",
    "096-223-5939",
    "090-1086-3661",
    "096-356-6256",
    "090-8223-4240",
    "096-353-5568",
    "096-352-7907",
    "096-352-7857",
    "050-5362-9573",
    "096-238-0190",
    "096-327-2468",
    "096-343-7474",
    "096-288-1092",
    "0964-47-2211",
    "096-356-4747",
    "096-277-1123",
    "096-288-2556",
    "096-288-0596",
    "096-273-6533",
    "096-355-5573",
    "096-352-6808",
    "096-327-5311",
    "096-324-8220",
    "096-312-0929",
    "080-8378-8606",
    "096-352-8955",
    "096-354-8646",
    "N/A",
    "096-353-6103",
    "080-2749-0823",
    "096-344-8124"
];

var url = [
    "https://www.umaryouri.jp/",
    "https://tabelog.com/kumamoto/A4301/A430101/43002198/",
    "https://www.navitime.co.jp/poi?spot=00011-080371595&ncm=1",
    "https://bar-navi.suntory.co.jp/shop/0963220021/",
    "https://tabelog.com/kumamoto/A4301/A430101/43004619/",
    "http://go-centerriver.com/top.php",
    "N/A",
    "https://retty.me/area/PRE43/ARE142/SUB14201/100000513567/",
    "https://www.starlight1970.com/",
    "http://www.mizue-g.net/index.html",
    "https://xtg13.crayonsite.com/",
    "https://tabelog.com/kumamoto/A4301/A430101/43008166/",
    "https://www.tku.co.jp/news/20201202%EF%BD%852/",
    "https://kumamoto-nakamura.com/",
    "http://www.wakuda.net/",
    "https://retty.me/area/PRE43/ARE142/SUB14201/100000746983/?utm_y_pc_res_title",
    "https://retty.me/area/PRE43/ARE142/SUB14201/100001414748/",
    "https://www.at-appeal.com/www/self/?ch=3201",
    "https://tabelog.com/kumamoto/A4301/A430101/43014307/",
    "https://tabelog.com/kumamoto/A4301/A430101/43013912/",
    "https://swiss.shop-pro.jp/",
    "https://www.kourantei.com/restaurants",
    "https://www.kourantei.com/restaurants",
    "https://www.navitime.co.jp/poi?spot=00011-080372589&ncm=1",
    "https://tabelog.com/kumamoto/A4301/A430101/43005333/",
    "http://www.kumamiru.com/shop/index.html?dum=134741771&Uid=6323e98147ef04df929126bf97eb0645&pcot=1",
    "https://tabelog.com/kumamoto/A4301/A430102/43005769/",
    "https://www.snakaranavi.net/shop.php?sno=12390",
    "http://mancho.jp/",
    "https://tabelog.com/kumamoto/A4301/A430101/43013906/",
    "https://tabelog.com/kumamoto/A4301/A430101/43008254/",
    "https://www.youtube.com/watch?v=NjV-h32XB9k",
    "https://529furumachi.com/shop/%E3%82%A4%E3%83%87%E3%82%BF%E3%82%AA%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%83%8F%E3%83%BC%E3%83%88/",
    "https://tabelog.com/kumamoto/A4301/A430101/43001977/",
    "https://www.shiromiyagura.com/",
    "https://tabelog.com/kumamoto/A4301/A430101/43004653/",
    "https://www.its-mo.com/detail/DIDX_DKE-9335668/",
    "http://www.dragon-t2.com/index.php/honten",
    "https://tabelog.com/kumamoto/A4301/A430101/43009314/",
    "https://www.navitime.co.jp/poi?spot=00011-080372121&ncm=1",
    "https://www.ekiten.jp/shop_22670130/",
    "https://www.glocal-cf.com/news/project/sashiyori?a=471",
    "https://tabelog.com/kumamoto/A4301/A430101/43014898/",
    "https://www.navitime.co.jp/poi?spot=00011-081000546&ncm=1",
    "https://akr2829726080.owst.jp/",
    "https://akr8789882191.owst.jp/",
    "https://www.umaryouri.jp/",
    "https://tabelog.com/kumamoto/A4301/A430101/43012860/",
    "https://tabelog.com/kumamoto/A4301/A430101/43012042/",
    "http://3535511.com/",
    "https://tabelog.com/kumamoto/A4301/A430101/43010415/",
    "N/A",
    "https://tabelog.com/kumamoto/A4301/A430101/43007392/",
    "https://tabelog.com/kumamoto/A4301/A430101/43008911/",
    "https://tabelog.com/kumamoto/A4301/A430101/43000337/",
    "https://tabelog.com/kumamoto/A4301/A430101/43008288/",
    "https://loco.yahoo.co.jp/place/g-QwiHg75RxPM?utm_source=dd_spot&lsbe=1&sc_e=sydd_spt_s_p_ttl",
    "https://tabelog.com/kumamoto/A4301/A430101/43002336/",
    "https://tabelog.com/kumamoto/A4301/A430101/43001591/",
    "http://aoizusi.jp/",
    "https://kumamoto.nasse.com/shop/2843/",
    "https://kumamoto.nasse.com/shop/3717/image-1/",
    "https://tabelog.com/kumamoto/A4301/A430101/43001115/",
    "https://retty.me/area/PRE43/ARE142/SUB14201/100000848290/?utm_y_pc_res_title",
    "https://tabelog.com/kumamoto/A4301/A430101/43009616/",
    "https://retty.me/area/PRE43/ARE142/SUB14201/100001406918/",
    "https://akr0380468037.owst.jp/",
    "N/A",
    "https://foodplace.jp/jikonniikiru/",
    "https://tabelog.com/kumamoto/A4301/A430101/43009776/",
    "https://tabelog.com/kumamoto/A4301/A430101/43006401/",
    "https://tabelog.com/kumamoto/A4301/A430101/43010662/",
    "http://www.u-tokunaga.jp/",
    "https://retty.me/area/PRE43/ARE142/SUB14201/100000662489/",
    "https://tabelog.com/kumamoto/A4301/A430101/43000402/",
    "https://www.hotpepper.jp/strJ000716849/",
    "https://tabelog.com/kumamoto/A4301/A430101/43009734/",
    "https://kumamotosyakou.com/tike/072.html",
    "https://achocurry.com/",
    "https://tabelog.com/kumamoto/A4301/A430101/43007890/",
    "http://mutugoro.co.jp/",
    "https://hanaki.owst.jp/",
    "https://tabelog.com/kumamoto/A4301/A430101/43000590/",
    "https://kumamoto-icb.or.jp/kankou_taberu/%E3%82%B9%E3%83%8A%E3%83%83%E3%82%AF-%E3%83%AB%E3%83%BB%E3%83%AC%E3%83%BC%E3%83%B4/",
    "http://www.navichan.com/shop_detail.php?id_shop=195",
    "https://feal.co.jp/",
    "https://feal.co.jp/",
    "https://tabelog.com/kumamoto/A4301/A430101/43001676/",
    "https://tabelog.com/kumamoto/A4301/A430104/43002890/",
    "http://1592.jp/archives/shops/15te",
    "https://tabelog.com/kumamoto/A4301/A430105/43001077/",
    "https://tabelog.com/kumamoto/A4301/A430101/43011591/",
    "https://tabelog.com/kumamoto/A4301/A430101/43014075/",
    "https://tabelog.com/kumamoto/A4301/A430101/43012665/",
    "http://grill-kudoh.com/",
    "http://i-love-kumamoto.com/libcafe",
    "https://www.ganar1011.com/ganar",
    "https://tabelog.com/kumamoto/A4301/A430101/43003330/",
    "https://tabelog.com/kumamoto/A4301/A430101/43011171/",
    "https://tabelog.com/kumamoto/A4301/A430101/43011493/",
    "https://r.gnavi.co.jp/3yedg0hv0000/",
    "https://retty.me/area/PRE43/ARE142/SUB14201/100001560755/",
    "N/A",
    "https://www.navitime.co.jp/poi?spot=00011-081034457&ncm=1",
    "http://www.skyterrace-bbq.com/",
    "N/A",
    "https://nomocca.jp/shop/detail.php?shop=shp0040",
    "https://taiseidoh.jp/"
];
function initMap() {
    //地図の初期中央位置
    initLatlng = new google.maps.LatLng(32.800581, 130.708679);
    for(let i = 0; i < lat.length; i++){
        latLng[i] = new google.maps.LatLng(lat[i],lng[i]);
    }
    var opts = {
        zoom: 18,
        center: initLatlng,
        styles: [
        {
            "featureType": "landscape.man_made",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.attraction",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.place_of_worship",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        },
        {
            "featureType": "poi.sports_complex",
            "elementType": "labels",
            "stylers": [
            {
                "visibility": "off"
            }
            ]
        }
        ]
    };

    map = new google.maps.Map(document.getElementById("map"), opts);
    //marker作成
    
    for(let i = 0; i < latLng.length; i++)
    {
        marker[i] = new google.maps.Marker({
            position: latLng[i],
            map: map,
            label: {
                text: (i + 1).toString(),
                fontWeight: 'bold',
                color: 'white'
            }
        });
        marker[i].addListener('click', function() {
            map.setCenter(latLng[i]);
            infoWnd = new google.maps.InfoWindow({
                content: '<h1>' + restaurantName[i] + '<br>' + Name[i] + '<br>' + tel[i] + '<br>' + '<a id="searchLink" href="' + url[i] + '" target="_blank">リンク</a><br/>'
            });
            if (currentInfoWindow) {
                currentInfoWindow.close();
            }
            infoWnd.open(map, marker[i]);
            currentInfoWindow = infoWnd;
        });
    }
}

function centerMarker(){
    var number = index_form.number.value;
    for(let i = 0; i < latLng.length; i++){
        if(number == i + 1){
            map.setCenter(latLng[i]);
            infoWnd = new google.maps.InfoWindow({
                content: '<h1>' + restaurantName[i] + '<br>' + Name[i] + '<br>' + tel[i] + '<br>' + '<a id="searchLink" href="' + url[i] + '" target="_blank">リンク</a><br/>'
            });
            if (currentInfoWindow) {
                currentInfoWindow.close();
            }
            infoWnd.open(map, marker[i]);
            currentInfoWindow = infoWnd;
        }
    }
}

function pullDownList(){
    var number = index_form.id.selectedIndex;
    for(let i = 0; i < latLng.length; i++){
        if(number + 1 == i + 1){
            map.setCenter(latLng[i]);
            infoWnd = new google.maps.InfoWindow({
                content: '<h1>' + restaurantName[i] + '<br>' + Name[i] + '<br>' + tel[i] + '<br>' + '<a id="searchLink" href="' + url[i] + '" target="_blank">リンク</a><br/>'
            });
            if (currentInfoWindow) {
                currentInfoWindow.close();
            }
            infoWnd.open(map, marker[i]);
            currentInfoWindow = infoWnd;
        }
    }
}

function setCategory(){
    var number = index_form.cid.selectedIndex;
    for(let i = 0; i < latLng.length; i++){
        marker[i].setVisible(false);
    }
    if(number + 1 == 1) {
        marker[4].setVisible();
        marker[18].setVisible();
        marker[19].setVisible();
        marker[26].setVisible();
        marker[30].setVisible();
        marker[32].setVisible();
        marker[42].setVisible();
        marker[44].setVisible();
        marker[45].setVisible();
        marker[48].setVisible();
        marker[51].setVisible();
        marker[52].setVisible();
        marker[53].setVisible();
        marker[64].setVisible();
        marker[81].setVisible();
        marker[87].setVisible();
        marker[88].setVisible();
        marker[96].setVisible();
        marker[97].setVisible();
        marker[101].setVisible();
    }
    if(number + 1 == 2){
        marker[5].setVisible();
        marker[49].setVisible();
        marker[50].setVisible();
        marker[55].setVisible();
        marker[58].setVisible();
        marker[4].setVisible();
        marker[71].setVisible();
        marker[90].setVisible();
        marker[104].setVisible();
    }
    if(number + 1 == 3){
        marker[2].setVisible();
        marker[3].setVisible();
        marker[6].setVisible();
        marker[8].setVisible();
        marker[16].setVisible();
        marker[17].setVisible();
        marker[23].setVisible();
        marker[24].setVisible();
        marker[25].setVisible();
        marker[27].setVisible();
        marker[36].setVisible();
        marker[39].setVisible();
        marker[40].setVisible();
        marker[43].setVisible();
        marker[47].setVisible();
        marker[61].setVisible();
        marker[67].setVisible();
        marker[77].setVisible();
        marker[79].setVisible();
        marker[83].setVisible();
        marker[91].setVisible();
        marker[102].setVisible();
        marker[103].setVisible();
        marker[105].setVisible();
        marker[106].setVisible();
    }
    if(number + 1 == 4){
        marker[9].setVisible();
        marker[13].setVisible();
        marker[14].setVisible();
        marker[28].setVisible();
        marker[34].setVisible();
        marker[59].setVisible();
        marker[60].setVisible();
        marker[68].setVisible();
        marker[70].setVisible();
        marker[72].setVisible();
        marker[98].setVisible();
    }
    if(number + 1 == 5){
        marker[7].setVisible();
        marker[29].setVisible();
        marker[35].setVisible();
        marker[38].setVisible();
        marker[41].setVisible();
        marker[54].setVisible();
        marker[74].setVisible();
        marker[75].setVisible();
        marker[76].setVisible();
        marker[82].setVisible();
        marker[84].setVisible();
        marker[94].setVisible();
    }
    if(number + 1 == 6){
        marker[21].setVisible();
        marker[22].setVisible();
        marker[37].setVisible();
        marker[63].setVisible();
        marker[100].setVisible();
    }
    if(number + 1 == 7){
        marker[12].setVisible();
        marker[62].setVisible();
        marker[69].setVisible();
    }
    if(number + 1 == 8){
        marker[1].setVisible();
        marker[78].setVisible();
    }
    if(number + 1 == 9){
        marker[15].setVisible();
    }
    if(number + 1 == 10){
        marker[10].setVisible();
        marker[31].setVisible();
        marker[56].setVisible();
        marker[57].setVisible();
        marker[66].setVisible();
    }
    if(number + 1 == 11){
        marker[0].setVisible();
        marker[46].setVisible();
        marker[80].setVisible();
    }
    if(number + 1 == 12){
        marker[20].setVisible();
        marker[65].setVisible();
        marker[85].setVisible();
        marker[86].setVisible();
        marker[89].setVisible();
        marker[107].setVisible();
    }
    if(number + 1 == 13){
        marker[11].setVisible();
        marker[73].setVisible();
        marker[92].setVisible();
        marker[93].setVisible();
        marker[95].setVisible();
    }
    if(number + 1 == 14){
        marker[33].setVisible();
        marker[99].setVisible();
    }
    if(number + 1 == 15){
        for(let i = 0; i < latLng.length; i++){
            marker[i].setVisible();
        }
    }
}
