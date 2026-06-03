---
sidebar: auto
---

# Jyutdict Web

Current version: β1.0.2/260419

Jyutdict Web: [jyutdict.org](https://jyutdict.org/)

Note: If you have an Android device, we also recommend you to try "[Jyutdict Android](/en/jyutdict-android/)".

## 1. Overview

Jyutdict aims to collect contemporary local pronunciations and historical rime book readings, providing basic lookup functionality including character lookup and pronunciation lookup. In the future, rime lookup (search by phonological position) and word lookup, along with more character tables, will be added.

Many Cantonese-related lookup websites on the internet are essentially "Guangzhou pronunciation lookup sites". However, Cantonese (Yue) is not just Guangzhou speech. We hope to treat all dialects equally and, riding the wave of digitalisation, bring these resources together in a style that serves both the general public (with some foundational knowledge) and phonology enthusiasts with reference needs.

Given our target audience, if you have limited exposure to Cantonese phonology — for instance, if you are seeking pathways to learn Cantonese — **this site may appear less than friendly**.

This site uses the [Extended Jyutping (J++)](/en/j++/) romanisation scheme. The tone notation system is mostly illustrated in the Pan-Cantonese tone chart below.

## 2. General Character Table & Pan-Cantonese Character Table

### 2.1 General Character Table

The **General Character Table** (also known as the Common Speech Character Table) primarily collects characters shared between Cantonese and Mandarin, or those with a relatively broad usage range.

Compared with Xiaoxuetang, the local character tables and rime book data here are provided by individuals from various localities, initiated by the Lingnaam Jyutjam community (see the list at the bottom of this page). As such, the local pronunciations have largely been self-reviewed by these contributors with modern strata removed.

For ease of comparison, each character entry is accompanied by its [*Guangyun* phonological position](https://ytenx.org/kyonh/) and [Polyhedron's Middle Chinese romanisation](http://zh.wikipedia.org/wiki/User:Polyhedron/中古漢語拼音), represented in the same manner as the ["Chinese Character Pronunciations Across Time and Space"](https://zhuanlan.zhihu.com/p/20839947) app.

The second column of the local pronunciation table uses both J++ and IPA notation. The last column contains remarks, typically example words or explanations for characters with multiple readings.

### 2.2 Pan-Cantonese Character Table

The Pan-Cantonese Character Table records characters that are notably distinctive in Pan-Cantonese Yue varieties compared to Mandarin, using Extended Jyutping to document their pronunciations across various localities. By the end of July 2019, over 2,500 entries had been collected; by mid-2023, over 4,500 entries.

While the definitions may not always balance broad applicability with precision across multiple localities, and local records may not always be entirely accurate due to limitations in contributors' knowledge, the table at least allows these distinctive characters to be digitally preserved regardless of their status. It also helps roughly determine the usage range of a particular character and meaning, and conversely, provides more refined phonological information for that character.

In the table, the character head and its following Jyutping represent respectively: **the representative character**, Unicode, (folk variant characters), and **the composite pronunciation**.

**The representative character does not represent the etymological character (本字) or the orthodox character (正字)**. It is simply a relatively reasonable character chosen based on sound and meaning. We neither excessively pursue etymological characters, nor resist using folk characters with mouth radicals, nor insist on them being suitable for everyday typing.

**The composite pronunciation does not represent the standard pronunciation (正音)**, nor does it represent historical readings. Rather, it is an *artificial phonological system* that merges the most raised (举) elements from each selected locality. There may be occasional errors, so please refer extensively to the pronunciations marked for individual localities.

Accordingly, **this site does not take a position requiring either *standard pronunciation (正音)* or *orthodox characters (正字)***.

Each entry then contains three parts: "Definition", "Local Pronunciations", and "Semantic Field". **For definitions, when bold text appears, only the bold portion should be attended to**; other senses are typically taken from the representative character's explanations in classical texts or the common language and do not imply that each locality possesses that sense. In the pronunciation section, localities are marked with colours — the closer the colours, the smaller the difference between the two localities, with hues roughly indicating subgroup affiliation. Pronunciations are likewise indicated in J++; italic text with a question mark indicates uncertainty, while "\_" indicates that the expression is considered unattested in that locality. The Semantic Field indicates the category of the character's meaning; only some characters have been tagged so far.

Unlike the General Character Table, this table currently allows searching only one character at a time and no longer supports automatic simplified-to-traditional conversion.

For pronunciation-based search, you can use the composite pronunciation, the **search pronunciation**, or specify a particular locality's pronunciation from the dropdown list (completeness may be far inferior to the former two, depending on the state of data entry). The search pronunciation is derived by stripping all raised (举) elements from the composite pronunciation, serving solely for search purposes, since the composite pronunciation is unsuitable for initiating searches.

> **Onsets:**
>
> z c s / zh ch sh: Distinguishes the Jing (精) and Zhao (照) series (Jing i merges with Shi (师) rime ii, so it is not further marked)
>
> j / nj: Distinguishes the Ri (日) initial
>
> **Rimes:**
>
> aa / ae / e / i: *ae* is used wherever possible for Division II, depending on whether raising has occurred in places like Shunde; *e* in open-syllable rimes represents Xie (蟹) and Zhi (支) colloquial readings; *i / e* in checked-syllable (入声) rimes — see below
>
> o / oe: *oe* represents Guo (果) Division III closed in the phonological system, as well as Guo open colloquial readings, depending on specific literary-colloquial patterns
>
> ui / ooi / yi / yu: Distinguishes Kui (魁, ui), Sui (虽, ooi), Zhu (诸, yu) rimes; the split of the Jing series in Yu (遇, yi) depends on whether diphthongisation has occurred in each locality
>
> im in ing / em en eng: Division III/IV literary-colloquial readings, favouring colloquial readings where possible, also considering the literary-colloquial ratio across localities (same principle applies to entering-tone rimes)
>
> ing / yng: Geng (梗) and Zeng (曾) Division III/IV, depending on whether rounding has occurred in places like Watlam (same principle applies to entering-tone rimes)
>
> ong / owng: Dang (宕) and Jiang (江), depending on whether rounding has occurred in places like Watlam (same principle applies to entering-tone rimes)
>
> **Tones:**
>
> Entering tone 4 / 6: Upper and lower Yang entering (阳入), depending on vowel length, primarily with reference to Watlam and similar localities

Since the local pronunciation data is filled in voluntarily by contributors from each locality and manpower is limited, missing entries or errors for a given locality are common. Those interested in helping may contact us via the information at the bottom of this page.

## 3. Supplementary Notes & FAQ

### 3.1 Extended Jyutping Scheme

See the dedicated [Extended Jyutping (J++)](/en/j++/) page.

### 3.2 Tone Chart

See the dedicated page.

### 3.3 The server runs on modest resources. Please do not DDoS. Do not crawl.

### 3.4 FAQ

**Q1. Why is J++ necessary? / Why not just use IPA?**

In practice, J++ is used in three places: 1. local pronunciation display; 2. lookup by pronunciation; 3. the Pan-Cantonese Table. If only IPA were used, on the one hand the barrier to entry would be raised, and on the other hand data entry work everywhere would become more cumbersome. Moreover, the Yue phonological system is relatively uniform, and the commonly used Extended Jyutping has not changed drastically from the original Jyutping — the learning cost is low. Furthermore, narrow transcription in IPA is still used for detailed recording; while this more accurately captures local pronunciations, it also weakens the connections between readings from different places. Hence Jyutping is supplemented, which also carries tone markers to indicate tone categories.

(Note: Not all localities have narrow IPA transcriptions, and even where broad IPA is used, it may not be sufficiently adequate. This is constrained by whether conditions allow analysis of the actual local pronunciations, compounded by the accent biases of the character table contributors — one of the reasons why relying solely on IPA is not feasible.)

**Q2. Why so few localities? / Why are they all from xx?**

See below.

**Q3. Errors in the data? / Can I provide a local character table? / Interested in contributing to the Pan-Cantonese Table / Have suggestions?**

You are welcome to contact us and provide character tables.

**Q4. What is the significance of the composite pronunciation in the Pan-Cantonese Table?**

The Pan-Cantonese (Character) Table is built on the concept of synchronic comparison of meanings across local pronunciations. In striving to make it a broad, distinctive, Pan-Cantonese-oriented database, we inevitably face numerous practical data processing challenges, such as sorting electronic data, filtering, cross-locality searching, and so on. It is precisely to facilitate these functions that the table provides the so-called subjectively constructed "Pan-Cantonese Composite Pronunciation", whose materials are rooted in historical Yue dictionaries and the raised phonemes of various local pronunciations. This "composite pronunciation" is not recommended for use as an actual common pronunciation, and its rules will change with the expansion of data sources and updates to Yue phonological theory.

**Q5. Other versions?**

The [Android version](/en/jyutdict-android/) is available.

**Q6. "Speak Mandarin, be a civilised person" / "Guangzhou speech is the most standard Cantonese" / The Yue language police?**

Oh.

## 4. Sources & Acknowledgements

(Those marked with @ are Zhihu usernames.)

### 4.1 General Character Table Sources

- *Fenyun* & *Yinghua*: led by [@大渡河飞过海](https://www.zhihu.com/people/da-du-he-fei-guo-hai)
- Heshan Shaping: Sathaksamyan
- Kaiping Hulong: 鄧鈞
- Taishan Dajiang: [@彼岸](https://www.zhihu.com/people/bi-an-38-87)
- Taishan Doushanxu: [@chands](https://www.zhihu.com/people/chands)
- Jiangmen Hetang Upper: [@Kwingiem Chan](https://www.zhihu.com/people/reseted1608208839617)
- Jiangmen Hetang Lower: [@Kwingiem Chan](https://www.zhihu.com/people/reseted1608208839617)
- Jiangmen Shuinan: [@Kwingiem Chan](https://www.zhihu.com/people/reseted1608208839617)
- Jiangmen Baisha: [@Kwingiem Chan](https://www.zhihu.com/people/reseted1608208839617)
- Jiangmen Zilai: [@Kwingiem Chan](https://www.zhihu.com/people/reseted1608208839617)
- Jiangmen Shazawei: [@Kwingiem Chan](https://www.zhihu.com/people/reseted1608208839617)
- Kaiping Shatang: [@xing](https://www.zhihu.com/people/yin-li-chang-liang-80) / 砂糖
- Xinhui Tianhu: [@Kwingiem Chan](https://www.zhihu.com/people/reseted1608208839617)
- Xinhui Luokeng: @大蛤
- Xinhui Huicheng: [@Kwingiem Chan](https://www.zhihu.com/people/reseted1608208839617) > 好爽瘾输入法
- Jiangmen Xuding: [@Kwingiem Chan](https://www.zhihu.com/people/reseted1608208839617)
- Dongguan Tangjiao: [@不羁](https://www.zhihu.com/people/da-shu-18-11), [@大渡河飞过海](https://www.zhihu.com/people/da-du-he-fei-guo-hai)
- Dongguan Huangmaling: 謝俊賢 / @I
- Dongguan Guancheng: [@不羁](https://www.zhihu.com/people/da-shu-18-11)
- Jiangmen Baihua: [@Kwingiem Chan](https://www.zhihu.com/people/reseted1608208839617)
- Guangzhou: [@以成](https://www.zhihu.com/people/huang-jun-xin-74), [@Simon So](https://www.zhihu.com/people/simon-so), @Tim, [@Ching-hung Ng](https://www.zhihu.com/people/ching-hung-ng)
- Shunde Daliang: [@Uncle光](https://www.zhihu.com/people/zuo-yao-20)
- Zhongshan Shiqi: [@亘古二六亖](https://www.zhihu.com/people/gg264)
- Zhongshan Xiaolan: 靈帝
- Zhaoqing: [@Ecr-弋汐](https://www.zhihu.com/people/ecisrhetha)
- Xinxing Xincheng: [@不羁](https://www.zhihu.com/people/da-shu-18-11), [@大渡河飞过海](https://www.zhihu.com/people/da-du-he-fei-guo-hai)
- Yangchun Songbai: [@不羁](https://www.zhihu.com/people/da-shu-18-11)
- Wuzhou: [@大渡河飞过海](https://www.zhihu.com/people/da-du-he-fei-guo-hai)
- Nanning: @tim
- Hengxian: alex
- Baise: 夏桑菊
- Guiping: [B@浔人骑诗1](https://space.bilibili.com/547926759?spm_id_from=..0.0)
- Wuzhou Rongxu: [@大渡河飞过海](https://www.zhihu.com/people/da-du-he-fei-guo-hai) > *廣西蒼梧白話詞匯…*, 类光源
- Wuzhou Fudian: 晋州永世
- Fengchuan: [@大渡河飞过海](https://www.zhihu.com/people/da-du-he-fei-guo-hai) > *封開方言志*
- Kaijian: [@大渡河飞过海](https://www.zhihu.com/people/da-du-he-fei-guo-hai) > *封開方言志*, 阿水 / B@我嘅拳头沙煲咁大
- Cangwu Shiqiao: [@大渡河飞过海](https://www.zhihu.com/people/da-du-he-fei-guo-hai), 淩蕓訫飛
- Mengshan:
- Guiping Xunwang: [@馮景宸](https://www.zhihu.com/people/jing-meng-xing-cheng)
- Luchuan Mapo: 於兔
- Beiliu Dawang: 喇叭褲
- Rongxian: [@PYT](https://www.zhihu.com/people/pan473820)
- Watlam (Yulin): [@暾明](https://www.zhihu.com/people/tun-ming-89)
- Guigang Jieli: [@貴糖菠蘿](https://www.zhihu.com/people/teng-teng-64-96), *貴港話同音字彙*
- Lingshan Taiping (Xinli): 達陽
- Lianzhou: [@Sin Yeung](https://www.zhihu.com/people/xian-yang-61) > *廣西通志·漢語方言志*, Internet
- Zhanjiang Potou: @女尊控
- Wuchuan Wuyang: @女尊控
- Huazhou Xiajiang: [@白朔](https://www.zhihu.com/people/troye-sivan-44)
- Huazhou Shangjiang: [@白朔](https://www.zhihu.com/people/troye-sivan-44)
- Qinzhou: [@Jzit](https://www.zhihu.com/people/lai-joengzit)
- Fangcheng: [Anonymous]
- Beihai: [@Sin Yeung](https://www.zhihu.com/people/xian-yang-61)
- Suixi Caotan: 州
- Suixi Suicheng: SìhngYíh
- Zhanjiang Chikan: SìhngYíh
- Gaozhou: [@一优法师](https://www.zhihu.com/people/yi-xie-bian-zhou-31-35)
- Gaozhou Shigu: [@一优法师](https://www.zhihu.com/people/yi-xie-bian-zhou-31-35)
- Maoming: 潘少, [@Aleko Lau](https://www.zhihu.com/people/lau-alex), [B@常ならむ](https://space.bilibili.com/6033674)
- Yangchun Heshui: [@不羁](https://www.zhihu.com/people/da-shu-18-11)
- Yangchun Hekou: [@不羁](https://www.zhihu.com/people/da-shu-18-11)
- Yangjiang: [@不羁](https://www.zhihu.com/people/da-shu-18-11), [@大渡河飞过海](https://www.zhihu.com/people/da-du-he-fei-guo-hai)
- Liuzhou: 小易, 何平
- Yizhang Yiliu: [@忘潮汕难洞敏](https://www.zhihu.com/people/wang-chao-shan-nan-dong-min)

The simplified-traditional conversion table comes from [OpenCC](https://github.com/BYVoid/OpenCC).

Middle Chinese (*Guangyun*) data: [@王赟 Maigo](https://www.zhihu.com/people/maigo)'s *Guangyun Character Pronunciation Table* from poem, within the *Chinese Character Pronunciations Across Time and Space* app.

### 4.2 Technical Support & Acknowledgements

Co-developed by [@Zenam](https://www.zhihu.com/people/zenam), [@以成](https://www.zhihu.com/people/huang-jun-xin-74) and others.

Design assistance from 平姐 and others.

Technical support from the Lingnaam IT Team (also known as the Jyutdict Editorial Board IT Team, [JyutdictEB](https://github.com/JyutdictEB)): 小木, William, [@Aleko Lau](https://www.zhihu.com/people/lau-alex), Pomfret, 行者 and others.

Internal testing by the Jyutdict Editorial Board.

Discussion platform provided by Lingnaam Jyutjam.

### 4.3 How to Contribute

If you know the very basics of phonology and either Jyutping or IPA, you can write a character table for your own native variety and submit it for display. The base template can be downloaded from the pinned post on our Bilibili channel below.

## 5. Contact

- Lingnaam Jyutjam on [Bilibili](https://space.bilibili.com/410568594)
- Jyutdict QQ Group: 837607356
- Personal QQ: 526438991

---

This page may not be updated in time, please refer to the Cantonese version.

Contact us: jyutjam@tutanota.com
