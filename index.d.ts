declare function humanInterval(time?: string): number | undefined;

declare namespace humanInterval {
  type LanguageMap = Record<string, number>;

  let languageMap: LanguageMap;
}

export = humanInterval;
