
var movies = [
    new bookClass('Movie/1.jpg','コーダあいのうた','シアン・ヘダー','', new Date(2024,8-1,28),'2021'),
    new bookClass('Movie/2.jpg','夜の浜辺でひとり','ホン・サンス','', new Date(2024,9-1,4),'2017'),
    new bookClass('Movie/3.jpg','オー！スジョン','ホン・サンス','', new Date(2024,8-1,30),'2000'),
    new bookClass('Movie/4.jpg','ニューヨーカーの暮らし方 season3','ジョン・ウィルソン','', new Date(2024,9-1,18),'2024'),
    new bookClass('Movie/5.jpg','座頭市 血煙り街道','三隅研次','', new Date(2024,9-1,5),'1967'),
    new bookClass('Movie/6.jpg','introduction','ホン・サンス','', new Date(2024,9-1,19),'2022'),
    new bookClass('Movie/7.jpg','プッシャー','ニコラス・ウィンディング・レフン','', new Date(2024,9-1,23),'1996'),
    new bookClass('Movie/8.jpg','プッシャー2','ニコラス・ウィンディング・レフン','', new Date(2024,9-1,30),'2004'),
    new bookClass('Movie/9.jpg','ウィンディ＆ルーシー','ケリー・ライカート','', new Date(2024,9-1,27),'2008'),
    new bookClass('Movie/10.jpg','プッシャー3','ニコラス・ウィンディング・レフン','', new Date(2024,10-1,27),'2008'),
    new bookClass('Movie/11.jpg','旅の始まり世界の終わり','黒沢清','', new Date(2024,10-1,6),'2019'),
    new bookClass('Movie/12.jpg','ポーラ X','レオス・カラックス','', new Date(2024,10-1,10),'1999'),
    new bookClass('Movie/13.jpg','美しき仕事','クレール・ドニ','', new Date(2024,10-1,10),'1999'),
    new bookClass('Movie/14.jpg','うなぎ','今村昌平','', new Date(2024,10-1,17),'1997'),
    new bookClass('Movie/15.jpg','蛇の道','黒沢清','', new Date(2024,10-1,17),'2024'),
    new bookClass('Movie/16.jpg','あなた自身と、あなたのこと','ホン・サンス','', new Date(2024,10-1,10),'2016'),
    new bookClass('Movie/17.jpg','結婚のすべて','岡本喜八','', new Date(2024,10-1,18),'1958'),
    new bookClass('Movie/18.jpg','二重のまち／交代地のうたを編む','小森はるか','', new Date(2024,11-1,1),'2019 '),
    new bookClass('Movie/19.jpg','映画館の恋','ホン・サンス','', new Date(2024,10-1,20),'2006'),
    new bookClass('Movie/20.jpg','ユリイカ','青山真治','', new Date(2024,10-1,22),'2001'),
    new bookClass('Movie/21.jpg','リスト','ホン・サンス','', new Date(2024,10-1,23),'2011'),
    new bookClass('Movie/22.jpg','草の葉','ホン・サンス','', new Date(2024,10-1,23),'2018'),
    new bookClass('Movie/23.jpg','川沿いのホテル','ホン・サンス','', new Date(2024,10-1,23),'2018'),
    new bookClass('Movie/24.jpg','異国日記','瀬田なつき','', new Date(2024,10-1,30),'2018'),
    new bookClass('Movie/25.jpg','夜明けのすべて','三宅唱','', new Date(2024,10-1,30),'2024'),
    new bookClass('Movie/26.jpg','サタンタンゴ','タル・ベーラ','', new Date(2024,10-1,31),'1994'),
    new bookClass('Movie/27.jpg','サスペリア','ダリオ・アルジェント','', new Date(2024,11-1,1),'1977'),
    new bookClass('Movie/28.jpg','アンダーグラウンド','小田香','', new Date(2024,11-1,2),'2024'),
    new bookClass('Movie/29.jpg','自由が丘で','ホン・サンス','', new Date(2024,11-1,2),'2014'),
    new bookClass('Movie/30.jpg','ストレンジ・ウェイ・オブ・ライフ','ペドロ・アルモドバル','2023', new Date(2024,11-1,4),'1994'),
    new bookClass('Movie/31.jpg','ノスタルジア','アンドレイ・タルコフスキー','', new Date(2024,11-1,5),'1983'),
    new bookClass('Movie/32.jpg','レニングラード・カウボーイズ・ゴー・アメリカ','アキ・カウリスマキ','', new Date(2024,11-1,6),'1990'),
    new bookClass('Movie/33.jpg','空に聞く','小森はるか','', new Date(2024,11-1,7),'2018'),
    new bookClass('Movie/34.jpg','逃げた女','ホン・サンス','', new Date(2024,11-1,8),'2020'),
    new bookClass('Movie/35.jpg','ヴェルクマイスター・ハーモニー','タル・ベーラ','', new Date(2024,11-1,10),'2000'),
    new bookClass('Movie/36.jpg','3人のアンヌ','ホン・サンス','', new Date(2024,11-1,13),'2004'),
    new bookClass('Movie/37.jpg','女は男の未来だ','ホン・サンス','', new Date(2024,11-1,19),'2012'),
    new bookClass('Movie/38.jpg','EO','イエジー・スコリモフスキ','', new Date(2024,11-1,19),'2022'),
    new bookClass('Movie/39.jpg','パリでかくれんぼ','ジャック・リヴェット','', new Date(2024,11-1,20),'1995'),
    new bookClass('Movie/40.jpg','彼女たちの舞台','ジャック・リヴェット','', new Date(2024,11-1,20),'1998'),
    new bookClass('Movie/41.jpg','CUT','アミール・ナデリ','', new Date(2024,11-1,22),'2011'),
    new bookClass('Movie/42.jpg','台北ストーリー','エドワード・ヤン','', new Date(2024,11-1,23),'1985'),
    new bookClass('Movie/43.jpg','恋恋風塵','ホウ・シャオシェン','', new Date(2024,11-1,23),'1986'),
    new bookClass('Movie/44.jpg','青春神話','ツァイ・ミンリャン','', new Date(2024,11-1,23),'1992'),
    new bookClass('Movie/45.jpg','それから','ホン・サンス','', new Date(2024,11-1,24),'2017'),
    new bookClass('Movie/46.jpg','ワイルド・スピードx3 TOKYO DRIFT','ジャスティン・リン','', new Date(2024,11-1,24),'2006'),
    new bookClass('Movie/47.jpg','クレアのカメラ','ホン・サンス','', new Date(2024,11-1,27),'2017'),
    new bookClass('Movie/48.jpg','冬の旅','アニエス・バルダ','', new Date(2024,11-1,29),'1985'),
    new bookClass('Movie/49.jpg','戦艦ポチョムキン','セルゲイ・エイゼンシュテイン','', new Date(2024,11-1,29),'1925'),
    new bookClass('Movie/50.jpg','クレアのカメラ','ホン・サンス','', new Date(2024,11-1,29),'2017'),
    new bookClass('Movie/51.jpg','ゲームの規則','ジャン・ルノワール','', new Date(2024,11-1,30),'1939'),

]


