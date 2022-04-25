import createCache from "@emotion/cache";
import { EmotionCache } from "@emotion/react";

const getEmotionCache = (): EmotionCache => createCache({ key: "css", prepend: true });

export default getEmotionCache;
