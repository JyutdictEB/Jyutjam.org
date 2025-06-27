---
sidebar: auto
---

# 擴展粵拼方案（J++）

本文曾在 2021 年 6 月 26 日 香港語言學學會 · [第二十一屆粵語討論會（WOC-21）](https://lshk.org/events/woc/) 報告

報告人：[@以成](https://www.zhihu.com/people/huang-jun-xin-74)，指南 [@Zenam](https://www.zhihu.com/people/zenam)

[點此瀏覽最新Jyutping++方案全表](https://docs.google.com/spreadsheets/d/19puWUoeYGflSuJj7mNm7maTX5bA2tkjNDESaMTBwPaw/edit?usp=sharing)

## 0. 補充于 2025 年

原文發表于 2021 年。這段時間我們又從多個地方修改了一些實現細節。聲母、韻母（元音）、調號都有不同程度的小變動。本頁忠於報告，不作調整，實際使用以泛粵典爲準。

以下爲原文。

## 1. 摘要

香港語言學學會粵語拼音方案（以下略稱「粵拼」）係目前廣受認可嘅粵語拉丁拼音方案，可以相對科學、標準噉表示香港、廣州粵語嘅語音系統。不過，粵語嘅其它方言存在部分不見於香港、廣州粵語嘅音素，現有粵拼系統難以拼寫。本文整理咗欽廉片、勾漏片、邕潯片、四邑片等粵語片區嘅主要方言點，喺原有粵拼嘅基礎上擴展，提出一套理論上適配所有粵語方言嘅擴展粵拼方案（英文：Jyutping++，以下略稱「J++」）。本文提出咗四個原則：不修改原有粵拼方案；全粵方案統一，各地微調；兼顧歷時性同共時性；符號不超出 ASCII 字符集。

## 2. 內容回顧

[![XdW8mQ.md.jpg](https://s1.ax1x.com/2022/06/05/XdW8mQ.md.jpg)](https://imgtu.com/i/XdW8mQ)

[![XdWtkn.md.jpg](https://s1.ax1x.com/2022/06/05/XdWtkn.md.jpg)](https://imgtu.com/i/XdWtkn)

[![XdW1Og.md.jpg](https://s1.ax1x.com/2022/06/05/XdW1Og.md.jpg)](https://imgtu.com/i/XdW1Og)

[![XdWGwj.md.jpg](https://s1.ax1x.com/2022/06/05/XdWGwj.md.jpg)](https://imgtu.com/i/XdWGwj)

[![XdWJTs.md.jpg](https://s1.ax1x.com/2022/06/05/XdWJTs.md.jpg)](https://imgtu.com/i/XdWJTs)

[![XdWNYq.md.jpg](https://s1.ax1x.com/2022/06/05/XdWNYq.md.jpg)](https://imgtu.com/i/XdWNYq)

[![XdWUf0.md.jpg](https://s1.ax1x.com/2022/06/05/XdWUf0.md.jpg)](https://imgtu.com/i/XdWUf0)

[![XdWwlT.md.jpg](https://s1.ax1x.com/2022/06/05/XdWwlT.md.jpg)](https://imgtu.com/i/XdWwlT)

[![XdWdpV.md.jpg](https://s1.ax1x.com/2022/06/05/XdWdpV.md.jpg)](https://imgtu.com/i/XdWdpV)

[![XdW06U.md.jpg](https://s1.ax1x.com/2022/06/05/XdW06U.md.jpg)](https://imgtu.com/i/XdW06U)

[![XdWBXF.md.jpg](https://s1.ax1x.com/2022/06/05/XdWBXF.md.jpg)](https://imgtu.com/i/XdWBXF)

[![XdWs0J.md.jpg](https://s1.ax1x.com/2022/06/05/XdWs0J.md.jpg)](https://imgtu.com/i/XdWs0J)

[![XdWrm4.md.jpg](https://s1.ax1x.com/2022/06/05/XdWrm4.md.jpg)](https://imgtu.com/i/XdWrm4)

[![XdWy79.md.jpg](https://s1.ax1x.com/2022/06/05/XdWy79.md.jpg)](https://imgtu.com/i/XdWy79)

[![XdWckR.md.jpg](https://s1.ax1x.com/2022/06/05/XdWckR.md.jpg)](https://imgtu.com/i/XdWckR)

[![XdWgt1.md.jpg](https://s1.ax1x.com/2022/06/05/XdWgt1.md.jpg)](https://imgtu.com/i/XdWgt1)

[![XdW2fx.md.jpg](https://s1.ax1x.com/2022/06/05/XdW2fx.md.jpg)](https://imgtu.com/i/XdW2fx)

[![XdWWp6.md.jpg](https://s1.ax1x.com/2022/06/05/XdWWp6.md.jpg)](https://imgtu.com/i/XdWWp6)

[![XdWf1K.md.jpg](https://s1.ax1x.com/2022/06/05/XdWf1K.md.jpg)](https://imgtu.com/i/XdWf1K)

[![XdWh6O.md.jpg](https://s1.ax1x.com/2022/06/05/XdWh6O.md.jpg)](https://imgtu.com/i/XdWh6O)

[![XdW4XD.md.jpg](https://s1.ax1x.com/2022/06/05/XdW4XD.md.jpg)](https://imgtu.com/i/XdW4XD)

[![XdWIne.md.jpg](https://s1.ax1x.com/2022/06/05/XdWIne.md.jpg)](https://imgtu.com/i/XdWIne)

[![XdWo0H.md.jpg](https://s1.ax1x.com/2022/06/05/XdWo0H.md.jpg)](https://imgtu.com/i/XdWo0H)

[![XdWT7d.md.jpg](https://s1.ax1x.com/2022/06/05/XdWT7d.md.jpg)](https://imgtu.com/i/XdWT7d)

[![XdWHAA.md.jpg](https://s1.ax1x.com/2022/06/05/XdWHAA.md.jpg)](https://imgtu.com/i/XdWHAA)

[![XdWbtI.md.jpg](https://s1.ax1x.com/2022/06/05/XdWbtI.md.jpg)](https://imgtu.com/i/XdWbtI)

[![XdWqht.md.jpg](https://s1.ax1x.com/2022/06/05/XdWqht.md.jpg)](https://imgtu.com/i/XdWqht)

[![XdWO9P.md.jpg](https://s1.ax1x.com/2022/06/05/XdWO9P.md.jpg)](https://imgtu.com/i/XdWO9P)

[![XdWX1f.md.jpg](https://s1.ax1x.com/2022/06/05/XdWX1f.md.jpg)](https://imgtu.com/i/XdWX1f)

[![XdWjc8.md.jpg](https://s1.ax1x.com/2022/06/05/XdWjc8.md.jpg)](https://imgtu.com/i/XdWjc8)

[![XdWzng.md.jpg](https://s1.ax1x.com/2022/06/05/XdWzng.md.jpg)](https://imgtu.com/i/XdWzng)

[![XdWvjS.md.jpg](https://s1.ax1x.com/2022/06/05/XdWvjS.md.jpg)](https://imgtu.com/i/XdWvjS)

[![XdIeR1.md.jpg](https://s1.ax1x.com/2022/06/05/XdIeR1.md.jpg)](https://imgtu.com/i/XdIeR1)

[![XdImxx.md.jpg](https://s1.ax1x.com/2022/06/05/XdImxx.md.jpg)](https://imgtu.com/i/XdImxx)

[![XdIZGR.md.jpg](https://s1.ax1x.com/2022/06/05/XdIZGR.md.jpg)](https://imgtu.com/i/XdIZGR)

[![XdIKsK.md.jpg](https://s1.ax1x.com/2022/06/05/XdIKsK.md.jpg)](https://imgtu.com/i/XdIKsK)

[![XdIuM6.md.jpg](https://s1.ax1x.com/2022/06/05/XdIuM6.md.jpg)](https://imgtu.com/i/XdIuM6)

[![XdIlZD.md.jpg](https://s1.ax1x.com/2022/06/05/XdIlZD.md.jpg)](https://imgtu.com/i/XdIlZD)

[![XdIMqO.md.jpg](https://s1.ax1x.com/2022/06/05/XdIMqO.md.jpg)](https://imgtu.com/i/XdIMqO)

[![XdI3IH.md.jpg](https://s1.ax1x.com/2022/06/05/XdI3IH.md.jpg)](https://imgtu.com/i/XdI3IH)

[![XdI1de.md.jpg](https://s1.ax1x.com/2022/06/05/XdI1de.md.jpg)](https://imgtu.com/i/XdI1de)

[![XdIGid.md.jpg](https://s1.ax1x.com/2022/06/05/XdIGid.md.jpg)](https://imgtu.com/i/XdIGid)

[![XdIJJA.md.jpg](https://s1.ax1x.com/2022/06/05/XdIJJA.md.jpg)](https://imgtu.com/i/XdIJJA)

[![XdIYRI.md.jpg](https://s1.ax1x.com/2022/06/05/XdIYRI.md.jpg)](https://imgtu.com/i/XdIYRI)