movies[10].comment =
`
`
movies[39].comment =
`
ながいよ。面白いけど、最後の方しんどかったんよ。
`
movies[38].comment =
`
めちゃくちゃおもしろい。おしゃれ映画やんね。ながい。
`
movies[37].comment =
`
じーん。
`
movies[36].comment =
`
良い。昔観たことあったわね。初期ホン・サンスなんでいろいろ考えるところもあり。
`

movies[35].comment =
`
予告がめちゃくちゃ良い。一編目号泣。新宿御苑の芝生で寝転がって観た。
`
movies[34].comment =
`
ああ。サタンタンゴのこと毎日思い出している。
モチーフ、脚本から、バッチリ好き。やっぱこういうショットで映画つくるべき、。
`
movies[33].comment =
`
素晴らしい。素晴らしい…
`
movies[32].comment =
`
おもろかった。カメラまわしたい僕も。
`
movies[31].comment =
`
良い。タイトルから良いもんね。
`
movies[30].comment =
`
寢らんかった。
`
movies[29].comment =
`
つまらんかった。
`
movies[28].comment =
`
お口直しに夜中見始めたけど、寝落ちしちまった。
`
movies[27].comment =
`
タル・ベーラとはぜんぜん違う感じなんやね。ときどき目覚めさせてくる。
でもサタンタンゴのほうがすきだな♡
`
movies[26].comment =
`
笑った。
`
movies[25].comment =
`
純粋な映画ってあんま好きじゃないかも。長回しのほうが疲労溜まりにくいね。
（見終わった直後のぼくの感想冷めすぎ笑。
監督の持っている愛を感じるし、見終わったあとも心に刻まれている。
しかしやっぱ純粋というか、硬い感じがある。ホン・サンスは軽やかさがある。）
`
movies[17].comment =
`
ガチおもんない。
`
movies[24].comment =
`
最後まで見れた。
`
movies[23].comment =
`
おもんなすぎて、映画館抜けて早稲田散歩した。天気が良く、幸福を感じた。
`
movies[22].comment =
`
面白い。ホン・サンスで一番おもしろかったかも。
`
movies[21].comment =
`
ちょっと困惑した。困惑できて嬉しいけど。面白くなかったね。
`
movies[20].comment =
`
良い短編、爽やかさがあった。
`
movies[19].comment =
`
博多弁が良かった。光石研の北九弁も良かった。
`
movies[18].comment =
`
好き。2部目で目が覚めてきた。バキバキに感動した。
映画館出てから、街がいい感じに見れるようになった。
`
movies[16].comment =
`
結婚相談所のシーンで声出して笑ったｗ
`
movies[15].comment =
`
この前下高井戸で見たこの映画のこと思い出して、良かったなあ、と思った。
ヒロインの魅力！ナイーブな男！
`
movies[14].comment =
`
めちゃくちゃ面白かった。柴咲コウとフランス人のおっさんのコンビが格好良い。
`
movies[13].comment =
`
倒れているヒロインを見つける、場面が美しかった。もうちょっと短く作ってほしい、眠い。
`

