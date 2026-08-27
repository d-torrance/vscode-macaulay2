export type WebviewOutputMode = "webapp" | "standard";

// WebApp puts its record-separator newline between tagged HTML fragments. Keep
// that newline in the container that owns those fragments so DOM order matches
// the byte stream and preformatted whitespace can render it exactly.
export function shouldAppendProtocolNewlineToPreviousOutput(
  text: string,
  previousIsOutputContainer: boolean,
  previousIsStandardOutput: boolean,
  outputMode: WebviewOutputMode,
): boolean {
  return (
    /^\n+$/.test(text) &&
    previousIsOutputContainer &&
    previousIsStandardOutput === (outputMode === "standard")
  );
}
