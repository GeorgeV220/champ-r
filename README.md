# ChampR

[![](https://img.shields.io/github/v/release/GeorgeV220/champ-r?label=LATEST%20VERSION&style=for-the-badge)](https://github.com/GeorgeV220/champ-r/releases/latest)
[![](https://img.shields.io/github/downloads/GeorgeV220/champ-r/total?style=for-the-badge)](https://github.com/GeorgeV220/champ-r/releases)
[![](https://img.shields.io/github/workflow/status/GeorgeV220/champ-r/Test%20Build?style=for-the-badge&color=65C0A3)](https://github.com/GeorgeV220/champ-r/actions)

<img src="https://user-images.githubusercontent.com/1357073/119595829-bc218680-be10-11eb-8e06-cb47902a7d11.png" height="400" /> <img src="https://user-images.githubusercontent.com/1357073/119310086-da1ca900-bca1-11eb-9d1e-73cae2b36c0c.png" height="400" />

Yet another League of Legends helper.

[App icon](https://www.flaticon.com/free-icon/dog_2767976), credits to [flaticon.com](https://www.flaticon.com/).

> ❤️ Special thanks to [JetBrains](https://www.jetbrains.com/?from=champ-r) for sponsoring opensource license to this project.

## Features

- 📦 Auto generate recommend champion builds
- 🎉 Popup runes list & apply on the fly
- ✨ i18n support
    - 🇨🇳 `Chinese`
    - 🇺🇸 `English`
    - 🇫🇷 `French`
    - 🇬🇷 `Greek`
- ℹ️ Update notifier
- 😎 Multiple data sources for **Summoner's Rift** & **ARAM**
  - `op.gg`
  - `lolalytics.com`
  - `u.gg`
  - `champion.gg`
  - `murderbridge.com`
  - `101.qq.com`
  - ...

## Install

### Windows
1. Download the latest exe release from [here](https://github.com/cangzhang/champ-r/releases).
### Ubuntu/Debian
1. Download the latest deb release from [here](https://github.com/GeorgeV220/champ-r/releases).
### Arch
1. Download the latest pacman release from [here](https://github.com/GeorgeV220/champ-r/releases).
2. Open the download location in your terminal e.g. cd /home/USER/Downloads.
3. Then run pacman -U champ-r-<vesrsion>.pacman as root.

https://github.com/GeorgeV220/champ-r/releases

## How to use

### Import builds

1. Run ChampR
2. Choose the installation folder of League of Lengends
3. Select data sources
4. Hit `Import` button
5. You can find them in the shop menu when playing game

### Apply Runes

1. Run ChampR
2. Choose the installation folder of League of Lengends
3. Start pvp game, the rune popup would show in the screen
4. Press `Apply` icon

## FAQ

1. [Start ChampR & LOL/WeGame with one click](https://github.com/cangzhang/champ-r/issues/63)
2. [Fix installation stuck at the progress view](https://github.com/cangzhang/champ-r/issues/64)

## Development

### Prerequisite

- [Node.js](https://nodejs.org/en/) >= 14
- [yarn](https://classic.yarnpkg.com/lang/en/)

### Install dependencies

```console
yarn
```

### Start

```console
yarn start
```

### Build

```console
yarn build:local
```


## Stargazers over time

[![Stargazers over time](https://starchart.cc/GeorgeV220/champ-r.svg)](https://starchart.cc/GeorgeV220/champ-r)
