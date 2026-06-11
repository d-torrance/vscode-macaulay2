import {
  Executable,
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
} from "vscode-languageclient/node";

const serverOptions: Executable = {
  command: "M2-language-server",
};

const clientOptions: LanguageClientOptions = {
  documentSelector: [
    { scheme: "file", language: "macaulay2" },
    { scheme: "untitled", language: "macaulay2" },
  ],
};

export function configureLanguageServer(command: string, args?: string[]) {
  serverOptions.command = command;
  serverOptions.args = args;
}

export default new LanguageClient(
  "macaulay2-language-server",
  "Macaulay2 Language Server",
  serverOptions as ServerOptions,
  clientOptions,
);
