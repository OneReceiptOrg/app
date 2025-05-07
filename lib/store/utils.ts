import type { StoreState } from "./index";
import { templateMappings } from "./mappings";

export function buildRequestBody(
  template: string,
  state: StoreState
): Record<string, any> | null {
  const mapping = templateMappings[template];
  if (!mapping) {
    console.error(`No mapping found for template: ${template}`);
    return null;
  }

  const requestBody: Record<string, any> = { template };

  for (const apiKey in mapping) {
    const stateKeyOrSelector = mapping[apiKey];

    if (typeof stateKeyOrSelector === "function") {
      requestBody[apiKey] = stateKeyOrSelector(state);
    } else if (
      typeof stateKeyOrSelector === "string" &&
      stateKeyOrSelector in state
    ) {
      requestBody[apiKey] = state[stateKeyOrSelector as keyof StoreState];
    } else {
      console.warn(
        `Invalid mapping for API key "${apiKey}" in template "${template}"`
      );
    }
  }

  return requestBody;
}
