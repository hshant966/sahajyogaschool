import { TranslationShape } from "./types";
import { en } from "./en";
import { mr } from "./mr";
import { hi } from "./hi";
import { bn } from "./bn";
import { te } from "./te";
import { ta } from "./ta";
import { ur } from "./ur";
import { gu } from "./gu";
import { kn } from "./kn";
import { or } from "./or";
import { ml } from "./ml";
import { pa } from "./pa";
import { as } from "./as";
import { mai } from "./mai";
import { sa } from "./sa";
import { kok } from "./kok";
import { ne } from "./ne";
import { sd } from "./sd";
import { doi } from "./doi";
import { mni } from "./mni";
import { sat } from "./sat";
import { ks } from "./ks";
import { brx } from "./brx";

export type Lang =
  | "en"
  | "mr"
  | "hi"
  | "bn"
  | "te"
  | "ta"
  | "ur"
  | "gu"
  | "kn"
  | "or"
  | "ml"
  | "pa"
  | "as"
  | "mai"
  | "sa"
  | "kok"
  | "ne"
  | "sd"
  | "doi"
  | "mni"
  | "sat"
  | "ks"
  | "brx";

export const translations: Record<Lang, TranslationShape> = {
  en,
  mr,
  hi,
  bn,
  te,
  ta,
  ur,
  gu,
  kn,
  or,
  ml,
  pa,
  as,
  mai,
  sa,
  kok,
  ne,
  sd,
  doi,
  mni,
  sat,
  ks,
  brx,
};

export type { TranslationShape };
