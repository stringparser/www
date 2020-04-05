type Hash<Key, Value = string> = {
  [key: Key]: Value;
};

type CSSObject = Hash<string, CSSStyleDeclaration>;