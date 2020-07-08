export type Hash<Key, Value = string> = {
  [key: Key]: Value;
};

export type CSSObject = Hash<string, CSSStyleDeclaration>;