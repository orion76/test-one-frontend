interface JSON5 {
  parse(data: string);

  stringify(data: any);
}

declare const JSON5: JSON5;