movies[12].comment =
`
良かった。眠かったのでもう一回みたい。最後のカットが急にカッコ良くてびっくりした。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
`

movies[11].comment =
`
さいしょ面白かったけど途中からだるくなってきた。
`

movies[10].comment =
`
主役の葉子に魅力を感じないどころか、
殆ど苛立ちに近いものを感じ続けた。面白くなかった。
`

movies[9].comment =
`
三部作の中で一番おもしろかったかも。デンマークの悪い人たちを見れてよかった。
`
movies[8].comment =
`
一番好きな映画。出てくる人物が皆魅力的。人の親切心とかに涙出る。犬かわいい。
`

movies[7].comment =
`
前作から8年くらいたってるから、ミロがちょっと太っている。マッツ・ミケルセンはあんま変わらない。
暴力とか、ドラックとかもう見たくなくなってきた。
`

movies[6].comment =
`
朝起きて少し肌寒かったから、ジャージ羽織ってこの映画見始めたら、
主人公が全く同じジャージをほとんどのシーンで着ていてびっくりしたね。
` 

movies[5].comment = 
`
散歩しているときに思い出して、もう一度みた。やっぱり素晴らしいなと思った。
`;


movies[0].comment = 
`
友達のすすめでみた。最初のショットからめちゃくちゃ良い映画だと思った。海とか港がとても良いルックで写されている。めちゃくちゃ泣いたし。
`

movies[1].comment = 
`
やっぱホン・サンスすき。この作品が一番ルックが良いと思う。キム・ミニがめちゃくちゃいい感じ。体に染み入った。
`

movies[2].comment = 
`
映画館で見逃してから気になりだしたのでアマプラでみた。かなり昔のホン・サンス。見たことある俳優も出てくる。おもしろいけど、最近の作品のほうが好き。
`;

movies[2].comment = 
`
映画館で見逃してから気になりだしたのでアマプラでみた。最近の作品のほうが好き。
`;

movies[3].comment = 
`
このスタイルが好き。
`;

movies[4].comment = 
`
シネスコサイズで決まっている。1対1で向かい合ってしずかに雪が振り始めるショット、完璧。
`;

