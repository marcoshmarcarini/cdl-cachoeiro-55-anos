import { spawn } from "child_process";

const rawArgs = process.argv.slice(2);
const filteredArgs = [];

for (let i = 0; i < rawArgs.length; i++) {
  if (rawArgs[i] === "--host") {
    filteredArgs.push("-H");
    if (rawArgs[i + 1] && !rawArgs[i + 1].startsWith("-")) {
      filteredArgs.push(rawArgs[i + 1]);
      i++;
    }
  } else if (rawArgs[i].startsWith("--host=")) {
    filteredArgs.push("-H", rawArgs[i].split("=")[1]);
  } else {
    filteredArgs.push(rawArgs[i]);
  }
}

if (!filteredArgs.includes("-p") && !filteredArgs.includes("--port")) {
  filteredArgs.push("-p", "3000");
}
if (!filteredArgs.includes("-H") && !filteredArgs.includes("--hostname")) {
  filteredArgs.push("-H", "0.0.0.0");
}

const child = spawn("npx", ["next", "dev", ...filteredArgs], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => {
  process.exit(code || 0);
});
